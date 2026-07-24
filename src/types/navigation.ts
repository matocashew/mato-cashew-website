/**
 * Represents a menu item displayed in
 * header, footer, mobile navigation,
 * breadcrumbs and sitemap.
 */
export interface MenuItem {
  /**
   * Unique identifier.
   */
  id: string;

  /**
   * Display label.
   */
  label: string;

  /**
   * URL path.
   */
  href: string;

  /**
   * Short description.
   * Used in mega menu and search.
   */
  description?: string;

  /**
   * Optional icon name.
   */
  icon?: string;

  /**
   * Highlight important items.
   */
  featured?: boolean;

  /**
   * External link.
   */
  external?: boolean;

  /**
   * Hide or show menu.
   */
  visible?: boolean;

  /**
   * Display order.
   */
  order?: number;

  /**
   * Child menu items.
   */
  children?: MenuItem[];
}