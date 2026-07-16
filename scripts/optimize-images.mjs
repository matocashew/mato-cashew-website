import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const IMAGE_DIR = "public/images";

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

const images = (await walk(IMAGE_DIR)).filter(file => {

  const ext = path.extname(file).toLowerCase();

  return [
    ".png",
    ".jpg",
    ".jpeg"
  ].includes(ext);

});

let before = 0;
let after = 0;

for (const file of images) {

  const stat = await fs.stat(file);

  before += stat.size;

  const ext = path.extname(file).toLowerCase();

  const image = sharp(file);

  const temp = file + ".tmp";

  if (ext === ".png") {

    await image
      .png({
        compressionLevel: 9,
        quality: 90,
        effort: 10
      })
      .toFile(temp);

  } else {

    await image
      .jpeg({
        quality: 85,
        mozjpeg: true
      })
      .toFile(temp);

  }

  await fs.rename(temp, file);

  const stat2 = await fs.stat(file);

  after += stat2.size;

  console.log(
    `${path.basename(file)}  ${(stat.size/1024).toFixed(0)} KB → ${(stat2.size/1024).toFixed(0)} KB`
  );

}

console.log("");

console.log("================================");

console.log(
  `Total Before : ${(before/1024/1024).toFixed(2)} MB`
);

console.log(
  `Total After  : ${(after/1024/1024).toFixed(2)} MB`
);

console.log(
  `Saved        : ${((before-after)/1024/1024).toFixed(2)} MB`
);

console.log("================================");