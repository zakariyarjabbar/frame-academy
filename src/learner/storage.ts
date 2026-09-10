import { award, freshData, STORAGE_KEY, validate, type LearnerData } from './model';
export type StorageLike=Pick<Storage,'getItem'|'setItem'|'removeItem'>;
export type Snapshot={data:LearnerData;ready:boolean;mode:'persistent'|'temporary'|'blocked';message:string};
export const serverSnapshot:Snapshot={data:freshData(),ready:false,mode:'persistent',message:''};
export class LearnerStore {
  private snapshot:Snapshot=serverSnapshot;private storage:StorageLike|null=null;private listeners=new Set<()=>void>();
  getSnapshot=()=>this.snapshot;
  subscribe=(callback:()=>void)=>{this.listeners.add(callback);return()=>{this.listeners.delete(callback);};};
  private publish(next:Snapshot){this.snapshot=next;for(const l of this.listeners)l();}
  hydrate(storage:StorageLike|null){this.storage=storage;try{if(!storage)throw Error('Browser storage is unavailable.');const raw=storage.getItem(STORAGE_KEY);this.publish({data:raw?validate(JSON.parse(raw)):freshData(),ready:true,mode:'persistent',message:''});}catch(error){this.publish({data:freshData(),ready:true,mode:'blocked',message:error instanceof Error?error.message:'Saved data could not be read.'});}}
  temporary=()=>this.publish({...this.snapshot,ready:true,mode:'temporary',message:'Temporary session. Changes disappear when this page is reloaded.'});
  mutate=(fn:(data:LearnerData)=>void):boolean=>{
    if(!this.snapshot.ready||this.snapshot.mode==='blocked')return false;
    try{let base=this.snapshot.data;if(this.snapshot.mode==='persistent'){const raw=this.storage?.getItem(STORAGE_KEY);base=raw?validate(JSON.parse(raw)):freshData();}
      const next=structuredClone(base);fn(next);award(next,new Date().toISOString());next.revision=base.revision+1;
      if(this.snapshot.mode==='persistent'){if(!this.storage)throw Error();this.storage.setItem(STORAGE_KEY,JSON.stringify(next));}
      this.publish({...this.snapshot,data:next,message:this.snapshot.mode==='temporary'?'Updated for this temporary session.':'Saved in this browser.'});return true;
    }catch{this.publish({...this.snapshot,mode:'blocked',message:'Your change was not saved. Browser storage may be disabled or full. Enable a temporary session and retry, or reset this demo.'});return false;}
  };
  sync=()=>{if(this.snapshot.mode==='persistent')this.hydrate(this.storage);};
  replace=(data:LearnerData)=>this.mutate(d=>Object.assign(d,data));
  reset=():boolean=>{try{if(this.storage)this.storage.removeItem(STORAGE_KEY);else if(this.snapshot.mode!=='temporary')throw Error();this.publish({data:freshData(),ready:true,mode:this.storage?'persistent':'temporary',message:'This academy’s local records were reset.'});return true;}catch{this.publish({...this.snapshot,message:'Reset could not access browser storage. You can use a temporary session.'});return false;}};
}
