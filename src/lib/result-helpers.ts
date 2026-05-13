import type { CategoryCode, DimensionCode } from "@/types/audit";
import type { IndustryCode } from "@/types/industry";
import { ACTION_PLANS } from "@/content/action-plans";
import { CATEGORIES } from "@/content/categories";
import { GLOSSARY } from "@/content/glossary";
import { INDUSTRY_RED_FLAGS } from "@/content/industry-red-flags";
import { INDUSTRY_SECTIONS } from "@/content/industry-sections";
import { INDUSTRY_BENCHMARKS } from "@/lib/benchmarks";

export function getIndustrySection(industry: IndustryCode) {
  return INDUSTRY_SECTIONS[industry];
}

export function getCategoryConfig(category: CategoryCode) {
  return CATEGORIES[category];
}

export function getActionPlan(category: CategoryCode) {
  return ACTION_PLANS[category];
}

export function getActiveRedFlags(
  industry: IndustryCode,
  dimensionScores: Record<DimensionCode, number>,
) {
  const flags = INDUSTRY_RED_FLAGS[industry] ?? [];
  return flags.filter((flag) => dimensionScores[flag.dimension] < flag.threshold);
}

export function getGlossary() {
  return GLOSSARY;
}

export function getBenchmark(
  industry: IndustryCode,
  dimension: DimensionCode,
): number {
  return INDUSTRY_BENCHMARKS[industry]?.[dimension] ?? 50;
}

const RADAR_LABELS: Record<DimensionCode, string> = {
  D1: "Świadomość",
  D2: "Inwentaryzacja",
  D3: "Reuse / RTP",
  D4: "Compliance",
  D5: "Zarządzanie",
};

export function buildRadarData(
  industry: IndustryCode,
  dimensions: Record<DimensionCode, { score: number }>,
) {
  return (Object.keys(RADAR_LABELS) as DimensionCode[]).map((code) => ({
    dimension: RADAR_LABELS[code],
    code,
    score: dimensions[code]?.score ?? 0,
    benchmark: getBenchmark(industry, code),
  }));
}

export function compareBenchmark(
  userScore: number,
  benchmark: number,
): { delta: number; label: string; direction: "above" | "same" | "below" } {
  const delta = userScore - benchmark;
  if (delta >= 5) {
    return {
      delta,
      label: `+${delta} pkt nad średnią branży`,
      direction: "above",
    };
  }
  if (delta <= -5) {
    return {
      delta,
      label: `${delta} pkt poniżej średniej`,
      direction: "below",
    };
  }
  return {
    delta,
    label: "na poziomie średniej branży",
    direction: "same",
  };
}
