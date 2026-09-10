import {Suspense} from 'react';
import {Enrollment} from '@/learner/panels';
import {PageHeading} from '@/components/ui';
import {pageMeta} from '@/lib/meta';
export const metadata=pageMeta('Your next study','Local demo enrollment. No payment is taken.','/enroll/');
export default function Page(){return <div className="wrap"><PageHeading title={'Your next study'}>{'Review a single course and begin a simulated enrollment.'}</PageHeading><Suspense fallback={<p className="loading-state">Loading your local record…</p>}><Enrollment/></Suspense></div>;}
