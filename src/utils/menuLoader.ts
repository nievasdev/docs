export interface MenuItem{id?:string;title:string;slug?:string;content:any}
export interface MenuSection{id?:string;title:string;items:MenuItem[]}
export interface MenuData{title:string;sections:MenuSection[]}
export interface MenuStructure{name:string;path:string;data?:MenuData;children?:MenuStructure[]}

function formatFolderName(n:string):string{return n.replace(/[_-]/g,' ').split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(' ')}

function normalizeForSlug(t:string):string{return t.toLowerCase().replace(/\s+/g,'-').replace(/[áàäâ]/g,'a').replace(/[éèëê]/g,'e').replace(/[íìïî]/g,'i').replace(/[óòöô]/g,'o').replace(/[úùüû]/g,'u').replace(/[ñ]/g,'n').replace(/[^a-z0-9-_/]/g,'')}

function enrichMenusWithSlugs(m:MenuStructure[]):void{for(const x of m){const p=x.path.split('/').map(s=>normalizeForSlug(s)).join('/');if(x.data){for(const sec of x.data.sections){if(!sec.id)sec.id=normalizeForSlug(sec.title);for(const itm of sec.items){if(!itm.id)itm.id=normalizeForSlug(itm.title);if(!itm.slug)itm.slug=`${p}/${normalizeForSlug(sec.id)}/${normalizeForSlug(itm.id)}`}}}if(x.children)enrichMenusWithSlugs(x.children)}}

let cachedMenus:MenuStructure[]|null=null;

export async function readMenusRecursively():Promise<MenuStructure[]>{if(cachedMenus)return cachedMenus;const modules=import.meta.glob('../data/menus/**/*.json',{eager:true}) as Record<string,{default:MenuData}>;const r:MenuStructure[]=[];for(const[p,m]of Object.entries(modules)){const rp=p.replace('../data/menus/','');const pts=rp.split('/');if(pts.length===1){const n=pts[0].replace('.json','');if(!r.find(x=>x.name===n))r.push({name:n,path:n,data:m.default})}else{const rf=pts[0];let f=r.find(x=>x.name===rf);if(!f){f={name:rf,path:rf,children:[]};r.push(f)}let cf=f;for(let i=1;i<pts.length-1;i++){const sfn=pts[i];if(!cf.children)cf.children=[];let sf=cf.children.find(c=>c.name===sfn);if(!sf){sf={name:sfn,path:pts.slice(0,i+1).join('/'),children:[]};cf.children.push(sf)}cf=sf}const fn=pts[pts.length-1].replace('.json','');if(!cf.children)cf.children=[];if(!cf.children.find(c=>c.name===fn))cf.children.push({name:fn,path:pts.slice(0,-1).join('/')+'/'+fn,data:m.default})}}enrichMenusWithSlugs(r);cachedMenus=r;return r}

export function extractAllPaths(m:MenuStructure[],pb:string[]=['Inicio']):Array<{slug:string;title:string;content:any}>{const p:Array<{slug:string;title:string;content:any}>=[];for(const x of m){const fn=formatFolderName(x.name);if(x.data){const mb=[...pb,fn];for(const sec of x.data.sections){const sb=[...mb,sec.title];for(const itm of sec.items){const bc=itm.content?.breadcrumb||[...sb,itm.title];p.push({slug:itm.slug!,title:itm.title,content:{...itm.content,breadcrumb:bc}})}}}if(x.children){const cb=[...pb,fn];p.push(...extractAllPaths(x.children,cb))}}return p}
