import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-D-XL4wuE.js";import{c as re}from"./index-DW48STyt.js";import{u as ae}from"./index-fiHjc92l.js";import{a as se}from"./index-C7dFuJ1q.js";import{u as oe}from"./index-BTUY6lD2.js";import{u as ce}from"./index-vF05joQx.js";import{u as ne}from"./index-BThl_10C.js";import{P as X}from"./index-D_CQjNW6.js";import{a as N}from"./utils-BaGd3ScT.js";import{L as $}from"./label-CrYvmZvl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B7gM-Xgc.js";import"./index-cK4oBH0m.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";var j="Switch",[de]=se(j),[ie,le]=de(j),J=n.forwardRef((e,a)=>{const{__scopeSwitch:r,name:s,checked:o,defaultChecked:u,required:d,disabled:c,value:i="on",onCheckedChange:w,form:S,...p}=e,[l,Y]=n.useState(null),Z=ae(a,h=>Y(h)),y=n.useRef(!1),P=l?S||!!l.closest("form"):!0,[m=!1,ee]=oe({prop:o,defaultProp:u,onChange:w});return t.jsxs(ie,{scope:r,checked:m,disabled:c,children:[t.jsx(X.button,{type:"button",role:"switch","aria-checked":m,"aria-required":d,"data-state":V(m),"data-disabled":c?"":void 0,disabled:c,value:i,...p,ref:Z,onClick:re(e.onClick,h=>{ee(te=>!te),P&&(y.current=h.isPropagationStopped(),y.current||h.stopPropagation())})}),P&&t.jsx(ue,{control:l,bubbles:!y.current,name:s,value:i,checked:m,required:d,disabled:c,form:S,style:{transform:"translateX(-100%)"}})]})});J.displayName=j;var K="SwitchThumb",Q=n.forwardRef((e,a)=>{const{__scopeSwitch:r,...s}=e,o=le(K,r);return t.jsx(X.span,{"data-state":V(o.checked),"data-disabled":o.disabled?"":void 0,...s,ref:a})});Q.displayName=K;var ue=e=>{const{control:a,checked:r,bubbles:s=!0,...o}=e,u=n.useRef(null),d=ce(r),c=ne(a);return n.useEffect(()=>{const i=u.current,w=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(w,"checked").set;if(d!==r&&p){const l=new Event("click",{bubbles:s});p.call(i,r),i.dispatchEvent(l)}},[d,r,s]),t.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...o,tabIndex:-1,ref:u,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function V(e){return e?"checked":"unchecked"}var pe=J,me=Q;function v({className:e,...a}){return t.jsx(pe,{"data-slot":"switch",className:N("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e),...a,children:t.jsx(me,{"data-slot":"switch-thumb",className:N("bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")})})}v.__docgenInfo={description:"",methods:[],displayName:"Switch"};const Re={title:"UI/Switch",component:v,argTypes:{disabled:{control:"boolean"},checked:{control:"boolean"}},args:{disabled:!1}},f={},b={args:{defaultChecked:!0}},k={args:{disabled:!0}},g={args:{disabled:!0,defaultChecked:!0}},x={render:()=>t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx(v,{id:"airplane-mode"}),t.jsx($,{htmlFor:"airplane-mode",children:"Airplane Mode"})]})},C={render:()=>t.jsx("div",{className:"space-y-4",children:[{id:"notifications",label:"Push Notifications",defaultChecked:!0},{id:"marketing",label:"Marketing Emails",defaultChecked:!1},{id:"updates",label:"Product Updates",defaultChecked:!0}].map(e=>t.jsxs("div",{className:"flex items-center justify-between w-64",children:[t.jsx($,{htmlFor:e.id,className:"text-sm",children:e.label}),t.jsx(v,{id:e.id,defaultChecked:e.defaultChecked})]},e.id))})};var E,_,L;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(L=(_=f.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var R,M,D;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(D=(M=b.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var T,I,F;k.parameters={...k.parameters,docs:{...(T=k.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(F=(I=k.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var A,H,U;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...(U=(H=g.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var z,B,O;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">\r
      <Switch id="airplane-mode" />\r
      <Label htmlFor="airplane-mode">Airplane Mode</Label>\r
    </div>
}`,...(O=(B=x.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var W,q,G;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      {[{
      id: "notifications",
      label: "Push Notifications",
      defaultChecked: true
    }, {
      id: "marketing",
      label: "Marketing Emails",
      defaultChecked: false
    }, {
      id: "updates",
      label: "Product Updates",
      defaultChecked: true
    }].map(setting => <div key={setting.id} className="flex items-center justify-between w-64">\r
          <Label htmlFor={setting.id} className="text-sm">{setting.label}</Label>\r
          <Switch id={setting.id} defaultChecked={setting.defaultChecked} />\r
        </div>)}\r
    </div>
}`,...(G=(q=C.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Me=["Default","Checked","Disabled","DisabledChecked","WithLabel","SettingsGroup"];export{b as Checked,f as Default,k as Disabled,g as DisabledChecked,C as SettingsGroup,x as WithLabel,Me as __namedExportsOrder,Re as default};
