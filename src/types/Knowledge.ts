import type { BaseContent } from "./BaseContent";

export interface Knowledge extends BaseContent {
  category: string;

  readingTime: number;

  relatedProducts: string[];
}