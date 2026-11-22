"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { projects, type Project } from "@/lib/data";

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-surface group overflow-hidden rounded-2xl transition-all duration-200">
      <div className={`relative h-44 bg-gradient-to-br ${project.accent} p-6`}>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative flex h-full flex-col justify-between">
          <span className="w-fit rounded-full bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
            {project.category}
          </span>
          <span className="text-4xl font-black text-white/25 transition-transform duration-300 group-hover:translate-x-1">
            CROWN & GROVE
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-medium text-slate-500">{project.client}</p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.summary}</p>
        <div className="mt-5 flex items-start gap-2 border-t border-white/10 pt-4">
          <span className="mt-0.5 text-accent-400">↗</span>
          <p className="text-xs leading-relaxed text-slate-300">{project.result}</p>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState("All");
  const shown = (active === "All" ? projects : projects.filter((p) => p.category === active)).slice(0, limit);

  return (
    <div>
      {!limit && (
        <div className="mb-9 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === filter
                  ? "border-accent-500 bg-accent-500/15 text-accent-400"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((project, i) => (
          <Reveal key={project.title} delay={(i % 6) * 70}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
