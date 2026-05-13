import type { QuestionConfig } from "@/content/questions";
import { DIMENSION_NAMES } from "@/types/audit";

export function QuestionHeader({ question }: { question: QuestionConfig }) {
  return (
    <div className="animate-slide-up">
      {question.dimension && (
        <p className="text-xs font-semibold uppercase tracking-wider text-amber">
          {DIMENSION_NAMES[question.dimension]}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-bold leading-tight text-navy md:text-3xl">
        {question.text}
      </h2>
      {question.context && (
        <p className="mt-3 text-base leading-relaxed text-navy/70">
          {question.context}
        </p>
      )}
      {question.ppwrReferences && question.ppwrReferences.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {question.ppwrReferences.map((reference) => (
            <span
              key={reference}
              className="rounded bg-amber-light px-2 py-1 text-xs font-medium text-amber-dark"
            >
              {reference}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
