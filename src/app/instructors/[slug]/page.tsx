import {notFound} from 'next/navigation';
import {instructors,courses} from '@/content/catalog';
import {CourseCard} from '@/components/ui';
import {pageMeta} from '@/lib/meta';
export const dynamicParams=false;
export function generateStaticParams(){return instructors.map(i=>({slug:i.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const p=await params,i=instructors.find(i=>i.slug===p.slug);return i?pageMeta(i.name,i.approach,`/instructors/${i.slug}/`):{};}
export default async function Profile({params}:{params:Promise<{slug:string}>}){const p=await params,i=instructors.find(i=>i.slug===p.slug);if(!i)notFound();return <div className="wrap"><div className="instructor-profile"><img src={i.image} alt={`${i.name}, fictional teaching persona`} width="600" height="600" fetchPriority="high"/><div><h1>{i.name}</h1><p>{i.role}</p><blockquote>“{i.approach}”</blockquote><p>{i.bio}</p><p className="small-text">Fictional instructor persona with an original generated portrait. No real professional credentials, awards or teaching affiliation are claimed.</p></div></div><section className="section" style={{paddingTop:0}}><div className="section-heading"><h2>Study with {i.name.split(' ')[0]}.</h2></div><div className="course-grid">{courses.filter(c=>c.instructorId===i.id).map(c=><CourseCard course={c} key={c.id}/>)}</div></section></div>;}
