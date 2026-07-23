export const languages = [

  "en",

  "km",

] as const;

export type Language =
  typeof languages[number];

export const defaultLanguage = "en";

export default languages;