// @ts-nocheck
import type { IndustryCode, ScaleCode } from '@/types/industry';
import type { ProductRecommendation } from '@/types/product';

interface ProductInfo {
  productId: string;
  productLine: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  productPageUrl: string;
  imageUrl: string;
}

// ===== Catalog produktów bekuplast =====
const PRODUCTS: Record<string, ProductInfo> = {
  basicline_klt_euronorm: {
    productId: 'basicline_klt_euronorm',
    productLine: 'basicline KLT — Euro Norm',
    category: 'Pojemnik transportowy KLT',
    description: 'Pojemnik KLT zgodny z VDA-RL-KLT. Wymiary 300×200×147 mm i 400×300×147–280 mm. Materiał PP.',
    longDescription: 'Stackable, zamykalny, kompatybilny z systemami AKL i shuttle. Standard automotive tier-1/2/3, ale używany też w intralogistyce i jako uniwersalna baza B2B.',
    features: ['Materiał PP, food-grade dostępne', 'Stackable do 6 sztuk', 'Wymiary Euro Norm', 'Kompatybilny VDA-RL-KLT'],
    productPageUrl: 'https://bekuplast.pl/produkty/pojemniki-plastikowe-euro-norm-basicline/',
    imageUrl: '/images/products/basicline-placeholder.png',
  },
  silverline: {
    productId: 'silverline',
    productLine: 'silverline — premium reinforced',
    category: 'Pojemnik wzmacniany ESD-ready',
    description: 'Premium line z wzmocnionymi ścianami, szary/srebrny. Wyższa nośność, dłuższa żywotność (8–12 lat operacyjnie).',
    longDescription: 'Idealny dla intensywnego użycia w logistyce kontraktowej i AKL/shuttle. Wersja ESD dostępna dla elektroniki i pharma.',
    features: ['Wzmacniane ściany', '8-12 lat operacyjnie', 'ESD opcjonalnie', 'Kompatybilny z robotami'],
    productPageUrl: 'https://bekuplast.pl/produkty/pojemniki-plastikowe-euro-norm-silverline/',
    imageUrl: '/images/products/silverline-placeholder.png',
  },
  lightline: {
    productId: 'lightline',
    productLine: 'lightline — lekkie pojemniki',
    category: 'Pojemnik lekki Euro Norm',
    description: 'Lekka linia z niższą masą własną — niższy koszt logistyki, lepsze ergonomy dla operatorów.',
    longDescription: 'Idealny dla e-commerce i fulfillment, gdzie liczy się szybkość obrotu. Mniejsze obciążenie transportu = niższy koszt jednostkowy.',
    features: ['Niska masa własna', 'Ergonomiczny dla operatora', 'Niższy koszt transportu', 'Stackable'],
    productPageUrl: 'https://bekuplast.pl/produkty/pojemniki-plastikowe-euro-norm-lightline/',
    imageUrl: '/images/products/lightline-placeholder.png',
  },
  ergline: {
    productId: 'ergline',
    productLine: 'ergline — ergonomic line',
    category: 'Pojemnik ergonomiczny dla pharma',
    description: 'Ergonomiczna linia pojemników dla farmacji i kosmetyki. Specjalne uchwyty, gładkie powierzchnie ułatwiające dezynfekcję.',
    longDescription: 'Kompatybilność z systemami clean room. Materiał food-grade/pharma-grade, z opcją sterylizacji autoclaving.',
    features: ['Clean room compatibility', 'Gładkie powierzchnie', 'Specjalne uchwyty', 'Autoclaving OK'],
    productPageUrl: 'https://bekuplast.pl/produkty/pojemniki-ergline/',
    imageUrl: '/images/products/ergline-placeholder.png',
  },
  contecline: {
    productId: 'contecline',
    productLine: 'contecline — big boxy',
    category: 'Big box / kontener składalny',
    description: 'Duże pojemniki i big boxy do 700 l. Składalne dla efektywnego transportu zwrotnego.',
    longDescription: 'Często używane w farmacji do transportu komponentów oraz w przetwórstwie żywności (półprodukty, IBC-substitute).',
    features: ['Do 700 l pojemności', 'Składalne (redukcja objętości 70%)', 'Food-grade', 'Stackable'],
    productPageUrl: 'https://bekuplast.pl/produkty/pojemniki-contecline/',
    imageUrl: '/images/products/contecline-placeholder.png',
  },
  bakeline: {
    productId: 'bakeline',
    productLine: 'bakeline — piekarnictwo',
    category: 'Pojemnik piekarniczy',
    description: 'Specjalna linia dla piekarni i cukierni — pojemniki na chleb, ciasta i drożdżówki.',
    longDescription: 'Materiał zatwierdzony do kontaktu z żywnością, łatwy w myciu (HACCP). Wentylacja optymalna dla świeżego pieczywa.',
    features: ['Food-grade certyfikat', 'HACCP-friendly', 'Wentylacja optymalna', 'Łatwe mycie'],
    productPageUrl: 'https://bekuplast.pl/produkty/pojemniki-bakeline/',
    imageUrl: '/images/products/bakeline-placeholder.png',
  },
  alc_tradeline: {
    productId: 'alc_tradeline',
    productLine: 'ALC tradeline — z pokrywą zintegrowaną',
    category: 'Pojemnik handlowy z pokrywą',
    description: 'Pojemnik handlowy z pokrywą zintegrowaną, zamykany. Dla transportu B2B w łańcuchach FMCG.',
    longDescription: 'Bezpieczna, szybka logistyka między DC a sklepami. Zamykany — minimalizuje ryzyko kradzieży i uszkodzeń w transporcie.',
    features: ['Zintegrowana pokrywa', 'Zamykalny', 'Stackable', 'B2B-grade'],
    productPageUrl: 'https://bekuplast.pl/produkty/pojemniki-alc-tradeline/',
    imageUrl: '/images/products/tradeline-placeholder.png',
  },
  vda_klt: {
    productId: 'vda_klt',
    productLine: 'VDA-RL-KLT — standard automotive',
    category: 'KLT VDA dla automotive',
    description: 'Pojemnik zgodny ze standardem VDA-RL-KLT. Wymagany przez większość koncernów niemieckich (VW, BMW, Mercedes).',
    longDescription: 'Robust + reinforced light variant. Standard branżowy dla tier-1/2/3 dostarczających do globalnych OEM.',
    features: ['VDA-RL-KLT compliant', 'Standard OEM', 'Robust + Light wariants', 'RFID-ready'],
    productPageUrl: 'https://bekuplast.pl/produkty/pojemniki-vda-rl-klt/',
    imageUrl: '/images/products/klt-vda-placeholder.png',
  },
  pallets_plastic: {
    productId: 'pallets_plastic',
    productLine: 'Palety plastikowe Euro',
    category: 'Paleta plastikowa 1200×800',
    description: 'Paleta z HDPE, wymiary 1200×800×160 mm, nośność statyczna 4500 kg, dynamiczna 1500 kg.',
    longDescription: 'Możliwość RFID / kodu QR pod DPP (art. 11 PPWR). Higieniczna alternatywa dla drewna (brak fumigacji).',
    features: ['HDPE, 100% recyklowalne', 'RFID/DPP-ready', 'Brak fumigacji ISPM-15', '4500 kg statyczna'],
    productPageUrl: 'https://bekuplast.pl/produkty/palety-plastikowe/',
    imageUrl: '/images/products/paleta-plastikowa-placeholder.png',
  },
  variopallet: {
    productId: 'variopallet',
    productLine: 'Variopallet — paleta specjalistyczna',
    category: 'Paleta plastikowa modułowa',
    description: 'Specjalna linia palet z modułowymi nakładkami, ścianami i pokrywami.',
    longDescription: 'Pozwala dostosować jeden typ palety do różnych ładunków — silne dla intralogistyki i food.',
    features: ['Modułowe nakładki', 'Stackable z pokrywami', 'Multi-use', 'Kompatybilny z palet jacks'],
    productPageUrl: 'https://bekuplast.pl/produkty/variopallet/',
    imageUrl: '/images/products/skrzyniopaleta-placeholder.png',
  },
  clever_move_box: {
    productId: 'clever_move_box',
    productLine: 'Clever Move Box — składalny',
    category: 'Pojemnik składalny zwrotny',
    description: 'Składalny pojemnik 600×400 — redukcja objętości o 80% przy transporcie pustym.',
    longDescription: 'Radykalna oszczędność w pętlach zwrotnych (zwłaszcza międzynarodowych). Idealny dla e-com B2C i sieci kurierskich.',
    features: ['80% redukcja w transporcie pustym', 'Składanie jedną ręką', 'Stackable', 'Lock-mechanism'],
    productPageUrl: 'https://bekuplast.pl/produkty/clever-move-box/',
    imageUrl: '/images/products/clever-move-box-placeholder.png',
  },
  beverage_crates: {
    productId: 'beverage_crates',
    productLine: 'Skrzynki przegrodowe na napoje',
    category: 'Skrzynka na butelki zwrotne',
    description: 'Skrzynki przegrodowe dedykowane butelkom (0,33 l, 0,5 l, 0,75 l).',
    longDescription: 'Kompatybilne z systemem kaucji konsumenckiej i obiegiem zwrotnym (ROP-napoje). Standard branżowy w piwowarstwie.',
    features: ['Przegrody na butelki', 'Standard 24×0,5l, 20×0,5l', 'Kaucja konsumencka ready', 'Stackable'],
    productPageUrl: 'https://bekuplast.pl/produkty/skrzynki-przegrodowe-na-napoje/',
    imageUrl: '/images/products/skrzynka-przegrodowa-placeholder.png',
  },
  agri_crates: {
    productId: 'agri_crates',
    productLine: 'Skrzynki ogrodnicze',
    category: 'Skrzynka na owoce/warzywa',
    description: 'Skrzynki perforowane do transportu świeżych owoców i warzyw.',
    longDescription: 'Stackable, lekkie, łatwe w czyszczeniu. Kompatybilne z systemami zbiorczymi (np. Galia, IFCO).',
    features: ['Perforacja dla wentylacji', 'Stackable', 'Łatwe mycie', 'Galia/IFCO compatible'],
    productPageUrl: 'https://bekuplast.pl/produkty/skrzynki-ogrodnicze/',
    imageUrl: '/images/products/skrzynka-ogrodnicza-placeholder.png',
  },
  esd_containers: {
    productId: 'esd_containers',
    productLine: 'Pojemniki ESD',
    category: 'Pojemnik antystatyczny',
    description: 'Pojemniki antystatyczne (ESD) dla elektroniki i wrażliwych komponentów.',
    longDescription: 'Specjalna mieszanka polimerów rozprowadzająca ładunki statyczne. Wymagane w pharma, automotive electronics, fulfillment elektroniki.',
    features: ['Dissipative ESD', 'Surface resistance 10^6-10^9 Ω', 'Stackable', 'Pełen zakres rozmiarów'],
    productPageUrl: 'https://bekuplast.pl/produkty/pojemniki-esd/',
    imageUrl: '/images/products/silverline-placeholder.png',
  },
};

