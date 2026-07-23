const RESET = "\x1b[0m";

const COLORS = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m"
};

function log(color, icon, message) {
  console.log(`${color}${icon} ${message}${RESET}`);
}

export function success(message) {
  log(COLORS.green, "✔", message);
}

export function error(message) {
  log(COLORS.red, "✖", message);
}

export function warning(message) {
  log(COLORS.yellow, "⚠", message);
}

export function info(message) {
  log(COLORS.blue, "ℹ", message);
}

export function title(message) {
  console.log("");
  console.log(`${COLORS.cyan}====================================`);
  console.log(message);
  console.log(`====================================${RESET}`);
  console.log("");
}

import { TOOLKIT } from "./package-info.js";

export function banner() {

  console.log("");

  console.log("====================================");

  console.log(TOOLKIT.name);

  console.log(`Version ${TOOLKIT.version}`);

  console.log("====================================");

  console.log("");

}