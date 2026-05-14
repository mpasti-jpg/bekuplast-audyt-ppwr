"use client";

import { getQuestionById } from "@/content/questions";
import { useAuditStore } from "@/store/audit-store";

export function useAuditFlow() {
  const currentStep = useAuditStore((state) => state.currentStep);
  const answers = useAuditStore((state) => state.answers);

  const questionId = (() => {
    if (currentStep === 1) return "Q1";
    if (currentStep === 1.5) return "Q1a";
    if (currentStep >= 2 && currentStep <= 10) return `Q${currentStep}`;
    return null;
  })();

  const question = questionId ? getQuestionById(questionId) : null;
  const progressStep = Math.floor(currentStep);
  const answer = questionId ? answers[questionId] : undefined;
  const canProceed = (() => {
    if (!answer) return false;
    if (answer.dontKnow) return true;
    if (Array.isArray(answer.value)) return answer.value.length > 0;
    return (
      answer.value !== "" &&
      answer.value !== null &&
      typeof answer.value !== "undefined"
    );
  })();

  return {
    currentStep,
    questionId,
    question,
    totalSteps: 10,
    progressStep,
    canProceed,
    isLastQuestion: currentStep === 10,
    isFirstQuestion: currentStep === 1,
  };
}
