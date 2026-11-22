import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import PortfolioGrid from "@/components/PortfolioGrid";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Crown & Grove — our story, vision, mission, core values and a selection of the brands, websites, systems and campaigns we have delivered.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Clarity", text: "Clear briefs, deliverables, timelines and pricing — explained in plain language." },
  { title: "Creativity", text: "Original, purposeful work shaped around your audience and your goals." },
  { title: "Reliability", text: "Realistic commitments and consistent communication at every stage." },
  { title: "Collaboration", text: "You are involved at the important review and approval points." },
  { title: "Growth", text: "We measure our work by the value it is intended to create for your business." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <div className="absolute inset-0 opacity-25">
          <Image src="/crown-grove-mark.png" alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink-950" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="section-label">About Crown & Grove</p>
          <h1 className="enter mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl" style={{ animationDelay: "120ms" }}>
            Strategy and creation, <span className="text-gradient-animated">in one place.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Crown & Grove is a Kenyan studio helping businesses build a brand, a digital presence and the systems that keep them running.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="section-label">Our story</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Made for businesses that are actually building something</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
              <p>
                Crown & Grove was founded on a simple frustration: good local businesses were being let down by fragmented services. A logo from one person, a website from another, and social media handled by someone who had never seen either.
              </p>
              <p>
                We brought those pieces together. Today we design identities, build websites and custom software — including POS systems with M-Pesa and eTIMS workflows — and run the marketing that brings customers through the door.
              </p>
              <p>
                Whether you are launching with a tight budget or scaling an established operation, we offer two clear rate options so you can choose the level of scope that fits. The work is always documented, quoted and delivered by one accountable team.
              </p>
              <p className="text-sm text-slate-500">
                Our departments cover Software &amp; App Development, Graphic Design, Video Editing &amp; Production, Branding, Social Media Management and Marketing.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 90}>
                <div className="card-surface h-full rounded-2xl p-6">
                  <h3 className="text-base font-bold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-900/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading label="What we cover" title="Three disciplines, one studio" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { n: "01", t: "Design", d: "Logos, business cards, company profiles, social graphics and promotional video editing.", icon: "✦" },
              { n: "02", t: "Build", d: "Business websites, e-commerce stores, custom software, mobile apps and POS systems.", icon: "⌘" },
              { n: "03", t: "Grow", d: "Organic social management, paid campaigns, digital marketing and ongoing care plans.", icon: "◉" },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 110}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <div className="flex items-center justify-between">
                  <span className="text-5xl text-accent-500/30">{item.icon}</span>
                  <span className="text-3xl font-black text-white/10">{item.n}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.d}</p>
              </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-primary">Explore all services <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          label="Where we are going"
          title="Vision & mission"
          description="The thinking behind the work, and the standard we hold ourselves to on every project."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="card-surface h-full rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-400">Our vision</p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                To become a trusted creative and digital partner known for clear thinking, dependable delivery and work that helps clients move forward.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-surface h-full rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-400">Our mission</p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                To make quality creative, branding, software and digital marketing services accessible through collaborative service, transparent scope and practical solutions.
              </p>
            </div>
          </Reveal>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Brand promise: <span className="font-semibold text-slate-300">Where Strategy Meets Creation</span> &nbsp;·&nbsp; Working principle: <span className="font-semibold text-slate-300">Design. Build. Grow.</span>
        </p>
      </section>

      <section className="border-y border-white/10 bg-ink-900/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            label="Projects we have done"
            title="A sample of the work behind the promise"
            description="Brands, stores, systems and campaigns we have designed, built and grown. Client names are withheld where confidentiality was requested."
            href="/portfolio"
            linkLabel="See all projects"
          />
          <PortfolioGrid limit={3} />
        </div>
      </section>

      <CTABand title="Let's build the next chapter together" />
    </>
  );
}
