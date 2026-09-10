import {chromium, expect} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import sharp from 'sharp';
import {courses} from '../src/content/catalog.ts';

const base = process.env.PREVIEW_URL || 'http://127.0.0.1:4173';
const key = 'frame-academy:demo:v1';
const browser = await chromium.launch({channel:'chrome', headless:true});
const context = await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true});
const page = await context.newPage();
const report = {browser:await browser.version(),base,checks:[],errors:[]};
page.on('pageerror',error=>report.errors.push(error.message));
async function go(path) { await page.goto(base+path); await page.evaluate(()=>document.fonts.ready); }
async function capture(name) {
  await page.evaluate(async()=>{
    if(document.activeElement instanceof HTMLElement) document.activeElement.blur();
    window.scrollTo({top:0,left:0,behavior:'instant'});
    for(const image of document.images) image.loading='eager';
    await Promise.all(Array.from(document.images).map(image=>image.decode().catch(()=>{})));
  });
  await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  assert.equal(await page.evaluate(()=>scrollY),0);
  assert(await page.locator('.skip-link').evaluate(link=>link.getBoundingClientRect().bottom<0));
  await page.screenshot({path:`docs/screenshots/${name}.png`,fullPage:true,animations:'disabled'});
}
async function download(path) {
  const pending=page.waitForEvent('download');
  await page.getByRole('button',{name:'Download certificate PNG'}).click();
  await (await pending).saveAs(path);
  const metadata=await sharp(path).metadata();
  assert.equal(metadata.width,1800);assert.equal(metadata.height,1200);
}
function pass(message) {report.checks.push(message);console.log('PASS '+message);}
try {
  await go('/demo/');page.once('dialog',dialog=>dialog.accept());
  await page.getByRole('button',{name:'Load completed state'}).click();
  await go('/profile/');
  await page.getByLabel('Display name',{exact:true}).fill('     ');
  await page.getByRole('button',{name:'Save preferences'}).click();
  await expect(page.getByRole('status').filter({hasText:'Enter a display name'})).toBeVisible();
  assert.equal(await page.evaluate(key=>JSON.parse(localStorage.getItem(key)).profile.name,key),'Alex Morgan');
  await page.reload();await expect(page.getByLabel('Display name',{exact:true})).toHaveValue('Alex Morgan');
  pass('Whitespace-only profile names are rejected without changing saved identity');

  await go('/learn/light-and-shadow/quiz/');
  for(let index=0;index<5;index++) await page.locator(`input[name=q${index}][value="${courses[0].quiz[index].correct}"]`).check();
  await page.getByRole('button',{name:'Submit answers'}).click();
  await expect(page.locator('.quiz-result')).toContainText('5/5');
  await capture('quiz-desktop');
  await page.setViewportSize({width:390,height:844});await capture('quiz-mobile');
  assert.equal(await page.locator('.skip-link').evaluate(link=>link===document.activeElement),false);
  pass('Desktop/mobile quiz captures show the same submitted state without focused skip-link artifacts');

  await page.setViewportSize({width:1440,height:1000});
  await go('/certificate/?course=light-and-shadow');
  await expect(page.locator('.certificate-name')).toHaveText('Alex Morgan');
  await download('docs/downloads/demo-certificate.png');
  await page.pdf({path:'docs/downloads/demo-certificate-print.pdf',format:'A4',landscape:true,printBackground:true,preferCSSPageSize:true});
  await page.emulateMedia({media:'print'});
  assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).colorScheme),'light');
  await page.emulateMedia({media:null});
  pass('Certificate print root uses a light page background and the real PNG export remains 1800×1200');

  // Deliberately injected valid certificate snapshots isolate long-name rendering;
  // the full browser suite independently covers earning a certificate through the UI.
  for(const [variant,name] of [
    ['long-name',('Alexandra Marie Morgan de la Cruz Fernandez ').repeat(3).slice(0,120).trim()],
    ['unbroken-name','W'.repeat(120)]
  ]) {
    await page.evaluate(({key,name})=>{const data=JSON.parse(localStorage.getItem(key));data.certificates['light-shadow'].name=name;localStorage.setItem(key,JSON.stringify(data));},{key,name});
    await page.reload();await expect(page.locator('.certificate-name')).toHaveText(name);
    await download(`docs/downloads/certificate-${variant}.png`);
    await page.setViewportSize({width:390,height:844});
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    await page.setViewportSize({width:1440,height:1000});
    await page.pdf({path:`docs/downloads/certificate-${variant}.pdf`,format:'A4',landscape:true,printBackground:true,preferCSSPageSize:true});
  }
  pass('Maximum-length spaced and unbroken certificate names export as real PNGs and avoid mobile overflow');

  await go('/learn/light-and-shadow/watch-the-technique/');
  await expect.poll(()=>page.locator('video').evaluate(video=>video.readyState)).toBeGreaterThanOrEqual(2);
  await page.locator('video').evaluate(video=>video.requestFullscreen());
  assert(await page.evaluate(()=>document.fullscreenElement instanceof HTMLVideoElement));
  await page.evaluate(()=>document.exitFullscreen());
  pass('Native video enters and exits the browser Fullscreen API in tested Chrome');

  assert.equal(report.errors.length,0);
  report.verifiedAt=new Date().toISOString();
  await fs.writeFile('docs/finish-results.json',JSON.stringify(report,null,2));
} finally {await browser.close();}
