"use client";

import { CheckCircle2, HelpCircle } from "lucide-react";
import type { QuestionConfig } from "@/content/questions";
import { cn } from "@/lib/utils";
import { useAuditStore } from "@/store/audit-store";
import { QuestionHeader } from "./QuestionHeader";

export function SingleQuestion({ question }: { question: QuestionConfig }) {
  const answer = useAuditStore((state) => state.getAnswer(question.id));
  const setAnswer = useAuditStore((state) => state.setAnswer);
  const selectedId = answer?.value as string | undefined;
  const regularOptions = question.options.filter((option) => !option.isDontKnow);
  const dontKnowOption = question.options.find((option) => option.isDontKnow);

  return (
    <div>
      <QuestionHeader question={question} />

      <div className="mt-8 space-y-3">
        {regularOptions.map((option) => {
          const isSelected = selectedId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setAnswer(question.id, option.id, false)}
              className={cn(
                "w-full rounded-xl border-2 p-5 text-left transition-all",
                isSelected
                  ? "border-amber bg-amber-light shadow-md"
                  : "border-border bg-white hover:border-amber/50",
              )}
              aria-pressed={isSelected}
            >
              <div className="flex items-start gap-4">
                <p className="flex-1 font-semibold text-navy">{option.label}</p>
                {isSelected && (
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber" />
                )}
              </div>
            </button>
          );
        })}

        {dontKnowOption && (
          <button
            type="button"
            onClick={() =>
              setAnswer(question.id, dontKnowOption.id, true)
            }
            className={cn(
              "w-full rounded-xl border border-dashed p-4 text-left transition-all",
              selectedId === dontKnowOption.id
                ? "border-amber bg-amber-light/50"
                : "border-border bg-paper hover:border-amber/40",
            )}
            aria-pressed={selectedId === dontKnowOption.id}
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 flex-shrink-0 text-text-muted" />
              <span className="text-navy/70">{dontKnowOption.label}</span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
