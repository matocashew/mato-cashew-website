import { writeMarkdownReport }
  from "../lib/report-utils.js";

writeMarkdownReport(

  "test-report.md",

  "Developer Toolkit Test",

  [

    "✔ Report Writer",

    "✔ Markdown Output",

    "✔ UTF-8 Encoding"

  ]

);

console.log("Test report generated.");