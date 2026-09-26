import fs from "node:fs";
import { spawnSync } from "node:child_process";

import {
  banner,
  success,
  warning,
  error,
  info
} from "./lib/console-utils.js";

import {
  AUDIT_REPORT
} from "./lib/path-utils.js";

import {
  writeMarkdownReport
} from "./lib/report-utils.js";

banner();

const checks = [
  {
    name: "Astro Check",
    script: "node_modules/astro/bin/astro.mjs",
    args: ["check"],
    implemented: true
  },
  {
    name: "Production Build",
    script: "node_modules/astro/bin/astro.mjs",
    args: ["build"],
    implemented: true
  },
  {
    name: "Content Audit",
    script: "scripts/content-audit.js",
    args: [],
    implemented: true
  },
  {
    name: "SEO Audit",
    script: "scripts/seo-audit.js",
    args: [],
    implemented: true
  },
  {
    name: "Image Audit",
    script: "scripts/image-audit.js",
    args: [],
    implemented: true
  },
  {
    name: "Unused Files Audit",
    implemented: false
  }
];

const results = [];

function runCheck(check) {
  if (!check.implemented) {
    warning(`${check.name}: not implemented`);

    return {
      name: check.name,
      status: "not implemented"
    };
  }

  if (!fs.existsSync(check.script)) {
    error(`${check.name}: script not found: ${check.script}`);

    return {
      name: check.name,
      status: "fail"
    };
  }

  info(`Running ${check.name}...`);

  const result = spawnSync(
    process.execPath,
    [
      check.script,
      ...check.args
    ],
    {
      stdio: "inherit"
    }
  );

  if (result.error) {
    error(`${check.name}: ${result.error.message}`);

    return {
      name: check.name,
      status: "fail"
    };
  }

  if (result.status === 0) {
    success(`${check.name}: passed`);

    return {
      name: check.name,
      status: "pass"
    };
  }

  error(`${check.name}: failed`);

  return {
    name: check.name,
    status: "fail"
  };
}

for (const check of checks) {
  results.push(runCheck(check));
}

const passed =
  results.filter(result => result.status === "pass");

const failed =
  results.filter(result => result.status === "fail");

const pending =
  results.filter(
    result => result.status === "not implemented"
  );

const sections = [
  "## Summary",
  "",
  `- Passed: ${passed.length}`,
  `- Failed: ${failed.length}`,
  `- Not implemented: ${pending.length}`,
  "",
  "## Results",
  "",
  ...results.map(result =>
    `- ${result.name}: ${result.status.toUpperCase()}`
  )
];

const reportPath =
  writeMarkdownReport(
    "audit-report.md",
    "Mato Cashew Project Audit",
    sections
  );

info(`Report: ${reportPath}`);

if (!fs.existsSync(AUDIT_REPORT)) {
  error("Audit report was not created.");
  process.exit(1);
}

if (failed.length > 0) {
  error(
    `Complete audit finished with ${failed.length} failure(s).`
  );

  process.exit(1);
}

if (pending.length > 0) {
  warning(
    `Complete audit passed implemented checks; ${pending.length} audit(s) are not implemented yet.`
  );
}
else {
  success("Complete audit passed.");
}
