"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";

type HeroAnalyticsProps = {
  ctaLabel: string;
  children?: ReactNode;
};

export function HeroPageView() {
  useEffect(() => {
    analytics.track("page_view_hero");
  }, []);

  return null;
}

export function HeroStartLink({ ctaLabel, children }: HeroAnalyticsProps) {
  return (
    <Link
      href="/audyt/"
      onClick={() =>
        analytics.track("cta_start_audit_click", { location: "hero" })
      }
      className="inline-flex items-center gap-2 rounded-lg bg-amber px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-amber-dark focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2"
    >
      {ctaLabel}
      {children}
    </Link>
  );
}
