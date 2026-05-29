import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{S as j}from"./index-fiHjc92l.js";import{a as n}from"./utils-BaGd3ScT.js";import{C as I}from"./chevron-right-Cxe4L9b7.js";import"./index-yBjzXJbu.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createLucideIcon-6EnGGRcD.js";function o({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function u({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:n("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...a})}function t({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:n("inline-flex items-center gap-1.5",e),...a})}function m({asChild:e,className:a,...i}){const g=e?j:"a";return r.jsx(g,{"data-slot":"breadcrumb-link",className:n("hover:text-foreground transition-colors",a),...i})}function l({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:n("text-foreground font-normal",e),...a})}function c({children:e,className:a,...i}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:n("[&>svg]:size-3.5",a),...i,children:e??r.jsx(I,{})})}o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};t.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};const v={title:"UI/Breadcrumb",component:o},s={render:()=>r.jsx(o,{children:r.jsxs(u,{children:[r.jsx(t,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(c,{}),r.jsx(t,{children:r.jsx(m,{href:"/satellites",children:"Satellites"})}),r.jsx(c,{}),r.jsx(t,{children:r.jsx(l,{children:"LANDSAT-8"})})]})})},d={render:()=>r.jsx(o,{children:r.jsxs(u,{children:[r.jsx(t,{children:r.jsx(m,{href:"/",children:"Dashboard"})}),r.jsx(c,{}),r.jsx(t,{children:r.jsx(l,{children:"Settings"})})]})})};var b,p,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Breadcrumb>\r
      <BreadcrumbList>\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="/">Home</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="/satellites">Satellites</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>LANDSAT-8</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>\r
    </Breadcrumb>
}`,...(B=(p=s.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var x,h,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Breadcrumb>\r
      <BreadcrumbList>\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>Settings</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>\r
    </Breadcrumb>
}`,...(f=(h=d.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const A=["Default","Simple"];export{s as Default,d as Simple,A as __namedExportsOrder,v as default};
