import type { AuditResult } from "@/types/audit";
import { cn } from "@/lib/utils";

const URGENCY_CONFIG = {
  critical: { label: "Krytyczne", className: "text-danger" },
  high: { label: "Wysokie", className: "text-warning" },
  medium: { label: "Średnie", className: "text-amber" },
};

export function TopPriorities({
  priorities,
}: {
  priorities: AuditResult["topPriorities"];
}) {
  return (
    <section className="rounded-2xl border-l-4 border-amber bg-amber-light p-6 md:p-8">
      <h2 className="text-2xl font-bold text-navy md:text-3xl">
        Trzy najważniejsze priorytety na najbliższe 90 dni
      </h2>
      <p className="mt-2 text-navy/70">
        Zaczynaj od tych, jeśli budżetu czasu jest mało.
      </p>

      <div className="mt-6 space-y-5">
        {priorities.map((priority, index) => {
          const urgency = URGENCY_CONFIG[priority.urgency];
          return (
            <div key={`${priority.dimension}-${index}`} className="flex gap-4 rounded-xl bg-white p-5">
              <div className="w-10 flex-shrink-0 text-3xl font-bold leading-none text-amber">
                {index + 1}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded bg-navy px-2 py-0.5 font-mono text-xs text-white">
                    {priority.dimension}
                  </span>
                  <span className={cn("text-sm font-medium", urgency.className)}>
                    {urgency.label}
                  </span>
                </div>
                <p className="leading-relaxed text-navy">{priority.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
