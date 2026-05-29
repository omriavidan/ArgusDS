import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{a as r}from"./utils-BaGd3ScT.js";import{b as N}from"./button-BYeNfKoi.js";import{C as _}from"./chevron-left-D0qc0RWQ.js";import{c as y}from"./createLucideIcon-6EnGGRcD.js";import{C as v}from"./chevron-right-Cxe4L9b7.js";import"./index-yBjzXJbu.js";import"./index-fiHjc92l.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BryNGYQ5.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],C=y("ellipsis",k);function c({className:i,...a}){return n.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:r("mx-auto flex w-full justify-center",i),...a})}function l({className:i,...a}){return n.jsx("ul",{"data-slot":"pagination-content",className:r("flex flex-row items-center gap-1",i),...a})}function e({...i}){return n.jsx("li",{"data-slot":"pagination-item",...i})}function t({className:i,isActive:a,size:j="icon",...I}){return n.jsx("a",{"aria-current":a?"page":void 0,"data-slot":"pagination-link","data-active":a,className:r(N({variant:a?"outline":"ghost",size:j}),i),...I})}function d({className:i,...a}){return n.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:r("gap-1 px-2.5 sm:pl-2.5",i),...a,children:[n.jsx(_,{}),n.jsx("span",{className:"hidden sm:block",children:"Previous"})]})}function m({className:i,...a}){return n.jsxs(t,{"aria-label":"Go to next page",size:"default",className:r("gap-1 px-2.5 sm:pr-2.5",i),...a,children:[n.jsx("span",{className:"hidden sm:block",children:"Next"}),n.jsx(v,{})]})}function u({className:i,...a}){return n.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:r("flex size-9 items-center justify-center",i),...a,children:[n.jsx(C,{className:"size-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]})}c.__docgenInfo={description:"",methods:[],displayName:"Pagination"};l.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};e.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};d.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};u.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};const A={title:"UI/Pagination",component:c},o={render:()=>n.jsx(c,{children:n.jsxs(l,{children:[n.jsx(e,{children:n.jsx(d,{href:"#"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(e,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(e,{children:n.jsx(u,{})}),n.jsx(e,{children:n.jsx(m,{href:"#"})})]})})},s={render:()=>n.jsx(c,{children:n.jsxs(l,{children:[n.jsx(e,{children:n.jsx(d,{href:"#"})}),n.jsx(e,{children:n.jsx(m,{href:"#"})})]})})};var g,p,P;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">1</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#" isActive>2</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">3</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationEllipsis />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>
}`,...(P=(p=o.parameters)==null?void 0:p.docs)==null?void 0:P.source}}};var x,f,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const M=["Default","Simple"];export{o as Default,s as Simple,M as __namedExportsOrder,A as default};
