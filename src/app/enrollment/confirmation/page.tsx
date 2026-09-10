import {Suspense} from 'react';
import {Confirmation} from '@/learner/panels';
import {pageMeta} from '@/lib/meta';
export const metadata=pageMeta('Enrollment confirmation','Local demo enrollment. No payment is taken.','/enrollment/confirmation/');
export default function Page(){return <div className="wrap"><Suspense fallback={<p className="loading-state">Loading your local record…</p>}><Confirmation/></Suspense></div>;}
