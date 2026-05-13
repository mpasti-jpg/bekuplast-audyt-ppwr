"use client";

import { calculateAuditResult } from "@/lib/scoring";
import { useAuditStore } from "@/store/audit-store";

export function useScoring() {
  const state = useAuditStore((store) => store);

  return calculateAuditResult({
    audit_id: state.auditId ?? "",
    version: process.env.NEXT_PUBLIC_AUDIT_VERSION ?? "1.0",
    started_at: state.startedAt ?? new Date().toISOString(),
    completed_at: null,
    current_step: state.currentStep,
    answers: state.answers,
    industry: state.industry,
    scale: state.scale,
  });
}
