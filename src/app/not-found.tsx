import Link from 'next/link';
import {Icon,Mark} from '@/components/ui';
export default function NotFound(){return <div className="wrap section"><div className="empty-state"><Mark/><h1>OUT OF FRAME.</h1><p>This page or course doesn’t exist. Return to the catalog and find a study that catches your eye.</p><Link className="button primary" href="/courses/">Explore the courses<Icon name="arrow"/></Link></div></div>;}
