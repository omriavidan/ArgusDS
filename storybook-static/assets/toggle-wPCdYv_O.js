import{c as r}from"./createLucideIcon-6EnGGRcD.js";import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-D-XL4wuE.js";import{c as g}from"./index-DW48STyt.js";import{u as m}from"./index-BTUY6lD2.js";import{P as p}from"./index-D_CQjNW6.js";import{c as f}from"./index-BryNGYQ5.js";import{a as v}from"./utils-BaGd3ScT.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],V=r("bold",x);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],M=r("italic",b);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],R=r("underline",y);var h="Toggle",i=u.forwardRef((e,t)=>{const{pressed:a,defaultPressed:o=!1,onPressedChange:d,...l}=e,[n=!1,c]=m({prop:a,onChange:d,defaultProp:o});return s.jsx(p.button,{type:"button","aria-pressed":n,"data-state":n?"on":"off","data-disabled":e.disabled?"":void 0,...l,ref:t,onClick:g(e.onClick,()=>{e.disabled||c(!n)})})});i.displayName=h;var k=i;const _=f("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-2 min-w-9",sm:"h-8 px-1.5 min-w-8",lg:"h-10 px-2.5 min-w-10"}},defaultVariants:{variant:"default",size:"default"}});function j({className:e,variant:t,size:a,...o}){return s.jsx(k,{"data-slot":"toggle",className:v(_({variant:t,size:a,className:e})),...o})}j.__docgenInfo={description:"",methods:[],displayName:"Toggle"};export{V as B,M as I,j as T,R as U,i as a,_ as t};
