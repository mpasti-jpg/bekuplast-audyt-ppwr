import type { AuditResult, AuditState } from './audit';

/**
 * POST /api/audit — zapisuje stan audytu (przed email-gate).
 */
export interface SaveAuditRequest {
  state: AuditState;
  result: AuditResult;
}

export interface SaveAuditResponse {
  success: boolean;
  audit_id: string;
  error?: string;
}

/**
 * POST /api/lead — capture leada po email-gate.
 */
export interface CreateLeadRequest {
  audit_id: string;
  email: string;
  companyName: string;
  position?: string;
  newsletterOptIn: boolean;
}

export interface CreateLeadResponse {
  success: boolean;
  leadId: string;
  /**
   * Komunikat dla użytkownika — w prototypie informujemy że "raport zostanie wysłany".
   * W produkcji to ten sam komunikat, tylko że faktycznie wyślemy mail.
   */
  message: string;
  error?: string;
}
