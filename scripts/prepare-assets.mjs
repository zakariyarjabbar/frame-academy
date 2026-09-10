import fs from 'node:fs/promises';
import sharp from 'sharp';
const source='/private/tmp/frame-academy-assets';
await fs.mkdir('public/images',{recursive:true});await fs.mkdir('public/fonts',{recursive:true});await fs.mkdir('public/resources',{recursive:true});
const provenance=JSON.parse(await fs.readFile(`${source}/provenance.json`,'utf8'));
for(const a of provenance.assets){const id=({'mara-ellis':'mara','elias-noor':'elias','june-park':'june'})[a.id]||a.id;const file=`public/images/${id}.webp`;await sharp(a.path).resize({width:id==='hero'?1536:['mara','elias','june'].includes(id)?600:1200,withoutEnlargement:true}).webp({quality:85}).toFile(file);a.shippingFile=file;a.shippingBytes=(await fs.stat(file)).size;}
await fs.writeFile('docs/asset-provenance.json',JSON.stringify(provenance,null,2));
for(const [pkg,name,weights]of [['barlow-condensed','Barlow',[600,700]],['dm-sans','DM',[400,500,600]]]){for(const weight of weights)await fs.copyFile(`node_modules/@fontsource/${pkg}/files/${pkg}-latin-${weight}-normal.woff2`,`public/fonts/${name}-${weight}.woff2`);await fs.copyFile(`node_modules/@fontsource/${pkg}/LICENSE`,`public/fonts/${pkg}-LICENSE.txt`);}
await fs.writeFile('public/icon.svg','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="#151719"/><path d="M12 28V12h16M36 12h16v16M52 36v16H36M28 52H12V36" fill="none" stroke="#E5F16C" stroke-width="5"/><rect x="25" y="25" width="14" height="14" fill="#E5F16C"/></svg>');
console.log('Prepared 10 optimized photographs, five font weights, licenses and favicon.');
