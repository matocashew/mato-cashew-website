import {
  defaultLanguage,
  supportedLanguages,
  type Language,
} from "./config";

export function getLanguageFromPath(
  pathname: string
): Language {

  const segments =
    pathname.split("/").filter(Boolean);

  const first = segments[0];

  if (
    supportedLanguages.includes(
      first as Language
    )
  ) {
    return first as Language;
  }

  return defaultLanguage;
}