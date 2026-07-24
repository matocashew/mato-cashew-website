/**
 * Base model for all publishable content.
 *
 * Every content type should extend this interface.
 */
export interface BaseContent {
  // ==========================
  // Identity
  // ==========================

  title: string;

  slug: string;

  // ==========================
  // Content
  // ==========================

  description: string;

  excerpt: string;

  // ==========================
  // Author
  // ==========================

  author: string;

  // ==========================
  // Media
  // ==========================

  heroImage: string;

  // ==========================
  // Classification
  // ==========================

  tags: string[];

  // ==========================
  // Publishing
  // ==========================

  featured: boolean;

  draft: boolean;

  publishedAt: Date;

  updatedAt?: Date;

  // ==========================
  // Localization
  // ==========================

  language: "en" | "km";

  // ==========================
  // SEO
  // ==========================

  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
  };
}