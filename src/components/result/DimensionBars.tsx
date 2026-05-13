import {
  BookOpen,
  Briefcase,
  ClipboardList,
  FileCheck2,
  Recycle,
} from "lucide-react";
import type { DimensionCode } from "@/types/audit";
import { DIMENSION_NAMES } from "@/types/audit";
import { compareBenchmark } from "@/lib/result-helpers";
import { cn } from "@/lib/utils";

type DimensionDataPoint = {
  dimension: string;
  code: string;
  score: number;
  benchmark: number;
};

const DIMENSION_ICONS = {
  D1: BookOpen,
  D2: ClipboardList,
  D3: Recycle,
  D4: FileCheck2,
  D5: Briefcase,
};

export function DimensionBars({ data }: { data: DimensionDataPoint[] }) {
  return (
    <section className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <h2 className="text-2xl font-bold text-navy md:text-3xl">
        Wynik per wymiar vs benchmark branżowy
      </h2>

      <div className="mt-6 space-y-5">
        {data.map((item) => {
          const dimension = item.code as DimensionCode;
          const Icon = DIMENSION_ICONS[dimension];
          const comparison = compareBenchmark(item.score, item.benchmark);

          return (
            <div key={item.code} className="space-y-2">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="flex min-w-0 items-center gap-2">
                  <Icon className="h-5 w-5 flex-shrink-0 text-amber" />
                  <span className="font-semibold text-navy">
                    {DIMENSION_NAMES[dimension]}
                  </span>
                </div>
                <span
                  className={cn(
                    "text-sm font-medium",
                    comparison.direction === "above" && "text-success",
                    comparison.direction === "below" && "text-danger",
                    comparison.direction === "same" && "text-text-muted",
                  )}
                >
                  {comparison.label}
                </span>
              </div>

              <div className="relative h-3 overflow-hidden rounded-full bg-paper">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-text-muted/30"
                  style={{ width: `${item.benchmark}%` }}
                />
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-amber transition-all duration-700 ease-out"
                  style={{ width: `${item.score}%` }}
                />
              </div>

              <div className="flex justify-between text-xs text-text-muted">
                <span>
                  Twój: <strong className="text-amber">{item.score}</strong>
                </span>
                <span>
                  Średnia branży: <strong>{item.benchmark}</strong>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