// ===== Mapowanie 44 par (branża × skala) =====
type MappingKey = `${IndustryCode}_${ScaleCode}`;

interface MappingEntry {
  primary: string[];           // 2-3 produkty główne
  secondary?: string[];        // 1-2 dodatkowe
  rationale: string;           // 1-2 zdania uzasadnienia
  roiMonths: string;           // typowy ROI
}

export const PRODUCT_MAPPING: Record<MappingKey, MappingEntry> = {
  // ============ AUTOMOTIVE ============
  automotive_micro: {
    primary: ['basicline_klt_euronorm'],
    secondary: ['pallets_plastic'],
    rationale: 'Dla małych tierów wystarczy podstawowy KLT zgodny z VDA + plastikowe palety jako baza do skalowania.',
    roiMonths: '14–20 mies.',
  },
  automotive_medium: {
    primary: ['basicline_klt_euronorm', 'silverline'],
    secondary: ['pallets_plastic'],
    rationale: 'Silverline dla intensywnego użycia w wielu zmianach + basicline KLT jako standard tier-1.',
    roiMonths: '14–18 mies.',
  },
  automotive_large: {
    primary: ['silverline', 'clever_move_box', 'vda_klt'],
    secondary: ['pallets_plastic'],
    rationale: 'Silverline + składalny Clever Move Box dla efektywności pętli zwrotnej do tier-1 niemieckich.',
    roiMonths: '12–16 mies.',
  },
  automotive_enterprise: {
    primary: ['vda_klt', 'silverline', 'clever_move_box'],
    secondary: ['esd_containers'],
    rationale: 'Pełna gama VDA + ESD dla części elektronicznych + składalność dla globalnych pętli.',
    roiMonths: '10–14 mies.',
  },

  // ============ BEVERAGES ============
  beverages_micro: {
    primary: ['beverage_crates', 'basicline_klt_euronorm'],
    rationale: 'Małym browarom wystarczają skrzynki przegrodowe + uniwersalne basicline do akcesoriów.',
    roiMonths: '18–24 mies.',
  },
  beverages_medium: {
    primary: ['beverage_crates', 'pallets_plastic'],
    secondary: ['clever_move_box'],
    rationale: 'Standardowe skrzynki przegrodowe + palety plastikowe pod intensywny obrót w kaucji konsumenckiej.',
    roiMonths: '14–18 mies.',
  },
  beverages_large: {
    primary: ['beverage_crates', 'silverline', 'pallets_plastic'],
    rationale: 'Skala wymaga silverline w obrocie wewnętrznym + masowych skrzynek przegrodowych.',
    roiMonths: '12–16 mies.',
  },
  beverages_enterprise: {
    primary: ['beverage_crates', 'silverline', 'variopallet'],
    secondary: ['clever_move_box'],
    rationale: 'Customizowane skrzynki + variopallet do różnych formatów butelek + składalność.',
    roiMonths: '10–14 mies.',
  },

  // ============ FOOD ============
  food_micro: {
    primary: ['bakeline', 'basicline_klt_euronorm'],
    rationale: 'Bakeline dla piekarni/produkcji wypieków + basicline na inne kategorie food.',
    roiMonths: '16–22 mies.',
  },
  food_medium: {
    primary: ['bakeline', 'alc_tradeline'],
    secondary: ['basicline_klt_euronorm'],
    rationale: 'ALC tradeline z zintegrowaną pokrywą dla bezpiecznego transportu food + bakeline dla pieczywa.',
    roiMonths: '14–18 mies.',
  },
  food_large: {
    primary: ['alc_tradeline', 'silverline'],
    secondary: ['bakeline', 'pallets_plastic'],
    rationale: 'ALC tradeline + silverline jako baza dla łańcucha cold chain i transportu między DC.',
    roiMonths: '12–16 mies.',
  },
  food_enterprise: {
    primary: ['alc_tradeline', 'silverline', 'contecline'],
    secondary: ['variopallet'],
    rationale: 'Customizowane ALC tradeline + big boxy dla półproduktów + variopallet dla mieszanych ładunków.',
    roiMonths: '10–14 mies.',
  },

  // ============ AGRICULTURE ============
  agriculture_micro: {
    primary: ['agri_crates'],
    secondary: ['pallets_plastic'],
    rationale: 'Skrzynki ogrodnicze to baza dla każdego sadu/gospodarstwa — kompatybilne z hurtowniami.',
    roiMonths: '18–28 mies.',
  },
  agriculture_medium: {
    primary: ['agri_crates', 'pallets_plastic'],
    rationale: 'Skrzynki ogrodnicze + palety plastikowe do transportu mieszanych ładunków świeżej produkcji.',
    roiMonths: '16–24 mies.',
  },
  agriculture_large: {
    primary: ['agri_crates', 'pallets_plastic', 'contecline'],
    rationale: 'Pełna gama: skrzynki, palety, big boxy dla magazynowania półproduktów.',
    roiMonths: '14–20 mies.',
  },
  agriculture_enterprise: {
    primary: ['agri_crates', 'variopallet', 'contecline'],
    secondary: ['clever_move_box'],
    rationale: 'Wszystkie linie + variopallet dla dostosowania do różnych typów ładunków sezonowych.',
    roiMonths: '12–18 mies.',
  },

  // ============ PHARMA ============
  pharma_micro: {
    primary: ['ergline'],
    secondary: ['esd_containers'],
    rationale: 'Ergline jako baza pharma + ESD dla wrażliwych komponentów (elektronika medyczna).',
    roiMonths: '20–30 mies.',
  },
  pharma_medium: {
    primary: ['ergline', 'contecline'],
    secondary: ['esd_containers'],
    rationale: 'Ergline + contecline do większych komponentów + ESD dla wybranych SKU.',
    roiMonths: '18–26 mies.',
  },
  pharma_large: {
    primary: ['ergline', 'contecline', 'esd_containers'],
    rationale: 'Pełna gama pharma + customizacja dla clean room compliance.',
    roiMonths: '16–22 mies.',
  },
  pharma_enterprise: {
    primary: ['ergline', 'contecline', 'esd_containers'],
    secondary: ['silverline'],
    rationale: 'Wszystkie linie pharma + custom (clean room, sterylność) + silverline dla logistyki kontraktowej.',
    roiMonths: '14–20 mies.',
  },

  // ============ E-COMMERCE B2C ============
  ecommerce_b2c_micro: {
    primary: ['lightline'],
    rationale: 'Lekkie pojemniki minimalizujące koszt logistyki — kluczowe dla e-commerce small scale.',
    roiMonths: '20–28 mies.',
  },
  ecommerce_b2c_medium: {
    primary: ['lightline', 'clever_move_box'],
    rationale: 'Lightline + składalny dla zwrotów (paczkomatowe, kurierzy).',
    roiMonths: '16–22 mies.',
  },
  ecommerce_b2c_large: {
    primary: ['lightline', 'clever_move_box', 'alc_tradeline'],
    rationale: 'Lightline jako baza + ALC tradeline dla bezpiecznych zwrotów + składalność.',
    roiMonths: '14–18 mies.',
  },
  ecommerce_b2c_enterprise: {
    primary: ['lightline', 'clever_move_box', 'alc_tradeline'],
    secondary: ['pallets_plastic'],
    rationale: 'Pełna gama e-com + customizowane składalne dla globalnych pętli zwrotnych.',
    roiMonths: '12–16 mies.',
  },

  // ============ ECOMMERCE B2B (3PL/spedycja) ============
  ecommerce_b2b_micro: {
    primary: ['pallets_plastic', 'basicline_klt_euronorm'],
    rationale: 'Palety plastikowe + basicline jako uniwersalna baza dla małego 3PL operującego mieszane ładunki.',
    roiMonths: '18–24 mies.',
  },
  ecommerce_b2b_medium: {
    primary: ['pallets_plastic', 'silverline'],
    secondary: ['clever_move_box'],
    rationale: 'Palety + silverline dla intensywnego użycia + składalne dla optymalizacji pętli.',
    roiMonths: '14–20 mies.',
  },
  ecommerce_b2b_large: {
    primary: ['silverline', 'pallets_plastic', 'clever_move_box'],
    rationale: 'Silverline + palety + składalne — pełen zestaw dla skali kontraktowej 3PL.',
    roiMonths: '12–16 mies.',
  },
  ecommerce_b2b_enterprise: {
    primary: ['silverline', 'variopallet', 'clever_move_box'],
    secondary: ['contecline'],
    rationale: 'Variopallet + silverline + big boxy — pełen wachlarz dla globalnego operatora 3PL.',
    roiMonths: '10–14 mies.',
  },

  // ============ RETAIL FMCG ============
  retail_fmcg_micro: {
    primary: ['alc_tradeline', 'basicline_klt_euronorm'],
    rationale: 'ALC tradeline z pokrywą + basicline jako pojemniki uniwersalne między DC a sklepami.',
    roiMonths: '18–24 mies.',
  },
  retail_fmcg_medium: {
    primary: ['alc_tradeline', 'pallets_plastic'],
    secondary: ['basicline_klt_euronorm'],
    rationale: 'ALC tradeline + palety plastikowe do efektywnego ruchu DC ↔ sklepy.',
    roiMonths: '14–20 mies.',
  },
  retail_fmcg_large: {
    primary: ['alc_tradeline', 'silverline', 'pallets_plastic'],
    rationale: 'Skala wymusza silverline w obrocie wewnętrznym + ALC tradeline w dystrybucji.',
    roiMonths: '12–16 mies.',
  },
  retail_fmcg_enterprise: {
    primary: ['alc_tradeline', 'silverline', 'variopallet'],
    secondary: ['clever_move_box'],
    rationale: 'Customizowane ALC + variopallet + składalne — pełen wachlarz dla sieci hipermarketów.',
    roiMonths: '10–14 mies.',
  },

  // ============ INTRALOGISTICS ============
  intralogistics_micro: {
    primary: ['basicline_klt_euronorm'],
    secondary: ['esd_containers'],
    rationale: 'Basicline + ESD dla magazynów obsługujących elektronikę/komponenty wrażliwe.',
    roiMonths: '16–24 mies.',
  },
  intralogistics_medium: {
    primary: ['basicline_klt_euronorm', 'silverline'],
    secondary: ['esd_containers'],
    rationale: 'Basicline jako baza + silverline dla AKL/shuttle + ESD dla wybranych SKU.',
    roiMonths: '14–20 mies.',
  },
  intralogistics_large: {
    primary: ['silverline', 'esd_containers', 'pallets_plastic'],
    rationale: 'Silverline + ESD + palety — pełen zestaw dla magazynu wysokiego składowania.',
    roiMonths: '12–16 mies.',
  },
  intralogistics_enterprise: {
    primary: ['silverline', 'esd_containers', 'variopallet'],
    secondary: ['contecline'],
    rationale: 'Customizowany silverline z RFID + ESD + variopallet — pełen wachlarz dla AKL/WMS-driven operacji.',
    roiMonths: '10–14 mies.',
  },

  // ============ INDUSTRIAL (catch-all) ============
  industrial_micro: {
    primary: ['basicline_klt_euronorm', 'pallets_plastic'],
    rationale: 'Uniwersalna baza: basicline + palety plastikowe dla każdego B2B classic producenta.',
    roiMonths: '18–26 mies.',
  },
  industrial_medium: {
    primary: ['basicline_klt_euronorm', 'silverline'],
    secondary: ['pallets_plastic'],
    rationale: 'Basicline + silverline jako podstawa closed-loop intra-firmowo.',
    roiMonths: '14–20 mies.',
  },
  industrial_large: {
    primary: ['silverline', 'pallets_plastic'],
    secondary: ['clever_move_box', 'contecline'],
    rationale: 'Silverline jako baza + składalne + big boxy dla większych komponentów.',
    roiMonths: '12–16 mies.',
  },
  industrial_enterprise: {
    primary: ['silverline', 'variopallet', 'contecline'],
    secondary: ['clever_move_box'],
    rationale: 'Pełen wachlarz: silverline customizowany + variopallet + big boxy + składalne.',
    roiMonths: '10–14 mies.',
  },

  // ============ OTHER (placeholder — UI nie renderuje, idzie do formularza) ============
  other_micro: {
    primary: ['basicline_klt_euronorm', 'pallets_plastic'],
    rationale: 'Dla nietypowych branż — uniwersalna baza, do uzupełnienia po rozmowie z inżynierem aplikacyjnym.',
    roiMonths: '— do oszacowania',
  },
  other_medium: {
    primary: ['basicline_klt_euronorm', 'silverline', 'pallets_plastic'],
    rationale: 'Standardowa baza B2B — dopasowanie wymaga analizy przypadku użycia.',
    roiMonths: '— do oszacowania',
  },
  other_large: {
    primary: ['silverline', 'pallets_plastic'],
    secondary: ['clever_move_box'],
    rationale: 'Standardowa duża skala — szczegóły do ustalenia w konsultacji.',
    roiMonths: '— do oszacowania',
  },
  other_enterprise: {
    primary: ['silverline', 'variopallet'],
    secondary: ['clever_move_box', 'contecline'],
    rationale: 'Wymagamy konsultacji — typowy zestaw enterprise + customizacja.',
    roiMonths: '— do oszacowania',
  },
};

// ===== Main function =====

export function getProductRecommendations(
  industry: IndustryCode,
  scale: ScaleCode,
): ProductRecommendation[] {
  const key = `${industry}_${scale}` as MappingKey;
  const mapping = PRODUCT_MAPPING[key];
  if (!mapping) return [];

  const all = [...mapping.primary, ...(mapping.secondary || [])];
  return all
    .map((productKey) => PRODUCTS[productKey])
    .filter(Boolean)
    .slice(0, 4)
    .map((p, idx) => ({
      productId: p.productId,
      productLine: p.productLine,
      category: p.category,
      imageUrl: p.imageUrl,
      productPageUrl: p.productPageUrl,
      shortDescription: p.description,
      longDescription: p.longDescription,
      whyForThisCase: idx === 0 ? mapping.rationale : p.longDescription,
      expectedRoiMonths: mapping.roiMonths,
      features: p.features,
    }));
}
