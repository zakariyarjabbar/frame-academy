import { GlobalNotes } from '@/learner/panels';
import {LearnerNav} from '@/components/navigation';
import {PageHeading} from '@/components/ui';
import {pageMeta} from '@/lib/meta';
export const metadata=pageMeta('Your field notes','A place for the observations that change your next frame.','/notes/');
export default function Page(){return <div className="wrap workspace"><PageHeading title={'Your field notes'}>{'A place for the observations that change your next frame.'}</PageHeading><LearnerNav/><GlobalNotes/></div>;}
