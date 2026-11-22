import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Our Work",
  description: "A selection of brands, websites, POS systems and campaigns designed and built by Crown & Grove.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-label">Portfolio</p>
          <h1 className="enter mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl" style={{ animationDelay: "120ms" }}>
            Work that <span className="text-gradient-animated">earns its place.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            A look at what we have designed, built and grown. Client names are withheld where confidentiality was requested, and early R&D concepts are labelled as such — the work speaks for itself.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <PortfolioGrid />
      </section>

      <CTABand title="Your project could be next" />
    </>
  );
}
