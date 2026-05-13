"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import type { DimensionCode } from "@/types/audit";
import { analytics } from "@/lib/analytics";
import { calculateResult } from "@/lib/scoring";
import { buildRadarData, getActiveRedFlags } from "@/lib/result-helpers";
import { useAuditStore } from "@/store/audit-store";
import { ActionPlanTimeline } from "./ActionPlanTimeline";
import { AuditNotFound } from "./AuditNotFound";
import { DimensionBars } from "./DimensionBars";
import { DimensionRadar } from "./DimensionRadar";
import { EmailGate } from "./EmailGate";
import { GlossaryAccordion } from "./GlossaryAccordion";
import { IndustrySection } from "./IndustrySection";
import { ProductRecommendations } from "./ProductRecommendations";
import { RedFlagsSection } from "./RedFlagsSection";
import { ScoreHeader } from "./ScoreHeader";
import { SecondaryCTAs } from "./SecondaryCTAs";
import { TopPriorities } from "./TopPriorities";

type ResultPageProps = {
  auditId: string;
};

export function ResultPage({ auditId }: ResultPageProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const storedAuditId = useAuditStore((state) => state.auditId);
  const industry = useAuditStore((state) => state.industry);
  const scale = useAuditStore((state) => state.scale);
  const answers = useAuditStore((state) => state.answers);
  const startedAt = useAuditStore((state) => state.startedAt);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (storedAuditId && storedAuditId === auditId && (!industry || !scale)) {
      router.push("/ppwr/audyt-gotowosci/");
    }
  }, [auditId, industry, mounted, router, scale, storedAuditId]);

  const result = useMemo(() => {
    if (!mounted || storedAuditId !== auditId || !industry || !scale) {
      return null;
    }

    return calculateResult({
      auditId,
      industry,
      scale,
      answers,
    });
  }, [answers, auditId, industry, mounted, scale, storedAuditId]);

  useEffect(() => {
    if (!result) return;

    analytics.track("result_viewed", {
      audit_id: result.audit_id,
      overall_score: result.overall_score,
      category: result.category,
      industry: result.industry,
    });

    fetch("/api/audit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        state: {
          audit_id: auditId,
          version: process.env.NEXT_PUBLIC_AUDIT_VERSION ?? "1.0",
          started_at: startedAt ?? new Date().toISOString(),
          completed_at: new Date().toISOString(),
          current_step: 11,
          answers,
          industry,
          scale,
        },
        result,
      }),
    }).catch((error) => console.warn("[API_AUDIT_WARN]", error));
  }, [answers, auditId, industry, result, scale, startedAt]);

  if (!mounted) {
    return <ResultLoading />;
  }

  if (!storedAuditId || storedAuditId !== auditId) {
    return <AuditNotFound />;
  }

  if (!result) {
    return <ResultLoading />;
  }

  const dimensionScores = Object.fromEntries(
    Object.entries(result.dimensions).map(([key, value]) => [key, value.score]),
  ) as Record<DimensionCode, number>;
  const radarData = buildRadarData(result.industry, result.dimensions);
  const activeRedFlags = getActiveRedFlags(result.industry, dimensionScores);

  return (
    <div className="bg-paper">
      <article className="mx-auto max-w-content space-y-10 px-4 py-8 md:space-y-14 md:px-6 md:py-12">
        <ScoreHeader result={result} />
        <DimensionRadar data={radarData} industry={result.industry} />
        <DimensionBars data={radarData} />
        <TopPriorities priorities={result.topPriorities} />
        <IndustrySection industry={result.industry} />
        <ActionPlanTimeline category={result.category} />
        <RedFlagsSection flags={activeRedFlags} />
        <ProductRecommendations industry={result.industry} scale={result.scale} />
        <GlossaryAccordion />
        <EmailGate auditId={auditId} />
        <SecondaryCTAs />
      </article>
    </div>
  );
}

function ResultLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper">
      <Loader2 className="h-10 w-10 animate-spin text-amber" />
    </div>
  );
}
