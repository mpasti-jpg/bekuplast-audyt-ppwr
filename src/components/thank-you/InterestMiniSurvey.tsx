"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { COPY } from "@/content/ui-strings";
import { analytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function InterestMiniSurvey() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    analytics.track("interest_survey_response", { interest: option });
  };

  return (
    <section className="mt-12 rounded-xl border border-border bg-paper p-6">
      <h3 className="text-center font-bold text-navy">
        {COPY.thankYou.miniSurvey.title}
      </h3>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {COPY.thankYou.miniSurvey.options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleSelect(option)}
            disabled={selected !== null}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-all",
              selected === option
                ? "border-amber bg-amber text-white"
                : selected !== null
                  ? "cursor-not-allowed border-border text-text-muted"
                  : "border-border bg-white text-navy hover:border-amber hover:bg-amber-light",
            )}
          >
            {selected === option && <Check className="mr-1 inline-block h-3 w-3" />}
            {option}
          </button>
        ))}
      </div>

      {selected && (
        <p className="mt-4 text-center text-sm text-success">
          Dziękujemy za odpowiedź - uwzględnimy ją w wyborze najbliższych
          newsletterów.
        </p>
      )}
    </section>
  );
}
