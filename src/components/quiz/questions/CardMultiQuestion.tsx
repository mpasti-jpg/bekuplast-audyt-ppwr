"use client";

import { Check } from "lucide-react";
import type { QuestionConfig } from "@/content/questions";
import { cn } from "@/lib/utils";
import { useAuditStore } from "@/store/audit-store";
import { QuestionHeader } from "./QuestionHeader";

export function CardMultiQuestion({ question }: { question: QuestionConfig }) {
  const answer = useAuditStore((state) => state.getAnswer(question.id));
  const setAnswer = useAuditStore((state) => state.setAnswer);
  const selectedIds: string[] = Array.isArray(answer?.value)
    ? (answer.value as string[])
    : [];

  const toggleOption = (optionId: string, isDontKnowOrNone: boolean) => {
    if (isDontKnowOrNone) {
      if (selectedIds.includes(optionId)) {
        setAnswer(question.id, [], false);
      } else {
        const option = question.options.find((item) => item.id === optionId);
        setAnswer(question.id, [optionId], Boolean(option?.isDontKnow));
      }
      return;
    }

    const noneOrDontKnowIds = question.options
      .filter((option) => option.isDontKnow || option.id === "none")
      .map((option) => option.id);

    let nextSelection = selectedIds.filter(
      (id) => !noneOrDontKnowIds.includes(id),
    );

    if (nextSelection.includes(optionId)) {
      nextSelection = nextSelection.filter((id) => id !== optionId);
    } else {
      nextSelection.push(optionId);
    }

    setAnswer(question.id, nextSelection, false);
  };

  return (
    <div>
      <QuestionHeader question={question} />
      <p className="mt-2 text-sm text-text-muted">
        Możesz wybrać więcej niż jedną opcję.
      </p>

      <div className="mt-8 space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedIds.includes(option.id);
          const isNoneOrDontKnow = option.isDontKnow || option.id === "none";

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => toggleOption(option.id, isNoneOrDontKnow)}
              className={cn(
                "w-full rounded-xl border-2 p-4 text-left transition-all",
                isSelected
                  ? "border-amber bg-amber-light"
                  : isNoneOrDontKnow
                    ? "border-dashed border-border bg-paper hover:border-amber/40"
                    : "border-border bg-white hover:border-amber/50",
              )}
              aria-pressed={isSelected}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border-2",
                    isSelected
                      ? "border-amber bg-amber"
                      : "border-border bg-white",
                  )}
                >
                  {isSelected && <Check className="h-4 w-4 text-white" />}
                </div>
                <p
                  className={cn(
                    "font-medium",
                    isNoneOrDontKnow ? "text-navy/70" : "text-navy",
                  )}
                >
                  {option.label}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
