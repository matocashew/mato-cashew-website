import type { BaseContent } from "./BaseContent";

export interface Download extends BaseContent {
  file: string;

  format: string;

  version: string;

  fileSize: string;
}