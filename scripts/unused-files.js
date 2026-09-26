import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const REPORT = path.join(ROOT, "project-info", "unused-files.md");

const TEXT_EXTENSIONS = new Set([
  ".astro",
  ".ts",
  ".js",
  ".css",
  ".md",
  ".mdx",
  ".json"
]);

const MODULE_EXTENSIONS = new Set([
  ".ts",
  ".js"
]);

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function relative(file) {
  return toPosix(path.relative(ROOT, file));
}

function walk(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const results = [];

  for (const entry of fs.readdirSync(directory, {
    withFileTypes: true
  })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      results.push(...walk(fullPath));
      continue;
    }

    if (entry.isFile()) {
      results.push(fullPath);
    }
  }

  return results;
}

function readText(file) {
  try {
    return fs.readFileSync(file, "utf8");
  }
  catch {
    return "";
  }
}

function countExternalTextReferences(target, corpus) {
  const basename = path.basename(
    target,
    path.extname(target)
  );

  let count = 0;

  for (const item of corpus) {
    if (item.file === target) {
      continue;
    }

    if (item.text.includes(basename)) {
      count += 1;
    }
  }

  return count;
}

function countCssFilenameReferences(target, corpus) {
  const filename = path.basename(target);

  let count = 0;

  for (const item of corpus) {
    if (item.file === target) {
      continue;
    }

    if (item.text.includes(filename)) {
      count += 1;
    }
  }

  return count;
}

function markdownList(items) {
  if (items.length === 0) {
    return ["- None"];
  }

  return items.map(
    (item) => `- \`${item}\``
  );
}

const allSourceFiles = walk(SRC);

const textFiles = allSourceFiles.filter(
  (file) =>
    TEXT_EXTENSIONS.has(
      path.extname(file).toLowerCase()
    )
);

const corpus = textFiles.map(
  (file) => ({
    file,
    text: readText(file)
  })
);

const components = allSourceFiles.filter(
  (file) =>
    file.includes(
      `${path.sep}components${path.sep}`
    ) &&
    path.extname(file).toLowerCase() === ".astro"
);

const cssFiles = allSourceFiles.filter(
  (file) =>
    file.includes(
      `${path.sep}styles${path.sep}`
    ) &&
    path.extname(file).toLowerCase() === ".css"
);

const modules = allSourceFiles.filter(
  (file) =>
    MODULE_EXTENSIONS.has(
      path.extname(file).toLowerCase()
    )
);

const componentCandidates = components
  .filter(
    (file) =>
      countExternalTextReferences(file, corpus) === 0
  )
  .map(relative)
  .sort();

const cssCandidates = cssFiles
  .filter(
    (file) =>
      countCssFilenameReferences(file, corpus) === 0
  )
  .map(relative)
  .sort();

const moduleCandidates = modules
  .filter((file) => {
    const basename = path.basename(
      file,
      path.extname(file)
    );

    if (
      basename === "index" ||
      basename === "env" ||
      basename === "content.config"
    ) {
      return false;
    }

    return (
      countExternalTextReferences(
        file,
        corpus
      ) === 0
    );
  })
  .map(relative)
  .sort();

const dynamicPatterns = [
  "import.meta.glob",
  "Astro.glob",
  "getCollection",
  "getEntry",
  "getEntries",
  "glob(",
  "readdir",
  "readdirSync",
  "readFile",
  "readFileSync",
  "import("
];

const dynamicEvidence = [];

for (const pattern of dynamicPatterns) {
  const matches = corpus
    .filter(
      (item) => item.text.includes(pattern)
    )
    .map(
      (item) => relative(item.file)
    );

  if (matches.length > 0) {
    dynamicEvidence.push({
      pattern,
      files: [...new Set(matches)].sort()
    });
  }
}

const candidateCount =
  componentCandidates.length +
  cssCandidates.length +
  moduleCandidates.length;

const lines = [
  "# Unused Files Audit",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  "## Summary",
  "",
  `- Source text files scanned: ${textFiles.length}`,
  `- Astro components scanned: ${components.length}`,
  `- TypeScript/JavaScript modules scanned: ${modules.length}`,
  `- CSS files scanned: ${cssFiles.length}`,
  `- Review candidates: ${candidateCount}`,
  "",
  "## Important",
  "",
  "This audit is conservative and report-only.",
  "",
  "A candidate means that no simple external textual reference was found.",
  "It does not prove that the file is safe to delete.",
  "",
  "Dynamic imports, Astro content collections, MDX usage, framework conventions,",
  "runtime references, configuration, or indirect imports may still use a candidate.",
  "",
  "No file is deleted or modified by this audit.",
  "",
  "## Astro Component Review Candidates",
  "",
  ...markdownList(componentCandidates),
  "",
  "## TypeScript / JavaScript Review Candidates",
  "",
  ...markdownList(moduleCandidates),
  "",
  "## CSS Review Candidates",
  "",
  ...markdownList(cssCandidates),
  "",
  "## Dynamic Reference Evidence",
  ""
];

if (dynamicEvidence.length === 0) {
  lines.push("- None detected");
}
else {
  for (const item of dynamicEvidence) {
    lines.push(
      `### \`${item.pattern}\``,
      ""
    );

    for (const file of item.files) {
      lines.push(`- \`${file}\``);
    }

    lines.push("");
  }
}

lines.push(
  "## Result",
  "",
  candidateCount === 0
    ? "No simple zero-reference candidates were detected."
    : `${candidateCount} review candidate(s) detected.`,
  "",
  "Candidates require manual verification before any cleanup.",
  ""
);

fs.mkdirSync(
  path.dirname(REPORT),
  { recursive: true }
);

fs.writeFileSync(
  REPORT,
  `${lines.join("\n")}\n`,
  "utf8"
);

console.log(
  `ℹ Scanned ${textFiles.length} source text file(s)...`
);

console.log(
  `ℹ Report: ${relative(REPORT)}`
);

if (candidateCount === 0) {
  console.log(
    "✔ Unused files audit completed with no simple zero-reference candidates."
  );
}
else {
  console.log(
    `⚠ Unused files audit completed with ${candidateCount} review candidate(s).`
  );
}

process.exit(0);
