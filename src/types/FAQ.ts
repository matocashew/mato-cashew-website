import type { BaseContent } from "./BaseContent";

export interface FAQ extends BaseContent {
  question: string;

  answer: string;

  category: string;
}