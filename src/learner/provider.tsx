'use client';
import {createContext,useContext,useEffect,useState,useSyncExternalStore,type ReactNode} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {registerAcademyTools} from './webmcp';
import {LearnerStore,serverSnapshot} from './storage';
import {STORAGE_KEY} from './model';
const Context=createContext<LearnerStore|null>(null);
export function LearnerProvider({children}:{children:ReactNode}) {
  const [store]=useState(()=>new LearnerStore());const router=useRouter();
  useEffect(()=>registerAcademyTools(store,url=>router.push(url)),[store,router]);
  useEffect(()=>{let storage:Storage|null=null;try{storage=window.localStorage;}catch{}store.hydrate(storage);const sync=(e:StorageEvent)=>{if(e.key===STORAGE_KEY||e.key===null)store.sync();};window.addEventListener('storage',sync);return()=>window.removeEventListener('storage',sync);},[store]);
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
export function useLearner(){const store=useContext(Context);if(!store)throw Error('LearnerProvider is required');const snap=useSyncExternalStore(store.subscribe,store.getSnapshot,()=>serverSnapshot);return {...snap,mutate:store.mutate,temporary:store.temporary,replace:store.replace,reset:store.reset};}
export function StorageNotice(){const s=useLearner();if(!s.ready||s.mode==='persistent')return null;return <div className="storage-notice" role="status"><span>{s.message}</span>{s.mode==='blocked'&&<button className="button small" onClick={s.temporary}>Use temporary session</button>}<Link href="/demo/">Data controls</Link></div>;}
