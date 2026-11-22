import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resources",
  description: "Practical guides on branding, websites, M-Pesa payments, maintenance and social media marketing from Crown & Grove.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-label">Blog & resources</p>
          <h1 className="enter mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl" style={{ animationDelay: "120ms" }}>
            Notes from <span className="text-gradient-animated">the studio.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Plain-English guides to help you make better decisions about your brand, your website and your marketing spend.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 4) * 90}>
            <Link href={`/blog/${post.slug}`} className="card-surface group flex h-full flex-col rounded-2xl p-7 transition-all duration-200">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-accent-500/15 px-3 py-1 font-semibold text-accent-400">{post.category}</span>
                <span className="text-slate-500">{new Date(post.date).toLocaleDateString("en-KE", { dateStyle: "medium" })}</span>
              </div>
              <h2 className="mt-5 text-xl font-bold leading-snug text-white group-hover:text-accent-400">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
              <p className="mt-6 text-sm font-semibold text-accent-400">Read article <span aria-hidden>→</span></p>
            </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand title="Have a question we haven't answered?" description="Ask us directly. We are happy to point you in the right direction, even if it is not a service we sell." />
    </>
  );
}
