import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as L}from"./utils-BaGd3ScT.js";import{L as N}from"./label-CrYvmZvl.js";import"./index-yBjzXJbu.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D_CQjNW6.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./index-fiHjc92l.js";function i({className:y,...j}){return e.jsx("textarea",{"data-slot":"textarea",className:L("resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",y),...j})}i.__docgenInfo={description:"",methods:[],displayName:"Textarea"};const E={title:"UI/Textarea",component:i,argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},rows:{control:"number"}},args:{placeholder:"Type your message here...",disabled:!1}},r={},a={args:{defaultValue:"This is some existing text content that can be edited."}},s={args:{disabled:!0,defaultValue:"This textarea is disabled"}},t={render:()=>e.jsxs("div",{className:"grid w-full gap-1.5",children:[e.jsx(N,{htmlFor:"message",children:"Your message"}),e.jsx(i,{id:"message",placeholder:"Type your message here."}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Your message will be sent to support."})]})},o={args:{rows:8,placeholder:"Write a longer message..."}};var n,d,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    defaultValue: "This is some existing text content that can be edited."
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "This textarea is disabled"
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="grid w-full gap-1.5">\r
      <Label htmlFor="message">Your message</Label>\r
      <Textarea id="message" placeholder="Type your message here." />\r
      <p className="text-xs text-muted-foreground">\r
        Your message will be sent to support.\r
      </p>\r
    </div>
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,w,T;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    rows: 8,
    placeholder: "Write a longer message..."
  }
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const F=["Default","WithValue","Disabled","WithLabel","CustomRows"];export{o as CustomRows,r as Default,s as Disabled,t as WithLabel,a as WithValue,F as __namedExportsOrder,E as default};
