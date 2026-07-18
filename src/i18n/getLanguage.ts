import { translations } from "./index";
import {
  defaultLanguage,
  type Language,
} from "./config";

export function getLanguage(
  language: Language = defaultLanguage
) {
  return translations[language];
}