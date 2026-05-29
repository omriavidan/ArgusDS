import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{L as i}from"./label-CrYvmZvl.js";import{I as b}from"./input-BZ9qGfR6.js";import{C as v}from"./checkbox-ClqAIjGk.js";import"./index-yBjzXJbu.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D_CQjNW6.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./index-fiHjc92l.js";import"./utils-BaGd3ScT.js";import"./index-C7dFuJ1q.js";import"./index-DW48STyt.js";import"./index-BTUY6lD2.js";import"./index-B7gM-Xgc.js";import"./index-vF05joQx.js";import"./index-BThl_10C.js";import"./index-cK4oBH0m.js";import"./index-bipENQT2.js";import"./check-BsBbdWw1.js";import"./createLucideIcon-6EnGGRcD.js";const G={title:"UI/Label",component:i,argTypes:{children:{control:"text"}},args:{children:"Label Text"}},r={},s={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(i,{htmlFor:"email",children:"Email address"}),e.jsx(b,{type:"email",id:"email",placeholder:"Email"})]})},t={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(v,{id:"terms"}),e.jsx(i,{htmlFor:"terms",className:"text-sm font-normal",children:"I agree to the terms of service"})]})},a={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsxs(i,{htmlFor:"required-field",children:["Required Field ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(b,{id:"required-field",placeholder:"This field is required"})]})};var m,o,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var d,c,n;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">\r
      <Label htmlFor="email">Email address</Label>\r
      <Input type="email" id="email" placeholder="Email" />\r
    </div>
}`,...(n=(c=s.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var p,u,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">\r
      <Checkbox id="terms" />\r
      <Label htmlFor="terms" className="text-sm font-normal">\r
        I agree to the terms of service\r
      </Label>\r
    </div>
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,f,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">\r
      <Label htmlFor="required-field">\r
        Required Field <span className="text-destructive">*</span>\r
      </Label>\r
      <Input id="required-field" placeholder="This field is required" />\r
    </div>
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const H=["Default","WithInput","WithCheckbox","Required"];export{r as Default,a as Required,t as WithCheckbox,s as WithInput,H as __namedExportsOrder,G as default};
