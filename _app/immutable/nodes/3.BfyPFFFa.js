import{s as W,n as g}from"../chunks/scheduler.CQ0VQmrD.js";import{S as X,i as Y,e as k,s as C,t as z,c as b,a as $,d as i,f as V,b as L,k as q,g as E,h as d,j as M,l as G,m as j,n as Z,o as N,p as T,q as ee,r as te,u as le,v as ne,w as ae}from"../chunks/index.BijzvjHs.js";import{e as y,s as A,h as se,P as re,G as B}from"../chunks/GameList.BDUEDMgK.js";function J(o,e,s){const l=o.slice();return l[3]=e[s],l[5]=s,l}function K(o,e,s){const l=o.slice();return l[6]=e[s],l}function O(o,e,s){const l=o.slice();return l[3]=e[s],l[5]=s,l}function Q(o){let e,s=o[3].name+"",l;return{c(){e=k("p"),l=z(s),this.h()},l(t){e=b(t,"P",{class:!0});var n=$(e);l=L(n,s),n.forEach(i),this.h()},h(){q(e,"class","player-name win-"+o[2][o[5]]+" svelte-1sxqnmd")},m(t,n){E(t,e,n),d(e,l)},p(t,n){n&1&&s!==(s=t[3].name+"")&&M(l,s)},d(t){t&&i(e)}}}function R(o){let e,s=A(o[6][0])+"",l,t;return{c(){e=k("p"),l=z(s),t=C(),this.h()},l(n){e=b(n,"P",{class:!0});var c=$(e);l=L(c,s),t=V(c),c.forEach(i),this.h()},h(){q(e,"class","svelte-1sxqnmd"),j(e,"staged",o[6][1])},m(n,c){E(n,e,c),d(e,l),d(e,t)},p:g,d(n){n&&i(e)}}}function U(o){let e,s=A(o[0].scores[o[5]])+"",l;return{c(){e=k("p"),l=z(s),this.h()},l(t){e=b(t,"P",{class:!0});var n=$(e);l=L(n,s),n.forEach(i),this.h()},h(){q(e,"class","svelte-1sxqnmd"),j(e,"staged",o[0].staged[o[5]])},m(t,n){E(t,e,n),d(e,l)},p(t,n){n&1&&s!==(s=A(t[0].scores[t[5]])+"")&&M(l,s),n&1&&j(e,"staged",t[0].staged[t[5]])},d(t){t&&i(e)}}}function oe(o){let e,s,l,t,n,c,f,D,I=o[0].date.toDateString()+"",w,P=y(o[0].players),u=[];for(let r=0;r<P.length;r+=1)u[r]=Q(O(o,P,r));let S=y(o[1]),_=[];for(let r=0;r<S.length;r+=1)_[r]=R(K(o,S,r));let x=y(o[0].players),m=[];for(let r=0;r<x.length;r+=1)m[r]=U(J(o,x,r));return{c(){e=k("div"),s=k("div");for(let r=0;r<u.length;r+=1)u[r].c();l=C(),t=k("div");for(let r=0;r<_.length;r+=1)_[r].c();n=C(),c=k("div");for(let r=0;r<m.length;r+=1)m[r].c();f=C(),D=k("p"),w=z(I),this.h()},l(r){e=b(r,"DIV",{class:!0});var h=$(e);s=b(h,"DIV",{class:!0});var a=$(s);for(let v=0;v<u.length;v+=1)u[v].l(a);a.forEach(i),l=V(h),t=b(h,"DIV",{class:!0});var p=$(t);for(let v=0;v<_.length;v+=1)_[v].l(p);p.forEach(i),n=V(h),c=b(h,"DIV",{class:!0});var F=$(c);for(let v=0;v<m.length;v+=1)m[v].l(F);F.forEach(i),f=V(h),D=b(h,"P",{class:!0});var H=$(D);w=L(H,I),H.forEach(i),h.forEach(i),this.h()},h(){q(s,"class","equal-fill players svelte-1sxqnmd"),q(t,"class","equal-fill prev-scores svelte-1sxqnmd"),q(c,"class","equal-fill post-scores svelte-1sxqnmd"),q(D,"class","date svelte-1sxqnmd"),q(e,"class","game svelte-1sxqnmd")},m(r,h){E(r,e,h),d(e,s);for(let a=0;a<u.length;a+=1)u[a]&&u[a].m(s,null);d(e,l),d(e,t);for(let a=0;a<_.length;a+=1)_[a]&&_[a].m(t,null);d(e,n),d(e,c);for(let a=0;a<m.length;a+=1)m[a]&&m[a].m(c,null);d(e,f),d(e,D),d(D,w)},p(r,[h]){if(h&5){P=y(r[0].players);let a;for(a=0;a<P.length;a+=1){const p=O(r,P,a);u[a]?u[a].p(p,h):(u[a]=Q(p),u[a].c(),u[a].m(s,null))}for(;a<u.length;a+=1)u[a].d(1);u.length=P.length}if(h&2){S=y(r[1]);let a;for(a=0;a<S.length;a+=1){const p=K(r,S,a);_[a]?_[a].p(p,h):(_[a]=R(p),_[a].c(),_[a].m(t,null))}for(;a<_.length;a+=1)_[a].d(1);_.length=S.length}if(h&1){x=y(r[0].players);let a;for(a=0;a<x.length;a+=1){const p=J(r,x,a);m[a]?m[a].p(p,h):(m[a]=U(p),m[a].c(),m[a].m(c,null))}for(;a<m.length;a+=1)m[a].d(1);m.length=x.length}h&1&&I!==(I=r[0].date.toDateString()+"")&&M(w,I)},i:g,o:g,d(r){r&&i(e),G(u,r),G(_,r),G(m,r)}}}function ce(o,e,s){let{game:l}=e,t=[];for(let c of l.players)t.push(l.getPlayerPreviousScoreStage(c));let n=l.getScoreDifference();return o.$$set=c=>{"game"in c&&s(0,l=c.game)},[l,t,n]}class ie extends X{constructor(e){super(),Y(this,e,ce,oe,W,{game:0})}}function he(o,e,s){const l=o.slice();return l[2]=e[s],l}function fe(o){return{c:g,l:g,m:g,i:g,o:g,d:g}}function ue(o){let e,s,l=y(B.games.reverse()),t=[];for(let n=0;n<l.length;n+=1)t[n]=_e(he(o,l,n));return{c(){e=k("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=b(n,"DIV",{class:!0});var c=$(e);for(let f=0;f<t.length;f+=1)t[f].l(c);c.forEach(i),this.h()},h(){q(e,"class","game-list")},m(n,c){E(n,e,c);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);s=!0},i(n){if(!s){for(let c=0;c<l.length;c+=1)N(t[c]);s=!0}},o(n){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)T(t[c]);s=!1},d(n){n&&i(e),G(t,n)}}}function _e(o){let e,s;return e=new ie({props:{game:o[2]}}),{c(){ee(e.$$.fragment)},l(l){te(e.$$.fragment,l)},m(l,t){le(e,l,t),s=!0},p:g,i(l){s||(N(e.$$.fragment,l),s=!0)},o(l){T(e.$$.fragment,l),s=!1},d(l){ne(e,l)}}}function me(o){let e,s="Loading Data";return{c(){e=k("p"),e.textContent=s},l(l){e=b(l,"P",{"data-svelte-h":!0}),ae(e)!=="svelte-14rifgg"&&(e.textContent=s)},m(l,t){E(l,e,t)},i:g,o:g,d(l){l&&i(e)}}}function de(o){let e,s,l,t={ctx:o,current:null,token:null,hasCatch:!1,pending:me,then:ue,catch:fe,blocks:[,,,]};return se(o[0](),t),{c(){e=C(),s=k("main"),t.block.c(),this.h()},l(n){Z("svelte-vimel9",document.head).forEach(i),e=V(n),s=b(n,"MAIN",{});var f=$(s);t.block.l(f),f.forEach(i),this.h()},h(){document.title="shengji games"},m(n,c){E(n,e,c),E(n,s,c),t.block.m(s,t.anchor=null),t.mount=()=>s,t.anchor=null,l=!0},p(n,[c]){o=n},i(n){l||(N(t.block),l=!0)},o(n){for(let c=0;c<3;c+=1){const f=t.blocks[c];T(f)}l=!1},d(n){n&&(i(e),i(s)),t.block.d(),t.token=null,t=null}}}function ge(o){async function e(){return await re.initialize(),B.initialize().then(()=>B.games[1])}return[e]}class be extends X{constructor(e){super(),Y(this,e,ge,de,W,{})}}export{be as component};