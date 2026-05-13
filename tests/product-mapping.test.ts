import { describe, expect, it } from "vitest";
import type { IndustryCode, ScaleCode } from "@/types/industry";
import { getProductRecommendations } from "@/lib/product-mapping";

const ALL_INDUSTRIES: IndustryCode[] = [
  "automotive",
  "beverages",
  "food",
  "agriculture",
  "pharma",
  "ecommerce_b2c",
  "ecommerce_b2b",
  "retail_fmcg",
  "intralogistics",
  "industrial",
  "other",
];

const ALL_SCALES: ScaleCode[] = ["micro", "medium", "large", "enterprise"];

describe("product-mapping", () => {
  it("zwraca rekomendacje dla każdej pary branża x skala", () => {
    for (const industry of ALL_INDUSTRIES) {
      for (const scale of ALL_SCALES) {
        const products = getProductRecommendations(industry, scale);
        expect(products.length).toBeGreaterThan(0);
        expect(products.length).toBeLessThanOrEqual(5);

        for (const product of products) {
          expect(product.productId).toBeTruthy();
          expect(product.productLine).toBeTruthy();
          expect(product.productPageUrl).toMatch(/^https?:\/\//);
        }
      }
    }
  });

  it("zwraca różne rekomendacje dla różnych skal w tej samej branży", () => {
    const small = getProductRecommendations("automotive", "micro");
    const big = getProductRecommendations("automotive", "enterprise");
    expect(small.map((product) => product.productId).sort()).not.toEqual(
      big.map((product) => product.productId).sort(),
    );
  });
});
