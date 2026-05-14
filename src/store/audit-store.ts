"use client";

import { create } from "zustand";
import { nanoid } from "nanoid";
import type { AuditAnswer } from "@/types/audit";
import type { IndustryCode, ScaleCode } from "@/types/industry";
import type { AnalyticsEvent } from "@/lib/analytics";

type AnswerValue = string | string[] | number;
type IndustrySubRoute = "b2c" | "b2b" | null;

interface AuditStoreState {
  auditId: string | null;
  startedAt: string | null;
  currentStep: number;
  answers: Record<string, AuditAnswer>;
  industry: IndustryCode | null;
  industrySubRoute: IndustrySubRoute;
  scale: ScaleCode | null;
}

interface AuditStoreActions {
  startNewAudit: () => string;
  setAnswer: (
    questionId: string,
    value: AnswerValue,
    dontKnow?: boolean,
  ) => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
  getAnswer: (questionId: string) => AuditAnswer | undefined;
  isAnswered: (questionId: string) => boolean;
  hasPersistedAudit: () => boolean;
  ensureAuditId: () => string;
  markCompleted: () => void;
}

type AuditStore = AuditStoreState & AuditStoreActions;

const STORAGE_KEY = "ppwr-audit-store";
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

const emptyState: AuditStoreState = {
  auditId: null,
  startedAt: null,
  currentStep: 0,
  answers: {},
  industry: null,
  industrySubRoute: null,
  scale: null,
};

function canUseStorage() {
  return typeof window !== "undefined" && Boolean(window.localStorage);
}

function isFresh(startedAt: string | null) {
  if (!startedAt) return false;
  return Date.now() - new Date(startedAt).getTime() < SEVEN_DAYS_MS;
}

function loadState(): AuditStoreState {
  if (!canUseStorage()) return emptyState;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState;
    const parsed = JSON.parse(raw) as AuditStoreState;
    if (!isFresh(parsed.startedAt)) {
      window.localStorage.removeItem(STORAGE_KEY);
      return emptyState;
    }
    return {
      ...emptyState,
      ...parsed,
    };
  } catch {
    return emptyState;
  }
}

function saveState(state: AuditStoreState) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clearState() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(STORAGE_KEY);
}

function createAuditId() {
  return `AUD-${new Date().toISOString().slice(0, 10)}-${nanoid(6)}`;
}

function pickState(state: AuditStore): AuditStoreState {
  return {
    auditId: state.auditId,
    startedAt: state.startedAt,
    currentStep: state.currentStep,
    answers: state.answers,
    industry: state.industry,
    industrySubRoute: state.industrySubRoute,
    scale: state.scale,
  };
}

function track(event: AnalyticsEvent, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  import("@/lib/analytics").then(({ analytics }) => {
    analytics.track(event, properties);
  });
}

export const useAuditStore = create<AuditStore>((set, get) => ({
  ...loadState(),

  startNewAudit: () => {
    const nextState: AuditStoreState = {
      auditId: createAuditId(),
      startedAt: new Date().toISOString(),
      currentStep: 1,
      answers: {},
      industry: null,
      industrySubRoute: null,
      scale: null,
    };
    set(nextState);
    saveState(nextState);
    track("audit_started", { audit_id: nextState.auditId });
    return nextState.auditId ?? "";
  },

  setAnswer: (questionId, value, dontKnow = false) => {
    const state = get();
    const answer: AuditAnswer = {
      questionId,
      value,
      dontKnow,
      answeredAt: new Date().toISOString(),
    };
    const nextState: AuditStoreState = {
      ...pickState(state),
      answers: {
        ...state.answers,
        [questionId]: answer,
      },
    };

    if (questionId === "Q1") {
      nextState.industry = value as IndustryCode;
      if (value !== "ecommerce_b2c") {
        nextState.industrySubRoute = null;
        delete nextState.answers.Q1a;
      }
    }

    if (questionId === "Q1a") {
      nextState.industrySubRoute = value as Exclude<IndustrySubRoute, null>;
      nextState.industry =
        value === "b2c" ? "ecommerce_b2c" : "ecommerce_b2b";
    }

    if (questionId === "Q2") {
      nextState.scale = value as ScaleCode;
    }

    set(nextState);
    saveState(nextState);
    track(dontKnow ? "question_skipped" : "question_answered", {
      question_id: questionId,
      ...(dontKnow ? {} : { value }),
    });
  },

  next: () => {
    const state = get();
    let currentStep = state.currentStep + 1;

    if (state.currentStep === 1) {
      currentStep =
        state.industry === "ecommerce_b2c" && !state.answers.Q1a ? 1.5 : 2;
      if (currentStep === 1.5) {
        track("sub_routing_q1a_triggered", { audit_id: state.auditId });
      }
    }

    if (state.currentStep === 1.5) {
      currentStep = 2;
    }

    const nextState = { ...pickState(state), currentStep };
    set(nextState);
    saveState(nextState);
  },

  prev: () => {
    const state = get();
    let currentStep = Math.max(0, state.currentStep - 1);

    if (state.currentStep === 2 && state.industrySubRoute) {
      currentStep = 1.5;
    }

    if (state.currentStep === 1.5) {
      currentStep = 1;
    }

    const nextState = { ...pickState(state), currentStep };
    set(nextState);
    saveState(nextState);
  },

  reset: () => {
    set(emptyState);
    clearState();
  },

  getAnswer: (questionId) => get().answers[questionId],

  isAnswered: (questionId) => {
    const answer = get().answers[questionId];
    if (!answer) return false;
    if (answer.dontKnow) return true;
    if (Array.isArray(answer.value)) return answer.value.length > 0;
    return (
      answer.value !== "" &&
      answer.value !== null &&
      typeof answer.value !== "undefined"
    );
  },

  hasPersistedAudit: () => {
    const { startedAt, currentStep } = get();
    return isFresh(startedAt) && currentStep > 0 && currentStep < 11;
  },

  ensureAuditId: () => {
    const state = get();
    if (state.auditId) return state.auditId;
    const auditId = createAuditId();

    const nextState: AuditStoreState = {
      ...pickState(state),
      auditId,
      startedAt: state.startedAt ?? new Date().toISOString(),
    };

    set(nextState);
    saveState(nextState);
    return auditId;
  },

  markCompleted: () => {
    const state = get();
    const auditId = state.auditId ?? createAuditId();
    const nextState = {
      ...pickState(state),
      auditId,
      startedAt: state.startedAt ?? new Date().toISOString(),
      currentStep: 11,
    };
    set(nextState);
    saveState(nextState);
    track("audit_completed", { audit_id: auditId });
  },
}));
