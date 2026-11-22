import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABand from "@/components/CTABand";
import { posts } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 pb-16 pt-16 sm:px-8 sm:pt-20">
        <Link href="/blog" className="text-sm font-medium text-accent-400 hover:underline">← Back to resources</Link>
        <div className="mt-8 flex items-center gap-3 text-xs">
          <span className="rounded-full bg-accent-500/15 px-3 py-1 font-semibold text-accent-400">{post.category}</span>
          <span className="text-slate-500">{new Date(post.date).toLocaleDateString("en-KE", { dateStyle: "long" })}</span>
        </div>
        <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">{post.excerpt}</p>
        <div className="mt-10 h-px bg-gradient-to-r from-accent-500/60 to-transparent" />
        <div className="mt-10 space-y-6">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-[1.85] text-slate-300">{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-accent-500/25 bg-accent-500/[0.06] p-6">
          <p className="text-sm font-bold text-white">Want us to handle this for you?</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Crown & Grove builds the brands, websites and systems these articles talk about — and keeps them running afterwards.
          </p>
          <Link href="/contact" className="btn-primary mt-5 text-sm">Talk to us <span aria-hidden>→</span></Link>
        </div>
      </article>

      <section className="border-t border-white/10 bg-ink-900/50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-white">Keep reading</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="card-surface rounded-2xl p-6 transition-all duration-200">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-400">{item.category}</p>
                <h3 className="mt-3 font-bold leading-snug text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
