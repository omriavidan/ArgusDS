import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as a,g as c,b as m,e as p,f as u,c as S,d as g,a as f}from"./sheet-BnbAu6Ve.js";import{B as t}from"./button-BYeNfKoi.js";import{I as j}from"./input-BZ9qGfR6.js";import{L as x}from"./label-CrYvmZvl.js";import"./index-yBjzXJbu.js";import"./index-CRGwybeR.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-fiHjc92l.js";import"./index-C7dFuJ1q.js";import"./index-COU4-G9h.js";import"./index-cK4oBH0m.js";import"./index-BTUY6lD2.js";import"./index-B7gM-Xgc.js";import"./index-NgUDoFsG.js";import"./index-D_CQjNW6.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./index-DntNaM9A.js";import"./index-CQVY33FU.js";import"./index-bipENQT2.js";import"./utils-BaGd3ScT.js";import"./x-DHeg46y0.js";import"./createLucideIcon-6EnGGRcD.js";import"./index-BryNGYQ5.js";const K={title:"UI/Sheet",component:a},r={render:()=>e.jsxs(a,{children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Sheet"})}),e.jsxs(m,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"Edit Profile"}),e.jsx(S,{children:"Make changes to your profile here."})]}),e.jsx("div",{className:"grid gap-4 py-4",children:e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(x,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(j,{id:"name",defaultValue:"Omri Avidan",className:"col-span-3"})]})}),e.jsx(g,{children:e.jsx(f,{asChild:!0,children:e.jsx(t,{children:"Save changes"})})})]})]})},s={render:()=>e.jsxs(a,{children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Left"})}),e.jsxs(m,{side:"left",children:[e.jsxs(p,{children:[e.jsx(u,{children:"Navigation"}),e.jsx(S,{children:"Browse satellite data."})]}),e.jsxs("div",{className:"py-4 space-y-2",children:[e.jsx(t,{variant:"ghost",className:"w-full justify-start",children:"Dashboard"}),e.jsx(t,{variant:"ghost",className:"w-full justify-start",children:"Satellites"}),e.jsx(t,{variant:"ghost",className:"w-full justify-start",children:"Passes"}),e.jsx(t,{variant:"ghost",className:"w-full justify-start",children:"Settings"})]})]})]})};var i,n,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Sheet>\r
      <SheetTrigger asChild>\r
        <Button variant="outline">Open Sheet</Button>\r
      </SheetTrigger>\r
      <SheetContent>\r
        <SheetHeader>\r
          <SheetTitle>Edit Profile</SheetTitle>\r
          <SheetDescription>\r
            Make changes to your profile here.\r
          </SheetDescription>\r
        </SheetHeader>\r
        <div className="grid gap-4 py-4">\r
          <div className="grid grid-cols-4 items-center gap-4">\r
            <Label htmlFor="name" className="text-right">Name</Label>\r
            <Input id="name" defaultValue="Omri Avidan" className="col-span-3" />\r
          </div>\r
        </div>\r
        <SheetFooter>\r
          <SheetClose asChild>\r
            <Button>Save changes</Button>\r
          </SheetClose>\r
        </SheetFooter>\r
      </SheetContent>\r
    </Sheet>
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var l,h,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Sheet>\r
      <SheetTrigger asChild>\r
        <Button variant="outline">Open Left</Button>\r
      </SheetTrigger>\r
      <SheetContent side="left">\r
        <SheetHeader>\r
          <SheetTitle>Navigation</SheetTitle>\r
          <SheetDescription>Browse satellite data.</SheetDescription>\r
        </SheetHeader>\r
        <div className="py-4 space-y-2">\r
          <Button variant="ghost" className="w-full justify-start">Dashboard</Button>\r
          <Button variant="ghost" className="w-full justify-start">Satellites</Button>\r
          <Button variant="ghost" className="w-full justify-start">Passes</Button>\r
          <Button variant="ghost" className="w-full justify-start">Settings</Button>\r
        </div>\r
      </SheetContent>\r
    </Sheet>
}`,...(d=(h=s.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const Q=["Default","LeftSide"];export{r as Default,s as LeftSide,Q as __namedExportsOrder,K as default};
