import{S as w,i as M,s as W,M as D,j as z,m as G,o as J,x as N,u as P,v as R,N as F,O,P as Q,e as $,t as S,k as H,c as v,a as j,g as E,d as o,n as I,b as d,Q as V,f as c,F as b}from"../chunks/vendor-b041d247.js";import{p as q}from"../chunks/participants-store-bc0b3d81.js";function A(u){let e;return{c(){e=S("Let's Begin")},l(a){e=E(a,"Let's Begin")},m(a,s){c(a,e,s)},d(a){a&&o(e)}}}function K(u){let e,a,s,r,p,m,l,f,L,C,k,B,y,_,i,x;return i=new Q({props:{block:!0,size:"lg",color:"success",href:"/participants-form",$$slots:{default:[A]},$$scope:{ctx:u}}}),{c(){e=$("h1"),a=S("WICHTELN (Secret Santa)"),s=H(),r=$("hr"),p=H(),m=$("div"),l=$("p"),f=$("img"),C=S(`Get started by entering your participants names
			`),k=$("br"),B=S(`
			This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured
			content or information.`),y=H(),_=$("p"),z(i.$$.fragment),this.h()},l(t){e=v(t,"H1",{class:!0});var n=j(e);a=E(n,"WICHTELN (Secret Santa)"),n.forEach(o),s=I(t),r=v(t,"HR",{class:!0}),p=I(t),m=v(t,"DIV",{class:!0});var h=j(m);l=v(h,"P",{});var g=j(l);f=v(g,"IMG",{src:!0,alt:!0,class:!0}),C=E(g,`Get started by entering your participants names
			`),k=v(g,"BR",{}),B=E(g,`
			This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured
			content or information.`),g.forEach(o),h.forEach(o),y=I(t),_=v(t,"P",{class:!0});var T=j(_);G(i.$$.fragment,T),T.forEach(o),this.h()},h(){d(e,"class","display-3"),d(r,"class","my-2"),V(f.src,L="/SantaClaus.svg")||d(f,"src",L),d(f,"alt","Santa Claus"),d(f,"class","svelte-1h1zivj"),d(m,"class","content svelte-1h1zivj"),d(_,"class","lead")},m(t,n){c(t,e,n),b(e,a),c(t,s,n),c(t,r,n),c(t,p,n),c(t,m,n),b(m,l),b(l,f),b(l,C),b(l,k),b(l,B),c(t,y,n),c(t,_,n),J(i,_,null),x=!0},p(t,n){const h={};n&2&&(h.$$scope={dirty:n,ctx:t}),i.$set(h)},i(t){x||(N(i.$$.fragment,t),x=!0)},o(t){P(i.$$.fragment,t),x=!1},d(t){t&&o(e),t&&o(s),t&&o(r),t&&o(p),t&&o(m),t&&o(y),t&&o(_),R(i)}}}function U(u){let e,a;return e=new D({props:{$$slots:{default:[K]},$$scope:{ctx:u}}}),{c(){z(e.$$.fragment)},l(s){G(e.$$.fragment,s)},m(s,r){J(e,s,r),a=!0},p(s,[r]){const p={};r&2&&(p.$$scope={dirty:r,ctx:s}),e.$set(p)},i(s){a||(N(e.$$.fragment,s),a=!0)},o(s){P(e.$$.fragment,s),a=!1},d(s){R(e,s)}}}function X(u,e,a){let s;return F(u,q,r=>a(0,s=r)),O(q,s=[],s),[]}class tt extends w{constructor(e){super();M(this,e,X,U,W,{})}}export{tt as default};