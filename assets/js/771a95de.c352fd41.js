/*! For license information please see 771a95de.c352fd41.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[440577],{21520:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=o(785893),i=o(511151);const r={id:"profiling",title:"Profiling Backstage",description:"Finding performance bottlenecks in your Backstage application"},a="Backend",c={id:"tooling/local-dev/profiling",title:"Profiling Backstage",description:"Finding performance bottlenecks in your Backstage application",source:"@site/../docs/tooling/local-dev/profiling.md",sourceDirName:"tooling/local-dev",slug:"/tooling/local-dev/profiling",permalink:"/docs/tooling/local-dev/profiling",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tooling/local-dev/profiling.md",tags:[],version:"current",frontMatter:{id:"profiling",title:"Profiling Backstage",description:"Finding performance bottlenecks in your Backstage application"},sidebar:"docs",previous:{title:"Debugging Backstage",permalink:"/docs/tooling/local-dev/debugging"},next:{title:"Package Metadata",permalink:"/docs/tooling/package-metadata"}},s={},l=[{value:"Stress testing",id:"stress-testing",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Profiling can help you find performance bottlenecks in your code. This guide will show you how to profile\nboth the backend and frontend of your Backstage application."}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"backend",children:"Backend"})}),"\n",(0,t.jsxs)(n.p,{children:["To profile the backend, start the backend with the ",(0,t.jsx)(n.code,{children:"--inspect"})," flag:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"yarn workspace backend start --inspect\n# or `yarn workspace example-backend start --inspect` in this repository\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next you can use the Chrome DevTools to profile the backend by navigating to ",(0,t.jsx)(n.code,{children:"chrome://inspect"})," and\nclicking the ",(0,t.jsx)(n.code,{children:"Open dedicated DevTools for Node"})," link."]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Performance"})," tab, you can start a new recording by clicking the ",(0,t.jsx)(n.code,{children:"Start"})," button. After you\nhave recorded some data, you can stop the recording by clicking the ",(0,t.jsx)(n.code,{children:"Stop"})," button. The recording\nwill show you a flame graph of the backend's execution, which can help you identify performance issues."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also use the ",(0,t.jsx)(n.code,{children:"Memory"})," tab to profile the backend's memory usage and find potential memory leaks."]}),"\n",(0,t.jsx)(n.p,{children:"It's recommended to start profiling with short periods of time to avoid too much data being collected."}),"\n",(0,t.jsx)(n.h2,{id:"stress-testing",children:"Stress testing"}),"\n",(0,t.jsxs)(n.p,{children:["To get more out of profiling, you might want to introduce additional load to your application with some tooling.\nOne such tool is called ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/autocannon",children:"AutoCannon"})," which can be used to stress test the\nAPI endpoints of your application. You can install it globally with ",(0,t.jsx)(n.code,{children:"npm install -g autocannon"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To be able to access the API endpoints, you must configure a static token for the backend. In your\n",(0,t.jsx)(n.code,{children:"app-config.yaml"})," file, add the following configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"backend:\n  auth:\n    externalAccess:\n      - type: static\n        options:\n          token: autocannon12345\n          subject: autocannon\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See more information in the ",(0,t.jsx)(n.a,{href:"/docs/auth/service-to-service-auth",children:"Service to Service Auth"})," documentation.\nTo run the stress test, you can use the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'autocannon -H "Authorization=Bearer autocannon12345" http://localhost:7007/api/catalog/entities\n'})}),"\n",(0,t.jsx)(n.p,{children:"See more command options in the AutoCannon documentation."}),"\n",(0,t.jsx)(n.h1,{id:"frontend",children:"Frontend"}),"\n",(0,t.jsxs)(n.p,{children:["Profiling the frontend can be done by using the ",(0,t.jsx)(n.code,{children:"React DevTools"})," extension for Chrome or Firefox.\nThe extension is available for download from the Chrome Web Store or the Firefox Add-ons website."]}),"\n",(0,t.jsxs)(n.p,{children:["To start profiling, start the application with ",(0,t.jsx)(n.code,{children:"yarn dev"})," and open inspector in the browser. In the\n",(0,t.jsx)(n.code,{children:"Profiler"})," tab (far to the right), click the ",(0,t.jsx)(n.code,{children:"Start profiling"})," button to start recording. After\nyou have recorded some data by navigating through the page, click the ",(0,t.jsx)(n.code,{children:"Stop profiling"})," button to stop the recording."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,n,o)=>{var t=o(667294),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var t,r={},l=null,d=null;for(t in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,t)&&!s.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:d,props:r,_owner:c.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},785893:(e,n,o)=>{e.exports=o(675251)},511151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>a});var t=o(667294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);