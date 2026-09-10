import { SavedCourses } from '@/learner/panels';
import {LearnerNav} from '@/components/navigation';
import {PageHeading} from '@/components/ui';
import {pageMeta} from '@/lib/meta';
export const metadata=pageMeta('Saved courses','Keep the techniques you want to come back to.','/saved/');
export default function Page(){return <div className="wrap workspace"><PageHeading title={'Saved courses'}>{'Keep the techniques you want to come back to.'}</PageHeading><LearnerNav/><SavedCourses/></div>;}
