/** Liczba dni do PPWR (12.08.2026) — dla countdown w hero. */
export function daysUntilPPWR(): number {
  const target = new Date('2026-08-12T00:00:00Z');
  const diff = target.getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

/** Format "{X} dni" z poprawną odmianą polską. */
export function plDaysFormat(days: number): string {
  if (days === 0) return 'dzisiaj';
  if (days === 1) return '1 dzień';
  return `${days} dni`;
}

/** Format liczby z separatorem tysięcy (1 234 zamiast 1234). */
export function plNumberFormat(n: number): string {
  return n.toLocaleString('pl-PL');
}

/** Polskie odmienione "minut". */
export function plMinutesFormat(minutes: number): string {
  if (minutes === 1) return '1 minuta';
  const lastDigit = minutes % 10;
  const lastTwo = minutes % 100;
  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwo < 12 || lastTwo > 14)) {
    return `${minutes} minuty`;
  }
  return `${minutes} minut`;
}

/** Polska data dłuższa (12 sierpnia 2026). */
export function plLongDate(d: Date | string): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
