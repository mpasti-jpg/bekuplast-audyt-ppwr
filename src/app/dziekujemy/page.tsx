import type { Metadata } from "next";
import { Suspense } from "react";
import { ThankYouPage } from "@/components/thank-you/ThankYouPage";

export const metadata: Metadata = {
  title: "Dziękujemy - raport w drodze",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-paper" />}>
      <ThankYouPage />
    </Suspense>
  );
}
