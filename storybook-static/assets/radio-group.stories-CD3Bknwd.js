import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-D-XL4wuE.js";import{c as L}from"./index-DW48STyt.js";import{u as z}from"./index-fiHjc92l.js";import{a as K}from"./index-C7dFuJ1q.js";import{P as C}from"./index-D_CQjNW6.js";import{R as te,I as ae,c as H}from"./index-BMxIm575.js";import{u as se}from"./index-BTUY6lD2.js";import{u as ie}from"./index-C6c34U1C.js";import{u as ne}from"./index-BThl_10C.js";import{u as de}from"./index-vF05joQx.js";import{P as le}from"./index-bipENQT2.js";import{a as U}from"./utils-BaGd3ScT.js";import{C as ce}from"./circle-Ket4sWoF.js";import{L as m}from"./label-CrYvmZvl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./index-Dp_KpNWm.js";import"./index-COU4-G9h.js";import"./index-cK4oBH0m.js";import"./index-B7gM-Xgc.js";import"./createLucideIcon-6EnGGRcD.js";var F="Radio",[pe,W]=K(F),[ue,me]=pe(F),B=l.forwardRef((r,s)=>{const{__scopeRadio:o,name:n,checked:t=!1,required:a,disabled:i,value:x="on",onCheck:p,form:f,...b}=r,[u,v]=l.useState(null),d=z(s,j=>v(j)),h=l.useRef(!1),R=u?f||!!u.closest("form"):!0;return e.jsxs(ue,{scope:o,checked:t,disabled:i,children:[e.jsx(C.button,{type:"button",role:"radio","aria-checked":t,"data-state":Y(t),"data-disabled":i?"":void 0,disabled:i,value:x,...b,ref:d,onClick:L(r.onClick,j=>{t||p==null||p(),R&&(h.current=j.isPropagationStopped(),h.current||j.stopPropagation())})}),R&&e.jsx(xe,{control:u,bubbles:!h.current,name:n,value:x,checked:t,required:a,disabled:i,form:f,style:{transform:"translateX(-100%)"}})]})});B.displayName=F;var $="RadioIndicator",X=l.forwardRef((r,s)=>{const{__scopeRadio:o,forceMount:n,...t}=r,a=me($,o);return e.jsx(le,{present:n||a.checked,children:e.jsx(C.span,{"data-state":Y(a.checked),"data-disabled":a.disabled?"":void 0,...t,ref:s})})});X.displayName=$;var xe=r=>{const{control:s,checked:o,bubbles:n=!0,...t}=r,a=l.useRef(null),i=de(o),x=ne(s);return l.useEffect(()=>{const p=a.current,f=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(f,"checked").set;if(i!==o&&u){const v=new Event("click",{bubbles:n});u.call(p,o),p.dispatchEvent(v)}},[i,o,n]),e.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:o,...t,tabIndex:-1,ref:a,style:{...r.style,...x,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function Y(r){return r?"checked":"unchecked"}var fe=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],w="RadioGroup",[ve]=K(w,[H,W]),J=H(),Q=W(),[he,be]=ve(w),Z=l.forwardRef((r,s)=>{const{__scopeRadioGroup:o,name:n,defaultValue:t,value:a,required:i=!1,disabled:x=!1,orientation:p,dir:f,loop:b=!0,onValueChange:u,...v}=r,d=J(o),h=ie(f),[R,j]=se({prop:a,defaultProp:t,onChange:u});return e.jsx(he,{scope:o,name:n,required:i,disabled:x,value:R,onValueChange:j,children:e.jsx(te,{asChild:!0,...d,orientation:p,dir:h,loop:b,children:e.jsx(C.div,{role:"radiogroup","aria-required":i,"aria-orientation":p,"data-disabled":x?"":void 0,dir:h,...v,ref:s})})})});Z.displayName=w;var ee="RadioGroupItem",re=l.forwardRef((r,s)=>{const{__scopeRadioGroup:o,disabled:n,...t}=r,a=be(ee,o),i=a.disabled||n,x=J(o),p=Q(o),f=l.useRef(null),b=z(s,f),u=a.value===t.value,v=l.useRef(!1);return l.useEffect(()=>{const d=R=>{fe.includes(R.key)&&(v.current=!0)},h=()=>v.current=!1;return document.addEventListener("keydown",d),document.addEventListener("keyup",h),()=>{document.removeEventListener("keydown",d),document.removeEventListener("keyup",h)}},[]),e.jsx(ae,{asChild:!0,...x,focusable:!i,active:u,children:e.jsx(B,{disabled:i,required:a.required,checked:u,...p,...t,name:a.name,ref:b,onCheck:()=>a.onValueChange(t.value),onKeyDown:L(d=>{d.key==="Enter"&&d.preventDefault()}),onFocus:L(t.onFocus,()=>{var d;v.current&&((d=f.current)==null||d.click())})})})});re.displayName=ee;var Re="RadioGroupIndicator",oe=l.forwardRef((r,s)=>{const{__scopeRadioGroup:o,...n}=r,t=Q(o);return e.jsx(X,{...t,...n,ref:s})});oe.displayName=Re;var je=Z,Ne=re,ge=oe;function N({className:r,...s}){return e.jsx(je,{"data-slot":"radio-group",className:U("grid gap-3",r),...s})}function c({className:r,...s}){return e.jsx(Ne,{"data-slot":"radio-group-item",className:U("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",r),...s,children:e.jsx(ge,{"data-slot":"radio-group-indicator",className:"relative flex items-center justify-center",children:e.jsx(ce,{className:"fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"})})})}N.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};c.__docgenInfo={description:"",methods:[],displayName:"RadioGroupItem"};const Be={title:"UI/RadioGroup",component:N,argTypes:{disabled:{control:"boolean"}}},g={render:()=>e.jsxs(N,{defaultValue:"option-1",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"option-1",id:"option-1"}),e.jsx(m,{htmlFor:"option-1",children:"Option One"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"option-2",id:"option-2"}),e.jsx(m,{htmlFor:"option-2",children:"Option Two"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"option-3",id:"option-3"}),e.jsx(m,{htmlFor:"option-3",children:"Option Three"})]})]})},G={render:()=>e.jsxs(N,{defaultValue:"comfortable",className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(c,{value:"default",id:"r1",className:"mt-1"}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"r1",children:"Default"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Standard density layout"})]})]}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(c,{value:"comfortable",id:"r2",className:"mt-1"}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"r2",children:"Comfortable"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"More space between items"})]})]}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(c,{value:"compact",id:"r3",className:"mt-1"}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"r3",children:"Compact"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Less space between items"})]})]})]})},y={render:()=>e.jsxs(N,{defaultValue:"option-1",disabled:!0,children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"option-1",id:"d1"}),e.jsx(m,{htmlFor:"d1",children:"Disabled Option 1"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"option-2",id:"d2"}),e.jsx(m,{htmlFor:"d2",children:"Disabled Option 2"})]})]})},I={render:()=>e.jsxs(N,{defaultValue:"left",className:"flex gap-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"left",id:"h1"}),e.jsx(m,{htmlFor:"h1",children:"Left"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"center",id:"h2"}),e.jsx(m,{htmlFor:"h2",children:"Center"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"right",id:"h3"}),e.jsx(m,{htmlFor:"h3",children:"Right"})]})]})};var k,D,S;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-1">\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="option-1" id="option-1" />\r
        <Label htmlFor="option-1">Option One</Label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="option-2" id="option-2" />\r
        <Label htmlFor="option-2">Option Two</Label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="option-3" id="option-3" />\r
        <Label htmlFor="option-3">Option Three</Label>\r
      </div>\r
    </RadioGroup>
}`,...(S=(D=g.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var _,E,P;G.parameters={...G.parameters,docs:{...(_=G.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="comfortable" className="space-y-3">\r
      <div className="flex items-start space-x-2">\r
        <RadioGroupItem value="default" id="r1" className="mt-1" />\r
        <div>\r
          <Label htmlFor="r1">Default</Label>\r
          <p className="text-xs text-muted-foreground">Standard density layout</p>\r
        </div>\r
      </div>\r
      <div className="flex items-start space-x-2">\r
        <RadioGroupItem value="comfortable" id="r2" className="mt-1" />\r
        <div>\r
          <Label htmlFor="r2">Comfortable</Label>\r
          <p className="text-xs text-muted-foreground">More space between items</p>\r
        </div>\r
      </div>\r
      <div className="flex items-start space-x-2">\r
        <RadioGroupItem value="compact" id="r3" className="mt-1" />\r
        <div>\r
          <Label htmlFor="r3">Compact</Label>\r
          <p className="text-xs text-muted-foreground">Less space between items</p>\r
        </div>\r
      </div>\r
    </RadioGroup>
}`,...(P=(E=G.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var O,A,V;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-1" disabled>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="option-1" id="d1" />\r
        <Label htmlFor="d1">Disabled Option 1</Label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="option-2" id="d2" />\r
        <Label htmlFor="d2">Disabled Option 2</Label>\r
      </div>\r
    </RadioGroup>
}`,...(V=(A=y.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var M,T,q;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="left" className="flex gap-4">\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="left" id="h1" />\r
        <Label htmlFor="h1">Left</Label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="center" id="h2" />\r
        <Label htmlFor="h2">Center</Label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="right" id="h3" />\r
        <Label htmlFor="h3">Right</Label>\r
      </div>\r
    </RadioGroup>
}`,...(q=(T=I.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const $e=["Default","WithDescriptions","Disabled","Horizontal"];export{g as Default,y as Disabled,I as Horizontal,G as WithDescriptions,$e as __namedExportsOrder,Be as default};
