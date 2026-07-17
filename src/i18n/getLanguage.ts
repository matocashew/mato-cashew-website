import { languages, type Language } from "./index";

export function getLanguage(lang?: Language) {
  return languages[lang ?? "en"];
}