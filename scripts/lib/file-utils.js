import fs from "node:fs";

export function ensureDirectory(path) {

  if (!fs.existsSync(path)) {

    fs.mkdirSync(path, {
      recursive: true
    });

  }

}

export function fileExists(path) {

  return fs.existsSync(path);

}