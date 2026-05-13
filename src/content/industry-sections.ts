// @ts-nocheck
import type { IndustryCode } from '@/types/industry';

export interface IndustrySection {
  industry: IndustryCode;
  pageHeading: string;
  intro: string;                          // ~80-150 słów wprowadzenia
  obligations: Array<{
    article: string;
    description: string;                  // ~30-50 słów opisu
  }>;
  closingNote: string;
  brandedPageUrl: string;                 // pełen URL do strony /branzowe/
}

export const INDUSTRY_SECTIONS: Record<IndustryCode, IndustrySection> = {
  automotive: {
    industry: 'automotive',
    pageHeading: 'PPWR a logistyka motoryzacyjna w Polsce',
    intro:
      'Branża automotive jest jedną z najwcześniej dotkniętych przez PPWR. Powód: łańcuch dostaw jest długi (OEM → tier-1 → tier-2 → 3PL), opakowania transportowe (KLT, returnable racks, dunnage) są standaryzowane na poziomie VDA, a presja compliance idzie z góry — od koncernów niemieckich (BMW, Mercedes, VW), które już dziś żądają od polskich tierów potwierdzeń zgodności w nowych kontraktach. W polskim wyszukiwaniu "motoryzacja" generuje większy popyt niż "automotive" — to dwa segmenty mentalne, lokalni producenci części vs globalni tier-1, ale wymogi PPWR są dla nich identyczne.',
    obligations: [
      {
        article: 'Art. 5 — substancje niebezpieczne (PFAS, metale ciężkie)',
        description:
          'Od 12.08.2026 zakaz PFAS w opakowaniach food-contact. W automotive dotyczy to głównie cateringu i opakowań części do kabin pojazdów. Sumy Pb+Cd+Hg+Cr(VI) <100 mg/kg — problem starych farb i pigmentów, nowoczesne PP/HDPE zwykle spełniają.',
      },
      {
        article: 'Art. 29 — cele reuse opakowań transportowych',
        description:
          '40% opakowań transportowych w obiegu zwrotnym do 2030 r., 70% do 2040 r. W automotive realnie — typowo 30–50% w polskich tierach — ale wymaga formalnego raportowania per kategoria opakowania.',
      },
      {
        article: 'Art. 11 — DPP i oznakowanie unijne',
        description:
          'Digital Product Passport dla części opakowań od 2030 r. (głównie >5 kg + RTP). Wcześniej: unijne symbole materiałów. Dla automotive realnie dotknie dużych pojemników, palet plastikowych, KLT z RFID.',
      },
      {
        article: 'Art. 38–40 — deklaracja zgodności (DoC)',
        description:
          'Każde opakowanie wprowadzane na rynek UE od 12.08.2026 musi mieć dokumentację techniczną i podpisaną deklarację zgodności. To dotyczy też opakowań wewnątrz-firmowych przekraczających granicę PL → DE / inne kraje UE.',
      },
      {
        article: 'Art. 6 — kryteria recyklingowalności',
        description:
          'Opakowania muszą być projektowane pod recykling (Design for Recycling). PP i HDPE — bez problemu. Mieszane kompozyty, opakowania z folią aluminiową — wymagają przeprojektowania.',
      },
    ],
    closingNote:
      'Pełna analiza rozwiązań RTP dla automotive: bekuplast.pl/branzowe/przemysl-motoryzacyjny-i-automotive/',
    brandedPageUrl: 'https://bekuplast.pl/branzowe/przemysl-motoryzacyjny-i-automotive/',
  },

  // ============================================================
  // BEVERAGES (napoje i browary)
  // ============================================================
  beverages: {
    industry: 'beverages',
    pageHeading: 'PPWR a rynek napojów w Polsce',
    intro:
      'Branża napojów ma w PPWR specyficzne ramy regulacyjne — równolegle obowiązuje system kaucji konsumenckiej (ROP-napoje w Polsce od 2025/2026), obowiązki dla butelek zwrotnych i specyficzne wymagania dla opakowań mających kontakt z napojami. To czyni branżę napojów osobnym klastrem regulacyjnym — w GSC bekuplast widzimy ten klaster jako 16 056 wyświetleń tylko na frazę "skrzynka piwo". Decydent w browarze, mleczarni czy hurtowni napojów ma na biurku trzy regulacje jednocześnie: PPWR (opakowania transportowe), ROP-napoje (kaucja konsumencka) i ROP klasyczny (opakowania jednostkowe).',
    obligations: [
      {
        article: 'Art. 29 — cele reuse + system kaucji',
        description:
          'Napoje mają osobne cele reuse — typowo 10% wybranych kategorii do 2030 r., więcej do 2040. Polski system kaucji konsumenckiej (uruchomiony 2025/2026) działa jako mechanizm wsparcia tych celów. Skrzynki transportowe na butelki zwrotne to klasyczne RTP.',
      },
      {
        article: 'Art. 25 — PCR (post-consumer recyclate) w PET',
        description:
          'Butelki PET na napoje muszą mieć min. 25% recyklatu od 2025 r., 30% od 2030. Dotyczy producenta butelek, ale wpływa na cały łańcuch — skrzynki transportowe muszą wspierać obrót zwrotny dla PET-ów.',
      },
      {
        article: 'Art. 38–40 — deklaracja zgodności dla skrzynek',
        description:
          'Każda skrzynka transportowa na napoje (z przegrodami / bez) musi mieć DoC od 12.08.2026. Specyfika: wykazanie kompatybilności z systemem kaucji + brak interakcji z napojem (food-contact).',
      },
      {
        article: 'Art. 6 — recyklingowalność',
        description:
          'Skrzynki na napoje typowo PP/HDPE — pełna recyklingowalność. Problem: skrzynki kolorowane (brand-coding dla browaru) muszą używać pigmentów bezpiecznych w recyklingu.',
      },
      {
        article: 'Polska ustawa UC100 — implementacja PPWR',
        description:
          'Wprowadzenie PPWR do prawa polskiego (w trakcie konsultacji w maju 2026). Doprecyzowuje obowiązki sprawozdawcze dla branży napojów — kompatybilność z BDO i sprawozdaniami ROP-napoje.',
      },
    ],
    closingNote:
      'Pełna analiza dla napojów: bekuplast.pl/branzowe/sprzedaz-i-transport-na-rynku-napojow/',
    brandedPageUrl: 'https://bekuplast.pl/branzowe/sprzedaz-i-transport-na-rynku-napojow/',
  },

  // ============================================================
  // FOOD (przetwórstwo żywności)
  // ============================================================
  food: {
    industry: 'food',
    pageHeading: 'PPWR a przetwórstwo żywności',
    intro:
      'Przetwórstwo żywności (mięso, nabiał, piekarnictwo, ryby, gotowe dania) podlega PPWR równolegle z rygorystyczną regulacją HACCP i wymogami food-contact (UE 1935/2004). To podwójna dokumentacja — opakowanie musi być jednocześnie bezpieczne dla żywności i zgodne z PPWR. Kluczowe ryzyko: PFAS w opakowaniach food-contact, brak okresu przejściowego od 12.08.2026. Drugie ryzyko: opakowania jednorazowe (kartonowe pojemniki, folia) — PPWR push w kierunku RTP wymusza inwestycje w skrzynki plastikowe, składalne pojemniki, palety.',
    obligations: [
      {
        article: 'Art. 5 — PFAS-ban (zero okresu przejściowego)',
        description:
          'Od 12.08.2026 całkowity zakaz PFAS w opakowaniach food-contact — bez wyjątków, bez okresu przejściowego. Każdy producent musi mieć potwierdzenie PFAS-free od dostawcy opakowań do tego dnia.',
      },
      {
        article: 'Art. 29 — cele reuse opakowań transportowych',
        description:
          '40% opakowań transportowych w obiegu zwrotnym do 2030 r. — dla food&beverage realne wyzwanie, bo branża historycznie operuje na kartonie jednorazowym i palecie drewnianej. Wymaga zmiany infrastruktury.',
      },
      {
        article: 'Art. 26 — opakowania niepotrzebne / oversized',
        description:
          'Zakaz opakowań grupowych, gdzie nie ma uzasadnienia (np. cienkie tacki dla 5 jabłek). Dla food&beverage push w kierunku opakowań bulk / wielokrotnego użytku.',
      },
      {
        article: 'Art. 38–40 — deklaracja zgodności + dokumentacja',
        description:
          'Każde opakowanie food (jednorazowe i RTP) musi mieć DoC od 12.08.2026. Dodatkowo: certyfikat zgodności z UE 1935/2004 (food-contact). To dwa dokumenty na każde SKU.',
      },
      {
        article: 'Art. 6 — Design for Recycling',
        description:
          'Opakowania food muszą być projektowane pod recykling. Problem: opakowania z folią aluminiową, mieszane warstwy. Push w kierunku mono-materiałowych (PP, HDPE, papier).',
      },
    ],
    closingNote:
      'Pełna analiza dla przetwórstwa żywności: bekuplast.pl/branzowe/przetworstwo-zywnosci/',
    brandedPageUrl: 'https://bekuplast.pl/branzowe/przetworstwo-zywnosci/',
  },

  // ============================================================
  // AGRICULTURE (rolnictwo, ogrodnictwo, owoce-warzywa)
  // ============================================================
  agriculture: {
    industry: 'agriculture',
    pageHeading: 'PPWR a rolnictwo i świeża produkcja owocowo-warzywna',
    intro:
      'Branża rolnicza, sadownicza i owocowo-warzywna ma w PPWR specyficzne ramy. Z jednej strony — typowo wysoki udział opakowań wielokrotnego użytku (skrzynki ogrodnicze, palety, IBC), więc cele art. 29 są często łatwo osiągalne. Z drugiej — silne wymogi dotyczące czystości (świeża produkcja, HACCP), kompatybilności z systemami zbiorczymi (Galia, IFCO, Euro Pool System), i regulacji okołoroślinnych (limity pestycydów, śladów). W GSC bekuplast widzimy 45 954 wyświetleń klastra rolniczego — to żywy segment, w którym świeża produkcja owocowo-warzywna stanowi większość zapytań.',
    obligations: [
      {
        article: 'Art. 29 — cele reuse opakowań transportowych',
        description:
          '40% RTP do 2030 r. W rolnictwie/owoco-warzywach często już >50% (skrzynki ogrodnicze + palety plastikowe), ale wymaga formalnego raportowania per SKU. Cel praktycznie osiągalny.',
      },
      {
        article: 'Art. 26 — opakowania niepotrzebne',
        description:
          'Zakaz oversized packaging — folie i tacki dla małych ilości owoców. Push w kierunku sprzedaży na wagę / w opakowaniach RTP / w bulk. Dotyczy głównie dystrybucji końcowej, mniej produkcji.',
      },
      {
        article: 'Art. 5 — substancje (PFAS, metale)',
        description:
          'Skrzynki na świeże owoce i warzywa są w kontakcie z żywnością — PFAS-ban od 12.08.2026 dotyczy także ich. Praktycznie: standardowe PP nie zawiera PFAS, ale wymaga potwierdzenia od dostawcy.',
      },
      {
        article: 'Kompatybilność z systemami zbiorczymi',
        description:
          'Polskie hurtownie agro i odbiorcy z UE coraz częściej wymagają kompatybilności z Galia / IFCO / Euro Pool System. To nie PPWR, ale praktyczna konsekwencja — RTP standardyzuje się.',
      },
      {
        article: 'Art. 38–40 — deklaracja zgodności',
        description:
          'Każda skrzynka ogrodnicza wprowadzana na rynek musi mieć DoC. Specyfika rolnicza: deklaracja często idzie od producenta skrzynek do firmy zbierającej (sadownik nie wprowadza opakowań sam).',
      },
    ],
    closingNote:
      'Pełna analiza dla rolnictwa i świeżej produkcji: bekuplast.pl/branzowe/rolnictwo-ogrodnictwo/',
    brandedPageUrl: 'https://bekuplast.pl/branzowe/rolnictwo-ogrodnictwo/',
  },

  // ============================================================
  // PHARMA (farmacja, kosmetyki, chemia spec.)
  // ============================================================
  pharma: {
    industry: 'pharma',
    pageHeading: 'PPWR a farmacja, kosmetyki i chemia specjalistyczna',
    intro:
      'Farmacja, kosmetyki i chemia specjalistyczna mają w PPWR ważne wyłączenie: opakowania medicinal products są wyłączone z celów reuse art. 29 do 2035 r. (lub dłużej, w zależności od kategorii). To NIE oznacza, że branża nie podlega PPWR — wszystkie inne obowiązki (deklaracja zgodności, recyklingowalność, oznakowanie, limit substancji) obowiązują od 12.08.2026 normalnie. Wyłączenie dotyczy tylko celów ilościowych reuse. Branża pharma jest też bardziej dojrzała compliance — typowo z procesami GMP, kwalifikacją dostawców, zarządzaniem zmianą.',
    obligations: [
      {
        article: 'Art. 29 — cele reuse (z wyłączeniem do 2035)',
        description:
          'Medicinal products wyłączone z 40% RTP do 2035 r. — to nie zwalnia z planowania na 2035+. Kosmetyki i chemia specjalistyczna NIE są wyłączone, ich opakowania transportowe muszą osiągnąć 40% RTP do 2030 r.',
      },
      {
        article: 'Art. 5 — substancje (PFAS, metale, BPA)',
        description:
          'PFAS-ban w opakowaniach food-contact (część kosmetyki). Limity metali ciężkich. Branża pharma typowo spełnia te wymogi już dziś przez GMP, ale wymaga aktualizacji dokumentacji.',
      },
      {
        article: 'Art. 11 — DPP i oznakowanie',
        description:
          'Digital Product Passport dla części opakowań pharma — kluczowe dla traceability (zgodność z FMD — Falsified Medicines Directive). Pharma wymaga DPP wcześniej niż inne branże.',
      },
      {
        article: 'Art. 38–40 — DoC + dokumentacja techniczna',
        description:
          'Każde opakowanie pharma musi mieć DoC + dokumentację techniczną. Specyfika: integracja z istniejącymi procesami GMP i Pharmaceutical Quality System (PQS).',
      },
      {
        article: 'Kompatybilność z clean room / sterilność',
        description:
          'Opakowania pharma często operują w środowiskach clean room / sterylnych. PPWR nie reguluje tego, ale wymóg praktyczny — wybór RTP musi uwzględniać kompatybilność.',
      },
    ],
    closingNote:
      'Pełna analiza dla farmacji i chemii: bekuplast.pl/branzowe/przemysl-farmaceutyczny-i-kosmetyczny/',
    brandedPageUrl: 'https://bekuplast.pl/branzowe/przemysl-farmaceutyczny-i-kosmetyczny/',
  },

  // ============================================================
  // ECOMMERCE B2C
  // ============================================================
  ecommerce_b2c: {
    industry: 'ecommerce_b2c',
    pageHeading: 'PPWR a e-commerce, fulfillment i kurierzy (B2C-side)',
    intro:
      'E-commerce, fulfillment i kurierzy stoją przed PPWR w specyficznej pozycji — Art. 29(3) wprowadza obowiązek reuse opakowań dla dystrybutorów (oferowanie konsumentom zwrotów paczek wielokrotnego użytku). Ten obowiązek dotyczy operatorów ostatniej mili i platform e-commerce. Polska branża e-com (Allegro, InPost, OLX, kurierzy DPD/UPS/InPost) musi wdrożyć rozwiązania paczek zwrotnych. Drugie wyzwanie — Art. 26 (zakaz oversized packaging) — najwięcej e-com paczek to "duże pudło, mała zawartość", co PPWR uderzy w 2026/2027.',
    obligations: [
      {
        article: 'Art. 29(3) — obowiązki dystrybutorów',
        description:
          'Operatorzy e-com muszą oferować konsumentom opcję zwrotu opakowań wielokrotnego użytku. Konkretne progi i timeline w trakcie ustalania w aktach delegowanych — pierwsze obowiązki od 2027 r. Dotyczy paczek dostarczanych pod drzwi i do paczkomatów.',
      },
      {
        article: 'Art. 26 — zakaz oversized packaging',
        description:
          'Zakaz opakowań nieproporcjonalnie dużych do zawartości. Standardowy "duży karton dla małego przedmiotu" z e-com pod uderzeniem. Wymaga optymalizacji wymiarów opakowań i większej liczby standardowych rozmiarów.',
      },
      {
        article: 'Art. 5 — substancje (PFAS w food-contact)',
        description:
          'Fulfillment żywności (gotowe dania, dostawy spożywcze) podlega PFAS-ban od 12.08.2026. Dotyczy głównie firm typu Uber Eats, Glovo, Lisek, dostawy z restauracji.',
      },
      {
        article: 'Art. 38–40 — DoC dla opakowań e-com',
        description:
          'Każde opakowanie e-com (karton, koperta bąbelkowa, RTP) wprowadzane na rynek wymaga DoC od 12.08.2026. Dla operatora e-com to dziesiątki SKU opakowaniowych.',
      },
      {
        article: 'Art. 6 — Design for Recycling',
        description:
          'Opakowania e-com (zwłaszcza koperty bąbelkowe z folią) — wymóg projektowania pod recykling. Push w kierunku mono-materiałowych kopert papierowych lub RTP zwrotnych.',
      },
    ],
    closingNote:
      'Pełna analiza dla e-commerce: bekuplast.pl/branzowe/e-commerce-3pl-fulfillment/',
    brandedPageUrl: 'https://bekuplast.pl/branzowe/e-commerce-3pl-fulfillment/',
  },

  // ============================================================
  // LOGISTICS 3PL B2B (sub-routing z e-com)
  // ============================================================
  ecommerce_b2b: {
    industry: 'ecommerce_b2b',
    pageHeading: 'PPWR a logistyka kontraktowa i 3PL (B2B-side)',
    intro:
      'Operatorzy 3PL i firmy spedycji w obrocie B2B mają w PPWR specyficzną pozycję — operują opakowaniami wprowadzonymi na rynek przez ich klientów (zleceniodawców). Pytanie kluczowe: kto wystawia deklarację zgodności? PPWR mówi że "ten, kto wprowadza opakowanie na rynek" — w praktyce zleceniodawca, nie operator 3PL. Ale operator 3PL musi mieć dokumentację każdego ładunku, który obsługuje, i bywa wymagany do potwierdzenia compliance. W GSC bekuplast widzimy 29 681 wyświetleń klastra logistyki B2B — to osobny segment od intralogistyki (procesy WEWNĄTRZ zakładu) i osobny od e-com (B2C side).',
    obligations: [
      {
        article: 'Art. 29 — cele reuse opakowań transportowych',
        description:
          '40% RTP do 2030 r. dla wprowadzającego — ale dla 3PL praktyczna konsekwencja jest taka, że klienci 3PL coraz częściej wymagają operatorów obsługujących RTP. Pula palet, system zwrotów, infrastruktura mycia.',
      },
      {
        article: 'Art. 38–40 — DoC po stronie zleceniodawcy',
        description:
          'Zleceniodawca wystawia DoC, 3PL nie. Ale 3PL musi mieć w łańcuchu dostępność DoC dla audytu — w kontraktach z klientami warto zapisać obowiązek przekazania DoC dla każdego nowego SKU opakowania.',
      },
      {
        article: 'Art. 6 — Design for Recycling (po stronie zleceniodawcy)',
        description:
          'Również po stronie zleceniodawcy. Ale 3PL ma wpływ — może w kontraktach z dostawcami opakowań (do swoich operacji) wymagać Design for Recycling.',
      },
      {
        article: 'Pulary palet i RTP — model biznesowy',
        description:
          'Polski rynek 3PL coraz częściej operuje pulami RTP (palety plastikowe, skrzyniopalety) jako modelem subscription/pooling. PPWR przyspieszy ten trend — pooling jest naturalną odpowiedzią na cele reuse art. 29.',
      },
      {
        article: 'Polska ustawa UC100 + sprawozdawczość BDO',
        description:
          'Wprowadzenie PPWR do prawa polskiego doprecyzuje obowiązki sprawozdawcze. Dla 3PL operującego między PL a innymi krajami UE — wielowymiarowa sprawozdawczość (BDO + odpowiedniki innych krajów).',
      },
    ],
    closingNote:
      'Pełna analiza dla logistyki 3PL: bekuplast.pl/branzowe/logistyka-i-transport/',
    brandedPageUrl: 'https://bekuplast.pl/branzowe/logistyka-i-transport/',
  },

  // ============================================================
  // RETAIL FMCG
  // ============================================================
  retail_fmcg: {
    industry: 'retail_fmcg',
    pageHeading: 'PPWR a handel detaliczny i FMCG',
    intro:
      'Sieci handlu detalicznego i FMCG (Lidl, Biedronka, Dino, Carrefour, Auchan, Castorama, drogerie, hipermarkety) operują na styku trzech segmentów PPWR: opakowania transportowe (DC ↔ sklepy), opakowania jednostkowe sprzedawane konsumentowi (z markami własnymi), opakowania transportowe od dostawców (przyjmowane do DC). Szczególna pozycja: sieci handlowe to "dystrybutorzy" w rozumieniu art. 29(3) — od 2027 r. obowiązek oferowania opakowań wielokrotnego użytku. W polskim rynku to dotknie głównie hipermarketów i dyskontów.',
    obligations: [
      {
        article: 'Art. 29 — cele reuse + Art. 29(3) — dystrybutor',
        description:
          '40% RTP w opakowaniach transportowych (DC ↔ sklepy) do 2030 r. + obowiązek oferowania konsumentom opakowań wielokrotnego użytku (Art. 29(3)) od 2027 r. dla wybranych kategorii produktów.',
      },
      {
        article: 'Art. 26 — opakowania niepotrzebne',
        description:
          'Zakaz oversized packaging dotyczy marek własnych sieci. To wymaga przeglądu setek SKU pod kątem proporcji opakowanie/produkt. Duży wpływ na designerów opakowań marek własnych.',
      },
      {
        article: 'Art. 25 — PCR w opakowaniach PET marek własnych',
        description:
          'Butelki PET marek własnych muszą mieć min. 25% recyklatu od 2025, 30% od 2030. Sieci handlowe negocjują to z dostawcami pakowania.',
      },
      {
        article: 'Art. 38–40 — DoC dla całego asortymentu marek własnych',
        description:
          'Każde opakowanie marki własnej wprowadzane na rynek PL wymaga DoC. Dla dużej sieci to tysiące SKU — wymaga zinstytucjonalizowanego procesu.',
      },
      {
        article: 'Kompatybilność z systemami pooling RTP',
        description:
          'Sieci handlowe coraz częściej żądają od dostawców kompatybilności z poolingiem palet i skrzynek (CHEP, Euro Pool System). To rynkowa konsekwencja PPWR, nie obowiązek prawny.',
      },
    ],
    closingNote:
      'Pełna analiza dla handlu detalicznego i FMCG: bekuplast.pl/branzowe/handel-detaliczny-fmcg/',
    brandedPageUrl: 'https://bekuplast.pl/branzowe/handel-detaliczny-fmcg/',
  },

  // ============================================================
  // INTRALOGISTICS
  // ============================================================
  intralogistics: {
    industry: 'intralogistics',
    pageHeading: 'PPWR a intralogistyka i operatorzy magazynów',
    intro:
      'Intralogistyka — procesy WEWNĄTRZ zakładu, AKL, shuttle, WMS — operuje typowo na opakowaniach wewnętrznych zamkniętej pętli (closed-loop intra-firmowo). To uprzywilejowana pozycja w PPWR: opakowania w obiegu zamkniętym wewnątrz jednej firmy są typowo łatwo klasyfikowalne jako "100% reuse" w celu art. 29(1). Wyzwanie: udokumentowanie. Druga warstwa to integracja z systemami WMS, RFID, automatyzacją magazynową. W GSC bekuplast intralogistyka generuje 107 422 wyświetleń — to NAJWIĘKSZY klaster zapytań w domenie.',
    obligations: [
      {
        article: 'Art. 29(1) — 100% reuse w obiegu zamkniętym',
        description:
          'Pojemniki używane wyłącznie wewnątrz jednej firmy mogą być klasyfikowane jako 100% reuse — pełna zgodność z art. 29. Wymaga formalnej dokumentacji że pojemnik nie opuszcza pętli firmowej.',
      },
      {
        article: 'Art. 38–40 — DoC dla pojemników intralogistycznych',
        description:
          'Każdy pojemnik wprowadzany na rynek (kupowany przez firmę intralogistyczną) wymaga DoC od dostawcy. Sam operator intralogistyczny nie wystawia DoC, jeśli nie wprowadza opakowania dalej.',
      },
      {
        article: 'Art. 11 — DPP dla wybranych pojemników',
        description:
          'Digital Product Passport dla pojemników >5 kg lub w pętli zwrotnej między firmami — relevant dla niektórych operacji intralogistycznych. RFID/kod QR w pojemnikach to standardowe rozwiązanie.',
      },
      {
        article: 'Kompatybilność z systemami AKL / shuttle / WMS',
        description:
          'PPWR nie reguluje tego, ale wybór RTP musi uwzględniać kompatybilność: precyzja wymiarowa, materiał ESD dla elektroniki, RFID-tagging, kompatybilność z robotami.',
      },
      {
        article: 'Art. 5 — substancje (ESD dla elektroniki)',
        description:
          'Pojemniki ESD (antystatyczne) używane do elektroniki muszą spełniać wymogi materiałowe PPWR. Standardowe mieszanki ESD są zgodne, ale wymagają dokumentacji.',
      },
    ],
    closingNote:
      'Pełna analiza dla intralogistyki: bekuplast.pl/branzowe/intralogistyka/',
    brandedPageUrl: 'https://bekuplast.pl/branzowe/intralogistyka/',
  },

  // ============================================================
  // INDUSTRIAL (produkcja przemysłowa catch-all)
  // ============================================================
  industrial: {
    industry: 'industrial',
    pageHeading: 'PPWR a produkcja przemysłowa (AGD, elektronika, meble, chemia, budowlanka)',
    intro:
      'Produkcja przemysłowa jako catch-all obejmuje branże, które nie mają dedykowanej strony branżowej — AGD (Bosch, Whirlpool, Amica), elektronikę użytkową, meble (IKEA, Black Red White), chemię niespecjalistyczną, materiały budowlane (Knauf, Cersanit). Wspólny mianownik: B2B classic producent, który wprowadza produkty w opakowaniach transportowych na rynek UE. PPWR dotyka ich głównie przez art. 29 (cele reuse) i art. 38-40 (deklaracja zgodności). Każda z sub-branż ma specyficzne wymagania (ESD dla elektroniki, ognioodporność dla budowlanki), ale wszystkie podlegają wspólnemu zakresowi PPWR.',
    obligations: [
      {
        article: 'Art. 29 — cele reuse opakowań transportowych',
        description:
          '40% RTP do 2030 r. Dla większości producentów przemysłowych to wymaga inwestycji — typowo wciąż 70%+ obrotu kartonem i drewnem. Najszybsze rozwiązanie: closed-loop intra-firmowy + pooling palet plastikowych.',
      },
      {
        article: 'Art. 38–40 — deklaracja zgodności',
        description:
          'Każde opakowanie wprowadzane na rynek UE wymaga DoC od 12.08.2026. Dla producenta przemysłowego z dużym SKU portfolio to znaczący proces dokumentacyjny.',
      },
      {
        article: 'Art. 5 — substancje (ESD, BPA, metale)',
        description:
          'Dla elektroniki — pojemniki ESD muszą mieć dokumentację. Dla chemii — limit substancji w opakowaniach kontaktujących z produktem. Dla mebli — typowo brak problemu materiałowego.',
      },
      {
        article: 'Art. 6 — Design for Recycling',
        description:
          'Opakowania muszą być projektowane pod recykling. Mieszane kompozyty, opakowania z folią aluminiową, opakowania kolorowane wymagają audytu projektowego.',
      },
      {
        article: 'Art. 26 — opakowania niepotrzebne',
        description:
          'Push w kierunku optymalizacji rozmiarów opakowań. Dla AGD/elektroniki — eliminacja "powietrza" w pudłach. Dla mebli — eliminacja overpacking-u płyt.',
      },
    ],
    closingNote:
      'Pełna analiza dla produkcji przemysłowej: bekuplast.pl/branzowe/produkcja-przemyslowa/',
    brandedPageUrl: 'https://bekuplast.pl/branzowe/produkcja-przemyslowa/',
  },

  // ============================================================
  // OTHER (catch-all)
  // ============================================================
  other: {
    industry: 'other',
    pageHeading: 'PPWR a Twoja branża',
    intro:
      'Twoja firma działa w branży, która nie ma dedykowanej strony branżowej w bekuplast.pl, ale to nie znaczy, że PPWR jej nie dotyczy. Każda firma wprowadzająca opakowania na rynek UE podlega PPWR od 12.08.2026 — obowiązki są praktycznie identyczne dla wszystkich branż: deklaracja zgodności, recyklingowalność opakowań, oznakowanie, limity substancji. Różnice są w specyfice (np. opakowania mające kontakt z żywnością mają dodatkowe wymogi, opakowania w branżach z wyłączeniami jak farmacja mają inne terminy). Skontaktuj się z nami — przygotujemy spersonalizowaną interpretację dla Twojej sytuacji.',
    obligations: [
      {
        article: 'Art. 29 — cele reuse',
        description:
          '40% opakowań transportowych w obiegu zwrotnym do 2030 r. — dotyczy każdej branży nieobjętej wyłączeniem (farmacja do 2035 r.).',
      },
      {
        article: 'Art. 5 — substancje niebezpieczne',
        description:
          'PFAS-ban w opakowaniach food-contact, limit metali ciężkich — uniwersalne wymogi.',
      },
      {
        article: 'Art. 38–40 — deklaracja zgodności',
        description:
          'Obowiązek dla każdego, kto wprowadza opakowanie na rynek UE. Bez wyjątków branżowych.',
      },
      {
        article: 'Art. 6 — Design for Recycling',
        description:
          'Opakowania muszą być projektowane pod recykling. Materiały, struktura, możliwość rozdzielenia warstw.',
      },
      {
        article: 'Konsultacja — przygotujemy interpretację dla Twojej branży',
        description:
          'Nasz zespół chętnie omówi specyfikę Twojej sytuacji. Skontaktuj się przez polska@bekuplast.com lub LinkedIn.',
      },
    ],
    closingNote:
      'Skontaktuj się z nami — przygotujemy spersonalizowaną interpretację: polska@bekuplast.com',
    brandedPageUrl: 'https://bekuplast.pl/branzowe/',
  },
};
