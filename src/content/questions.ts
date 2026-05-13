// @ts-nocheck
import type { DimensionCode } from '@/types/audit';

export type QuestionType = 'cards_single' | 'cards_multi' | 'single' | 'slider';

export interface QuestionOption {
  id: string;             // 'A', 'B', 'C', 'D', 'E' or custom
  label: string;          // tekst widoczny dla użytkownika
  description?: string;   // dodatkowy opis pod opcją (np. dla kart branż)
  score: number;          // 0-100 punktów za wybór tej opcji
  icon?: string;          // emoji dla kart
  isDontKnow?: boolean;   // czy to opcja "Nie wiem"
}

export interface QuestionConfig {
  id: string;                       // 'Q1', 'Q1a', 'Q2', ...
  step: number;                     // 1, 2, ..., 10
  type: QuestionType;
  dimension: DimensionCode | null;  // null jeśli segmentacyjne (Q1, Q2, Q1a)
  isSegmentation: boolean;
  isConditional: boolean;           // true dla Q1a
  conditionalOn?: { questionId: string; value: string };  // tylko Q1a
  weight: number;                   // waga w obrębie wymiaru (1.0 albo 0.7 itd.)
  text: string;                     // główne pytanie
  context?: string;                 // 1-2 zdania pod pytaniem
  options: QuestionOption[];
  allowDontKnow: boolean;
  tooltips?: Record<string, string>;
  ppwrReferences?: string[];
}

