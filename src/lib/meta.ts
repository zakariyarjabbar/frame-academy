import type {Metadata} from 'next';
import type {Course} from '../content/catalog';
export const siteOrigin=process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/,'');
export function pageMeta(title:string,description:string,path='/',image='/social/home.jpg'):Metadata {
  const canonical=siteOrigin?`${siteOrigin}${path}`:undefined;
  const cover=siteOrigin?[{url:`${siteOrigin}${image}`,width:1200,height:630,alt:`${title} — FRAME ACADEMY photographic course cover`}]:[];
  return {title,description,alternates:canonical?{canonical}:undefined,openGraph:{title:`${title} | FRAME ACADEMY`,description,type:'website',url:canonical,siteName:'FRAME ACADEMY',images:cover},twitter:{card:'summary_large_image',title:`${title} | FRAME ACADEMY`,description,images:cover.map(i=>i.url)}};
}
export const courseMeta=(c:Course)=>pageMeta(c.title,c.outcome,`/courses/${c.slug}/`,`/social/${c.slug}.jpg`);
