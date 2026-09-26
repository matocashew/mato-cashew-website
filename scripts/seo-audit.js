import fs from "node:fs";
import path from "node:path";

import {
  success,
  warning,
  error,
  info
} from "./lib/console-utils.js";

import {
  writeMarkdownReport
} from "./lib/report-utils.js";

const DIST_DIR = "dist";

function getHtmlFiles(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = [];

  for (const entry of fs.readdirSync(directory, {
    withFileTypes: true
  })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...getHtmlFiles(fullPath));
      continue;
    }

    if (
      entry.isFile() &&
      entry.name.toLowerCase().endsWith(".html")
    ) {
      files.push(fullPath);
    }
  }

  return files.sort();
}

function decodeAttribute(value = "") {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function getAttribute(tag, name) {
  const expression = new RegExp(
    `${name}\\s*=\\s*["']([^"']*)["']`,
    "i"
  );

  const match = tag.match(expression);

  return match
    ? decodeAttribute(match[1].trim())
    : "";
}

function getTags(html, tagName) {
  const expression = new RegExp(
    `<${tagName}\\b[^>]*>`,
    "gi"
  );

  return html.match(expression) ?? [];
}

function getMetaContent(html, attribute, value) {
  const expected = value.toLowerCase();

  for (const tag of getTags(html, "meta")) {
    if (
      getAttribute(tag, attribute).toLowerCase() === expected
    ) {
      return getAttribute(tag, "content");
    }
  }

  return "";
}

function getLinkHref(html, rel, hreflang = null) {
  const expectedRel = rel.toLowerCase();

  for (const tag of getTags(html, "link")) {
    const relValues =
      getAttribute(tag, "rel")
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);

    if (!relValues.includes(expectedRel)) {
      continue;
    }

    if (
      hreflang !== null &&
      getAttribute(tag, "hreflang").toLowerCase() !==
        hreflang.toLowerCase()
    ) {
      continue;
    }

    return getAttribute(tag, "href");
  }

  return "";
}

function getTitle(html) {
  const match =
    html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);

  return match
    ? match[1].replace(/\s+/g, " ").trim()
    : "";
}

function getJsonLdBlocks(html) {
  const expression =
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

  const blocks = [];
  let match;

  while ((match = expression.exec(html)) !== null) {
    blocks.push(match[1].trim());
  }

  return blocks;
}

