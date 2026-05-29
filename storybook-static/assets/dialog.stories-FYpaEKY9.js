import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{D as t,g as n,b as s,e as l,f as d,c,d as g,a as T}from"./dialog-A5BJrpBT.js";import{B as r}from"./button-BYeNfKoi.js";import{I as m}from"./input-BZ9qGfR6.js";import{L as u}from"./label-CrYvmZvl.js";import"./index-yBjzXJbu.js";import"./index-CRGwybeR.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-fiHjc92l.js";import"./index-C7dFuJ1q.js";import"./index-COU4-G9h.js";import"./index-cK4oBH0m.js";import"./index-BTUY6lD2.js";import"./index-B7gM-Xgc.js";import"./index-NgUDoFsG.js";import"./index-D_CQjNW6.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./index-DntNaM9A.js";import"./index-CQVY33FU.js";import"./index-bipENQT2.js";import"./utils-BaGd3ScT.js";import"./x-DHeg46y0.js";import"./createLucideIcon-6EnGGRcD.js";import"./index-BryNGYQ5.js";const Y={title:"UI/Dialog",component:t},i={render:()=>e.jsxs(t,{children:[e.jsx(n,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(l,{children:[e.jsx(d,{children:"Dialog Title"}),e.jsx(c,{children:"This is a dialog description. It provides additional context for the dialog."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Dialog content goes here."})}),e.jsxs(g,{children:[e.jsx(T,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Cancel"})}),e.jsx(r,{children:"Confirm"})]})]})]})},o={render:()=>e.jsxs(t,{children:[e.jsx(n,{asChild:!0,children:e.jsx(r,{children:"Edit Profile"})}),e.jsxs(s,{className:"sm:max-w-[425px]",children:[e.jsxs(l,{children:[e.jsx(d,{children:"Edit Profile"}),e.jsx(c,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(u,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(m,{id:"name",defaultValue:"John Doe",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(u,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(m,{id:"username",defaultValue:"@johndoe",className:"col-span-3"})]})]}),e.jsx(g,{children:e.jsx(r,{type:"submit",children:"Save changes"})})]})]})},a={render:()=>e.jsxs(t,{children:[e.jsx(n,{asChild:!0,children:e.jsx(r,{variant:"destructive",children:"Delete Account"})}),e.jsxs(s,{children:[e.jsxs(l,{children:[e.jsx(d,{children:"Are you sure?"}),e.jsx(c,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(g,{children:[e.jsx(T,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Cancel"})}),e.jsx(r,{variant:"destructive",children:"Delete"})]})]})]})};var p,h,D;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger asChild>\r
        <Button variant="outline">Open Dialog</Button>\r
      </DialogTrigger>\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Dialog Title</DialogTitle>\r
          <DialogDescription>\r
            This is a dialog description. It provides additional context for the dialog.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <div className="py-4">\r
          <p className="text-sm text-muted-foreground">\r
            Dialog content goes here.\r
          </p>\r
        </div>\r
        <DialogFooter>\r
          <DialogClose asChild>\r
            <Button variant="outline">Cancel</Button>\r
          </DialogClose>\r
          <Button>Confirm</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...(D=(h=i.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var x,j,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger asChild>\r
        <Button>Edit Profile</Button>\r
      </DialogTrigger>\r
      <DialogContent className="sm:max-w-[425px]">\r
        <DialogHeader>\r
          <DialogTitle>Edit Profile</DialogTitle>\r
          <DialogDescription>\r
            Make changes to your profile here. Click save when you're done.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <div className="grid gap-4 py-4">\r
          <div className="grid grid-cols-4 items-center gap-4">\r
            <Label htmlFor="name" className="text-right">Name</Label>\r
            <Input id="name" defaultValue="John Doe" className="col-span-3" />\r
          </div>\r
          <div className="grid grid-cols-4 items-center gap-4">\r
            <Label htmlFor="username" className="text-right">Username</Label>\r
            <Input id="username" defaultValue="@johndoe" className="col-span-3" />\r
          </div>\r
        </div>\r
        <DialogFooter>\r
          <Button type="submit">Save changes</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var C,f,N;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger asChild>\r
        <Button variant="destructive">Delete Account</Button>\r
      </DialogTrigger>\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Are you sure?</DialogTitle>\r
          <DialogDescription>\r
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <DialogFooter>\r
          <DialogClose asChild>\r
            <Button variant="outline">Cancel</Button>\r
          </DialogClose>\r
          <Button variant="destructive">Delete</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...(N=(f=a.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const Z=["Default","WithForm","Destructive"];export{i as Default,a as Destructive,o as WithForm,Z as __namedExportsOrder,Y as default};
