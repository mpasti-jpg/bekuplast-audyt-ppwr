"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { COPY } from "@/content/ui-strings";
import { useAuditFlow } from "@/hooks/useAuditFlow";
import { analytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { useAuditStore } from "@/store/audit-store";
import { ProgressBar } from "./ProgressBar";
import { QuestionRouter } from "./QuestionRouter";

export function QuizOrchestrator() {
  const router = useRouter();
  const startNewAudit = useAuditStore((state) => state.startNewAudit);
  const next = useAuditStore((state) => state.next);
  const prev = useAuditStore((state) => state.prev);
  const auditId = useAuditStore((state) => state.auditId);
  const markCompleted = useAuditStore((state) => state.markCompleted);
  const hasPersisted = useAuditStore((state) => state.hasPersistedAudit);
  const redirectStarted = useRef(false);
  const resumeTracked = useRef(false);

  const { question, currentStep, canProceed, isLastQuestion, isFirstQuestion } =
    useAuditFlow();

  useEffect(() => {
    if (currentStep === 0 && !auditId && !hasPersisted()) {
      startNewAudit();
    }
  }, [auditId, currentStep, hasPersisted, startNewAudit]);

  useEffect(() => {
    if (resumeTracked.current || currentStep === 0) return;
    const state = useAuditStore.getState();
    if (auditId && hasPersisted() && state.startedAt) {
      resumeTracked.current = true;
      analytics.track("audit_resumed", {
        audit_id: auditId,
        resume_step: currentStep,
      });
    }
  }, [auditId, currentStep, hasPersisted]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      const state = useAuditStore.getState();
      if (!state.auditId || state.currentStep <= 0 || state.currentStep >= 11) {
        return;
      }

      const payload = JSON.stringify({
        event: "audit_abandoned",
        audit_id: state.auditId,
        last_step: state.currentStep,
      });

      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/analytics", payload);
      } else {
        console.log("[ANALYTICS] audit_abandoned", JSON.parse(payload));
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    if (currentStep !== 11 || redirectStarted.current) return;
    redirectStarted.current = true;
    const timer = window.setTimeout(() => {
      const id = useAuditStore.getState().auditId;
      if (id) router.push(`/wynik/${id}/`);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [currentStep, router]);

  const handleNext = () => {
    if (isLastQuestion) {
      markCompleted();
      return;
    }
    next();
  };

  if (currentStep === 11) {
    return <LoadingScreen />;
  }

  if (!question || currentStep === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper">
        <Loader2 className="h-8 w-8 animate-spin text-amber" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <ProgressBar />

      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 md:px-6 md:py-12">
        <QuestionRouter question={question} />
      </div>

      <div className="sticky bottom-0 z-10 border-t border-border bg-paper py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 md:px-6">
          {!isFirstQuestion && (
            <button
              type="button"
              onClick={prev}
              className="flex min-h-11 items-center gap-2 px-4 py-2 text-navy transition-colors hover:text-amber"
            >
              <ArrowLeft className="h-4 w-4" />
              {COPY.quiz.actions.back}
            </button>
          )}

          <button
            type="button"
            onClick={handleNext}
            disabled={!canProceed}
            className={cn(
              "ml-auto flex min-h-11 items-center gap-2 rounded-lg bg-amber px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-amber-dark",
              "disabled:cursor-not-allowed disabled:opacity-40",
            )}
          >
            {isLastQuestion
              ? COPY.quiz.actions.submitAndContinue
              : COPY.quiz.actions.next}
            {!isLastQuestion && <ArrowRight className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-4">
      <Loader2 className="h-12 w-12 animate-spin text-amber" />
      <h2 className="mt-6 text-center text-2xl font-bold text-navy">
        {COPY.loading.title}
      </h2>
      <p className="mt-2 max-w-md text-center text-navy/70">
        {COPY.loading.subtitle}
      </p>
      <p className="mt-4 text-sm text-text-muted">{COPY.loading.fallbackText}</p>
    </div>
  );
}
