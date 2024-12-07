import{s as Ae,n as J,o as Ge,r as Ve}from"../chunks/scheduler.CQ0VQmrD.js";import{S as Oe,i as je,e as m,s as E,c as p,a as H,q as Y,f as y,d as g,k as n,g as K,h as o,D as Se,r as ne,l as Ce,t as le,b as ae,j as Be,H as _e,y as ue,E as me,n as Xe,o as Ue,p as qe,u as Ye,v as Ze,w as $e,x as xe}from"../chunks/index.B_jzJh3r.js";import{a as Fe,c as Re,b as oe,G as pe,f as De,T as et,g as tt,e as re,P as ve,s as lt,h as at}from"../chunks/GameList.COnlZTd6.js";const nt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function st(t){return JSON.parse(JSON.stringify(Object.fromEntries(t)))}async function it(t){let e=st(t);return Fe(Re(oe,"players"),{name:e.name,level:e.level,prestige:e.prestige})}async function rt(t,e,l){if(e.length<4)return"Missing players";for(let i of pe.games)if(i.date.getTime()==t.getTime())return"Game already exists at this time";let a=e.map(i=>De(oe,`players/${i.id}`)),r=[],h=[];for(let i of Object.keys(l))r.push(l[i][0]),h.push(l[i][1]);if(e.length!==r.length||e.length!==h.length)return"Missing scores";const u=await Fe(Re(oe,"games"),{date:et.fromDate(new Date(t)),players:a,scores:r,staged:h});console.log(u);const f=await tt(De(oe,"games",u.id));return f.data()!==void 0&&pe.addGame(f.data()),u}function He(t,e,l){const a=t.slice();return a[14]=e[l],a}function Ie(t,e,l){const a=t.slice();return a[14]=e[l],a}function Ne(t){let e,l,a,r,h,u,f,i=t[14].name+"",L,b,S,A,C;function q(){return t[8](t[14])}return{c(){e=m("li"),l=m("input"),h=E(),u=m("label"),f=m("span"),L=le(i),S=E(),this.h()},l(D){e=p(D,"LI",{class:!0});var w=H(e);l=p(w,"INPUT",{type:!0,id:!0,name:!0,class:!0}),h=y(w),u=p(w,"LABEL",{for:!0,class:!0});var s=H(u);f=p(s,"SPAN",{});var k=H(f);L=ae(k,i),k.forEach(g),s.forEach(g),S=y(w),w.forEach(g),this.h()},h(){n(l,"type","checkbox"),n(l,"id",a=t[14].id),n(l,"name",r=t[14].name),n(l,"class","svelte-1x7fdc7"),n(u,"for",b=t[14].id),n(u,"class","clickable-label svelte-1x7fdc7"),n(e,"class","svelte-1x7fdc7")},m(D,w){K(D,e,w),o(e,l),o(e,h),o(e,u),o(u,f),o(f,L),o(e,S),A||(C=ne(l,"change",q),A=!0)},p(D,w){t=D,w&1&&a!==(a=t[14].id)&&n(l,"id",a),w&1&&r!==(r=t[14].name)&&n(l,"name",r),w&1&&i!==(i=t[14].name+"")&&Be(L,i),w&1&&b!==(b=t[14].id)&&n(u,"for",b)},d(D){D&&g(e),A=!1,C()}}}function ot(t){let e,l=t[6]([t[14].getScore(),t[14].isStaged()])+"",a;return{c(){e=new _e(!1),a=ue(),this.h()},l(r){e=me(r,!1),a=ue(),this.h()},h(){e.a=a},m(r,h){e.m(l,r,h),K(r,a,h)},p(r,h){h&2&&l!==(l=r[6]([r[14].getScore(),r[14].isStaged()])+"")&&e.p(l)},d(r){r&&(g(a),e.d())}}}function ut(t){let e,l=t[6]([t[14].getScore(),t[14].isStaged()])+"",a,r,h=t[6](t[2][t[14].id])+"",u;return{c(){e=new _e(!1),a=le(` →\r
							`),r=new _e(!1),u=ue(),this.h()},l(f){e=me(f,!1),a=ae(f,` →\r
							`),r=me(f,!1),u=ue(),this.h()},h(){e.a=a,r.a=u},m(f,i){e.m(l,f,i),K(f,a,i),r.m(h,f,i),K(f,u,i)},p(f,i){i&2&&l!==(l=f[6]([f[14].getScore(),f[14].isStaged()])+"")&&e.p(l),i&6&&h!==(h=f[6](f[2][f[14].id])+"")&&r.p(h)},d(f){f&&(e.d(),g(a),g(u),r.d())}}}function We(t){let e,l,a,r=t[14].name+"",h,u,f,i,L,b,S,A,C,q,D,w,s,k,W,F,Z,M,O,Q,R,I,V,$,j,T,N,P,_,v,d,G,x,ee,B,X,fe,se,de,te,ce,he,ge;function ze(){return t[9](t[14])}function Je(){return t[10](t[14])}function Ke(){return t[11](t[14])}function Qe(){return t[12](t[14])}function be(z,c){return z[2][z[14].id]!==void 0?ut:ot}let ie=be(t),U=ie(t);return{c(){e=m("li"),l=m("label"),a=m("span"),h=le(r),f=E(),i=m("input"),A=E(),C=m("label"),q=le("L"),w=E(),s=m("input"),Z=E(),M=m("label"),O=le("W"),R=E(),I=m("input"),T=E(),N=m("label"),P=le("WW"),v=E(),d=m("input"),B=E(),X=m("label"),fe=le("WWW"),de=E(),te=m("p"),U.c(),ce=E(),this.h()},l(z){e=p(z,"LI",{class:!0});var c=H(e);l=p(c,"LABEL",{for:!0,class:!0});var we=H(l);a=p(we,"SPAN",{});var Le=H(a);h=ae(Le,r),Le.forEach(g),we.forEach(g),f=y(c),i=p(c,"INPUT",{name:!0,id:!0,type:!0,class:!0}),A=y(c),C=p(c,"LABEL",{for:!0,class:!0});var ke=H(C);q=ae(ke,"L"),ke.forEach(g),w=y(c),s=p(c,"INPUT",{name:!0,id:!0,type:!0,class:!0}),Z=y(c),M=p(c,"LABEL",{for:!0,class:!0});var Ee=H(M);O=ae(Ee,"W"),Ee.forEach(g),R=y(c),I=p(c,"INPUT",{name:!0,id:!0,type:!0,class:!0}),T=y(c),N=p(c,"LABEL",{for:!0,class:!0});var ye=H(N);P=ae(ye,"WW"),ye.forEach(g),v=y(c),d=p(c,"INPUT",{name:!0,id:!0,type:!0,class:!0}),B=y(c),X=p(c,"LABEL",{for:!0,class:!0});var Te=H(X);fe=ae(Te,"WWW"),Te.forEach(g),de=y(c),te=p(c,"P",{class:!0});var Pe=H(te);U.l(Pe),Pe.forEach(g),ce=y(c),c.forEach(g),this.h()},h(){n(l,"for",u=t[14].id+"-stage"),n(l,"class","name unclickable-label svelte-1x7fdc7"),n(i,"name",L=t[14].id+"-result"),i.value=b=t[14].id+"-loss",n(i,"id",S=t[14].id+"-loss"),n(i,"type","radio"),n(i,"class","svelte-1x7fdc7"),n(C,"for",D=t[14].id+"-loss"),n(C,"class","result-choice clickable-label svelte-1x7fdc7"),n(s,"name",k=t[14].id+"-result"),s.value=W=t[14].id+"-win-1",n(s,"id",F=t[14].id+"-win-1"),n(s,"type","radio"),n(s,"class","svelte-1x7fdc7"),n(M,"for",Q=t[14].id+"-win-1"),n(M,"class","result-choice clickable-label svelte-1x7fdc7"),n(I,"name",V=t[14].id+"-result"),I.value=$=t[14].id+"-win-2",n(I,"id",j=t[14].id+"-win-2"),n(I,"type","radio"),n(I,"class","svelte-1x7fdc7"),n(N,"for",_=t[14].id+"-win-2"),n(N,"class","result-choice clickable-label svelte-1x7fdc7"),n(d,"name",G=t[14].id+"-result"),d.value=x=t[14].id+"-win-3",n(d,"id",ee=t[14].id+"-win-3"),n(d,"type","radio"),n(d,"class","svelte-1x7fdc7"),n(X,"for",se=t[14].id+"-win-3"),n(X,"class","result-choice clickable-label svelte-1x7fdc7"),n(te,"class","unclickable-label result svelte-1x7fdc7"),n(e,"class","score svelte-1x7fdc7")},m(z,c){K(z,e,c),o(e,l),o(l,a),o(a,h),o(e,f),o(e,i),o(e,A),o(e,C),o(C,q),o(e,w),o(e,s),o(e,Z),o(e,M),o(M,O),o(e,R),o(e,I),o(e,T),o(e,N),o(N,P),o(e,v),o(e,d),o(e,B),o(e,X),o(X,fe),o(e,de),o(e,te),U.m(te,null),o(e,ce),he||(ge=[ne(i,"change",ze),ne(s,"change",Je),ne(I,"change",Ke),ne(d,"change",Qe)],he=!0)},p(z,c){t=z,c&2&&r!==(r=t[14].name+"")&&Be(h,r),c&2&&u!==(u=t[14].id+"-stage")&&n(l,"for",u),c&2&&L!==(L=t[14].id+"-result")&&n(i,"name",L),c&2&&b!==(b=t[14].id+"-loss")&&(i.value=b),c&2&&S!==(S=t[14].id+"-loss")&&n(i,"id",S),c&2&&D!==(D=t[14].id+"-loss")&&n(C,"for",D),c&2&&k!==(k=t[14].id+"-result")&&n(s,"name",k),c&2&&W!==(W=t[14].id+"-win-1")&&(s.value=W),c&2&&F!==(F=t[14].id+"-win-1")&&n(s,"id",F),c&2&&Q!==(Q=t[14].id+"-win-1")&&n(M,"for",Q),c&2&&V!==(V=t[14].id+"-result")&&n(I,"name",V),c&2&&$!==($=t[14].id+"-win-2")&&(I.value=$),c&2&&j!==(j=t[14].id+"-win-2")&&n(I,"id",j),c&2&&_!==(_=t[14].id+"-win-2")&&n(N,"for",_),c&2&&G!==(G=t[14].id+"-result")&&n(d,"name",G),c&2&&x!==(x=t[14].id+"-win-3")&&(d.value=x),c&2&&ee!==(ee=t[14].id+"-win-3")&&n(d,"id",ee),c&2&&se!==(se=t[14].id+"-win-3")&&n(X,"for",se),ie===(ie=be(t))&&U?U.p(t,c):(U.d(1),U=ie(t),U&&(U.c(),U.m(te,null)))},d(z){z&&g(e),U.d(),he=!1,Ve(ge)}}}function ft(t){let e,l,a="record game",r,h,u="when?",f,i,L="Date:",b,S,A,C,q="who played?",D,w,s,k,W,F="what were the results?",Z,M,O,Q,R,I='<button type="submit">record</button>',V,$,j=re(t[0]),T=[];for(let _=0;_<j.length;_+=1)T[_]=Ne(Ie(t,j,_));let N=re(t[1]),P=[];for(let _=0;_<N.length;_+=1)P[_]=We(He(t,N,_));return{c(){e=m("form"),l=m("h1"),l.textContent=a,r=E(),h=m("h2"),h.textContent=u,f=E(),i=m("label"),i.textContent=L,b=E(),S=m("input"),A=E(),C=m("h2"),C.textContent=q,D=E(),w=m("fieldset"),s=m("ul");for(let _=0;_<T.length;_+=1)T[_].c();k=E(),W=m("h2"),W.textContent=F,Z=E(),M=m("fieldset"),O=m("ul");for(let _=0;_<P.length;_+=1)P[_].c();Q=E(),R=m("p"),R.innerHTML=I,this.h()},l(_){e=p(_,"FORM",{method:!0,id:!0,class:!0});var v=H(e);l=p(v,"H1",{"data-svelte-h":!0}),Y(l)!=="svelte-v9j2fd"&&(l.textContent=a),r=y(v),h=p(v,"H2",{"data-svelte-h":!0}),Y(h)!=="svelte-1z0dykh"&&(h.textContent=u),f=y(v),i=p(v,"LABEL",{for:!0,"data-svelte-h":!0}),Y(i)!=="svelte-1mfsj80"&&(i.textContent=L),b=y(v),S=p(v,"INPUT",{type:!0,name:!0,id:!0}),A=y(v),C=p(v,"H2",{"data-svelte-h":!0}),Y(C)!=="svelte-18jthcy"&&(C.textContent=q),D=y(v),w=p(v,"FIELDSET",{});var d=H(w);s=p(d,"UL",{id:!0,class:!0});var G=H(s);for(let B=0;B<T.length;B+=1)T[B].l(G);G.forEach(g),d.forEach(g),k=y(v),W=p(v,"H2",{"data-svelte-h":!0}),Y(W)!=="svelte-24ae4t"&&(W.textContent=F),Z=y(v),M=p(v,"FIELDSET",{});var x=H(M);O=p(x,"UL",{id:!0,class:!0});var ee=H(O);for(let B=0;B<P.length;B+=1)P[B].l(ee);ee.forEach(g),x.forEach(g),Q=y(v),R=p(v,"P",{"data-svelte-h":!0}),Y(R)!=="svelte-3vltf7"&&(R.innerHTML=I),v.forEach(g),this.h()},h(){n(i,"for","date"),n(S,"type","datetime-local"),n(S,"name","date"),n(S,"id","date"),n(s,"id","playerList"),n(s,"class","wrap-list svelte-1x7fdc7"),n(O,"id","scoreList"),n(O,"class"," svelte-1x7fdc7"),n(e,"method","POST"),n(e,"id","recordGame"),n(e,"class","svelte-1x7fdc7")},m(_,v){K(_,e,v),o(e,l),o(e,r),o(e,h),o(e,f),o(e,i),o(e,b),o(e,S),Se(S,t[3]),o(e,A),o(e,C),o(e,D),o(e,w),o(w,s);for(let d=0;d<T.length;d+=1)T[d]&&T[d].m(s,null);o(e,k),o(e,W),o(e,Z),o(e,M),o(M,O);for(let d=0;d<P.length;d+=1)P[d]&&P[d].m(O,null);o(e,Q),o(e,R),V||($=ne(S,"input",t[7]),V=!0)},p(_,[v]){if(v&8&&Se(S,_[3]),v&17){j=re(_[0]);let d;for(d=0;d<j.length;d+=1){const G=Ie(_,j,d);T[d]?T[d].p(G,v):(T[d]=Ne(G),T[d].c(),T[d].m(s,null))}for(;d<T.length;d+=1)T[d].d(1);T.length=j.length}if(v&102){N=re(_[1]);let d;for(d=0;d<N.length;d+=1){const G=He(_,N,d);P[d]?P[d].p(G,v):(P[d]=We(G),P[d].c(),P[d].m(O,null))}for(;d<P.length;d+=1)P[d].d(1);P.length=N.length}},i:J,o:J,d(_){_&&g(e),Ce(T,_),Ce(P,_),V=!1,$()}}}function dt(t,e,l){let{players:a}=e,r=[];function h(s){r.includes(s)?l(1,r=r.filter(k=>k.id!==s.id)):l(1,r=[...r,s])}let u={},f={};function i(s,k){f[s.id]=k,l(2,u[s.id]=[0,!1],u),l(2,u[s.id][0]=s.getScore(),u),l(2,u[s.id][1]=s.isStaged(),u),k===0?l(2,u[s.id][1]=!1,u):u[s.id][1]?l(2,u[s.id][0]+=k,u):(l(2,u[s.id][1]=!0,u),l(2,u[s.id][0]+=k-1,u)),u[s.id][0]>13&&l(2,u[s.id][0]-=12,u)}function L(s){let k=lt(s[0]);return s[1]?`<u>${k}</u>`:k}let b=new Date;Ge(()=>{var s;(s=document.querySelector("#recordGame"))==null||s.addEventListener("submit",async k=>{k.preventDefault();let W=await rt(new Date(b),r,u);alert(typeof W=="string"?W:"Game Recorded!"),l(1,r=[...r]);for(let F in f)i(ve.getPlayerById(F),f[F])})});function S(){b=this.value,l(3,b)}const A=s=>h(s),C=s=>i(s,0),q=s=>i(s,1),D=s=>i(s,2),w=s=>i(s,3);return t.$$set=s=>{"players"in s&&l(0,a=s.players)},[a,r,u,b,h,i,L,S,A,C,q,D,w]}class ct extends Oe{constructor(e){super(),je(this,e,dt,ft,Ae,{players:0})}}const{document:Me}=nt;function ht(t){return{c:J,l:J,m:J,i:J,o:J,d:J}}function _t(t){let e,l;return e=new ct({props:{players:ve.players}}),{c(){Ye(e.$$.fragment)},l(a){Ze(e.$$.fragment,a)},m(a,r){$e(e,a,r),l=!0},i(a){l||(Ue(e.$$.fragment,a),l=!0)},o(a){qe(e.$$.fragment,a),l=!1},d(a){xe(e,a)}}}function mt(t){let e,l="Loading Players";return{c(){e=m("p"),e.textContent=l},l(a){e=p(a,"P",{"data-svelte-h":!0}),Y(e)!=="svelte-1wsjfye"&&(e.textContent=l)},m(a,r){K(a,e,r)},i:J,o:J,d(a){a&&g(e)}}}function pt(t){let e,l,a,r='<h1>add player</h1> <p><label for="name"><span>Name:</span></label> <input type="text" name="name" id="name" required="" class="svelte-1pux4cw"/></p> <p><label for="level"><span>Level:</span></label> <input type="number" name="level" id="level" value="2" required="" class="svelte-1pux4cw"/></p> <p><label for="prestige"><span>Prestige:</span></label> <input type="number" name="prestige" id="prestige" value="0" required="" class="svelte-1pux4cw"/></p> <p><button type="submit">add</button></p>',h,u,f={ctx:t,current:null,token:null,hasCatch:!1,pending:mt,then:_t,catch:ht,blocks:[,,,]};return at(t[0](),f),{c(){e=E(),l=m("main"),a=m("form"),a.innerHTML=r,h=E(),f.block.c(),this.h()},l(i){Xe("svelte-1b6f4m5",Me.head).forEach(g),e=y(i),l=p(i,"MAIN",{});var b=H(l);a=p(b,"FORM",{method:!0,id:!0,"data-svelte-h":!0}),Y(a)!=="svelte-ezu4wc"&&(a.innerHTML=r),h=y(b),f.block.l(b),b.forEach(g),this.h()},h(){Me.title="shengji record",n(a,"method","POST"),n(a,"id","recordPlayer")},m(i,L){K(i,e,L),K(i,l,L),o(l,a),o(l,h),f.block.m(l,f.anchor=null),f.mount=()=>l,f.anchor=null,u=!0},p(i,[L]){t=i},i(i){u||(Ue(f.block),u=!0)},o(i){for(let L=0;L<3;L+=1){const b=f.blocks[L];qe(b)}u=!1},d(i){i&&(g(e),g(l)),f.block.d(),f.token=null,f=null}}}function vt(t){async function e(){return await ve.initialize(),pe.initialize()}return Ge(()=>{var l;(l=document.querySelector("#recordPlayer"))==null||l.addEventListener("submit",a=>{a.preventDefault(),it(new FormData(a.target))})}),[e]}class Lt extends Oe{constructor(e){super(),je(this,e,vt,pt,Ae,{})}}export{Lt as component};