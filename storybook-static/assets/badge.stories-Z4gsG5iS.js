import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as W}from"./index-fiHjc92l.js";import{c as _}from"./index-BryNGYQ5.js";import{a as F}from"./utils-BaGd3ScT.js";import{C as O,T as P}from"./triangle-alert-BNXEG2rK.js";import{X}from"./x-DHeg46y0.js";import"./index-yBjzXJbu.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createLucideIcon-6EnGGRcD.js";const q=_("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function r({className:V,variant:A,asChild:T=!1,...E}){const I=T?W:"span";return e.jsx(I,{"data-slot":"badge",className:F(q({variant:A}),V),...E})}r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Z={title:"UI/Badge",component:r,argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"],description:"The visual style variant of the badge"}},args:{variant:"default"}},a={args:{children:"Badge"}},s={args:{variant:"secondary",children:"Secondary"}},n={args:{variant:"destructive",children:"Destructive"}},t={args:{variant:"outline",children:"Outline"}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(O,{className:"size-3"}),"Verified"]})}},o={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"destructive",children:"Error"}),e.jsx(r,{variant:"outline",children:"Outline"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(r,{variant:"default",children:[e.jsx(O,{className:"size-3"}),"Active"]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(X,{className:"size-3"}),"Failed"]}),e.jsxs(r,{variant:"secondary",children:[e.jsx(P,{className:"size-3"}),"Warning"]}),e.jsx(r,{variant:"outline",children:"Pending"})]})};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Badge"
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...(p=(v=s.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var m,f,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Destructive"
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,y,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var B,j,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <CheckCircle className="size-3" />\r
        Verified\r
      </>
  }
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var N,w,z;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">\r
      <Badge variant="default">Default</Badge>\r
      <Badge variant="secondary">Secondary</Badge>\r
      <Badge variant="destructive">Error</Badge>\r
      <Badge variant="outline">Outline</Badge>\r
    </div>
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var C,D,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">\r
      <Badge variant="default">\r
        <CheckCircle className="size-3" />\r
        Active\r
      </Badge>\r
      <Badge variant="destructive">\r
        <X className="size-3" />\r
        Failed\r
      </Badge>\r
      <Badge variant="secondary">\r
        <AlertTriangle className="size-3" />\r
        Warning\r
      </Badge>\r
      <Badge variant="outline">Pending</Badge>\r
    </div>
}`,...(k=(D=d.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const $=["Default","Secondary","Destructive","Outline","WithIcon","AllVariants","StatusBadges"];export{o as AllVariants,a as Default,n as Destructive,t as Outline,s as Secondary,d as StatusBadges,i as WithIcon,$ as __namedExportsOrder,Z as default};
