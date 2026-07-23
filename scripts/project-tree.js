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
  PROJECT_TREE
} from "./lib/path-utils.js";

import {
  generateProjectTree
} from "./lib/tree-utils.js";

banner();

ensureDirectory(PROJECT_INFO);

info("Generating project tree...");

try {

  await generateProjectTree();

  success("Project tree generated.");

  info(PROJECT_TREE);

}
catch (err) {

  error(err.message);

  process.exit(1);

}