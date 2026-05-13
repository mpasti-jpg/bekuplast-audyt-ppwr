"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[GLOBAL_ERROR]", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <AlertTriangle className="mx-auto h-16 w-16 text-amber" />
        <h1 className="mt-6 text-3xl font-bold text-navy">
          Coś poszło nie tak
        </h1>
        <p className="mt-3 leading-relaxed text-navy/70">
          Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę albo wróć do
          audytu i zacznij od nowa.
        </p>
        {error.digest && (
          <p className="mt-2 font-mono text-xs text-text-muted">
            Error ID: {error.digest}
          </p>
        )}
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="rounded-lg bg-amber px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-dark"
          >
            Spróbuj jeszcze raz
          </button>
          <Link
            href="/ppwr/audyt-gotowosci/"
            className="rounded-lg border border-border px-6 py-3 text-navy transition-colors hover:border-amber"
          >
            Strona główna
          </Link>
        </div>
      </div>
    </div>
  );
}
