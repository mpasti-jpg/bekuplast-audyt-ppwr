import { COPY } from "@/content/ui-strings";

export function HowItWorks() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold text-navy md:text-4xl">
          {COPY.hero.whatYouGet.title}
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:gap-6">
          {COPY.hero.whatYouGet.cards.map((card, index) => (
            <div
              key={card.title}
              className="rounded-xl border border-border bg-paper p-6 transition-colors hover:border-amber/40"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy">{card.title}</h3>
                  <p className="mt-2 leading-relaxed text-navy/70">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
