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

  // Knowledge Center is currently English-only.
  // Keep users on the English Knowledge route
  // until Khmer Knowledge routes are available.
  if (
    cleanPath === "/knowledge" ||
    cleanPath === "/knowledge/" ||
    cleanPath.startsWith("/knowledge/")
  ) {
    return cleanPath;
  }

  return getLocalizedPath(
    language,
    cleanPath
  );
}