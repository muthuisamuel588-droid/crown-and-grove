import Link from "next/link";
import { whatsappUrl } from "@/lib/data";

export default function CTABand({
  title = "Ready to build something worth talking about?",
  description = "Tell us what you are working on. We will come back with a clear scope, a fair quote and a practical next step — no pressure.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-accent-500/20 bg-gradient-to-br from-brand-800 via-ink-800 to-ink-900 py-16 sm:py-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent-500/15 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">{description}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary">Request a free quote <span aria-hidden>→</span></Link>
          <a href="mailto:crownandgroveoff@gmail.com" className="btn-outline">Email us directly</a>
          <a href={whatsappUrl("Hello Crown & Grove, I would like a quote.")} target="_blank" rel="noopener noreferrer" className="btn-outline">Message us on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
