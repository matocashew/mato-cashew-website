export type Language = "en" | "km";

export interface ProductTranslation {

  language: Language;

  name: string;

  shortDescription: string;

  description: string;

  seoTitle: string;

  seoDescription: string;

}