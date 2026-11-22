import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.email(),
  phone: z.string().trim().max(60).optional().default(""),
  service: z.string().trim().min(1).max(160),
  budget: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().min(10, "Please tell us a little about your project").max(5000),
  consent: z.boolean().refine((v) => v === true, "Consent is required"),
});

const INQUIRY_TO_EMAIL = "crownandgroveoff@gmail.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://crown-and-grove.vercel.app";

async function deliverInquiry(data: z.infer<typeof inquirySchema>) {
  const res = await fetch(`https://formsubmit.co/ajax/${INQUIRY_TO_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Referer: `${siteUrl}/contact`,
      Origin: siteUrl,
    },
    body: JSON.stringify({
      _subject: `New inquiry: ${data.service} — ${data.name}`,
      _replyto: data.email,
      _template: "table",
      _captcha: "false",
      email: data.email,
      name: data.name,
      phone: data.phone || "Not provided",
      service: data.service,
      budget: data.budget || "Not provided",
      message: data.message,
      received: new Date().toISOString(),
    }),
  });

  const raw = await res.text();
  let result: { success?: string | boolean; message?: string } = {};
  try {
    result = JSON.parse(raw);
  } catch {
    // A non-JSON response still counts as a failure below.
  }

  // FormSubmit returns success:"false" with an "Activate Form" message on the
  // very first submission. That is expected while the mailbox is being verified.
  const activationPending = Boolean(result.message && /needs activation|activate form/i.test(result.message));

  if (activationPending) {
    console.info("FormSubmit activation is pending for", INQUIRY_TO_EMAIL);
    return;
  }

  const failed =
    !res.ok ||
    result.success === false ||
    result.success === "false" ||
    Boolean(result.message && /error|fail|invalid/i.test(result.message));

  if (failed) {
    throw new Error(`FormSubmit responded ${res.status}: ${raw.slice(0, 200)}`);
  }
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Please check your details." },
      { status: 400 },
    );
  }

  try {
    await deliverInquiry(parsed.data);
  } catch (error) {
    console.error("Inquiry email delivery failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: `We could not send your inquiry right now. Please email ${INQUIRY_TO_EMAIL}.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
