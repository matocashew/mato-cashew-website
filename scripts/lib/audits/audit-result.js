/**
 * Create a standard audit result.
 */
export function createAuditResult(file) {

  return {

    file,

    status: "pass",

    checks: []

  };

}

/**
 * Add a check result.
 */
export function addCheck(
  result,
  name,
  passed
) {

  result.checks.push({

    name,

    passed

  });

  if (!passed) {

    result.status = "fail";

  }

}