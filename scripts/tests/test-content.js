import {
  getFiles
} from "../lib/content-utils.js";

const files =
  getFiles(
    "src",
    [
      ".astro",
      ".ts"
    ]
  );

console.log(
  `Files: ${files.length}`
);