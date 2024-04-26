import{r as s,j as e,s as P,b as Q,c as R,R as G,L as q,g as B}from"./index-BHJUGa5f.js";function D({setRequest:n,endTime:l,setQuestion:t,data:c,answer:r,question:o}){const[a,m]=s.useState("");return s.useEffect(()=>{l&&setInterval(()=>{const d=new Date(Date.now()),x=l.getTime()-d.getTime();let b=Math.floor(x/1e3)%60,p=Math.floor(x/1e3/60)%60;m(`${p} min : ${b} ss`),console.log(p,b),p==0&&b==0&&n(!0)},1e3)},[l]),e.jsxs("div",{className:"flex flex-col gap-4 shadow-md rounded-md h-3/4 p-2 m-4",children:[e.jsxs("div",{className:"font-bold",children:["Question ",o+1," of 30"]}),e.jsx("span",{id:"timer",children:a}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:[...Array(30).keys()].map((d,x)=>(console.log(o,d),e.jsx("div",{onClick:()=>t(x),className:"rounded-full max-h-3/4 px-5 py-3 w-max cursor-pointer "+(d==o?"bg-blue-500 text-white":r.has(d)&&r.get(d).visited?r.get(d).answer=="e"?"bg-slate-200":"bg-green-500 text-white":"bg-red-100"),children:d+1})))}),e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsxs("div",{children:["Not Visited : ",e.jsx("div",{className:"rounded-full max-h-3/4 px-3 py-3 w-max bg-red-100"})]}),e.jsxs("div",{children:["Answered :  ",e.jsx("div",{className:"rounded-full max-h-3/4 px-3 py-3 w-max bg-green-400"})]}),e.jsxs("div",{children:["Current :  ",e.jsx("div",{className:"rounded-full max-h-3/4 px-3 py-3 w-max bg-blue-400 text-white"})]}),e.jsxs("div",{children:["Not Answered :  ",e.jsx("div",{className:"rounded-full max-h-3/4 px-3 py-3 w-max bg-slate-200"})]})]}),e.jsxs("div",{className:"flex gap-4 flex-col font-light",children:[e.jsx("p",{className:"font-bold",children:"Note:"}),e.jsx("p",{children:"1. If you want to submit, navigate to Question 30"}),e.jsx("p",{children:"2. Exiting of full screen will block you from attending quiz"})]})]})}const Z=n=>Object.fromEntries(n.entries());function $({request:n,data_:l,answer:t,setAnswer:c,requesting:r,data:o,question:a,setQuestion:m,setData:d}){const[x,b]=s.useState(!1),[p,k]=s.useState(null),[E,v]=s.useState(!1),y=(i,j)=>{c(S=>{let C=null;return S.has(i)?C=S.get(i):C={answer:"e",visited:!0},C.answer=String.fromCharCode(65+j).toLocaleLowerCase(),S.set(i,C),new Map(S)})};s.useEffect(()=>{l._id&&localStorage.setItem(l._id,JSON.stringify(Z(t)))},[t]),s.useEffect(()=>{n&&(async()=>{console.log("Last minute"),v(!0);const i=await u();v(!1),i.success?setTimeout(()=>{window.location.reload()},[3e3]):(console.log(i),window.location.reload())})()},[n]);const u=async()=>await P(t),L=()=>{m(i=>i!=0?i-1:i)},F=()=>{m(i=>i!=29?i+1:i)};return s.useEffect(()=>{k(null)},[x]),e.jsxs("div",{className:"w-3/4 shadow-md rounded-md justify-center flex flex-col",children:[x&&e.jsxs("div",{className:" h-screen flex items-center justify-center w-screen",style:{zIndex:3,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",backgroundColor:"rgba(0, 0, 0, 0.5)"},children:["   ",e.jsx("div",{className:"bg-white p-4 rounded-lg shadow-md",children:p===null?e.jsxs("div",{className:"flex flex-col gap-4 ",children:[e.jsx("div",{className:"text-lg font-bold",children:"Are you sure about submitting the test ?"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:()=>b(!1),className:"p-2 rounded-lg bg-red-400 text-white",children:"Continue test"}),e.jsxs("button",{onClick:async()=>{v(!0);const i=await u();v(!1),i.success?(k(!0),setTimeout(()=>{window.location.reload()},[3e3])):k(!1)},className:"p-2 rounded-lg bg-green-400 text-white "+(E&&"bg-green-200"),disabled:E,children:[" ",E?"Please Wait":"Submit test"]})]})]}):e.jsx(e.Fragment,{children:p?e.jsxs("div",{className:"p-2 items-center flex flex-col gap-4",children:[e.jsx("p",{className:"text-lg font-bold",children:"Test Completed Successfully"}),e.jsx("img",{height:"100px",src:"check-mark-verified.gif"})]}):e.jsxs("div",{className:"p-2 items-center flex flex-col gap-4",children:[e.jsx("p",{className:"text-lg font-bold",children:"Something went wrong"}),e.jsx("img",{style:{height:"200px",width:"200px"},src:"close-refuse.gif"}),e.jsx("button",{className:"p-3 rounded-lg bg-black text-white",onClick:()=>b(!1),children:"Go back"})]})})})]}),o&&Object.keys(o).length&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-4 h-3/4 p-2 overflow-y-scroll",children:[e.jsxs("div",{className:"text-lg font-bold",children:[a+1," . ",o.description.split(`
`).map(i=>e.jsx("div",{children:i}))]}),e.jsx("div",{children:o.options.map((i,j)=>e.jsxs("label",{htmlFor:a+"default-radio-"+j,className:"flex items-center mb-4 cursor-pointer rounded-lg shadow-md p-4",children:[e.jsx("input",{checked:t.has(a)?t.get(a).answer===String.fromCharCode(65+j).toLocaleLowerCase():!1,onChange:()=>{y(a,j)},id:a+"default-radio-"+j,type:"radio",value:j,name:"default-radio",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e.jsx("label",{htmlFor:a+"default-radio-"+j,className:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:i})]}))})]}),e.jsxs("div",{className:"flex justify-between m-4",children:[e.jsx("button",{disabled:r,onClick:()=>{L()},className:"p-2 outline-none rounded-lg shadow-md "+(r&&"cursor-not-allowed opacity-50"),children:r?"Please wait fetching":"Prev Question"}),a===29?e.jsx("button",{disabled:r,onClick:()=>{b(!0),console.log("submitting")},className:"p-2 text-white outline-none bg-blue-500 rounded-lg shadow-md "+(r&&"cursor-not-allowed opacity-50"),children:"Submit Quiz"}):e.jsx("button",{disabled:r,onClick:()=>{F()},className:"p-2 outline-none bg-blue-200 rounded-lg shadow-md "+(r&&"cursor-not-allowed opacity-50"),children:r?"Please wait fetching":"Next Question"})]})]})]})}function J({endTime:n,setFullScreen:l,data_:t,initialRenderData:c,handle:r,fullScreen:o}){const[a,m]=s.useState({}),[d,x]=s.useState(0),[b,p]=s.useState(new Map),[k,E]=s.useState(!1),[v,y]=s.useState(new Map),[u,L]=s.useState(10),[F,i]=s.useState(null),[j,S]=s.useState(!1);s.useEffect(()=>{console.log(Object.keys(c).length==0,c,c.question),c.question[0]&&m(c.question[0]),console.log(c.question[0],"intial render")},[c]),s.useEffect(()=>{if(localStorage.getItem(t._id)){const f=JSON.parse(localStorage.getItem(t._id)||""),A=new Map;Object.keys(f).map(M=>{A.set(Number(M),f[M])}),y(A)}},[t]),s.useEffect(()=>{console.log("question",a)},[a]),s.useEffect(()=>{b.has(d)?m(b.get(d)):m(c.question[d]),y(f=>(f.has(d)||f.set(d,{visited:!0,answer:"e"}),f))},[d]);const C=()=>{L(f=>f!=0?f-1:f)},O=()=>{const f=setInterval(C,1e3);i(f)},H=()=>{F&&clearInterval(F)};return s.useEffect(()=>{o?H():O()},[o]),s.useEffect(()=>{u==0&&(async()=>(await Q()).success&&window.location.reload())()},[u]),s.useEffect(()=>{const f=()=>{document.hidden&&l(!1)};document.addEventListener("visibilitychange",f)},[]),e.jsx("div",{children:o?Object.keys(a).length&&e.jsxs("div",{className:"flex gap-4 w-full p-2",children:[e.jsx($,{request:j,data_:t,answer:v,setAnswer:y,requesting:k,setData:m,question:d,setQuestion:x,data:a}),e.jsx(D,{setRequest:S,endTime:n,setQuestion:x,data:a,question:d,answer:v})]}):e.jsxs("div",{className:"flex w-full flex-col items-center mt-40 justify-center gap-4",children:[u,e.jsxs("div",{className:"flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",role:"alert",children:[e.jsx("svg",{className:"flex-shrink-0 inline w-4 h-4 me-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})}),e.jsx("span",{className:"sr-only",children:"Info"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Danger alert!"})," Go to full screen mode. You will be blocked otherwise."]})]}),e.jsx("button",{id:"button",className:"rounded-lg shadow-lg p-4",onClick:r.enter,children:"Enter Full Screen mode"})]})})}const V=["30 mins are allocated for completing the quiz","Attend the test in full screen mode","Note : Exiting of full screen mode will issue emergency timer to get back. If not get backed within the time you will be blocked from attending","Changing window and screens are sure way to get blocked from test"];function W({setStarted:n,setLoading:l,handle:t}){const c=async()=>{t.enter(),l(!0);const r=await R();console.log(r.data),r.success&&n(!0),l(!1)};return e.jsx("div",{className:"flex items-center justify-center h-screen w-full p-4",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-3xl ",children:"Welcome to Round 1 Quiz"}),e.jsx("p",{className:"text-lg",children:"Please carefully read the instruction before starting:"}),e.jsx("div",{className:"flex flex-col gap-2",children:V.map((r,o)=>e.jsxs("p",{children:[o+1,".",r]}))}),e.jsx("button",{onClick:async()=>await c(),className:"p-3 bg-green-500 text-white rounded-lg shadow-md",children:"Start the Test"})]})})}var g={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},T=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],z=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],I=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],h=typeof window<"u"&&typeof window.document<"u"?window.document:{},w="fullscreenEnabled"in h&&Object.keys(g)||T[0]in h&&T||z[0]in h&&z||I[0]in h&&I||[],N={requestFullscreen:function(n){return n[w[g.requestFullscreen]]()},requestFullscreenFunction:function(n){return n[w[g.requestFullscreen]]},get exitFullscreen(){return h[w[g.exitFullscreen]].bind(h)},get fullscreenPseudoClass(){return":"+w[g.fullscreen]},addEventListener:function(n,l,t){return h.addEventListener(w[g[n]],l,t)},removeEventListener:function(n,l,t){return h.removeEventListener(w[g[n]],l,t)},get fullscreenEnabled(){return!!h[w[g.fullscreenEnabled]]},set fullscreenEnabled(n){},get fullscreenElement(){return h[w[g.fullscreenElement]]},set fullscreenElement(n){},get onfullscreenchange(){return h[("on"+w[g.fullscreenchange]).toLowerCase()]},set onfullscreenchange(n){return h[("on"+w[g.fullscreenchange]).toLowerCase()]=n},get onfullscreenerror(){return h[("on"+w[g.fullscreenerror]).toLowerCase()]},set onfullscreenerror(n){return h[("on"+w[g.fullscreenerror]).toLowerCase()]=n}};function Y(){var n=s.useState(!1),l=n[0],t=n[1],c=s.useRef(null);s.useEffect(function(){var a=function(){t(N.fullscreenElement===c.current)};return N.addEventListener("fullscreenchange",a),function(){return N.removeEventListener("fullscreenchange",a)}},[]);var r=s.useCallback(function(){if(N.fullscreenElement)return N.exitFullscreen().then(function(){return N.requestFullscreen(c.current)});if(c.current)return N.requestFullscreen(c.current)},[]),o=s.useCallback(function(){return N.fullscreenElement===c.current?N.exitFullscreen():Promise.resolve()},[]);return s.useMemo(function(){return{active:l,enter:r,exit:o,node:c}},[l,r,o])}var K=function(l){var t=l.handle,c=l.onChange,r=l.children,o=l.className,a=[];return o&&a.push(o),a.push("fullscreen"),t.active&&a.push("fullscreen-enabled"),s.useEffect(function(){c&&c(t.active,t)},[t.active]),G.createElement("div",{className:a.join(" "),ref:t.node,style:t.active?{height:"100%",width:"100%"}:void 0},r)};function _(){return e.jsx("div",{className:"flex flex-col items-center justify-center h-screen",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("p",{className:"text-lg text-red",children:"Game already ended. Please wait for Round 2 call. "}),e.jsx("button",{onClick:()=>{localStorage.removeItem("jwtToken"),window.location.reload()},className:"p-3 rounded-lg bg-black text-white",children:"Logout"})]})})}function U(){return e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsxs("div",{className:"flex flex-col gap-4 items-center ",children:[e.jsx("p",{children:"You are blocked"}),e.jsx("p",{children:"Contact Organizers"}),e.jsx("button",{onClick:()=>{localStorage.removeItem("jwtToken"),window.location.reload()},className:"p-3 rounded-lg bg-black text-white",children:"Logout"})]})})}function ee({data_:n}){const[l,t]=s.useState(null),[c,r]=s.useState(!0),[o,a]=s.useState({}),m=Y(),[d,x]=s.useState(!1),[b,p]=s.useState(!1),[k,E]=s.useState(null),v=u=>{x(u)},y=async()=>{const u=await B();u.success?(a(u.data),t(!0),console.log("data after starting:",u.data),E(new Date(u.data.end_time))):u.message=="GAME_NOT_STARTED"?t(!1):u.message=="BLOCKED"&&(t(!0),p(!0)),r(!1)};return s.useEffect(()=>{(async()=>await y())()},[]),s.useEffect(()=>{console.log("data",o)},[o]),s.useEffect(()=>{l&&(async()=>await y())()},[l]),e.jsx("div",{children:e.jsx(K,{handle:m,onChange:v,children:c?e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:e.jsx(q,{})}):l===!0&&Object.keys(o).length?e.jsx(J,{endTime:k,setFullScreen:x,data_:n,initialRenderData:o,handle:m,fullScreen:d}):l===null?e.jsx(_,{}):b?e.jsx(U,{}):e.jsx(W,{setData:a,setLoading:r,setEndTime:E,handle:m,setStarted:t})})})}export{ee as default};