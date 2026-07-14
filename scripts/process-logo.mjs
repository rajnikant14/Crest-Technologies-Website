import sharp from "sharp";
import { mkdirSync } from "fs";

const SRC = "D:/Crest_Tech_Website/logo/Updated_LOGO.png";
const OUT = "D:/Crest_Tech_Website/public";
mkdirSync(OUT, { recursive: true });

// 1. Trim the white border off the full lockup
const trimmed = sharp(SRC).trim({ threshold: 25 });
const trimmedBuf = await trimmed.toBuffer();
const meta = await sharp(trimmedBuf).metadata();
console.log("trimmed lockup:", meta.width, "x", meta.height);

// Full lockup for the header (white bg) — 2x for retina at ~220px display width
await sharp(trimmedBuf)
  .resize({ width: 880 })
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}/logo-full.png`);

// 2. Extract the mark (the C/T emblem on the left). In the trimmed lockup the
// emblem occupies roughly the left 28% — extract generously then re-trim.
const markWidth = Math.round(meta.width * 0.3);
const markBuf = await sharp(trimmedBuf)
  .extract({ left: 0, top: 0, width: markWidth, height: meta.height })
  .trim({ threshold: 25 })
  .toBuffer();
const markMeta = await sharp(markBuf).metadata();
console.log("mark:", markMeta.width, "x", markMeta.height);

// Square-pad the mark on white, then export sizes
const pad = 40;
const side = Math.max(markMeta.width, markMeta.height) + pad * 2;
const squared = await sharp({
  create: {
    width: side,
    height: side,
    channels: 3,
    background: { r: 255, g: 255, b: 255 },
  },
})
  .composite([{ input: markBuf, gravity: "centre" }])
  .png()
  .toBuffer();

await sharp(squared).resize(512, 512).png().toFile(`${OUT}/logo-mark.png`);
await sharp(squared).resize(256, 256).png().toFile("D:/Crest_Tech_Website/app/icon.png");
console.log("done");
