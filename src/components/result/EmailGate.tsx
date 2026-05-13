"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { DISCLAIMERS } from "@/content/disclaimers";
import { COPY } from "@/content/ui-strings";
import {
  emailGateSchema,
  type EmailGateFormData,
} from "@/lib/validators";
import { analytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function EmailGate({ auditId }: { auditId: string }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailGateFormData>({
    resolver: zodResolver(emailGateSchema),
    defaultValues: {
      consentReport: false,
      consentNewsletter: false,
    },
  });

  useEffect(() => {
    analytics.track("email_gate_viewed", { audit_id: auditId });
  }, [auditId]);

  const onSubmit = async (data: EmailGateFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audit_id: auditId,
          email: data.email,
          companyName: data.companyName,
          position: data.position,
          newsletterOptIn: data.consentNewsletter ?? false,
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Submission failed");
      }

      analytics.track("lead_submitted", {
        audit_id: auditId,
        newsletter_opt_in: data.consentNewsletter ?? false,
      });
      router.push(`/dziekujemy/?email=${encodeURIComponent(data.email)}`);
    } catch (error) {
      console.error("[EMAIL_GATE_ERROR]", error);
      setSubmitError("Coś poszło nie tak. Spróbuj jeszcze raz.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="email-gate" className="rounded-2xl bg-navy p-6 text-white shadow-xl md:p-10">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 rounded-xl bg-amber/10 p-3">
          <Mail className="h-8 w-8 text-amber" />
        </div>
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">
            {COPY.result.pdfTeaser.title}
          </h2>
          <p className="mt-2 leading-relaxed text-white/80">
            {COPY.result.pdfTeaser.subtitle}
          </p>
        </div>
      </div>

      <ul className="mt-6 space-y-2">
        {COPY.result.pdfTeaser.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-white/80">
            <span className="mt-0.5 text-amber">✓</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-white">
            {COPY.emailGate.fields.email.label} *
          </label>
          <input
            id="email"
            type="email"
            placeholder={COPY.emailGate.fields.email.placeholder}
            {...register("email")}
            className={cn(
              "w-full rounded-lg border-2 bg-white px-4 py-3 text-navy placeholder:text-text-muted transition-colors",
              errors.email
                ? "border-danger"
                : "border-transparent focus:border-amber focus:outline-none",
            )}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-danger">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="mb-1 block text-sm font-medium text-white"
          >
            {COPY.emailGate.fields.companyName.label} *
          </label>
          <input
            id="companyName"
            type="text"
            placeholder={COPY.emailGate.fields.companyName.placeholder}
            {...register("companyName")}
            className={cn(
              "w-full rounded-lg border-2 bg-white px-4 py-3 text-navy placeholder:text-text-muted transition-colors",
              errors.companyName
                ? "border-danger"
                : "border-transparent focus:border-amber focus:outline-none",
            )}
            aria-invalid={!!errors.companyName}
          />
          {errors.companyName && (
            <p className="mt-1 text-sm text-danger">
              {errors.companyName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="position"
            className="mb-1 block text-sm font-medium text-white"
          >
            {COPY.emailGate.fields.position.label}
          </label>
          <input
            id="position"
            type="text"
            placeholder={COPY.emailGate.fields.position.placeholder}
            {...register("position")}
            className="w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 text-navy placeholder:text-text-muted transition-colors focus:border-amber focus:outline-none"
          />
          {COPY.emailGate.fields.position.helper && (
            <p className="mt-1 text-xs text-white/60">
              {COPY.emailGate.fields.position.helper}
            </p>
          )}
        </div>

        <div className="mt-6 space-y-3 border-t border-white/10 pt-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              {...register("consentReport")}
              className="mt-1 h-4 w-4 flex-shrink-0 accent-amber"
            />
            <span className="text-sm leading-relaxed text-white/90">
              {COPY.emailGate.consents.report.label} *
            </span>
          </label>
          {errors.consentReport && (
            <p className="text-sm text-danger">
              {errors.consentReport.message}
            </p>
          )}

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              {...register("consentNewsletter")}
              className="mt-1 h-4 w-4 flex-shrink-0 accent-amber"
            />
            <span className="text-sm leading-relaxed text-white/80">
              {COPY.emailGate.consents.newsletter.label}
            </span>
          </label>
        </div>

        <p className="text-xs leading-relaxed text-white/60">
          {DISCLAIMERS.rodoNotice}
        </p>

        <p className="rounded-md border border-amber/20 bg-amber/10 p-3 text-xs text-amber">
          {COPY.result.pdfTeaser.prototypeFooter}
        </p>

        {submitError && (
          <p className="rounded-md bg-danger/10 p-3 text-sm text-danger">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "flex w-full items-center justify-center gap-2 rounded-lg bg-amber py-4 text-lg font-bold text-white shadow-md transition-all hover:bg-amber-dark",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              {COPY.emailGate.submittingButton}
            </>
          ) : (
            <>
              {COPY.emailGate.submitButton}
              <span aria-hidden="true">→</span>
            </>
          )}
        </button>
      </form>
    </section>
  );
}
