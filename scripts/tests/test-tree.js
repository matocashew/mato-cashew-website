import { runCommand }
  from "../lib/tree-utils.js";

const result =
  await runCommand("node --version");

console.log(result.stdout);