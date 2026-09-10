import {courses,getCourse} from '@/content/catalog';
import {continueUrl,progressLabel} from './model';
import type {LearnerStore} from './storage';
type Tool={name:string;title:string;description:string;inputSchema:object;annotations:{readOnlyHint:boolean;untrustedContentHint:boolean};execute:(input:unknown)=>unknown};
type Context={registerTool:(tool:Tool,options:{signal:AbortSignal})=>void|Promise<void>};
export function registerAcademyTools(store:LearnerStore,navigate:(url:string)=>void){
  const context=(document as Document&{modelContext?:Context}).modelContext;if(!context?.registerTool)return;
  const lifecycle=new AbortController();
  const tools:Tool[]=[{name:'frame_get_learning_progress',title:'Read local learning progress',description:'Read this browser’s enrolled courses, completion states and next lesson URLs. Does not change records.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute(input){if(input===null||typeof input!=='object'||Object.keys(input).length)throw Error('Expected an empty object.');const s=store.getSnapshot();if(!s.ready)throw Error('Learner data is still loading.');return {mode:s.mode,courses:courses.filter(c=>s.data.enrollments[c.id]).map(c=>({id:c.id,title:c.title,status:progressLabel(s.data,c),next:continueUrl(s.data,c)}))};}},
  {name:'frame_open_next_lesson',title:'Open the next course lesson',description:'Navigate to the next unfinished lesson or remaining quiz for one already-enrolled course. Does not enroll, complete lessons or award certificates.',inputSchema:{type:'object',properties:{courseId:{type:'string',enum:courses.map(c=>c.id)}},required:['courseId'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(input===null||typeof input!=='object'||Array.isArray(input)||Object.keys(input).some(k=>k!=='courseId'))throw Error('Expected courseId only.');const id=(input as {courseId?:unknown}).courseId;const c=typeof id==='string'?getCourse(id):undefined;const s=store.getSnapshot();if(!s.ready||!c||c.id!==id||!s.data.enrollments[c.id])throw Error('A known enrolled course ID is required.');const url=continueUrl(s.data,c);navigate(url);return {status:'navigation-started',url};}}];
  for(const tool of tools){try{Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{/* Optional browser integration; the visible interface remains available. */}}
  return ()=>lifecycle.abort();
}
