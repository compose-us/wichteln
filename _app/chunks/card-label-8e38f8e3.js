import{S as h,i as v,s as k,_ as B,j as u,m,o as _,x as c,u as o,v as $,e as C,c as w,a as H,d as f,b as j,f as i,$ as S,k as q,n as x,r as y,w as D,P as E,t as p,g as b,h as I}from"./vendor-52cac395.js";function g(s){let e,t,r;return t=new E({props:{color:"danger",href:"/",$$slots:{default:[L]},$$scope:{ctx:s}}}),{c(){e=C("div"),u(t.$$.fragment),this.h()},l(a){e=w(a,"DIV",{class:!0});var n=H(e);m(t.$$.fragment,n),n.forEach(f),this.h()},h(){j(e,"class","back-btn svelte-4tv59a")},m(a,n){i(a,e,n),_(t,e,null),r=!0},i(a){r||(c(t.$$.fragment,a),r=!0)},o(a){o(t.$$.fragment,a),r=!1},d(a){a&&f(e),$(t)}}}function L(s){let e;return{c(){e=p("Home")},l(t){e=b(t,"Home")},m(t,r){i(t,e,r)},d(t){t&&f(e)}}}function N(s){let e;return{c(){e=p(s[0])},l(t){e=b(t,s[0])},m(t,r){i(t,e,r)},p(t,r){r&1&&I(e,t[0])},d(t){t&&f(e)}}}function P(s){let e,t,r,a=s[1]&&g(s);return t=new S({props:{$$slots:{default:[N]},$$scope:{ctx:s}}}),{c(){a&&a.c(),e=q(),u(t.$$.fragment)},l(n){a&&a.l(n),e=x(n),m(t.$$.fragment,n)},m(n,l){a&&a.m(n,l),i(n,e,l),_(t,n,l),r=!0},p(n,l){n[1]?a?l&2&&c(a,1):(a=g(n),a.c(),c(a,1),a.m(e.parentNode,e)):a&&(y(),o(a,1,1,()=>{a=null}),D());const d={};l&5&&(d.$$scope={dirty:l,ctx:n}),t.$set(d)},i(n){r||(c(a),c(t.$$.fragment,n),r=!0)},o(n){o(a),o(t.$$.fragment,n),r=!1},d(n){a&&a.d(n),n&&f(e),$(t,n)}}}function T(s){let e,t;return e=new B({props:{$$slots:{default:[P]},$$scope:{ctx:s}}}),{c(){u(e.$$.fragment)},l(r){m(e.$$.fragment,r)},m(r,a){_(e,r,a),t=!0},p(r,[a]){const n={};a&7&&(n.$$scope={dirty:a,ctx:r}),e.$set(n)},i(r){t||(c(e.$$.fragment,r),t=!0)},o(r){o(e.$$.fragment,r),t=!1},d(r){$(e,r)}}}function V(s,e,t){let{label:r}=e,{backBtn:a=!0}=e;return s.$$set=n=>{"label"in n&&t(0,r=n.label),"backBtn"in n&&t(1,a=n.backBtn)},[r,a]}class A extends h{constructor(e){super();v(this,e,V,T,k,{label:0,backBtn:1})}}export{A as C};
