import{_ as H}from"./bcc2.dc034942.js";import{o as u,c as p,b as n,f as $,F as C,r as x,g as A,w as h,v as g,n as E,t as k,d as I,u as v,i as T,h as w,j as S,a as B,k as F,l as y}from"./index.cf965441.js";let N=(a=21)=>crypto.getRandomValues(new Uint8Array(a)).reduce((o,e)=>(e&=63,e<36?o+=e.toString(36):e<62?o+=(e-26).toString(36).toUpperCase():e>62?o+="-":o+="_",o),"");const K=n("h1",null,"Todo-list",-1),V=["onKeyup"],U={__name:"HomeHeader",emits:["AddTodoItem"],setup(a,{emit:o}){const e=t=>{const c={id:N(),title:t.target.value,done:!1,isEdit:!1};t.target.value===""?alert("\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"):(o("AddTodoItem",c),t.target.value="")};return(t,c)=>(u(),p(C,null,[K,n("input",{type:"text",id:"ListInput",placeholder:"\u8BF7\u8F93\u5165\u4E8B\u9879",onKeyup:$(e,["enter"])},null,40,V)],64))}};const J={id:"doingThings"},L=["onClick"],M=["onKeyup","onBlur"],R={class:"operation"},z=["onClick"],q=["onClick","title"],G={__name:"HomeList",props:["todos"],emits:["CheckTodo","DelTodo"],setup(a,{emit:o}){const e={delTitle:"\u5220\u9664\u6B64\u4E8B\u9879",editTitle:"\u4FEE\u6539"};let t=x("");const c=l=>{o("CheckTodo",l),console.log(l.done)},m=l=>{confirm("\u662F\u5426\u5220\u9664\uFF1F")&&o("DelTodo",l)},d=x(null),s=async(l,f)=>{t.value=l.title,l.isEdit=!0,await w(()=>{d.value[f].focus()})},_=l=>{l.isEdit=!1,t.value==""?(alert("\u8F93\u5165\u4E0D\u80FD\u4E3A\u7A7A"),t.value=l.title):l.title=t.value};return(l,f)=>(u(),p("ul",J,[(u(!0),p(C,null,A(a.todos,(i,D)=>(u(),p("li",{key:i.id},[n("section",{class:"listTitle",onClick:r=>c(i)},[h(n("p",{class:E({checked:i.done})},k(i.title),3),[[g,!i.isEdit]]),h(n("input",{type:"text",class:"editInput","onUpdate:modelValue":f[0]||(f[0]=r=>T(t)?t.value=r:t=r),onKeyup:$(r=>_(i),["enter"]),onBlur:r=>_(i),ref_for:!0,ref_key:"inputTitle",ref:d},null,40,M),[[g,i.isEdit],[I,v(t)]])],8,L),n("div",R,[h(n("span",{class:"edit",onClick:r=>s(i,D)},"\uE602",8,z),[[g,!i.isEdit]]),n("span",{onClick:r=>m(i.id),title:e.delTitle,class:"del"},"\uE600",8,q)])]))),128))]))}};const P=(a,o)=>{const e=a.__vccOpts||a;for(const[t,c]of o)e[t]=c;return e},Q={class:"footer"},W={__name:"HomeFooter",props:["todos"],emits:["DeleteArray"],setup(a,{emit:o}){const e=a,t="\u5220\u9664\u5168\u90E8\u4E8B\u9879",c=e.todos,m=()=>{confirm("\u786E\u8BA4\u5168\u90E8\u5220\u9664\uFF1F")&&o("DeleteArray")},d=S(()=>{let s=0;return c.forEach(_=>{_.done&&s++}),s});return(s,_)=>(u(),p("div",Q,[n("p",null,"\u5DF2\u5B8C\u6210 "+k(v(d))+" - \u5168\u90E8 "+k(a.todos.length),1),n("span",{onClick:m,title:t},"\uE628")]))}},X=P(W,[["__scopeId","data-v-95dca28c"]]);const Y={class:"container"},Z={class:"containerMain"},O=n("img",{src:H,class:"background",alt:""},null,-1),ee={__name:"Home",setup(a){let o=JSON.parse(localStorage.getItem("todos"))||[],e=B(o);const t=s=>{e.push(s)},c=s=>{s.done=!s.done},m=s=>{e.splice(s,1)},d=()=>{e.splice(0)};return F(()=>e,()=>{localStorage.setItem("todos",JSON.stringify(e))},{deep:!0,immediate:!0}),(s,_)=>(u(),p(C,null,[n("div",Y,[n("div",Z,[y(U,{onAddTodoItem:t}),y(G,{todos:v(e),onCheckTodo:c,onDelTodo:m},null,8,["todos"]),y(X,{todos:v(e),onDeleteArray:d},null,8,["todos"])])]),O],64))}};export{ee as default};