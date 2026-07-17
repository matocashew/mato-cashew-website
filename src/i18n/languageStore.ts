import { languages, type Language } from "./index";

let currentLanguage: Language = "en";

export function getCurrentLanguage() {
  return currentLanguage;
}

export function setCurrentLanguage(lang: Language) {
  currentLanguage = lang;
}

export function getDictionary() {
  return languages[currentLanguage];
}