function pageName(file) {
  return file
    .replace(/\\/g, "/")
    .replace(/^dist\//, "");
}

function validAbsoluteUrl(value) {
  try {
    const url = new URL(value);

    return (
      url.protocol === "https:" ||
      url.protocol === "http:"
    );
  }
  catch {
    return false;
  }
}

if (!fs.existsSync(DIST_DIR)) {
  error(
    "dist directory is missing. Run the production build before SEO audit."
  );
  process.exit(1);
}

const htmlFiles = getHtmlFiles(DIST_DIR);

if (htmlFiles.length === 0) {
  error("No generated HTML files found in dist.");
  process.exit(1);
}

info(`Scanning ${htmlFiles.length} generated HTML page(s)...`);

const pages = [];
const failures = [];
const warnings = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const page = pageName(file);

  const title = getTitle(html);
  const description =
    getMetaContent(html, "name", "description");

  const robots =
    getMetaContent(html, "name", "robots");

  const canonical =
    getLinkHref(html, "canonical");

  const ogTitle =
    getMetaContent(html, "property", "og:title");

  const ogDescription =
    getMetaContent(
      html,
      "property",
      "og:description"
    );

  const ogUrl =
    getMetaContent(html, "property", "og:url");

  const ogImage =
    getMetaContent(html, "property", "og:image");

  const twitterCard =
    getMetaContent(html, "name", "twitter:card");

  const twitterTitle =
    getMetaContent(html, "name", "twitter:title");

  const twitterDescription =
    getMetaContent(
      html,
      "name",
      "twitter:description"
    );

  const twitterImage =
    getMetaContent(html, "name", "twitter:image");

  const hreflangEn =
    getLinkHref(html, "alternate", "en");

  const hreflangKm =
    getLinkHref(html, "alternate", "km");

  const hreflangDefault =
    getLinkHref(html, "alternate", "x-default");

  const jsonLdBlocks =
    getJsonLdBlocks(html);

  const pageFailures = [];
  const pageWarnings = [];

  if (!title) {
    pageFailures.push("missing title");
  }

  if (!description) {
    pageFailures.push("missing meta description");
  }

  if (!canonical) {
    pageFailures.push("missing canonical");
  }
  else if (!validAbsoluteUrl(canonical)) {
    pageFailures.push("canonical is not absolute");
  }

  if (!robots) {
    pageFailures.push("missing robots meta");
  }

  if (!ogTitle) {
    pageFailures.push("missing og:title");
  }

  if (!ogDescription) {
    pageFailures.push("missing og:description");
  }

  if (!ogUrl) {
    pageFailures.push("missing og:url");
  }

  if (!ogImage) {
    pageFailures.push("missing og:image");
  }

  if (!twitterCard) {
    pageFailures.push("missing twitter:card");
  }

  if (!twitterTitle) {
    pageFailures.push("missing twitter:title");
  }

  if (!twitterDescription) {
    pageFailures.push("missing twitter:description");
  }

  if (!twitterImage) {
    pageFailures.push("missing twitter:image");
  }

  if (jsonLdBlocks.length === 0) {
    pageFailures.push("missing JSON-LD");
  }

  jsonLdBlocks.forEach((block, index) => {
    try {
      JSON.parse(block);
    }
    catch {
      pageFailures.push(
        `invalid JSON-LD block ${index + 1}`
      );
    }
  });

  if (
    canonical &&
    ogUrl &&
    canonical !== ogUrl
  ) {
    pageFailures.push(
      "canonical and og:url do not match"
    );
  }

  if (
    title &&
    ogTitle &&
    title !== ogTitle
  ) {
    pageWarnings.push(
      "title and og:title differ"
    );
  }

  if (
    description &&
    ogDescription &&
    description !== ogDescription
  ) {
    pageWarnings.push(
      "description and og:description differ"
    );
  }

  if (
    !hreflangEn ||
    !hreflangDefault
  ) {
    pageWarnings.push(
      "incomplete base hreflang coverage"
    );
  }

  if (!hreflangKm) {
    pageWarnings.push(
      "Khmer hreflang not present"
    );
  }

  for (const item of pageFailures) {
    failures.push(`${page}: ${item}`);
  }

  for (const item of pageWarnings) {
    warnings.push(`${page}: ${item}`);
  }

  pages.push({
    page,
    title,
    description,
    canonical,
    robots,
    jsonLd: jsonLdBlocks.length,
    hreflangEn: Boolean(hreflangEn),
    hreflangKm: Boolean(hreflangKm),
    hreflangDefault: Boolean(hreflangDefault)
  });
}

const canonicalMap = new Map();
const titleMap = new Map();

for (const page of pages) {
  if (page.canonical) {
    const entries =
      canonicalMap.get(page.canonical) ?? [];

    entries.push(page.page);
    canonicalMap.set(page.canonical, entries);
  }

  if (page.title) {
    const entries =
      titleMap.get(page.title) ?? [];

    entries.push(page.page);
    titleMap.set(page.title, entries);
  }
}

for (const [canonical, pageList] of canonicalMap) {
  if (pageList.length > 1) {
    failures.push(
      `duplicate canonical ${canonical}: ${pageList.join(", ")}`
    );
  }
}

for (const [title, pageList] of titleMap) {
  if (pageList.length > 1) {
    warnings.push(
      `duplicate title "${title}": ${pageList.join(", ")}`
    );
  }
}

const sections = [
  "## Summary",
  "",
  `- Pages scanned: ${pages.length}`,
  `- Failures: ${failures.length}`,
  `- Warnings: ${warnings.length}`,
  "",
  "## Page Coverage",
  "",
  ...pages.map(page =>
    `- ${page.page}: title=${page.title ? "yes" : "no"}, description=${page.description ? "yes" : "no"}, canonical=${page.canonical ? "yes" : "no"}, robots=${page.robots ? "yes" : "no"}, JSON-LD=${page.jsonLd}, hreflang(en/km/x-default)=${page.hreflangEn ? "yes" : "no"}/${page.hreflangKm ? "yes" : "no"}/${page.hreflangDefault ? "yes" : "no"}`
  ),
  "",
  "## Failures",
  "",
  failures.length > 0
    ? failures.map(item => `- ${item}`).join("\n")
    : "- None",
  "",
  "## Warnings",
  "",
  warnings.length > 0
    ? warnings.map(item => `- ${item}`).join("\n")
    : "- None"
];

const reportPath =
  writeMarkdownReport(
    "seo-report.md",
    "Mato Cashew SEO Audit",
    sections
  );

info(`Report: ${reportPath}`);

if (failures.length > 0) {
  error(
    `SEO audit failed with ${failures.length} issue(s).`
  );

  process.exit(1);
}

if (warnings.length > 0) {
  warning(
    `SEO audit passed with ${warnings.length} warning(s).`
  );
}
else {
  success("SEO audit passed.");
}
