import {Suspense} from 'react';
import {Catalog} from '@/components/catalog';
import {PageHeading} from '@/components/ui';
import {pageMeta} from '@/lib/meta';
export const metadata=pageMeta('Courses','Six practical studies in photography, filmmaking and post-production.','/courses/');
export default function Courses(){return <div className="wrap"><PageHeading title="FOLLOW YOUR EYE.">Six short courses. Eighteen complete lessons. Choose a technique, then make something with it.</PageHeading><Suspense fallback={<p className="loading-state">Loading course discovery…</p>}><Catalog/></Suspense></div>;}
