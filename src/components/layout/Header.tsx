"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isOnAudit =
    pathname?.startsWith("/audyt") || pathname?.startsWith("/wynik");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/ppwr/audyt-gotowosci/"
          className="flex items-center gap-2 text-lg font-bold text-navy"
        >
          <span className="text-amber">b</span>ekuplast
          <span className="hidden text-sm font-normal text-text-muted md:inline">
            • Audyt PPWR
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://bekuplast.pl"
            target="_blank"
            rel="noopener"
            className="hidden text-sm text-text-muted transition-colors hover:text-navy md:inline"
          >
            ← Wróć do bekuplast.pl
          </a>
          {!isOnAudit && (
            <Link
              href="/audyt/"
              className="rounded-md bg-amber px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-dark"
            >
              Rozpocznij audyt
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
