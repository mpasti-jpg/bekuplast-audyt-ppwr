// @ts-nocheck
import type { DimensionCode } from '@/types/audit';
import type { IndustryCode } from '@/types/industry';

export const INDUSTRY_BENCHMARKS: Record<IndustryCode, Record<DimensionCode, number>> = {
  automotive: {
    D1: 60, D2: 50, D3: 35, D4: 40, D5: 55,
  },
  beverages: {
    D1: 65, D2: 60, D3: 55, D4: 45, D5: 50,
  },
  food: {
    D1: 50, D2: 45, D3: 25, D4: 40, D5: 45,
  },
  agriculture: {
    D1: 35, D2: 35, D3: 30, D4: 25, D5: 30,
  },
  pharma: {
    D1: 70, D2: 55, D3: 30, D4: 55, D5: 60,
  },
  ecommerce_b2c: {
    D1: 55, D2: 40, D3: 25, D4: 35, D5: 40,
  },
  ecommerce_b2b: {
    D1: 55, D2: 50, D3: 40, D4: 40, D5: 50,
  },
  retail_fmcg: {
    D1: 60, D2: 45, D3: 30, D4: 40, D5: 50,
  },
  intralogistics: {
    D1: 50, D2: 55, D3: 60, D4: 35, D5: 45,
  },
  industrial: {
    D1: 45, D2: 40, D3: 30, D4: 35, D5: 40,
  },
  other: {
    D1: 50, D2: 45, D3: 35, D4: 40, D5: 45,
  },
};

/**
 * Helper: porównanie do benchmarku ("przewyższasz o X pkt" / "zostajesz w tyle o X pkt").
 */
export function compareToBenchmark(
  industry: IndustryCode,
  dimension: DimensionCode,
  userScore: number
): { delta: number; label: string } {
  const benchmark = INDUSTRY_BENCHMARKS[industry][dimension];
  const delta = userScore - benchmark;
  let label: string;
  if (delta >= 10) label = `+${delta} pkt nad średnią branży`;
  else if (delta >= -5) label = 'na poziomie średniej branży';
  else label = `${delta} pkt poniżej średniej`;
  return { delta, label };
}
