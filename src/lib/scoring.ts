import type {
  AuditAnswer,
  AuditResult,
  AuditState,
  CategoryCode,
  DimensionCode,
} from "@/types/audit";
import type { IndustryCode, ScaleCode } from "@/types/industry";
import { ACTION_PLANS } from "@/content/action-plans";
import { INDUSTRY_RED_FLAGS } from "@/content/industry-red-flags";
import { QUESTIONS, type QuestionConfig } from "@/content/questions";
import { getProductRecommendations } from "@/lib/product-mapping";
import {
  CATEGORY_THRESHOLDS,
  DIMENSION_WEIGHTS,
  QUESTION_WEIGHTS_IN_DIMENSION,
} from "@/lib/scoring-config";

const DIMENSIONS: DimensionCode[] = ["D1", "D2", "D3", "D4", "D5"];

export function scoreQuestion(
  question: QuestionConfig,
  answer: AuditAnswer | undefined,
): number {
  if (!answer || answer.dontKnow) return 0;

  if (question.type === "single" || question.type === "cards_single") {
    const option = question.options.find((item) => item.id === answer.value);
    return option?.score ?? 0;
  }

  if (question.type === "cards_multi") {
    const values = Array.isArray(answer.value) ? answer.value : [];
    return Math.min(
      100,
      values.reduce((sum, value) => {
        const option = question.options.find((item) => item.id === value);
        return sum + (option?.score ?? 0);
      }, 0),
    );
  }

  if (question.type === "slider") {
    const value = typeof answer.value === "number" ? answer.value : 0;
    if (value <= 10) return 10;
    if (value <= 25) return 30;
    if (value <= 40) return 50;
    if (value <= 60) return 70;
    return 100;
  }

  return 0;
}

export function scoreDimension(
  dimension: DimensionCode,
  answers: Record<string, AuditAnswer>,
): number {
  const score = QUESTIONS.filter((question) => question.dimension === dimension)
    .map((question) => {
      const questionScore = scoreQuestion(question, answers[question.id]);
      const weight = QUESTION_WEIGHTS_IN_DIMENSION[question.id] ?? 1;
      return questionScore * weight;
    })
    .reduce((sum, value) => sum + value, 0);

  return Math.round(Math.min(100, Math.max(0, score)));
}

export function scoreOverall(
  dimensionScores: Record<DimensionCode, number>,
): number {
  const score = DIMENSIONS.reduce(
    (sum, dimension) =>
      sum + (dimensionScores[dimension] ?? 0) * DIMENSION_WEIGHTS[dimension],
    0,
  );

  return Math.round(Math.min(100, Math.max(0, score)));
}

export function getCategoryCode(overallScore: number): CategoryCode {
  for (const [category, [min, max]] of Object.entries(CATEGORY_THRESHOLDS)) {
    if (overallScore >= min && overallScore < max) {
      return category as CategoryCode;
    }
  }

  return "full_readiness";
}

export function calculateResult(params: {
  auditId: string;
  industry: IndustryCode;
  scale: ScaleCode;
  answers: Record<string, AuditAnswer>;
}): AuditResult {
  const dimensionsList = DIMENSIONS.map((code) => {
    const score = scoreDimension(code, params.answers);
    const weight = DIMENSION_WEIGHTS[code];
    return {
      code,
      score,
      weight,
      contribution: score * weight,
    };
  });

  const dimensionScores = Object.fromEntries(
    dimensionsList.map((item) => [item.code, item.score]),
  ) as Record<DimensionCode, number>;

  const overall_score = scoreOverall(dimensionScores);
  const category = getCategoryCode(overall_score);
  const actionPlan = ACTION_PLANS[category];
  const weakestDimensions = [...dimensionsList]
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map((item) => item.code);

  let topPriorities = actionPlan.topPriorities
    .filter((priority) => weakestDimensions.includes(priority.dimension))
    .slice(0, 3);

  if (topPriorities.length < 3) {
    const existing = new Set(topPriorities);
    topPriorities = [
      ...topPriorities,
      ...actionPlan.topPriorities.filter((priority) => !existing.has(priority)),
    ].slice(0, 3);
  }

  const dimensions = Object.fromEntries(
    dimensionsList.map((item) => [
      item.code,
      {
        score: item.score,
        weight: item.weight,
        contribution: item.contribution,
      },
    ]),
  ) as AuditResult["dimensions"];

  const redFlags = (INDUSTRY_RED_FLAGS[params.industry] ?? [])
    .filter((flag) => dimensionScores[flag.dimension] < flag.threshold)
    .map((_, index) => `rf_${params.industry}_${index}`);

  return {
    audit_id: params.auditId,
    industry: params.industry,
    scale: params.scale,
    overall_score,
    category,
    dimensions,
    redFlags,
    topPriorities: topPriorities.map((priority) => ({
      dimension: priority.dimension,
      text: priority.text,
      urgency: priority.urgency === "low" ? "medium" : priority.urgency,
    })),
    recommendedProducts: getProductRecommendations(
      params.industry,
      params.scale,
    ).map((product) => product.productId),
    generatedAt: new Date().toISOString(),
  };
}

export function calculateAuditResult(
  state: AuditState,
  answers: Record<string, AuditAnswer> = state.answers,
): AuditResult | null {
  if (!state.audit_id || !state.industry || !state.scale) return null;

  return calculateResult({
    auditId: state.audit_id,
    industry: state.industry,
    scale: state.scale,
    answers,
  });
}
