var se=Object.defineProperty;var H=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var M=(s,e,n)=>e in s?se(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n,O=(s,e)=>{for(var n in e||(e={}))le.call(e,n)&&M(s,n,e[n]);if(H)for(var n of H(e))fe.call(e,n)&&M(s,n,e[n]);return s};import{S as U,i as q,s as A,X as ie,j as b,m as d,o as h,x as p,u as m,v as N,N as X,l as E,f as g,r as I,w as W,Y as ue,d as _,O as z,Z as oe,P as T,t as B,k,e as G,g as P,n as w,c as R,a as Y,b as Z,h as $e,a0 as ce,U as pe,V as me,W as _e,a1 as ge,a2 as be,$ as de,a3 as J,a4 as K,a5 as V,a6 as D,a7 as F}from"../chunks/vendor-52cac395.js";import{p as j}from"../chunks/participants-store-535378ac.js";import{g as he}from"../chunks/navigation-51f4a605.js";import{C as Ne}from"../chunks/card-label-8e38f8e3.js";import"../chunks/singletons-12a22614.js";function ve({elements:s}){let e={};for(let n=0;n<s.length;n++)s[n].nodeName==="INPUT"&&s[n].type==="text"&&s[n].value!==""&&(e[s[n].name]=s[n].value);return e}function Q(s,e,n){const t=s.slice();return t[5]=e[n],t[7]=n,t}function y(s){let e,n;return e=new ce({props:{name:"trash"}}),{c(){b(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,a){h(e,t,a),n=!0},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function ke(s){let e,n,t=s[1]&&y();return{c(){t&&t.c(),e=E()},l(a){t&&t.l(a),e=E()},m(a,l){t&&t.m(a,l),g(a,e,l),n=!0},p(a,l){a[1]?t?l&2&&p(t,1):(t=y(),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(I(),m(t,1,1,()=>{t=null}),W())},i(a){n||(p(t),n=!0)},o(a){m(t),n=!1},d(a){t&&t.d(a),a&&_(e)}}}function we(s){let e=`${s[5].firstName} ${s[5].lastName}`,n,t,a,l,i,f;function u(){return s[3](s[7])}return l=new T({props:{"data-cy":"remove-participant-btn",$$slots:{default:[ke]},$$scope:{ctx:s}}}),l.$on("click",u),{c(){n=B(e),t=k(),a=G("span"),b(l.$$.fragment),i=k(),this.h()},l(r){n=P(r,e),t=w(r),a=R(r,"SPAN",{class:!0});var o=Y(a);d(l.$$.fragment,o),o.forEach(_),i=w(r),this.h()},h(){Z(a,"class","action svelte-ir20w6")},m(r,o){g(r,n,o),g(r,t,o),g(r,a,o),h(l,a,null),g(r,i,o),f=!0},p(r,o){s=r,(!f||o&1)&&e!==(e=`${s[5].firstName} ${s[5].lastName}`)&&$e(n,e);const $={};o&258&&($.$$scope={dirty:o,ctx:s}),l.$set($)},i(r){f||(p(l.$$.fragment,r),f=!0)},o(r){m(l.$$.fragment,r),f=!1},d(r){r&&_(n),r&&_(t),r&&_(a),N(l),r&&_(i)}}}function x(s){let e,n;return e=new oe({props:{$$slots:{default:[we]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,a){h(e,t,a),n=!0},p(t,a){const l={};a&259&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Ce(s){let e,n,t=s[0],a=[];for(let i=0;i<t.length;i+=1)a[i]=x(Q(s,t,i));const l=i=>m(a[i],1,1,()=>{a[i]=null});return{c(){for(let i=0;i<a.length;i+=1)a[i].c();e=E()},l(i){for(let f=0;f<a.length;f+=1)a[f].l(i);e=E()},m(i,f){for(let u=0;u<a.length;u+=1)a[u].m(i,f);g(i,e,f),n=!0},p(i,f){if(f&7){t=i[0];let u;for(u=0;u<t.length;u+=1){const r=Q(i,t,u);a[u]?(a[u].p(r,f),p(a[u],1)):(a[u]=x(r),a[u].c(),p(a[u],1),a[u].m(e.parentNode,e))}for(I(),u=t.length;u<a.length;u+=1)l(u);W()}},i(i){if(!n){for(let f=0;f<t.length;f+=1)p(a[f]);n=!0}},o(i){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)m(a[f]);n=!1},d(i){ue(a,i),i&&_(e)}}}function Se(s){let e,n;return e=new ie({props:{$$slots:{default:[Ce]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,a){h(e,t,a),n=!0},p(t,[a]){const l={};a&259&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Le(s,e,n){let t;X(s,j,u=>n(4,t=u));let{list:a=[]}=e,{editable:l=!1}=e;const i=u=>{const r=[...t];r.splice(u,1),z(j,t=r,t)},f=u=>i(u);return s.$$set=u=>{"list"in u&&n(0,a=u.list),"editable"in u&&n(1,l=u.editable)},[a,l,i,f]}class Be extends U{constructor(e){super();q(this,e,Le,Se,A,{list:0,editable:1})}}const Pe=[{firstName:"Luke",lastName:"Skywalker"},{firstName:"Lia",lastName:"Skywalker"},{firstName:"Luke",lastName:"Wilson"},{firstName:"Owen",lastName:"Wilson"},{firstName:"Eddie",lastName:"Murphey"},{firstName:"Charlie",lastName:"Murphey"},{firstName:"Bruce",lastName:"Wayne"}];function je(s){let e,n;return e=new Be({props:{list:s[7],editable:!0}}),{c(){b(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,a){h(e,t,a),n=!0},p(t,a){const l={};a&128&&(l.list=t[7]),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Ee(s){let e,n,t;return n=new T({props:{"data-cy":"demo-load-btn",color:"success",$$slots:{default:[Te]},$$scope:{ctx:s}}}),n.$on("click",s[9]),{c(){e=G("div"),b(n.$$.fragment),this.h()},l(a){e=R(a,"DIV",{class:!0});var l=Y(e);d(n.$$.fragment,l),l.forEach(_),this.h()},h(){Z(e,"class","loader svelte-12e0xx7")},m(a,l){g(a,e,l),h(n,e,null),t=!0},p(a,l){const i={};l&131072&&(i.$$scope={dirty:l,ctx:a}),n.$set(i)},i(a){t||(p(n.$$.fragment,a),t=!0)},o(a){m(n.$$.fragment,a),t=!1},d(a){a&&_(e),N(n)}}}function Te(s){let e;return{c(){e=B("Lade Beispielteilnehmer")},l(n){e=P(n,"Lade Beispielteilnehmer")},m(n,t){g(n,e,t)},d(n){n&&_(e)}}}function Ve(s){let e;return{c(){e=B("Teilnehmer hinzuf\xFCgen")},l(n){e=P(n,"Teilnehmer hinzuf\xFCgen")},m(n,t){g(n,e,t)},d(n){n&&_(e)}}}function De(s){let e,n,t,a,l;function i(r){s[10](r)}function f(r){s[11](r)}let u={type:"text",name:"firstName",autofocus:!0};return s[4]!==void 0&&(u.inner=s[4]),s[2]!==void 0&&(u.value=s[2]),n=new K({props:u}),V.push(()=>D(n,"inner",i)),V.push(()=>D(n,"value",f)),n.$on("keyup",s[12]),{c(){e=B(`Vorname
					`),b(n.$$.fragment)},l(r){e=P(r,`Vorname
					`),d(n.$$.fragment,r)},m(r,o){g(r,e,o),h(n,r,o),l=!0},p(r,o){const $={};!t&&o&16&&(t=!0,$.inner=r[4],F(()=>t=!1)),!a&&o&4&&(a=!0,$.value=r[2],F(()=>a=!1)),n.$set($)},i(r){l||(p(n.$$.fragment,r),l=!0)},o(r){m(n.$$.fragment,r),l=!1},d(r){r&&_(e),N(n,r)}}}function Fe(s){let e,n,t,a,l;function i(r){s[13](r)}function f(r){s[14](r)}let u={type:"text",name:"lastName"};return s[5]!==void 0&&(u.inner=s[5]),s[3]!==void 0&&(u.value=s[3]),n=new K({props:u}),V.push(()=>D(n,"inner",i)),V.push(()=>D(n,"value",f)),n.$on("keyup",s[15]),{c(){e=B(`Nachname
					`),b(n.$$.fragment)},l(r){e=P(r,`Nachname
					`),d(n.$$.fragment,r)},m(r,o){g(r,e,o),h(n,r,o),l=!0},p(r,o){const $={};!t&&o&32&&(t=!0,$.inner=r[5],F(()=>t=!1)),!a&&o&8&&(a=!0,$.value=r[3],F(()=>a=!1)),n.$set($)},i(r){l||(p(n.$$.fragment,r),l=!0)},o(r){m(n.$$.fragment,r),l=!1},d(r){r&&_(e),N(n,r)}}}function Ie(s){let e;return{c(){e=B("Eintragen")},l(n){e=P(n,"Eintragen")},m(n,t){g(n,e,t)},d(n){n&&_(e)}}}function We(s){let e,n,t,a,l,i,f,u;return e=new de({props:{$$slots:{default:[Ve]},$$scope:{ctx:s}}}),t=new J({props:{$$slots:{default:[De]},$$scope:{ctx:s}}}),l=new J({props:{$$slots:{default:[Fe]},$$scope:{ctx:s}}}),f=new T({props:{"data-cy":"add-participant-btn",type:"submit",color:"success",disabled:s[6],$$slots:{default:[Ie]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment),n=k(),b(t.$$.fragment),a=k(),b(l.$$.fragment),i=k(),b(f.$$.fragment)},l(r){d(e.$$.fragment,r),n=w(r),d(t.$$.fragment,r),a=w(r),d(l.$$.fragment,r),i=w(r),d(f.$$.fragment,r)},m(r,o){h(e,r,o),g(r,n,o),h(t,r,o),g(r,a,o),h(l,r,o),g(r,i,o),h(f,r,o),u=!0},p(r,o){const $={};o&131072&&($.$$scope={dirty:o,ctx:r}),e.$set($);const v={};o&131125&&(v.$$scope={dirty:o,ctx:r}),t.$set(v);const C={};o&131114&&(C.$$scope={dirty:o,ctx:r}),l.$set(C);const S={};o&64&&(S.disabled=r[6]),o&131072&&(S.$$scope={dirty:o,ctx:r}),f.$set(S)},i(r){u||(p(e.$$.fragment,r),p(t.$$.fragment,r),p(l.$$.fragment,r),p(f.$$.fragment,r),u=!0)},o(r){m(e.$$.fragment,r),m(t.$$.fragment,r),m(l.$$.fragment,r),m(f.$$.fragment,r),u=!1},d(r){N(e,r),r&&_(n),N(t,r),r&&_(a),N(l,r),r&&_(i),N(f,r)}}}function ze(s){let e,n;return e=new be({props:{$$slots:{default:[We]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,a){h(e,t,a),n=!0},p(t,a){const l={};a&131199&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Ge(s){let e,n,t,a,l,i,f;const u=[Ee,je],r=[];function o($,v){return $[7].length===0?0:1}return e=o(s),n=r[e]=u[e](s),i=new ge({props:{$$slots:{default:[ze]},$$scope:{ctx:s}}}),i.$on("submit",s[8]),{c(){n.c(),t=k(),a=G("hr"),l=k(),b(i.$$.fragment)},l($){n.l($),t=w($),a=R($,"HR",{}),l=w($),d(i.$$.fragment,$)},m($,v){r[e].m($,v),g($,t,v),g($,a,v),g($,l,v),h(i,$,v),f=!0},p($,v){let C=e;e=o($),e===C?r[e].p($,v):(I(),m(r[C],1,1,()=>{r[C]=null}),W(),n=r[e],n?n.p($,v):(n=r[e]=u[e]($),n.c()),p(n,1),n.m(t.parentNode,t));const S={};v&131199&&(S.$$scope={dirty:v,ctx:$}),i.$set(S)},i($){f||(p(n),p(i.$$.fragment,$),f=!0)},o($){m(n),m(i.$$.fragment,$),f=!1},d($){r[e].d($),$&&_(t),$&&_(a),$&&_(l),N(i,$)}}}function Re(s){let e;return{c(){e=B("Shuffle")},l(n){e=P(n,"Shuffle")},m(n,t){g(n,e,t)},d(n){n&&_(e)}}}function He(s){let e,n;return e=new T({props:{"data-cy":"shuffle-btn",color:"success",block:!0,disabled:s[7].length===0,$$slots:{default:[Re]},$$scope:{ctx:s}}}),e.$on("click",s[16]),{c(){b(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,a){h(e,t,a),n=!0},p(t,a){const l={};a&128&&(l.disabled=t[7].length===0),a&131072&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Me(s){let e,n,t,a,l,i;return e=new Ne({props:{label:"Teilnehmer Formular"}}),t=new me({props:{$$slots:{default:[Ge]},$$scope:{ctx:s}}}),l=new _e({props:{$$slots:{default:[He]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment),n=k(),b(t.$$.fragment),a=k(),b(l.$$.fragment)},l(f){d(e.$$.fragment,f),n=w(f),d(t.$$.fragment,f),a=w(f),d(l.$$.fragment,f)},m(f,u){h(e,f,u),g(f,n,u),h(t,f,u),g(f,a,u),h(l,f,u),i=!0},p(f,u){const r={};u&131327&&(r.$$scope={dirty:u,ctx:f}),t.$set(r);const o={};u&131200&&(o.$$scope={dirty:u,ctx:f}),l.$set(o)},i(f){i||(p(e.$$.fragment,f),p(t.$$.fragment,f),p(l.$$.fragment,f),i=!0)},o(f){m(e.$$.fragment,f),m(t.$$.fragment,f),m(l.$$.fragment,f),i=!1},d(f){N(e,f),f&&_(n),N(t,f),f&&_(a),N(l,f)}}}function Oe(s){let e,n;return e=new pe({props:{$$slots:{default:[Me]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,a){h(e,t,a),n=!0},p(t,[a]){const l={};a&131327&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Ue(s,e,n){let t,a;X(s,j,c=>n(7,a=c));let l="",i="",f=null,u=null,r="",o="";const $=c=>{c.preventDefault();const L=ve(c.target);L.firstName&&L.lastName&&(z(j,a=[...a,L],a),n(2,l=""),n(3,i="")),f.focus(),n(0,r=""),n(1,o="")},v=()=>{z(j,a=[...Pe.map(c=>O({},c))],a)};function C(c){f=c,n(4,f)}function S(c){l=c,n(2,l)}const ee=({key:c,target:L})=>{c!==" "&&c!="Tab"&&c!="Control"&&c!="Shift"&&c!="Enter"&&n(0,r+=c),c==="Backspace"&&L.value===""&&n(0,r=""),c===" "&&u.focus()};function te(c){u=c,n(5,u)}function ne(c){i=c,n(3,i)}const re=({key:c,target:L})=>{c!==" "&&c!="Tab"&&c!="Control"&&c!="Shift"&&c!="Enter"&&n(1,o+=c),c==="Backspace"&&L.value===""&&n(1,o="")},ae=()=>he("/participants-assignments");return s.$$.update=()=>{s.$$.dirty&3&&n(6,t=r===""&&o==="")},[r,o,l,i,f,u,t,a,$,v,C,S,ee,te,ne,re,ae]}class Ke extends U{constructor(e){super();q(this,e,Ue,Oe,A,{})}}export{Ke as default};
