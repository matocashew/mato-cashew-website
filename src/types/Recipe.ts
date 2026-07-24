import type { BaseContent } from "./BaseContent";

export interface Recipe extends BaseContent {
  ingredients: string[];

  preparationTime: number;

  cookingTime: number;

  servings: number;
}