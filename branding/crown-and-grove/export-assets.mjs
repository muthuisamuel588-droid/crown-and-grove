import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('branding/crown-and-grove');
const PNG_DIR = path.join(ROOT, 'export/png');
const PDF_DIR = path.join(ROOT, 'export/pdf');

const assets = [
  { key: 'primary',           file: 'concept-04-primary.svg',           sizes: [64, 256, 512, 1024, 2048], ratio: 1 },
  { key: 'lockup-horizontal', file: 'concept-04-lockup-horizontal.svg', widths: [600, 1200, 2400],        ratio: 600 / 170 },
  { key: 'lockup-stacked',    file: 'concept-04-lockup-stacked.svg',    widths: [420, 840, 1680],         ratio: 420 / 330 },
  { key: 'wordmark',          file: 'concept-04-wordmark.svg',          widths: [560, 1120, 2240],        ratio: 560 / 110 },
  { key: 'dark',              file: 'concept-04-dark.svg',              sizes: [256, 512, 1024, 2048],    ratio: 1 },
  { key: 'mono',              file: 'concept-04-mono.svg',              sizes: [256, 512, 1024, 2048],    ratio: 1 },
  { key: 'favicon',           file: 'concept-04-favicon.svg',           sizes: [16, 32, 64, 180],         ratio: 1 },
];

const pdfTargets = [
  { key: 'primary',           w: 1600 },
  { key: 'lockup-horizontal', w: 2400 },
  { key: 'lockup-stacked',    w: 1680 },
  { key: 'wordmark',          w: 2240 },
  { key: 'dark',              w: 1600 },
  { key: 'mono',              w: 1600 },
  { key: 'favicon',           w: 512 },
];

async function render(file, width, height, format) {
  const svg = await fs.readFile(path.join(ROOT, file));
  let pipeline = sharp(svg, { density: 300 }).resize(width, height, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  });
  if (format === 'png') return pipeline.png({ compressionLevel: 9 }).toBuffer();
  return pipeline.jpeg({ quality: 92, mozjpeg: true }).toBuffer();
}

