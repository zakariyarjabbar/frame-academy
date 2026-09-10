import { Profile } from '@/learner/panels';
import {LearnerNav} from '@/components/navigation';
import {PageHeading} from '@/components/ui';
import {pageMeta} from '@/lib/meta';
export const metadata=pageMeta('Your profile','A local name and a few preferences for your learning studio.','/profile/');
export default function Page(){return <div className="wrap workspace"><PageHeading title={'Your profile'}>{'A local name and a few preferences for your learning studio.'}</PageHeading><LearnerNav/><Profile/></div>;}