export const QUESTIONS: QuestionConfig[] = [
  // ============================================================
  // Q1 — BRANŻA (segmentacja)
  // ============================================================
  {
    id: 'Q1',
    step: 1,
    type: 'cards_single',
    dimension: null,
    isSegmentation: true,
    isConditional: false,
    weight: 0,
    text: 'W jakiej branży działa Twoja firma?',
    context: 'Wybierz najbliższą kategorię — to wpłynie na rekomendacje produktowe i interpretację wymogów PPWR specyficznych dla Twojej branży.',
    allowDontKnow: false,
    options: [
      {
        id: 'automotive',
        label: 'Motoryzacja & automotive',
        description: 'Producenci, tier 1/2/3, OEM, logistyka kontraktowa',
        icon: '🚗',
        score: 0,
      },
      {
        id: 'beverages',
        label: 'Napoje i browary',
        description: 'Browary, mleczarnie, soki, wody, butelki zwrotne',
        icon: '🍺',
        score: 0,
      },
      {
        id: 'food',
        label: 'Przetwórstwo żywności',
        description: 'Mięso, nabiał, piekarnictwo, ryby (HACCP, food-grade)',
        icon: '🍞',
        score: 0,
      },
      {
        id: 'agriculture',
        label: 'Rolnictwo, ogrodnictwo, owoce-warzywa',
        description: 'Sadownictwo, hurtownie agro, świeża produkcja',
        icon: '🥕',
        score: 0,
      },
      {
        id: 'pharma',
        label: 'Farmacja, kosmetyki, chemia spec.',
        description: 'Farmaceutyka, kosmetyka, chemia (ESD, GMP, sterylność)',
        icon: '💊',
        score: 0,
      },
      {
        id: 'ecommerce_b2c',
        label: 'E-commerce, 3PL, fulfillment, kurierzy',
        description: 'E-com, paczki, fulfillment, logistyka kontraktowa',
        icon: '📦',
        score: 0,
      },
      {
        id: 'retail_fmcg',
        label: 'Handel detaliczny / FMCG',
        description: 'Sieci sklepów, hipermarkety, drogerie, dyskonty',
        icon: '🛒',
        score: 0,
      },
      {
        id: 'intralogistics',
        label: 'Intralogistyka i magazyn',
        description: 'AKL/shuttle, WMS, magazyny wysokiego składowania',
        icon: '🏭',
        score: 0,
      },
      {
        id: 'industrial',
        label: 'Produkcja przemysłowa',
        description: 'AGD, elektronika, meble, chemia, budowlanka',
        icon: '🔧',
        score: 0,
      },
      {
        id: 'other',
        label: 'Inna / nie wiem',
        description: 'Otworzymy formularz, opowiesz nam o swoim biznesie',
        icon: '❓',
        score: 0,
      },
    ],
  },

  // ============================================================
  // Q1a — SUB-ROUTING (tylko jeśli Q1 = ecommerce_b2c)
  // ============================================================
  {
    id: 'Q1a',
    step: 1, // ten sam step co Q1 — to doprecyzowanie
    type: 'cards_single',
    dimension: null,
    isSegmentation: true,
    isConditional: true,
    conditionalOn: { questionId: 'Q1', value: 'ecommerce_b2c' },
    weight: 0,
    text: 'Czy Twoja firma działa głównie:',
    context: 'Inna specyfika PPWR dla B2C-side (Art. 29(3) — obowiązki dystrybutorów) i B2B-side (klasyczne opakowania transportowe zwrotne).',
    allowDontKnow: false,
    options: [
      {
        id: 'b2c',
        label: 'B2C-side',
        description: 'E-commerce, paczkomatowe, kurierzy, fulfillment dla sklepów internetowych',
        icon: '📦',
        score: 0,
      },
      {
        id: 'b2b',
        label: 'B2B-side',
        description: '3PL / logistyka kontraktowa między zakładami, spedycja, transport B2B',
        icon: '🚚',
        score: 0,
      },
    ],
  },

  // ============================================================
  // Q2 — SKALA (segmentacja)
  // ============================================================
  {
    id: 'Q2',
    step: 2,
    type: 'cards_single',
    dimension: null,
    isSegmentation: true,
    isConditional: false,
    weight: 0,
    text: 'Ile osób zatrudnia Twoja firma?',
    context: 'Skala wpływa na rekomendacje produktowe (pooling vs zakup, capex) i typowy timeline wdrożenia PPWR.',
    allowDontKnow: false,
    options: [
      {
        id: 'micro',
        label: 'Do 50 osób',
        description: 'Mikro / mała firma',
        score: 0,
      },
      {
        id: 'medium',
        label: '51–250 osób',
        description: 'Średnia firma',
        score: 0,
      },
      {
        id: 'large',
        label: '251–1000 osób',
        description: 'Duża firma',
        score: 0,
      },
      {
        id: 'enterprise',
        label: 'Powyżej 1000 osób',
        description: 'Korporacja / grupa kapitałowa',
        score: 0,
      },
    ],
  },

  // ============================================================
  // Q3 — D1 ŚWIADOMOŚĆ REGULACYJNA
  // ============================================================
  {
    id: 'Q3',
    step: 3,
    type: 'single',
    dimension: 'D1',
    isSegmentation: false,
    isConditional: false,
    weight: 1.0,
    text: 'Co o PPWR wie zespół decyzyjny w Twojej firmie?',
    context: 'PPWR (Rozporządzenie UE 2025/40 o opakowaniach i odpadach opakowaniowych) wchodzi w życie 12 sierpnia 2026 r. Pytanie dotyczy realnej świadomości w zespole, nie tylko jednej osoby.',
    allowDontKnow: true,
    ppwrReferences: ['Rozporządzenie 2025/40'],
    options: [
      {
        id: 'A',
        label: 'Wiemy, że istnieje, ale szczegółów nie znamy',
        score: 20,
      },
      {
        id: 'B',
        label: 'Znamy główne daty i progi (12.08.2026, 40% reuse w 2030 r.)',
        score: 50,
      },
      {
        id: 'C',
        label: 'Czytaliśmy rozporządzenie 2025/40, znamy art. 5 i art. 29 dotyczące naszej branży',
        score: 80,
      },
      {
        id: 'D',
        label: 'Mamy wewnętrznego eksperta lub kancelarię, która prowadzi nas przez PPWR',
        score: 100,
      },
      {
        id: 'E',
        label: 'Nie wiem',
        score: 0,
        isDontKnow: true,
      },
    ],
  },

  // ============================================================
  // Q4 — D2 INWENTARYZACJA (część 1)
  // ============================================================
  {
    id: 'Q4',
    step: 4,
    type: 'single',
    dimension: 'D2',
    isSegmentation: false,
    isConditional: false,
    weight: 0.5,  // D2 ma 2 pytania ważone 50/50
    text: 'Czy masz aktualny wykaz opakowań transportowych wprowadzanych na rynek?',
    context: 'PPWR wymaga, by firma znała typy, wolumeny i materiały opakowań — bez tego nie ma jak wystawić deklaracji zgodności ani raportować do BDO.',
    allowDontKnow: true,
    ppwrReferences: ['Art. 5', 'BDO'],
    tooltips: {
      'wykaz opakowań transportowych': 'Lista zawierająca: typ opakowania (skrzynka, paleta, KLT, itp.), materiał (PP, HDPE, drewno), wagę, dostawcę, roczny wolumen zakupu lub wprowadzania.',
    },
    options: [
      {
        id: 'A',
        label: 'Tak, mamy pełen wykaz w systemie (ERP/BDO/Excel), aktualizowany co kwartał',
        score: 100,
      },
      {
        id: 'B',
        label: 'Mamy wykaz, ale nie jest aktualizowany regularnie',
        score: 60,
      },
      {
        id: 'C',
        label: 'Wiemy mniej-więcej, ile czego kupujemy, ale nie ma sformalizowanego wykazu',
        score: 30,
      },
      {
        id: 'D',
        label: 'Nie mamy wykazu — kupujemy ad-hoc, bez ewidencji',
        score: 0,
      },
      {
        id: 'E',
        label: 'Nie wiem / nie mam dostępu do tych danych',
        score: 0,
        isDontKnow: true,
      },
    ],
  },

  // ============================================================
  // Q5 — D2 INWENTARYZACJA (część 2) — multi-select
  // ============================================================
  {
    id: 'Q5',
    step: 5,
    type: 'cards_multi',
    dimension: 'D2',
    isSegmentation: false,
    isConditional: false,
    weight: 0.5,
    text: 'Czy znasz skład materiałowy obecnych opakowań i obowiązki dostawców?',
    context: 'Zaznacz wszystkie, które się stosują. PPWR przekształca relacje z dostawcami w łańcuch odpowiedzialności — twoja deklaracja zgodności bazuje na dokumentacji dostawców.',
    allowDontKnow: true,
    ppwrReferences: ['Art. 5', 'deklaracja zgodności'],
    options: [
      {
        id: 'recyclate',
        label: 'Znamy % materiału z recyklingu w naszych opakowaniach',
        score: 25,
      },
      {
        id: 'pfas_free',
        label: 'Wiemy, że nasze opakowania food-contact są wolne od PFAS',
        score: 25,
      },
      {
        id: 'ppwr_in_contracts',
        label: 'Mamy zapis o PPWR w kontraktach z dostawcami opakowań',
        score: 25,
      },
      {
        id: 'doc_commitment',
        label: 'Dostawcy zobowiązali się do przekazania deklaracji zgodności',
        score: 25,
      },
      {
        id: 'none',
        label: 'Żadne z powyższych',
        score: 0,
      },
      {
        id: 'dont_know',
        label: 'Nie wiem / nie mam dostępu',
        score: 0,
        isDontKnow: true,
      },
    ],
  },

  // ============================================================
  // Q6 — D3 STRATEGIA REUSE (część 1, slider)
  // ============================================================
  {
    id: 'Q6',
    step: 6,
    type: 'slider',
    dimension: 'D3',
    isSegmentation: false,
    isConditional: false,
    weight: 0.6,
    text: 'Jaki procent Twoich opakowań transportowych to dziś opakowania wielokrotnego użytku (RTP)?',
    context: 'Cel PPWR (art. 29): 40% w obiegu zwrotnym do 2030 r., 70% do 2040 r. Przesuń suwak na wartość, która jest realna dziś — szacunek wystarczy.',
    allowDontKnow: true,
    ppwrReferences: ['Art. 29', 'cele reuse 2030 / 2040'],
    tooltips: {
      'RTP': 'Returnable Transport Packaging — opakowanie transportowe wielokrotnego użytku (palety plastikowe, skrzynki, KLT, IBC). NIE: karton, drewno, folia jednorazowa.',
    },
    options: [
      // Slider używa 5 zakresów, ale UI to ciągły 0-100
      { id: '0-10', label: '0–10%', score: 10 },
      { id: '11-25', label: '11–25%', score: 30 },
      { id: '26-40', label: '26–40%', score: 50 },
      { id: '41-60', label: '41–60%', score: 70 },
      { id: '61-100', label: '61–100%', score: 100 },
      { id: 'dont_know', label: 'Nie wiem', score: 0, isDontKnow: true },
    ],
  },

  // ============================================================
  // Q7 — D3 STRATEGIA REUSE (część 2)
  // ============================================================
  {
    id: 'Q7',
    step: 7,
    type: 'single',
    dimension: 'D3',
    isSegmentation: false,
    isConditional: false,
    weight: 0.4,
    text: 'Czy masz przygotowany plan inwestycyjny dla przejścia na RTP?',
    context: 'Q6 pokazuje stan obecny — to pytanie pokazuje gotowość organizacyjną na zmianę. Plan z zatwierdzonym budżetem to twardszy sygnał niż "rozważamy temat".',
    allowDontKnow: true,
    options: [
      {
        id: 'A',
        label: 'Tak, mamy zatwierdzony budżet i harmonogram do 2030 r.',
        score: 100,
      },
      {
        id: 'B',
        label: 'Mamy plan, ale bez zatwierdzonego budżetu',
        score: 60,
      },
      {
        id: 'C',
        label: 'Rozpoznajemy temat, ale jeszcze nie planujemy',
        score: 30,
      },
      {
        id: 'D',
        label: 'Nie planujemy zmian w opakowaniach',
        score: 0,
      },
      {
        id: 'E',
        label: 'Nie wiem',
        score: 0,
        isDontKnow: true,
      },
    ],
  },

  // ============================================================
  // Q8 — D4 COMPLIANCE (część 1)
  // ============================================================
  {
    id: 'Q8',
    step: 8,
    type: 'single',
    dimension: 'D4',
    isSegmentation: false,
    isConditional: false,
    weight: 0.7,
    text: 'Czy Twoja firma jest gotowa wystawić deklarację zgodności opakowania PPWR?',
    context: 'Od 12.08.2026 każde opakowanie wprowadzane na rynek UE musi mieć dokumentację techniczną i podpisaną deklarację zgodności (Declaration of Conformity, DoC). Brak DoC = brak prawa wprowadzenia opakowania na rynek.',
    allowDontKnow: true,
    ppwrReferences: ['Art. 38–40', 'deklaracja zgodności'],
    tooltips: {
      'deklarację zgodności': 'Dokument zawierający: identyfikator opakowania, oświadczenie zgodności z wymogami PPWR (recyklingowalność, brak substancji niebezpiecznych, oznakowanie), podpis osoby uprawnionej. Wzór z aktu delegowanego KE z 30.03.2026.',
    },
    options: [
      {
        id: 'A',
        label: 'Tak, mamy procedurę, szablon i osobę podpisującą',
        score: 100,
      },
      {
        id: 'B',
        label: 'Tak, ale nie mamy procesu/szablonu (musimy go zbudować)',
        score: 60,
      },
      {
        id: 'C',
        label: 'Wiemy, że to obowiązek, ale jeszcze nie zaczęliśmy',
        score: 30,
      },
      {
        id: 'D',
        label: 'Nie wiemy, że to obowiązek',
        score: 0,
      },
      {
        id: 'E',
        label: 'Nie wiem',
        score: 0,
        isDontKnow: true,
      },
    ],
  },

  // ============================================================
  // Q9 — D4 OZNAKOWANIE I DPP
  // ============================================================
  {
    id: 'Q9',
    step: 9,
    type: 'single',
    dimension: 'D4',
    isSegmentation: false,
    isConditional: false,
    weight: 0.3,
    text: 'Czy Twoje opakowania mają lub będą miały unijne oznakowanie zgodne z PPWR (w tym kod QR / DPP)?',
    context: 'PPWR wymaga ujednoliconych symboli recyklingu, materiału i (od 2030 r.) Digital Product Passport dla części opakowań. Akt delegowany KE z 30.03.2026 określa szczegóły.',
    allowDontKnow: true,
    ppwrReferences: ['Art. 11', 'DPP'],
    tooltips: {
      'DPP': 'Digital Product Passport — cyfrowy paszport produktu, dostępny przez kod QR na opakowaniu, linkujący do dokumentacji technicznej. Wymóg od 2030 r. dla części opakowań (głównie >5 kg + RTP).',
    },
    options: [
      {
        id: 'A',
        label: 'Tak, wszystkie opakowania są oznaczone zgodnie z aktualnymi wytycznymi PPWR (KE 30.03.2026)',
        score: 100,
      },
      {
        id: 'B',
        label: 'Częściowo — niektóre kategorie są, niektóre w trakcie',
        score: 60,
      },
      {
        id: 'C',
        label: 'Zaczynamy planować, ale jeszcze nic nie zrobiliśmy',
        score: 30,
      },
      {
        id: 'D',
        label: 'Nie zajmujemy się tym jeszcze',
        score: 0,
      },
      {
        id: 'E',
        label: 'Nie wiem',
        score: 0,
        isDontKnow: true,
      },
    ],
  },

  // ============================================================
  // Q10 — D5 ZARZĄDZANIE
  // ============================================================
  {
    id: 'Q10',
    step: 10,
    type: 'single',
    dimension: 'D5',
    isSegmentation: false,
    isConditional: false,
    weight: 1.0,
    text: 'Kto w firmie odpowiada za przygotowanie do PPWR?',
    context: 'W polskich firmach PPWR często "leży" między działami (logistyka, zakupy, ESG, prawny). Brak właściciela = najczęstsza przyczyna opóźnień.',
    allowDontKnow: true,
    options: [
      {
        id: 'A',
        label: 'Mamy dedykowanego compliance lead\'a lub team PPWR',
        score: 100,
      },
      {
        id: 'B',
        label: 'Odpowiada Sustainability/ESG Manager (jako jedno z zadań)',
        score: 70,
      },
      {
        id: 'C',
        label: 'Odpowiada Dyrektor Logistyki / Zakupów',
        score: 50,
      },
      {
        id: 'D',
        label: 'Nikt formalnie nie odpowiada — temat się pojawia, ale bez właściciela',
        score: 10,
      },
      {
        id: 'E',
        label: 'Nie wiem',
        score: 0,
        isDontKnow: true,
      },
    ],
  },
];

