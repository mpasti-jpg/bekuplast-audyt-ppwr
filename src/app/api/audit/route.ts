import { NextResponse } from "next/server";
import { saveAudit } from "@/lib/storage";
import type { SaveAuditRequest, SaveAuditResponse } from "@/types/api";

export async function POST(
  req: Request,
): Promise<NextResponse<SaveAuditResponse>> {
  try {
    const body = (await req.json()) as SaveAuditRequest;

    if (!body.state?.audit_id || !body.result?.audit_id) {
      return NextResponse.json(
        { success: false, audit_id: "", error: "Brakuje audit_id" },
        { status: 400 },
      );
    }

    await saveAudit({
      audit_id: body.result.audit_id,
      result: body.result,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      audit_id: body.result.audit_id,
    });
  } catch (error) {
    console.error("[API_AUDIT_ERROR]", error);
    return NextResponse.json(
      { success: false, audit_id: "", error: "Internal error" },
      { status: 500 },
    );
  }
}
