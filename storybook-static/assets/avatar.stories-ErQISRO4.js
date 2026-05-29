import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{A as r,b as j,a as e}from"./avatar-ClFtSOSk.js";import"./index-yBjzXJbu.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C7dFuJ1q.js";import"./index-B7gM-Xgc.js";import"./index-cK4oBH0m.js";import"./index-D_CQjNW6.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./index-fiHjc92l.js";import"./utils-BaGd3ScT.js";const H={title:"UI/Avatar",component:r},s={render:()=>a.jsxs(r,{children:[a.jsx(j,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(e,{children:"CN"})]})},t={render:()=>a.jsxs(r,{children:[a.jsx(j,{src:"/broken-image.jpg",alt:"broken"}),a.jsx(e,{children:"OA"})]})},c={render:()=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(r,{className:"size-6",children:a.jsx(e,{className:"text-xs",children:"S"})}),a.jsx(r,{children:a.jsx(e,{children:"MD"})}),a.jsx(r,{className:"size-14",children:a.jsx(e,{children:"LG"})})]})},n={render:()=>a.jsx("div",{className:"flex -space-x-3",children:["AB","CD","EF","GH"].map(l=>a.jsx(r,{className:"border-2 border-background",children:a.jsx(e,{children:l})},l))})};var o,i,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Avatar>\r
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\r
      <AvatarFallback>CN</AvatarFallback>\r
    </Avatar>
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,p,v;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Avatar>\r
      <AvatarImage src="/broken-image.jpg" alt="broken" />\r
      <AvatarFallback>OA</AvatarFallback>\r
    </Avatar>
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var A,x,b;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Avatar className="size-6">\r
        <AvatarFallback className="text-xs">S</AvatarFallback>\r
      </Avatar>\r
      <Avatar>\r
        <AvatarFallback>MD</AvatarFallback>\r
      </Avatar>\r
      <Avatar className="size-14">\r
        <AvatarFallback>LG</AvatarFallback>\r
      </Avatar>\r
    </div>
}`,...(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var h,k,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex -space-x-3">\r
      {["AB", "CD", "EF", "GH"].map(initials => <Avatar key={initials} className="border-2 border-background">\r
          <AvatarFallback>{initials}</AvatarFallback>\r
        </Avatar>)}\r
    </div>
}`,...(g=(k=n.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const L=["WithImage","Fallback","Sizes","Group"];export{t as Fallback,n as Group,c as Sizes,s as WithImage,L as __namedExportsOrder,H as default};
