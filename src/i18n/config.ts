export const defaultLanguage = "en";

export const supportedLanguages = [
  "en",
  "km",
] as const;

export type Language =
  typeof supportedLanguages[number];