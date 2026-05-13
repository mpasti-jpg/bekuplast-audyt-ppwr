import { nanoid } from "nanoid";

export function createAuditId() {
  return nanoid(12);
}
