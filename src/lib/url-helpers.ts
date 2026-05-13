export function buildAuditResultUrl(auditId: string) {
  return `/wynik/${encodeURIComponent(auditId)}/`;
}

export function buildExternalUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_HOMEPAGE_URL ?? "https://bekuplast.pl";
  return new URL(path, base).toString();
}
