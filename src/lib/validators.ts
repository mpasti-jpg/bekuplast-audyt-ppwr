import { z } from "zod";

export const leadFormSchema = z.object({
  audit_id: z.string().min(1),
  email: z.string().email(),
  companyName: z.string().min(2),
  position: z.string().optional(),
  newsletterOptIn: z.boolean(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const emailGateSchema = z.object({
  email: z
    .string()
    .min(1, "Wpisz adres e-mail")
    .email("Wpisz prawidłowy adres e-mail"),
  companyName: z
    .string()
    .min(2, "Wpisz nazwę firmy (min. 2 znaki)")
    .max(200, "Nazwa firmy jest za długa"),
  position: z.string().max(200, "Stanowisko jest za długie").optional(),
  consentReport: z
    .boolean()
    .refine((value) => value, "Wymagana zgoda na otrzymanie raportu"),
  consentNewsletter: z.boolean().optional(),
});

export type EmailGateFormData = z.infer<typeof emailGateSchema>;
