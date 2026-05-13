import type { Metadata } from "next";
import { QuizOrchestrator } from "@/components/quiz/QuizOrchestrator";

export const metadata: Metadata = {
  title: "Audyt PPWR — pytania",
  robots: { index: false, follow: false },
};

export default function AuditPage() {
  return <QuizOrchestrator />;
}