function buildPdf(pages) {
  const chunks = [];
  let offset = 0;
  const write = (value) => {
    const buf = typeof value === 'string' ? Buffer.from(value, 'latin1') : value;
    chunks.push(buf);
    offset += buf.length;
  };

  write('%PDF-1.4\n');

  const pageCount = pages.length;
  const catalog = 1;
  const pagesRoot = 2;
  const pageObj = (i) => 3 + i * 3;
  const contentObj = (i) => 4 + i * 3;
  const imageObj = (i) => 5 + i * 3;
  const offsets = [];

  const object = (num, body) => {
    offsets[num] = offset;
    write(`${num} 0 obj\n`);
    body();
    write('\nendobj\n');
  };

  object(catalog, () => write(`<< /Type /Catalog /Pages ${pagesRoot} 0 R >>`));

  const kids = pages.map((_, i) => `${pageObj(i)} 0 R`).join(' ');
  object(pagesRoot, () => write(`<< /Type /Pages /Kids [${kids}] /Count ${pageCount} >>`));

  const PW = 842;
  const PH = 595;
  const MW = 742;
  const MH = 495;

  pages.forEach((p, i) => {
    const scale = Math.min(MW / p.w, MH / p.h);
    const tw = scale * p.w;
    const th = scale * p.h;
    const tx = (PW - tw) / 2;
    const ty = (PH - th) / 2;
    const content = `q\n${scale.toFixed(4)} 0 0 ${scale.toFixed(4)} ${tx.toFixed(2)} ${ty.toFixed(2)} cm\n/Im0 Do\nQ\n`;

    object(pageObj(i), () =>
      write(
        `<< /Type /Page /Parent ${pagesRoot} 0 R /MediaBox [0 0 ${PW} ${PH}] ` +
        `/Resources << /XObject << /Im0 ${imageObj(i)} 0 R >> >> /Contents ${contentObj(i)} 0 R >>`
      )
    );

    object(contentObj(i), () => {
      const body = Buffer.from(content, 'latin1');
      write(`<< /Length ${body.length} >>\nstream\n`);
      write(body);
      write('endstream');
    });

    object(imageObj(i), () => {
      write(
        `<< /Type /XObject /Subtype /Image /Width ${p.w} /Height ${p.h} ` +
        `/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${p.jpeg.length} >>\nstream\n`
      );
      write(p.jpeg);
      write('\nendstream');
    });
  });

  const xrefOffset = offset;
  const maxObj = 2 + pageCount * 3;
  write(`xref\n0 ${maxObj + 1}\n`);
  write('0000000000 65535 f \n');
  for (let n = 1; n <= maxObj; n += 1) {
    write(`${String(offsets[n]).padStart(10, '0')} 00000 n \n`);
  }
  write(`trailer\n<< /Size ${maxObj + 1} /Root ${catalog} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);

  return Buffer.concat(chunks);
}

await fs.mkdir(PNG_DIR, { recursive: true });
await fs.mkdir(PDF_DIR, { recursive: true });

const manifest = [];

for (const asset of assets) {
  const targets = asset.sizes
    ? asset.sizes.map((w) => ({ w, h: w }))
    : asset.widths.map((w) => ({ w, h: Math.round(w / asset.ratio) }));

  for (const { w, h } of targets) {
    const name = `crown-grove-${asset.key}-${w}x${h}.png`;
    const buffer = await render(asset.file, w, h, 'png');
    await fs.writeFile(path.join(PNG_DIR, name), buffer);
    manifest.push({ type: 'PNG', name, bytes: buffer.length });
    console.log(`PNG  ${name}  ${(buffer.length / 1024).toFixed(1)} KB`);
  }
}

const pdfPages = [];
for (const target of pdfTargets) {
  const asset = assets.find((a) => a.key === target.key);
  const w = target.w;
  const h = Math.round(w / asset.ratio);
  const jpeg = await render(asset.file, w, h, 'jpeg');
  pdfPages.push({ key: target.key, w, h, jpeg });
}

const allPdf = buildPdf(pdfPages);
await fs.writeFile(path.join(PDF_DIR, 'CrownGrove-Brand-Assets.pdf'), allPdf);
manifest.push({ type: 'PDF', name: 'CrownGrove-Brand-Assets.pdf', bytes: allPdf.length });
console.log(`PDF  CrownGrove-Brand-Assets.pdf  ${(allPdf.length / 1024).toFixed(1)} KB  (${pdfPages.length} pages)`);

for (const page of pdfPages) {
  const name = `CrownGrove-${page.key.replace(/(^|-)([a-z])/g, (_, _dash, c) => c.toUpperCase())}.pdf`;
  const buf = buildPdf([page]);
  await fs.writeFile(path.join(PDF_DIR, name), buf);
  manifest.push({ type: 'PDF', name, bytes: buf.length });
  console.log(`PDF  ${name}  ${(buf.length / 1024).toFixed(1)} KB`);
}

const lines = [
  '# Crown & Grove — Export Manifest',
  '',
  'Generated by `export-assets.mjs` from the SVG source files in this directory.',
  '',
  '## PNG',
  '',
  '| File | Size |',
  '| --- | ---: |',
  ...manifest.filter((m) => m.type === 'PNG').map((m) => `| ${m.name} | ${(m.bytes / 1024).toFixed(1)} KB |`),
  '',
  '## PDF',
  '',
  'A4 landscape pages, each asset centred with a 50 pt margin. Images embedded as JPEG (DCTDecode).',
  '',
  '| File | Size |',
  '| --- | ---: |',
  ...manifest.filter((m) => m.type === 'PDF').map((m) => `| ${m.name} | ${(m.bytes / 1024).toFixed(1)} KB |`),
  '',
];
await fs.writeFile(path.join(ROOT, 'export/README.md'), lines.join('\n'));
console.log('\nDone. Manifest written to export/README.md');
