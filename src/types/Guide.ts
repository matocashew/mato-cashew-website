import type { BaseContent } from "./BaseContent";

export interface Guide extends BaseContent {
  difficulty: "beginner" | "intermediate" | "advanced";

  estimatedTime: number;
}