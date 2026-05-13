// @ts-nocheck
import type { CategoryCode } from '@/types/audit';

export interface CategoryConfig {
  code: CategoryCode;
  range: [number, number];
  headline: string;
  tagline: string;
  longDescription: string;     // 2-3 zdania na strone wyniku
  color: string;               // CSS var or color name
  emoji: string;
}

export const CATEGORIES: Record<CategoryCode, CategoryConfig> = {
  critical_gap: {
    code: 'critical_gap',
    range: [0, 24],
    headline: 'Krytyczna luka',
    tagline: 'działania konieczne natychmiast',
    longDescription:
      'Twoja firma jest w wysokim ryzyku regulacyjnym. Bez konkretnych działań w najbliższych 90 dniach nie zdąży z compliance do 12 sierpnia 2026 r. Brak deklaracji zgodności = brak prawa wprowadzenia opakowania na rynek UE. To nie jest sytuacja, w której można czekać — wymaga natychmiastowego planu i przypisania właściciela tematu.',
    color: '#d8412f',
    emoji: '🔴',
  },
  low_readiness: {
    code: 'low_readiness',
    range: [25, 44],
    headline: 'Niska gotowość',
    tagline: 'masz 15 miesięcy — czas zacząć',
    longDescription:
      'Rozpoznajesz temat, ale brakuje konkretnych działań. Plan startup w 90 dni może to nadrobić — masz jeszcze czas na uporządkowanie inwentaryzacji, zbudowanie procedury deklaracji zgodności i zaplanowanie inwestycji w RTP. Większość polskich firm w Twojej branży jest na podobnym poziomie — przewaga konkurencyjna należy do tych, którzy zaczną teraz.',
    color: '#f0a020',
    emoji: '🟠',
  },
  medium_readiness: {
    code: 'medium_readiness',
    range: [45, 64],
    headline: 'Średnia gotowość',
    tagline: 'solidne podstawy, słabe punkty',
    longDescription:
      'Masz większość elementów na miejscu, ale 2–3 obszary wymagają wzmocnienia. To dobra pozycja wyjściowa — z planem domknięcia w 90 dni jesteście w stanie osiągnąć zaawansowaną gotowość przed 12.08.2026. Klucz to skoncentrowanie się na najsłabszych wymiarach, a nie próba pracy nad wszystkim naraz.',
    color: '#ff6b35',
    emoji: '🟡',
  },
  advanced_readiness: {
    code: 'advanced_readiness',
    range: [65, 84],
    headline: 'Zaawansowana gotowość',
    tagline: 'finiszujesz — doszlifuj detale',
    longDescription:
      'Jesteś na finiszu. Doszlifuj 1–2 obszary, ustaw stałe monitorowanie i jesteś gotów na 12.08.2026 r. W tej pozycji warto zacząć myśleć o pozycjonowaniu się jako lidera compliance w swoim łańcuchu — duzi klienci coraz częściej żądają potwierdzeń od dostawców, a Wy macie czym się pochwalić.',
    color: '#2ea44f',
    emoji: '🟢',
  },
  full_readiness: {
    code: 'full_readiness',
    range: [85, 100],
    headline: 'Pełna gotowość',
    tagline: 'możesz audytować innych',
    longDescription:
      'Twoja firma może być case study compliance PPWR w branży. Rozważ certyfikację branżową, formalne pozycjonowanie się jako lidera tematu w łańcuchu dostaw, lub współpracę z organizacją branżową przy tworzeniu standardów. Następne 12 miesięcy to czas na utrzymanie pozycji i ewangelizację partnerów.',
    color: '#0a1628',
    emoji: '✅',
  },
};
