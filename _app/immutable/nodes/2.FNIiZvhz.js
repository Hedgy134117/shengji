import{s as z,n as v}from"../chunks/scheduler.CQ0VQmrD.js";import{S as I,i as U,e as b,t as j,s as E,c as S,a as P,b as w,d as _,f as A,k,m as q,g as y,h as m,j as O,l as T,y as J,q as x,r as N,A as F,u as V,o as B,p as D,v as G,n as te,w as ee,x as se}from"../chunks/index.Dqynesj2.js";import{s as C,e as L,h as le,u as re,P as M,G as ae}from"../chunks/GameList.Bd8kArY9.js";import{g as ne}from"../chunks/globals.D0QH3NT1.js";function H(n,e,s){const t=n.slice();return t[4]=e[s],t}function K(n){let e,s=C(n[4][0])+"",t,r;return{c(){e=b("p"),t=j(s),r=E(),this.h()},l(a){e=S(a,"P",{class:!0});var l=P(e);t=w(l,s),r=A(l),l.forEach(_),this.h()},h(){k(e,"class","score svelte-18boys0"),q(e,"score__staged",n[4][1])},m(a,l){y(a,e,l),m(e,t),m(e,r)},p(a,l){l&8&&s!==(s=C(a[4][0])+"")&&O(t,s),l&8&&q(e,"score__staged",a[4][1])},d(a){a&&_(e)}}}function oe(n){let e,s,t=C(n[2])+"",r,a,l,g,u,h=C(n[1])+"",o,i=L(n[3].reverse()),c=[];for(let f=0;f<i.length;f+=1)c[f]=K(H(n,i,f));return{c(){e=b("div"),s=b("p"),r=j(t),a=E(),l=b("div");for(let f=0;f<c.length;f+=1)c[f].c();g=E(),u=b("p"),o=j(h),this.h()},l(f){e=S(f,"DIV",{class:!0});var p=P(e);s=S(p,"P",{class:!0});var d=P(s);r=w(d,t),d.forEach(_),a=A(p),l=S(p,"DIV",{class:!0});var R=P(l);for(let $=0;$<c.length;$+=1)c[$].l(R);R.forEach(_),g=A(p),u=S(p,"P",{class:!0});var W=P(u);o=w(W,h),W.forEach(_),p.forEach(_),this.h()},h(){k(s,"class","score score__curent svelte-18boys0"),q(s,"score__staged",n[0]),k(l,"class","score-list svelte-18boys0"),k(u,"class","score score__start svelte-18boys0"),k(e,"class","scores svelte-18boys0")},m(f,p){y(f,e,p),m(e,s),m(s,r),m(e,a),m(e,l);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(l,null);m(e,g),m(e,u),m(u,o)},p(f,[p]){if(p&4&&t!==(t=C(f[2])+"")&&O(r,t),p&1&&q(s,"score__staged",f[0]),p&8){i=L(f[3].reverse());let d;for(d=0;d<i.length;d+=1){const R=H(f,i,d);c[d]?c[d].p(R,p):(c[d]=K(R),c[d].c(),c[d].m(l,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=i.length}p&2&&h!==(h=C(f[1])+"")&&O(o,h)},i:v,o:v,d(f){f&&_(e),T(c,f)}}}function ie(n,e,s){let{isStaged:t}=e,{start:r}=e,{score:a}=e,{scoresAndStaged:l}=e;return n.$$set=g=>{"isStaged"in g&&s(0,t=g.isStaged),"start"in g&&s(1,r=g.start),"score"in g&&s(2,a=g.score),"scoresAndStaged"in g&&s(3,l=g.scoresAndStaged)},[t,r,a,l]}class ce extends I{constructor(e){super(),U(this,e,ie,oe,z,{isStaged:0,start:1,score:2,scoresAndStaged:3})}}function Q(n,e,s){const t=n.slice();return t[3]=e[s],t[5]=s,t}function X(n){let e,s=L(n[2]),t=[];for(let r=0;r<s.length;r+=1)t[r]=Y(Q(n,s,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=J()},l(r){for(let a=0;a<t.length;a+=1)t[a].l(r);e=J()},m(r,a){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(r,a);y(r,e,a)},p(r,a){if(a&4){s=L(r[2]);let l;for(l=0;l<s.length;l+=1){const g=Q(r,s,l);t[l]?t[l].p(g,a):(t[l]=Y(),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=s.length}},d(r){r&&_(e),T(t,r)}}}function Y(n){let e;return{c(){e=b("progress"),this.h()},l(s){e=S(s,"PROGRESS",{max:!0,class:!0}),P(e).forEach(_),this.h()},h(){e.value="1",k(e,"max","1"),k(e,"class","svelte-h8qevh")},m(s,t){y(s,e,t)},p:v,d(s){s&&_(e)}}}function fe(n){let e,s=Math.round(n[0]*100)+"",t,r,a=n[1]+1+"",l,g,u,h,o,i=n[2]!==null&&X(n);return{c(){e=b("p"),t=j(s),r=j("% to P"),l=j(a),g=E(),u=b("div"),i&&i.c(),h=E(),o=b("progress"),this.h()},l(c){e=S(c,"P",{class:!0});var f=P(e);t=w(f,s),r=w(f,"% to P"),l=w(f,a),f.forEach(_),g=A(c),u=S(c,"DIV",{class:!0});var p=P(u);i&&i.l(p),h=A(p),o=S(p,"PROGRESS",{max:!0,class:!0}),P(o).forEach(_),p.forEach(_),this.h()},h(){k(e,"class","prestige svelte-h8qevh"),o.value=n[0],k(o,"max","1"),k(o,"class","svelte-h8qevh"),k(u,"class","prestige-bars")},m(c,f){y(c,e,f),m(e,t),m(e,r),m(e,l),y(c,g,f),y(c,u,f),i&&i.m(u,null),m(u,h),m(u,o)},p(c,[f]){f&1&&s!==(s=Math.round(c[0]*100)+"")&&O(t,s),f&2&&a!==(a=c[1]+1+"")&&O(l,a),c[2]!==null?i?i.p(c,f):(i=X(c),i.c(),i.m(u,h)):i&&(i.d(1),i=null),f&1&&(o.value=c[0])},i:v,o:v,d(c){c&&(_(e),_(g),_(u)),i&&i.d()}}}function ue(n,e,s){let{progress:t}=e,{prestige:r}=e,a=null;return r>0&&(a=Array.from(" ".repeat(r))),n.$$set=l=>{"progress"in l&&s(0,t=l.progress),"prestige"in l&&s(1,r=l.prestige)},[t,r,a]}class he extends I{constructor(e){super(),U(this,e,ue,fe,z,{progress:0,prestige:1})}}function ge(n){let e,s,t=n[0].name+"",r,a,l,g,u,h;return l=new ce({props:{isStaged:n[0].isStaged(),start:n[0].start,score:n[0].getScore(),scoresAndStaged:n[0].getScoresWithStaged()}}),u=new he({props:{progress:n[0].getProgress(),prestige:n[0].getPrestige()}}),{c(){e=b("div"),s=b("p"),r=j(t),a=E(),x(l.$$.fragment),g=E(),x(u.$$.fragment),this.h()},l(o){e=S(o,"DIV",{class:!0});var i=P(e);s=S(i,"P",{class:!0,style:!0});var c=P(s);r=w(c,t),c.forEach(_),a=A(i),N(l.$$.fragment,i),g=A(i),N(u.$$.fragment,i),i.forEach(_),this.h()},h(){k(s,"class","player-name svelte-1r9zgva"),F(s,"border",n[0].getPrestige()+"px solid var(--accent-color)"),k(e,"class","player-box svelte-1r9zgva")},m(o,i){y(o,e,i),m(e,s),m(s,r),m(e,a),V(l,e,null),m(e,g),V(u,e,null),h=!0},p(o,[i]){(!h||i&1)&&t!==(t=o[0].name+"")&&O(r,t),(!h||i&1)&&F(s,"border",o[0].getPrestige()+"px solid var(--accent-color)");const c={};i&1&&(c.isStaged=o[0].isStaged()),i&1&&(c.start=o[0].start),i&1&&(c.score=o[0].getScore()),i&1&&(c.scoresAndStaged=o[0].getScoresWithStaged()),l.$set(c);const f={};i&1&&(f.progress=o[0].getProgress()),i&1&&(f.prestige=o[0].getPrestige()),u.$set(f)},i(o){h||(B(l.$$.fragment,o),B(u.$$.fragment,o),h=!0)},o(o){D(l.$$.fragment,o),D(u.$$.fragment,o),h=!1},d(o){o&&_(e),G(l),G(u)}}}function _e(n,e,s){let{player:t}=e;return n.$$set=r=>{"player"in r&&s(0,t=r.player)},[t]}class de extends I{constructor(e){super(),U(this,e,_e,ge,z,{player:0})}}const{document:Z}=ne;function pe(n,e,s){const t=n.slice();return t[2]=e[s],t}function me(n){return{c:v,l:v,m:v,p:v,i:v,o:v,d:v}}function ve(n){let e,s,t,r="Export to JSON",a,l,g,u=L(M.players),h=[];for(let o=0;o<u.length;o+=1)h[o]=be(pe(n,u,o));return{c(){e=b("div");for(let o=0;o<h.length;o+=1)h[o].c();s=E(),t=b("button"),t.textContent=r,this.h()},l(o){e=S(o,"DIV",{class:!0});var i=P(e);for(let c=0;c<h.length;c+=1)h[c].l(i);i.forEach(_),s=A(o),t=S(o,"BUTTON",{"data-svelte-h":!0}),ee(t)!=="svelte-p7y6s1"&&(t.textContent=r),this.h()},h(){k(e,"class","player-box-list")},m(o,i){y(o,e,i);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(e,null);y(o,s,i),y(o,t,i),a=!0,l||(g=se(t,"click",n[1]),l=!0)},p:v,i(o){if(!a){for(let i=0;i<u.length;i+=1)B(h[i]);a=!0}},o(o){h=h.filter(Boolean);for(let i=0;i<h.length;i+=1)D(h[i]);a=!1},d(o){o&&(_(e),_(s),_(t)),T(h,o),l=!1,g()}}}function be(n){let e,s;return e=new de({props:{player:n[2]}}),{c(){x(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,r){V(e,t,r),s=!0},p:v,i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function Se(n){let e,s="Loading Data";return{c(){e=b("p"),e.textContent=s},l(t){e=S(t,"P",{"data-svelte-h":!0}),ee(e)!=="svelte-14rifgg"&&(e.textContent=s)},m(t,r){y(t,e,r)},p:v,i:v,o:v,d(t){t&&_(e)}}}function ke(n){let e,s,t,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Se,then:ve,catch:me,blocks:[,,,]};return le(n[0](),r),{c(){e=E(),s=b("main"),r.block.c(),this.h()},l(a){te("svelte-1q4z6de",Z.head).forEach(_),e=A(a),s=S(a,"MAIN",{});var g=P(s);r.block.l(g),g.forEach(_),this.h()},h(){Z.title="shengji players"},m(a,l){y(a,e,l),y(a,s,l),r.block.m(s,r.anchor=null),r.mount=()=>s,r.anchor=null,t=!0},p(a,[l]){n=a,re(r,n,l)},i(a){t||(B(r.block),t=!0)},o(a){for(let l=0;l<3;l+=1){const g=r.blocks[l];D(g)}t=!1},d(a){a&&(_(e),_(s)),r.block.d(),r.token=null,r=null}}}function ye(n){async function e(){return await M.initialize(),ae.initialize()}function s(){let t={};for(let h of M.players)t[h.name]=h.getScoresWithStaged();let r=JSON.stringify(t),a=new Blob([r],{type:"application/json"}),l=URL.createObjectURL(a),g="export.json",u=document.createElement("a");u.href=l,u.download=g,u.click(),URL.revokeObjectURL(l),u.remove()}return[e,s]}class we extends I{constructor(e){super(),U(this,e,ye,ke,z,{})}}export{we as component};
