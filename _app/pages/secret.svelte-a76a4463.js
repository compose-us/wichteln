import{a8 as I,S as N,i as B,s as H,a9 as O,j as p,m as g,o as d,x as $,u as _,v as b,A as P,e as w,t as h,c as y,a as C,g as v,d as i,f as m,F as k,h as S,U as W,N as Y,V as M,W as Q,k as j,n as E,l as V,r as q,w as z,b as D,aa as U,P as F,G as A}from"../chunks/vendor-b041d247.js";import{g as J}from"../chunks/navigation-51f4a605.js";import{C as K}from"../chunks/card-label-53abe93d.js";import"../chunks/singletons-12a22614.js";const L=()=>{const a=I("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}},R={subscribe(a){return L().page.subscribe(a)}};function T(a){let e,s;return{c(){e=w("h1"),s=h(a[1])},l(t){e=y(t,"H1",{});var r=C(e);s=v(r,a[1]),r.forEach(i)},m(t,r){m(t,e,r),k(e,s)},p(t,r){r&2&&S(s,t[1])},d(t){t&&i(e)}}}function X(a){let e,s;return e=new O({props:{isOpen:a[0],$$slots:{default:[T]},$$scope:{ctx:a}}}),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){d(e,t,r),s=!0},p(t,[r]){const n={};r&1&&(n.isOpen=t[0]),r&10&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}function Z(a,e,s){let{secret:t}=e,{reveal:r=!1}=e,n;return P(()=>{s(1,n=atob(t))}),a.$$set=c=>{"secret"in c&&s(2,t=c.secret),"reveal"in c&&s(0,r=c.reveal)},[r,n,t]}class x extends N{constructor(e){super();B(this,e,Z,X,H,{secret:2,reveal:0})}}function ee(a){let e,s;return{c(){e=w("p"),s=h("invalid url")},l(t){e=y(t,"P",{});var r=C(e);s=v(r,"invalid url"),r.forEach(i)},m(t,r){m(t,e,r),k(e,s)},p:A,i:A,o:A,d(t){t&&i(e)}}}function te(a){let e,s,t,r;function n(l,f){return l[2]?re:se}let c=n(a),o=c(a);return t=new x({props:{reveal:a[2],secret:a[1]}}),{c(){e=w("div"),o.c(),s=j(),p(t.$$.fragment),this.h()},l(l){e=y(l,"DIV",{class:!0});var f=C(e);o.l(f),s=E(f),g(t.$$.fragment,f),f.forEach(i),this.h()},h(){D(e,"class","verification svelte-1ddljo8")},m(l,f){m(l,e,f),o.m(e,null),k(e,s),d(t,e,null),r=!0},p(l,f){c===(c=n(l))&&o?o.p(l,f):(o.d(1),o=c(l),o&&(o.c(),o.m(e,s)));const u={};f&4&&(u.reveal=l[2]),f&2&&(u.secret=l[1]),t.$set(u)},i(l){r||($(t.$$.fragment,l),r=!0)},o(l){_(t.$$.fragment,l),r=!1},d(l){l&&i(e),o.d(),b(t)}}}function se(a){let e,s,t,r;return{c(){e=w("h2"),s=h("Are you really: "),t=h(a[0]),r=h("?")},l(n){e=y(n,"H2",{});var c=C(e);s=v(c,"Are you really: "),t=v(c,a[0]),r=v(c,"?"),c.forEach(i)},m(n,c){m(n,e,c),k(e,s),k(e,t),k(e,r)},p(n,c){c&1&&S(t,n[0])},d(n){n&&i(e)}}}function re(a){let e,s,t;return{c(){e=w("h2"),s=h(a[0]),t=h(", your secret santa assignment is:")},l(r){e=y(r,"H2",{});var n=C(e);s=v(n,a[0]),t=v(n,", your secret santa assignment is:"),n.forEach(i)},m(r,n){m(r,e,n),k(e,s),k(e,t)},p(r,n){n&1&&S(s,r[0])},d(r){r&&i(e)}}}function ne(a){let e,s,t,r;const n=[te,ee],c=[];function o(l,f){return l[0]&&l[1]?0:1}return e=o(a),s=c[e]=n[e](a),{c(){s.c(),t=V()},l(l){s.l(l),t=V()},m(l,f){c[e].m(l,f),m(l,t,f),r=!0},p(l,f){let u=e;e=o(l),e===u?c[e].p(l,f):(q(),_(c[u],1,1,()=>{c[u]=null}),z(),s=c[e],s?s.p(l,f):(s=c[e]=n[e](l),s.c()),$(s,1),s.m(t.parentNode,t))},i(l){r||($(s),r=!0)},o(l){_(s),r=!1},d(l){c[e].d(l),l&&i(t)}}}function G(a){let e,s;return e=new U({props:{$$slots:{default:[oe]},$$scope:{ctx:a}}}),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){d(e,t,r),s=!0},p(t,r){const n={};r&132&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}function ae(a){let e;return{c(){e=h("Yes")},l(s){e=v(s,"Yes")},m(s,t){m(s,e,t)},d(s){s&&i(e)}}}function le(a){let e;return{c(){e=h("No")},l(s){e=v(s,"No")},m(s,t){m(s,e,t)},d(s){s&&i(e)}}}function oe(a){let e,s,t,r;return e=new F({props:{size:"lg",color:"success",$$slots:{default:[ae]},$$scope:{ctx:a}}}),e.$on("click",a[3]),t=new F({props:{size:"lg",color:"danger",$$slots:{default:[le]},$$scope:{ctx:a}}}),t.$on("click",a[4]),{c(){p(e.$$.fragment),s=j(),p(t.$$.fragment)},l(n){g(e.$$.fragment,n),s=E(n),g(t.$$.fragment,n)},m(n,c){d(e,n,c),m(n,s,c),d(t,n,c),r=!0},p(n,c){const o={};c&128&&(o.$$scope={dirty:c,ctx:n}),e.$set(o);const l={};c&128&&(l.$$scope={dirty:c,ctx:n}),t.$set(l)},i(n){r||($(e.$$.fragment,n),$(t.$$.fragment,n),r=!0)},o(n){_(e.$$.fragment,n),_(t.$$.fragment,n),r=!1},d(n){b(e,n),n&&i(s),b(t,n)}}}function ce(a){let e,s,t=!a[2]&&G(a);return{c(){e=w("div"),t&&t.c(),this.h()},l(r){e=y(r,"DIV",{class:!0});var n=C(e);t&&t.l(n),n.forEach(i),this.h()},h(){D(e,"class","verification svelte-1ddljo8")},m(r,n){m(r,e,n),t&&t.m(e,null),s=!0},p(r,n){r[2]?t&&(q(),_(t,1,1,()=>{t=null}),z()):t?(t.p(r,n),n&4&&$(t,1)):(t=G(r),t.c(),$(t,1),t.m(e,null))},i(r){s||($(t),s=!0)},o(r){_(t),s=!1},d(r){r&&i(e),t&&t.d()}}}function fe(a){let e,s,t,r,n,c;return e=new K({props:{label:"Wichteln Assignment"}}),t=new M({props:{$$slots:{default:[ne]},$$scope:{ctx:a}}}),n=new Q({props:{$$slots:{default:[ce]},$$scope:{ctx:a}}}),{c(){p(e.$$.fragment),s=j(),p(t.$$.fragment),r=j(),p(n.$$.fragment)},l(o){g(e.$$.fragment,o),s=E(o),g(t.$$.fragment,o),r=E(o),g(n.$$.fragment,o)},m(o,l){d(e,o,l),m(o,s,l),d(t,o,l),m(o,r,l),d(n,o,l),c=!0},p(o,l){const f={};l&135&&(f.$$scope={dirty:l,ctx:o}),t.$set(f);const u={};l&132&&(u.$$scope={dirty:l,ctx:o}),n.$set(u)},i(o){c||($(e.$$.fragment,o),$(t.$$.fragment,o),$(n.$$.fragment,o),c=!0)},o(o){_(e.$$.fragment,o),_(t.$$.fragment,o),_(n.$$.fragment,o),c=!1},d(o){b(e,o),o&&i(s),b(t,o),o&&i(r),b(n,o)}}}function ie(a){let e,s;return e=new W({props:{$$slots:{default:[fe]},$$scope:{ctx:a}}}),{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){d(e,t,r),s=!0},p(t,[r]){const n={};r&135&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}function ue(a,e,s){let t;Y(a,R,u=>s(5,t=u));const r=t.query;let{assignee:n=r.get("assignee")}=e,{secret:c=r.get("secret")}=e,o=!1;const l=()=>s(2,o=!0),f=()=>J("/");return a.$$set=u=>{"assignee"in u&&s(0,n=u.assignee),"secret"in u&&s(1,c=u.secret)},[n,c,o,l,f]}class ge extends N{constructor(e){super();B(this,e,ue,ie,H,{assignee:0,secret:1})}}export{ge as default};