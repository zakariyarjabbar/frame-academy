import {ContactForm} from '@/learner/panels';
import {PageHeading} from '@/components/ui';
import {pageMeta} from '@/lib/meta';
export const metadata=pageMeta('Contact demo','Save a support request in this browser. No message is sent.','/contact/');
export default function Contact(){return <div className="wrap workspace"><PageHeading title="LEAVE A STUDIO NOTE.">Try the support-request flow. Your message stays in this browser and can be reviewed under Demo controls.</PageHeading><ContactForm/></div>;}
