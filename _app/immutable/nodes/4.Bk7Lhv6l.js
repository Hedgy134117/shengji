import{s as Ie,n as R,o as Me,r as Qe}from"../chunks/scheduler.CQ0VQmrD.js";import{S as Ae,i as Oe,e as p,s as k,c as v,a as D,q as X,f as E,d as b,k as n,g as J,h as r,D as Se,r as ne,l as Ce,t as le,b as ae,j as je,H as he,y as oe,E as _e,n as Ve,o as Ge,p as Ue,u as Xe,v as Ye,w as Ze,x as $e}from"../chunks/index.B_jzJh3r.js";import{a as qe,c as Be,b as me,G as pe,f as xe,T as et,g as tt,e as re,s as lt,h as at,P as Fe}from"../chunks/GameList.DUW6xOGB.js";const nt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function st(t){return JSON.parse(JSON.stringify(Object.fromEntries(t)))}async function it(t){let e=st(t);return qe(Be(me,"players"),{name:e.name,level:e.level,prestige:e.prestige})}function rt(t,e,l){if(e.length<4)return"Missing players";for(let i of pe.games)if(i.date.getTime()==t.getTime())return"Game already exists at this time";let a=e.map(i=>xe(me,`players/${i.id}`)),o=[],h=[];for(let i of Object.keys(l))o.push(l[i][0]),h.push(l[i][1]);return e.length!==o.length||e.length!==h.length?"Missing scores":qe(Be(me,"games"),{date:et.fromDate(new Date(t)),players:a,scores:o,staged:h}).then(()=>pe.games.push(new tt(t,e,o,h)))}function ye(t,e,l){const a=t.slice();return a[13]=e[l],a}function De(t,e,l){const a=t.slice();return a[13]=e[l],a}function He(t){let e,l,a,o,h,i,f,d=t[13].name+"",w,L,S,M,C;function B(){return t[8](t[13])}return{c(){e=p("li"),l=p("input"),h=k(),i=p("label"),f=p("span"),w=le(d),S=k(),this.h()},l(y){e=v(y,"LI",{class:!0});var s=D(e);l=v(s,"INPUT",{type:!0,id:!0,name:!0,class:!0}),h=E(s),i=v(s,"LABEL",{for:!0,class:!0});var m=D(i);f=v(m,"SPAN",{});var H=D(f);w=ae(H,d),H.forEach(b),m.forEach(b),S=E(s),s.forEach(b),this.h()},h(){n(l,"type","checkbox"),n(l,"id",a=t[13].id),n(l,"name",o=t[13].name),n(l,"class","svelte-1x7fdc7"),n(i,"for",L=t[13].id),n(i,"class","clickable-label svelte-1x7fdc7"),n(e,"class","svelte-1x7fdc7")},m(y,s){J(y,e,s),r(e,l),r(e,h),r(e,i),r(i,f),r(f,w),r(e,S),M||(C=ne(l,"change",B),M=!0)},p(y,s){t=y,s&1&&a!==(a=t[13].id)&&n(l,"id",a),s&1&&o!==(o=t[13].name)&&n(l,"name",o),s&1&&d!==(d=t[13].name+"")&&je(w,d),s&1&&L!==(L=t[13].id)&&n(i,"for",L)},d(y){y&&b(e),M=!1,C()}}}function ot(t){let e,l=t[6]([t[13].getScore(),t[13].isStaged()])+"",a;return{c(){e=new he(!1),a=oe(),this.h()},l(o){e=_e(o,!1),a=oe(),this.h()},h(){e.a=a},m(o,h){e.m(l,o,h),J(o,a,h)},p(o,h){h&2&&l!==(l=o[6]([o[13].getScore(),o[13].isStaged()])+"")&&e.p(l)},d(o){o&&(b(a),e.d())}}}function ut(t){let e,l=t[6]([t[13].getScore(),t[13].isStaged()])+"",a,o,h=t[6](t[2][t[13].id])+"",i;return{c(){e=new he(!1),a=le(` →\r
							`),o=new he(!1),i=oe(),this.h()},l(f){e=_e(f,!1),a=ae(f,` →\r
							`),o=_e(f,!1),i=oe(),this.h()},h(){e.a=a,o.a=i},m(f,d){e.m(l,f,d),J(f,a,d),o.m(h,f,d),J(f,i,d)},p(f,d){d&2&&l!==(l=f[6]([f[13].getScore(),f[13].isStaged()])+"")&&e.p(l),d&6&&h!==(h=f[6](f[2][f[13].id])+"")&&o.p(h)},d(f){f&&(e.d(),b(a),b(i),o.d())}}}function Ne(t){let e,l,a,o=t[13].name+"",h,i,f,d,w,L,S,M,C,B,y,s,m,H,j,Y,Z,I,O,K,F,N,Q,$,G,T,W,P,_,g,u,A,x,ee,U,V,ue,se,fe,te,de,ce,ve;function ze(){return t[9](t[13])}function Re(){return t[10](t[13])}function Je(){return t[11](t[13])}function Ke(){return t[12](t[13])}function ge(z,c){return z[2][z[13].id]!==void 0?ut:ot}let ie=ge(t),q=ie(t);return{c(){e=p("li"),l=p("label"),a=p("span"),h=le(o),f=k(),d=p("input"),M=k(),C=p("label"),B=le("L"),s=k(),m=p("input"),Z=k(),I=p("label"),O=le("W"),F=k(),N=p("input"),T=k(),W=p("label"),P=le("WW"),g=k(),u=p("input"),U=k(),V=p("label"),ue=le("WWW"),fe=k(),te=p("p"),q.c(),de=k(),this.h()},l(z){e=v(z,"LI",{class:!0});var c=D(e);l=v(c,"LABEL",{for:!0,class:!0});var be=D(l);a=v(be,"SPAN",{});var we=D(a);h=ae(we,o),we.forEach(b),be.forEach(b),f=E(c),d=v(c,"INPUT",{name:!0,id:!0,type:!0,class:!0}),M=E(c),C=v(c,"LABEL",{for:!0,class:!0});var Le=D(C);B=ae(Le,"L"),Le.forEach(b),s=E(c),m=v(c,"INPUT",{name:!0,id:!0,type:!0,class:!0}),Z=E(c),I=v(c,"LABEL",{for:!0,class:!0});var ke=D(I);O=ae(ke,"W"),ke.forEach(b),F=E(c),N=v(c,"INPUT",{name:!0,id:!0,type:!0,class:!0}),T=E(c),W=v(c,"LABEL",{for:!0,class:!0});var Ee=D(W);P=ae(Ee,"WW"),Ee.forEach(b),g=E(c),u=v(c,"INPUT",{name:!0,id:!0,type:!0,class:!0}),U=E(c),V=v(c,"LABEL",{for:!0,class:!0});var Te=D(V);ue=ae(Te,"WWW"),Te.forEach(b),fe=E(c),te=v(c,"P",{class:!0});var Pe=D(te);q.l(Pe),Pe.forEach(b),de=E(c),c.forEach(b),this.h()},h(){n(l,"for",i=t[13].id+"-stage"),n(l,"class","name unclickable-label svelte-1x7fdc7"),n(d,"name",w=t[13].id+"-result"),d.value=L=t[13].id+"-loss",n(d,"id",S=t[13].id+"-loss"),n(d,"type","radio"),n(d,"class","svelte-1x7fdc7"),n(C,"for",y=t[13].id+"-loss"),n(C,"class","result-choice clickable-label svelte-1x7fdc7"),n(m,"name",H=t[13].id+"-result"),m.value=j=t[13].id+"-win-1",n(m,"id",Y=t[13].id+"-win-1"),n(m,"type","radio"),n(m,"class","svelte-1x7fdc7"),n(I,"for",K=t[13].id+"-win-1"),n(I,"class","result-choice clickable-label svelte-1x7fdc7"),n(N,"name",Q=t[13].id+"-result"),N.value=$=t[13].id+"-win-2",n(N,"id",G=t[13].id+"-win-2"),n(N,"type","radio"),n(N,"class","svelte-1x7fdc7"),n(W,"for",_=t[13].id+"-win-2"),n(W,"class","result-choice clickable-label svelte-1x7fdc7"),n(u,"name",A=t[13].id+"-result"),u.value=x=t[13].id+"-win-3",n(u,"id",ee=t[13].id+"-win-3"),n(u,"type","radio"),n(u,"class","svelte-1x7fdc7"),n(V,"for",se=t[13].id+"-win-3"),n(V,"class","result-choice clickable-label svelte-1x7fdc7"),n(te,"class","unclickable-label result svelte-1x7fdc7"),n(e,"class","score svelte-1x7fdc7")},m(z,c){J(z,e,c),r(e,l),r(l,a),r(a,h),r(e,f),r(e,d),r(e,M),r(e,C),r(C,B),r(e,s),r(e,m),r(e,Z),r(e,I),r(I,O),r(e,F),r(e,N),r(e,T),r(e,W),r(W,P),r(e,g),r(e,u),r(e,U),r(e,V),r(V,ue),r(e,fe),r(e,te),q.m(te,null),r(e,de),ce||(ve=[ne(d,"change",ze),ne(m,"change",Re),ne(N,"change",Je),ne(u,"change",Ke)],ce=!0)},p(z,c){t=z,c&2&&o!==(o=t[13].name+"")&&je(h,o),c&2&&i!==(i=t[13].id+"-stage")&&n(l,"for",i),c&2&&w!==(w=t[13].id+"-result")&&n(d,"name",w),c&2&&L!==(L=t[13].id+"-loss")&&(d.value=L),c&2&&S!==(S=t[13].id+"-loss")&&n(d,"id",S),c&2&&y!==(y=t[13].id+"-loss")&&n(C,"for",y),c&2&&H!==(H=t[13].id+"-result")&&n(m,"name",H),c&2&&j!==(j=t[13].id+"-win-1")&&(m.value=j),c&2&&Y!==(Y=t[13].id+"-win-1")&&n(m,"id",Y),c&2&&K!==(K=t[13].id+"-win-1")&&n(I,"for",K),c&2&&Q!==(Q=t[13].id+"-result")&&n(N,"name",Q),c&2&&$!==($=t[13].id+"-win-2")&&(N.value=$),c&2&&G!==(G=t[13].id+"-win-2")&&n(N,"id",G),c&2&&_!==(_=t[13].id+"-win-2")&&n(W,"for",_),c&2&&A!==(A=t[13].id+"-result")&&n(u,"name",A),c&2&&x!==(x=t[13].id+"-win-3")&&(u.value=x),c&2&&ee!==(ee=t[13].id+"-win-3")&&n(u,"id",ee),c&2&&se!==(se=t[13].id+"-win-3")&&n(V,"for",se),ie===(ie=ge(t))&&q?q.p(t,c):(q.d(1),q=ie(t),q&&(q.c(),q.m(te,null)))},d(z){z&&b(e),q.d(),ce=!1,Qe(ve)}}}function ft(t){let e,l,a="record game",o,h,i="when?",f,d,w="Date:",L,S,M,C,B="who played?",y,s,m,H,j,Y="what were the results?",Z,I,O,K,F,N='<button type="submit">record</button>',Q,$,G=re(t[0]),T=[];for(let _=0;_<G.length;_+=1)T[_]=He(De(t,G,_));let W=re(t[1]),P=[];for(let _=0;_<W.length;_+=1)P[_]=Ne(ye(t,W,_));return{c(){e=p("form"),l=p("h1"),l.textContent=a,o=k(),h=p("h2"),h.textContent=i,f=k(),d=p("label"),d.textContent=w,L=k(),S=p("input"),M=k(),C=p("h2"),C.textContent=B,y=k(),s=p("fieldset"),m=p("ul");for(let _=0;_<T.length;_+=1)T[_].c();H=k(),j=p("h2"),j.textContent=Y,Z=k(),I=p("fieldset"),O=p("ul");for(let _=0;_<P.length;_+=1)P[_].c();K=k(),F=p("p"),F.innerHTML=N,this.h()},l(_){e=v(_,"FORM",{method:!0,id:!0,class:!0});var g=D(e);l=v(g,"H1",{"data-svelte-h":!0}),X(l)!=="svelte-v9j2fd"&&(l.textContent=a),o=E(g),h=v(g,"H2",{"data-svelte-h":!0}),X(h)!=="svelte-1z0dykh"&&(h.textContent=i),f=E(g),d=v(g,"LABEL",{for:!0,"data-svelte-h":!0}),X(d)!=="svelte-1mfsj80"&&(d.textContent=w),L=E(g),S=v(g,"INPUT",{type:!0,name:!0,id:!0}),M=E(g),C=v(g,"H2",{"data-svelte-h":!0}),X(C)!=="svelte-18jthcy"&&(C.textContent=B),y=E(g),s=v(g,"FIELDSET",{});var u=D(s);m=v(u,"UL",{id:!0,class:!0});var A=D(m);for(let U=0;U<T.length;U+=1)T[U].l(A);A.forEach(b),u.forEach(b),H=E(g),j=v(g,"H2",{"data-svelte-h":!0}),X(j)!=="svelte-24ae4t"&&(j.textContent=Y),Z=E(g),I=v(g,"FIELDSET",{});var x=D(I);O=v(x,"UL",{id:!0,class:!0});var ee=D(O);for(let U=0;U<P.length;U+=1)P[U].l(ee);ee.forEach(b),x.forEach(b),K=E(g),F=v(g,"P",{"data-svelte-h":!0}),X(F)!=="svelte-3vltf7"&&(F.innerHTML=N),g.forEach(b),this.h()},h(){n(d,"for","date"),n(S,"type","datetime-local"),n(S,"name","date"),n(S,"id","date"),n(m,"id","playerList"),n(m,"class","wrap-list svelte-1x7fdc7"),n(O,"id","scoreList"),n(O,"class"," svelte-1x7fdc7"),n(e,"method","POST"),n(e,"id","recordGame"),n(e,"class","svelte-1x7fdc7")},m(_,g){J(_,e,g),r(e,l),r(e,o),r(e,h),r(e,f),r(e,d),r(e,L),r(e,S),Se(S,t[3]),r(e,M),r(e,C),r(e,y),r(e,s),r(s,m);for(let u=0;u<T.length;u+=1)T[u]&&T[u].m(m,null);r(e,H),r(e,j),r(e,Z),r(e,I),r(I,O);for(let u=0;u<P.length;u+=1)P[u]&&P[u].m(O,null);r(e,K),r(e,F),Q||($=ne(S,"input",t[7]),Q=!0)},p(_,[g]){if(g&8&&Se(S,_[3]),g&17){G=re(_[0]);let u;for(u=0;u<G.length;u+=1){const A=De(_,G,u);T[u]?T[u].p(A,g):(T[u]=He(A),T[u].c(),T[u].m(m,null))}for(;u<T.length;u+=1)T[u].d(1);T.length=G.length}if(g&102){W=re(_[1]);let u;for(u=0;u<W.length;u+=1){const A=ye(_,W,u);P[u]?P[u].p(A,g):(P[u]=Ne(A),P[u].c(),P[u].m(O,null))}for(;u<P.length;u+=1)P[u].d(1);P.length=W.length}},i:R,o:R,d(_){_&&b(e),Ce(T,_),Ce(P,_),Q=!1,$()}}}function dt(t,e,l){let{players:a}=e,o=[];function h(s){o.includes(s)?l(1,o=o.filter(m=>m.id!==s.id)):l(1,o=[...o,s])}let i={};function f(s,m){l(2,i[s.id]=[0,!1],i),l(2,i[s.id][0]=s.getScore(),i),l(2,i[s.id][1]=s.isStaged(),i),m===0?l(2,i[s.id][1]=!1,i):i[s.id][1]?l(2,i[s.id][0]+=m,i):(l(2,i[s.id][1]=!0,i),l(2,i[s.id][0]+=m-1,i)),i[s.id][0]>13&&l(2,i[s.id][0]-=12,i)}function d(s){let m=lt(s[0]);return s[1]?`<u>${m}</u>`:m}let w=new Date;Me(()=>{var s;(s=document.querySelector("#recordGame"))==null||s.addEventListener("submit",m=>{m.preventDefault();let H=rt(new Date(w),o,i);typeof H=="string"?alert(H):console.log(H)})});function L(){w=this.value,l(3,w)}const S=s=>h(s),M=s=>f(s,0),C=s=>f(s,1),B=s=>f(s,2),y=s=>f(s,3);return t.$$set=s=>{"players"in s&&l(0,a=s.players)},[a,o,i,w,h,f,d,L,S,M,C,B,y]}class ct extends Ae{constructor(e){super(),Oe(this,e,dt,ft,Ie,{players:0})}}const{document:We}=nt;function ht(t){return{c:R,l:R,m:R,i:R,o:R,d:R}}function _t(t){let e,l;return e=new ct({props:{players:Fe.players}}),{c(){Xe(e.$$.fragment)},l(a){Ye(e.$$.fragment,a)},m(a,o){Ze(e,a,o),l=!0},i(a){l||(Ge(e.$$.fragment,a),l=!0)},o(a){Ue(e.$$.fragment,a),l=!1},d(a){$e(e,a)}}}function mt(t){let e,l="Loading Players";return{c(){e=p("p"),e.textContent=l},l(a){e=v(a,"P",{"data-svelte-h":!0}),X(e)!=="svelte-1wsjfye"&&(e.textContent=l)},m(a,o){J(a,e,o)},i:R,o:R,d(a){a&&b(e)}}}function pt(t){let e,l,a,o='<h1>add player</h1> <p><label for="name"><span>Name:</span></label> <input type="text" name="name" id="name" required="" class="svelte-1pux4cw"/></p> <p><label for="level"><span>Level:</span></label> <input type="number" name="level" id="level" value="2" required="" class="svelte-1pux4cw"/></p> <p><label for="prestige"><span>Prestige:</span></label> <input type="number" name="prestige" id="prestige" value="0" required="" class="svelte-1pux4cw"/></p> <p><button type="submit">add</button></p>',h,i,f={ctx:t,current:null,token:null,hasCatch:!1,pending:mt,then:_t,catch:ht,blocks:[,,,]};return at(t[0](),f),{c(){e=k(),l=p("main"),a=p("form"),a.innerHTML=o,h=k(),f.block.c(),this.h()},l(d){Ve("svelte-1b6f4m5",We.head).forEach(b),e=E(d),l=v(d,"MAIN",{});var L=D(l);a=v(L,"FORM",{method:!0,id:!0,"data-svelte-h":!0}),X(a)!=="svelte-ezu4wc"&&(a.innerHTML=o),h=E(L),f.block.l(L),L.forEach(b),this.h()},h(){We.title="shengji record",n(a,"method","POST"),n(a,"id","recordPlayer")},m(d,w){J(d,e,w),J(d,l,w),r(l,a),r(l,h),f.block.m(l,f.anchor=null),f.mount=()=>l,f.anchor=null,i=!0},p(d,[w]){t=d},i(d){i||(Ge(f.block),i=!0)},o(d){for(let w=0;w<3;w+=1){const L=f.blocks[w];Ue(L)}i=!1},d(d){d&&(b(e),b(l)),f.block.d(),f.token=null,f=null}}}function vt(t){async function e(){return await Fe.initialize(),pe.initialize()}return Me(()=>{var l;(l=document.querySelector("#recordPlayer"))==null||l.addEventListener("submit",a=>{a.preventDefault(),it(new FormData(a.target))})}),[e]}class Lt extends Ae{constructor(e){super(),Oe(this,e,vt,pt,Ie,{})}}export{Lt as component};