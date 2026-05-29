import{j as p}from"./jsx-runtime-Cf8x2fCZ.js";import{I as O}from"./input-BZ9qGfR6.js";import{L as R}from"./label-CrYvmZvl.js";import"./index-yBjzXJbu.js";import"./utils-BaGd3ScT.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D_CQjNW6.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./index-fiHjc92l.js";const X={title:"UI/Input",component:O,argTypes:{type:{control:"select",options:["text","email","password","number","search","tel","url","file"],description:"The HTML input type"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"}},args:{type:"text",placeholder:"Enter text...",disabled:!1}},e={args:{placeholder:"Enter your text..."}},r={args:{type:"email",placeholder:"name@example.com"}},a={args:{type:"password",placeholder:"Enter password"}},s={args:{defaultValue:"Hello world"}},o={args:{disabled:!0,placeholder:"Disabled input"}},t={args:{type:"file"}},l={args:{"aria-invalid":!0,defaultValue:"Invalid value"}},c={render:()=>p.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[p.jsx(R,{htmlFor:"email",children:"Email"}),p.jsx(O,{type:"email",id:"email",placeholder:"Email"})]})},n={args:{type:"search",placeholder:"Search...",className:"w-64"}};var i,d,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your text..."
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "name@example.com"
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,b,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password"
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,w,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world"
  }
}`,...(E=(w=s.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var S,v,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Disabled input"
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var L,D,V;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: "file"
  }
}`,...(V=(D=t.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var j,W,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    "aria-invalid": true,
    defaultValue: "Invalid value"
  }
}`,...(F=(W=l.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var N,H,P;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">\r
      <Label htmlFor="email">Email</Label>\r
      <Input type="email" id="email" placeholder="Email" />\r
    </div>
}`,...(P=(H=c.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var T,_,M;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: "search",
    placeholder: "Search...",
    className: "w-64"
  }
}`,...(M=(_=n.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const Y=["Default","Email","Password","WithValue","Disabled","File","Invalid","WithLabel","Search"];export{e as Default,o as Disabled,r as Email,t as File,l as Invalid,a as Password,n as Search,c as WithLabel,s as WithValue,Y as __namedExportsOrder,X as default};
