# Audyt gotowości PPWR - prototyp webowy

Interaktywne narzędzie self-assessment pod URL `bekuplast.pl/ppwr/audyt-gotowosci/`.
Decydent B2B w 4 minuty odpowiada na 10 pytań i otrzymuje:

- wynik 0-100 oraz kategorię gotowości,
- profil 5-wymiarowy z radar chart i benchmarkiem branży,
- plan działania 90 dni M1/M2/M3,
- rekomendacje produktów bekuplast dopasowane do branży i skali,
- glosariusz pojęć PPWR.

Status: prototyp do akceptacji klienta. PDF, realny mailing i CRM są mockowane.
Klient: bekuplast.pl.

## Stack

- Next.js 15 App Router
- TypeScript 5.6+
- Tailwind CSS 4
- Zustand z localStorage i TTL 7 dni
- react-hook-form + zod
- recharts
- lucide-react
- Vitest

## Wymagania

- Node.js 20 lub nowszy
- pnpm 9 lub npm

## Setup lokalny

```bash
git clone https://github.com/<USER>/audyt-ppwr.git
cd audyt-ppwr
pnpm install
pnpm dev
```

Domyślny lokalny adres:

```text
http://127.0.0.1:5175/
```

## Skrypty

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm test
pnpm test:watch
```

W tym repo skrypty `npm` używają lokalnego wrappera `scripts/with-runtime.mjs`,
żeby działały w środowisku Codex Desktop.

## Struktura

```text
src/
├── app/
│   ├── api/audit/route.ts
│   ├── api/lead/route.ts
│   ├── audyt/page.tsx
│   ├── dziekujemy/page.tsx
│   ├── ppwr/audyt-gotowosci/page.tsx
│   └── wynik/[audit_id]/page.tsx
├── components/
│   ├── hero/
│   ├── quiz/
│   ├── result/
│   └── thank-you/
├── content/
├── lib/
├── store/
├── hooks/
└── types/
data/
├── leads.json
├── audits.json
└── emails.json
```

`data/` jest gitignored i służy wyłącznie jako mock CRM/backend.

## Co działa

- pełna ścieżka hero -> quiz -> wynik -> email-gate -> thank-you,
- scoring 5 wymiarów i kategoria gotowości,
- radar chart i bar chart vs benchmark,
- Q1a sub-routing dla e-commerce B2C/B2B,
- zapis postępu w localStorage,
- mock API `/api/audit` i `/api/lead`,
- mock CRM/email w `data/*.json`,
- analytics jako logi `[ANALYTICS]`,
- SEO metadata i JSON-LD dla landing page,
- error boundary i 404.

## Co jest mockowane

- generowanie PDF,
- realna wysyłka email,
- realny CRM,
- realna baza danych,
- produkcyjna analityka.

## Mapa URL

| URL | Cel |
|---|---|
| `/` | redirect do `/ppwr/audyt-gotowosci/` |
| `/ppwr/audyt-gotowosci/` | landing page |
| `/audyt/` | quiz |
| `/wynik/[audit_id]/` | strona wyniku, noindex |
| `/dziekujemy/` | thank-you, noindex |
| `/polityka-prywatnosci/` | strona RODO |
| `/api/audit` | POST zapis wyniku |
| `/api/lead` | POST zapis leada i mock email |

## Przed produkcją

| Plik | Co podmienić |
|---|---|
| `src/lib/analytics.ts` | `console.log` na Matomo / GA4 / Plausible |
| `src/lib/storage.ts` | JSON na realny CRM i realny email provider |
| `src/lib/benchmarks.ts` | hardcoded benchmarki na agregat danych |
| brak | dodać generator PDF |
| `public/og-image.png` | finalny brandowy obraz OG |

## GitHub

Nowe repo:

```bash
git init
git branch -M main
git add -A
git commit -m "feat: initial prototype - audyt gotowości PPWR (FAZY 1-5)"
gh repo create bekuplast/audyt-ppwr --private --source=. --remote=origin --push
```

Repo utworzone wcześniej:

```bash
git init
git branch -M main
git add -A
git commit -m "feat: initial prototype - audyt gotowości PPWR (FAZY 1-5)"
git remote add origin git@github.com:bekuplast/audyt-ppwr.git
git push -u origin main
```

## Kontakt

Wewnętrzny prototyp dla bekuplast Polska Sp. z o.o.
Kontakt: polska@bekuplast.com
