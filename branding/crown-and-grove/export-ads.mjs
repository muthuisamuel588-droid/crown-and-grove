import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('branding/crown-and-grove');
const OUT = path.join(ROOT, 'export', 'ads');

const ads = [
  { file: 'ad-01-strategy.svg',  slug: 'brand-strategy' },
  { file: 'ad-02-identity.svg',  slug: 'identity-design' },
  { file: 'ad-03-digital.svg',   slug: 'digital-experiences' },
  { file: 'ad-04-marketing.svg', slug: 'marketing-content' },
];

// Square social posts + portrait story/feed posts
const sizes = [[1080, 1080], [1080, 1350]];

await fs.mkdir(OUT, { recursive: true });

for (const ad of ads) {
  const svg = await fs.readFile(path.join(ROOT, ad.file));
  for (const [w, h] of sizes) {
    const name = `${ad.slug}-${w}x${h}.png`;
    const buf = await sharp(svg, { density: 300 })
      .resize(w, h, { fit: 'cover', position: 'centre' })
      .png({ compressionLevel: 9 })
      .toBuffer();
    await fs.writeFile(path.join(OUT, name), buf);
    console.log(`${name}  ${(buf.length / 1024).toFixed(1)} KB`);
  }
}
console.log('\nDone.');
