import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as V}from"./index-D-XL4wuE.js";import{a as X}from"./index-C7dFuJ1q.js";import{P as A}from"./index-D_CQjNW6.js";import{a as k}from"./utils-BaGd3ScT.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./index-fiHjc92l.js";var v="Progress",f=100,[q]=X(v),[z,B]=q(v),L=V.forwardRef((e,s)=>{const{__scopeProgress:l,value:t=null,max:a,getValueLabel:F=J,...G}=e;(a||a===0)&&!g(a)&&console.error(K(`${a}`,"Progress"));const n=g(a)?a:f;t!==null&&!N(t,n)&&console.error(Q(`${t}`,"Progress"));const o=N(t,n)?t:null,H=x(o)?F(o,n):void 0;return r.jsx(z,{scope:l,value:o,max:n,children:r.jsx(A.div,{"aria-valuemax":n,"aria-valuemin":0,"aria-valuenow":x(o)?o:void 0,"aria-valuetext":H,role:"progressbar","data-state":U(o,n),"data-value":o??void 0,"data-max":n,...G,ref:s})})});L.displayName=v;var O="ProgressIndicator",T=V.forwardRef((e,s)=>{const{__scopeProgress:l,...t}=e,a=B(O,l);return r.jsx(A.div,{"data-state":U(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...t,ref:s})});T.displayName=O;function J(e,s){return`${Math.round(e/s*100)}%`}function U(e,s){return e==null?"indeterminate":e===s?"complete":"loading"}function x(e){return typeof e=="number"}function g(e){return x(e)&&!isNaN(e)&&e>0}function N(e,s){return x(e)&&!isNaN(e)&&e<=s&&e>=0}function K(e,s){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${f}\`.`}function Q(e,s){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${f} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var W=L,Y=T;function i({className:e,value:s,...l}){return r.jsx(W,{"data-slot":"progress",className:k("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",e),...l,children:r.jsx(Y,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(s||0)}%)`}})})}i.__docgenInfo={description:"",methods:[],displayName:"Progress"};const ce={title:"UI/Progress",component:i,argTypes:{value:{control:{type:"range",min:0,max:100}}},args:{value:60}},c={args:{value:60,className:"w-[300px]"}},d={args:{value:0,className:"w-[300px]"}},u={args:{value:50,className:"w-[300px]"}},p={args:{value:100,className:"w-[300px]"}},m={render:()=>r.jsxs("div",{className:"w-[300px] space-y-4",children:[r.jsxs("div",{className:"space-y-1",children:[r.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[r.jsx("span",{children:"Upload"}),r.jsx("span",{children:"25%"})]}),r.jsx(i,{value:25})]}),r.jsxs("div",{className:"space-y-1",children:[r.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[r.jsx("span",{children:"Processing"}),r.jsx("span",{children:"60%"})]}),r.jsx(i,{value:60})]}),r.jsxs("div",{className:"space-y-1",children:[r.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[r.jsx("span",{children:"Complete"}),r.jsx("span",{children:"100%"})]}),r.jsx(i,{value:100})]})]})};var P,j,y;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 60,
    className: "w-[300px]"
  }
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var h,w,b;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 0,
    className: "w-[300px]"
  }
}`,...(b=(w=d.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var E,I,S;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: 50,
    className: "w-[300px]"
  }
}`,...(S=(I=u.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var _,$,R;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 100,
    className: "w-[300px]"
  }
}`,...(R=($=p.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var C,D,M;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-4">\r
      <div className="space-y-1">\r
        <div className="flex justify-between text-xs text-muted-foreground">\r
          <span>Upload</span>\r
          <span>25%</span>\r
        </div>\r
        <Progress value={25} />\r
      </div>\r
      <div className="space-y-1">\r
        <div className="flex justify-between text-xs text-muted-foreground">\r
          <span>Processing</span>\r
          <span>60%</span>\r
        </div>\r
        <Progress value={60} />\r
      </div>\r
      <div className="space-y-1">\r
        <div className="flex justify-between text-xs text-muted-foreground">\r
          <span>Complete</span>\r
          <span>100%</span>\r
        </div>\r
        <Progress value={100} />\r
      </div>\r
    </div>
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const de=["Default","Empty","Half","Full","ProgressSteps"];export{c as Default,d as Empty,p as Full,u as Half,m as ProgressSteps,de as __namedExportsOrder,ce as default};
