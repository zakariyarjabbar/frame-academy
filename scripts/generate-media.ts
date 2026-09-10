import fs from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createRequire} from 'node:module';
import {chromium} from '@playwright/test';
import {courses} from '../src/content/catalog';
import {fontCSS,dataImage,escapeHtml as e,diagram,brandMark} from './render-helpers.mjs';
const require=createRequire(import.meta.url);const ffmpeg=require('ffmpeg-static'),ffprobe=require('ffprobe-static').path;
const dirs=['public/media','public/resources','public/diagrams','tmp/media'];for(const d of dirs)await fs.mkdir(d,{recursive:true});
const browser=await chromium.launch({headless:true,channel:'chrome'});const page=await browser.newPage({viewport:{width:1280,height:720},deviceScaleFactor:1});const fonts=await fontCSS();
const report=[];
for(const c of courses){
  const photo=await dataImage('public'+c.image);const directory=path.resolve(`tmp/media/${c.id}`);await fs.mkdir(directory,{recursive:true});await fs.writeFile(`public/diagrams/${c.id}.svg`,diagram(c));
  for(const [i,ch]of c.chapters.entries()){
    const schematic=Buffer.from(diagram(c,i)).toString('base64');
    const showDiagram=i===2||i===4;
    await page.setContent(`<html><head><style>${fonts}*{box-sizing:border-box}body{margin:0;background:#151719;color:#f8f7f2;font-family:DM}header{height:77px;display:flex;justify-content:space-between;align-items:center;padding:0 42px;border-bottom:1px solid #414547;font-size:16px}header b{display:flex;align-items:center;gap:15px;font-family:Barlow;font-size:25px;letter-spacing:2px}.layout{display:grid;grid-template-columns:740px 1fr;height:563px}.visual{position:relative;overflow:hidden;background:#222629}.visual>.photo{width:100%;height:100%;object-fit:cover;object-position:${['center','65%','center','40%','center','center'][i]}}.diagram{position:absolute;bottom:0;left:0;width:100%;background:#222629}.copy{padding:40px 35px}h1{font:600 51px/1.02 Barlow;margin:18px 0 25px}p{font-size:24px;line-height:1.55;color:#b0b6ba}.number{color:#e5f16c;font-size:16px}footer{height:80px;padding:20px 42px;border-top:1px solid #414547;display:flex;align-items:center;justify-content:space-between;font-size:18px}.cue{color:#e5f16c;max-width:950px}.label{position:absolute;top:20px;left:24px;padding:7px 12px;background:#151719;color:#f8f7f2;font-size:14px}</style></head><body><header><b>${brandMark} FRAME ACADEMY</b><span>${e(c.title)} · A silent visual lesson</span></header><div class="layout"><div class="visual"><img class="photo" src="${photo}"><span class="label">${showDiagram?'Compare the schematic with the photograph':'Look closely at the visual study'}</span>${showDiagram?`<img class="diagram" src="data:image/svg+xml;base64,${schematic}">`:''}</div><div class="copy"><span class="number">${String(i+1).padStart(2,'0')} / 06</span><h1>${e(ch.title)}</h1><p>${e(ch.text)}</p></div></div><footer><span class="cue">${e(ch.cue)}</span><span>OBSERVE → MAKE</span></footer></body></html>`);
    await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:`${directory}/${i}.png`});
  }
  const concat=c.chapters.map((_,i)=>`file '${directory}/${i}.png'\nduration 10`).join('\n')+`\nfile '${directory}/5.png'\n`;
  await fs.writeFile(`${directory}/frames.txt`,concat);
  const video=`public/media/${c.id}.mp4`;
  const result=spawnSync(ffmpeg,['-y','-f','concat','-safe','0','-i',`${directory}/frames.txt`,'-vf','fps=24','-frames:v','1440','-c:v','libx264','-preset','medium','-crf','22','-pix_fmt','yuv420p','-movflags','+faststart','-an',video],{encoding:'utf8'});if(result.status!==0)throw Error(result.stderr);
  const probe=JSON.parse(spawnSync(ffprobe,['-v','quiet','-print_format','json','-show_format','-show_streams',video],{encoding:'utf8'}).stdout);
  const vtt='WEBVTT\n\n'+c.chapters.map(ch=>{const stamp=(t:number)=>`00:${String(Math.floor(t/60)).padStart(2,'0')}:${String(t%60).padStart(2,'0')}.000`;return `${stamp(ch.time)} --> ${stamp(ch.time+10)}\n${ch.title}\n${ch.text}\n`;}).join('\n');await fs.writeFile(`public/media/${c.id}.vtt`,vtt);
  await fs.writeFile(`public/resources/${c.id}-transcript.txt`,`${c.title} — FRAME ACADEMY\nSilent visual teaching clip; equivalent text.\n\n`+c.chapters.map(ch=>`[${ch.time}s] ${ch.title}\n${ch.text}\n${ch.cue}`).join('\n\n'));
  await fs.writeFile(`public/resources/${c.id}-worksheet.md`,`# ${c.title} — practice worksheet\n\nFRAME ACADEMY · Original portfolio lesson\n\n## Intention\n${c.outcome}\n\n## Before you begin\n${c.prerequisite}\n\n${c.equipment.map(x=>'- '+x).join('\n')}\n\n## Your brief\n${c.assignment}\n\n## Check your work\n${c.checklist.map(x=>'- [ ] '+x).join('\n')}\n\n## Reflection\n${c.reflection}\n\nMy observation:\n\n\nMy next change:\n\n\nNo upload is needed. Keep your work on your own device.\n`);
  const record={id:c.id,file:`/${video.replace(/^public\//,'')}`,duration:Number(probe.format.duration),bytes:Number(probe.format.size),codec:probe.streams[0].codec_name,width:probe.streams[0].width,height:probe.streams[0].height,format:probe.format.format_name,caption:`/media/${c.id}.vtt`,transcript:`/resources/${c.id}-transcript.txt`,poster:c.image};report.push(record);console.log(`${c.title}: ${record.duration}s, H.264, ${(record.bytes/1024/1024).toFixed(2)} MB`);
}
await browser.close();await fs.writeFile('docs/media-manifest.json',JSON.stringify(report,null,2));