/**
 * Zwraca pytanie po ID, lub null jeśli nie istnieje.
 */
export function getQuestionById(id: string): QuestionConfig | null {
  return QUESTIONS.find((q) => q.id === id) ?? null;
}

/**
 * Zwraca listę pytań do wyświetlenia w aktualnym flow (uwzględnia conditional Q1a).
 */
type AnswerLike = {
  value: unknown;
};

export function getActiveQuestions(answers: Record<string, AnswerLike>): QuestionConfig[] {
  return QUESTIONS.filter((q) => {
    if (!q.isConditional) return true;
    if (!q.conditionalOn) return true;
    const trigger = answers[q.conditionalOn.questionId];
    return trigger?.value === q.conditionalOn.value;
  });
}

/**
 * Zwraca kolejne pytanie po obecnym (uwzględnia conditional logic).
 */
export function getNextQuestion(
  currentId: string,
  answers: Record<string, AnswerLike>,
): QuestionConfig | null {
  const active = getActiveQuestions(answers);
  const idx = active.findIndex((q) => q.id === currentId);
  if (idx === -1 || idx === active.length - 1) return null;
  return active[idx + 1];
}

/**
 * Zwraca poprzednie pytanie (do nawigacji wstecz).
 */
export function getPreviousQuestion(
  currentId: string,
  answers: Record<string, AnswerLike>,
): QuestionConfig | null {
  const active = getActiveQuestions(answers);
  const idx = active.findIndex((q) => q.id === currentId);
  if (idx <= 0) return null;
  return active[idx - 1];
}

/**
 * Total liczba ekranów (uwzględnia Q1a jeśli aktywne).
 */
export function getTotalSteps(answers: Record<string, AnswerLike>): number {
  return getActiveQuestions(answers).length;
}
