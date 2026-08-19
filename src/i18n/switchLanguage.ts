import { getLanguageFromPath } from "./getLanguageFromPath";
import { getLocalizedPath } from "./getLocalizedPath";
import type { Language } from "./config";

export function switchLanguage(
  pathname: string,
  language: Language
) {
  const current =
    getLanguageFromPath(pathname);

  let cleanPath = pathname;

  if (current === "km") {
    cleanPath =
      pathname.replace(/^\/km/, "") || "/";
  }

  /*
   * Knowledge Center V2 is bilingual.
   *
   * Generic routes such as:
   *
   * /knowledge/
   * /km/knowledge/
   *
   * can now use the normal localization system.
   *
   * Article-specific translation availability
   * is handled by language-route-context
   * on the article detail page.
   */
  return getLocalizedPath(
    language,
    cleanPath
  );
}