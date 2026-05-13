import type { Metadata } from "next";
import { FAQ } from "@/components/hero/FAQ";
import { HeroSection } from "@/components/hero/HeroSection";
import { HowItWorks } from "@/components/hero/HowItWorks";
import { TrustBar } from "@/components/hero/TrustBar";
import { buildHeroSchema } from "@/lib/schema-markup";

export const metadata: Metadata = {
  title: "Audyt gotowości PPWR — sprawdź swoją firmę w 4 minuty",
  description:
    "Bezpłatny audyt gotowości firmy na PPWR (12.08.2026). 10 pytań, 4 minuty, spersonalizowany raport z planem działania 90 dni i rekomendacjami produktowymi. Dla B2B w 9 branżach.",
  keywords: [
    "PPWR",
    "audyt PPWR",
    "gotowość PPWR",
    "rozporządzenie 2025/40",
    "opakowania zwrotne",
    "PPWR 12.08.2026",
    "compliance opakowania UE",
    "RTP returnable transport packaging",
    "opakowania B2B",
  ],
  authors: [{ name: "bekuplast Polska" }],
  openGraph: {
    title: "Audyt gotowości PPWR — sprawdź firmę w 4 minuty",
    description:
      "Bezpłatny self-assessment. 10 pytań, 4 minuty, spersonalizowany raport. Dla B2B w PL.",
    url: "https://bekuplast.pl/ppwr/audyt-gotowosci/",
    siteName: "bekuplast.pl",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Audyt gotowości PPWR bekuplast",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audyt gotowości PPWR — bekuplast.pl",
    description: "Bezpłatny self-assessment. 10 pytań, 4 minuty.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://bekuplast.pl/ppwr/audyt-gotowosci/",
  },
  robots: { index: true, follow: true },
};

export default function AuditLandingPage() {
  const schema = buildHeroSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <HowItWorks />
      <TrustBar />
      <FAQ />
    </>
  );
}
