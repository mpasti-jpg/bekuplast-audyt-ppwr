"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ExternalLink, Mail } from "lucide-react";
import { COPY } from "@/content/ui-strings";
import { analytics } from "@/lib/analytics";
import { InterestMiniSurvey } from "./InterestMiniSurvey";

export function ThankYouPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "twoim adresie";
  const subtitle = COPY.thankYou.subtitle.replace("{email}", email);

  useEffect(() => {
    analytics.track("thank_you_viewed", { email_present: Boolean(email) });
  }, [email]);

  const trackNextStep = (title: string) => {
    analytics.track("next_step_clicked", { title });
  };

  return (
    <div className="min-h-screen bg-paper py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
            <CheckCircle2 className="h-12 w-12 text-success" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-amber">
            {COPY.thankYou.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-navy md:text-5xl">
            {COPY.thankYou.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-navy/80">
            {subtitle}
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-amber/40 bg-amber-light p-5">
          <p className="text-sm leading-relaxed text-navy/80">
            <strong>Wersja prototypowa:</strong>{" "}
            {COPY.thankYou.prototypeNotice}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-bold text-navy">
            {COPY.thankYou.whatNextTitle}
          </h2>

          <div className="mt-6 grid gap-4">
            {COPY.thankYou.nextSteps.map((step) => (
              <a
                key={step.title}
                href={step.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackNextStep(step.title)}
                className="group flex items-start gap-4 rounded-xl border border-border bg-white p-6 transition-all hover:border-amber hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2"
              >
                <div className="flex-shrink-0 text-3xl">{step.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-navy group-hover:text-amber-dark">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy/70">
                    {step.desc}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-amber">
                    {step.cta}
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <InterestMiniSurvey />

        <section className="mt-12 rounded-xl border border-border bg-white p-6">
          <h3 className="font-bold text-navy">
            {COPY.thankYou.contactBlock.title}
          </h3>
          <p className="mt-2 text-sm text-navy/70">
            {COPY.thankYou.contactBlock.role}
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-amber" />
              <a
                href={`mailto:${COPY.thankYou.contactBlock.email}`}
                className="text-navy hover:text-amber"
              >
                {COPY.thankYou.contactBlock.email}
              </a>
            </p>
            <p className="text-navy/70">{COPY.thankYou.contactBlock.phone}</p>
            <p className="text-xs text-text-muted">
              {COPY.thankYou.contactBlock.hours}
            </p>
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/ppwr/audyt-gotowosci/"
            className="text-sm text-text-muted hover:text-navy"
          >
            ← Wróć do strony głównej audytu
          </Link>
        </div>
      </div>
    </div>
  );
}
