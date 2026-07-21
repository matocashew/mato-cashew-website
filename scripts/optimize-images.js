import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const IMAGE_DIR = "public/images";

const SKIP_FOLDERS = [
  "logo",
  "flags",
  "icons",
  "favicon"
];

async function walk(dir) {
  let files = [];

  const entries = await fs.readdir(dir, {
    withFileTypes: true
  });

  for (const entry of entries) {

    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {

      files.push(...await walk(full));

    } else {

      files.push(full);

    }

  }

  return files;
}

const files = await walk(IMAGE_DIR);

const images = files.filter(file => {

  const ext = path.extname(file).toLowerCase();

  if (![".png", ".jpg", ".jpeg"].includes(ext))
    return false;

  return !SKIP_FOLDERS.some(folder =>
    file.includes(`${path.sep}${folder}${path.sep}`)
  );

});

let before = 0;
let after = 0;
let processed = 0;

console.log("");
console.log("Scanning images...");
console.log("");

for (const file of images) {

  const stat = await fs.stat(file);

  before += stat.size;

  const webp = file.replace(path.extname(file), ".webp");

  await sharp(file)

    .webp({
      quality: 85,
      effort: 6
    })

    .toFile(webp);

  const stat2 = await fs.stat(webp);

  after += stat2.size;

  processed++;

  const saved =
    (
      (1 - stat2.size / stat.size) * 100
    ).toFixed(1);

  console.log(
    `✔ ${path.basename(file)}
   ${Math.round(stat.size/1024)} KB → ${Math.round(stat2.size/1024)} KB
   Saved ${saved}%\n`
  );

}

console.log("================================");

console.log(`Processed : ${processed}`);

console.log(
  `Original  : ${(before/1024/1024).toFixed(2)} MB`
);

console.log(
  `WebP      : ${(after/1024/1024).toFixed(2)} MB`
);

console.log(
  `Saved     : ${(((before-after)/before)*100).toFixed(1)} %`
);

console.log("================================");