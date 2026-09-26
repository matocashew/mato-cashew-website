import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

import {
  success,
  warning,
  error,
  info
} from "./lib/console-utils.js";

import {
  writeMarkdownReport
} from "./lib/report-utils.js";

const IMAGE_DIR = "public/images";
const DIST_DIR = "dist";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
  ".svg"
]);

const RASTER_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif"
]);

const LARGE_IMAGE_BYTES = 500 * 1024;

function walk(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = [];

  for (const entry of fs.readdirSync(directory, {
    withFileTypes: true
  })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files.sort();
}

function normalize(file) {
  return file.replace(/\\/g, "/");
}

function formatKb(bytes) {
  return (bytes / 1024).toFixed(1);
}

function sha256(file) {
  return crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
}

function getImgTags(html) {
  return html.match(/<img\b[^>]*>/gi) ?? [];
}

function hasAttribute(tag, name) {
  return new RegExp(
    `\\b${name}\\s*=`,
    "i"
  ).test(tag);
}

function getAttribute(tag, name) {
  const match = tag.match(
    new RegExp(
      `\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`,
      "i"
    )
  );

  return match
    ? (match[1] ?? match[2] ?? "")
    : null;
}

if (!fs.existsSync(IMAGE_DIR)) {
  error(`Missing image directory: ${IMAGE_DIR}`);
  process.exit(1);
}

const imageFiles = walk(IMAGE_DIR).filter(file =>
  IMAGE_EXTENSIONS.has(
    path.extname(file).toLowerCase()
  )
);

info(`Scanning ${imageFiles.length} image file(s)...`);

const failures = [];
const warnings = [];
const largeImages = [];
const imageDetails = [];
const hashes = new Map();

for (const file of imageFiles) {
  const relative = normalize(file);
  const extension =
    path.extname(file).toLowerCase();

  const stat = fs.statSync(file);

  const detail = {
    file: relative,
    extension,
    bytes: stat.size,
    width: null,
    height: null
  };

  if (stat.size >= LARGE_IMAGE_BYTES) {
    largeImages.push({
      file: relative,
      bytes: stat.size
    });
  }

  try {
    const hash = sha256(file);
    const entries = hashes.get(hash) ?? [];

    entries.push(relative);
    hashes.set(hash, entries);
  }
  catch (cause) {
    failures.push(
      `${relative}: unable to calculate file hash`
    );
  }

  if (RASTER_EXTENSIONS.has(extension)) {
    try {
      const metadata =
        await sharp(file).metadata();

      detail.width = metadata.width ?? null;
      detail.height = metadata.height ?? null;

      if (!metadata.width || !metadata.height) {
        warnings.push(
          `${relative}: raster dimensions unavailable`
        );
      }
    }
    catch (cause) {
      failures.push(
        `${relative}: unreadable or unsupported raster image`
      );
    }
  }

  imageDetails.push(detail);
}

const duplicateGroups = [];

for (const [hash, files] of hashes) {
  if (files.length > 1) {
    duplicateGroups.push({
      hash,
      files
    });
  }
}

if (largeImages.length > 0) {
  warnings.push(
    `${largeImages.length} image(s) are 500 KB or larger`
  );
}

if (duplicateGroups.length > 0) {
  warnings.push(
    `${duplicateGroups.length} exact duplicate image group(s) found`
  );
}

let htmlPageCount = 0;
let imgTagCount = 0;
let missingAlt = 0;
let emptyAlt = 0;
let missingLoading = 0;
let missingWidth = 0;
let missingHeight = 0;

if (!fs.existsSync(DIST_DIR)) {
  warnings.push(
    "dist directory is missing; generated HTML image checks were skipped"
  );
}
else {
  const htmlFiles = walk(DIST_DIR).filter(file =>
    file.toLowerCase().endsWith(".html")
  );

  htmlPageCount = htmlFiles.length;

  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");

    for (const tag of getImgTags(html)) {
      imgTagCount++;

      if (!hasAttribute(tag, "alt")) {
        missingAlt++;

        failures.push(
          `${normalize(file)}: generated <img> missing alt attribute`
        );
      }
      else {
        const alt = getAttribute(tag, "alt");

        if (alt !== null && alt.trim() === "") {
          emptyAlt++;
        }
      }

      if (!hasAttribute(tag, "loading")) {
        missingLoading++;
      }

      if (!hasAttribute(tag, "width")) {
        missingWidth++;
      }

      if (!hasAttribute(tag, "height")) {
        missingHeight++;
      }
    }
  }
}

if (emptyAlt > 0) {
  warnings.push(
    `${emptyAlt} generated <img> tag(s) use empty alt text; review decorative intent`
  );
}

if (missingLoading > 0) {
  warnings.push(
    `${missingLoading} generated <img> tag(s) do not declare loading`
  );
}

if (missingWidth > 0 || missingHeight > 0) {
  warnings.push(
    `${missingWidth} generated <img> tag(s) lack width and ${missingHeight} lack height`
  );
}

const sections = [
  "## Summary",
  "",
  `- Image files scanned: ${imageFiles.length}`,
  `- Generated HTML pages scanned: ${htmlPageCount}`,
  `- Generated img tags scanned: ${imgTagCount}`,
  `- Failures: ${failures.length}`,
  `- Warnings: ${warnings.length}`,
  "",
  "## Generated HTML",
  "",
  `- Missing alt: ${missingAlt}`,
  `- Empty alt: ${emptyAlt}`,
  `- Missing loading: ${missingLoading}`,
  `- Missing width: ${missingWidth}`,
  `- Missing height: ${missingHeight}`,
  "",
  "## Large Images",
  "",
  largeImages.length > 0
    ? largeImages
        .sort((a, b) => b.bytes - a.bytes)
        .map(item =>
          `- ${item.file}: ${formatKb(item.bytes)} KB`
        )
        .join("\n")
    : "- None",
  "",
  "## Exact Duplicate Files",
  "",
  duplicateGroups.length > 0
    ? duplicateGroups
        .map(group =>
          [
            `- SHA-256: ${group.hash}`,
            ...group.files.map(file => `  - ${file}`)
          ].join("\n")
        )
        .join("\n")
    : "- None",
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
    "image-report.md",
    "Mato Cashew Image Audit",
    sections
  );

info(`Report: ${reportPath}`);

if (failures.length > 0) {
  error(
    `Image audit failed with ${failures.length} issue(s).`
  );

  process.exit(1);
}

if (warnings.length > 0) {
  warning(
    `Image audit passed with ${warnings.length} warning category(s).`
  );
}
else {
  success("Image audit passed.");
}
