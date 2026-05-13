/**
 * 10 branż w aplikacji (9 głównych + 1 "Inna").
 * Zgodne z analizą GSC 16 miesięcy: branże mapują 1:1 na strony /branzowe/...
 *
 * UWAGA: ecommerce_b2c i ecommerce_b2b NIE są opcjami w Q1, tylko wynikiem
 * sub-routingu Q1a po wybraniu "ecommerce_b2c" w Q1. W Q1 user widzi 10 kart,
 * w finalnym audit state mamy 1 z 10 industries po rozdzieleniu B2C/B2B.
 */
export type IndustryCode =
  | 'automotive'
  | 'beverages'
  | 'food'
  | 'agriculture'
  | 'pharma'
  | 'ecommerce_b2c'      // wynik Q1a: B2C-side
  | 'ecommerce_b2b'      // wynik Q1a: B2B-side (3PL/spedycja)
  | 'retail_fmcg'
  | 'intralogistics'
  | 'industrial'
  | 'other';

export type ScaleCode = 'micro' | 'medium' | 'large' | 'enterprise';

export const INDUSTRY_LABELS: Record<IndustryCode, string> = {
  automotive: 'Motoryzacja & automotive',
  beverages: 'Napoje i browary',
  food: 'Przetwórstwo żywności',
  agriculture: 'Rolnictwo, ogrodnictwo, owoce-warzywa',
  pharma: 'Farmacja, kosmetyki, chemia spec.',
  ecommerce_b2c: 'E-commerce i fulfillment (B2C)',
  ecommerce_b2b: 'Logistyka kontraktowa 3PL (B2B)',
  retail_fmcg: 'Handel detaliczny / FMCG',
  intralogistics: 'Intralogistyka i magazyn',
  industrial: 'Produkcja przemysłowa',
  other: 'Inna branża',
};

export const SCALE_LABELS: Record<ScaleCode, string> = {
  micro: 'Mała / mikro firma (≤50 osób)',
  medium: 'Średnia firma (51-250 osób)',
  large: 'Duża firma (251-1000 osób)',
  enterprise: 'Korporacja (1000+ osób)',
};

/**
 * Mapping IndustryCode → URL strony /branzowe/ na bekuplast.pl.
 * Używane do linkowania z wyniku audytu.
 */
export const INDUSTRY_TO_PAGE_URL: Record<IndustryCode, string | null> = {
  automotive: 'https://bekuplast.pl/branzowe/przemysl-motoryzacyjny-i-automotive/',
  beverages: 'https://bekuplast.pl/branzowe/sprzedaz-i-transport-na-rynku-napojow/',
  food: 'https://bekuplast.pl/branzowe/przetworstwo-zywnosci/',
  agriculture: 'https://bekuplast.pl/branzowe/rolnictwo-ogrodnictwo/',
  pharma: 'https://bekuplast.pl/branzowe/przemysl-farmaceutyczny-i-kosmetyczny/',
  ecommerce_b2c: 'https://bekuplast.pl/branzowe/e-commerce-3pl-fulfillment/',
  ecommerce_b2b: 'https://bekuplast.pl/branzowe/logistyka-i-transport/',
  retail_fmcg: 'https://bekuplast.pl/branzowe/handel-detaliczny-fmcg/',
  intralogistics: 'https://bekuplast.pl/branzowe/intralogistyka/',
  industrial: 'https://bekuplast.pl/branzowe/produkcja-przemyslowa/',
  other: null, // dla "Inna" - formularz kontaktowy
};
