export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee select-none" aria-hidden="true">
      {/* Two identical groups; each has trailing padding equal to the gap so the -50% loop is seamless. */}
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center gap-10 pr-10">
            {items.map((item) => (
              <span key={item} className="flex shrink-0 items-center gap-10">
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400">{item}</span>
                <span className="text-lg text-accent-500">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
