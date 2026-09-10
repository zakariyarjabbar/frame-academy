import {Certificates} from '@/certificates/views';
import {LearnerNav} from '@/components/navigation';
import {PageHeading} from '@/components/ui';
import {pageMeta} from '@/lib/meta';
export const metadata=pageMeta('Your certificates','Locally earned demo completion certificates.','/certificates/');
export default function Page(){return <div className="wrap workspace"><PageHeading title="Your certificates">A record of the studies you followed through.</PageHeading><LearnerNav/><Certificates/></div>;}
