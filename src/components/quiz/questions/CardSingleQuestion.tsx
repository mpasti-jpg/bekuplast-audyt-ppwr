"use client";

import { CheckCircle2 } from "lucide-react";
import type { QuestionConfig } from "@/content/questions";
import { cn } from "@/lib/utils";
import { useAuditStore } from "@/store/audit-store";
import { QuestionHeader } from "./QuestionHeader";

export function CardSingleQuestion({ question }: { question: QuestionConfig }) {
  const answer = useAuditStore((state) => state.getAnswer(question.id));
  const setAnswer = useAuditStore((state) => state.setAnswer);
  const selectedId = answer?.value as string | undefined;

  return (
    <div>
      <QuestionHeader question={question} />

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {question.options.map((option) => {
          const isSelected = selectedId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setAnswer(question.id, option.id)}
              className={cn(
                "w-full rounded-xl border-2 p-4 text-left transition-all",
                isSelected
                  ? "border-amber bg-amber-light shadow-md"
                  : "border-border bg-white hover:border-amber/50",
              )}
              aria-pressed={isSelected}
            >
              <div className="flex items-start gap-3">
                {option.icon && (
                  <span className="flex-shrink-0 text-2xl" aria-hidden="true">
                    {option.icon}
                  </span>
                )}
                <div className="flex-1">
                  <p className="font-semibold text-navy">{option.label}</p>
                  {option.description && (
                    <p className="mt-1 text-sm text-navy/70">
                      {option.description}
                    </p>
                  )}
                </div>
                {isSelected && (
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
