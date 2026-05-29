import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as r}from"./utils-BaGd3ScT.js";import"./index-yBjzXJbu.js";function i({className:a,...l}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:e.jsx("table",{"data-slot":"table",className:r("w-full caption-bottom text-sm",a),...l})})}function c({className:a,...l}){return e.jsx("thead",{"data-slot":"table-header",className:r("[&_tr]:border-b",a),...l})}function b({className:a,...l}){return e.jsx("tbody",{"data-slot":"table-body",className:r("[&_tr:last-child]:border-0",a),...l})}function N({className:a,...l}){return e.jsx("tfoot",{"data-slot":"table-footer",className:r("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",a),...l})}function s({className:a,...l}){return e.jsx("tr",{"data-slot":"table-row",className:r("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",a),...l})}function n({className:a,...l}){return e.jsx("th",{"data-slot":"table-head",className:r("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...l})}function t({className:a,...l}){return e.jsx("td",{"data-slot":"table-cell",className:r("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...l})}function j({className:a,...l}){return e.jsx("caption",{"data-slot":"table-caption",className:r("text-muted-foreground mt-4 text-sm",a),...l})}i.__docgenInfo={description:"",methods:[],displayName:"Table"};c.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};b.__docgenInfo={description:"",methods:[],displayName:"TableBody"};N.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};n.__docgenInfo={description:"",methods:[],displayName:"TableHead"};s.__docgenInfo={description:"",methods:[],displayName:"TableRow"};t.__docgenInfo={description:"",methods:[],displayName:"TableCell"};j.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const R={title:"UI/Table",component:i},f=[{id:"SAT-001",satellite:"LANDSAT-8",status:"Done",duration:"12m 45s"},{id:"SAT-002",satellite:"SENTINEL-2A",status:"Failed",duration:"8m 20s"},{id:"SAT-003",satellite:"TERRA",status:"Pending",duration:"15m 30s"},{id:"SAT-004",satellite:"AQUA",status:"Available",duration:"11m 15s"},{id:"SAT-005",satellite:"SENTINEL-1B",status:"Done",duration:"9m 40s"}],o={render:()=>e.jsxs(i,{children:[e.jsx(j,{children:"Recent satellite passes"}),e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(n,{className:"w-[100px]",children:"ID"}),e.jsx(n,{children:"Satellite"}),e.jsx(n,{children:"Status"}),e.jsx(n,{className:"text-right",children:"Duration"})]})}),e.jsx(b,{children:f.map(a=>e.jsxs(s,{children:[e.jsx(t,{className:"font-medium",children:a.id}),e.jsx(t,{children:a.satellite}),e.jsx(t,{children:a.status}),e.jsx(t,{className:"text-right",children:a.duration})]},a.id))})]})},d={render:()=>e.jsxs(i,{children:[e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(n,{children:"Satellite"}),e.jsx(n,{className:"text-right",children:"Passes"})]})}),e.jsxs(b,{children:[e.jsxs(s,{children:[e.jsx(t,{children:"LANDSAT-8"}),e.jsx(t,{className:"text-right",children:"24"})]}),e.jsxs(s,{children:[e.jsx(t,{children:"SENTINEL-2A"}),e.jsx(t,{className:"text-right",children:"18"})]}),e.jsxs(s,{children:[e.jsx(t,{children:"TERRA"}),e.jsx(t,{className:"text-right",children:"12"})]})]}),e.jsx(N,{children:e.jsxs(s,{children:[e.jsx(t,{children:"Total"}),e.jsx(t,{className:"text-right",children:"54"})]})})]})};var T,m,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Table>\r
      <TableCaption>Recent satellite passes</TableCaption>\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead className="w-[100px]">ID</TableHead>\r
          <TableHead>Satellite</TableHead>\r
          <TableHead>Status</TableHead>\r
          <TableHead className="text-right">Duration</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <TableBody>\r
        {passes.map(pass => <TableRow key={pass.id}>\r
            <TableCell className="font-medium">{pass.id}</TableCell>\r
            <TableCell>{pass.satellite}</TableCell>\r
            <TableCell>{pass.status}</TableCell>\r
            <TableCell className="text-right">{pass.duration}</TableCell>\r
          </TableRow>)}\r
      </TableBody>\r
    </Table>
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,p,u;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Table>\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead>Satellite</TableHead>\r
          <TableHead className="text-right">Passes</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <TableBody>\r
        <TableRow>\r
          <TableCell>LANDSAT-8</TableCell>\r
          <TableCell className="text-right">24</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>SENTINEL-2A</TableCell>\r
          <TableCell className="text-right">18</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>TERRA</TableCell>\r
          <TableCell className="text-right">12</TableCell>\r
        </TableRow>\r
      </TableBody>\r
      <TableFooter>\r
        <TableRow>\r
          <TableCell>Total</TableCell>\r
          <TableCell className="text-right">54</TableCell>\r
        </TableRow>\r
      </TableFooter>\r
    </Table>
}`,...(u=(p=d.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const A=["Default","WithFooter"];export{o as Default,d as WithFooter,A as __namedExportsOrder,R as default};
