import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTABand from "@/components/CTABand";
import Marquee from "@/components/Marquee";
import PortfolioGrid from "@/components/PortfolioGrid";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { posts, services } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const stats = [
  { value: services.length, suffix: "", label: "Services offered" },
  { value: 2, suffix: "", label: "Rate options" },
  { value: 1, suffix: "", label: "Shared point of contact" },
  { value: 100, suffix: "%", label: "Locally built" },
];

const process = [
  { step: "01", title: "Tell us your goal", text: "Send a brief by form, email or phone. We ask the questions that matter." },
  { step: "02", title: "Get a clear quote", text: "You receive a written scope, timeline and price with no hidden extras." },
  { step: "03", title: "We design & build", text: "You see progress, give feedback and approve each milestone." },
  { step: "04", title: "Launch & grow", text: "We hand over everything — and stay on if you want ongoing support." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image src="/crown-grove-mark.png" alt="" fill priority className="animate-drift object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/85 to-ink-950" />
          <div className="bg-grid absolute inset-0 opacity-50" />
        </div>
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32">
          <div className="max-w-3xl">
            <div className="enter inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-400" style={{ animationDelay: "80ms" }}>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-500" />
              Creative & technology studio · Kenya
            </div>
            <h1 className="enter mt-7 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl" style={{ animationDelay: "180ms" }}>
              <span className="text-gradient-animated">Where strategy</span>
              <br />
              <span className="text-white">meets creation.</span>
            </h1>
            <p className="enter mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl" style={{ animationDelay: "300ms" }}>
              We build brands, websites and software that work hard for Kenyan businesses — and back them with marketing that gets them seen.
            </p>
            <div className="enter mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "420ms" }}>
              <Link href="/contact" className="btn-primary text-base">Start a project <span aria-hidden>→</span></Link>
              <Link href="/portfolio" className="btn-outline text-base">See our work</Link>
            </div>
            <p className="enter mt-6 text-sm text-slate-500" style={{ animationDelay: "540ms" }}>Design. Build. Grow. &nbsp;·&nbsp; One team for all of it.</p>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-ink-950/60 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:grid-cols-4 sm:px-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border-b border-white/5 px-2 py-7 text-center sm:border-b-0">
                <p className="text-3xl font-black text-gradient">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-b border-white/10 bg-ink-900/70 py-4">
        <Marquee items={["Design", "Build", "Grow", "Branding", "Websites", "Software", "POS Systems", "Marketing"]} />
      </div>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          label="What we do"
          title="Everything your business needs to show up and sell"
          description="From a first logo to a full POS system, Crown & Grove is the single team behind your digital presence. Pick one service or the whole stack."
          href="/services"
          linkLabel="All services & rates"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <Reveal key={service.name} delay={i * 80}>
              <article className="card-surface h-full rounded-2xl p-6 transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-500/25 bg-brand-600/20 text-xl text-accent-400">{service.icon}</div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">{service.category}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{service.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
              <p className="mt-5 text-sm font-bold text-accent-400">
                {service.launch.startsWith("KSh") ? `From ${service.launch}` : service.launch}
              </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/10 bg-ink-900/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            label="How it works"
            title="A straightforward path from idea to launch"
            description="No jargon, no surprise invoices. Just a clear process and a team that keeps you in the loop."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <span className="text-4xl font-black text-accent-500/25">{item.step}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work preview */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          label="Selected work"
          title="Things we have built"
          description="A sample of the brands, stores and systems we have helped bring to life."
          href="/portfolio"
          linkLabel="View all projects"
        />
        <PortfolioGrid limit={3} />
      </section>

      {/* Why Crown & Grove */}
      <section className="border-y border-white/10 bg-ink-900/60 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative flex items-center justify-center">
              <div className="spin-slow pointer-events-none absolute h-[112%] w-[92%] rounded-[2.5rem] border border-dashed border-accent-500/20" />
              <div className="animate-float glow-pulse relative w-full rounded-3xl border border-accent-500/25 bg-gradient-to-br from-brand-800/60 to-ink-900 p-8">
                <Image src="/crown-grove-mark.png" alt="Crown & Grove glow logo" width={600} height={400} className="mx-auto h-auto w-full max-w-md object-contain" />
              </div>
            </div>
          </Reveal>
          <div>
            <p className="section-label">Why work with us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">One team. The whole picture.</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400">
              Most businesses juggle a designer, a developer and a marketer who never speak to each other. At Crown & Grove, the same people shape your brand, build the platform and run the campaigns — so everything stays consistent.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Clear written quotes with two rate options — launch rates for our first 10 clients, then standard rates.",
                "Local payment options including M-Pesa PayBill and account transfer.",
                "Ongoing care plans so your site and software stay healthy after launch.",
                "A single contact point across every service we offer.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-xs text-accent-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-outline mt-8 text-sm">More about Crown & Grove <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          label="Resources"
          title="Practical advice from the studio"
          description="Short, useful reads on branding, websites, payments and marketing — written for business owners, not developers."
          href="/blog"
          linkLabel="Read all articles"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
            <Link href={`/blog/${post.slug}`} className="card-surface group block h-full rounded-2xl p-6 transition-all duration-200">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-400">{post.category}</p>
              <h3 className="mt-3 text-lg font-bold leading-snug text-white group-hover:text-accent-400">{post.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
              <p className="mt-5 text-xs text-slate-500">{new Date(post.date).toLocaleDateString("en-KE", { dateStyle: "medium" })}</p>
            </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
