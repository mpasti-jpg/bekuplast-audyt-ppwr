// @ts-nocheck
import type { CategoryCode, DimensionCode } from '@/types/audit';

export interface Priority {
  dimension: DimensionCode;
  text: string;
  urgency: 'critical' | 'high' | 'medium' | 'low';
}

export interface ActionTask {
  week: string;              // "T1", "T2"...
  task: string;
  owner: string;
  output: string;
}

export interface ActionPlanPhase {
  weeks: string;             // np. "T1–T4"
  title: string;
  tasks: ActionTask[];
}

export interface ActionPlan {
  category: CategoryCode;
  headline: string;
  intro: string;             // ~100 słów
  topPriorities: Priority[]; // 3-5 priorytetów do wyboru top 3 na stronie wyniku
  phases: ActionPlanPhase[]; // 3 fazy M1/M2/M3
  estimatedCost: string;
  trapsCallout: string;      // ~80 słów ostrzeżenie o pułapkach
  closingNote: string;       // ~50 słów zamknięcia
}

export const ACTION_PLANS: Record<CategoryCode, ActionPlan> = {
  critical_gap: {
    category: 'critical_gap',
    headline: 'Plan ratunkowy: 90 dni do minimum compliance',
    intro:
      'Twoja firma jest w sytuacji wymagającej natychmiastowych decyzji. W 90 dni nie da się osiągnąć pełnej gotowości, ale można osiągnąć MINIMUM COMPLIANCE — czyli stan, w którym 12.08.2026 nie blokuje operacji. Plan poniżej koncentruje się na trzech krytycznych elementach: inwentaryzacji opakowań (D2), procedurze deklaracji zgodności (D4) i przypisaniu właściciela tematu (D5). Pozostałe wymiary będziemy budować w II i III kwartale 2026 — po sierpniu, gdy nie ma już ryzyka zatrzymania operacji.',
    topPriorities: [
      {
        dimension: 'D5',
        text: 'Przypisz właściciela tematu PPWR w organizacji — najlepiej Sustainability/ESG Manager lub Dyrektor Logistyki z formalnym pełnomocnictwem zarządu. Bez właściciela żaden krok dalej nie zadziała.',
        urgency: 'critical',
      },
      {
        dimension: 'D2',
        text: 'Przeprowadź szybką inwentaryzację opakowań: lista wszystkich SKU transportowych kupowanych w 2025 r. + materiały + dostawcy + roczne wolumeny. Bez tego nie ma jak wystawić deklaracji zgodności.',
        urgency: 'critical',
      },
      {
        dimension: 'D4',
        text: 'Zbuduj szablon deklaracji zgodności (wg aktu delegowanego KE z 30.03.2026) + ustal, kto podpisuje. Bez tego od 12.08.2026 każda dostawa do klienta UE jest zablokowana.',
        urgency: 'critical',
      },
      {
        dimension: 'D1',
        text: 'Zorganizuj wewnętrzny briefing PPWR dla zarządu i zespołu kluczowego (2h). Bez wspólnej świadomości faktów żaden plan nie zostanie zrealizowany w terminie.',
        urgency: 'high',
      },
      {
        dimension: 'D3',
        text: 'Plan inwestycyjny RTP przesuwamy na Q3/Q4 2026 — w 90 dni krytycznych skupiamy się tylko na compliance, RTP zostawiamy do późniejszego etapu.',
        urgency: 'medium',
      },
    ],
    phases: [
      {
        weeks: 'T1–T4',
        title: 'Miesiąc 1: właściciel + briefing + szybka inwentaryzacja',
        tasks: [
          { week: 'T1', task: 'Zarząd przypisuje właściciela tematu PPWR z formalnym pełnomocnictwem. Briefing zarządu (2h).', owner: 'Zarząd + nowy PPWR Lead', output: 'Decyzja + pełnomocnictwo' },
          { week: 'T2', task: 'Briefing zespołu (zakupy, logistyka, sales). Komunikat o priorytecie.', owner: 'PPWR Lead', output: 'Notatka wewnętrzna + RACI' },
          { week: 'T3', task: 'Zaciągnij dane z ERP — wszystkie opakowania transportowe kupione w 2025 r. Lista SKU.', owner: 'Zakupy + IT', output: 'Excel surowy' },
          { week: 'T4', task: 'Verify lista — sprawdź czy nie pominięto dostawców 3PL / podwykonawców. Uzupełnij ankietą do magazynów.', owner: 'PPWR Lead + Logistyka', output: 'Excel zweryfikowany' },
        ],
      },
      {
        weeks: 'T5–T8',
        title: 'Miesiąc 2: dokumentacja dostawców + szablon DoC',
        tasks: [
          { week: 'T5', task: 'Roześlij do dostawców opakowań ankietę: materiał, % recyklatu, PFAS-free, gotowość DoC.', owner: 'Zakupy', output: 'Ankieta wysłana ×N dostawców' },
          { week: 'T6', task: 'Zbierz odpowiedzi, eskaluj brakujące. Mapuj opakowania → kategorie PPWR.', owner: 'PPWR Lead + zewn. prawnik', output: 'Tabela mapowania' },
          { week: 'T7', task: 'Pobierz wzór DoC z aktu delegowanego KE 30.03.2026 (eur-lex). Dostosuj do firmy.', owner: 'PPWR Lead + Legal', output: 'Wzór DoC PDF' },
          { week: 'T8', task: 'Decyzja kto podpisuje (rola, nie osoba) + pełnomocnictwo formalne.', owner: 'Zarząd + HR', output: 'Decyzja + pełnomocnictwo' },
        ],
      },
      {
        weeks: 'T9–T12',
        title: 'Miesiąc 3: pilot DoC + sign-off zarządu',
        tasks: [
          { week: 'T9', task: 'Pilot: wystawienie pierwszej DoC dla 1-2 najważniejszych SKU. Walidacja procesu.', owner: 'PPWR Lead + zewn. prawnik', output: 'Pierwsze DoC + protokół' },
          { week: 'T10', task: 'Rollout na pozostałe SKU — typowo 5-15 szablonów dla firmy waszej skali.', owner: 'PPWR Lead + Zakupy', output: 'DoC × N SKU' },
          { week: 'T11', task: 'Archiwizacja DoC w DMS/SharePoint. Procedura update przy nowych SKU.', owner: 'PPWR Lead + IT', output: 'Folder DMS + procedura' },
          { week: 'T12', task: 'Sign-off zarządu: minimum compliance osiągnięty. Plan na Q3-Q4 (RTP, raportowanie, oznakowanie).', owner: 'Zarząd', output: 'Protokół + roadmap' },
        ],
      },
    ],
    estimatedCost: 'Koszt zewnętrzny: prawnik ds. compliance opakowaniowego 15–25 godz. × 400–600 zł/h = 6 000–15 000 zł netto. Wewnętrzny wysiłek: PPWR Lead ~120 godz., zakupy ~60 godz., logistyka ~30 godz., zarząd ~10 godz. = ~220 godz. w 3 miesiące. Realistyczny budżet awaryjny.',
    trapsCallout:
      'Trzy najczęstsze pułapki w sytuacji krytycznej: (1) próba zrobienia wszystkiego naraz — koncentrujemy się TYLKO na D2/D4/D5 do 12.08.2026, reszta po; (2) liczenie, że dostawca załatwi DoC — DoC ma osobną odpowiedzialność wprowadzającego, nawet jeśli dostawca daje swoją; (3) odkładanie decyzji o właścicielu — bez właściciela żaden plan nie zostanie wdrożony, to musi być pierwsza decyzja.',
    closingNote:
      'Po wdrożeniu tego planu firma osiąga MINIMUM COMPLIANCE — operacje nie są zablokowane 12.08.2026. Pełna gotowość (cele reuse, oznakowanie, raportowanie) wymaga dodatkowych 6-12 miesięcy pracy w Q3/Q4 2026 i 2027.',
  },

  // ============================================================
  // NISKA GOTOWOŚĆ (25-44)
  // ============================================================
  low_readiness: {
    category: 'low_readiness',
    headline: 'Plan startup: od rozpoznania do gotowości w 90 dni',
    intro:
      'Twoja firma rozpoznaje temat, ale brakuje konkretnych działań. Dobra wiadomość: masz jeszcze czas. 90-dniowy plan startup pozwala zbudować podstawową gotowość PPWR — inwentaryzację, procedurę DoC, przypisanego właściciela i pierwszą wersję planu inwestycyjnego dla RTP. Po tych 90 dniach masz ~6 miesięcy do 12.08.2026 na doszlifowanie. Plan zakłada, że firma startuje praktycznie od zera w 3 z 5 wymiarów, ale ma podstawową świadomość regulacyjną i przynajmniej jedną osobę, która myśli o temacie.',
    topPriorities: [
      {
        dimension: 'D5',
        text: 'Formalizuj właściciela tematu PPWR — dziś temat się pojawia, ale nie ma jednego pełnomocnika. Bez tego dalsze kroki gubią tempo.',
        urgency: 'high',
      },
      {
        dimension: 'D2',
        text: 'Przeprowadź pełną inwentaryzację opakowań w 4 tygodnie. To podstawa wszystkich kolejnych kroków — DoC, raportowanie BDO, negocjacje z dostawcami.',
        urgency: 'high',
      },
      {
        dimension: 'D4',
        text: 'Zbuduj procedurę DoC i pilotuj na 1-2 SKU. Skala czasowa: 4-6 tygodni. Krytyczna ścieżka do 12.08.2026.',
        urgency: 'high',
      },
      {
        dimension: 'D3',
        text: 'Plan inwestycyjny RTP — pierwsza wersja z budżetem i timelinem. Cel: 40% RTP do 2030 r. wymaga kilkuletniego rolloutu.',
        urgency: 'medium',
      },
      {
        dimension: 'D1',
        text: 'Pogłębienie świadomości regulacyjnej — zbuduj zespół, który czyta akty delegowane i monitoruje zmiany. Subskrypcja branżowa lub zewnętrzny doradca.',
        urgency: 'medium',
      },
    ],
    phases: [
      {
        weeks: 'T1–T4',
        title: 'Miesiąc 1: inwentaryzacja + setup organizacyjny',
        tasks: [
          { week: 'T1', task: 'Kick-off PPWR — zarząd + Lead + Logistyka + Zakupy. Akceptacja zakresu i timelinu. RACI.', owner: 'Zarząd + nowy PPWR Lead', output: 'Protokół + RACI' },
          { week: 'T2', task: 'Lista wszystkich opakowań transportowych — z ERP + ankieta do magazynów + dostawców.', owner: 'Zakupy + Logistyka', output: 'Excel z 100% SKU' },
          { week: 'T3', task: 'Weryfikacja wag i materiałów. Oświadczenia dostawców o składzie (PFAS-free, % recyklatu).', owner: 'Zakupy', output: 'Oświadczenia ×N' },
          { week: 'T4', task: 'Mapping opakowań → kategorie PPWR. Określenie, które wymagają DoC.', owner: 'PPWR Lead + zewn. prawnik', output: 'Tabela mapowania' },
        ],
      },
      {
        weeks: 'T5–T8',
        title: 'Miesiąc 2: procedura DoC + szablon',
        tasks: [
          { week: 'T5', task: 'Pobierz wzór DoC z aktu delegowanego KE. Dostosuj do firmy.', owner: 'PPWR Lead + Legal', output: 'Wzór DoC PDF' },
          { week: 'T6', task: 'Wybór osoby podpisującej (rola). Pełnomocnictwo formalne.', owner: 'Zarząd + HR', output: 'Decyzja + pełnomocnictwo' },
          { week: 'T7', task: 'Proces walidacji pre-podpis: kto przegląda, kto akceptuje, kto archiwizuje.', owner: 'PPWR Lead + IT', output: 'Workflow w DMS' },
          { week: 'T8', task: 'Szkolenie zespołu zakupów i logistyki o kiedy uruchamiać DoC.', owner: 'PPWR Lead', output: 'Materiał szkoleniowy' },
        ],
      },
      {
        weeks: 'T9–T12',
        title: 'Miesiąc 3: pilot DoC + plan RTP',
        tasks: [
          { week: 'T9', task: 'Pilot: pierwsza DoC dla 1-2 najważniejszych SKU. Walidacja procesu.', owner: 'PPWR Lead', output: 'Pierwsze DoC' },
          { week: 'T10', task: 'Walidacja DoC przez zewn. prawnika — czy formalnie poprawna.', owner: 'PPWR Lead + zewn. ekspert', output: 'Audit DoC' },
          { week: 'T11', task: 'Rollout DoC na 100% inwentarza opakowań. Plan inwestycyjny RTP — pierwsza wersja.', owner: 'PPWR Lead + Finanse', output: 'DoC × N + plan RTP draft' },
          { week: 'T12', task: 'Review zarządu: gotowość na 12.08.2026 potwierdzona. Akceptacja planu RTP do 2030.', owner: 'Zarząd', output: 'Sign-off + roadmap' },
        ],
      },
    ],
    estimatedCost: 'Koszt zewnętrzny: prawnik ds. compliance 10–15 godz. × 400–500 zł/h = 4 000–7 500 zł netto. Wewnętrzny: PPWR Lead ~80 godz., zakupy ~40 godz., logistyka ~25 godz. = ~150 godz. w 3 miesiące.',
    trapsCallout:
      'Najczęstsze pułapki: (1) próba zrobienia inwentaryzacji "okiem" zamiast z ERP — gwarantuje braki; (2) DoC od dostawcy ≠ Twoja DoC — to dwa różne dokumenty z różną odpowiedzialnością; (3) niedoszacowanie czasu IT — wpięcie DoC do DMS i procesu zakupowego zajmuje 2-3 tygodnie więcej niż się wydaje.',
    closingNote:
      'Po 90 dniach masz solidne fundamenty: właściciela, inwentaryzację, procedurę DoC, plan RTP. Pozostałe 6 miesięcy do 12.08.2026 to czas na rollout, doszlifowanie i opcjonalnie rozszerzenie zakresu.',
  },

  // ============================================================
  // ŚREDNIA GOTOWOŚĆ (45-64)
  // ============================================================
  medium_readiness: {
    category: 'medium_readiness',
    headline: 'Plan domknięcia: zlikwiduj luki w słabych wymiarach',
    intro:
      'Twoja firma ma większość elementów na miejscu, ale 2-3 wymiary wymagają wzmocnienia. Plan na najbliższe 90 dni koncentruje się na tych właśnie słabych punktach — domyślnie są to D2 (inwentaryzacja) i D4 (compliance/DoC). Strategia: wykorzystać silne wymiary jako dźwignię (jeśli macie D5 wysokie, znaczy że jest właściciel, który poprowadzi resztę). Bez zaczynania od zera, ale z konkretnym domknięciem luk.',
    topPriorities: [
      {
        dimension: 'D2',
        text: 'Domknij inwentaryzację — masz częściowe dane, brakuje formalnego wykazu z wagami, materiałami, dostawcami per SKU. To podstawa dla DoC i raportowania BDO.',
        urgency: 'high',
      },
      {
        dimension: 'D4',
        text: 'Zbuduj szablon i procedurę DoC. Bez tego od 12.08.2026 wystawianie deklaracji to manualna praca przy każdej wysyłce — niezarządzalne dla firmy waszej skali.',
        urgency: 'high',
      },
      {
        dimension: 'D3',
        text: 'Zwiększ udział RTP zgodnie z planem — większość firm "średniej gotowości" ma 25-40% RTP, do 2030 trzeba dojść do 40%+. Trzymaj plan inwestycyjny aktualny.',
        urgency: 'medium',
      },
      {
        dimension: 'D1',
        text: 'Subskrypcja branżowa lub doradca PPWR — monitoring aktów delegowanych i interpretacji UE. Niezbędne dla utrzymania pozycji.',
        urgency: 'medium',
      },
      {
        dimension: 'D5',
        text: 'Formalizacja procesu eskalacji — jeśli właściciel zidentyfikuje ryzyko, do kogo idzie eskalacja? Kwartalny review na zarządzie.',
        urgency: 'medium',
      },
    ],
    phases: [
      {
        weeks: 'T1–T4',
        title: 'Miesiąc 1: domknięcie inwentaryzacji',
        tasks: [
          { week: 'T1', task: 'Kick-off PPWR — przegląd obecnego stanu, identyfikacja luk D2/D4.', owner: 'PPWR Lead + zarząd', output: 'Lista luk + RACI' },
          { week: 'T2', task: 'Dopełnij wykaz opakowań — wszystkie SKU, materiały, wagi, dostawcy.', owner: 'Zakupy + Logistyka', output: 'Wykaz 100%' },
          { week: 'T3', task: 'Oświadczenia dostawców (PFAS, recyklat, gotowość DoC). Mapping kategorii PPWR.', owner: 'Zakupy', output: 'Oświadczenia + mapping' },
          { week: 'T4', task: 'Walidacja inwentaryzacji — porównanie z BDO, sprawozdaniami ROP.', owner: 'PPWR Lead', output: 'Audit inwentaryzacji' },
        ],
      },
      {
        weeks: 'T5–T8',
        title: 'Miesiąc 2: szablon i procedura DoC',
        tasks: [
          { week: 'T5', task: 'Wzór DoC + dostosowanie. Procedura walidacji pre-podpis.', owner: 'PPWR Lead + Legal', output: 'Wzór + procedura' },
          { week: 'T6', task: 'Decyzja kto podpisuje + pełnomocnictwo formalne.', owner: 'Zarząd + HR', output: 'Pełnomocnictwo' },
          { week: 'T7', task: 'Workflow DoC w DMS — automatyzacja archiwizacji.', owner: 'PPWR Lead + IT', output: 'DMS workflow' },
          { week: 'T8', task: 'Szkolenie zespołu (2h dla zakupów i logistyki).', owner: 'PPWR Lead', output: 'Materiał szkoleniowy' },
        ],
      },
      {
        weeks: 'T9–T12',
        title: 'Miesiąc 3: pilot + walidacja + RTP review',
        tasks: [
          { week: 'T9', task: 'Pilot DoC dla 1-2 najważniejszych SKU. Walidacja procesu.', owner: 'PPWR Lead', output: 'Pierwsze DoC' },
          { week: 'T10', task: 'Walidacja DoC przez zewnętrznego eksperta (prawnik / Rekopol).', owner: 'PPWR Lead + zewn.', output: 'Audit DoC' },
          { week: 'T11', task: 'Rollout DoC na 100% inwentarza. Review planu RTP — czy idziemy do 40% w 2030.', owner: 'PPWR Lead + Finanse', output: 'DoC × N + RTP update' },
          { week: 'T12', task: 'Final review zarządu: gotowość potwierdzona, słabe wymiary domknięte.', owner: 'Zarząd', output: 'Sign-off' },
        ],
      },
    ],
    estimatedCost: 'Koszt zewnętrzny: prawnik ds. compliance 8–12 godz. × 350–500 zł/h = 3 200–6 000 zł netto. Wewnętrzny: PPWR Lead ~50 godz., zakupy ~30 godz., logistyka ~20 godz. = ~100 godz. w 3 miesiące.',
    trapsCallout:
      'Pułapki średniej gotowości: (1) "mamy procesy" — sprawdź czy procesy są dla starych ROP czy aktualne PPWR; (2) jedno SKU pilotażowe nie wystarczy — testuj na 3-5 różnych typach opakowań; (3) zakładanie że dostawca załatwi DoC za ciebie — to nadal Twoja odpowiedzialność.',
    closingNote:
      'Po 90 dniach osiągasz zaawansowaną gotowość. Pozostałe 6 miesięcy to czas na monitoring, rollout zmian dostawców i przygotowanie do raportowania pierwszego roku obowiązywania PPWR (2027).',
  },

  // ============================================================
  // ZAAWANSOWANA GOTOWOŚĆ (65-84)
  // ============================================================
  advanced_readiness: {
    category: 'advanced_readiness',
    headline: 'Plan doszlifowania: ostatnie 10-15% do pełnej gotowości',
    intro:
      'Twoja firma jest na finiszu. Większość elementów PPWR jest na miejscu — masz procedury, dokumentację, plan RTP, właściciela tematu. Pozostały 1-2 obszary, które wymagają doszlifowania, plus warto się przygotować na sprawozdawczość pierwszego roku PPWR (raportowanie do BDO + odpowiedniki w innych krajach UE od 2027 r.). Dodatkowo to dobry moment by zacząć pozycjonować się jako lider compliance w łańcuchu dostaw — duzi klienci coraz częściej tego oczekują.',
    topPriorities: [
      {
        dimension: 'D4',
        text: 'Zewnętrzny audit DoC i procedury — przez prawnika compliance opakowaniowego lub Rekopol/Interzero. Wyłapanie ostatnich luk formalnych.',
        urgency: 'medium',
      },
      {
        dimension: 'D3',
        text: 'Akcelerator RTP — jeśli jesteś na 30-40%, doszlifuj do 45-50% przed 2030 r. To buduje bufor i ułatwia osiągnięcie 70% w 2040.',
        urgency: 'medium',
      },
      {
        dimension: 'D2',
        text: 'Pełna integracja inwentaryzacji z BDO — auto-zaciąganie sprawozdań. Przygotowanie do pierwszego roku obowiązkowej sprawozdawczości PPWR.',
        urgency: 'medium',
      },
      {
        dimension: 'D5',
        text: 'Pozycjonowanie się jako lider — komunikacja zewnętrzna (LinkedIn, branża, organizacje), case study, certyfikacja Blue Angel lub podobna.',
        urgency: 'low',
      },
      {
        dimension: 'D1',
        text: 'Monitoring aktów delegowanych — buduj wewnętrzny tracker. PPWR jest "żywą" regulacją, kolejne akty doprecyzowujące będą się pojawiać w 2026-2028.',
        urgency: 'low',
      },
    ],
    phases: [
      {
        weeks: 'T1–T4',
        title: 'Miesiąc 1: audit zewnętrzny + integracja BDO',
        tasks: [
          { week: 'T1', task: 'Zlecenie audytu DoC i procedur — wybór prawnika lub firmy specjalistycznej.', owner: 'PPWR Lead', output: 'Umowa + zakres' },
          { week: 'T2', task: 'Audit przeprowadzony — raport z lukami i rekomendacjami.', owner: 'PPWR Lead + zewn.', output: 'Raport audytu' },
          { week: 'T3', task: 'Integracja inwentaryzacji z BDO — auto-zaciąganie danych do sprawozdania.', owner: 'PPWR Lead + IT', output: 'Integracja BDO' },
          { week: 'T4', task: 'Plan domknięcia luk z audytu — priorytety + timelina.', owner: 'PPWR Lead', output: 'Plan domknięcia' },
        ],
      },
      {
        weeks: 'T5–T8',
        title: 'Miesiąc 2: akcelerator RTP + pozycjonowanie',
        tasks: [
          { week: 'T5', task: 'Review obecnego planu RTP — gdzie można przyspieszyć (2 dodatkowe linie produktowe).', owner: 'PPWR Lead + Operacje', output: 'Plan akceleracji' },
          { week: 'T6', task: 'Pilot dodatkowej linii RTP — jeden nowy klient lub jedna linia produktowa.', owner: 'Operacje + Sales', output: 'Pilot RTP' },
          { week: 'T7', task: 'Pozycjonowanie zewnętrzne — case study, LinkedIn artykuł, prezentacja w organizacji branżowej.', owner: 'Marketing + PPWR Lead', output: 'Materiały zewnętrzne' },
          { week: 'T8', task: 'Aplikacja o certyfikat Blue Angel lub branżowy — pierwsze kroki.', owner: 'PPWR Lead + Marketing', output: 'Aplikacja' },
        ],
      },
      {
        weeks: 'T9–T12',
        title: 'Miesiąc 3: monitoring + sprawozdawczość 2027',
        tasks: [
          { week: 'T9', task: 'Wewnętrzny tracker aktów delegowanych — kto monitoruje, jak raportuje.', owner: 'PPWR Lead + Legal', output: 'Tracker + procedura' },
          { week: 'T10', task: 'Przygotowanie do pierwszej sprawozdawczości PPWR (2027) — dane, formaty, narzędzia.', owner: 'PPWR Lead + IT', output: 'Plan sprawozdawczy' },
          { week: 'T11', task: 'Symulacja pierwszej sprawozdawczości na danych 2026 — test procesu.', owner: 'PPWR Lead', output: 'Test report' },
          { week: 'T12', task: 'Annual review zarządu: pełna gotowość + plan na 2027-2028.', owner: 'Zarząd', output: 'Annual report' },
        ],
      },
    ],
    estimatedCost: 'Koszt zewnętrzny: audit + certyfikacja 15 000–40 000 zł netto. Wewnętrzny: PPWR Lead ~40 godz., wsparcie operacyjne ~30 godz. = ~70 godz. w 3 miesiące.',
    trapsCallout:
      'Pułapki zaawansowanej gotowości: (1) zadowolenie z stanu — PPWR ciągle się rozwija, doprecyzowywania będą wymagać aktualizacji procedur; (2) niedoinwestowanie w monitoring — kolejne akty delegowane mogą wprowadzić nowe wymogi; (3) "robimy lepiej niż wymóg" — to dobry znak, ale komunikuj zewnętrznie, inaczej zostaniesz pominięty w benchmarkach branżowych.',
    closingNote:
      'Po 90 dniach jesteś w pełni gotów na 12.08.2026 i pierwsze sprawozdawanie 2027. Następne 12 miesięcy to czas na utrzymanie pozycji, doszlifowywanie i pozycjonowanie jako lidera w łańcuchu.',
  },

  // ============================================================
  // PEŁNA GOTOWOŚĆ (85-100)
  // ============================================================
  full_readiness: {
    category: 'full_readiness',
    headline: 'Plan ekspansji: od compliance do lidership',
    intro:
      'Twoja firma jest w pełnej gotowości PPWR. Wszystkie 5 wymiarów jest na poziomie compliance lub powyżej. To wyjątkowa pozycja — w polskim rynku B2B to mniejszość firm. Najbliższe 90 dni to czas na przejście z compliance do lidership: certyfikacja, ewangelizacja partnerów w łańcuchu dostaw, wpływ na standardy branżowe. Dodatkowo — przygotowanie do następnych regulacji, które są w drodze (CSRD, due diligence supply chain, ESPR).',
    topPriorities: [
      {
        dimension: 'D5',
        text: 'Pozycjonowanie zewnętrzne — case study branżowe, prezentacja w organizacji branżowej, LinkedIn, branża prasa. Twoja firma może być benchmarkiem.',
        urgency: 'medium',
      },
      {
        dimension: 'D4',
        text: 'Certyfikacja Blue Angel lub branżowa (Cradle-to-Cradle, EPEA) — formalne uznanie poziomu compliance.',
        urgency: 'medium',
      },
      {
        dimension: 'D3',
        text: 'Ewangelizacja partnerów w łańcuchu — pomoc dostawcom i klientom w ich własnej compliance. Lock-in jako lider.',
        urgency: 'medium',
      },
      {
        dimension: 'D1',
        text: 'Przygotowanie do kolejnych regulacji UE — CSRD, ESPR (Ecodesign for Sustainable Products), CBAM. PPWR to początek serii.',
        urgency: 'medium',
      },
      {
        dimension: 'D2',
        text: 'Otwarcie inwentaryzacji na publiczne raporty — Carbon footprint per produkt, transparent reporting. Buduje zaufanie odbiorców.',
        urgency: 'low',
      },
    ],
    phases: [
      {
        weeks: 'T1–T4',
        title: 'Miesiąc 1: certyfikacja + pozycjonowanie zewnętrzne',
        tasks: [
          { week: 'T1', task: 'Wybór certyfikacji (Blue Angel, C2C, branżowa). Przygotowanie aplikacji.', owner: 'PPWR Lead + Marketing', output: 'Aplikacja' },
          { week: 'T2', task: 'Case study wewnętrzne — udokumentowanie ścieżki firmy do pełnej gotowości.', owner: 'PPWR Lead + Marketing', output: 'Case study draft' },
          { week: 'T3', task: 'Konsultacja branżowa — prezentacja w organizacji branżowej, na konferencji.', owner: 'PPWR Lead', output: 'Prezentacja' },
          { week: 'T4', task: 'Publikacja LinkedIn / artykuł w prasie branżowej.', owner: 'Marketing', output: 'Publikacje' },
        ],
      },
      {
        weeks: 'T5–T8',
        title: 'Miesiąc 2: ewangelizacja partnerów',
        tasks: [
          { week: 'T5', task: 'Identyfikacja dostawców z lukami compliance — gdzie możemy pomóc.', owner: 'Zakupy + PPWR Lead', output: 'Lista dostawców' },
          { week: 'T6', task: 'Spotkania z 3-5 kluczowymi dostawcami — sharing best practices.', owner: 'Zakupy + PPWR Lead', output: 'Notatki + akcje' },
          { week: 'T7', task: 'Identyfikacja klientów którzy mogą potrzebować wsparcia — sales-driven.', owner: 'Sales + PPWR Lead', output: 'Lista klientów' },
          { week: 'T8', task: 'Webinar / sesja dla klientów — Wasza ścieżka PPWR jako wartość dodana.', owner: 'Sales + Marketing', output: 'Webinar' },
        ],
      },
      {
        weeks: 'T9–T12',
        title: 'Miesiąc 3: przygotowanie do kolejnych regulacji',
        tasks: [
          { week: 'T9', task: 'CSRD readiness check — co już macie z ESG raportowania, co trzeba dodać.', owner: 'PPWR Lead + Finance', output: 'CSRD gap analysis' },
          { week: 'T10', task: 'ESPR (Ecodesign) — orientacja w wymogach dla Waszych produktów.', owner: 'R&D + PPWR Lead', output: 'ESPR check' },
          { week: 'T11', task: 'Due diligence supply chain — przygotowanie do dyrektywy UE.', owner: 'Legal + Zakupy', output: 'Due dilig plan' },
          { week: 'T12', task: 'Annual review zarządu — strategia 2027-2030, leadership w branży.', owner: 'Zarząd', output: 'Annual strategy' },
        ],
      },
    ],
    estimatedCost: 'Koszt zewnętrzny: certyfikacja 20 000–80 000 zł netto + komunikacja zewnętrzna 15 000–30 000 zł. Wewnętrzny: PPWR Lead ~30 godz., marketing ~40 godz., sales ~20 godz. = ~90 godz. w 3 miesiące.',
    trapsCallout:
      'Pułapki pełnej gotowości: (1) zaniedbanie — "skoro jesteśmy gotowi, możemy odłożyć", a PPWR ciągle się rozwija; (2) brak komunikacji zewnętrznej — jeśli nie mówicie o swojej pozycji, klienci nie wiedzą; (3) nie przygotowanie się na kolejne regulacje — CSRD, ESPR, CBAM idą tuż za PPWR.',
    closingNote:
      'Twoja firma jest case study dla branży. Następne 12 miesięcy to konsolidacja pozycji, ewangelizacja i przygotowanie do CSRD/ESPR. Rozważ formalne pozycjonowanie się jako lider compliance w komunikacji marketingowej i sales.',
  },
};
