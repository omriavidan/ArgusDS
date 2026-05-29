import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as b}from"./index-BryNGYQ5.js";import{a as u}from"./utils-BaGd3ScT.js";import{c as z}from"./createLucideIcon-6EnGGRcD.js";import{T as C,C as k}from"./triangle-alert-BNXEG2rK.js";import{I as Y}from"./info-D7xb0scs.js";import"./index-yBjzXJbu.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],E=z("terminal",w),H=b("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function r({className:n,variant:a,..._}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:u(H({variant:a}),n),..._})}function t({className:n,...a}){return e.jsx("div",{"data-slot":"alert-title",className:u("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",n),...a})}function s({className:n,...a}){return e.jsx("div",{"data-slot":"alert-description",className:u("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",n),...a})}r.__docgenInfo={description:"",methods:[],displayName:"Alert"};t.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};s.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const U={title:"UI/Alert",component:r,argTypes:{variant:{control:"select",options:["default","destructive"]}}},i={render:()=>e.jsxs(r,{children:[e.jsx(E,{className:"size-4"}),e.jsx(t,{children:"Heads up!"}),e.jsx(s,{children:"You can add components to your app using the CLI."})]})},o={render:()=>e.jsxs(r,{variant:"destructive",children:[e.jsx(C,{className:"size-4"}),e.jsx(t,{children:"Error"}),e.jsx(s,{children:"Your session has expired. Please log in again."})]})},c={render:()=>e.jsxs(r,{children:[e.jsx(Y,{className:"size-4"}),e.jsx(t,{children:"Information"}),e.jsx(s,{children:"This feature is currently in beta. Report issues on GitHub."})]})},l={render:()=>e.jsxs(r,{children:[e.jsx(k,{className:"size-4"}),e.jsx(t,{children:"Success"}),e.jsx(s,{children:"Your changes have been saved successfully."})]})},d={render:()=>e.jsxs(r,{children:[e.jsx(t,{children:"Note"}),e.jsx(s,{children:"This is an alert without an icon."})]})};var p,m,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Alert>\r
      <Terminal className="size-4" />\r
      <AlertTitle>Heads up!</AlertTitle>\r
      <AlertDescription>\r
        You can add components to your app using the CLI.\r
      </AlertDescription>\r
    </Alert>
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,h,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive">\r
      <AlertTriangle className="size-4" />\r
      <AlertTitle>Error</AlertTitle>\r
      <AlertDescription>\r
        Your session has expired. Please log in again.\r
      </AlertDescription>\r
    </Alert>
}`,...(A=(h=o.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var f,v,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Alert>\r
      <Info className="size-4" />\r
      <AlertTitle>Information</AlertTitle>\r
      <AlertDescription>\r
        This feature is currently in beta. Report issues on GitHub.\r
      </AlertDescription>\r
    </Alert>
}`,...(j=(v=c.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var y,T,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Alert>\r
      <CheckCircle className="size-4" />\r
      <AlertTitle>Success</AlertTitle>\r
      <AlertDescription>\r
        Your changes have been saved successfully.\r
      </AlertDescription>\r
    </Alert>
}`,...(N=(T=l.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var D,I,S;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Alert>\r
      <AlertTitle>Note</AlertTitle>\r
      <AlertDescription>\r
        This is an alert without an icon.\r
      </AlertDescription>\r
    </Alert>
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const F=["Default","Destructive","InfoStyle","SuccessStyle","WithoutIcon"];export{i as Default,o as Destructive,c as InfoStyle,l as SuccessStyle,d as WithoutIcon,F as __namedExportsOrder,U as default};
