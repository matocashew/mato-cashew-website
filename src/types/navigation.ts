/**
 * Supported website languages.
 */
export type NavigationLanguage =
  | "en"
  | "km";


/**
 * Navigation presentation style.
 *
 * "link"
 *   Standard navigation item.
 *
 * "dropdown"
 *   Compact submenu.
 *
 * "mega"
 *   Large editorial mega menu.
 */
export type NavigationVariant =
  | "link"
  | "dropdown"
  | "mega";


/**
 * Represents a navigation item used by
 * header, footer, mobile navigation,
 * breadcrumbs and sitemap.
 */
export interface MenuItem {

  /**
   * Stable unique identifier.
   */
  id: string;


  /**
   * Translation key.
   *
   * Example:
   * "nav.knowledge"
   */
  labelKey?: string;


  /**
   * Optional direct display label.
   *
   * Kept for backwards compatibility.
   */
  label?: string;

  /**
 * Optional Khmer display label.
 *
 * Used for navigation entries that do not
 * yet use a shared i18n labelKey.
 */
  labelKm?: string;


  /**
   * Canonical English URL.
   */
  href: string;


  /**
   * Optional Khmer URL.
   *
   * When omitted, the navigation service
   * may derive the localized route.
   */
  hrefKm?: string;


  /**
   * Short English description used in
   * mega menus and navigation search.
   */
  description?: string;


  /**
   * Optional Khmer description.
   */
  descriptionKm?: string;


  /**
   * Optional icon identifier.
   */
  icon?: string;


  /**
   * Navigation presentation style.
   */
  variant?: NavigationVariant;


  /**
   * Optional grouping identifier used
   * inside mega menus.
   *
   * Example:
   * "discover"
   * "farming"
   * "quality"
   * "trade"
   */
  group?: string;


  /**
   * Highlight important destinations.
   */
  featured?: boolean;


  /**
   * External destination.
   */
  external?: boolean;


  /**
   * Hide or show the item.
   */
  visible?: boolean;


  /**
   * Display order.
   */
  order?: number;


  /**
   * Nested navigation items.
   */
  children?: MenuItem[];
}
