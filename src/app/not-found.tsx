import Link from "next/link";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <Search className="mx-auto h-16 w-16 text-amber" />
        <p className="mt-4 text-7xl font-bold text-amber">404</p>
        <h1 className="mt-3 text-3xl font-bold text-navy">
          Nie znaleziono strony
        </h1>
        <p className="mt-3 leading-relaxed text-navy/70">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <Link
          href="/ppwr/audyt-gotowosci/"
          className="mt-6 inline-flex rounded-lg bg-amber px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-dark"
        >
          Wróć do audytu PPWR
        </Link>
      </div>
    </div>
  );
}
