import { ExternalLink } from "lucide-react";
import type { IndustryCode } from "@/types/industry";
import { INDUSTRY_SECTIONS } from "@/content/industry-sections";

export function IndustrySection({ industry }: { industry: IndustryCode }) {
  const section = INDUSTRY_SECTIONS[industry];
  if (!section) return null;

  return (
    <section className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber">
        Twoja branża i PPWR
      </p>
      <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">
        {section.pageHeading}
      </h2>

      <p className="mt-4 leading-relaxed text-navy/80">{section.intro}</p>

      <h3 className="mt-8 text-xl font-bold text-navy">
        Kluczowe obowiązki PPWR dla Twojej branży
      </h3>
      <div className="mt-4 space-y-4">
        {section.obligations.map((obligation) => (
          <div
            key={obligation.article}
            className="rounded-lg border-l-4 border-amber bg-paper p-4"
          >
            <h4 className="font-bold text-navy">{obligation.article}</h4>
            <p className="mt-1 text-sm leading-relaxed text-navy/80">
              {obligation.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-border pt-6">
        <a
          href={section.brandedPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-amber transition-colors hover:text-amber-dark"
        >
          {section.closingNote}
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
