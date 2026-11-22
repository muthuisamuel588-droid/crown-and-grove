import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import sharp from 'sharp';

const require = createRequire('C:/Users/psamir/AppData/Local/Temp/opencode/package.json');
const { PDFDocument } = require('pdf-lib');

const ROOT = path.resolve('branding/crown-and-grove');
const SVG_DIR = path.join(ROOT, 'transparent');
const PNG_DIR = path.join(ROOT, 'export', 'png-transparent');
const PDF_DIR = path.join(ROOT, 'export', 'pdf');

// Strip the baked-in background rect from each source SVG so the artwork is truly transparent.
const assets = [
  { key: 'primary',           file: 'concept-04-primary.svg',           targets: [[64,64],[256,256],[512,512],[1024,1024],[2048,2048]], pdf: [1600,1600] },
  { key: 'lockup-horizontal', file: 'concept-04-lockup-horizontal.svg', targets: [[600,170],[1200,340],[2400,680]],                    pdf: [2400,680] },
  { key: 'lockup-stacked',    file: 'concept-04-lockup-stacked.svg',    targets: [[420,330],[840,660],[1680,1320]],                    pdf: [1680,1320] },
  { key: 'wordmark',          file: 'concept-04-wordmark.svg',          targets: [[560,110],[1120,220],[2240,440]],                      pdf: [2240,440] },
  { key: 'dark',              file: 'concept-04-dark.svg',              targets: [[256,256],[512,512],[1024,1024],[2048,2048]],         pdf: [1600,1600] },
  { key: 'mono',              file: 'concept-04-mono.svg',              targets: [[256,256],[512,512],[1024,1024],[2048,2048]],         pdf: [1600,1600] },
  { key: 'favicon',           file: 'concept-04-favicon.svg',           targets: [[16,16],[32,32],[64,64],[180,180]],                  pdf: [512,512] },
];

await fs.mkdir(SVG_DIR, { recursive: true });
await fs.mkdir(PNG_DIR, { recursive: true });
await fs.mkdir(PDF_DIR, { recursive: true });

const pdfPages = [];

for (const asset of assets) {
  const original = await fs.readFile(path.join(ROOT, asset.file), 'utf8');
  // Remove the full-canvas background rectangle (white or charcoal).
  const transparentSvg = original.replace(/<rect[^>]*width="(\d+)"[^>]*height="(\d+)"[^>]*fill="#(?:FFFFFF|1A1A1A)"[^>]*\/>\s*/i, '');
  const svgPath = path.join(SVG_DIR, asset.file.replace('.svg', '-transparent.svg'));
  await fs.writeFile(svgPath, transparentSvg);
  const svgBuffer = Buffer.from(transparentSvg);

  for (const [w, h] of asset.targets) {
    const name = `crown-grove-${asset.key}-transparent-${w}x${h}.png`;
    const buf = await sharp(svgBuffer, { density: 300 })
      .resize(w, h, { fit: 'contain' })
      .png({ compressionLevel: 9 })
      .toBuffer();
    await fs.writeFile(path.join(PNG_DIR, name), buf);
    console.log(`PNG  ${name}  ${(buf.length / 1024).toFixed(1)} KB`);
  }

  const [pw, ph] = asset.pdf;
  const pdfPng = await sharp(svgBuffer, { density: 300 })
    .resize(pw, ph, { fit: 'contain' })
    .png({ compressionLevel: 9 })
    .toBuffer();
  pdfPages.push({ key: asset.key, png: pdfPng, w: pw, h: ph });
}

// Build a single master PDF with all assets, plus one PDF per asset.
// pdf-lib embeds the PNG alpha channel as a soft mask, so logos have no background.
const PW = 842, PH = 595; // A4 landscape
const MARGIN = 50;

async function buildPdf(pages) {
  const doc = await PDFDocument.create();
  for (const page of pages) {
    const pdfPage = doc.addPage([PW, PH]);
    const img = await doc.embedPng(page.png);
    const scale = Math.min((PW - MARGIN * 2) / img.width, (PH - MARGIN * 2) / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    pdfPage.drawImage(img, { x: (PW - w) / 2, y: (PH - h) / 2, width: w, height: h });
  }
  return doc.save();
}

const master = await buildPdf(pdfPages);
await fs.writeFile(path.join(PDF_DIR, 'CrownGrove-Brand-Assets-Transparent.pdf'), master);
console.log(`\nPDF  CrownGrove-Brand-Assets-Transparent.pdf  ${(master.length / 1024).toFixed(1)} KB  (${pdfPages.length} pages)`);

for (const page of pdfPages) {
  const name = `CrownGrove-${page.key.replace(/(^|-)([a-z])/g, (_, _d, c) => c.toUpperCase())}-Transparent.pdf`;
  const buf = await buildPdf([page]);
  await fs.writeFile(path.join(PDF_DIR, name), buf);
  console.log(`PDF  ${name}  ${(buf.length / 1024).toFixed(1)} KB`);
}

console.log('\nDone.');
