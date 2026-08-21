import { navigation } from "@data/navigation";

import type {
  MenuItem,
  NavigationLanguage,
} from "@models/navigation";


/**
 * Navigation item prepared for rendering.
 *
 * The original navigation configuration remains
 * untouched. Components receive this localized
 * presentation model instead.
 */
export interface ResolvedMenuItem
  extends Omit<MenuItem, "children"> {

  label: string;

  href: string;

  description?: string;

  children?: ResolvedMenuItem[];
}


/* =========================================================
   HELPERS
   ========================================================= */

/**
 * Ensure route comparisons behave consistently
 * regardless of trailing slash.
 */
function normalizePath(
  pathname: string
): string {

  if (!pathname) {
    return "/";
  }

  const clean =
    pathname.split("?")[0]
      .split("#")[0];

  if (clean === "/") {
    return "/";
  }

  return clean.replace(/\/+$/, "");
}


/**
 * Convert a canonical English route into
 * its Khmer equivalent when hrefKm has not
 * been explicitly configured.
 */
function deriveKhmerHref(
  href: string
): string {

  if (!href.startsWith("/")) {
    return href;
  }

  if (
    href === "/km" ||
    href.startsWith("/km/")
  ) {
    return href;
  }

  if (href === "/") {
    return "/km/";
  }

  return `/km${href}`;
}


/**
 * Resolve the correct URL for the language.
 */
function getLocalizedHref(
  item: MenuItem,
  language: NavigationLanguage
): string {

  if (item.external) {
    return item.href;
  }

  if (language === "km") {
    return (
      item.hrefKm ??
      deriveKhmerHref(item.href)
    );
  }

  return item.href;
}


/**
 * Resolve navigation label.
 *
 * labelKey currently follows the form:
 * "nav.products"
 *
 * The data model may also provide a direct label.
 * This helper intentionally avoids importing the
 * full translation dictionaries into navigation data.
 */
function getLocalizedLabel(
  item: MenuItem,
  language: NavigationLanguage,
  translations?: Record<string, string>
): string {

  if (
    item.labelKey &&
    translations
  ) {
    const key =
      item.labelKey.replace(
        /^nav\./,
        ""
      );

    const translated =
      translations[key];

    if (translated) {
      return translated;
    }
  }

  if (
    language === "km" &&
    item.labelKm
  ) {
    return item.labelKm;
  }

  return item.label ?? item.id;
}


/**
 * Resolve optional editorial description.
 */
function getLocalizedDescription(
  item: MenuItem,
  language: NavigationLanguage
): string | undefined {

  if (
    language === "km" &&
    item.descriptionKm
  ) {
    return item.descriptionKm;
  }

  return item.description;
}


/**
 * Sort and remove hidden navigation items.
 */
function prepareItems(
  items: MenuItem[]
): MenuItem[] {

  return items
    .filter(
      item =>
        item.visible !== false
    )
    .slice()
    .sort(
      (a, b) =>
        (a.order ?? 0) -
        (b.order ?? 0)
    );
}


/**
 * Recursively resolve a navigation branch.
 */
function resolveItem(
  item: MenuItem,
  language: NavigationLanguage,
  translations?: Record<string, string>
): ResolvedMenuItem {

  const children =
    item.children?.length
      ? prepareItems(item.children)
          .map(child =>
            resolveItem(
              child,
              language,
              translations
            )
          )
      : undefined;

  return {
    ...item,

    label:
      getLocalizedLabel(
        item,
        language,
        translations
      ),

    href:
      getLocalizedHref(
        item,
        language
      ),

    description:
      getLocalizedDescription(
        item,
        language
      ),

    children,
  };
}


/* =========================================================
   NAVIGATION SERVICE
   ========================================================= */

export const navigationService = {

  /**
   * Return raw visible header configuration.
   *
   * Kept for backwards compatibility.
   */
  getHeaderMenu(): MenuItem[] {

    return prepareItems(
      navigation
    );
  },


  /**
   * Footer currently follows the same
   * top-level navigation configuration.
   */
  getFooterMenu(): MenuItem[] {

    return this.getHeaderMenu();
  },


  /**
   * Find a top-level menu item.
   */
  getMenuById(
    id: string
  ): MenuItem | undefined {

    return navigation.find(
      item => item.id === id
    );
  },


  /**
   * Public localized href resolver.
   */
  getLocalizedHref(
    item: MenuItem,
    language: NavigationLanguage
  ): string {

    return getLocalizedHref(
      item,
      language
    );
  },


  /**
   * Public localized label resolver.
   */
  getLocalizedLabel(
    item: MenuItem,
    language: NavigationLanguage,
    translations?: Record<string, string>
  ): string {

    return getLocalizedLabel(
      item,
      language,
      translations
    );
  },


  /**
   * Public localized description resolver.
   */
  getLocalizedDescription(
    item: MenuItem,
    language: NavigationLanguage
  ): string | undefined {

    return getLocalizedDescription(
      item,
      language
    );
  },


  /**
   * Produce the complete localized menu tree
   * ready for Header / mobile / mega-menu use.
   */
  getLocalizedMenu(
    language: NavigationLanguage,
    translations?: Record<string, string>
  ): ResolvedMenuItem[] {

    return prepareItems(
      navigation
    ).map(item =>
      resolveItem(
        item,
        language,
        translations
      )
    );
  },


  /**
   * Determine whether an exact destination
   * is currently active.
   */
  isActive(
    item: Pick<ResolvedMenuItem, "href">,
    pathname: string
  ): boolean {

    return (
      normalizePath(item.href) ===
      normalizePath(pathname)
    );
  },


  /**
   * Determine whether the current page belongs
   * to a navigation section.
   *
   * Example:
   *
   * /km/knowledge/article
   * activates /km/knowledge
   */
  isSectionActive(
    item: Pick<ResolvedMenuItem, "href">,
    pathname: string
  ): boolean {

    const target =
      normalizePath(item.href);

    const current =
      normalizePath(pathname);

    if (target === "/") {
      return current === "/";
    }

    if (target === "/km") {
      return current === "/km";
    }

    return (
      current === target ||
      current.startsWith(
        `${target}/`
      )
    );
  },


  /**
   * Determine whether a menu item itself or
   * any nested child is active.
   */
  isParentActive(
    item: ResolvedMenuItem,
    pathname: string
  ): boolean {

    if (
      this.isSectionActive(
        item,
        pathname
      )
    ) {
      return true;
    }

    return (
      item.children?.some(
        child =>
          this.isParentActive(
            child,
            pathname
          )
      ) ?? false
    );
  },
};


export default navigationService;
