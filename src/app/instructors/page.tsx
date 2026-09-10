import Link from 'next/link';
import {instructors} from '@/content/catalog';
import {PageHeading,Icon} from '@/components/ui';
import {pageMeta} from '@/lib/meta';
export const metadata=pageMeta('Your guides','Three fictional teaching voices for light, storytelling and post-production.','/instructors/');
export default function Instructors(){return <div className="wrap"><PageHeading title="DIFFERENT EYES. SHARED CURIOSITY.">Three fictional teaching voices, built around a practical idea: the best way to understand a technique is to make something with it.</PageHeading><div className="portrait-grid">{instructors.map(i=><article className="portrait-card" key={i.id}><img src={i.image} alt={`${i.name}, fictional instructor`} width="600" height="600"/><h2>{i.name}</h2><span>{i.role}</span><p>{i.approach}</p><Link className="text-link" href={`/instructors/${i.slug}/`}>Meet {i.name.split(' ')[0]}<Icon name="arrow"/></Link></article>)}</div></div>;}
