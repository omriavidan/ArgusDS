import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as v}from"./index-D-XL4wuE.js";import{c as N}from"./index-DW48STyt.js";import{a as Y}from"./index-C7dFuJ1q.js";import{R as Z,I as ee,c as H}from"./index-BMxIm575.js";import{P as re}from"./index-bipENQT2.js";import{P as C}from"./index-D_CQjNW6.js";import{u as te}from"./index-C6c34U1C.js";import{u as ae}from"./index-BTUY6lD2.js";import{u as se}from"./index-COU4-G9h.js";import{a as j}from"./utils-BaGd3ScT.js";import{C as _,e as I,f as D,c as R,b as P}from"./card-rbUvZheQ.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dp_KpNWm.js";import"./index-fiHjc92l.js";import"./index-B7gM-Xgc.js";import"./index-cK4oBH0m.js";import"./index-BQ7J1hFU.js";import"./index-B6ujFmsw.js";var y="Tabs",[ne]=Y(y,[H]),O=H(),[oe,A]=ne(y),z=v.forwardRef((r,t)=>{const{__scopeTabs:c,value:a,onValueChange:o,defaultValue:d,orientation:s="horizontal",dir:u,activationMode:b="automatic",...g}=r,i=te(u),[n,p]=ae({prop:a,onChange:o,defaultProp:d});return e.jsx(oe,{scope:c,baseId:se(),value:n,onValueChange:p,orientation:s,dir:i,activationMode:b,children:e.jsx(C.div,{dir:i,"data-orientation":s,...g,ref:t})})});z.displayName=y;var K="TabsList",U=v.forwardRef((r,t)=>{const{__scopeTabs:c,loop:a=!0,...o}=r,d=A(K,c),s=O(c);return e.jsx(Z,{asChild:!0,...s,orientation:d.orientation,dir:d.dir,loop:a,children:e.jsx(C.div,{role:"tablist","aria-orientation":d.orientation,...o,ref:t})})});U.displayName=K;var B="TabsTrigger",W=v.forwardRef((r,t)=>{const{__scopeTabs:c,value:a,disabled:o=!1,...d}=r,s=A(B,c),u=O(c),b=Q(s.baseId,a),g=X(s.baseId,a),i=a===s.value;return e.jsx(ee,{asChild:!0,...u,focusable:!o,active:i,children:e.jsx(C.button,{type:"button",role:"tab","aria-selected":i,"aria-controls":g,"data-state":i?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:b,...d,ref:t,onMouseDown:N(r.onMouseDown,n=>{!o&&n.button===0&&n.ctrlKey===!1?s.onValueChange(a):n.preventDefault()}),onKeyDown:N(r.onKeyDown,n=>{[" ","Enter"].includes(n.key)&&s.onValueChange(a)}),onFocus:N(r.onFocus,()=>{const n=s.activationMode!=="manual";!i&&!o&&n&&s.onValueChange(a)})})})});W.displayName=B;var q="TabsContent",J=v.forwardRef((r,t)=>{const{__scopeTabs:c,value:a,forceMount:o,children:d,...s}=r,u=A(q,c),b=Q(u.baseId,a),g=X(u.baseId,a),i=a===u.value,n=v.useRef(i);return v.useEffect(()=>{const p=requestAnimationFrame(()=>n.current=!1);return()=>cancelAnimationFrame(p)},[]),e.jsx(re,{present:o||i,children:({present:p})=>e.jsx(C.div,{"data-state":i?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":b,hidden:!p,id:g,tabIndex:0,...s,ref:t,style:{...r.style,animationDuration:n.current?"0s":void 0},children:p&&d})})});J.displayName=q;function Q(r,t){return`${r}-trigger-${t}`}function X(r,t){return`${r}-content-${t}`}var ie=z,ce=U,de=W,le=J;function x({className:r,...t}){return e.jsx(ie,{"data-slot":"tabs",className:j("flex flex-col gap-2",r),...t})}function w({className:r,...t}){return e.jsx(ce,{"data-slot":"tabs-list",className:j("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",r),...t})}function l({className:r,...t}){return e.jsx(de,{"data-slot":"tabs-trigger",className:j("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",r),...t})}function m({className:r,...t}){return e.jsx(le,{"data-slot":"tabs-content",className:j("flex-1 outline-none",r),...t})}x.__docgenInfo={description:"",methods:[],displayName:"Tabs"};w.__docgenInfo={description:"",methods:[],displayName:"TabsList"};l.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};m.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const Pe={title:"UI/Tabs",component:x},f={render:()=>e.jsxs(x,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(w,{children:[e.jsx(l,{value:"account",children:"Account"}),e.jsx(l,{value:"password",children:"Password"})]}),e.jsx(m,{value:"account",children:e.jsxs(_,{children:[e.jsxs(I,{children:[e.jsx(D,{children:"Account"}),e.jsx(R,{children:"Make changes to your account here."})]}),e.jsx(P,{className:"text-sm text-muted-foreground",children:"Update your account settings and preferences."})]})}),e.jsx(m,{value:"password",children:e.jsxs(_,{children:[e.jsxs(I,{children:[e.jsx(D,{children:"Password"}),e.jsx(R,{children:"Change your password here."})]}),e.jsx(P,{className:"text-sm text-muted-foreground",children:"After saving, you'll be logged out."})]})})]})},T={render:()=>e.jsxs(x,{defaultValue:"overview",className:"w-[400px]",children:[e.jsxs(w,{children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"analytics",children:"Analytics"}),e.jsx(l,{value:"reports",children:"Reports"})]}),e.jsx(m,{value:"overview",className:"text-sm text-muted-foreground p-4",children:"Overview content"}),e.jsx(m,{value:"analytics",className:"text-sm text-muted-foreground p-4",children:"Analytics content"}),e.jsx(m,{value:"reports",className:"text-sm text-muted-foreground p-4",children:"Reports content"})]})},h={render:()=>e.jsxs(x,{defaultValue:"active",className:"w-[400px]",children:[e.jsxs(w,{children:[e.jsx(l,{value:"active",children:"Active"}),e.jsx(l,{value:"draft",children:"Draft"}),e.jsx(l,{value:"archived",disabled:!0,children:"Archived"})]}),e.jsx(m,{value:"active",className:"text-sm text-muted-foreground p-4",children:"Active items"}),e.jsx(m,{value:"draft",className:"text-sm text-muted-foreground p-4",children:"Draft items"})]})};var S,V,E;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">\r
      <TabsList>\r
        <TabsTrigger value="account">Account</TabsTrigger>\r
        <TabsTrigger value="password">Password</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="account">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Account</CardTitle>\r
            <CardDescription>\r
              Make changes to your account here.\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent className="text-sm text-muted-foreground">\r
            Update your account settings and preferences.\r
          </CardContent>\r
        </Card>\r
      </TabsContent>\r
      <TabsContent value="password">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Password</CardTitle>\r
            <CardDescription>\r
              Change your password here.\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent className="text-sm text-muted-foreground">\r
            After saving, you'll be logged out.\r
          </CardContent>\r
        </Card>\r
      </TabsContent>\r
    </Tabs>
}`,...(E=(V=f.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var L,M,k;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[400px]">\r
      <TabsList>\r
        <TabsTrigger value="overview">Overview</TabsTrigger>\r
        <TabsTrigger value="analytics">Analytics</TabsTrigger>\r
        <TabsTrigger value="reports">Reports</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="overview" className="text-sm text-muted-foreground p-4">\r
        Overview content\r
      </TabsContent>\r
      <TabsContent value="analytics" className="text-sm text-muted-foreground p-4">\r
        Analytics content\r
      </TabsContent>\r
      <TabsContent value="reports" className="text-sm text-muted-foreground p-4">\r
        Reports content\r
      </TabsContent>\r
    </Tabs>
}`,...(k=(M=T.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var F,$,G;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="active" className="w-[400px]">\r
      <TabsList>\r
        <TabsTrigger value="active">Active</TabsTrigger>\r
        <TabsTrigger value="draft">Draft</TabsTrigger>\r
        <TabsTrigger value="archived" disabled>Archived</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="active" className="text-sm text-muted-foreground p-4">\r
        Active items\r
      </TabsContent>\r
      <TabsContent value="draft" className="text-sm text-muted-foreground p-4">\r
        Draft items\r
      </TabsContent>\r
    </Tabs>
}`,...(G=($=h.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};const Se=["Default","ThreeTabs","WithDisabledTab"];export{f as Default,T as ThreeTabs,h as WithDisabledTab,Se as __namedExportsOrder,Pe as default};
