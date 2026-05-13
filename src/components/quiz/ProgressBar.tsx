"use client";

import { COPY } from "@/content/ui-strings";
import { useAuditFlow } from "@/hooks/useAuditFlow";

export function ProgressBar() {
  const { progressStep, totalSteps } = useAuditFlow();
  const percent = Math.min(100, (progressStep / totalSteps) * 100);

  return (
    <div className="sticky top-[57px] z-40 border-b border-border bg-paper/95 backdrop-blur md:top-[65px]">
      <div className="mx-auto max-w-3xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-navy/70">
            {COPY.quiz.header.progressLabel
              .replace("{current}", String(progressStep))
              .replace("{total}", String(totalSteps))}
          </span>
          <span className="text-text-muted">{Math.round(percent)}%</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
          <div
            className="h-full bg-amber transition-all duration-500 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
