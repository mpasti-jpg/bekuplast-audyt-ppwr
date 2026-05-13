import type { DimensionCode } from '@/types/audit';

/**
 * Wagi 5 wymiarów w ogólnym wyniku (sumują się do 1.0).
 * D3 (strategia reuse) i D4 (compliance) są kluczowe — łącznie 60% wyniku.
 */
export const DIMENSION_WEIGHTS: Record<DimensionCode, number> = {
  D1: 0.10,  // Świadomość regulacyjna
  D2: 0.20,  // Inwentaryzacja opakowań
  D3: 0.30,  // Strategia reuse / RTP
  D4: 0.30,  // Compliance i dokumentacja
  D5: 0.10,  // Zarządzanie i budżet
};

/**
 * Wagi pytań w obrębie wymiaru — wymiary z 2 pytaniami mają wagi sumujące się do 1.0.
 */
export const QUESTION_WEIGHTS_IN_DIMENSION: Record<string, number> = {
  Q3: 1.0,           // D1 ma tylko Q3
  Q4: 0.5,  Q5: 0.5, // D2 = Q4 + Q5 (równe)
  Q6: 0.6,  Q7: 0.4, // D3 = Q6 (stan obecny) + Q7 (plan inwestycyjny), Q6 ważniejsze
  Q8: 0.7,  Q9: 0.3, // D4 = Q8 (DoC) + Q9 (DPP), Q8 ważniejsze
  Q10: 1.0,          // D5 ma tylko Q10
};

/**
 * Progi kategorii — granice (lower-inclusive, upper-exclusive).
 */
export const CATEGORY_THRESHOLDS: Record<string, [number, number]> = {
  critical_gap: [0, 25],
  low_readiness: [25, 45],
  medium_readiness: [45, 65],
  advanced_readiness: [65, 85],
  full_readiness: [85, 101],
};
