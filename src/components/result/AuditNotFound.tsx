import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { COPY } from "@/content/ui-strings";

export function AuditNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <AlertCircle className="mx-auto h-16 w-16 text-amber" />
        <h1 className="mt-6 text-3xl font-bold text-navy">
          {COPY.errors.auditNotFound.title}
        </h1>
        <p className="mt-3 leading-relaxed text-navy/70">
          {COPY.errors.auditNotFound.subtitle}
        </p>
        <Link
          href="/ppwr/audyt-gotowosci/"
          className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-amber px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-dark focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2"
        >
          {COPY.errors.auditNotFound.cta}
        </Link>
      </div>
    </div>
  );
}
