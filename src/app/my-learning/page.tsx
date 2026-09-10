import { Dashboard } from '@/learner/panels';
import {LearnerNav} from '@/components/navigation';
import {PageHeading} from '@/components/ui';
import {pageMeta} from '@/lib/meta';
export const metadata=pageMeta('My learning','Keep making. Your next lesson, saved studies and useful observations in one place.','/my-learning/');
export default function Page(){return <div className="wrap workspace"><PageHeading title={'My learning'}>{'Keep making. Your next lesson, saved studies and useful observations in one place.'}</PageHeading><LearnerNav/><Dashboard/></div>;}
