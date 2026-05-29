import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as u,r as F}from"./index-D-XL4wuE.js";import{a as Z}from"./index-C7dFuJ1q.js";import{P as z}from"./index-D_CQjNW6.js";import{I as ee,c as L,R as re}from"./index-BMxIm575.js";import{a as ae,t as le,B as oe,I as te,U as se}from"./toggle-wPCdYv_O.js";import{u as B}from"./index-BTUY6lD2.js";import{u as ne}from"./index-C6c34U1C.js";import{a as O}from"./utils-BaGd3ScT.js";import{c as j}from"./createLucideIcon-6EnGGRcD.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./index-fiHjc92l.js";import"./index-DW48STyt.js";import"./index-Dp_KpNWm.js";import"./index-COU4-G9h.js";import"./index-cK4oBH0m.js";import"./index-B7gM-Xgc.js";import"./index-BryNGYQ5.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],b=j("align-center",ie);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3 6h18",key:"d0wm0j"}]],ue=j("align-justify",ge);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],y=j("align-left",ce);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],N=j("align-right",pe);var m="ToggleGroup",[U]=Z(m,[L]),J=L(),A=u.forwardRef((r,a)=>{const{type:l,...o}=r;if(l==="single"){const t=o;return e.jsx(de,{...t,ref:a})}if(l==="multiple"){const t=o;return e.jsx(me,{...t,ref:a})}throw new Error(`Missing prop \`type\` expected on \`${m}\``)});A.displayName=m;var[q,K]=U(m),de=u.forwardRef((r,a)=>{const{value:l,defaultValue:o,onValueChange:t=()=>{},...s}=r,[g,n]=B({prop:l,defaultProp:o,onChange:t});return e.jsx(q,{scope:r.__scopeToggleGroup,type:"single",value:g?[g]:[],onItemActivate:n,onItemDeactivate:u.useCallback(()=>n(""),[n]),children:e.jsx(Q,{...s,ref:a})})}),me=u.forwardRef((r,a)=>{const{value:l,defaultValue:o,onValueChange:t=()=>{},...s}=r,[g=[],n]=B({prop:l,defaultProp:o,onChange:t}),c=u.useCallback(p=>n((d=[])=>[...d,p]),[n]),I=u.useCallback(p=>n((d=[])=>d.filter(Y=>Y!==p)),[n]);return e.jsx(q,{scope:r.__scopeToggleGroup,type:"multiple",value:g,onItemActivate:c,onItemDeactivate:I,children:e.jsx(Q,{...s,ref:a})})});A.displayName=m;var[ve,fe]=U(m),Q=u.forwardRef((r,a)=>{const{__scopeToggleGroup:l,disabled:o=!1,rovingFocus:t=!0,orientation:s,dir:g,loop:n=!0,...c}=r,I=J(l),p=ne(g),d={role:"group",dir:p,...c};return e.jsx(ve,{scope:l,rovingFocus:t,disabled:o,children:t?e.jsx(re,{asChild:!0,...I,orientation:s,dir:p,loop:n,children:e.jsx(z.div,{...d,ref:a})}):e.jsx(z.div,{...d,ref:a})})}),x="ToggleGroupItem",W=u.forwardRef((r,a)=>{const l=K(x,r.__scopeToggleGroup),o=fe(x,r.__scopeToggleGroup),t=J(r.__scopeToggleGroup),s=l.value.includes(r.value),g=o.disabled||r.disabled,n={...r,pressed:s,disabled:g},c=u.useRef(null);return o.rovingFocus?e.jsx(ee,{asChild:!0,...t,focusable:!g,active:s,ref:c,children:e.jsx(_,{...n,ref:a})}):e.jsx(_,{...n,ref:a})});W.displayName=x;var _=u.forwardRef((r,a)=>{const{__scopeToggleGroup:l,value:o,...t}=r,s=K(x,l),g={role:"radio","aria-checked":r.pressed,"aria-pressed":void 0},n=s.type==="single"?g:void 0;return e.jsx(ae,{...n,...t,ref:a,onPressedChange:c=>{c?s.onItemActivate(o):s.onItemDeactivate(o)}})}),he=A,Ge=W;const X=F.createContext({size:"default",variant:"default"});function v({className:r,variant:a,size:l,children:o,...t}){return e.jsx(he,{"data-slot":"toggle-group","data-variant":a,"data-size":l,className:O("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",r),...t,children:e.jsx(X.Provider,{value:{variant:a,size:l},children:o})})}function i({className:r,children:a,variant:l,size:o,...t}){const s=F.useContext(X);return e.jsx(Ge,{"data-slot":"toggle-group-item","data-variant":s.variant||l,"data-size":s.size||o,className:O(le({variant:s.variant||l,size:s.size||o}),"min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",r),...t,children:a})}v.__docgenInfo={description:"",methods:[],displayName:"ToggleGroup"};i.__docgenInfo={description:"",methods:[],displayName:"ToggleGroupItem"};const $e={title:"UI/ToggleGroup",component:v,argTypes:{type:{control:"select",options:["single","multiple"]},variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]},disabled:{control:"boolean"}}},f={args:{type:"single",defaultValue:"center"},render:r=>e.jsxs(v,{...r,children:[e.jsx(i,{value:"left","aria-label":"Align left",children:e.jsx(y,{className:"size-4"})}),e.jsx(i,{value:"center","aria-label":"Align center",children:e.jsx(b,{className:"size-4"})}),e.jsx(i,{value:"right","aria-label":"Align right",children:e.jsx(N,{className:"size-4"})})]})},h={args:{type:"multiple",defaultValue:["bold"]},render:r=>e.jsxs(v,{...r,children:[e.jsx(i,{value:"bold","aria-label":"Toggle bold",children:e.jsx(oe,{className:"size-4"})}),e.jsx(i,{value:"italic","aria-label":"Toggle italic",children:e.jsx(te,{className:"size-4"})}),e.jsx(i,{value:"underline","aria-label":"Toggle underline",children:e.jsx(se,{className:"size-4"})})]})},G={args:{type:"single",variant:"outline",defaultValue:"left"},render:r=>e.jsxs(v,{...r,children:[e.jsx(i,{value:"left","aria-label":"Align left",children:e.jsx(y,{className:"size-4"})}),e.jsx(i,{value:"center","aria-label":"Align center",children:e.jsx(b,{className:"size-4"})}),e.jsx(i,{value:"right","aria-label":"Align right",children:e.jsx(N,{className:"size-4"})}),e.jsx(i,{value:"justify","aria-label":"Justify",children:e.jsx(ue,{className:"size-4"})})]})},T={args:{type:"single",disabled:!0,defaultValue:"center"},render:r=>e.jsxs(v,{...r,children:[e.jsx(i,{value:"left","aria-label":"Align left",children:e.jsx(y,{className:"size-4"})}),e.jsx(i,{value:"center","aria-label":"Align center",children:e.jsx(b,{className:"size-4"})}),e.jsx(i,{value:"right","aria-label":"Align right",children:e.jsx(N,{className:"size-4"})})]})};var C,P,M;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: "single",
    defaultValue: "center"
  },
  render: args => <ToggleGroup {...args}>\r
      <ToggleGroupItem value="left" aria-label="Align left">\r
        <AlignLeft className="size-4" />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="center" aria-label="Align center">\r
        <AlignCenter className="size-4" />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="right" aria-label="Align right">\r
        <AlignRight className="size-4" />\r
      </ToggleGroupItem>\r
    </ToggleGroup>
}`,...(M=(P=f.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var k,R,V;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: "multiple",
    defaultValue: ["bold"]
  },
  render: args => <ToggleGroup {...args}>\r
      <ToggleGroupItem value="bold" aria-label="Toggle bold">\r
        <Bold className="size-4" />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="italic" aria-label="Toggle italic">\r
        <Italic className="size-4" />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="underline" aria-label="Toggle underline">\r
        <Underline className="size-4" />\r
      </ToggleGroupItem>\r
    </ToggleGroup>
}`,...(V=(R=h.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var S,w,H;G.parameters={...G.parameters,docs:{...(S=G.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: "single",
    variant: "outline",
    defaultValue: "left"
  },
  render: args => <ToggleGroup {...args}>\r
      <ToggleGroupItem value="left" aria-label="Align left">\r
        <AlignLeft className="size-4" />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="center" aria-label="Align center">\r
        <AlignCenter className="size-4" />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="right" aria-label="Align right">\r
        <AlignRight className="size-4" />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="justify" aria-label="Justify">\r
        <AlignJustify className="size-4" />\r
      </ToggleGroupItem>\r
    </ToggleGroup>
}`,...(H=(w=G.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var E,D,$;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: "single",
    disabled: true,
    defaultValue: "center"
  },
  render: args => <ToggleGroup {...args}>\r
      <ToggleGroupItem value="left" aria-label="Align left">\r
        <AlignLeft className="size-4" />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="center" aria-label="Align center">\r
        <AlignCenter className="size-4" />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="right" aria-label="Align right">\r
        <AlignRight className="size-4" />\r
      </ToggleGroupItem>\r
    </ToggleGroup>
}`,...($=(D=T.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const Fe=["Single","Multiple","Outline","Disabled"];export{T as Disabled,h as Multiple,G as Outline,f as Single,Fe as __namedExportsOrder,$e as default};
