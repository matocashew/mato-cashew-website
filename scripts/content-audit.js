import {
  banner,
  success,
  info,
  error
} from "./lib/console-utils.js";

import {
  writeMarkdownReport
} from "./lib/report-utils.js";

import {
  scanMarkdownFiles,
  validateMarkdownFile
} from "./lib/audits/content-audit-utils.js";

import {
  buildAuditReport
} from "./lib/audits/report-builder.js";

banner();

info("Running content audit...");

try {

  const files =
    scanMarkdownFiles();

  const results = [];

  for (const file of files) {

    results.push(
      validateMarkdownFile(file)
    );

  }

  const report =
    buildAuditReport(results);

  const output =
    writeMarkdownReport(
      "content-report.md",
      "Content Audit",
      report
    );

  success(
    "Content audit completed."
  );

  info(output);

}
catch (err) {

  error(err.message);

  process.exit(1);

}