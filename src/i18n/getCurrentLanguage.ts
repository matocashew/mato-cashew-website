import { getLanguage } from "./getLanguage";
import {
  defaultLanguage,
  supportedLanguages,
} from "./config";

export function getCurrentLanguage(
  pathname: string
) {
  const segments =
    pathname.split("/").filter(Boolean);

  const lang = segments[0];

  if (
    supportedLanguages.includes(
      lang as (typeof supportedLanguages)[number]
    )
  ) {
    return getLanguage(lang as "en" | "km");
  }

  return getLanguage(defaultLanguage);
}