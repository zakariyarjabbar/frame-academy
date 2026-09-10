import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
const base=process.env.PREVIEW_URL||'http://127.0.0.1:3000';
const browser=await chromium.launch({channel:'chrome',headless:true});
await fs.mkdir('docs/screenshots',{recursive:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
for(const [name,url]of [['home','/'],['course','/courses/light-and-shadow/'],['player','/learn/light-and-shadow/watch-the-technique/']]){await page.goto(base+url);await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:`docs/screenshots/checkpoint-${name}-desktop.png`,fullPage:true});}
await page.setViewportSize({width:390,height:844});await page.goto(base);await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:'docs/screenshots/checkpoint-home-mobile.png',fullPage:true});
console.log('Early homepage/course/player captures written.');await browser.close();
