import Link from "next/link";
import { COPY } from "@/content/ui-strings";
import { DISCLAIMERS } from "@/content/disclaimers";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-navy text-white">
      <div className="mx-auto max-w-content px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">
              <span className="text-amber">b</span>ekuplast
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Producent opakowań plastikowych zwrotnych B2B. Specjalizujemy się
              w rozwiązaniach RTP dla logistyki i produkcji.
            </p>
            <p className="mt-3 text-xs text-white/50">{COPY.footer.poweredBy}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Informacje prawne
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/polityka-prywatnosci/"
                  className="text-white/70 transition-colors hover:text-amber"
                >
                  {COPY.footer.privacyLink}
                </Link>
              </li>
              <li>
                <a
                  href="https://bekuplast.pl/polityka-cookies/"
                  className="text-white/70 transition-colors hover:text-amber"
                >
                  {COPY.footer.cookieLink}
                </a>
              </li>
              <li>
                <a
                  href="https://bekuplast.pl/kontakt/"
                  className="text-white/70 transition-colors hover:text-amber"
                >
                  {COPY.footer.contactLink}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Disclaimer
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-white/70">
              {DISCLAIMERS.footerShort}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>{COPY.footer.copyrightText.replace("©", `© ${year}`)}</p>
          <p>Wersja prototypowa — do akceptacji klienta.</p>
        </div>
      </div>
    </footer>
  );
}
