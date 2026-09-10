import {notFound} from 'next/navigation';
import {courses} from '@/content/catalog';
import {LessonWorkspace} from '@/learning/workspace';
import {CourseQuiz} from '@/learning/quiz';
import {pageMeta} from '@/lib/meta';
export const dynamicParams=false;
export function generateStaticParams(){return courses.flatMap(c=>[...c.lessons.map(l=>({courseSlug:c.slug,lessonSlug:l.slug})),{courseSlug:c.slug,lessonSlug:'quiz'}]);}
export async function generateMetadata({params}:{params:Promise<{courseSlug:string;lessonSlug:string}>}){const p=await params,c=courses.find(c=>c.slug===p.courseSlug);const l=c?.lessons.find(l=>l.slug===p.lessonSlug);return c?pageMeta(l?.title||'Final quiz',c.outcome,`/learn/${p.courseSlug}/${p.lessonSlug}/`,`/social/${c.slug}.jpg`):{};}
export default async function LessonPage({params}:{params:Promise<{courseSlug:string;lessonSlug:string}>}){const p=await params,c=courses.find(c=>c.slug===p.courseSlug);if(!c)notFound();if(p.lessonSlug==='quiz')return <CourseQuiz course={c}/>;const l=c.lessons.find(l=>l.slug===p.lessonSlug);if(!l)notFound();return <LessonWorkspace course={c} lesson={l} key={l.id}/>;}
