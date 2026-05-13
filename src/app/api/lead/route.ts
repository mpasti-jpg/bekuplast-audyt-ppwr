import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { z } from "zod";
import { saveLead, sendMockEmail } from "@/lib/storage";
import type { CreateLeadResponse } from "@/types/api";

const leadSchema = z.object({
  audit_id: z.string().min(1),
  email: z.string().email(),
  companyName: z.string().min(2).max(200),
  position: z.string().max(200).optional(),
  newsletterOptIn: z.boolean().optional(),
});

export async function POST(
  req: Request,
): Promise<NextResponse<CreateLeadResponse>> {
  try {
    const body = await req.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          leadId: "",
          message: "Nieprawidłowe dane",
          error: parsed.error.issues.map((issue) => issue.message).join("; "),
        },
        { status: 400 },
      );
    }

    const data = parsed.data;
    const leadId = `LEAD-${new Date().toISOString().slice(0, 10)}-${nanoid(6)}`;
    const createdAt = new Date().toISOString();

    await saveLead({
      leadId,
      audit_id: data.audit_id,
      email: data.email,
      companyName: data.companyName,
      position: data.position,
      newsletterOptIn: data.newsletterOptIn ?? false,
      createdAt,
    });

    await sendMockEmail({
      to: data.email,
      subject: "Twój raport audytu PPWR - bekuplast.pl",
      body: buildEmailBody(data),
      audit_id: data.audit_id,
      sentAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      leadId,
      message:
        "Raport jest w drodze. Powinien dotrzeć w ciągu 2-3 minut. Sprawdź też SPAM/Promocje.",
    });
  } catch (error) {
    console.error("[API_LEAD_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        leadId: "",
        message: "Coś poszło nie tak. Spróbuj ponownie.",
        error: "Internal error",
      },
      { status: 500 },
    );
  }
}

function buildEmailBody(lead: {
  email: string;
  companyName: string;
  position?: string;
  audit_id: string;
}): string {
  return `
Cześć ${lead.position ? lead.position : "zespole"} z ${lead.companyName},

Dziękujemy za wypełnienie audytu gotowości PPWR.

W załączeniu wysłaliśmy spersonalizowany raport PDF (10-14 stron) zawierający:
- Twój wynik 0-100 wraz z 5-wymiarowym profilem gotowości
- Sekcję branżową - jak PPWR dotyka Twojej branży
- Plan działania 90 dni (M1/M2/M3) z konkretnymi zadaniami
- Rekomendowane produkty bekuplast dopasowane do Twojej skali
- Glosariusz 12 kluczowych pojęć PPWR

Audyt: ${lead.audit_id}

[UWAGA: To prototyp. W produkcji ten email zawiera załącznik PDF z pełnym raportem.]

Pozdrawiamy,
Zespół bekuplast.pl
Polska: polska@bekuplast.com | bekuplast.pl
  `.trim();
}
