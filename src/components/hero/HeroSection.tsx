import type { ReactNode } from "react";
import { ArrowRight, BarChart3, Clock, Target } from "lucide-react";
import { COPY } from "@/content/ui-strings";
import { daysUntilPPWR, plDaysFormat } from "@/lib/format";
import { HeroPageView, HeroStartLink } from "./HeroAnalytics";

export function HeroSection() {
  const countdown = plDaysFormat(daysUntilPPWR());

  return (
    <section className="bg-paper">
      <HeroPageView />
      <div className="mx-auto max-w-content px-4 py-12 md:px-6 md:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-amber">
              {COPY.hero.eyebrow}
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-navy md:text-5xl lg:text-6xl">
              {COPY.hero.titleLine1}
              <br />
              <span className="text-amber">{COPY.hero.titleLine2}</span>
            </h1>

            <p className="mt-6 max-w-prose text-lg leading-relaxed text-navy/80">
              {COPY.hero.lead.replace("{countdown}", countdown)}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <ValueCard
                icon={<Target className="h-6 w-6 text-amber" />}
                label={COPY.hero.valueBullets.questions.label}
                desc={COPY.hero.valueBullets.questions.desc}
              />
              <ValueCard
                icon={<Clock className="h-6 w-6 text-amber" />}
                label={COPY.hero.valueBullets.time.label}
                desc={COPY.hero.valueBullets.time.desc}
              />
              <ValueCard
                icon={<BarChart3 className="h-6 w-6 text-amber" />}
                label={COPY.hero.valueBullets.result.label}
                desc={COPY.hero.valueBullets.result.desc}
              />
            </div>

            <div className="mt-10">
              <HeroStartLink ctaLabel={COPY.hero.primaryCta}>
                <ArrowRight className="h-5 w-5" />
              </HeroStartLink>
              <p className="mt-3 text-sm text-text-muted">
                {COPY.hero.secondaryCtaSubtext}
              </p>
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:block">
            <div className="rounded-2xl bg-navy p-6 text-white shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber">
                Twój wynik
              </p>
              <div className="mt-2 flex items-end gap-3">
                <span className="text-6xl font-bold text-amber">62</span>
                <span className="mb-2 text-white/60">/100</span>
              </div>
              <p className="mt-2 text-lg font-semibold">Średnia gotowość</p>
              <p className="mt-1 text-sm text-white/70">
                solidne podstawy, słabe punkty
              </p>

              <div className="mt-6 flex h-32 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <div className="text-center text-sm text-white/50">
                  Radar chart 5 wymiarów
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs text-white/60">
                  Plan działania 90 dni • Rekomendacje produktów • Sekcja
                  branżowa
                </p>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-text-muted">
              Przykładowy ekran wyniku
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  icon,
  label,
  desc,
}: {
  icon: ReactNode;
  label: string;
  desc: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-4">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-bold text-navy">{label}</span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-navy/70">{desc}</p>
    </div>
  );
}
