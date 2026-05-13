import fs from "node:fs/promises";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "data");

async function ensureDataDir(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

export async function appendToJsonFile<T>(
  filename: string,
  entry: T,
): Promise<void> {
  await ensureDataDir();
  const filepath = path.join(DATA_DIR, filename);

  let existing: T[] = [];
  try {
    const raw = await fs.readFile(filepath, "utf-8");
    const parsed = JSON.parse(raw);
    existing = Array.isArray(parsed) ? parsed : [];
  } catch {
    existing = [];
  }

  existing.push(entry);
  await fs.writeFile(filepath, JSON.stringify(existing, null, 2), "utf-8");
}

export async function readJsonFile<T>(filename: string): Promise<T[]> {
  await ensureDataDir();
  const filepath = path.join(DATA_DIR, filename);

  try {
    const raw = await fs.readFile(filepath, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveLead(lead: {
  leadId: string;
  audit_id: string;
  email: string;
  companyName: string;
  position?: string;
  newsletterOptIn: boolean;
  createdAt: string;
}): Promise<void> {
  await appendToJsonFile("leads.json", lead);
  console.log("[MOCK_CRM] Lead saved:", lead);
}

export async function saveAudit(audit: {
  audit_id: string;
  result: unknown;
  createdAt: string;
}): Promise<void> {
  await appendToJsonFile("audits.json", audit);
  console.log("[MOCK_DB] Audit saved:", audit.audit_id);
}

export async function sendMockEmail(payload: {
  to: string;
  subject: string;
  body: string;
  audit_id: string;
  sentAt: string;
}): Promise<void> {
  await appendToJsonFile("emails.json", payload);
  console.log("[MOCK_EMAIL] Pretending to send email:", {
    to: payload.to,
    subject: payload.subject,
    audit_id: payload.audit_id,
  });
}
