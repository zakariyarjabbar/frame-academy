import {Suspense} from 'react';
import {CertificatePage} from '@/certificates/views';
import {pageMeta} from '@/lib/meta';
export const metadata=pageMeta('Demo completion certificate','A browser-local portfolio certificate; not accredited.','/certificate/');
export default function Page(){return <Suspense fallback={<p className="wrap loading-state">Loading certificate…</p>}><CertificatePage/></Suspense>;}
