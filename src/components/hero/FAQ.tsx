import { FAQItem } from "@/components/hero/FAQItem";
import { COPY } from "@/content/ui-strings";

export function FAQ() {
  return (
    <section className="bg-white py-12 md:py-20" id="faq">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold text-navy md:text-4xl">
          {COPY.faq.title}
        </h2>
        <div className="mt-10 space-y-2">
          {COPY.faq.items.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
