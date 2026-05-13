// @ts-nocheck
import type { DimensionCode } from '@/types/audit';
import type { IndustryCode } from '@/types/industry';

export interface RedFlag {
  dimension: DimensionCode;
  threshold: number;       // jeśli score wymiaru < threshold → pokazujemy
  text: string;            // ~30-50 słów
}

export const INDUSTRY_RED_FLAGS: Record<IndustryCode, RedFlag[]> = {
  automotive: [
    { dimension: 'D2', threshold: 60, text: 'Tier-1 niemieccy (BMW, Mercedes, VW) w nowych kontraktach od 2026 r. wymagają potwierdzeń compliance PPWR od dostawców. Brak inwentaryzacji = ryzyko utraty kontraktów, nie tylko kara administracyjna.' },
    { dimension: 'D4', threshold: 60, text: 'VDA-RL-KLT to standard wymiarowy — NIE zastępuje compliance PPWR. Każdy KLT musi mieć osobną deklarację zgodności PPWR, niezależnie od certyfikatu VDA.' },
    { dimension: 'D3', threshold: 50, text: 'W branży automotive PPWR rozdziela opakowania transportowe (art. 29) od opakowań produktów (inne progi). Ta klasyfikacja często mylona — wymaga konsultacji.' },
    { dimension: 'D5', threshold: 50, text: 'Polski rynek tier-1/2 ma niedobór compliance liderów — typowo "leży na zakupach" lub "na logistyce". Bez formalnego właściciela ryzyko opóźnień jest wysokie.' },
  ],
  beverages: [
    { dimension: 'D2', threshold: 60, text: 'Kaucja konsumencka + ROP-napoje + PPWR = trzy ramy regulacyjne jednocześnie. Wykaz opakowań musi być spójny z trzema systemami sprawozdawczymi.' },
    { dimension: 'D3', threshold: 60, text: 'Skrzynki przegrodowe na butelki zwrotne to klasyczny RTP — branża powinna być w art. 29 mocna. Niski score sugeruje że nie liczymy obrotu zwrotnego prawidłowo.' },
    { dimension: 'D4', threshold: 60, text: 'PCR (post-consumer recyclate) w PET — 25% od 2025, 30% od 2030. Wymaga dokumentacji od dostawcy butelek, nie tylko skrzynek.' },
    { dimension: 'D1', threshold: 50, text: 'Polska ustawa UC100 (implementacja PPWR) w konsultacjach w Q2 2026. Branża napojów ma osobne paragrafy — śledź konsultacje, możliwy wpływ na kaucję.' },
  ],
  food: [
    { dimension: 'D2', threshold: 60, text: 'PFAS-ban food-contact od 12.08.2026 BEZ okresu przejściowego. Brak potwierdzenia PFAS-free od dostawcy = blokada wprowadzania opakowania na rynek. To krytyczna luka.' },
    { dimension: 'D4', threshold: 60, text: 'Opakowania food wymagają DWÓCH dokumentów: DoC PPWR + certyfikat zgodności UE 1935/2004 (food-contact). To dwa różne dokumenty, nie jeden z dwoma celami.' },
    { dimension: 'D3', threshold: 50, text: 'Branża food historycznie operuje na kartonie jednorazowym + palecie drewnianej. Dojście do 40% RTP w 2030 r. wymaga znaczącej inwestycji infrastrukturalnej.' },
    { dimension: 'D5', threshold: 50, text: 'W food&beverage temat PPWR często "leży" między działem jakości (HACCP) a zakupami (opakowania). Brak jednego właściciela = typowa pułapka.' },
  ],
  agriculture: [
    { dimension: 'D2', threshold: 50, text: 'Świeża produkcja owocowo-warzywna podlega HACCP + PPWR + ramom dotyczącym pestycydów jednocześnie. Wykaz opakowań musi mapować się na wszystkie trzy systemy.' },
    { dimension: 'D3', threshold: 70, text: 'W rolnictwie typowo >50% to już RTP (skrzynki ogrodnicze, palety). Niski score sugeruje problem klasyfikacyjny lub niedoszacowanie obrotu zwrotnego.' },
    { dimension: 'D4', threshold: 60, text: 'Kompatybilność z systemami zbiorczymi (Galia, IFCO, Euro Pool System) — coraz częstszy wymóg odbiorców z UE. To nie PPWR, ale praktyczna konsekwencja.' },
    { dimension: 'D5', threshold: 40, text: 'Małe gospodarstwa rolne typowo nie mają dedykowanego właściciela PPWR — często to właściciel/prezes osobiście. Wymaga uproszczonego procesu.' },
  ],
  pharma: [
    { dimension: 'D1', threshold: 60, text: 'Wyłączenie pharma z celów reuse art. 29 do 2035 r. NIE zwalnia z innych obowiązków PPWR. Wszystkie obowiązki DoC, oznakowanie, substancje obowiązują od 12.08.2026.' },
    { dimension: 'D4', threshold: 70, text: 'Branża pharma typowo ma wysokie compliance przez GMP — niska gotowość DoC sugeruje że PPWR nie jest jeszcze włączony do Pharmaceutical Quality System (PQS).' },
    { dimension: 'D2', threshold: 60, text: 'FMD (Falsified Medicines Directive) wymaga traceability — z DPP od 2030 r. PPWR doprecyzowuje. Pharma powinna już dziś zacząć kompatybilność z DPP.' },
    { dimension: 'D5', threshold: 60, text: 'Pharma typowo ma compliance team. Jeśli D5 niski w pharma — sugeruje że temat opakowań jest poza compliance ogólnym, w zakupach lub logistyce.' },
  ],
  ecommerce_b2c: [
    { dimension: 'D1', threshold: 50, text: 'Art. 29(3) — obowiązki dystrybutorów oferowania opakowań wielokrotnego użytku — pierwsze terminy od 2027 r. Brak świadomości tej kategorii = ryzyko opóźnień.' },
    { dimension: 'D3', threshold: 40, text: 'Branża e-com B2C operuje typowo na kartonie + folii — typowo <20% RTP dziś. Cel 40% w 2030 r. wymaga przeprojektowania logistyki paczkomatowej.' },
    { dimension: 'D2', threshold: 50, text: 'Art. 26 (zakaz oversized packaging) uderzy w "duże pudło, mała zawartość". E-commerce wymaga audytu wymiarów opakowań — możliwy efekt na całym portfelu SKU.' },
    { dimension: 'D4', threshold: 50, text: 'Operator e-com ma typowo dziesiątki SKU opakowaniowych (koperty, kartony, folie). Każdy wymaga DoC od 12.08.2026 — to znaczący proces dokumentacyjny.' },
  ],
  ecommerce_b2b: [
    { dimension: 'D4', threshold: 60, text: 'Pełnomocnictwo do podpisywania DoC w imieniu klientów-zleceniodawców wymaga dodatkowej klauzuli kontraktowej. Bez tego operator 3PL nie ma podstawy prawnej.' },
    { dimension: 'D3', threshold: 50, text: 'Pulary palet i RTP-as-a-service to rosnący model biznesowy 3PL. Niski D3 sugeruje że firma nie wykorzystuje tego trendu — możliwa przewaga konkurencyjna.' },
    { dimension: 'D2', threshold: 50, text: 'Operator 3PL operuje opakowaniami wprowadzonymi przez klientów — w kontraktach warto zapisać obowiązek przekazania DoC dla każdego nowego SKU od klienta.' },
    { dimension: 'D5', threshold: 50, text: 'Logistyka 3PL typowo nie ma compliance team — temat "leży" między zakupami a operacjami. Bez właściciela ryzyko luk w łańcuchu kontraktowym.' },
  ],
  retail_fmcg: [
    { dimension: 'D1', threshold: 60, text: 'Sieci handlowe to "dystrybutorzy" w rozumieniu Art. 29(3) — od 2027 r. obowiązek oferowania opakowań wielokrotnego użytku konsumentom. Pierwsze pilotaże już dziś warto.' },
    { dimension: 'D4', threshold: 60, text: 'Każde opakowanie marek własnych wymaga DoC. Dla dużej sieci to tysiące SKU — wymaga zinstytucjonalizowanego procesu, nie ad-hoc.' },
    { dimension: 'D2', threshold: 50, text: 'Wykaz opakowań w sieci handlowej musi rozdzielać 3 strumienie: opakowania transportowe DC↔sklepy, opakowania marek własnych, opakowania od dostawców (do DC).' },
    { dimension: 'D3', threshold: 50, text: 'CHEP, Euro Pool System — pooling palet to standard branżowy. Niski D3 sugeruje że firma nie korzysta z poolingu — wzrasta jednostkowy koszt zgodności.' },
  ],
  intralogistics: [
    { dimension: 'D3', threshold: 70, text: 'Intralogistyka w obiegu zamkniętym (intra-firmowo) może klasyfikować pojemniki jako 100% reuse (Art. 29(1)). Niski D3 sugeruje brak formalnej dokumentacji tego.' },
    { dimension: 'D4', threshold: 60, text: 'Operator intralogistyczny typowo NIE wystawia DoC (nie wprowadza opakowań dalej). Ale potrzebuje DoC od dostawców pojemników — kontrola łańcucha dostawców.' },
    { dimension: 'D2', threshold: 55, text: 'Pojemniki ESD dla elektroniki — wymagają dokumentacji materiałowej. PPWR ich nie wyróżnia, ale ESD compliance wymaga równoległej dokumentacji.' },
    { dimension: 'D1', threshold: 40, text: 'Branża intralogistyki ma najmniejszą świadomość PPWR — typowo "to nas nie dotyczy". Faktycznie dotyka przez D4 (DoC dla zakupu pojemników) i D2 (inwentaryzacja).' },
  ],
  industrial: [
    { dimension: 'D2', threshold: 50, text: 'Produkcja przemysłowa to catch-all — duża różnorodność opakowań. Wykaz musi rozdzielać sub-segmenty (AGD/elektronika/meble/chemia) z osobnymi wymogami.' },
    { dimension: 'D3', threshold: 40, text: 'Branża industrial historycznie operuje na kartonie + drewnie. Cel 40% RTP w 2030 r. = znacząca inwestycja w plastikowe palety + closed-loop intra-firmowy.' },
    { dimension: 'D4', threshold: 50, text: 'Duże SKU portfolio = setki DoC. Bez procesu zinstytucjonalizowanego (workflow w DMS) to manualny chaos w 12.08.2026.' },
    { dimension: 'D5', threshold: 50, text: 'W industrial PPWR typowo "leży" między zakupami a operacjami. Bez właściciela powyżej kierownika działu — opóźnienia gwarantowane.' },
  ],
  other: [
    { dimension: 'D1', threshold: 60, text: 'Twoja branża nie ma dedykowanej interpretacji PPWR w bekuplast.pl. Skontaktuj się z polska@bekuplast.com — przygotujemy spersonalizowaną analizę dla Twojej sytuacji.' },
    { dimension: 'D4', threshold: 50, text: 'Każda firma wprowadzająca opakowanie na rynek UE od 12.08.2026 wymaga DoC. Brak branżowej specyfiki nie zwalnia z tego obowiązku.' },
    { dimension: 'D2', threshold: 50, text: 'Inwentaryzacja opakowań to fundament dla każdej branży. Bez wykazu nie można wystawić DoC ani raportować w BDO.' },
  ],
};
