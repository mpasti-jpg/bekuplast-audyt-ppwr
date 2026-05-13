"use client";

import { getQuestionById } from "@/content/questions";
import { useAuditStore } from "@/store/audit-store";

export function useAuditFlow() {
  const currentStep = useAuditStore((state) => state.currentStep);
  const isAnswered = useAuditStore((state) => state.isAnswered);

  const questionId = (() => {
    if (currentStep === 1) return "Q1";
    if (currentStep === 1.5) return "Q1a";
    if (currentStep >= 2 && currentStep <= 10) return `Q${currentStep}`;
    return null;
  })();

  const question = questionId ? getQuestionById(questionId) : null;
  const progressStep = Math.floor(currentStep);

  return {
    currentStep,
    questionId,
    question,
    totalSteps: 10,
    progressStep,
    canProceed: questionId ? isAnswered(questionId) : false,
    isLastQuestion: currentStep === 10,
    isFirstQuestion: currentStep === 1,
  };
}
