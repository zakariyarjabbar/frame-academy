import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createRequire} from 'node:module';
import sharp from 'sharp';
import nextEnv from '@next/env';
nextEnv.loadEnvConfig(process.cwd());
import {courses,instructors} from '../src/content/catalog';
const require=createRequire(import.meta.url),ffmpeg=require('ffmpeg-static'),ffprobe=require('ffprobe-static').path;
const fixed=['','courses','instructors','about','enroll','enrollment/confirmation','my-learning','saved','notes','certificates','certificate','profile','help','contact','demo','privacy'];
const routes=[...fixed,...courses.map(c=>`courses/${c.slug}`),...instructors.map(i=>`instructors/${i.slug}`),...courses.flatMap(c=>[...c.lessons.map(l=>`learn/${c.slug}/${l.slug}`),`learn/${c.slug}/quiz`])];
let references=0;
for(const route of routes){const file=path.join('out',route,'index.html');assert(fs.existsSync(file),file);const html=fs.readFileSync(file,'utf8');assert(html.includes('noindex'),`No indexing policy: ${route}`);for(const m of html.matchAll(/(?:src|href)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)){const target=decodeURIComponent(m[1]);if(target.startsWith('//'))continue;let dest=path.join('out',target);if(dest.endsWith('/'))dest+='index.html';else if(fs.existsSync(dest)&&fs.statSync(dest).isDirectory())dest=path.join(dest,'index.html');assert(fs.existsSync(dest),`${route}: missing ${target}`);references++;}}
const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const origin=process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/,'');
for(const c of courses){const html=fs.readFileSync(`out/courses/${c.slug}/index.html`,'utf8');assert(html.includes(`<title>${escape(c.title)} | FRAME ACADEMY</title>`));assert(html.includes(`name="description" content="${escape(c.outcome)}"`));assert(html.includes('name="twitter:card" content="summary_large_image"'));if(origin){assert(html.includes(`content="${origin}/social/${c.slug}.jpg"`));assert(html.includes(`href="${origin}/courses/${c.slug}/"`));}else{assert(!html.includes('property="og:image"'));assert(!html.includes('rel="canonical"'));}
  const video=`out/media/${c.id}.mp4`;const info=JSON.parse(spawnSync(ffprobe,['-v','quiet','-print_format','json','-show_format','-show_streams',video],{encoding:'utf8'}).stdout);assert.equal(info.streams[0].codec_name,'h264');assert(Math.abs(Number(info.format.duration)-c.videoSeconds)<.05,`${c.id} duration mismatch`);assert.equal(info.streams[0].pix_fmt,'yuv420p');const decoded=spawnSync(ffmpeg,['-v','error','-i',video,'-f','null','-'],{encoding:'utf8'});assert.equal(decoded.status,0,decoded.stderr);for(const resource of [`out/media/${c.id}.vtt`,`out/resources/${c.id}-worksheet.md`,`out/resources/${c.id}-transcript.txt`,`out/diagrams/${c.id}.svg`])assert(fs.statSync(resource).size>100);
}
for(const slug of ['home',...courses.map(c=>c.slug)]){const m=await sharp(`out/social/${slug}.jpg`).metadata();assert.equal(m.width,1200);assert.equal(m.height,630);}
assert(fs.readFileSync('out/index.html','utf8').includes('design-contract'));assert(!fs.readFileSync('out/robots.txt','utf8').includes('Disallow: /'));
console.log(`Verified ${routes.length} routes, ${references} static references, 6 full H.264 decodes, 18 resources, 6 diagrams and 7 social covers. ${origin?'Absolute metadata verified.':'Local-mode metadata verified; no invented public origin.'}`);
fs.writeFileSync('docs/export-results.json',JSON.stringify({routes:routes.length,references,media:6,resources:18,social:7,origin:origin||null,verifiedAt:new Date().toISOString()},null,2));
