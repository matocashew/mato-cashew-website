/**
 * Build markdown report lines from audit results.
 */
export function buildAuditReport(results = []) {

  const report = [];

  for (const result of results) {

    if (result.status === "pass") {

      report.push(
        `✔ ${result.file}`
      );

      continue;

    }

    report.push(
      `✖ ${result.file}`
    );

    result.checks
      .filter(
        check => !check.passed
      )
      .forEach(check => {

        report.push(
          `  - Missing ${check.name}`
        );

      });

    report.push("");

  }

  return report;

}