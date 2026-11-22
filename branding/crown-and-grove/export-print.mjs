import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('branding/crown-and-grove');
const OUT = path.join(ROOT, 'export');

const jobs = [
  { dir: 'wallpaper/desktop', file: 'wallpaper-desktop.svg', sizes: [[1920,1080],[2560,1440],[3840,2160]] },
  { dir: 'wallpaper/phone',   file: 'wallpaper-phone.svg',   sizes: [[1170,2532],[1284,2778],[1440,3120]] },
  { dir: 'poster',            file: 'poster-01-about.svg',    sizes: [[1080,1350],[2160,2700]] },
  { dir: 'poster',            file: 'poster-02-services.svg', sizes: [[1080,1350],[2160,2700]] },
  { dir: 'poster',            file: 'poster-03-cta.svg',      sizes: [[1080,1350],[2160,2700]] },
];

for (const job of jobs) {
  const targetDir = path.join(OUT, job.dir);
  await fs.mkdir(targetDir, { recursive: true });
  const svg = await fs.readFile(path.join(ROOT, job.file));
  for (const [w, h] of job.sizes) {
    const name = `${path.basename(job.file, '.svg')}-${w}x${h}.png`;
    const buf = await sharp(svg, { density: 300 })
      .resize(w, h, { fit: 'cover' })
      .png({ compressionLevel: 9 })
      .toBuffer();
    await fs.writeFile(path.join(targetDir, name), buf);
    console.log(`${job.dir}/${name}  ${(buf.length / 1024).toFixed(1)} KB`);
  }
}
console.log('\nDone.');
