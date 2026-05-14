import { Calculator, Linkedin, Phone } from "lucide-react";
import { RestartAuditButton } from "./RestartAuditButton";

export function SecondaryCTAs() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <a
          href="https://bekuplast.pl/ppwr/kalkulator-tco/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-border bg-white p-6 transition-all hover:border-amber hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2"
        >
          <Calculator className="h-10 w-10 flex-shrink-0 text-amber" />
          <div>
            <h3 className="font-bold text-navy">Kalkulator TCO PPWR</h3>
            <p className="mt-1 text-sm text-navy/70">
              Policz koszt przejścia na RTP.
            </p>
          </div>
        </a>

        <a
          href="https://bekuplast.pl/ppwr/konsultacja/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-border bg-white p-6 transition-all hover:border-amber hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2"
        >
          <Phone className="h-10 w-10 flex-shrink-0 text-amber" />
          <div>
            <h3 className="font-bold text-navy">Umów konsultację 30 min</h3>
            <p className="mt-1 text-sm text-navy/70">
              Bezpłatna rozmowa z ekspertem PPWR.
            </p>
          </div>
        </a>
      </div>

      <div className="flex flex-col items-center gap-3 text-center">
        <RestartAuditButton />
        <p className="text-sm text-text-muted">
          Pomóż branży - udostępnij audyt:
        </p>
        <a
          href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbekuplast.pl%2Fppwr%2Faudyt-gotowosci%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-navy transition-colors hover:border-amber hover:bg-amber-light focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2"
        >
          <Linkedin className="h-4 w-4 text-amber" />
          Udostępnij na LinkedIn
        </a>
      </div>
    </section>
  );
}
