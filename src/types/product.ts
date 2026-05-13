/**
 * Pojedynczy produkt bekuplast — wpisy w product-mapping.ts.
 * Linki do produktPageUrl placeholder do real bekuplast.pl URL.
 */
export interface ProductRecommendation {
  productId: string;          // 'basicline_klt', 'silverline_esd', ...
  productLine: string;        // 'basicline KLT 400×300×150'
  category: string;           // 'KLT VDA', 'Silverline ESD', ...
  imageUrl: string;           // /images/products/*.png
  productPageUrl: string;     // pełen URL do bekuplast.pl
  shortDescription: string;   // 1-2 zdania
  longDescription: string;    // 2-3 zdania
  whyForThisCase: string;     // 1-2 zdania uzasadnienia dla pary branża×skala
  expectedRoiMonths: string;  // np. '12-18 miesięcy'
  features: string[];         // bullet list 3-5 cech
}

export interface ProductMappingEntry {
  industry: string;           // IndustryCode (string for flexibility, walidacja w runtime)
  scale: string;              // ScaleCode
  products: ProductRecommendation[];
}
