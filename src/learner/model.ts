import { courses, getCourse, lessonUrl, type Course } from '../content/catalog';
export const STORAGE_KEY = 'frame-academy:demo:v1';
export type Enrollment = { courseId: string; ref: string; price: number; currency: 'USD'; at: string };
export type Progress = { position: number; completedAt?: string; reflection?: string; checks?: boolean[]; updatedAt: string };
export type Attempt = { id: string; at: string; answers: number[]; score: number };
export type Quiz = { draft: number[]; attempts: Attempt[]; passedAt?: string };
export type Note = { id: string; courseId: string; lessonId: string; text: string; time?: number; createdAt: string; updatedAt: string };
export type Bookmark = { id: string; courseId: string; lessonId: string; time: number; at: string };
export type Certificate = { courseId: string; ref: string; name: string; at: string };
export type Support = { id: string; topic: string; text: string; at: string };
export type LearnerData = {
  schemaVersion: 1; revision: number; profile: {name: string; speed: number; captions: boolean};
  enrollments: Record<string,Enrollment>; saved: string[]; progress: Record<string,Progress>;
  quizzes: Record<string,Quiz>; notes: Note[]; bookmarks: Bookmark[]; certificates: Record<string,Certificate>;
  lastVisit?: {courseId: string; lessonId: string; at: string}; support: Support[];
};
export function freshData(): LearnerData {return {schemaVersion:1,revision:0,profile:{name:'Alex Morgan',speed:1,captions:false},enrollments:{},saved:[],progress:{},quizzes:{},notes:[],bookmarks:[],certificates:{},support:[]};}
export const scoreQuiz = (course: Course, answers: number[]) => course.quiz.reduce((n,q,i)=>n+(answers[i]===q.correct?1:0),0);
export const quizPassed = (s: LearnerData,id: string) => !!s.quizzes[id]?.attempts.some(a=>a.score>=4);
export const completedLessons = (s: LearnerData,c: Course) => c.lessons.filter(l=>s.progress[l.id]?.completedAt).length;
export const courseComplete = (s: LearnerData,c: Course) => !!s.enrollments[c.id] && completedLessons(s,c)===c.lessons.length && quizPassed(s,c.id);
export function progressLabel(s: LearnerData,c: Course) {if(courseComplete(s,c))return 'Course complete';if(completedLessons(s,c)===3)return 'Lessons complete — quiz remaining';return `${completedLessons(s,c)} of 3 lessons complete`;}
export function continueUrl(s: LearnerData,c: Course) {
  if(courseComplete(s,c))return lessonUrl(c,c.lessons[0]);
  const last=c.lessons.find(l=>l.id===s.lastVisit?.lessonId && !s.progress[l.id]?.completedAt);
  const next=last || c.lessons.find(l=>!s.progress[l.id]?.completedAt);
  return lessonUrl(c,next||'quiz');
}
export function enroll(s: LearnerData,c: Course,at: string,ref: string) {if(!s.enrollments[c.id])s.enrollments[c.id]={courseId:c.id,price:c.price,currency:c.currency,at,ref};return s.enrollments[c.id];}
export function markLesson(s: LearnerData,c: Course,lessonId: string,at: string) {
  const lesson=c.lessons.find(l=>l.id===lessonId);if(!s.enrollments[c.id]||!lesson)return false;
  const p=s.progress[lessonId];if(lesson.kind==='practice' && (!p?.checks?.every(Boolean)||p.checks.length!==c.checklist.length||(p.reflection?.trim().length||0)<20))return false;
  s.progress[lessonId]={...p,position:p?.position||0,updatedAt:at,completedAt:p?.completedAt||at};return true;
}
export function submitQuiz(s: LearnerData,c: Course,answers: number[],at: string,id: string) {
  if(!s.enrollments[c.id]||answers.length!==5||answers.some((a,i)=>!Number.isInteger(a)||a<0||a>=c.quiz[i].options.length))return false;
  const q=s.quizzes[c.id]||{draft:[],attempts:[]};
  if(q.attempts.some(a=>a.id===id))return true;
  const score=scoreQuiz(c,answers);s.quizzes[c.id]={...q,draft:answers,attempts:[...q.attempts,{id,at,answers:[...answers],score}],passedAt:q.passedAt||(score>=4?at:undefined)};return true;
}
export function award(s: LearnerData,at: string) {for(const c of courses){if(courseComplete(s,c)&&!s.certificates[c.id])s.certificates[c.id]={courseId:c.id,ref:`FA-${c.id.toUpperCase()}-${at.replace(/\D/g,'').slice(0,14)}`,name:s.profile.name,at};}}
export function resetCourse(s: LearnerData,c: Course) {for(const l of c.lessons)delete s.progress[l.id];delete s.quizzes[c.id];delete s.certificates[c.id];if(s.lastVisit?.courseId===c.id)delete s.lastVisit;s.bookmarks=s.bookmarks.filter(b=>b.courseId!==c.id);}
export function scenario(kind:'fresh'|'progress'|'complete'): LearnerData {
  const s=freshData();if(kind==='fresh')return s;const c=courses[0],at='2026-09-10T08:00:00.000Z';
  enroll(s,c,at,'FA-SAMPLE-LIGHT');s.saved=[courses[2].id,courses[4].id];
  s.progress[c.lessons[0].id]={position:23,updatedAt:at};s.lastVisit={courseId:c.id,lessonId:c.lessons[0].id,at};
  s.notes=[{id:'sample-note',courseId:c.id,lessonId:c.lessons[0].id,time:20,text:'Softness describes the shadow edge, not the brightness. Try the window before adding another light.',createdAt:at,updatedAt:at}];
  if(kind==='complete'){for(const l of c.lessons){s.progress[l.id]={position:l.kind==='video'?60:0,updatedAt:at,checks:[true,true,true],reflection:'The side light described the sphere clearly. White card made the shadow gentler without removing the shape.'};markLesson(s,c,l.id,at);}submitQuiz(s,c,c.quiz.map(q=>q.correct),at,'sample-pass');award(s,at);}
  return s;
}
type Dict=Record<string,unknown>;
const obj=(v:unknown):Dict=>v!==null&&typeof v==='object'&&!Array.isArray(v)?v as Dict:{};
const arr=(v:unknown):unknown[]=>Array.isArray(v)?v:[];
const str=(v:unknown,max=5000)=>typeof v==='string'?v.slice(0,max):'';
const date=(v:unknown)=>typeof v==='string'&&Number.isFinite(Date.parse(v))?v:undefined;
const num=(v:unknown,min=0,max=Number.MAX_SAFE_INTEGER)=>typeof v==='number'&&Number.isFinite(v)?Math.max(min,Math.min(v,max)):min;
export function validate(raw:unknown):LearnerData {
  const x=obj(raw);if(x.schemaVersion!==1 && x.schemaVersion!==0)throw Error('This saved format cannot be read. Reset this demo to start again.');
  const s=freshData(),p=obj(x.profile);s.revision=num(x.revision);s.profile={name:str(p.name,120).trim()||s.profile.name,speed:[.5,.75,1,1.25,1.5,2].includes(Number(p.speed))?Number(p.speed):1,captions:p.captions===true};
  s.saved=[...new Set(arr(x.saved).filter((id):id is string=>typeof id==='string'&&courses.some(c=>c.id===id)))];
  for(const c of courses){
    const e=obj(obj(x.enrollments)[c.id]);if(e.courseId===c.id && str(e.ref) && date(e.at))s.enrollments[c.id]={courseId:c.id,ref:str(e.ref,100),price:num(e.price,0,100000),currency:'USD',at:date(e.at)!};
    for(const l of c.lessons){const v=obj(obj(x.progress)[l.id]);if(!date(v.updatedAt))continue;const reflection=str(v.reflection,5000),checks=arr(v.checks).slice(0,c.checklist.length).map(b=>b===true);const validPractice=l.kind!=='practice'||(checks.length===c.checklist.length&&checks.every(Boolean)&&reflection.trim().length>=20);s.progress[l.id]={position:l.kind==='video'?num(v.position,0,c.videoSeconds):0,updatedAt:date(v.updatedAt)!,completedAt:validPractice?date(v.completedAt):undefined,reflection,checks};}
    const q=obj(obj(x.quizzes)[c.id]);const attempts:Attempt[]=arr(q.attempts).flatMap(v=>{const a=obj(v),answers=arr(a.answers);return str(a.id)&&date(a.at)&&answers.length===5&&answers.every((n,i)=>Number.isInteger(n)&&Number(n)>=0&&Number(n)<c.quiz[i].options.length)?[{id:str(a.id,100),at:date(a.at)!,answers:answers as number[],score:scoreQuiz(c,answers as number[])}]:[];});
    if(Object.keys(q).length)s.quizzes[c.id]={draft:Array.from({length:5},(_,i)=>{const n=arr(q.draft)[i];return Number.isInteger(n)&&Number(n)>=0&&Number(n)<4?Number(n):-1;}),attempts,passedAt:attempts.find(a=>a.score>=4)?.at};
    const cert=obj(obj(x.certificates)[c.id]);if(courseComplete(s,c)&&date(cert.at)&&str(cert.ref)&&str(cert.name))s.certificates[c.id]={courseId:c.id,ref:str(cert.ref,150),name:str(cert.name,120),at:date(cert.at)!};
  }
  const relationship=(v:Dict)=>{const c=getCourse(str(v.courseId));return c?.lessons.find(l=>l.id===v.lessonId);};
  s.notes=arr(x.notes).slice(-300).flatMap(v=>{const n=obj(v),l=relationship(n);return l&&str(n.id)&&str(n.text).trim()&&date(n.createdAt)&&date(n.updatedAt)?[{id:str(n.id,100),courseId:str(n.courseId),lessonId:l.id,text:str(n.text),time:l.kind==='video'&&typeof n.time==='number'?num(n.time,0,120):undefined,createdAt:date(n.createdAt)!,updatedAt:date(n.updatedAt)!}]:[];});
  s.bookmarks=arr(x.bookmarks).slice(-300).flatMap(v=>{const b=obj(v),l=relationship(b);return l?.kind==='video'&&str(b.id)&&date(b.at)?[{id:str(b.id,100),courseId:str(b.courseId),lessonId:l.id,time:num(b.time,0,60),at:date(b.at)!}]:[];});
  s.support=arr(x.support).slice(-50).flatMap(v=>{const r=obj(v);return str(r.id)&&str(r.text)&&date(r.at)?[{id:str(r.id,100),topic:str(r.topic,100),text:str(r.text),at:date(r.at)!}]:[];});
  const last=obj(x.lastVisit);if(relationship(last)&&date(last.at))s.lastVisit={courseId:str(last.courseId),lessonId:str(last.lessonId),at:date(last.at)!};
  // Recover a missing award only when its validated prerequisites prove it existed.
  for(const c of courses)if(courseComplete(s,c)&&!s.certificates[c.id]){const at=s.quizzes[c.id].passedAt!;s.certificates[c.id]={courseId:c.id,ref:`FA-RECOVERED-${c.id}`,name:s.profile.name,at};}
  return s;
}
