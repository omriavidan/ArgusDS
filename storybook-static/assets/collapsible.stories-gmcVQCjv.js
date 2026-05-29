import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as m,a as p,C as d}from"./index-BV8neluW.js";import{B as c}from"./button-BYeNfKoi.js";import{c as x}from"./createLucideIcon-6EnGGRcD.js";import"./index-yBjzXJbu.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-C7dFuJ1q.js";import"./index-BTUY6lD2.js";import"./index-B7gM-Xgc.js";import"./index-cK4oBH0m.js";import"./index-fiHjc92l.js";import"./index-D_CQjNW6.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./index-bipENQT2.js";import"./index-COU4-G9h.js";import"./index-BryNGYQ5.js";import"./utils-BaGd3ScT.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],N=x("chevrons-up-down",b);function r({...s}){return e.jsx(m,{"data-slot":"collapsible",...s})}function l({...s}){return e.jsx(p,{"data-slot":"collapsible-trigger",...s})}function i({...s}){return e.jsx(d,{"data-slot":"collapsible-content",...s})}r.__docgenInfo={description:"",methods:[],displayName:"Collapsible"};l.__docgenInfo={description:"",methods:[],displayName:"CollapsibleTrigger"};i.__docgenInfo={description:"",methods:[],displayName:"CollapsibleContent"};const B={title:"UI/Collapsible",component:r},o={render:()=>e.jsxs(r,{className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"3 satellites tracked"}),e.jsx(l,{asChild:!0,children:e.jsxs(c,{variant:"ghost",size:"sm",children:[e.jsx(N,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm",children:"LANDSAT-8"}),e.jsxs(i,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm",children:"SENTINEL-2A"}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm",children:"TERRA"})]})]})};var t,n,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[350px] space-y-2">\r
      <div className="flex items-center justify-between space-x-4 px-4">\r
        <h4 className="text-sm font-semibold">3 satellites tracked</h4>\r
        <CollapsibleTrigger asChild>\r
          <Button variant="ghost" size="sm">\r
            <ChevronsUpDown className="size-4" />\r
            <span className="sr-only">Toggle</span>\r
          </Button>\r
        </CollapsibleTrigger>\r
      </div>\r
      <div className="rounded-md border px-4 py-2 font-mono text-sm">\r
        LANDSAT-8\r
      </div>\r
      <CollapsibleContent className="space-y-2">\r
        <div className="rounded-md border px-4 py-2 font-mono text-sm">\r
          SENTINEL-2A\r
        </div>\r
        <div className="rounded-md border px-4 py-2 font-mono text-sm">\r
          TERRA\r
        </div>\r
      </CollapsibleContent>\r
    </Collapsible>
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const U=["Default"];export{o as Default,U as __namedExportsOrder,B as default};
