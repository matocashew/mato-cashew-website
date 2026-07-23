import {
  banner,
  success,
  error,
  info
} from "./lib/console-utils.js";

import {
  ensureDirectory
} from "./lib/file-utils.js";

import {
  PROJECT_INFO,
  PROJECT_MAP
} from "./lib/path-utils.js";

import {
  generateProjectMap
} from "./lib/tree-utils.js";

banner();

ensureDirectory(PROJECT_INFO);

info("Generating project map...");

try {

  await generateProjectMap();

  success("Project map generated.");

  info(PROJECT_MAP);

}
catch (err) {

  error(err.message);

  process.exit(1);

}