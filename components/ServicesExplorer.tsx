"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { categories, pricing, services, type Service } from "@/lib/data";

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-surface group flex h-full flex-col rounded-2xl p-6 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-500/25 bg-brand-600/20 text-xl text-accent-400">
          {service.icon}
        </div>
        <div className="flex flex-col items-end gap-1.5">
          {service.featured && (
            <span className="rounded-full border border-accent-500/40 bg-accent-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-400">
              Start here
            </span>
          )}
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            {service.category}
          </span>
        </div>
      </div>
      <h3 className="mt-5 text-lg font-bold leading-snug text-white">{service.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{service.description}</p>
      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Launch rate</p>
          <p className="mt-1 text-sm font-bold text-accent-400">{service.launch}</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Standard rate</p>
          <p className="mt-1 text-sm font-bold text-white">{service.standard}</p>
        </div>
      </div>
      {service.monthly && (
        <div className="mt-4 rounded-lg border border-accent-500/20 bg-brand-600/10 px-3 py-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-accent-400">Monthly option</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-300">{service.monthly}</p>
        </div>
      )}
      <Link
        href={`/contact?service=${encodeURIComponent(service.name)}`}
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-accent-500/30 px-4 py-2 text-sm font-semibold text-accent-400 transition-colors hover:bg-accent-500/10"
      >
        Request a quote for this <span aria-hidden>→</span>
      </Link>
    </article>
  );
}

export default function ServicesExplorer() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <div>
      <div className="mb-9 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === category
                ? "border-accent-500 bg-accent-500/15 text-accent-400"
                : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service, i) => (
          <Reveal key={service.name} delay={(i % 6) * 60}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-xs leading-relaxed text-slate-500">
        Launch rates apply to the first {pricing.launchClientLimit} clients, or until the date on your quotation. Standard rates apply afterwards. Quote-based items are priced per order. Final fees, deliverables and timelines are confirmed in a written quote. Ad spend, printing, hosting, third-party licences and transaction charges are excluded unless stated.
      </p>
    </div>
  );
}
