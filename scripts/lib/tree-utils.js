import { exec } from "node:child_process";

import {
  PROJECT_TREE,
  PROJECT_MAP
} from "./path-utils.js";

/**
 * Execute a shell command.
 */
export function runCommand(command) {

  return new Promise((resolve, reject) => {

    exec(command, (error, stdout, stderr) => {

      if (error) {
        reject(error);
        return;
      }

      resolve({
        stdout,
        stderr
      });

    });

  });

}

/**
 * Generate project tree.
 */
export async function generateProjectTree() {

  const command =
    process.platform === "win32"
      ? `tree src /F > "${PROJECT_TREE}"`
      : `find src > "${PROJECT_TREE}"`;

  await runCommand(command);

}

/**
 * Generate project map.
 */
export async function generateProjectMap() {

  const command =
    process.platform === "win32"
      ? `dir src /S /B > "${PROJECT_MAP}"`
      : `find src -type f > "${PROJECT_MAP}"`;

  await runCommand(command);

}