import Link from "next/link";
import { COPY } from "@/content/ui-strings";

export function TrustBar() {
  return (
    <section className="bg-paper py-12">
      <div className="mx-auto max-w-content px-4 text-center md:px-6">
        <h2 className="text-2xl font-bold text-navy md:text-3xl">
          {COPY.hero.socialProof.title}
        </h2>
        <p className="mt-2 text-sm text-navy/70">
          {COPY.hero.socialProof.sectorsLabel}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {COPY.hero.socialProof.sectors.map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-navy"
            >
              {sector}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-navy p-8 text-white md:p-12">
          <h3 className="text-2xl font-bold md:text-3xl">
            {COPY.hero.midCta.title}
          </h3>
          <p className="mt-3 text-white/80">{COPY.hero.midCta.desc}</p>
          <Link
            href="/audyt/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-dark"
          >
            {COPY.hero.midCta.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
