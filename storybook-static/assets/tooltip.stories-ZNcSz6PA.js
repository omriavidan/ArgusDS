import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as o,c as r,a as e}from"./tooltip-CSmlAXqN.js";import{B as i}from"./button-BYeNfKoi.js";import{P as v}from"./plus-F8BUUDR8.js";import{I as B}from"./info-D7xb0scs.js";import"./index-yBjzXJbu.js";import"./index-D-XL4wuE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-fiHjc92l.js";import"./index-C7dFuJ1q.js";import"./index-NgUDoFsG.js";import"./index-D_CQjNW6.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./index-B7gM-Xgc.js";import"./index-COU4-G9h.js";import"./index-cK4oBH0m.js";import"./index-m4wu61_u.js";import"./index-BThl_10C.js";import"./index-CQVY33FU.js";import"./index-bipENQT2.js";import"./index-BTUY6lD2.js";import"./index-4__cYaCZ.js";import"./utils-BaGd3ScT.js";import"./index-BryNGYQ5.js";import"./createLucideIcon-6EnGGRcD.js";const X={title:"UI/Tooltip",component:o},n={render:()=>t.jsxs(o,{children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",children:"Hover me"})}),t.jsx(e,{children:t.jsx("p",{children:"This is a tooltip"})})]})},s={render:()=>t.jsxs(o,{children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{size:"icon",variant:"outline",children:t.jsx(v,{className:"size-4"})})}),t.jsx(e,{children:t.jsx("p",{children:"Add new item"})})]})},l={render:()=>t.jsxs("div",{className:"flex gap-8 items-center",children:[t.jsxs(o,{children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",size:"sm",children:"Top"})}),t.jsx(e,{side:"top",children:t.jsx("p",{children:"Top tooltip"})})]}),t.jsxs(o,{children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",size:"sm",children:"Bottom"})}),t.jsx(e,{side:"bottom",children:t.jsx("p",{children:"Bottom tooltip"})})]}),t.jsxs(o,{children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",size:"sm",children:"Left"})}),t.jsx(e,{side:"left",children:t.jsx("p",{children:"Left tooltip"})})]}),t.jsxs(o,{children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",size:"sm",children:"Right"})}),t.jsx(e,{side:"right",children:t.jsx("p",{children:"Right tooltip"})})]})]})},p={render:()=>t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("span",{className:"text-sm text-foreground",children:"Satellite ID"}),t.jsxs(o,{children:[t.jsx(r,{asChild:!0,children:t.jsx(B,{className:"size-3.5 text-muted-foreground cursor-help"})}),t.jsx(e,{children:t.jsx("p",{children:"Unique identifier assigned to each satellite"})})]})]})};var a,d,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Tooltip>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline">Hover me</Button>\r
      </TooltipTrigger>\r
      <TooltipContent>\r
        <p>This is a tooltip</p>\r
      </TooltipContent>\r
    </Tooltip>
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,T,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Tooltip>\r
      <TooltipTrigger asChild>\r
        <Button size="icon" variant="outline">\r
          <Plus className="size-4" />\r
        </Button>\r
      </TooltipTrigger>\r
      <TooltipContent>\r
        <p>Add new item</p>\r
      </TooltipContent>\r
    </Tooltip>
}`,...(h=(T=s.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var u,x,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 items-center">\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline" size="sm">Top</Button>\r
        </TooltipTrigger>\r
        <TooltipContent side="top"><p>Top tooltip</p></TooltipContent>\r
      </Tooltip>\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline" size="sm">Bottom</Button>\r
        </TooltipTrigger>\r
        <TooltipContent side="bottom"><p>Bottom tooltip</p></TooltipContent>\r
      </Tooltip>\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline" size="sm">Left</Button>\r
        </TooltipTrigger>\r
        <TooltipContent side="left"><p>Left tooltip</p></TooltipContent>\r
      </Tooltip>\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline" size="sm">Right</Button>\r
        </TooltipTrigger>\r
        <TooltipContent side="right"><p>Right tooltip</p></TooltipContent>\r
      </Tooltip>\r
    </div>
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,C,f;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-1">\r
      <span className="text-sm text-foreground">Satellite ID</span>\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Info className="size-3.5 text-muted-foreground cursor-help" />\r
        </TooltipTrigger>\r
        <TooltipContent>\r
          <p>Unique identifier assigned to each satellite</p>\r
        </TooltipContent>\r
      </Tooltip>\r
    </div>
}`,...(f=(C=p.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const Y=["Default","OnIcon","Sides","WithInfoIcon"];export{n as Default,s as OnIcon,l as Sides,p as WithInfoIcon,Y as __namedExportsOrder,X as default};
