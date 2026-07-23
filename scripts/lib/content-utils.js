import fs from "node:fs";
import path from "node:path";

/**
 * Read directory recursively.
 */
export function getFiles(
  directory,
  extensions = []
) {

  const files = [];

  walk(directory);

  return files;

  function walk(currentDirectory) {

    const entries =
      fs.readdirSync(currentDirectory, {
        withFileTypes: true
      });

    for (const entry of entries) {

      const fullPath =
        path.join(
          currentDirectory,
          entry.name
        );

      if (entry.isDirectory()) {

        walk(fullPath);

        continue;

      }

      if (
        extensions.length === 0 ||
        extensions.includes(
          path.extname(entry.name)
        )
      ) {

        files.push(fullPath);

      }

    }

  }

}

/**
 * Read text file.
 */
export function readTextFile(
  file
) {

  return fs.readFileSync(
    file,
    "utf8"
  );

}

/**
 * Check file existence.
 */
export function exists(
  file
) {

  return fs.existsSync(file);

}