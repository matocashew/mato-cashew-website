import {
  createAuditResult,
  addCheck
} from "../lib/audits/audit-result.js";

const result =
  createAuditResult("example.md");

addCheck(result, "title", true);
addCheck(result, "description", false);

console.log(result);