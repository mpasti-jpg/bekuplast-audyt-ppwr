import type { AuditResult } from "@/types/audit";
import { CATEGORIES } from "@/content/categories";
import { INDUSTRY_LABELS, SCALE_LABELS } from "@/types/industry";

export function ScoreHeader({ result }: { result: AuditResult }) {
  const category = CATEGORIES[result.category];
  const industryName = INDUSTRY_LABELS[result.industry];
  const scaleName = SCALE_LABELS[result.scale];

  return (
    <header className="rounded-2xl bg-navy p-6 text-white shadow-xl md:p-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-amber">
        Twój wynik audytu PPWR
      </p>

      <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:gap-10">
        <div className="flex items-end gap-3">
          <span className="text-7xl font-bold leading-none text-amber md:text-8xl">
            {result.overall_score}
          </span>
          <span className="pb-2 text-xl text-white/60">/100</span>
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
            <span aria-hidden="true">{category.emoji}</span>
            <span>{category.headline}</span>
          </h1>
          <p className="mt-1 text-lg text-white/80">{category.tagline}</p>
          <p className="mt-3 text-sm text-white/60">
            {industryName} • {scaleName}
          </p>
        </div>
      </div>

      <p className="mt-6 border-t border-white/10 pt-6 leading-relaxed text-white/80">
        {category.longDescription}
      </p>
    </header>
  );
}
