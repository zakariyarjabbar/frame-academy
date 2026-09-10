'use client';
import Link from 'next/link';
import {useState} from 'react';
import {useLearner} from '@/learner/provider';
import {continueUrl,courseComplete} from '@/learner/model';
import {getCourse,lessonUrl,type Course} from '@/content/catalog';
import {Icon} from './ui';
import {siteOrigin} from '@/lib/meta';
export function SaveButton({courseId,compact=false}:{courseId:string;compact?:boolean}){const s=useLearner();const saved=s.data.saved.includes(courseId);const title=getCourse(courseId)!.title;return <button className={compact?'icon-button save-float':`button secondary ${saved?'selected':''}`} disabled={!s.ready} aria-label={`${saved?'Unsave':'Save'} ${title}`} aria-pressed={saved} onClick={()=>s.mutate(d=>{d.saved=d.saved.includes(courseId)?d.saved.filter(id=>id!==courseId):[...d.saved,courseId];})}><Icon name={saved?'check':'save'}/>{!compact&&(saved?'Saved course':'Save course')}</button>;}
export function CourseAction({course:c}:{course:Course}){const s=useLearner();const enrolled=!!s.data.enrollments[c.id];return <Link className="button primary" href={enrolled?continueUrl(s.data,c):`/enroll/?course=${c.slug}`}>{enrolled?courseComplete(s.data,c)?'Review course':'Continue learning':'Enroll in demo'}<Icon name="arrow"/></Link>;}
export function ShareCourse({course:c}:{course:Course}){const [message,setMessage]=useState('');async function share(){const url=siteOrigin?`${siteOrigin}/courses/${c.slug}/`:undefined;if(!url){setMessage('Public sharing is available after the site’s public origin is configured.');return;}try{if(navigator.share){await navigator.share({title:c.title,url});setMessage('Share action completed.');}else{await navigator.clipboard.writeText(url);setMessage('Course link copied.');}}catch(e){setMessage(e instanceof Error&&e.name==='AbortError'?'Sharing cancelled.':'Could not share. Try copying the public course address.');}}return <div className="share-control"><button className="text-button" onClick={share}><Icon name="share"/>Share course</button>{message&&<p role="status" className="small-text">{message}</p>}</div>;}
export function PreviewLink({course:c}:{course:Course}){return <Link className="button secondary" href={lessonUrl(c,c.lessons[0])}><Icon name="play"/>Preview a lesson</Link>;}
