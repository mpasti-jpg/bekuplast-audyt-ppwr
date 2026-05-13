"use client";

import { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";
import { GLOSSARY } from "@/content/glossary";
import { analytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function GlossaryAccordion() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <div className="flex items-center gap-3">
        <BookOpen className="h-7 w-7 text-amber" />
        <h2 className="text-2xl font-bold text-navy md:text-3xl">
          Glosariusz pojęć PPWR
        </h2>
      </div>
      <p className="mt-2 text-navy/70">
        Kliknij pojęcie, żeby rozwinąć definicję.
      </p>

      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {GLOSSARY.map((entry, index) => {
          const isOpen = expanded === index;
          return (
            <div key={entry.term} className="rounded-lg border border-border">
              <button
                type="button"
                onClick={() => {
                  setExpanded(isOpen ? null : index);
                  if (!isOpen) {
                    analytics.track("result_section_expanded", {
                      section_name: "glossary",
                      term: entry.term,
                    });
                  }
                }}
                className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-paper focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2"
                aria-expanded={isOpen}
              >
                <div>
                  <span className="font-bold text-navy">{entry.term}</span>
                  {entry.fullName && (
                    <span className="mt-0.5 block text-xs text-text-muted">
                      {entry.fullName}
                    </span>
                  )}
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 flex-shrink-0 text-amber transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-3 text-sm leading-relaxed text-navy/80">
                  {entry.definition}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
