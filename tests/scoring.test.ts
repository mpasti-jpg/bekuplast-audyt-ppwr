import { describe, expect, it } from "vitest";
import type { AuditAnswer, DimensionCode } from "@/types/audit";
import { QUESTIONS } from "@/content/questions";
import {
  calculateResult,
  getCategoryCode,
  scoreDimension,
  scoreOverall,
  scoreQuestion,
} from "@/lib/scoring";

const q3 = QUESTIONS.find((question) => question.id === "Q3")!;

describe("scoring - pojedyncze pytania", () => {
  it("zwraca 0 dla odpowiedzi Nie wiem", () => {
    const answer: AuditAnswer = {
      questionId: "Q3",
      value: "unknown",
      dontKnow: true,
      answeredAt: "2026-05-13",
    };

    expect(scoreQuestion(q3, answer)).toBe(0);
  });

  it("zwraca score z konfiguracji dla single-choice", () => {
    const answer: AuditAnswer = {
      questionId: "Q3",
      value: q3.options[0].id,
      dontKnow: false,
      answeredAt: "2026-05-13",
    };

    expect(scoreQuestion(q3, answer)).toBe(q3.options[0].score);
  });

  it("zwraca 0 jeśli brak odpowiedzi", () => {
    expect(scoreQuestion(q3, undefined)).toBe(0);
  });
});

describe("scoring - wymiary", () => {
  it("liczy D1 jako score z Q3", () => {
    const answers: Record<string, AuditAnswer> = {
      Q3: {
        questionId: "Q3",
        value: q3.options[0].id,
        dontKnow: false,
        answeredAt: "",
      },
    };

    expect(scoreDimension("D1", answers)).toBe(q3.options[0].score);
  });
});

describe("scoring - overall", () => {
  it("liczy overall jako średnią ważoną wymiarów", () => {
    const dimensions: Record<DimensionCode, number> = {
      D1: 70,
      D2: 50,
      D3: 60,
      D4: 40,
      D5: 80,
    };

    expect(scoreOverall(dimensions)).toBe(55);
  });

  it("zwraca skrajne wartości dla samych zer i setek", () => {
    expect(scoreOverall({ D1: 0, D2: 0, D3: 0, D4: 0, D5: 0 })).toBe(0);
    expect(scoreOverall({ D1: 100, D2: 100, D3: 100, D4: 100, D5: 100 })).toBe(100);
  });
});

describe("scoring - kategorie", () => {
  it("mapuje progi kategorii", () => {
    expect(getCategoryCode(0)).toBe("critical_gap");
    expect(getCategoryCode(24)).toBe("critical_gap");
    expect(getCategoryCode(25)).toBe("low_readiness");
    expect(getCategoryCode(44)).toBe("low_readiness");
    expect(getCategoryCode(45)).toBe("medium_readiness");
    expect(getCategoryCode(64)).toBe("medium_readiness");
    expect(getCategoryCode(65)).toBe("advanced_readiness");
    expect(getCategoryCode(84)).toBe("advanced_readiness");
    expect(getCategoryCode(85)).toBe("full_readiness");
    expect(getCategoryCode(100)).toBe("full_readiness");
  });
});

describe("scoring - calculateResult", () => {
  it("zwraca pełen wynik dla automotive medium", () => {
    const answers: Record<string, AuditAnswer> = {};

    for (const question of QUESTIONS) {
      if (question.type === "cards_multi") {
        answers[question.id] = {
          questionId: question.id,
          value: [question.options[0].id],
          dontKnow: false,
          answeredAt: "",
        };
      } else if (question.type === "slider") {
        answers[question.id] = {
          questionId: question.id,
          value: 50,
          dontKnow: false,
          answeredAt: "",
        };
      } else {
        answers[question.id] = {
          questionId: question.id,
          value: question.options[0].id,
          dontKnow: false,
          answeredAt: "",
        };
      }
    }

    const result = calculateResult({
      auditId: "TEST-AUTOMOTIVE-1",
      industry: "automotive",
      scale: "medium",
      answers,
    });

    expect(result.audit_id).toBe("TEST-AUTOMOTIVE-1");
    expect(result.industry).toBe("automotive");
    expect(result.scale).toBe("medium");
    expect(result.overall_score).toBeGreaterThan(0);
    expect(result.overall_score).toBeLessThanOrEqual(100);
    expect(Object.keys(result.dimensions)).toHaveLength(5);
    expect(result.recommendedProducts.length).toBeGreaterThan(0);
    expect(result.topPriorities.length).toBeGreaterThan(0);
  });
});
