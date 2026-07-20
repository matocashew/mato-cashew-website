import { getLanguageFromPath } from "./getLanguageFromPath";
import { getLocalizedPath } from "./getLocalizedPath";
import type { Language } from "./config";

export function switchLanguage(
  pathname: string,
  language: Language
) {
  const current = getLanguageFromPath(pathname);

  let cleanPath = pathname;

  if (current === "km") {
    cleanPath = pathname.replace(/^\/km/, "") || "/";
  }

  return getLocalizedPath(
    language,
    cleanPath
  );
}