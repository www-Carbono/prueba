(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{3513:function(e,t,n){Promise.resolve().then(n.bind(n,7296))},7296:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var s=n(7437),r=n(2265),i=n(1375);let a=async e=>{let{email:t,password:n,username:s}=e,r=(0,i.eI)("https://xgjzaayvyresnqvqrwbj.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnanphYXl2eXJlc25xdnFyd2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMTMyMTcsImV4cCI6MjAyOTc4OTIxN30.UgCpovpE4g9ABhx7jVMkBIV1N18miADiB7mGJOCkOA4"),{error:a}=await r.auth.signUp({email:t,password:n,options:{data:{username:s}}});return null===a||(console.log(a),!1)};var o=n(7194),c=n(1575),l=()=>{let[e,t]=(0,r.useState)(!1),n=(0,o.D)(),i=e=>{e.preventDefault();let{username:n,email:s,password:r,passwordRepeat:i}=Object.fromEntries(new window.FormData(e.currentTarget));r===i&&"string"==typeof s&&"string"==typeof r&&"string"==typeof n&&a({email:s,password:r,username:n}).then(e=>{e?e&&(t(!1),window.location.href="/dashboard"):t(!0)}).catch(e=>{t(!1)})};return(0,s.jsxs)("div",{children:[e?(0,s.jsx)("p",{className:"text-center m-10",children:"El Correo introducido ya est\xe1 siendo utilizado o has introducido algun dato erroneo."}):"",n?window&&(window.location.href="/dashboard"):(0,s.jsx)("div",{children:null!==n?(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)(c.a,{})}):(0,s.jsxs)("form",{action:"",className:"flex flex-col justify-center items-center mt-10 text-black",onSubmit:e=>{i(e)},children:[(0,s.jsx)("label",{htmlFor:"username",children:"Nombre de Usuario"}),(0,s.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"John Doe"}),(0,s.jsx)("label",{htmlFor:"email",children:"Correo Electronico"}),(0,s.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Johndoe@gmail.com"}),(0,s.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a:"}),(0,s.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"***************"}),(0,s.jsx)("label",{htmlFor:"passwordRepeat",children:"Vuelve a Introducir la contrase\xf1a:"}),(0,s.jsx)("input",{type:"password",name:"passwordRepeat",id:"passwordRepeat",placeholder:"***************"}),(0,s.jsx)("button",{children:"Registrar"})]})})]})}},1575:function(e,t,n){"use strict";n.d(t,{a:function(){return r}});var s=n(7437);n(2265),n(5478);let r=()=>(0,s.jsx)("svg",{viewBox:"25 25 50 50",className:"svg",children:(0,s.jsx)("circle",{className:"circle",r:"20",cy:"50",cx:"50"})})},2060:function(e,t,n){"use strict";n.d(t,{IsUserLoggedContext:function(){return o},S:function(){return a}});var s=n(7437),r=n(2265),i=n(9649);let a=(0,r.createContext)(null),o=e=>{let{children:t}=e,[n,o]=(0,r.useState)(),c=async()=>{o(await (0,i.Z)())};return(0,r.useEffect)(()=>{c().catch(e=>{console.log(e)})},[]),(0,s.jsx)(a.Provider,{value:n,children:t})}},7194:function(e,t,n){"use strict";n.d(t,{D:function(){return i}});var s=n(2265),r=n(2060);let i=()=>(0,s.useContext)(r.S)},9649:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});let s=(0,n(1375).eI)("https://xgjzaayvyresnqvqrwbj.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnanphYXl2eXJlc25xdnFyd2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMTMyMTcsImV4cCI6MjAyOTc4OTIxN30.UgCpovpE4g9ABhx7jVMkBIV1N18miADiB7mGJOCkOA4"),r=async()=>{let{data:{user:e}}=await s.auth.getUser();return e},i=async()=>{let{error:e}=await s.auth.signOut();console.log(e)};t.Z=r},5478:function(){}},function(e){e.O(0,[227,375,971,23,744],function(){return e(e.s=3513)}),_N_E=e.O()}]);