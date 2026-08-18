import {
  translations,
  type Translation,
} from "./index";

export type Language =
  keyof typeof translations;

let currentLanguage: Language = "en";

export function getCurrentLanguage(): Language {
  return currentLanguage;
}

export function setCurrentLanguage(
  lang: Language
) {
  currentLanguage = lang;
}

export function getDictionary(): Translation {
  return translations[currentLanguage];
}