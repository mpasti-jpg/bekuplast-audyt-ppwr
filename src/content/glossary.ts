// @ts-nocheck
export interface GlossaryEntry {
  term: string;
  fullName?: string;
  definition: string;
}

export const GLOSSARY: GlossaryEntry[] = [
  {
    term: 'PPWR',
    fullName: 'Packaging and Packaging Waste Regulation',
    definition: 'Rozporządzenie UE 2025/40 o opakowaniach i odpadach opakowaniowych. Wchodzi w życie 12 sierpnia 2026 r. Zastępuje dyrektywę 94/62/WE.',
  },
  {
    term: 'RTP',
    fullName: 'Returnable Transport Packaging',
    definition: 'Opakowanie transportowe wielokrotnego użytku. Synonimy: opakowanie zwrotne, opakowanie wielokrotne. Klasyczne RTP: palety plastikowe, skrzynki, KLT, IBC. NIE: karton, drewno (zwykle).',
  },
  {
    term: 'Art. 29 PPWR',
    definition: 'Cele dla opakowań transportowych: 40% w obiegu zwrotnym do 2030 r., 70% do 2040 r. Wyłączenia branżowe (np. medicinal products do 2035 r.). Art. 29(3) — obowiązki dystrybutorów (e-com, retail) oferowania opakowań zwrotnych konsumentom.',
  },
  {
    term: 'DoC',
    fullName: 'Declaration of Conformity',
    definition: 'Deklaracja zgodności PPWR. Dokument zawierający identyfikator opakowania, oświadczenie zgodności z wymogami PPWR i podpis osoby uprawnionej. Wymagany dla każdego opakowania wprowadzanego na rynek UE od 12.08.2026.',
  },
  {
    term: 'DPP',
    fullName: 'Digital Product Passport',
    definition: 'Cyfrowy paszport produktu — kod QR/RFID linkujący do dokumentacji opakowania. Wymóg od 2030 r. dla części opakowań (głównie >5 kg + RTP).',
  },
  {
    term: 'VDA-RL-KLT',
    definition: 'Standard niemieckiego VDA (Verband der Automobilindustrie) dla pojemników transportowych. KLT = Kleinladungsträger. RL = Reinforced Light. Wymagany w łańcuchach OEM niemieckich.',
  },
  {
    term: 'BDO',
    fullName: 'Baza Danych o Odpadach',
    definition: 'Polski rejestr obowiązujący firmy wprowadzające opakowania na rynek. Niezależny od PPWR, ale uzupełniający. Sprawozdania kwartalne i roczne.',
  },
  {
    term: 'ROP / EPR',
    fullName: 'Rozszerzona Odpowiedzialność Producenta / Extended Producer Responsibility',
    definition: 'PPWR ujednolica zasady EPR w UE. Polska ustawa UC100 implementuje to do prawa krajowego. ROP-napoje to osobny system kaucji konsumenckiej.',
  },
  {
    term: 'PFAS',
    fullName: 'Per- and Polyfluoroalkyl Substances',
    definition: 'Substancje per- i polifluoroalkilowe. Zakaz w opakowaniach mających kontakt z żywnością od 12.08.2026 (Art. 5 PPWR). Bez okresu przejściowego.',
  },
  {
    term: 'PCR',
    fullName: 'Post-Consumer Recyclate',
    definition: 'Recyklat po-konsumencki. Materiał z recyklingu opakowań zebranych od konsumentów. PPWR wymaga minimum 25% PCR w butelkach PET od 2025 r., 30% od 2030 r.',
  },
  {
    term: 'Pooling',
    definition: 'Model biznesowy dzierżawienia/wynajmowania puli RTP (palet, skrzynek) między firmami. Klasyczni operatorzy: CHEP, Euro Pool System, IFCO. PPWR przyspiesza adopcję tego modelu.',
  },
  {
    term: 'Closed-loop intra-firmowy',
    definition: 'Obieg opakowań wewnątrz jednej firmy — pojemnik nie opuszcza pętli firmowej. Pozwala na klasyfikację 100% reuse w Art. 29(1) PPWR przy odpowiedniej dokumentacji.',
  },
];
