import type { BaseContent }
  from "./BaseContent";

export interface Knowledge
  extends BaseContent {

  /**
   * Stable key shared by every
   * language version of an article.
   */
  translationKey: string;

  /**
   * Stable internal category key.
   */
  category: string;

  readingTime: number;

  relatedProducts: string[];
}