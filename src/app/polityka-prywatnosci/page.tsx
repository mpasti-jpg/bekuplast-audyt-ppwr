import type { Metadata } from "next";
import { DISCLAIMERS } from "@/content/disclaimers";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  robots: { index: false, follow: true },
};

export const metadata = {
  title: "Polityka prywatności",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Polityka prywatności — Audyt PPWR bekuplast.pl
      </h1>
      <p className="mt-6 leading-7 text-navy/80">{DISCLAIMERS.rodoNotice}</p>
      <h2 className="mt-10 text-2xl font-bold text-navy">Twoje prawa</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-navy/80">
        <li>Prawo dostępu do danych.</li>
        <li>Prawo sprostowania, ograniczenia lub usunięcia danych.</li>
        <li>Prawo wycofania zgody na kontakt.</li>
        <li>Prawo wniesienia skargi do organu nadzorczego.</li>
      </ul>
      <h2 className="mt-10 text-2xl font-bold text-navy">Charakter audytu</h2>
      <p className="mt-4 leading-7 text-navy/80">{DISCLAIMERS.legalNotice}</p>
    </article>
  );
}
