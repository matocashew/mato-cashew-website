/**
 * Create a level 1 heading.
 */
export function heading(text) {

  return `# ${text}`;

}

/**
 * Create a level 2 heading.
 */
export function subHeading(text) {

  return `## ${text}`;

}

/**
 * Create a horizontal rule.
 */
export function divider() {

  return "---";

}

/**
 * Create a bullet list.
 */
export function bullet(items = []) {

  return items
    .map(item => `- ${item}`)
    .join("\n");

}

/**
 * Create a checklist.
 */
export function checklist(items = []) {

  return items
    .map(item => `${item.checked ? "✔" : "✖"} ${item.text}`)
    .join("\n");

}

/**
 * Create a paragraph.
 */
export function paragraph(text = "") {

  return text;

}

/**
 * Join markdown blocks.
 */
export function document(...blocks) {

  return blocks
    .filter(Boolean)
    .join("\n\n");

}