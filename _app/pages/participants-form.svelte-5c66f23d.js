var le=Object.defineProperty;var H=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var M=(a,e,t)=>e in a?le(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,O=(a,e)=>{for(var t in e||(e={}))fe.call(e,t)&&M(a,t,e[t]);if(H)for(var t of H(e))ie.call(e,t)&&M(a,t,e[t]);return a};import{S as U,i as q,s as z,X as ue,j as b,m as d,o as h,x as p,u as m,v as N,N as X,l as F,f as g,r as V,w as W,Y as oe,d as _,O as A,Z as $e,P as B,t as C,k as v,e as G,g as j,n as w,c as R,a as Y,b as Z,h as ce,a0 as pe,U as me,V as _e,W as ge,a1 as be,a2 as de,$ as he,a3 as J,a4 as K,a5 as E,a6 as I,a7 as T}from"../chunks/vendor-52cac395.js";import{p as D}from"../chunks/participants-store-535378ac.js";import{g as Ne}from"../chunks/navigation-51f4a605.js";import{C as ke}from"../chunks/card-label-8e38f8e3.js";import"../chunks/singletons-12a22614.js";function ve({elements:a}){let e={};for(let t=0;t<a.length;t++)a[t].nodeName==="INPUT"&&a[t].type==="text"&&a[t].value!==""&&(e[a[t].name]=a[t].value);return e}function Q(a,e,t){const n=a.slice();return n[5]=e[t],n[7]=t,n}function y(a){let e,t;return e=new pe({props:{name:"trash"}}),{c(){b(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,s){h(e,n,s),t=!0},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function we(a){let e,t,n=a[1]&&y();return{c(){n&&n.c(),e=F()},l(s){n&&n.l(s),e=F()},m(s,l){n&&n.m(s,l),g(s,e,l),t=!0},p(s,l){s[1]?n?l&2&&p(n,1):(n=y(),n.c(),p(n,1),n.m(e.parentNode,e)):n&&(V(),m(n,1,1,()=>{n=null}),W())},i(s){t||(p(n),t=!0)},o(s){m(n),t=!1},d(s){n&&n.d(s),s&&_(e)}}}function Pe(a){let e=`${a[5].firstName} ${a[5].lastName}`,t,n,s,l,i,f;function u(){return a[3](a[7])}return l=new B({props:{$$slots:{default:[we]},$$scope:{ctx:a}}}),l.$on("click",u),{c(){t=C(e),n=v(),s=G("span"),b(l.$$.fragment),i=v(),this.h()},l(r){t=j(r,e),n=w(r),s=R(r,"SPAN",{class:!0});var o=Y(s);d(l.$$.fragment,o),o.forEach(_),i=w(r),this.h()},h(){Z(s,"class","action svelte-ir20w6")},m(r,o){g(r,t,o),g(r,n,o),g(r,s,o),h(l,s,null),g(r,i,o),f=!0},p(r,o){a=r,(!f||o&1)&&e!==(e=`${a[5].firstName} ${a[5].lastName}`)&&ce(t,e);const $={};o&258&&($.$$scope={dirty:o,ctx:a}),l.$set($)},i(r){f||(p(l.$$.fragment,r),f=!0)},o(r){m(l.$$.fragment,r),f=!1},d(r){r&&_(t),r&&_(n),r&&_(s),N(l),r&&_(i)}}}function x(a){let e,t;return e=new $e({props:{$$slots:{default:[Pe]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,s){h(e,n,s),t=!0},p(n,s){const l={};s&259&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function Se(a){let e,t,n=a[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=x(Q(a,n,i));const l=i=>m(s[i],1,1,()=>{s[i]=null});return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=F()},l(i){for(let f=0;f<s.length;f+=1)s[f].l(i);e=F()},m(i,f){for(let u=0;u<s.length;u+=1)s[u].m(i,f);g(i,e,f),t=!0},p(i,f){if(f&7){n=i[0];let u;for(u=0;u<n.length;u+=1){const r=Q(i,n,u);s[u]?(s[u].p(r,f),p(s[u],1)):(s[u]=x(r),s[u].c(),p(s[u],1),s[u].m(e.parentNode,e))}for(V(),u=n.length;u<s.length;u+=1)l(u);W()}},i(i){if(!t){for(let f=0;f<n.length;f+=1)p(s[f]);t=!0}},o(i){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)m(s[f]);t=!1},d(i){oe(s,i),i&&_(e)}}}function Le(a){let e,t;return e=new ue({props:{$$slots:{default:[Se]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,s){h(e,n,s),t=!0},p(n,[s]){const l={};s&259&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function Ce(a,e,t){let n;X(a,D,u=>t(4,n=u));let{list:s=[]}=e,{editable:l=!1}=e;const i=u=>{const r=[...n];r.splice(u,1),A(D,n=r,n)},f=u=>i(u);return a.$$set=u=>{"list"in u&&t(0,s=u.list),"editable"in u&&t(1,l=u.editable)},[s,l,i,f]}class je extends U{constructor(e){super();q(this,e,Ce,Le,z,{list:0,editable:1})}}const De=[{firstName:"Luke",lastName:"Skywalker"},{firstName:"Lia",lastName:"Skywalker"},{firstName:"Luke",lastName:"Wilson"},{firstName:"Owen",lastName:"Wilson"},{firstName:"Eddie",lastName:"Murphey"},{firstName:"Charlie",lastName:"Murphey"},{firstName:"Bruce",lastName:"Wayne"}];function Fe(a){let e,t;return e=new je({props:{list:a[7],editable:!0}}),{c(){b(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,s){h(e,n,s),t=!0},p(n,s){const l={};s&128&&(l.list=n[7]),e.$set(l)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function Be(a){let e,t,n;return t=new B({props:{color:"success",$$slots:{default:[Ee]},$$scope:{ctx:a}}}),t.$on("click",a[9]),{c(){e=G("div"),b(t.$$.fragment),this.h()},l(s){e=R(s,"DIV",{class:!0});var l=Y(e);d(t.$$.fragment,l),l.forEach(_),this.h()},h(){Z(e,"class","loader svelte-12e0xx7")},m(s,l){g(s,e,l),h(t,e,null),n=!0},p(s,l){const i={};l&262144&&(i.$$scope={dirty:l,ctx:s}),t.$set(i)},i(s){n||(p(t.$$.fragment,s),n=!0)},o(s){m(t.$$.fragment,s),n=!1},d(s){s&&_(e),N(t)}}}function Ee(a){let e;return{c(){e=C("Load Demo Participants")},l(t){e=j(t,"Load Demo Participants")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function Ie(a){let e;return{c(){e=C("Add Participant")},l(t){e=j(t,"Add Participant")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function Te(a){let e,t,n,s,l;function i(r){a[10](r)}function f(r){a[11](r)}let u={type:"text",name:"firstName",autofocus:!0};return a[4]!==void 0&&(u.inner=a[4]),a[2]!==void 0&&(u.value=a[2]),t=new K({props:u}),E.push(()=>I(t,"inner",i)),E.push(()=>I(t,"value",f)),t.$on("keyup",a[12]),t.$on("change",a[13]),{c(){e=C(`First Name
					`),b(t.$$.fragment)},l(r){e=j(r,`First Name
					`),d(t.$$.fragment,r)},m(r,o){g(r,e,o),h(t,r,o),l=!0},p(r,o){const $={};!n&&o&16&&(n=!0,$.inner=r[4],T(()=>n=!1)),!s&&o&4&&(s=!0,$.value=r[2],T(()=>s=!1)),t.$set($)},i(r){l||(p(t.$$.fragment,r),l=!0)},o(r){m(t.$$.fragment,r),l=!1},d(r){r&&_(e),N(t,r)}}}function Ve(a){let e,t,n,s,l;function i(r){a[14](r)}function f(r){a[15](r)}let u={type:"text",name:"lastName"};return a[5]!==void 0&&(u.inner=a[5]),a[3]!==void 0&&(u.value=a[3]),t=new K({props:u}),E.push(()=>I(t,"inner",i)),E.push(()=>I(t,"value",f)),t.$on("keyup",a[16]),{c(){e=C(`Last Name
					`),b(t.$$.fragment)},l(r){e=j(r,`Last Name
					`),d(t.$$.fragment,r)},m(r,o){g(r,e,o),h(t,r,o),l=!0},p(r,o){const $={};!n&&o&32&&(n=!0,$.inner=r[5],T(()=>n=!1)),!s&&o&8&&(s=!0,$.value=r[3],T(()=>s=!1)),t.$set($)},i(r){l||(p(t.$$.fragment,r),l=!0)},o(r){m(t.$$.fragment,r),l=!1},d(r){r&&_(e),N(t,r)}}}function We(a){let e;return{c(){e=C("Submit")},l(t){e=j(t,"Submit")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function Ae(a){let e,t,n,s,l,i,f,u;return e=new he({props:{$$slots:{default:[Ie]},$$scope:{ctx:a}}}),n=new J({props:{$$slots:{default:[Te]},$$scope:{ctx:a}}}),l=new J({props:{$$slots:{default:[Ve]},$$scope:{ctx:a}}}),f=new B({props:{type:"submit",color:"success",disabled:a[6],$$slots:{default:[We]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment),t=v(),b(n.$$.fragment),s=v(),b(l.$$.fragment),i=v(),b(f.$$.fragment)},l(r){d(e.$$.fragment,r),t=w(r),d(n.$$.fragment,r),s=w(r),d(l.$$.fragment,r),i=w(r),d(f.$$.fragment,r)},m(r,o){h(e,r,o),g(r,t,o),h(n,r,o),g(r,s,o),h(l,r,o),g(r,i,o),h(f,r,o),u=!0},p(r,o){const $={};o&262144&&($.$$scope={dirty:o,ctx:r}),e.$set($);const k={};o&262197&&(k.$$scope={dirty:o,ctx:r}),n.$set(k);const P={};o&262186&&(P.$$scope={dirty:o,ctx:r}),l.$set(P);const S={};o&64&&(S.disabled=r[6]),o&262144&&(S.$$scope={dirty:o,ctx:r}),f.$set(S)},i(r){u||(p(e.$$.fragment,r),p(n.$$.fragment,r),p(l.$$.fragment,r),p(f.$$.fragment,r),u=!0)},o(r){m(e.$$.fragment,r),m(n.$$.fragment,r),m(l.$$.fragment,r),m(f.$$.fragment,r),u=!1},d(r){N(e,r),r&&_(t),N(n,r),r&&_(s),N(l,r),r&&_(i),N(f,r)}}}function Ge(a){let e,t;return e=new de({props:{$$slots:{default:[Ae]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,s){h(e,n,s),t=!0},p(n,s){const l={};s&262271&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function Re(a){let e,t,n,s,l,i,f;const u=[Be,Fe],r=[];function o($,k){return $[7].length===0?0:1}return e=o(a),t=r[e]=u[e](a),i=new be({props:{$$slots:{default:[Ge]},$$scope:{ctx:a}}}),i.$on("submit",a[8]),{c(){t.c(),n=v(),s=G("hr"),l=v(),b(i.$$.fragment)},l($){t.l($),n=w($),s=R($,"HR",{}),l=w($),d(i.$$.fragment,$)},m($,k){r[e].m($,k),g($,n,k),g($,s,k),g($,l,k),h(i,$,k),f=!0},p($,k){let P=e;e=o($),e===P?r[e].p($,k):(V(),m(r[P],1,1,()=>{r[P]=null}),W(),t=r[e],t?t.p($,k):(t=r[e]=u[e]($),t.c()),p(t,1),t.m(n.parentNode,n));const S={};k&262271&&(S.$$scope={dirty:k,ctx:$}),i.$set(S)},i($){f||(p(t),p(i.$$.fragment,$),f=!0)},o($){m(t),m(i.$$.fragment,$),f=!1},d($){r[e].d($),$&&_(n),$&&_(s),$&&_(l),N(i,$)}}}function He(a){let e;return{c(){e=C("Shuffle")},l(t){e=j(t,"Shuffle")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function Me(a){let e,t;return e=new B({props:{color:"success",block:!0,disabled:a[7].length===0,$$slots:{default:[He]},$$scope:{ctx:a}}}),e.$on("click",a[17]),{c(){b(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,s){h(e,n,s),t=!0},p(n,s){const l={};s&128&&(l.disabled=n[7].length===0),s&262144&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function Oe(a){let e,t,n,s,l,i;return e=new ke({props:{label:"Participants Form"}}),n=new _e({props:{$$slots:{default:[Re]},$$scope:{ctx:a}}}),l=new ge({props:{$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment),t=v(),b(n.$$.fragment),s=v(),b(l.$$.fragment)},l(f){d(e.$$.fragment,f),t=w(f),d(n.$$.fragment,f),s=w(f),d(l.$$.fragment,f)},m(f,u){h(e,f,u),g(f,t,u),h(n,f,u),g(f,s,u),h(l,f,u),i=!0},p(f,u){const r={};u&262399&&(r.$$scope={dirty:u,ctx:f}),n.$set(r);const o={};u&262272&&(o.$$scope={dirty:u,ctx:f}),l.$set(o)},i(f){i||(p(e.$$.fragment,f),p(n.$$.fragment,f),p(l.$$.fragment,f),i=!0)},o(f){m(e.$$.fragment,f),m(n.$$.fragment,f),m(l.$$.fragment,f),i=!1},d(f){N(e,f),f&&_(t),N(n,f),f&&_(s),N(l,f)}}}function Ue(a){let e,t;return e=new me({props:{$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,s){h(e,n,s),t=!0},p(n,[s]){const l={};s&262399&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function qe(a,e,t){let n,s;X(a,D,c=>t(7,s=c));let l="",i="",f=null,u=null,r="",o="";const $=c=>{c.preventDefault();const L=ve(c.target);L.firstName&&L.lastName&&(A(D,s=[...s,L],s),t(2,l=""),t(3,i="")),f.focus(),t(0,r=""),t(1,o="")},k=()=>{A(D,s=[...De.map(c=>O({},c))],s)};function P(c){f=c,t(4,f)}function S(c){l=c,t(2,l)}const ee=({key:c,target:L})=>{c!==" "&&c!="Tab"&&c!="Control"&&c!="Shift"&&c!="Enter"&&t(0,r+=c),c==="Backspace"&&L.value===""&&t(0,r=""),c===" "&&u.focus()},te=c=>console.log(c);function ne(c){u=c,t(5,u)}function re(c){i=c,t(3,i)}const se=({key:c,target:L})=>{c!==" "&&c!="Tab"&&c!="Control"&&c!="Shift"&&c!="Enter"&&t(1,o+=c),c==="Backspace"&&L.value===""&&t(1,o="")},ae=()=>Ne("/participants-assignments");return a.$$.update=()=>{a.$$.dirty&3&&t(6,n=r===""&&o==="")},[r,o,l,i,f,u,n,s,$,k,P,S,ee,te,ne,re,se,ae]}class Qe extends U{constructor(e){super();q(this,e,qe,Ue,z,{})}}export{Qe as default};