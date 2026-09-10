import { DemoControls } from '@/learner/panels';
import {LearnerNav} from '@/components/navigation';
import {PageHeading} from '@/components/ui';
import {pageMeta} from '@/lib/meta';
export const metadata=pageMeta('Inside the demo','Explore real learner states, understand browser storage, and manage your local records.','/demo/');
export default function Page(){return <div className="wrap workspace"><PageHeading title={'Inside the demo'}>{'Explore real learner states, understand browser storage, and manage your local records.'}</PageHeading><LearnerNav/><DemoControls/></div>;}
