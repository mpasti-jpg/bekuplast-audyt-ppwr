"use client";

import { ExternalLink } from "lucide-react";
import type { IndustryCode, ScaleCode } from "@/types/industry";
import { INDUSTRY_LABELS, SCALE_LABELS } from "@/types/industry";
import { analytics } from "@/lib/analytics";
import { getProductRecommendations } from "@/lib/product-mapping";

export function ProductRecommendations({
  industry,
  scale,
}: {
  industry: IndustryCode;
  scale: ScaleCode;
}) {
  const products = getProductRecommendations(industry, scale);
  if (products.length === 0) return null;

  return (
    <section className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <h2 className="text-2xl font-bold text-navy md:text-3xl">
        Rekomendowane produkty bekuplast
      </h2>
      <p className="mt-2 text-navy/70">
        Dopasowane do branży <strong>{INDUSTRY_LABELS[industry]}</strong> i
        skali <strong>{SCALE_LABELS[scale]}</strong>.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {products.map((product, index) => (
          <a
            key={product.productId}
            href={product.productPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              analytics.track("product_card_clicked", {
                product_id: product.productId,
                product_line: product.productLine,
              })
            }
            className="group rounded-xl border border-border bg-paper p-5 transition-all hover:border-amber hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2"
          >
            <div className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber">
                  {product.category}
                </p>
                <h3 className="mt-1 font-bold text-navy group-hover:text-amber-dark">
                  {product.productLine}
                </h3>
              </div>
              <ExternalLink className="h-4 w-4 flex-shrink-0 text-text-muted group-hover:text-amber" />
            </div>

            <p className="mt-3 text-sm leading-relaxed text-navy/80">
              {index === 0 ? product.whyForThisCase : product.shortDescription}
            </p>

            {product.features.length > 0 && (
              <ul className="mt-3 space-y-1">
                {product.features.slice(0, 3).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-1.5 text-xs text-text-muted"
                  >
                    <span className="mt-0.5 text-amber">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-3 border-t border-border pt-3 text-xs text-text-muted">
              Typowy ROI:{" "}
              <strong className="text-navy">{product.expectedRoiMonths}</strong>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
