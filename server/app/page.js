(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},1017:e=>{"use strict";e.exports=require("path")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},3268:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>d,originalPathname:()=>u,pages:()=>p,routeModule:()=>x,tree:()=>c}),r(5480),r(6056),r(5866);var s=r(3191),o=r(8716),i=r(7922),n=r.n(i),a=r(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5480)),"C:\\Users\\Antonio\\Desktop\\Desarrollo Web\\spotifytracker\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,6056)),"C:\\Users\\Antonio\\Desktop\\Desarrollo Web\\spotifytracker\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\Antonio\\Desktop\\Desarrollo Web\\spotifytracker\\src\\app\\page.tsx"],u="/page",d={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2130:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,137,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},8232:(e,t,r)=>{Promise.resolve().then(r.bind(r,2105)),Promise.resolve().then(r.bind(r,5228))},3050:(e,t,r)=>{Promise.resolve().then(r.bind(r,4497))},4497:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(326);r(7577);let o=()=>s.jsx("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:s.jsx("h1",{children:"Welcome"})})},2105:(e,t,r)=>{"use strict";r.d(t,{TopBar:()=>n});var s=r(326);r(7577);var o=r(9300),i=r(5152);let n=()=>{let e=(0,i.D)();return s.jsx("button",{onClick:()=>{(0,o.k)().then(e=>{console.log(e),window.location.href="/"}).catch(e=>{console.log(e)})},className:null==e?"hidden":"",children:"Logout"})}},5228:(e,t,r)=>{"use strict";r.d(t,{IsUserLoggedContext:()=>a,S:()=>n});var s=r(326),o=r(7577),i=r(9300);let n=(0,o.createContext)(null),a=({children:e})=>{let[t,r]=(0,o.useState)(),a=async()=>{r(await (0,i.Z)())};return(0,o.useEffect)(()=>{a().catch(e=>{console.log(e)})},[]),s.jsx(n.Provider,{value:t,children:e})}},5152:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var s=r(7577),o=r(5228);let i=()=>(0,s.useContext)(o.S)},9300:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i,k:()=>o});let s=(0,r(4157).eI)("https://xgjzaayvyresnqvqrwbj.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnanphYXl2eXJlc25xdnFyd2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMTMyMTcsImV4cCI6MjAyOTc4OTIxN30.UgCpovpE4g9ABhx7jVMkBIV1N18miADiB7mGJOCkOA4"),o=async()=>{let{error:e}=await s.auth.signOut();console.log(e)},i=async()=>{let{data:{user:e}}=await s.auth.getUser();return e}},6056:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h,metadata:()=>g});var s=r(9510),o=r(5384),i=r.n(o);r(1159),r(5023);var n=r(8570);let a=(0,n.createProxy)(String.raw`C:\Users\Antonio\Desktop\Desarrollo Web\spotifytracker\src\context\isUserLogged.tsx`),{__esModule:l,$$typeof:c}=a;a.default,(0,n.createProxy)(String.raw`C:\Users\Antonio\Desktop\Desarrollo Web\spotifytracker\src\context\isUserLogged.tsx#UserContext`);let p=(0,n.createProxy)(String.raw`C:\Users\Antonio\Desktop\Desarrollo Web\spotifytracker\src\context\isUserLogged.tsx#IsUserLoggedContext`),u=(0,n.createProxy)(String.raw`C:\Users\Antonio\Desktop\Desarrollo Web\spotifytracker\src\components\topbar.tsx`),{__esModule:d,$$typeof:x}=u;u.default;let m=(0,n.createProxy)(String.raw`C:\Users\Antonio\Desktop\Desarrollo Web\spotifytracker\src\components\topbar.tsx#TopBar`),g={title:"Create Next App",description:"Generated by create next app"},h=({children:e})=>s.jsx("html",{lang:"en",children:s.jsx(p,{children:(0,s.jsxs)("body",{className:i().className,children:[s.jsx(m,{}),e]})})})},5480:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>a});var s=r(8570);let o=(0,s.createProxy)(String.raw`C:\Users\Antonio\Desktop\Desarrollo Web\spotifytracker\src\app\page.tsx`),{__esModule:i,$$typeof:n}=o;o.default;let a=(0,s.createProxy)(String.raw`C:\Users\Antonio\Desktop\Desarrollo Web\spotifytracker\src\app\page.tsx#default`)},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(6621);let o=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,102,621],()=>r(3268));module.exports=s})();