import{S as B,i as W,s as H,a8 as I,j as p,m as d,o as g,x as u,u as $,v as h,A as N,e as w,t as b,c as S,a as j,g as k,d as i,f as _,F as v,h as E,U as J,V as O,W as U,k as C,n as D,l as V,r as q,w as y,b as z,a9 as A,P as F,G as P}from"../chunks/vendor-52cac395.js";import{g as L}from"../chunks/navigation-51f4a605.js";import{C as M}from"../chunks/card-label-8e38f8e3.js";import"../chunks/singletons-12a22614.js";function R(c){let t,r;return{c(){t=w("h1"),r=b(c[1])},l(e){t=S(e,"H1",{});var n=j(t);r=k(n,c[1]),n.forEach(i)},m(e,n){_(e,t,n),v(t,r)},p(e,n){n&2&&E(r,e[1])},d(e){e&&i(t)}}}function K(c){let t,r;return t=new I({props:{isOpen:c[0],$$slots:{default:[R]},$$scope:{ctx:c}}}),{c(){p(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,n){g(t,e,n),r=!0},p(e,[n]){const s={};n&1&&(s.isOpen=e[0]),n&10&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){h(t,e)}}}function Q(c,t,r){let{secret:e}=t,{reveal:n=!1}=t,s;return N(()=>{r(1,s=atob(e))}),c.$$set=o=>{"secret"in o&&r(2,e=o.secret),"reveal"in o&&r(0,n=o.reveal)},[n,s,e]}class T extends B{constructor(t){super();W(this,t,Q,K,H,{secret:2,reveal:0})}}function X(c){let t,r;return{c(){t=w("p"),r=b("ung\xFCltige url")},l(e){t=S(e,"P",{});var n=j(t);r=k(n,"ung\xFCltige url"),n.forEach(i)},m(e,n){_(e,t,n),v(t,r)},p:P,i:P,o:P,d(e){e&&i(t)}}}function Y(c){let t,r,e,n;function s(l,f){return l[2]?x:Z}let o=s(c),a=o(c);return e=new T({props:{reveal:c[2],secret:c[1]}}),{c(){t=w("div"),a.c(),r=C(),p(e.$$.fragment),this.h()},l(l){t=S(l,"DIV",{class:!0});var f=j(t);a.l(f),r=D(f),d(e.$$.fragment,f),f.forEach(i),this.h()},h(){z(t,"class","verification svelte-1ddljo8")},m(l,f){_(l,t,f),a.m(t,null),v(t,r),g(e,t,null),n=!0},p(l,f){o===(o=s(l))&&a?a.p(l,f):(a.d(1),a=o(l),a&&(a.c(),a.m(t,r)));const m={};f&4&&(m.reveal=l[2]),f&2&&(m.secret=l[1]),e.$set(m)},i(l){n||(u(e.$$.fragment,l),n=!0)},o(l){$(e.$$.fragment,l),n=!1},d(l){l&&i(t),a.d(),h(e)}}}function Z(c){let t,r,e,n;return{c(){t=w("h2"),r=b("Bist Du wirklich: "),e=b(c[0]),n=b("?")},l(s){t=S(s,"H2",{});var o=j(t);r=k(o,"Bist Du wirklich: "),e=k(o,c[0]),n=k(o,"?"),o.forEach(i)},m(s,o){_(s,t,o),v(t,r),v(t,e),v(t,n)},p(s,o){o&1&&E(e,s[0])},d(s){s&&i(t)}}}function x(c){let t,r,e;return{c(){t=w("h2"),r=b(c[0]),e=b(", Dein Wichtel-Partner:")},l(n){t=S(n,"H2",{});var s=j(t);r=k(s,c[0]),e=k(s,", Dein Wichtel-Partner:"),s.forEach(i)},m(n,s){_(n,t,s),v(t,r),v(t,e)},p(n,s){s&1&&E(r,n[0])},d(n){n&&i(t)}}}function ee(c){let t,r,e,n;const s=[Y,X],o=[];function a(l,f){return l[0]&&l[1]?0:1}return t=a(c),r=o[t]=s[t](c),{c(){r.c(),e=V()},l(l){r.l(l),e=V()},m(l,f){o[t].m(l,f),_(l,e,f),n=!0},p(l,f){let m=t;t=a(l),t===m?o[t].p(l,f):(q(),$(o[m],1,1,()=>{o[m]=null}),y(),r=o[t],r?r.p(l,f):(r=o[t]=s[t](l),r.c()),u(r,1),r.m(e.parentNode,e))},i(l){n||(u(r),n=!0)},o(l){$(r),n=!1},d(l){o[t].d(l),l&&i(e)}}}function G(c){let t,r;return t=new A({props:{$$slots:{default:[ne]},$$scope:{ctx:c}}}),{c(){p(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,n){g(t,e,n),r=!0},p(e,n){const s={};n&68&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){h(t,e)}}}function te(c){let t;return{c(){t=b("Ja")},l(r){t=k(r,"Ja")},m(r,e){_(r,t,e)},d(r){r&&i(t)}}}function re(c){let t;return{c(){t=b("Nein")},l(r){t=k(r,"Nein")},m(r,e){_(r,t,e)},d(r){r&&i(t)}}}function ne(c){let t,r,e,n;return t=new F({props:{size:"lg",color:"success",$$slots:{default:[te]},$$scope:{ctx:c}}}),t.$on("click",c[3]),e=new F({props:{size:"lg",color:"danger",$$slots:{default:[re]},$$scope:{ctx:c}}}),e.$on("click",c[4]),{c(){p(t.$$.fragment),r=C(),p(e.$$.fragment)},l(s){d(t.$$.fragment,s),r=D(s),d(e.$$.fragment,s)},m(s,o){g(t,s,o),_(s,r,o),g(e,s,o),n=!0},p(s,o){const a={};o&64&&(a.$$scope={dirty:o,ctx:s}),t.$set(a);const l={};o&64&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){n||(u(t.$$.fragment,s),u(e.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),$(e.$$.fragment,s),n=!1},d(s){h(t,s),s&&i(r),h(e,s)}}}function se(c){let t,r,e=!c[2]&&G(c);return{c(){t=w("div"),e&&e.c(),this.h()},l(n){t=S(n,"DIV",{class:!0});var s=j(t);e&&e.l(s),s.forEach(i),this.h()},h(){z(t,"class","verification svelte-1ddljo8")},m(n,s){_(n,t,s),e&&e.m(t,null),r=!0},p(n,s){n[2]?e&&(q(),$(e,1,1,()=>{e=null}),y()):e?(e.p(n,s),s&4&&u(e,1)):(e=G(n),e.c(),u(e,1),e.m(t,null))},i(n){r||(u(e),r=!0)},o(n){$(e),r=!1},d(n){n&&i(t),e&&e.d()}}}function le(c){let t,r,e,n,s,o;return t=new M({props:{label:"Wichtel-Partner"}}),e=new O({props:{$$slots:{default:[ee]},$$scope:{ctx:c}}}),s=new U({props:{$$slots:{default:[se]},$$scope:{ctx:c}}}),{c(){p(t.$$.fragment),r=C(),p(e.$$.fragment),n=C(),p(s.$$.fragment)},l(a){d(t.$$.fragment,a),r=D(a),d(e.$$.fragment,a),n=D(a),d(s.$$.fragment,a)},m(a,l){g(t,a,l),_(a,r,l),g(e,a,l),_(a,n,l),g(s,a,l),o=!0},p(a,l){const f={};l&71&&(f.$$scope={dirty:l,ctx:a}),e.$set(f);const m={};l&68&&(m.$$scope={dirty:l,ctx:a}),s.$set(m)},i(a){o||(u(t.$$.fragment,a),u(e.$$.fragment,a),u(s.$$.fragment,a),o=!0)},o(a){$(t.$$.fragment,a),$(e.$$.fragment,a),$(s.$$.fragment,a),o=!1},d(a){h(t,a),a&&i(r),h(e,a),a&&i(n),h(s,a)}}}function ae(c){let t,r;return t=new J({props:{$$slots:{default:[le]},$$scope:{ctx:c}}}),{c(){p(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,n){g(t,e,n),r=!0},p(e,[n]){const s={};n&71&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){h(t,e)}}}function oe(c,t,r){let e,n,s;N(()=>{e=new URLSearchParams(document.location.search.toString()),r(0,n=e.get("assignee")),r(1,s=e.get("secret"))});let o=!1;return[n,s,o,()=>r(2,o=!0),()=>L("/")]}class $e extends B{constructor(t){super();W(this,t,oe,ae,H,{})}}export{$e as default};
