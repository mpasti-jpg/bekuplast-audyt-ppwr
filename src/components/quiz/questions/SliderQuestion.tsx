"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import { HelpCircle } from "lucide-react";
import type { QuestionConfig } from "@/content/questions";
import { cn } from "@/lib/utils";
import { useAuditStore } from "@/store/audit-store";
import { QuestionHeader } from "./QuestionHeader";

export function SliderQuestion({ question }: { question: QuestionConfig }) {
  const answer = useAuditStore((state) => state.getAnswer(question.id));
  const setAnswer = useAuditStore((state) => state.setAnswer);
  const currentValue = typeof answer?.value === "number" ? answer.value : null;
  const isDontKnow = answer?.dontKnow === true;
  const [localValue, setLocalValue] = useState<number>(currentValue ?? 0);

  useEffect(() => {
    if (typeof currentValue === "number") {
      setLocalValue(currentValue);
    }
  }, [currentValue]);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setLocalValue(value);
    setAnswer(question.id, value, false);
  };

  return (
    <div>
      <QuestionHeader question={question} />

      <div className="mt-10 rounded-xl border border-border bg-white p-6 md:p-8">
        {!isDontKnow ? (
          <>
            <div className="text-center">
              <div className="text-6xl font-bold text-amber">{localValue}%</div>
              <p className="mt-2 text-sm text-text-muted">
                Twój szacunek udziału opakowań zwrotnych
              </p>
            </div>

            <div className="relative mt-8">
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={localValue}
                onChange={handleSliderChange}
                className="h-2 w-full accent-amber"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={localValue}
                aria-label="Procent RTP"
              />
              <div
                className="pointer-events-none absolute left-[40%] top-0 -translate-x-1/2 -translate-y-2"
                aria-hidden="true"
              >
                <div className="mx-auto h-6 w-0.5 bg-navy/30" />
              </div>
              <div className="mt-3 flex justify-between text-xs text-text-muted">
                <span>0%</span>
                <span className="font-semibold text-amber">
                  ↑ Cel PPWR 2030 (40%)
                </span>
                <span>100%</span>
              </div>
            </div>
          </>
        ) : (
          <div className="py-4 text-center">
            <p className="text-navy/70">Wybrałeś: "Nie wiem"</p>
            <button
              type="button"
              onClick={() => setAnswer(question.id, 0, false)}
              className="mt-2 text-sm text-amber hover:underline"
            >
              Wpisz wartość
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => setAnswer(question.id, "dont_know", true)}
          className={cn(
            "flex items-center gap-2 rounded-lg border border-dashed px-4 py-2 text-sm transition-colors",
            isDontKnow
              ? "border-amber bg-amber-light text-amber-dark"
              : "border-border text-text-muted hover:border-amber/40",
          )}
        >
          <HelpCircle className="h-4 w-4" />
          Nie wiem / wolę pominąć
        </button>
      </div>
    </div>
  );
}
