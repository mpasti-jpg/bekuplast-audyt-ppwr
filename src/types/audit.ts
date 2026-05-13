import type { IndustryCode, ScaleCode } from './industry';

/**
 * Kody wymiarów scoringu (5 wymiarów).
 */
export type DimensionCode = 'D1' | 'D2' | 'D3' | 'D4' | 'D5';

export const DIMENSION_NAMES: Record<DimensionCode, string> = {
  D1: 'Świadomość regulacyjna',
  D2: 'Inwentaryzacja opakowań',
  D3: 'Strategia reuse / RTP',
  D4: 'Compliance i dokumentacja',
  D5: 'Zarządzanie i budżet',
};

export const DIMENSION_WEIGHTS: Record<DimensionCode, number> = {
  D1: 0.10,
  D2: 0.20,
  D3: 0.30,
  D4: 0.30,
  D5: 0.10,
};

/**
 * Pojedyncza odpowiedź użytkownika.
 * - dla Q1, Q1a, Q2, Q3, Q5, Q6, Q8, Q9, Q10: value = string (id opcji)
 * - dla Q4: value = string[] (multi-select)
 * - dla Q7: value = number (slider 0-100)
 * - dontKnow: true gdy user wybrał opcję "Nie wiem" (jeśli dostępna)
 */
export interface AuditAnswer {
  questionId: string;
  value: string | string[] | number;
  dontKnow?: boolean;
  answeredAt: string; // ISO 8601
}

/**
 * Kategoria wynikowa.
 */
export type CategoryCode =
  | 'critical_gap'    // 0-24
  | 'low_readiness'   // 25-44
  | 'medium_readiness' // 45-64
  | 'advanced_readiness' // 65-84
  | 'full_readiness';    // 85-100

/**
 * Pełny stan audytu — używany w zustand store + persist.
 */
export interface AuditState {
  audit_id: string;       // nanoid(12)
  version: string;        // '1.0'
  started_at: string;     // ISO 8601
  completed_at: string | null;
  current_step: number;   // 1..10 (Q1a NIE zwiększa step)
  answers: Record<string, AuditAnswer>;

  // Pochodne (computed po Q1/Q1a/Q2 — cached dla UX)
  industry: IndustryCode | null;
  scale: ScaleCode | null;
}

/**
 * Wynik scoringu — generowany po Q10.
 */
export interface AuditResult {
  audit_id: string;
  industry: IndustryCode;
  scale: ScaleCode;
  overall_score: number;  // 0-100, rounded
  category: CategoryCode;
  dimensions: Record<DimensionCode, {
    score: number;        // 0-100
    weight: number;       // 0-1
    contribution: number; // score * weight
  }>;
  redFlags: string[];     // lista IDs (np. ['rf_auto_no_klt', 'rf_universal_no_inventory'])
  topPriorities: Array<{
    dimension: DimensionCode;
    text: string;
    urgency: 'critical' | 'high' | 'medium';
  }>;
  recommendedProducts: string[]; // IDs produktów z product-mapping.ts
  generatedAt: string; // ISO 8601
}

/**
 * Pełen kontekst, który serializujemy do localStorage i wysyłamy do API.
 */
export interface AuditPayload {
  state: AuditState;
  result: AuditResult | null;
}
