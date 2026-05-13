import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { RedFlag } from "@/content/industry-red-flags";
import { DIMENSION_NAMES } from "@/types/audit";

export function RedFlagsSection({ flags }: { flags: RedFlag[] }) {
  if (flags.length === 0) {
    return (
      <section className="rounded-2xl border-l-4 border-success bg-success/5 p-6 md:p-8">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-7 w-7 flex-shrink-0 text-success" />
          <h2 className="text-xl font-bold text-navy md:text-2xl">
            Brak czerwonych flag dla Twojej branży
          </h2>
        </div>
        <p className="mt-2 text-navy/70">
          Nie wykryliśmy specyficznych branżowych ryzyk na podstawie Twoich
          wyników.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border-l-4 border-danger bg-danger/5 p-6 md:p-8">
      <div className="flex items-center gap-3">
        <AlertTriangle className="h-7 w-7 flex-shrink-0 text-danger" />
        <h2 className="text-2xl font-bold text-navy md:text-3xl">
          Czerwone flagi specyficzne dla Twojej branży
        </h2>
      </div>
      <p className="mt-2 text-navy/70">
        Wykryliśmy {flags.length}{" "}
        {flags.length === 1 ? "ryzyko" : "ryzyka"} branżowe, które warto pilnie
        zaadresować.
      </p>

      <div className="mt-6 space-y-3">
        {flags.map((flag, index) => (
          <div
            key={`${flag.dimension}-${index}`}
            className="rounded-lg border border-danger/30 bg-white p-4"
          >
            <span className="mb-2 inline-block rounded bg-navy px-2 py-0.5 font-mono text-xs text-white">
              {flag.dimension} - {DIMENSION_NAMES[flag.dimension]}
            </span>
            <p className="text-sm leading-relaxed text-navy">{flag.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
