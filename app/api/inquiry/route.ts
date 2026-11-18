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

  const data = parsed.data;
  const text = [
    `New project inquiry from ${data.name}`,
    "",
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Service: ${data.service}`,
    `Budget: ${data.budget || "Not provided"}`,
    "",
    "Brief:",
    data.message,
    "",
    `Received: ${new Date().toISOString()}`,
  ].join("\n");

  // Deliver via Resend when configured. Otherwise log server-side (visible in
  // Vercel function logs) so no inquiry is silently lost.
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.INQUIRY_FROM_EMAIL || "Syntra Agency <onboarding@resend.dev>",
          to: ["agencysyntra@gmail.com"],
          reply_to: data.email,
          subject: `New inquiry: ${data.service} — ${data.name}`,
          text,
        }),
      });
      if (!res.ok) throw new Error(`Email provider responded ${res.status}`);
    } catch (error) {
      console.error("Inquiry email delivery failed:", error);
      return NextResponse.json(
        { ok: false, error: "We could not send your inquiry right now. Please email agencysyntra@gmail.com." },
        { status: 502 },
      );
    }
  } else {
    console.info("New Syntra Agency inquiry:\n" + text);
  }

  return NextResponse.json({ ok: true });
}
