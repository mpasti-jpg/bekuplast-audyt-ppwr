export type AnalyticsEvent =
  | "page_view_hero"
  | "cta_start_audit_click"
  | "faq_item_expanded"
  | "audit_started"
  | "question_answered"
  | "question_skipped"
  | "sub_routing_q1a_triggered"
  | "audit_abandoned"
  | "audit_resumed"
  | "audit_completed"
  | "result_viewed"
  | "result_section_expanded"
  | "product_card_clicked"
  | "email_gate_viewed"
  | "lead_submitted"
  | "thank_you_viewed"
  | "interest_survey_response"
  | "next_step_clicked";

interface AnalyticsAdapter {
  track(event: AnalyticsEvent, properties?: Record<string, unknown>): void;
  identify(userId: string, traits?: Record<string, unknown>): void;
}

class ConsoleAnalytics implements AnalyticsAdapter {
  track(event: AnalyticsEvent, properties?: Record<string, unknown>): void {
    if (typeof window === "undefined") return;
    console.log(`[ANALYTICS] ${event}`, properties ?? {});
  }

  identify(userId: string, traits?: Record<string, unknown>): void {
    if (typeof window === "undefined") return;
    console.log(`[ANALYTICS_IDENTIFY] ${userId}`, traits ?? {});
  }
}

export const analytics: AnalyticsAdapter = new ConsoleAnalytics();

export function trackEvent(event: {
  name: AnalyticsEvent;
  payload?: Record<string, unknown>;
}) {
  analytics.track(event.name, event.payload);
}
