"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[9261],{1639:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"sdk/index/classes/AndamioSDK","title":"AndamioSDK","description":"Main class for the Andamio SDK.","source":"@site/docs/sdk/index/classes/AndamioSDK.md","sourceDirName":"sdk/index/classes","slug":"/sdk/index/classes/AndamioSDK","permalink":"/docs-site/docs/sdk/index/classes/AndamioSDK","draft":false,"unlisted":false,"editUrl":"https://github.com/Andamio-Platform/docs-site/docs/sdk/index/classes/AndamioSDK.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"index","permalink":"/docs-site/docs/sdk/index/"},"next":{"title":"provider","permalink":"/docs-site/docs/sdk/provider/"}}');var d=r(5105),i=r(3881);const t={},l="AndamioSDK",a={},c=[{value:"Example",id:"example",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new AndamioSDK()",id:"new-andamiosdk",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"baseUrl",id:"baseurl",level:3},{value:"client",id:"client",level:3},{value:"dmtr_api_key?",id:"dmtr_api_key",level:3},{value:"network",id:"network",level:3},{value:"provider",id:"provider",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"andamiosdk",children:"AndamioSDK"})}),"\n",(0,d.jsx)(n.p,{children:"Main class for the Andamio SDK.\nProvides access to the UTXO-RPC client and provider."}),"\n",(0,d.jsx)(n.p,{children:"AndamioSDK"}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"const sdk = new AndamioSDK('https://preprod.utxorpc-v0.demeter.run:443', 'Preprod', 'dmtr_utxorpc...');\n"})}),"\n",(0,d.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,d.jsx)(n.h3,{id:"new-andamiosdk",children:"new AndamioSDK()"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"new AndamioSDK(\n   baseUrl, \n   network, \n   dmtr_api_key?): AndamioSDK\n"})}),"\n",(0,d.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"baseUrl"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"network"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Network"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"dmtr_api_key"}),"?"]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs-site/docs/sdk/index/classes/AndamioSDK",children:(0,d.jsx)(n.code,{children:"AndamioSDK"})})}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(n.h3,{id:"baseurl",children:"baseUrl"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"private readonly baseUrl: string;\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"client",children:"client"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"private client: UtxorpcClient;\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"dmtr_api_key",children:"dmtr_api_key?"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"private readonly optional dmtr_api_key: string;\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"network",children:"network"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"private readonly network: Network;\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"provider",children:"provider"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"provider: Provider;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},3881:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(8101);const d={},i=s.createContext(d);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);