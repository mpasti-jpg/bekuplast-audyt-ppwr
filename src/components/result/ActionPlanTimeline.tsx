"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { CategoryCode } from "@/types/audit";
import { ACTION_PLANS } from "@/content/action-plans";
import { analytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function ActionPlanTimeline({ category }: { category: CategoryCode }) {
  const plan = ACTION_PLANS[category];
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  return (
    <section className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <h2 className="text-2xl font-bold text-navy md:text-3xl">
        {plan.headline}
      </h2>
      <p className="mt-4 leading-relaxed text-navy/80">{plan.intro}</p>

      <div className="mt-8 space-y-4">
        {plan.phases.map((phase, index) => {
          const isExpanded = expandedPhase === index;
          return (
            <div key={phase.title} className="overflow-hidden rounded-xl border border-border">
              <button
                type="button"
                onClick={() => {
                  setExpandedPhase(isExpanded ? null : index);
                  if (!isExpanded) {
                    analytics.track("result_section_expanded", {
                      section_name: `action_plan_m${index + 1}`,
                    });
                  }
                }}
                className="flex w-full cursor-pointer items-center justify-between gap-4 bg-paper p-5 text-left transition-colors hover:bg-amber-light/40 focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2"
                aria-expanded={isExpanded}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber font-bold text-white">
                    M{index + 1}
                  </span>
                  <div>
                    <p className="font-bold text-navy">{phase.title}</p>
                    <p className="mt-0.5 text-sm text-text-muted">
                      Tygodnie {phase.weeks}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-amber transition-transform",
                    isExpanded && "rotate-180",
                  )}
                />
              </button>

              {isExpanded && (
                <div className="bg-white p-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border text-xs uppercase tracking-wider text-text-muted">
                          <th className="pb-2 pr-3 text-left">Tydz.</th>
                          <th className="pb-2 pr-3 text-left">Zadanie</th>
                          <th className="hidden pb-2 pr-3 text-left md:table-cell">
                            Odpowiedzialny
                          </th>
                          <th className="hidden pb-2 text-left lg:table-cell">
                            Wynik
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {phase.tasks.map((task) => (
                          <tr key={`${phase.title}-${task.week}`} className="align-top">
                            <td className="py-3 pr-3 font-mono font-bold text-amber">
                              {task.week}
                            </td>
                            <td className="py-3 pr-3 text-navy">{task.task}</td>
                            <td className="hidden py-3 pr-3 text-xs text-navy/70 md:table-cell">
                              {task.owner}
                            </td>
                            <td className="hidden py-3 text-xs italic text-text-muted lg:table-cell">
                              {task.output}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-paper p-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-navy">
            Szacowany koszt
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-navy/80">
            {plan.estimatedCost}
          </p>
        </div>
        <div className="rounded-xl bg-paper p-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-navy">
            Najczęstsze pułapki
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-navy/80">
            {plan.trapsCallout}
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm italic leading-relaxed text-navy/80">
        {plan.closingNote}
      </p>
    </section>
  );
}
