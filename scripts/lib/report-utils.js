import fs from "node:fs";
import path from "node:path";

import { ensureDirectory } from "./file-utils.js";

import { PROJECT_INFO } from "./path-utils.js";

import {
  heading,
  divider,
  document
} from "./markdown-utils.js";

ensureDirectory(PROJECT_INFO);

/**
 * Write a markdown report.
 */
export function writeMarkdownReport(
  filename,
  title,
  sections = []
) {

  const filePath = path.join(
    PROJECT_INFO,
    filename
  );

  const now = new Date();

  const content = document(

    heading(title),

    `Generated: ${now.toISOString()}`,

    divider(),

    ...sections

  );

  fs.writeFileSync(
    filePath,
    content,
    "utf8"
  );

  return filePath;

}