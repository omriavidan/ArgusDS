import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as j}from"./index-D-XL4wuE.js";import{P as N}from"./index-D_CQjNW6.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";import"./index-fiHjc92l.js";var g="AspectRatio",p=j.forwardRef((a,l)=>{const{ratio:u=1/1,style:x,...f}=a;return e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/u}%`},"data-radix-aspect-ratio-wrapper":"",children:e.jsx(N.div,{...f,ref:l,style:{...x,position:"absolute",top:0,right:0,bottom:0,left:0}})})});p.displayName=g;var v=p;function s({...a}){return e.jsx(v,{"data-slot":"aspect-ratio",...a})}s.__docgenInfo={description:"",methods:[],displayName:"AspectRatio"};const _={title:"UI/AspectRatio",component:s},t={render:()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(s,{ratio:16/9,className:"bg-muted rounded-md flex items-center justify-center",children:e.jsx("span",{className:"text-sm text-muted-foreground",children:"16:9"})})})},r={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(s,{ratio:1,className:"bg-muted rounded-md flex items-center justify-center",children:e.jsx("span",{className:"text-sm text-muted-foreground",children:"1:1"})})})};var o,i,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">\r
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">\r
        <span className="text-sm text-muted-foreground">16:9</span>\r
      </AspectRatio>\r
    </div>
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="w-[200px]">\r
      <AspectRatio ratio={1} className="bg-muted rounded-md flex items-center justify-center">\r
        <span className="text-sm text-muted-foreground">1:1</span>\r
      </AspectRatio>\r
    </div>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const P=["Default","Square"];export{t as Default,r as Square,P as __namedExportsOrder,_ as default};
