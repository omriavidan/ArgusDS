import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as n}from"./checkbox-ClqAIjGk.js";import{L as S}from"./label-CrYvmZvl.js";import"./index-yBjzXJbu.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-fiHjc92l.js";import"./index-C7dFuJ1q.js";import"./index-DW48STyt.js";import"./index-BTUY6lD2.js";import"./index-B7gM-Xgc.js";import"./index-vF05joQx.js";import"./index-BThl_10C.js";import"./index-cK4oBH0m.js";import"./index-bipENQT2.js";import"./index-D_CQjNW6.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./utils-BaGd3ScT.js";import"./check-BsBbdWw1.js";import"./createLucideIcon-6EnGGRcD.js";const V={title:"UI/Checkbox",component:n,argTypes:{disabled:{control:"boolean"},checked:{control:"select",options:[!0,!1,"indeterminate"]}},args:{disabled:!1}},s={},a={args:{defaultChecked:!0}},t={args:{disabled:!0}},o={args:{disabled:!0,defaultChecked:!0}},c={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(n,{id:"terms"}),e.jsx(S,{htmlFor:"terms",className:"text-sm font-normal",children:"Accept terms and conditions"})]})},m={render:()=>e.jsx("div",{className:"space-y-2",children:["Option A","Option B","Option C"].map(r=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(n,{id:r}),e.jsx(S,{htmlFor:r,className:"text-sm font-normal",children:r})]},r))})};var i,d,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,u,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,h,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var C,k,g;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...(g=(k=o.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var N,j,v;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">\r
      <Checkbox id="terms" />\r
      <Label htmlFor="terms" className="text-sm font-normal">\r
        Accept terms and conditions\r
      </Label>\r
    </div>
}`,...(v=(j=c.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var L,O,D;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">\r
      {["Option A", "Option B", "Option C"].map(label => <div key={label} className="flex items-center space-x-2">\r
          <Checkbox id={label} />\r
          <Label htmlFor={label} className="text-sm font-normal">\r
            {label}\r
          </Label>\r
        </div>)}\r
    </div>
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const X=["Default","Checked","Disabled","DisabledChecked","WithLabel","CheckboxGroup"];export{m as CheckboxGroup,a as Checked,s as Default,t as Disabled,o as DisabledChecked,c as WithLabel,X as __namedExportsOrder,V as default};
