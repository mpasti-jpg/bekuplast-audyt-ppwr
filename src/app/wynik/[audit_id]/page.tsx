import type { Metadata } from "next";
import { ResultPage } from "@/components/result/ResultPage";

export const metadata: Metadata = {
  title: "Twój wynik audytu PPWR",
  robots: { index: false, follow: false },
};

type ResultPageProps = {
  params: Promise<{
    audit_id: string;
  }>;
};

export default async function Page({ params }: ResultPageProps) {
  const { audit_id } = await params;
  return <ResultPage auditId={audit_id} />;
}
