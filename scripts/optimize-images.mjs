import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const images = [
  "public/images/products/package.png",
  "public/images/products/package-100g.png",
  "public/images/products/package-250g.png",
  "public/images/products/package-500g.png",
  "public/images/products/premium-kernels.png"
];

for (const file of images) {
  const stat = await fs.stat(file);

  const ext = path.extname(file).toLowerCase();

  let image = sharp(file);

  if (ext === ".png") {
    await image
      .png({
        compressionLevel: 9,
        quality: 90,
        effort: 10
      })
      .toFile(file + ".tmp");
  } else {
    await image
      .jpeg({
        quality: 85,
        mozjpeg: true
      })
      .toFile(file + ".tmp");
  }

  await fs.rename(file + ".tmp", file);

  const stat2 = await fs.stat(file);

  console.log(
    `${path.basename(file)} : ${(stat.size / 1024 / 1024).toFixed(2)} MB → ${(stat2.size / 1024 / 1024).toFixed(2)} MB`
  );
}