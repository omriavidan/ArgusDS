import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as r,e as o,f as i,c,b as l,d as T,a as S}from"./card-rbUvZheQ.js";import{B as d}from"./button-BYeNfKoi.js";import{I as m}from"./input-BZ9qGfR6.js";import{L as p}from"./label-CrYvmZvl.js";import"./index-yBjzXJbu.js";import"./utils-BaGd3ScT.js";import"./index-fiHjc92l.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BryNGYQ5.js";import"./index-D_CQjNW6.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";const O={title:"UI/Card",component:r,argTypes:{className:{control:"text",description:"Additional CSS classes"}}},a={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsxs(o,{children:[e.jsx(i,{children:"Card Title"}),e.jsx(c,{children:"Card description text goes here."})]}),e.jsx(l,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"This is the card content area. You can put any content here."})}),e.jsx(T,{children:e.jsx(d,{className:"w-full",children:"Action"})})]})},t={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsxs(o,{children:[e.jsx(i,{children:"Create account"}),e.jsx(c,{children:"Enter your details below."})]}),e.jsx(l,{children:e.jsxs("div",{className:"grid w-full items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(p,{htmlFor:"name",children:"Name"}),e.jsx(m,{id:"name",placeholder:"Enter your name"})]}),e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(p,{htmlFor:"email",children:"Email"}),e.jsx(m,{id:"email",type:"email",placeholder:"Enter your email"})]})]})}),e.jsxs(T,{className:"flex justify-between",children:[e.jsx(d,{variant:"outline",children:"Cancel"}),e.jsx(d,{children:"Submit"})]})]})},n={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsxs(o,{children:[e.jsx(i,{children:"Notifications"}),e.jsx(c,{children:"You have 3 unread messages."}),e.jsx(S,{children:e.jsx(d,{variant:"ghost",size:"sm",children:"Mark all read"})})]}),e.jsx(l,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Check your inbox for the latest updates."})})]})},s={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsx(o,{children:e.jsx(i,{children:"Simple Card"})}),e.jsx(l,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"A minimal card with just a title and content."})})]})};var x,C,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">\r
      <CardHeader>\r
        <CardTitle>Card Title</CardTitle>\r
        <CardDescription>Card description text goes here.</CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <p className="text-sm text-muted-foreground">\r
          This is the card content area. You can put any content here.\r
        </p>\r
      </CardContent>\r
      <CardFooter>\r
        <Button className="w-full">Action</Button>\r
      </CardFooter>\r
    </Card>
}`,...(u=(C=a.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var h,j,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">\r
      <CardHeader>\r
        <CardTitle>Create account</CardTitle>\r
        <CardDescription>Enter your details below.</CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <div className="grid w-full items-center gap-4">\r
          <div className="flex flex-col space-y-1.5">\r
            <Label htmlFor="name">Name</Label>\r
            <Input id="name" placeholder="Enter your name" />\r
          </div>\r
          <div className="flex flex-col space-y-1.5">\r
            <Label htmlFor="email">Email</Label>\r
            <Input id="email" type="email" placeholder="Enter your email" />\r
          </div>\r
        </div>\r
      </CardContent>\r
      <CardFooter className="flex justify-between">\r
        <Button variant="outline">Cancel</Button>\r
        <Button>Submit</Button>\r
      </CardFooter>\r
    </Card>
}`,...(f=(j=t.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var N,g,y;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">\r
      <CardHeader>\r
        <CardTitle>Notifications</CardTitle>\r
        <CardDescription>You have 3 unread messages.</CardDescription>\r
        <CardAction>\r
          <Button variant="ghost" size="sm">\r
            Mark all read\r
          </Button>\r
        </CardAction>\r
      </CardHeader>\r
      <CardContent>\r
        <p className="text-sm text-muted-foreground">\r
          Check your inbox for the latest updates.\r
        </p>\r
      </CardContent>\r
    </Card>
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var w,v,b;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">\r
      <CardHeader>\r
        <CardTitle>Simple Card</CardTitle>\r
      </CardHeader>\r
      <CardContent>\r
        <p className="text-sm text-muted-foreground">\r
          A minimal card with just a title and content.\r
        </p>\r
      </CardContent>\r
    </Card>
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const R=["Default","WithForm","WithAction","Simple"];export{a as Default,s as Simple,n as WithAction,t as WithForm,R as __namedExportsOrder,O as default};
