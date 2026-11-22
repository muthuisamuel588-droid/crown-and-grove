import type { Metadata } from "next";
import Link from "next/link";
import { contact, services, whatsappUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Brief received",
  description: "Your inquiry has been sent to Crown & Grove.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: false },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const { service: requested } = await searchParams;
  const serviceParam = Array.isArray(requested) ? requested[0] : requested;
  const service = services.some((s) => s.name === serviceParam)
    ? (serviceParam as string)
    : serviceParam === "Not sure yet"
      ? "Not sure yet"
      : "";

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <div className="card-surface rounded-2xl p-8 text-center sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/15 text-3xl text-accent-400">✓</div>
          <p className="section-label mt-6">Brief received</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Thank you for <span className="text-gradient-animated">reaching out.</span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            {service
              ? `Your brief about ${service} is with us. `
              : "Your brief is with us. "}
            We will review it and reply within one business day with a clear next step.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            Need to reach us sooner?{" "}
            <a
              href={whatsappUrl("Hello Crown & Grove, I just sent an inquiry. What happens next?")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-400 hover:underline"
            >
              Message us on WhatsApp
            </a>{" "}
            or write to{" "}
            <a href={`mailto:${contact.email}`} className="text-accent-400 hover:underline">
              {contact.email}
            </a>
            .
          </p>
          <Link href="/services" className="btn-outline mt-8 text-sm">
            Explore our services
          </Link>
        </div>
      </div>
    </section>
  );
}
