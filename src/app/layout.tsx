import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { COPY } from "@/content/ui-strings";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Audyt gotowości PPWR — bekuplast.pl",
    template: "%s | bekuplast.pl",
  },
  description:
    "Sprawdź gotowość Twojej firmy na PPWR (UE 2025/40) w 4 minuty. Bezpłatny self-assessment z planem działania 90 dni i rekomendacjami produktowymi.",
  authors: [{ name: "bekuplast Sp. z o.o." }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "bekuplast.pl",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="flex min-h-screen flex-col bg-paper font-sans text-navy antialiased">
        <a className="sr-only focus:not-sr-only" href="#main-content">
          {COPY.a11y.skipLink}
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
