import path from "node:path";

import {
  getFiles,
  readTextFile
} from "../content-utils.js";

import {
  createAuditResult,
  addCheck
} from "./audit-result.js";

/**
 * Scan all markdown files.
 */
export function scanMarkdownFiles() {

  return getFiles(
    "src/content",
    [
      ".md",
      ".mdx"
    ]
  );

}

/**
 * Validate a markdown file.
 */
export function validateMarkdownFile(
  file
) {

  const content =
    readTextFile(file);

  const filename =
    path.basename(file);

  const result =
    createAuditResult(filename);

  addCheck(
    result,
    "title",
    content.includes("title:")
  );

  addCheck(
    result,
    "description",
    content.includes("description:")
  );

  addCheck(
    result,
    "publishDate",
    content.includes("publishDate:")
  );

  return result;

}