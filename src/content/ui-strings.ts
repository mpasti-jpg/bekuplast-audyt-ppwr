// @ts-nocheck
export const COPY = {
  // ============ NAWIGACJA & LAYOUT ============
  nav: {
    backToHome: 'Wróć do strony głównej',
    backToHero: 'Wróć do początku audytu',
    skipToContent: 'Przejdź do treści',
  },

  footer: {
    copyrightText: '© bekuplast Sp. z o.o. Wszystkie prawa zastrzeżone.',
    privacyLink: 'Polityka prywatności',
    cookieLink: 'Polityka cookies',
    contactLink: 'Kontakt',
    poweredBy: 'Audyt opracowany na podstawie Rozporządzenia UE 2025/40 (PPWR).',
  },

  // ============ HERO ============
  hero: {
    eyebrow: 'Audyt gotowości PPWR  •  bezpłatny  •  4 minuty',
    titleLine1: 'Sprawdź, czy Twoja firma jest gotowa',
    titleLine2: 'na PPWR 12.08.2026',
    lead: 'Rozporządzenie UE 2025/40 wchodzi w życie za {countdown}. Odpowiedz na 10 pytań — w 4 minuty dowiesz się, gdzie jesteście, co musi się stać do sierpnia 2026 i jakie produkty bekuplast najlepiej pasują do Waszej skali i branży. Po wypełnieniu dostaniesz spersonalizowany raport PDF na maila.',

    valueBullets: {
      questions: { icon: '🎯', label: '10 pytań', desc: 'pokrywa 5 wymiarów gotowości PPWR' },
      time: { icon: '⏱', label: '4 minuty', desc: 'średni czas wypełnienia, możesz przerwać i wrócić' },
      result: { icon: '📊', label: 'Wynik od razu', desc: 'spersonalizowany PDF na maila, bez sprzedaży' },
    },

    primaryCta: 'Rozpocznij audyt',
    secondaryCtaSubtext: 'Bez logowania. Bez zobowiązań. RODO-compliant.',

    whatYouGet: {
      title: 'Co znajdzie się w Twoim raporcie',
      cards: [
        {
          title: 'Twój wynik 0–100',
          desc: '5-wymiarowy radar chart pokazujący gotowość w każdej kategorii PPWR — świadomość, inwentaryzacja, strategia reuse, compliance, zarządzanie',
        },
        {
          title: 'Porównanie z branżą',
          desc: 'Gdzie jesteście vs średnia firm z Waszej branży na rynku polskim',
        },
        {
          title: 'Plan działania 90 dni',
          desc: 'Konkretne zadania tydzień po tygodniu z osobą odpowiedzialną i oszacowanym kosztem zewnętrznym',
        },
        {
          title: 'Rekomendacje produktowe',
          desc: 'Które linie bekuplast pasują do Waszej branży i skali — z linkami do specyfikacji i typowym ROI',
        },
      ],
    },

    socialProof: {
      title: 'Audyt obsługuje 9 branż',
      sectorsLabel: 'Branże, dla których przygotowaliśmy spersonalizowane interpretacje PPWR:',
      sectors: [
        '🚗 Motoryzacja & automotive',
        '🍺 Napoje i browary',
        '🍞 Przetwórstwo żywności',
        '🥕 Rolnictwo, ogrodnictwo, owoce-warzywa',
        '💊 Farmacja, kosmetyki, chemia spec.',
        '📦 E-commerce, 3PL, fulfillment',
        '🛒 Handel detaliczny / FMCG',
        '🏭 Intralogistyka i magazyn',
        '🔧 Produkcja przemysłowa',
      ],
    },

    midCta: {
      title: 'Gotowy? Audyt zajmie Ci 4 minuty.',
      desc: 'Możesz przerwać w dowolnym momencie i wrócić — postęp zostanie zapisany.',
      button: 'Rozpocznij audyt teraz →',
    },
  },

  // ============ FAQ ============
  faq: {
    title: 'Najczęstsze pytania',
    items: [
      {
        q: 'Czy audyt jest naprawdę darmowy?',
        a: 'Tak. Audyt i wygenerowany raport są w pełni bezpłatne, bez ukrytych kosztów. Nie sprzedajemy danych podmiotom trzecim. Raport możesz otrzymać bez podawania danych telefonicznych — tylko adres e-mail służy do wysłania.',
      },
      {
        q: 'Skąd pochodzą benchmarki branżowe w raporcie?',
        a: 'Benchmarki opierają się na agregacie analiz publicznych dla rynku PL i niemieckiego, danych z Google Search Console bekuplast (16 miesięcy), publikacjach branżowych dot. PPWR oraz wskaźnikach przedstawionych w komunikatach Komisji Europejskiej. Są to wartości orientacyjne — w produkcyjnej wersji będą aktualizowane co kwartał.',
      },
      {
        q: 'Czy raport zastępuje audyt prawny?',
        a: 'Nie. Audyt jest self-assessmentem edukacyjnym pomagającym ocenić własną gotowość. Decyzje prawne (np. interpretacja artykułów PPWR, podpisanie deklaracji zgodności) wymagają konsultacji z prawnikiem ds. compliance.',
      },
      {
        q: 'Co się dzieje z moimi danymi?',
        a: 'Adres e-mail i nazwa firmy są używane wyłącznie do wysłania raportu i (opcjonalnie) do kontaktu account managera. Możesz w każdej chwili wycofać zgodę pisząc na privacy@bekuplast.com. Szczegóły w polityce prywatności.',
      },
      {
        q: 'Czy mogę wrócić do audytu, jeśli przerwę?',
        a: 'Tak. Postęp zapisywany jest w przeglądarce — możesz wrócić na tym samym urządzeniu w ciągu 7 dni i kontynuować od miejsca, w którym skończyłeś.',
      },
      {
        q: 'Dlaczego pytacie o branżę i wielkość firmy?',
        a: 'PPWR ma różne wymagania w zależności od branży (np. wyłączenie farmacji do 2035) i skali (małe firmy mają uproszczone obowiązki). Bez tych dwóch informacji nie zarekomendowalibyśmy precyzyjnego planu działania.',
      },
      {
        q: 'Co znaczy "5 wymiarów gotowości"?',
        a: 'PPWR ma pięć obszarów wymagających uwagi: świadomość regulacji (D1), inwentaryzacja opakowań (D2), strategia reuse/RTP (D3), compliance i dokumentacja (D4), zarządzanie i budżet (D5). Każdy wymiar jest punktowany 0–100, a wynik ogólny to średnia ważona.',
      },
    ],
  },

  // ============ QUIZ ============
  quiz: {
    header: {
      progressLabel: 'Pytanie {current} z {total}',
      timeRemainingLabel: '≈ {minutes} min do końca',
      saveStatus: {
        saved: '✓ Postęp zapisany',
        saving: 'Zapisywanie...',
        offline: '⚠ Brak połączenia — postęp w pamięci przeglądarki',
      },
    },

    actions: {
      back: '← Wstecz',
      next: 'Dalej →',
      skip: 'Pomiń pytanie',
      tooltipHelp: 'Co to znaczy?',
      submitAndContinue: 'Zobacz mój wynik',
    },

    validation: {
      requiredAnswer: 'Wybierz jedną z opcji, żeby przejść dalej.',
      cantSkipRequired: 'To pytanie jest wymagane — wybierz najbliższą prawdy odpowiedź.',
    },

    skipExplanation: 'Pominięcie tego pytania nie wpłynie negatywnie na Twój wynik — system użyje wartości neutralnej.',
  },

  // ============ LOADING ============
  loading: {
    title: 'Analizujemy Twoje odpowiedzi…',
    subtitle: 'Liczymy 5 wymiarów gotowości, porównujemy z benchmarkiem branżowym i dobieramy rekomendacje.',
    steps: [
      'Analizujemy strategię reuse...',
      'Porównujemy z firmami z Waszej branży...',
      'Dobieramy rekomendacje produktowe...',
      'Przygotowujemy plan 90 dni...',
    ],
    fallbackText: 'To powinno zająć 2–3 sekundy.',
  },

  // ============ RESULT ============
  result: {
    eyebrow: 'Twój wynik',
    overallScoreLabel: 'WYNIK OGÓLNY',
    overallScoreSuffix: '/100',
    benchmarkLabel: 'Średnia branży {industryName}',
    benchmarkComparison: {
      above: '↑ +{diff} pkt powyżej średniej branży',
      same: '= na poziomie średniej branży',
      below: '↓ {diff} pkt poniżej średniej branży',
    },

    sections: {
      radar: {
        title: 'Profil gotowości — 5 wymiarów',
        subtitle: 'Porównanie Twojego wyniku (pomarańczowy) ze średnią branży {industryName} (szary).',
      },
      priorities: {
        title: 'Trzy najważniejsze priorytety na najbliższe 90 dni',
        subtitle: 'Zaczynaj od tych, jeśli budżetu czasu jest mało.',
      },
      industry: {
        title: 'PPWR a Twoja branża',
        readMoreLabel: 'Zobacz pełną analizę branżową →',
      },
      actionPlan: {
        title: 'Plan działania 90 dni',
        subtitle: 'Trzy fazy: M1 (tygodnie 1-4), M2 (5-8), M3 (9-12).',
        showDetailsBtn: 'Pokaż szczegóły tygodniowe',
        hideDetailsBtn: 'Ukryj szczegóły',
      },
      redFlags: {
        title: 'Czerwone flagi specyficzne dla Twojej branży',
        noFlags: 'Nie wykryliśmy specyficznych czerwonych flag dla Twojej branży na podstawie wyniku — to dobry znak.',
      },
      products: {
        title: 'Rekomendowane produkty bekuplast',
        subtitle: 'Dopasowane do branży {industryName} i skali {scaleName}.',
        viewProductLink: 'Zobacz na bekuplast.pl →',
        roiLabel: 'Typowy ROI:',
      },
      glossary: {
        title: 'Glosariusz pojęć PPWR',
        subtitle: 'Kliknij aby rozwinąć definicję.',
      },
    },

    pdfTeaser: {
      title: 'Wyślij raport PDF na e-mail',
      subtitle: 'Spersonalizowany raport (10-14 stron) ze wszystkimi treściami z tej strony + planem działania w wersji do pobrania.',
      bullets: [
        'Sekcja branżowa: jak PPWR dotyka Waszej branży',
        'Pełny plan działania 90 dni z tygodniowymi zadaniami',
        'Rekomendowane produkty bekuplast z linkami i ROI',
        'Glosariusz 12 kluczowych pojęć PPWR + red flagi',
      ],
      cta: 'Wyślij raport na e-mail',
      prototypeFooter: 'W wersji prototypowej wysyłka raportu PDF jest mockowana. Lead zostanie zarejestrowany w naszym CRM. Faktyczna wysyłka emaila zostanie wdrożona w produkcji.',
    },

    shareWidget: {
      title: 'Podziel się wynikiem',
      copyLink: 'Skopiuj link do wyniku',
      copySuccess: '✓ Skopiowano!',
      linkedIn: 'Udostępnij na LinkedIn',
    },
  },

  // ============ EMAIL GATE FORM ============
  emailGate: {
    formTitle: '📧 Otrzymaj pełny raport PDF na e-mail',
    formSubtitle: 'Spersonalizowany raport z planem działania, rekomendacjami i analizą branżową. Bezpłatny, bez zobowiązań.',

    fields: {
      email: {
        label: 'E-mail służbowy',
        placeholder: 'anna.kowalska@firma.pl',
        required: true,
        validation: 'Wpisz prawidłowy adres e-mail służbowy.',
      },
      companyName: {
        label: 'Nazwa firmy',
        placeholder: 'Acme Sp. z o.o.',
        required: true,
        validation: 'Wpisz nazwę firmy.',
      },
      position: {
        label: 'Stanowisko (opcjonalnie)',
        placeholder: 'np. Sustainability Manager',
        required: false,
        helper: 'Pomaga personalizować raport.',
      },
    },

    consents: {
      report: {
        label: 'Zgadzam się na otrzymanie raportu PPWR readiness na podany adres e-mail oraz przetwarzanie danych w tym celu',
        required: true,
        helperLink: 'Szczegóły RODO',
      },
      newsletter: {
        label: 'Chcę otrzymywać newsletter bekuplast.pl z aktualizacjami o PPWR (max 1 e-mail/miesiąc, można w każdej chwili wycofać)',
        required: false,
      },
    },

    submitButton: 'Wyślij mi raport',
    submittingButton: 'Wysyłanie...',
    closeButton: 'Anuluj',
  },

  // ============ THANK YOU ============
  thankYou: {
    eyebrow: 'Gotowe',
    title: 'Raport jest w drodze ✉️',
    subtitle: 'Wysłaliśmy go na {email}. Powinien dotrzeć w ciągu 2-3 minut. Sprawdź też SPAM/Promocje.',
    prototypeNotice: 'W wersji prototypowej raport PDF nie jest jeszcze generowany. Twój lead został zarejestrowany w mock CRM. Sprawdź konsolę przeglądarki — zobaczysz wpis [LEAD] z Twoimi danymi.',

    whatNextTitle: 'Co dalej?',
    nextSteps: [
      {
        icon: '📞',
        title: 'Umów bezpłatną konsultację readiness',
        desc: '30-minutowe spotkanie online z naszym ekspertem ds. PPWR. Przejdziemy razem przez Wasz raport.',
        cta: 'Umów termin',
        url: 'https://bekuplast.pl/ppwr/konsultacja/',
      },
      {
        icon: '🧮',
        title: 'Policz koszt — kalkulator TCO',
        desc: 'Audyt powiedział, czego brakuje. Kalkulator powie, ile to będzie kosztować. 3 minuty.',
        cta: 'Otwórz kalkulator',
        url: 'https://bekuplast.pl/ppwr/kalkulator-tco/',
      },
      {
        icon: '📚',
        title: 'Czytaj dalej — klaster PPWR',
        desc: 'Pięć artykułów rozwiązujących pytania, które pojawiły się w Twoim wyniku audytu.',
        cta: 'Przejdź do bloga',
        url: 'https://bekuplast.pl/blog/ppwr/',
      },
    ],

    miniSurvey: {
      title: 'Mini-ankieta (1 pytanie): co Cię teraz najbardziej interesuje?',
      options: ['Plan inwestycji RTP', 'Procedura DoC', 'Rozmowy z dostawcami', 'Reporting BDO', 'Inne'],
    },

    contactBlock: {
      title: 'Kontakt bezpośredni',
      role: 'Account Manager ds. PPWR — Polska',
      email: 'polska@bekuplast.com',
      phone: '+48 (22) 000-00-00',
      hours: 'pon–pt, 8:00–17:00',
    },
  },

  // ============ ERRORS ============
  errors: {
    notFound: {
      title: '404 — strona nie istnieje',
      subtitle: 'Wpisany adres jest nieprawidłowy lub strona została usunięta.',
      cta: 'Wróć do strony głównej',
    },
    auditNotFound: {
      title: 'Ten audyt nie istnieje lub wygasł',
      subtitle: 'Audyty zachowujemy przez 90 dni — później link przestaje działać. Możesz wypełnić nowy audyt w 4 minuty.',
      cta: 'Wypełnij nowy audyt',
    },
    serverError: {
      title: '500 — coś poszło nie tak',
      subtitle: 'Wystąpił nieoczekiwany problem po naszej stronie. Twój postęp jest zapisany — odśwież stronę za chwilę.',
      cta: 'Odśwież stronę',
      contactLink: 'Lub napisz do nas: polska@bekuplast.com',
    },
    privateMode: {
      title: 'Tryb prywatny / bez ciasteczek',
      subtitle: 'Twoja przeglądarka blokuje localStorage — możesz wypełnić audyt, ale postęp nie zostanie zapisany. Zalecamy wypełnienie jednym ciągiem (4 minuty).',
      cta: 'OK, rozumiem',
    },
  },

  // ============ A11Y / TOAST ============
  a11y: {
    radarChartAlt: 'Wykres pajęczynowy pokazujący wynik w 5 wymiarach gotowości PPWR',
    barChartAlt: 'Wykres słupkowy porównujący wynik z benchmarkiem branżowym',
    skipLink: 'Przejdź do głównej treści',
    closeModal: 'Zamknij okno',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
  },

  toast: {
    saveSuccess: 'Zapisano',
    copySuccess: 'Skopiowano do schowka',
    networkError: 'Brak połączenia z internetem. Sprawdź sieć i spróbuj ponownie.',
    genericError: 'Coś poszło nie tak. Spróbuj jeszcze raz.',
  },
};
