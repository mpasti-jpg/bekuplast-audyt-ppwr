import { COPY } from "@/content/ui-strings";

const SITE_URL = "https://bekuplast.pl";
const ORG_NAME = "bekuplast Polska";

export function buildHeroSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Audyt gotowości PPWR",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Bezpłatny self-assessment gotowości firmy na rozporządzenie UE 2025/40 (PPWR). 10 pytań, 4 minuty, spersonalizowany raport.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "PLN",
      },
      provider: {
        "@type": "Organization",
        name: ORG_NAME,
        url: SITE_URL,
      },
      inLanguage: "pl",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "B2B decision makers in logistics, supply chain, packaging",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Quiz",
      name: "Audyt gotowości PPWR",
      description:
        "Self-assessment 10 pytań w 5 wymiarach gotowości na rozporządzenie UE 2025/40.",
      educationalLevel: "Professional",
      learningResourceType: "Self-assessment",
      timeRequired: "PT4M",
      inLanguage: "pl",
      creator: {
        "@type": "Organization",
        name: ORG_NAME,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: COPY.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "bekuplast.pl",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "PPWR",
          item: `${SITE_URL}/ppwr/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Audyt gotowości",
          item: `${SITE_URL}/ppwr/audyt-gotowosci/`,
        },
      ],
    },
  ];
}
