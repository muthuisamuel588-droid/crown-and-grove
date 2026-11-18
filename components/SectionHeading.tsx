import Link from "next/link";

export default function SectionHeading({
  label,
  title,
  description,
  href,
  linkLabel = "View all",
}: {
  label: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="section-label">{label}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        {description && <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>}
      </div>
      {href && (
        <Link href={href} className="btn-outline shrink-0 text-sm">
          {linkLabel} <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
