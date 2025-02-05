var dc=Object.defineProperty;var fc=(n,t,e)=>t in n?dc(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ct=(n,t,e)=>(fc(n,typeof t!="symbol"?t+"":t,e),e);import{x as pc,y as gc,k as yn,f as mc}from"./scheduler.CQ0VQmrD.js";import{B as _c,p as yc,z as Ec,o as vc}from"./index.B_jzJh3r.js";function fg(n,t){const e=t.token={};function r(s,i,o,a){if(t.token!==e)return;t.resolved=a;let u=t.ctx;o!==void 0&&(u=u.slice(),u[o]=a);const c=s&&(t.current=s)(u);let l=!1;t.block&&(t.blocks?t.blocks.forEach((h,f)=>{f!==i&&h&&(_c(),yc(h,1,1,()=>{t.blocks[f]===h&&(t.blocks[f]=null)}),Ec())}):t.block.d(1),c.c(),vc(c,1),c.m(t.mount(),t.anchor),l=!0),t.block=c,t.blocks&&(t.blocks[i]=c),l&&mc()}if(pc(n)){const s=gc();if(n.then(i=>{yn(s),r(t.then,1,t.value,i),yn(null)},i=>{if(yn(s),r(t.catch,2,t.error,i),yn(null),!t.hasCatch)throw i}),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,n),!0;t.resolved=n}}function pg(n,t,e){const r=t.slice(),{resolved:s}=n;n.current===n.then&&(r[n.value]=s),n.current===n.catch&&(r[n.error]=s),n.block.p(r,e)}function gg(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var yi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Tc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],o=n[e++],a=n[e++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[e++],o=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},So={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,u=s+2<n.length,c=u?n[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(f=64)),r.push(e[l],e[h],e[f],e[g])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ro(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Tc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const c=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new Ic;const f=i<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),h!==64){const R=c<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ic extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wc=function(n){const t=Ro(n);return So.encodeByteArray(t,!0)},bn=function(n){return wc(n).replace(/\./g,"")},Ac=function(n){try{return So.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=()=>Rc().__FIREBASE_DEFAULTS__,Pc=()=>{if(typeof process>"u"||typeof yi>"u")return;const n=yi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ac(n[1]);return t&&JSON.parse(t)},ps=()=>{try{return Sc()||Pc()||Cc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vc=n=>{var t,e;return(e=(t=ps())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Dc=n=>{const t=Vc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Po=()=>{var n;return(n=ps())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[bn(JSON.stringify(e)),bn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kc(){var n;const t=(n=ps())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xc(){return!kc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Co(){try{return typeof indexedDB=="object"}catch{return!1}}function Oc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="FirebaseError";class me extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Mc,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vo.prototype.create)}}class Vo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Lc(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new me(s,a,r)}}function Lc(n,t){return n.replace(Fc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Fc=/\{\$([^}]+)}/g;function Fr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],o=t[s];if(Ei(i)&&Ei(o)){if(!Fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ei(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n){return n&&n._delegate?n._delegate:n}class Fe{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new bc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jc(t))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Ot){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ot){return this.instances.has(t)}getOptions(t=Ot){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ot){return this.component?this.component.multipleInstances?t:Ot:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bc(n){return n===Ot?void 0:n}function jc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Uc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const $c={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},zc=V.INFO,Gc={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Kc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Gc[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Do{constructor(t){this.name=t,this._logLevel=zc,this._logHandler=Kc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$c[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Qc=(n,t)=>t.some(e=>n instanceof e);let vi,Ti;function Wc(){return vi||(vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hc(){return Ti||(Ti=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bo=new WeakMap,Ur=new WeakMap,No=new WeakMap,Ir=new WeakMap,gs=new WeakMap;function Yc(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(Pt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&bo.set(e,n)}).catch(()=>{}),gs.set(t,n),t}function Xc(n){if(Ur.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ur.set(n,t)}let Br={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ur.get(n);if(t==="objectStoreNames")return n.objectStoreNames||No.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Pt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jc(n){Br=n(Br)}function Zc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(wr(this),t,...e);return No.set(r,t.sort?t.sort():[t]),Pt(r)}:Hc().includes(n)?function(...t){return n.apply(wr(this),t),Pt(bo.get(this))}:function(...t){return Pt(n.apply(wr(this),t))}}function tl(n){return typeof n=="function"?Zc(n):(n instanceof IDBTransaction&&Xc(n),Qc(n,Wc())?new Proxy(n,Br):n)}function Pt(n){if(n instanceof IDBRequest)return Yc(n);if(Ir.has(n))return Ir.get(n);const t=tl(n);return t!==n&&(Ir.set(n,t),gs.set(t,n)),t}const wr=n=>gs.get(n);function el(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,t),a=Pt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Pt(o.result),u.oldVersion,u.newVersion,Pt(o.transaction),u)}),e&&o.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const nl=["get","getKey","getAll","getAllKeys","count"],rl=["put","add","delete","clear"],Ar=new Map;function Ii(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ar.get(t))return Ar.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=rl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nl.includes(e)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),s&&u.done]))[0]};return Ar.set(t,i),i}Jc(n=>({...n,get:(t,e,r)=>Ii(t,e)||n.get(t,e,r),has:(t,e)=>!!Ii(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(il(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function il(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jr="@firebase/app",wi="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Do("@firebase/app"),ol="@firebase/app-compat",al="@firebase/analytics-compat",ul="@firebase/analytics",cl="@firebase/app-check-compat",ll="@firebase/app-check",hl="@firebase/auth",dl="@firebase/auth-compat",fl="@firebase/database",pl="@firebase/database-compat",gl="@firebase/functions",ml="@firebase/functions-compat",_l="@firebase/installations",yl="@firebase/installations-compat",El="@firebase/messaging",vl="@firebase/messaging-compat",Tl="@firebase/performance",Il="@firebase/performance-compat",wl="@firebase/remote-config",Al="@firebase/remote-config-compat",Rl="@firebase/storage",Sl="@firebase/storage-compat",Pl="@firebase/firestore",Cl="@firebase/firestore-compat",Vl="firebase",Dl="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="[DEFAULT]",bl={[jr]:"fire-core",[ol]:"fire-core-compat",[ul]:"fire-analytics",[al]:"fire-analytics-compat",[ll]:"fire-app-check",[cl]:"fire-app-check-compat",[hl]:"fire-auth",[dl]:"fire-auth-compat",[fl]:"fire-rtdb",[pl]:"fire-rtdb-compat",[gl]:"fire-fn",[ml]:"fire-fn-compat",[_l]:"fire-iid",[yl]:"fire-iid-compat",[El]:"fire-fcm",[vl]:"fire-fcm-compat",[Tl]:"fire-perf",[Il]:"fire-perf-compat",[wl]:"fire-rc",[Al]:"fire-rc-compat",[Rl]:"fire-gcs",[Sl]:"fire-gcs-compat",[Pl]:"fire-fst",[Cl]:"fire-fst-compat","fire-js":"fire-js",[Vl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new Map,$r=new Map;function Nl(n,t){try{n.container.addComponent(t)}catch(e){qt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function xn(n){const t=n.name;if($r.has(t))return qt.debug(`There were multiple attempts to register component ${t}.`),!1;$r.set(t,n);for(const e of kn.values())Nl(e,n);return!0}function kl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new Vo("app","Firebase",xl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=Dl;function ko(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:qr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});if(e||(e=Po()),!e)throw Ct.create("no-options");const i=kn.get(s);if(i){if(Fr(e,i.options)&&Fr(r,i.config))return i;throw Ct.create("duplicate-app",{appName:s})}const o=new qc(s);for(const u of $r.values())o.addComponent(u);const a=new Ol(e,r,o);return kn.set(s,a),a}function Ll(n=qr){const t=kn.get(n);if(!t&&n===qr&&Po())return ko();if(!t)throw Ct.create("no-app",{appName:n});return t}function ne(n,t,e){var r;let s=(r=bl[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}xn(new Fe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="firebase-heartbeat-database",Ul=1,Ue="firebase-heartbeat-store";let Rr=null;function xo(){return Rr||(Rr=el(Fl,Ul,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ue)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ct.create("idb-open",{originalErrorMessage:n.message})})),Rr}async function Bl(n){try{const e=(await xo()).transaction(Ue),r=await e.objectStore(Ue).get(Oo(n));return await e.done,r}catch(t){if(t instanceof me)qt.warn(t.message);else{const e=Ct.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qt.warn(e.message)}}}async function Ai(n,t){try{const r=(await xo()).transaction(Ue,"readwrite");await r.objectStore(Ue).put(t,Oo(n)),await r.done}catch(e){if(e instanceof me)qt.warn(e.message);else{const r=Ct.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});qt.warn(r.message)}}}function Oo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=1024,ql=30*24*60*60*1e3;class $l{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gl(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ri();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ql}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ri(),{heartbeatsToSend:r,unsentEntries:s}=zl(this._heartbeatsCache.heartbeats),i=bn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ri(){return new Date().toISOString().substring(0,10)}function zl(n,t=jl){const e=[];let r=n.slice();for(const s of n){const i=e.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Si(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Si(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Gl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Co()?Oc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Bl(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ai(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ai(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Si(n){return bn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n){xn(new Fe("platform-logger",t=>new sl(t),"PRIVATE")),xn(new Fe("heartbeat",t=>new $l(t),"PRIVATE")),ne(jr,wi,n),ne(jr,wi,"esm2017"),ne("fire-js","")}Kl("");var Ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,ms=ms||{},I=Ql||self;function Wn(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function en(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Wl(n){return Object.prototype.hasOwnProperty.call(n,Sr)&&n[Sr]||(n[Sr]=++Hl)}var Sr="closure_uid_"+(1e9*Math.random()>>>0),Hl=0;function Yl(n,t,e){return n.call.apply(n.bind,arguments)}function Xl(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(t,s)}}return function(){return n.apply(t,arguments)}}function tt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=Yl:tt=Xl,tt.apply(null,arguments)}function En(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function z(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function kt(){this.s=this.s,this.o=this.o}var Jl=0;kt.prototype.s=!1;kt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Jl!=0)&&Wl(this)};kt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Mo=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function _s(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Pi(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Wn(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function et(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var Zl=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};I.addEventListener("test",e,t),I.removeEventListener("test",e,t)}catch{}return n}();function Be(n){return/^[\s\xa0]*$/.test(n)}function Hn(){var n=I.navigator;return n&&(n=n.userAgent)?n:""}function ft(n){return Hn().indexOf(n)!=-1}function ys(n){return ys[" "](n),n}ys[" "]=function(){};function th(n,t){var e=Kh;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var eh=ft("Opera"),ae=ft("Trident")||ft("MSIE"),Lo=ft("Edge"),zr=Lo||ae,Fo=ft("Gecko")&&!(Hn().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),nh=Hn().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge");function Uo(){var n=I.document;return n?n.documentMode:void 0}var Gr;t:{var Pr="",Cr=function(){var n=Hn();if(Fo)return/rv:([^\);]+)(\)|;)/.exec(n);if(Lo)return/Edge\/([\d\.]+)/.exec(n);if(ae)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(nh)return/WebKit\/(\S+)/.exec(n);if(eh)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Cr&&(Pr=Cr?Cr[1]:""),ae){var Vr=Uo();if(Vr!=null&&Vr>parseFloat(Pr)){Gr=String(Vr);break t}}Gr=Pr}var Kr;if(I.document&&ae){var Ci=Uo();Kr=Ci||parseInt(Gr,10)||void 0}else Kr=void 0;var rh=Kr;function je(n,t){if(et.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Fo){t:{try{ys(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:sh[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&je.$.h.call(this)}}z(je,et);var sh={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),ih=0;function oh(n,t,e,r,s){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=s,this.key=++ih,this.fa=this.ia=!1}function Yn(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Es(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function ah(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Bo(n){const t={};for(const e in n)t[e]=n[e];return t}const Vi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jo(n,t){let e,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(e in r)n[e]=r[e];for(let i=0;i<Vi.length;i++)e=Vi[i],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Xn(n){this.src=n,this.g={},this.h=0}Xn.prototype.add=function(n,t,e,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Wr(n,t,r,s);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new oh(t,this.src,i,!!r,s),t.ia=e,n.push(t)),t};function Qr(n,t){var e=t.type;if(e in n.g){var r=n.g[e],s=Mo(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Yn(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Wr(n,t,e,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==t&&i.capture==!!e&&i.la==r)return s}return-1}var vs="closure_lm_"+(1e6*Math.random()|0),Dr={};function qo(n,t,e,r,s){if(r&&r.once)return zo(n,t,e,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)qo(n,t[i],e,r,s);return null}return e=ws(e),n&&n[nn]?n.O(t,e,en(r)?!!r.capture:!!r,s):$o(n,t,e,!1,r,s)}function $o(n,t,e,r,s,i){if(!t)throw Error("Invalid event type");var o=en(s)?!!s.capture:!!s,a=Is(n);if(a||(n[vs]=a=new Xn(n)),e=a.add(t,e,r,o,i),e.proxy)return e;if(r=uh(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Zl||(s=o),s===void 0&&(s=!1),n.addEventListener(t.toString(),r,s);else if(n.attachEvent)n.attachEvent(Ko(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function uh(){function n(e){return t.call(n.src,n.listener,e)}const t=ch;return n}function zo(n,t,e,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)zo(n,t[i],e,r,s);return null}return e=ws(e),n&&n[nn]?n.P(t,e,en(r)?!!r.capture:!!r,s):$o(n,t,e,!0,r,s)}function Go(n,t,e,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Go(n,t[i],e,r,s);else r=en(r)?!!r.capture:!!r,e=ws(e),n&&n[nn]?(n=n.i,t=String(t).toString(),t in n.g&&(i=n.g[t],e=Wr(i,e,r,s),-1<e&&(Yn(i[e]),Array.prototype.splice.call(i,e,1),i.length==0&&(delete n.g[t],n.h--)))):n&&(n=Is(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Wr(t,e,r,s)),(e=-1<n?t[n]:null)&&Ts(e))}function Ts(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[nn])Qr(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(Ko(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Is(t))?(Qr(e,n),e.h==0&&(e.src=null,t[vs]=null)):Yn(n)}}}function Ko(n){return n in Dr?Dr[n]:Dr[n]="on"+n}function ch(n,t){if(n.fa)n=!0;else{t=new je(t,this);var e=n.listener,r=n.la||n.src;n.ia&&Ts(n),n=e.call(r,t)}return n}function Is(n){return n=n[vs],n instanceof Xn?n:null}var br="__closure_events_fn_"+(1e9*Math.random()>>>0);function ws(n){return typeof n=="function"?n:(n[br]||(n[br]=function(t){return n.handleEvent(t)}),n[br])}function $(){kt.call(this),this.i=new Xn(this),this.S=this,this.J=null}z($,kt);$.prototype[nn]=!0;$.prototype.removeEventListener=function(n,t,e,r){Go(this,n,t,e,r)};function H(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new et(t,n);else if(t instanceof et)t.target=t.target||n;else{var s=t;t=new et(r,n),jo(t,s)}if(s=!0,e)for(var i=e.length-1;0<=i;i--){var o=t.g=e[i];s=vn(o,r,!0,t)&&s}if(o=t.g=n,s=vn(o,r,!0,t)&&s,s=vn(o,r,!1,t)&&s,e)for(i=0;i<e.length;i++)o=t.g=e[i],s=vn(o,r,!1,t)&&s}$.prototype.N=function(){if($.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Yn(e[r]);delete n.g[t],n.h--}}this.J=null};$.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};$.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function vn(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&Qr(n.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var As=I.JSON.stringify;class lh{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function hh(){var n=Rs;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class dh{constructor(){this.h=this.g=null}add(t,e){const r=Qo.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var Qo=new lh(()=>new fh,n=>n.reset());class fh{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function ph(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function gh(n){I.setTimeout(()=>{throw n},0)}let qe,$e=!1,Rs=new dh,Wo=()=>{const n=I.Promise.resolve(void 0);qe=()=>{n.then(mh)}};var mh=()=>{for(var n;n=hh();){try{n.h.call(n.g)}catch(e){gh(e)}var t=Qo;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}$e=!1};function Jn(n,t){$.call(this),this.h=n||1,this.g=t||I,this.j=tt(this.qb,this),this.l=Date.now()}z(Jn,$);_=Jn.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),H(this,"tick"),this.ga&&(Ss(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ss(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}_.N=function(){Jn.$.N.call(this),Ss(this),delete this.g};function Ps(n,t,e){if(typeof n=="function")e&&(n=tt(n,e));else if(n&&typeof n.handleEvent=="function")n=tt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(n,t||0)}function Ho(n){n.g=Ps(()=>{n.g=null,n.i&&(n.i=!1,Ho(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class _h extends kt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ho(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(n){kt.call(this),this.h=n,this.g={}}z(ze,kt);var Di=[];function Yo(n,t,e,r){Array.isArray(e)||(e&&(Di[0]=e.toString()),e=Di);for(var s=0;s<e.length;s++){var i=qo(t,e[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Xo(n){Es(n.g,function(t,e){this.g.hasOwnProperty(e)&&Ts(t)},n),n.g={}}ze.prototype.N=function(){ze.$.N.call(this),Xo(this)};ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zn(){this.g=!0}Zn.prototype.Ea=function(){this.g=!1};function yh(n,t,e,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+e+`
`+o})}function Eh(n,t,e,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+e+`
`+i+" "+o})}function ee(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Th(n,e)+(r?" "+r:"")})}function vh(n,t){n.info(function(){return"TIMEOUT: "+t})}Zn.prototype.info=function(){};function Th(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return As(e)}catch{return t}}var Kt={},bi=null;function tr(){return bi=bi||new $}Kt.Ta="serverreachability";function Jo(n){et.call(this,Kt.Ta,n)}z(Jo,et);function Ge(n){const t=tr();H(t,new Jo(t))}Kt.STAT_EVENT="statevent";function Zo(n,t){et.call(this,Kt.STAT_EVENT,n),this.stat=t}z(Zo,et);function rt(n){const t=tr();H(t,new Zo(t,n))}Kt.Ua="timingevent";function ta(n,t){et.call(this,Kt.Ua,n),this.size=t}z(ta,et);function rn(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){n()},t)}var er={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ea={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Cs(){}Cs.prototype.h=null;function Ni(n){return n.h||(n.h=n.i())}function na(){}var sn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Vs(){et.call(this,"d")}z(Vs,et);function Ds(){et.call(this,"c")}z(Ds,et);var Hr;function nr(){}z(nr,Cs);nr.prototype.g=function(){return new XMLHttpRequest};nr.prototype.i=function(){return{}};Hr=new nr;function on(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new ze(this),this.P=Ih,n=zr?125:void 0,this.V=new Jn(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ra}function ra(){this.i=null,this.g="",this.h=!1}var Ih=45e3,sa={},Yr={};_=on.prototype;_.setTimeout=function(n){this.P=n};function Xr(n,t,e){n.L=1,n.A=sr(At(t)),n.u=e,n.S=!0,ia(n,null)}function ia(n,t){n.G=Date.now(),an(n),n.B=At(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),fa(e.i,"t",r),n.o=0,e=n.l.J,n.h=new ra,n.g=xa(n.l,e?t:null,!n.u),0<n.O&&(n.M=new _h(tt(n.Pa,n,n.g),n.O)),Yo(n.U,n.g,"readystatechange",n.nb),t=n.I?Bo(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),Ge(),yh(n.j,n.v,n.B,n.m,n.W,n.u)}_.nb=function(n){n=n.target;const t=this.M;t&&pt(n)==3?t.l():this.Pa(n)};_.Pa=function(n){try{if(n==this.g)t:{const l=pt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||zr||this.g&&(this.h.h||this.g.ja()||Mi(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?Ge(3):Ge(2)),rr(this);var e=this.g.da();this.ca=e;e:if(oa(this)){var r=Mi(this.g);n="";var s=r.length,i=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lt(this),Ne(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Eh(this.j,this.v,this.B,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Be(a)){var c=a;break e}}c=null}if(e=c)ee(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jr(this,e);else{this.i=!1,this.s=3,rt(12),Lt(this),Ne(this);break t}}this.S?(aa(this,l,o),zr&&this.i&&l==3&&(Yo(this.U,this.V,"tick",this.mb),this.V.start())):(ee(this.j,this.m,o,null),Jr(this,o)),l==4&&Lt(this),this.i&&!this.J&&(l==4?Da(this.l,this):(this.i=!1,an(this)))}else $h(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Lt(this),Ne(this)}}}catch{}finally{}};function oa(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function aa(n,t,e){let r=!0,s;for(;!n.J&&n.o<e.length;)if(s=wh(n,e),s==Yr){t==4&&(n.s=4,rt(14),r=!1),ee(n.j,n.m,null,"[Incomplete Response]");break}else if(s==sa){n.s=4,rt(15),ee(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else ee(n.j,n.m,s,null),Jr(n,s);oa(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,rt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Ms(t),t.M=!0,rt(11))):(ee(n.j,n.m,e,"[Invalid Chunked Response]"),Lt(n),Ne(n))}_.mb=function(){if(this.g){var n=pt(this.g),t=this.g.ja();this.o<t.length&&(rr(this),aa(this,n,t),this.i&&n!=4&&an(this))}};function wh(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?Yr:(e=Number(t.substring(e,r)),isNaN(e)?sa:(r+=1,r+e>t.length?Yr:(t=t.slice(r,r+e),n.o=r+e,t)))}_.cancel=function(){this.J=!0,Lt(this)};function an(n){n.Y=Date.now()+n.P,ua(n,n.P)}function ua(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=rn(tt(n.lb,n),t)}function rr(n){n.C&&(I.clearTimeout(n.C),n.C=null)}_.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(vh(this.j,this.B),this.L!=2&&(Ge(),rt(17)),Lt(this),this.s=2,Ne(this)):ua(this,this.Y-n)};function Ne(n){n.l.H==0||n.J||Da(n.l,n)}function Lt(n){rr(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Ss(n.V),Xo(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Jr(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Zr(e.i,n))){if(!n.K&&Zr(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Ln(e),ur(e);else break t;Os(e),rt(18)}}else e.Fa=s[1],0<e.Fa-e.V&&37500>s[2]&&e.G&&e.A==0&&!e.v&&(e.v=rn(tt(e.ib,e),6e3));if(1>=ma(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Ft(e,11)}else if((n.K||e.g==n)&&Ln(e),!Be(t))for(s=e.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const l=c[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const h=c[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const g=n.g;if(g){const R=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var i=r.i;i.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(bs(i,i.h),i.h=null))}if(r.F){const S=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,k(r.I,r.F,S))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=ka(r,r.J?r.pa:null,r.Y),o.K){_a(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(rr(a),an(a)),r.g=o}else Ca(r);0<e.j.length&&cr(e)}else c[0]!="stop"&&c[0]!="close"||Ft(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ft(e,7):xs(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}Ge(4)}catch{}}function Ah(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Wn(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Rh(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Wn(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function ca(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Wn(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Rh(n),r=Ah(n),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],e&&e[i],n)}var la=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sh(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),s=null;if(0<=r){var i=n[e].substring(0,r);s=n[e].substring(r+1)}else i=n[e];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function jt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof jt){this.h=n.h,On(this,n.j),this.s=n.s,this.g=n.g,Mn(this,n.m),this.l=n.l;var t=n.i,e=new Ke;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),ki(this,e),this.o=n.o}else n&&(t=String(n).match(la))?(this.h=!1,On(this,t[1]||"",!0),this.s=Pe(t[2]||""),this.g=Pe(t[3]||"",!0),Mn(this,t[4]),this.l=Pe(t[5]||"",!0),ki(this,t[6]||"",!0),this.o=Pe(t[7]||"")):(this.h=!1,this.i=new Ke(null,this.h))}jt.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Ce(t,xi,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Ce(t,xi,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Ce(e,e.charAt(0)=="/"?Vh:Ch,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Ce(e,bh)),n.join("")};function At(n){return new jt(n)}function On(n,t,e){n.j=e?Pe(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Mn(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function ki(n,t,e){t instanceof Ke?(n.i=t,Nh(n.i,n.h)):(e||(t=Ce(t,Dh)),n.i=new Ke(t,n.h))}function k(n,t,e){n.i.set(t,e)}function sr(n){return k(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Pe(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ce(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Ph),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Ph(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var xi=/[#\/\?@]/g,Ch=/[#\?:]/g,Vh=/[#\?]/g,Dh=/[#\?@]/g,bh=/#/g;function Ke(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function xt(n){n.g||(n.g=new Map,n.h=0,n.i&&Sh(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}_=Ke.prototype;_.add=function(n,t){xt(this),this.i=null,n=_e(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function ha(n,t){xt(n),t=_e(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function da(n,t){return xt(n),t=_e(n,t),n.g.has(t)}_.forEach=function(n,t){xt(this),this.g.forEach(function(e,r){e.forEach(function(s){n.call(t,s,r,this)},this)},this)};_.ta=function(){xt(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const s=n[r];for(let i=0;i<s.length;i++)e.push(t[r])}return e};_.Z=function(n){xt(this);let t=[];if(typeof n=="string")da(this,n)&&(t=t.concat(this.g.get(_e(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};_.set=function(n,t){return xt(this),this.i=null,n=_e(this,n),da(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};_.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function fa(n,t,e){ha(n,t),0<e.length&&(n.i=null,n.g.set(_e(n,t),_s(e)),n.h+=e.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function _e(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Nh(n,t){t&&!n.j&&(xt(n),n.i=null,n.g.forEach(function(e,r){var s=r.toLowerCase();r!=s&&(ha(this,r),fa(this,s,e))},n)),n.j=t}var kh=class{constructor(n,t){this.g=n,this.map=t}};function pa(n){this.l=n||xh,I.PerformanceNavigationTiming?(n=I.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xh=10;function ga(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ma(n){return n.h?1:n.g?n.g.size:0}function Zr(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function bs(n,t){n.g?n.g.add(t):n.h=t}function _a(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}pa.prototype.cancel=function(){if(this.i=ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ya(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return _s(n.i)}var Oh=class{stringify(n){return I.JSON.stringify(n,void 0)}parse(n){return I.JSON.parse(n,void 0)}};function Mh(){this.g=new Oh}function Lh(n,t,e){const r=e||"";try{ca(n,function(s,i){let o=s;en(s)&&(o=As(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Fh(n,t){const e=new Zn;if(I.Image){const r=new Image;r.onload=En(Tn,e,r,"TestLoadImage: loaded",!0,t),r.onerror=En(Tn,e,r,"TestLoadImage: error",!1,t),r.onabort=En(Tn,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=En(Tn,e,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Tn(n,t,e,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function ir(n){this.l=n.ec||null,this.j=n.ob||!1}z(ir,Cs);ir.prototype.g=function(){return new or(this.l,this.j)};ir.prototype.i=function(n){return function(){return n}}({});function or(n,t){$.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Ns,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(or,$);var Ns=0;_=or.prototype;_.open=function(n,t){if(this.readyState!=Ns)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,Qe(this)};_.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=Ns};_.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Qe(this)),this.g&&(this.readyState=3,Qe(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ea(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Ea(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}_.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?un(this):Qe(this),this.readyState==3&&Ea(this)}};_.Za=function(n){this.g&&(this.response=this.responseText=n,un(this))};_.Ya=function(n){this.g&&(this.response=n,un(this))};_.ka=function(){this.g&&un(this)};function un(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Qe(n)}_.setRequestHeader=function(n,t){this.v.append(n,t)};_.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function Qe(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(or.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Uh=I.JSON.parse;function M(n){$.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=va,this.L=this.M=!1}z(M,$);var va="",Bh=/^https?$/i,jh=["POST","PUT"];_=M.prototype;_.Oa=function(n){this.M=n};_.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hr.g(),this.C=this.u?Ni(this.u):Ni(Hr),this.g.onreadystatechange=tt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(i){Oi(this,i);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)e.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())e.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(i=>i.toLowerCase()=="content-type"),s=I.FormData&&n instanceof I.FormData,!(0<=Mo(jh,t))||r||s||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of e)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wa(this),0<this.B&&((this.L=qh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.ua,this)):this.A=Ps(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Oi(this,i)}};function qh(n){return ae&&typeof n.timeout=="number"&&n.ontimeout!==void 0}_.ua=function(){typeof ms<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function Oi(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Ta(n),ar(n)}function Ta(n){n.F||(n.F=!0,H(n,"complete"),H(n,"error"))}_.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,H(this,"complete"),H(this,"abort"),ar(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ar(this,!0)),M.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?Ia(this):this.kb())};_.kb=function(){Ia(this)};function Ia(n){if(n.h&&typeof ms<"u"&&(!n.C[1]||pt(n)!=4||n.da()!=2)){if(n.v&&pt(n)==4)Ps(n.La,0,n);else if(H(n,"readystatechange"),pt(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var s=String(n.I).match(la)[1]||null;!s&&I.self&&I.self.location&&(s=I.self.location.protocol.slice(0,-1)),r=!Bh.test(s?s.toLowerCase():"")}e=r}if(e)H(n,"complete"),H(n,"success");else{n.m=6;try{var i=2<pt(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",Ta(n)}}finally{ar(n)}}}}function ar(n,t){if(n.g){wa(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||H(n,"ready");try{e.onreadystatechange=r}catch{}}}function wa(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(I.clearTimeout(n.A),n.A=null)}_.isActive=function(){return!!this.g};function pt(n){return n.g?n.g.readyState:0}_.da=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Uh(t)}};function Mi(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case va:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function $h(n){const t={};n=(n.g&&2<=pt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Be(n[r]))continue;var e=ph(n[r]);const s=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const i=t[s]||[];t[s]=i,i.push(e)}ah(t,function(r){return r.join(", ")})}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Aa(n){let t="";return Es(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function ks(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Aa(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):k(n,t,e))}function Ae(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Ra(n){this.Ga=0,this.j=[],this.l=new Zn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ae("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ae("baseRetryDelayMs",5e3,n),this.hb=Ae("retryDelaySeedMs",1e4,n),this.eb=Ae("forwardChannelMaxRetries",2,n),this.xa=Ae("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new pa(n&&n.concurrentRequestLimit),this.Ja=new Mh,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}_=Ra.prototype;_.ra=8;_.H=1;function xs(n){if(Sa(n),n.H==3){var t=n.W++,e=At(n.I);if(k(e,"SID",n.K),k(e,"RID",t),k(e,"TYPE","terminate"),cn(n,e),t=new on(n,n.l,t),t.L=2,t.A=sr(At(e)),e=!1,I.navigator&&I.navigator.sendBeacon)try{e=I.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&I.Image&&(new Image().src=t.A,e=!0),e||(t.g=xa(t.l,null),t.g.ha(t.A)),t.G=Date.now(),an(t)}Na(n)}function ur(n){n.g&&(Ms(n),n.g.cancel(),n.g=null)}function Sa(n){ur(n),n.u&&(I.clearTimeout(n.u),n.u=null),Ln(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&I.clearTimeout(n.m),n.m=null)}function cr(n){if(!ga(n.i)&&!n.m){n.m=!0;var t=n.Na;qe||Wo(),$e||(qe(),$e=!0),Rs.add(t,n),n.C=0}}function zh(n,t){return ma(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=rn(tt(n.Na,n,t),ba(n,n.C)),n.C++,!0)}_.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new on(this,this.l,n);let i=this.s;if(this.U&&(i?(i=Bo(i),jo(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Pa(this,s,t),e=At(this.I),k(e,"RID",n),k(e,"CVER",22),this.F&&k(e,"X-HTTP-Session-Id",this.F),cn(this,e),i&&(this.O?t="headers="+encodeURIComponent(String(Aa(i)))+"&"+t:this.o&&ks(e,this.o,i)),bs(this.i,s),this.bb&&k(e,"TYPE","init"),this.P?(k(e,"$req",t),k(e,"SID","null"),s.aa=!0,Xr(s,e,null)):Xr(s,e,t),this.H=2}}else this.H==3&&(n?Li(this,n):this.j.length==0||ga(this.i)||Li(this))};function Li(n,t){var e;t?e=t.m:e=n.W++;const r=At(n.I);k(r,"SID",n.K),k(r,"RID",e),k(r,"AID",n.V),cn(n,r),n.o&&n.s&&ks(r,n.o,n.s),e=new on(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Pa(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),bs(n.i,e),Xr(e,r,t)}function cn(n,t){n.na&&Es(n.na,function(e,r){k(t,r,e)}),n.h&&ca({},function(e,r){k(t,r,e)})}function Pa(n,t,e){e=Math.min(n.j.length,e);var r=n.h?tt(n.h.Va,n.h,n):null;t:{var s=n.j;let i=-1;for(;;){const o=["count="+e];i==-1?0<e?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<e;u++){let c=s[u].g;const l=s[u].map;if(c-=i,0>c)i=Math.max(0,s[u].g-100),a=!1;else try{Lh(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Ca(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;qe||Wo(),$e||(qe(),$e=!0),Rs.add(t,n),n.A=0}}function Os(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=rn(tt(n.Ma,n),ba(n,n.A)),n.A++,!0)}_.Ma=function(){if(this.u=null,Va(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=rn(tt(this.jb,this),n)}};_.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),ur(this),Va(this))};function Ms(n){n.B!=null&&(I.clearTimeout(n.B),n.B=null)}function Va(n){n.g=new on(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=At(n.wa);k(t,"RID","rpc"),k(t,"SID",n.K),k(t,"AID",n.V),k(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&k(t,"TO",n.qa),k(t,"TYPE","xmlhttp"),cn(n,t),n.o&&n.s&&ks(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=sr(At(t)),e.u=null,e.S=!0,ia(e,n)}_.ib=function(){this.v!=null&&(this.v=null,ur(this),Os(this),rt(19))};function Ln(n){n.v!=null&&(I.clearTimeout(n.v),n.v=null)}function Da(n,t){var e=null;if(n.g==t){Ln(n),Ms(n),n.g=null;var r=2}else if(Zr(n.i,t))e=t.F,_a(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var s=n.C;r=tr(),H(r,new ta(r,e)),cr(n)}else Ca(n);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&zh(n,t)||r==2&&Os(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),s){case 1:Ft(n,5);break;case 4:Ft(n,10);break;case 3:Ft(n,6);break;default:Ft(n,2)}}}function ba(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Ft(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=tt(n.pb,n);e||(e=new jt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||On(e,"https"),sr(e)),Fh(e.toString(),r)}else rt(2);n.H=0,n.h&&n.h.za(t),Na(n),Sa(n)}_.pb=function(n){n?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function Na(n){if(n.H=0,n.ma=[],n.h){const t=ya(n.i);(t.length!=0||n.j.length!=0)&&(Pi(n.ma,t),Pi(n.ma,n.j),n.i.i.length=0,_s(n.j),n.j.length=0),n.h.ya()}}function ka(n,t,e){var r=e instanceof jt?At(e):new jt(e);if(r.g!="")t&&(r.g=t+"."+r.g),Mn(r,r.m);else{var s=I.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new jt(null);r&&On(i,r),t&&(i.g=t),s&&Mn(i,s),e&&(i.l=e),r=i}return e=n.F,t=n.Da,e&&t&&k(r,e,t),k(r,"VER",n.ra),cn(n,r),r}function xa(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new M(new ir({ob:e})):new M(n.va),t.Oa(n.J),t}_.isActive=function(){return!!this.h&&this.h.isActive(this)};function Oa(){}_=Oa.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.isActive=function(){return!0};_.Va=function(){};function Fn(){if(ae&&!(10<=Number(rh)))throw Error("Environmental error: no available transport.")}Fn.prototype.g=function(n,t){return new ot(n,t)};function ot(n,t){$.call(this),this.g=new Ra(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!Be(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Be(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new ye(this)}z(ot,$);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;rt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=ka(n,null,n.Y),cr(n)};ot.prototype.close=function(){xs(this.g)};ot.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=As(n),n=e);t.j.push(new kh(t.fb++,n)),t.H==3&&cr(t)};ot.prototype.N=function(){this.g.h=null,delete this.j,xs(this.g),delete this.g,ot.$.N.call(this)};function Ma(n){Vs.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}z(Ma,Vs);function La(){Ds.call(this),this.status=1}z(La,Ds);function ye(n){this.g=n}z(ye,Oa);ye.prototype.Ba=function(){H(this.g,"a")};ye.prototype.Aa=function(n){H(this.g,new Ma(n))};ye.prototype.za=function(n){H(this.g,new La)};ye.prototype.ya=function(){H(this.g,"b")};function Gh(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(ht,Gh);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Nr(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(s=0;16>s;++s)r[s]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],s=n.g[2];var i=n.g[3],o=t+(i^e&(s^i))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[3]+3250441966&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[7]+4249261313&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[11]+2304563134&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[15]+1236535329&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(e^s))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[0]+3921069994&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[4]+3889429448&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[8]+1163531501&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[12]+2368359562&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(e^s^i)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[14]+4259657740&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[10]+3200236656&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[6]+76029189&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[2]+3299628645&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(s^(e|~i))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[5]+4237533241&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[1]+2240044497&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[13]+1309151649&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}ht.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=e;)Nr(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<t;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){Nr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=n[i++],s==this.blockSize){Nr(this,r),s=0;break}}this.h=s,this.i+=t};ht.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function b(n,t){this.h=t;for(var e=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==t||(e[s]=i,r=!1)}this.g=e}var Kh={};function Ls(n){return-128<=n&&128>n?th(n,function(t){return new b([t|0],0>t?-1:0)}):new b([n|0],0>n?-1:0)}function gt(n){if(isNaN(n)||!isFinite(n))return re;if(0>n)return Q(gt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=ts;return new b(t,0)}function Fa(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return Q(Fa(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=gt(Math.pow(t,8)),r=re,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),t);8>i?(i=gt(Math.pow(t,i)),r=r.R(i).add(gt(o))):(r=r.R(e),r=r.add(gt(o)))}return r}var ts=4294967296,re=Ls(0),es=Ls(1),Fi=Ls(16777216);_=b.prototype;_.ea=function(){if(at(this))return-Q(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:ts+r)*t,t*=ts}return n};_.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(It(this))return"0";if(at(this))return"-"+Q(this).toString(n);for(var t=gt(Math.pow(n,6)),e=this,r="";;){var s=Bn(e,t).g;e=Un(e,s.R(t));var i=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=s,It(e))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};_.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function It(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function at(n){return n.h==-1}_.X=function(n){return n=Un(this,n),at(n)?-1:It(n)?0:1};function Q(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new b(e,~n.h).add(es)}_.abs=function(){return at(this)?Q(this):this};_.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,e[s]=o<<16|i}return new b(e,e[e.length-1]&-2147483648?-1:0)};function Un(n,t){return n.add(Q(t))}_.R=function(n){if(It(this)||It(n))return re;if(at(this))return at(n)?Q(this).R(Q(n)):Q(Q(this).R(n));if(at(n))return Q(this.R(Q(n)));if(0>this.X(Fi)&&0>n.X(Fi))return gt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,u=n.D(s)&65535;e[2*r+2*s]+=o*u,In(e,2*r+2*s),e[2*r+2*s+1]+=i*u,In(e,2*r+2*s+1),e[2*r+2*s+1]+=o*a,In(e,2*r+2*s+1),e[2*r+2*s+2]+=i*a,In(e,2*r+2*s+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new b(e,0)};function In(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Re(n,t){this.g=n,this.h=t}function Bn(n,t){if(It(t))throw Error("division by zero");if(It(n))return new Re(re,re);if(at(n))return t=Bn(Q(n),t),new Re(Q(t.g),Q(t.h));if(at(t))return t=Bn(n,Q(t)),new Re(Q(t.g),t.h);if(30<n.g.length){if(at(n)||at(t))throw Error("slowDivide_ only works with positive integers.");for(var e=es,r=t;0>=r.X(n);)e=Ui(e),r=Ui(r);var s=Xt(e,1),i=Xt(r,1);for(r=Xt(r,2),e=Xt(e,2);!It(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(e),i=o),r=Xt(r,1),e=Xt(e,1)}return t=Un(n,s.R(t)),new Re(s,t)}for(s=re;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=gt(e),o=i.R(t);at(o)||0<o.X(n);)e-=r,i=gt(e),o=i.R(t);It(i)&&(i=es),s=s.add(i),n=Un(n,o)}return new Re(s,n)}_.gb=function(n){return Bn(this,n).h};_.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new b(e,this.h&n.h)};_.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new b(e,this.h|n.h)};_.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new b(e,this.h^n.h)};function Ui(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new b(e,n.h)}function Xt(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,s=[],i=0;i<r;i++)s[i]=0<t?n.D(i+e)>>>t|n.D(i+e+1)<<32-t:n.D(i+e);return new b(s,n.h)}Fn.prototype.createWebChannel=Fn.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;er.NO_ERROR=0;er.TIMEOUT=8;er.HTTP_ERROR=6;ea.COMPLETE="complete";na.EventType=sn;sn.OPEN="a";sn.CLOSE="b";sn.ERROR="c";sn.MESSAGE="d";$.prototype.listen=$.prototype.O;M.prototype.listenOnce=M.prototype.P;M.prototype.getLastError=M.prototype.Sa;M.prototype.getLastErrorCode=M.prototype.Ia;M.prototype.getStatus=M.prototype.da;M.prototype.getResponseJson=M.prototype.Wa;M.prototype.getResponseText=M.prototype.ja;M.prototype.send=M.prototype.ha;M.prototype.setWithCredentials=M.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;b.prototype.add=b.prototype.add;b.prototype.multiply=b.prototype.R;b.prototype.modulo=b.prototype.gb;b.prototype.compare=b.prototype.X;b.prototype.toNumber=b.prototype.ea;b.prototype.toString=b.prototype.toString;b.prototype.getBits=b.prototype.D;b.fromNumber=gt;b.fromString=Fa;var Qh=function(){return new Fn},Wh=function(){return tr()},kr=er,Hh=ea,Yh=Kt,Bi={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wn=na,Xh=M,Jh=ht,se=b;const ji="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ee="10.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Do("@firebase/firestore");function Se(){return $t.logLevel}function m(n,...t){if($t.logLevel<=V.DEBUG){const e=t.map(Fs);$t.debug(`Firestore (${Ee}): ${n}`,...e)}}function Et(n,...t){if($t.logLevel<=V.ERROR){const e=t.map(Fs);$t.error(`Firestore (${Ee}): ${n}`,...e)}}function ue(n,...t){if($t.logLevel<=V.WARN){const e=t.map(Fs);$t.warn(`Firestore (${Ee}): ${n}`,...e)}}function Fs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(n="Unexpected state"){const t=`FIRESTORE (${Ee}) INTERNAL ASSERTION FAILED: `+n;throw Et(t),new Error(t)}function N(n,t){n||v()}function A(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends me{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(J.UNAUTHENTICATED))}shutdown(){}}class td{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ed{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let i=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mt)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(N(typeof r.accessToken=="string"),new Ua(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return N(t===null||typeof t=="string"),new J(t)}}class nd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=J.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rd{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new nd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class id{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=i=>{i.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(N(typeof e.token=="string"),this.R=e.token,new sd(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=od(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function D(n,t){return n<t?-1:n>t?1:0}function ce(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new j(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.timestamp=t}static fromTimestamp(t){return new w(t)}static min(){return new w(new j(0,0))}static max(){return new w(new j(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,e,r){e===void 0?e=0:e>t.length&&v(),r===void 0?r=t.length-e:r>t.length-e&&v(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return We.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof We?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),o=e.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class x extends We{construct(t,e,r){return new x(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(d.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new x(e)}static emptyPath(){return new x([])}}const ad=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends We{construct(t,e,r){return new W(t,e,r)}static isValidIdentifier(t){return ad.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new y(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new y(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(e)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(x.fromString(t))}static fromName(t){return new E(x.fromString(t).popFirst(5))}static empty(){return new E(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return x.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new x(t.slice()))}}function ud(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=w.fromTimestamp(r===1e9?new j(e+1,0):new j(e,r));return new Dt(s,E.empty(),t)}function cd(n){return new Dt(n.readTime,n.key,-1)}class Dt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Dt(w.min(),E.empty(),-1)}static max(){return new Dt(w.max(),E.empty(),-1)}}function ld(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=E.comparator(n.documentKey,t.documentKey),e!==0?e:D(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(n){if(n.code!==d.FAILED_PRECONDITION||n.message!==hd)throw n;m("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new p((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof p?e:p.resolve(e)}catch(e){return p.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):p.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):p.reject(e)}static resolve(t){return new p((e,r)=>{e(t)})}static reject(t){return new p((e,r)=>{r(t)})}static waitFor(t){return new p((e,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&e()},u=>r(u))}),o=!0,i===s&&e()})}static or(t){let e=p.resolve(!1);for(const r of t)e=e.next(s=>s?p.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new p((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;e(t[c]).next(l=>{o[c]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,e){return new p((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new mt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new ke(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Bs(r.target.error);this.V.reject(new ke(t,s))}}static open(t,e,r,s){try{return new Us(e,t.transaction(s,r))}catch(i){throw new ke(e,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(m("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new pd(e)}}class Ut{constructor(t,e,r){this.name=t,this.version=e,this.p=r,Ut.S(Nn())===12.2&&Et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return m("SimpleDb","Removing database:",t),Mt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Co())return!1;if(Ut.C())return!0;const t=Nn(),e=Ut.S(t),r=0<e&&e<10,s=Ut.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(m("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;e(o)},s.onblocked=()=>{r(new ke(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new y(d.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(d.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ke(t,o))},s.onupgradeneeded=i=>{m("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{m("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,s){const i=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Us.open(this.db,t,i?"readonly":"readwrite",r),u=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),p.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(m("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class fd{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Mt(this.k.delete())}}class ke extends y{constructor(t,e){super(d.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function hn(n){return n.name==="IndexedDbTransactionError"}class pd{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(m("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(m("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Mt(r)}add(t){return m("SimpleDb","ADD",this.store.name,t,t),Mt(this.store.add(t))}get(t){return Mt(this.store.get(t)).next(e=>(e===void 0&&(e=null),m("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return m("SimpleDb","DELETE",this.store.name,t),Mt(this.store.delete(t))}count(){return m("SimpleDb","COUNT",this.store.name),Mt(this.store.count())}W(t,e){const r=this.options(t,e),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new p((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new p((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,e){m("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const s=this.cursor(r);return this.G(s,e)}Z(t){const e=this.cursor({});return new p((r,s)=>{e.onerror=i=>{const o=Bs(i.target.error);s(o)},e.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new p((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new fd(a),c=e(a.primaryKey,a.value,u);if(c instanceof p){const l=c.catch(h=>(u.done(),p.reject(h)));r.push(l)}u.isDone?s():u.$===null?a.continue():a.continue(u.$)}}).next(()=>p.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Mt(n){return new p((t,e)=>{n.onsuccess=r=>{const s=r.target.result;t(s)},n.onerror=r=>{const s=Bs(r.target.error);e(s)}})}let qi=!1;function Bs(n){const t=Ut.S(Nn());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qi||(qi=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}js._e=-1;function lr(n){return n==null}function jn(n){return n===0&&1/n==-1/0}function gd(n){return typeof n=="number"&&Number.isInteger(n)&&!jn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ve(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ja(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.comparator=t,this.root=e||K.EMPTY}insert(t,e){return new O(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new O(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new An(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new An(this.root,t,this.comparator,!1)}getReverseIterator(){return new An(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new An(this.root,t,this.comparator,!0)}}class An{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??K.RED,this.left=s??K.EMPTY,this.right=i??K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new K(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return K.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,r,s,i){return this}insert(t,e,r){return new K(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.comparator=t,this.data=new O(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new zi(this.data.getIterator())}getIteratorFrom(t){return new zi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Y)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Y(this.comparator);return e.data=t,e}}class zi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new lt([])}unionWith(t){let e=new Y(W.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new lt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ce(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qa("Invalid base64 string: "+i):i}}(t);return new nt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new nt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const md=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(n){if(N(!!n),typeof n=="string"){let t=0;const e=md.exec(n);if(N(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:U(n.seconds),nanos:U(n.nanos)}}function U(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zt(n){return typeof n=="string"?nt.fromBase64String(n):nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function $s(n){const t=n.mapValue.fields.__previous_value__;return qs(t)?$s(t):t}function He(n){const t=bt(n.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,e,r,s,i,o,a,u,c){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ye{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ye("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ye&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qs(n)?4:yd(n)?9007199254740991:10:v()}function vt(n,t){if(n===t)return!0;const e=Gt(n);if(e!==Gt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return He(n).isEqual(He(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=bt(s.timestampValue),a=bt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return zt(s.bytesValue).isEqual(zt(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return U(s.geoPointValue.latitude)===U(i.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return U(s.integerValue)===U(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=U(s.doubleValue),a=U(i.doubleValue);return o===a?jn(o)===jn(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return ce(n.arrayValue.values||[],t.arrayValue.values||[],vt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if($i(o)!==$i(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!vt(o[u],a[u])))return!1;return!0}(n,t);default:return v()}}function Xe(n,t){return(n.values||[]).find(e=>vt(e,t))!==void 0}function le(n,t){if(n===t)return 0;const e=Gt(n),r=Gt(t);if(e!==r)return D(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,t.booleanValue);case 2:return function(i,o){const a=U(i.integerValue||i.doubleValue),u=U(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return Gi(n.timestampValue,t.timestampValue);case 4:return Gi(He(n),He(t));case 5:return D(n.stringValue,t.stringValue);case 6:return function(i,o){const a=zt(i),u=zt(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=D(a[c],u[c]);if(l!==0)return l}return D(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const a=D(U(i.latitude),U(o.latitude));return a!==0?a:D(U(i.longitude),U(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=le(a[c],u[c]);if(l)return l}return D(a.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Rn.mapValue&&o===Rn.mapValue)return 0;if(i===Rn.mapValue)return 1;if(o===Rn.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const f=D(u[h],l[h]);if(f!==0)return f;const g=le(a[u[h]],c[l[h]]);if(g!==0)return g}return D(u.length,l.length)}(n.mapValue,t.mapValue);default:throw v()}}function Gi(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return D(n,t);const e=bt(n),r=bt(t),s=D(e.seconds,r.seconds);return s!==0?s:D(e.nanos,r.nanos)}function he(n){return ns(n)}function ns(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=bt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return zt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return E.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=ns(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ns(e.fields[o])}`;return s+"}"}(n.mapValue):v()}function Ki(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function rs(n){return!!n&&"integerValue"in n}function zs(n){return!!n&&"arrayValue"in n}function Qi(n){return!!n&&"nullValue"in n}function Wi(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pn(n){return!!n&&"mapValue"in n}function xe(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ve(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=xe(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=xe(n.arrayValue.values[e]);return t}return Object.assign({},n)}function yd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.value=t}static empty(){return new ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Pn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xe(e)}setAll(t){let e=W.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=a.popLast()}o?r[a.lastSegment()]=xe(o):s.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Pn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Pn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ve(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ut(xe(this.value))}}function $a(n){const t=[];return ve(n.fields,(e,r)=>{const s=new W([e]);if(Pn(r)){const i=$a(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new lt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e,r,s,i,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Z(t,0,w.min(),w.min(),w.min(),ut.empty(),0)}static newFoundDocument(t,e,r,s){return new Z(t,1,e,w.min(),r,s,0)}static newNoDocument(t,e){return new Z(t,2,e,w.min(),w.min(),ut.empty(),0)}static newUnknownDocument(t,e){return new Z(t,3,e,w.min(),w.min(),ut.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Z&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e){this.position=t,this.inclusive=e}}function Hi(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],o=n.position[s];if(i.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),e.key):r=le(o,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yi(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!vt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ed(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{}class B extends za{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Td(t,e,r):e==="array-contains"?new Ad(t,r):e==="in"?new Rd(t,r):e==="not-in"?new Sd(t,r):e==="array-contains-any"?new Pd(t,r):new B(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Id(t,r):new wd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(le(e,this.value)):e!==null&&Gt(this.value)===Gt(e)&&this.matchesComparison(le(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dt extends za{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new dt(t,e)}matches(t){return Ga(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ga(n){return n.op==="and"}function Ka(n){return vd(n)&&Ga(n)}function vd(n){for(const t of n.filters)if(t instanceof dt)return!1;return!0}function ss(n){if(n instanceof B)return n.field.canonicalString()+n.op.toString()+he(n.value);if(Ka(n))return n.filters.map(t=>ss(t)).join(",");{const t=n.filters.map(e=>ss(e)).join(",");return`${n.op}(${t})`}}function Qa(n,t){return n instanceof B?function(r,s){return s instanceof B&&r.op===s.op&&r.field.isEqual(s.field)&&vt(r.value,s.value)}(n,t):n instanceof dt?function(r,s){return s instanceof dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Qa(o,s.filters[a]),!0):!1}(n,t):void v()}function Wa(n){return n instanceof B?function(e){return`${e.field.canonicalString()} ${e.op} ${he(e.value)}`}(n):n instanceof dt?function(e){return e.op.toString()+" {"+e.getFilters().map(Wa).join(" ,")+"}"}(n):"Filter"}class Td extends B{constructor(t,e,r){super(t,e,r),this.key=E.fromName(r.referenceValue)}matches(t){const e=E.comparator(t.key,this.key);return this.matchesComparison(e)}}class Id extends B{constructor(t,e){super(t,"in",e),this.keys=Ha("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class wd extends B{constructor(t,e){super(t,"not-in",e),this.keys=Ha("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ha(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>E.fromName(r.referenceValue))}class Ad extends B{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return zs(e)&&Xe(e.arrayValue,this.value)}}class Rd extends B{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Xe(this.value.arrayValue,e)}}class Sd extends B{constructor(t,e){super(t,"not-in",e)}matches(t){if(Xe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Xe(this.value.arrayValue,e)}}class Pd extends B{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!zs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Xe(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Xi(n,t=null,e=[],r=[],s=null,i=null,o=null){return new Cd(n,t,e,r,s,i,o)}function Gs(n){const t=A(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ss(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),lr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>he(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>he(r)).join(",")),t.ce=e}return t.ce}function Ks(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ed(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Qa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Yi(n.startAt,t.startAt)&&Yi(n.endAt,t.endAt)}function is(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Vd(n,t,e,r,s,i,o,a){return new Te(n,t,e,r,s,i,o,a)}function Qs(n){return new Te(n)}function Ji(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ya(n){return n.collectionGroup!==null}function Oe(n){const t=A(n);if(t.le===null){t.le=[];const e=new Set;for(const i of t.explicitOrderBy)t.le.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Y(W.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.le.push(new Je(i,r))}),e.has(W.keyField().canonicalString())||t.le.push(new Je(W.keyField(),r))}return t.le}function _t(n){const t=A(n);return t.he||(t.he=Dd(t,Oe(n))),t.he}function Dd(n,t){if(n.limitType==="F")return Xi(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Je(s.field,i)});const e=n.endAt?new qn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new qn(n.startAt.position,n.startAt.inclusive):null;return Xi(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function os(n,t){const e=n.filters.concat([t]);return new Te(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function as(n,t,e){return new Te(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function hr(n,t){return Ks(_t(n),_t(t))&&n.limitType===t.limitType}function Xa(n){return`${Gs(_t(n))}|lt:${n.limitType}`}function Jt(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Wa(s)).join(", ")}]`),lr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>he(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>he(s)).join(",")),`Target(${r})`}(_t(n))}; limitType=${n.limitType})`}function dr(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):E.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of Oe(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(o,a,u){const c=Hi(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Oe(r),s)||r.endAt&&!function(o,a,u){const c=Hi(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Oe(r),s))}(n,t)}function bd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ja(n){return(t,e)=>{let r=!1;for(const s of Oe(n)){const i=Nd(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Nd(n,t,e){const r=n.field.isKeyField()?E.comparator(t.key,e.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?le(u,c):v()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ve(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return ja(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=new O(E.comparator);function Rt(){return kd}const Za=new O(E.comparator);function Ve(...n){let t=Za;for(const e of n)t=t.insert(e.key,e);return t}function tu(n){let t=Za;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Bt(){return Me()}function eu(){return Me()}function Me(){return new Ie(n=>n.toString(),(n,t)=>n.isEqual(t))}const xd=new O(E.comparator),Od=new Y(E.comparator);function P(...n){let t=Od;for(const e of n)t=t.add(e);return t}const Md=new Y(D);function Ld(){return Md}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jn(t)?"-0":t}}function ru(n){return{integerValue:""+n}}function Fd(n,t){return gd(t)?ru(t):nu(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this._=void 0}}function Ud(n,t,e){return n instanceof $n?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qs(i)&&(i=$s(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):n instanceof Ze?iu(n,t):n instanceof tn?ou(n,t):function(s,i){const o=su(s,i),a=Zi(o)+Zi(s.Ie);return rs(o)&&rs(s.Ie)?ru(a):nu(s.serializer,a)}(n,t)}function Bd(n,t,e){return n instanceof Ze?iu(n,t):n instanceof tn?ou(n,t):e}function su(n,t){return n instanceof zn?function(r){return rs(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class $n extends fr{}class Ze extends fr{constructor(t){super(),this.elements=t}}function iu(n,t){const e=au(t);for(const r of n.elements)e.some(s=>vt(s,r))||e.push(r);return{arrayValue:{values:e}}}class tn extends fr{constructor(t){super(),this.elements=t}}function ou(n,t){let e=au(t);for(const r of n.elements)e=e.filter(s=>!vt(s,r));return{arrayValue:{values:e}}}class zn extends fr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Zi(n){return U(n.integerValue||n.doubleValue)}function au(n){return zs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function jd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Ze&&s instanceof Ze||r instanceof tn&&s instanceof tn?ce(r.elements,s.elements,vt):r instanceof zn&&s instanceof zn?vt(r.Ie,s.Ie):r instanceof $n&&s instanceof $n}(n.transform,t.transform)}class qd{constructor(t,e){this.version=t,this.transformResults=e}}class wt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new wt}static exists(t){return new wt(void 0,t)}static updateTime(t){return new wt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class pr{}function uu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new lu(n.key,wt.none()):new dn(n.key,n.data,wt.none());{const e=n.data,r=ut.empty();let s=new Y(W.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Qt(n.key,r,new lt(s.toArray()),wt.none())}}function $d(n,t,e){n instanceof dn?function(s,i,o){const a=s.value.clone(),u=eo(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Qt?function(s,i,o){if(!Cn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=eo(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(cu(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Le(n,t,e,r){return n instanceof dn?function(i,o,a,u){if(!Cn(i.precondition,o))return a;const c=i.value.clone(),l=no(i.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,r):n instanceof Qt?function(i,o,a,u){if(!Cn(i.precondition,o))return a;const c=no(i.fieldTransforms,u,o),l=o.data;return l.setAll(cu(i)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(i,o,a){return Cn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function zd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=su(r.transform,s||null);i!=null&&(e===null&&(e=ut.empty()),e.set(r.field,i))}return e||null}function to(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ce(r,s,(i,o)=>jd(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class dn extends pr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qt extends pr{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function eo(n,t,e){const r=new Map;N(n.length===e.length);for(let s=0;s<e.length;s++){const i=n[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Bd(o,a,e[s]))}return r}function no(n,t,e){const r=new Map;for(const s of n){const i=s.transform,o=e.data.field(s.field);r.set(s.field,Ud(i,o,t))}return r}class lu extends pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gd extends pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&$d(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Le(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Le(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=eu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(s.key)?null:a;const u=uu(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(w.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),P())}isEqual(t){return this.batchId===t.batchId&&ce(this.mutations,t.mutations,(e,r)=>to(e,r))&&ce(this.baseMutations,t.baseMutations,(e,r)=>to(e,r))}}class Ws{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){N(t.mutations.length===r.length);let s=function(){return xd}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ws(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,C;function Hd(n){switch(n){default:return v();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function hu(n){if(n===void 0)return Et("GRPC error has no .code"),d.UNKNOWN;switch(n){case F.OK:return d.OK;case F.CANCELLED:return d.CANCELLED;case F.UNKNOWN:return d.UNKNOWN;case F.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case F.INTERNAL:return d.INTERNAL;case F.UNAVAILABLE:return d.UNAVAILABLE;case F.UNAUTHENTICATED:return d.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case F.NOT_FOUND:return d.NOT_FOUND;case F.ALREADY_EXISTS:return d.ALREADY_EXISTS;case F.PERMISSION_DENIED:return d.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case F.ABORTED:return d.ABORTED;case F.OUT_OF_RANGE:return d.OUT_OF_RANGE;case F.UNIMPLEMENTED:return d.UNIMPLEMENTED;case F.DATA_LOSS:return d.DATA_LOSS;default:return v()}}(C=F||(F={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=new se([4294967295,4294967295],0);function ro(n){const t=Yd().encode(n),e=new Jh;return e.update(t),new Uint8Array(e.digest())}function so(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new se([e,r],0),new se([s,i],0)]}class Hs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new De(`Invalid padding: ${e}`);if(r<0)throw new De(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new De(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new De(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=se.fromNumber(this.Te)}de(t,e,r){let s=t.add(e.multiply(se.fromNumber(r)));return s.compare(Xd)===1&&(s=new se([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=ro(t),[r,s]=so(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Hs(i,s,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=ro(t),[r,s]=so(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class De extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,fn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new gr(w.min(),s,new O(D),Rt(),P())}}class fn{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new fn(r,e,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,e,r,s){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=s}}class du{constructor(t,e){this.targetId=t,this.fe=e}}class fu{constructor(t,e,r=nt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class io{constructor(){this.ge=0,this.pe=ao(),this.ye=nt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=P(),e=P(),r=P();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:v()}}),new fn(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=ao()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,N(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Jd{constructor(t){this.Le=t,this.ke=new Map,this.qe=Rt(),this.Qe=oo(),this.Ke=new O(D)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,s)=>{this.je(s)&&e(s)})}Je(t){const e=t.targetId,r=t.fe.count,s=this.Ye(e);if(s){const i=s.target;if(is(i))if(r===0){const o=new E(i.path);this.We(e,o,Z.newNoDocument(o,w.min()))}else N(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(e);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,c)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let o,a;try{o=zt(r).toUint8Array()}catch(u){if(u instanceof qa)return ue("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Hs(o,s,i)}catch(u){return ue(u instanceof De?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(e,i,null),s++)}),s}it(t){const e=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&is(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,Z.newNoDocument(u,t))}i.De&&(e.set(o,i.ve()),i.Fe())}});let r=P();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new gr(t,e,this.Ke,this.qe,r);return this.qe=Rt(),this.Qe=oo(),this.Ke=new O(D),s}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,e)?s.Me(e,1):s.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new io,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Y(D),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||m("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new io),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function oo(){return new O(E.comparator)}function ao(){return new O(E.comparator)}const Zd={asc:"ASCENDING",desc:"DESCENDING"},tf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ef={and:"AND",or:"OR"};class nf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function us(n,t){return n.useProto3Json||lr(t)?t:{value:t}}function Gn(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function rf(n,t){return Gn(n,t.toTimestamp())}function yt(n){return N(!!n),w.fromTimestamp(function(e){const r=bt(e);return new j(r.seconds,r.nanos)}(n))}function Ys(n,t){return cs(n,t).canonicalString()}function cs(n,t){const e=function(s){return new x(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function gu(n){const t=x.fromString(n);return N(vu(t)),t}function ls(n,t){return Ys(n.databaseId,t.path)}function xr(n,t){const e=gu(t);if(e.get(1)!==n.databaseId.projectId)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new E(_u(e))}function mu(n,t){return Ys(n.databaseId,t)}function sf(n){const t=gu(n);return t.length===4?x.emptyPath():_u(t)}function hs(n){return new x(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _u(n){return N(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function uo(n,t,e){return{name:ls(n,t),fields:e.value.mapValue.fields}}function of(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(N(l===void 0||typeof l=="string"),nt.fromBase64String(l||"")):(N(l===void 0||l instanceof Uint8Array),nt.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?d.UNKNOWN:hu(c.code);return new y(l,c.message||"")}(o);e=new fu(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=xr(n,r.document.name),i=yt(r.document.updateTime),o=r.document.createTime?yt(r.document.createTime):w.min(),a=new ut({mapValue:{fields:r.document.fields}}),u=Z.newFoundDocument(s,i,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];e=new Vn(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=xr(n,r.document),i=r.readTime?yt(r.readTime):w.min(),o=Z.newNoDocument(s,i),a=r.removedTargetIds||[];e=new Vn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=xr(n,r.document),i=r.removedTargetIds||[];e=new Vn([],i,s,null)}else{if(!("filter"in t))return v();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Wd(s,i),a=r.targetId;e=new du(a,o)}}return e}function af(n,t){let e;if(t instanceof dn)e={update:uo(n,t.key,t.value)};else if(t instanceof lu)e={delete:ls(n,t.key)};else if(t instanceof Qt)e={update:uo(n,t.key,t.data),updateMask:mf(t.fieldMask)};else{if(!(t instanceof Gd))return v();e={verify:ls(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof $n)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ze)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof tn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof zn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw v()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:rf(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:v()}(n,t.precondition)),e}function uf(n,t){return n&&n.length>0?(N(t!==void 0),n.map(e=>function(s,i){let o=s.updateTime?yt(s.updateTime):yt(i);return o.isEqual(w.min())&&(o=yt(i)),new qd(o,s.transformResults||[])}(e,t))):[]}function cf(n,t){return{documents:[mu(n,t.path)]}}function lf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=mu(n,s);const i=function(c){if(c.length!==0)return Eu(dt.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(l=>function(f){return{field:Zt(f.field),direction:ff(f.dir)}}(l))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=us(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:e,parent:s}}function hf(n){let t=sf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){N(r===1);const l=e.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];e.where&&(i=function(h){const f=yu(h);return f instanceof dt&&Ka(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(R){return new Je(te(R.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,lr(f)?null:f}(e.limit));let u=null;e.startAt&&(u=function(h){const f=!!h.before,g=h.values||[];return new qn(g,f)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const f=!h.before,g=h.values||[];return new qn(g,f)}(e.endAt)),Vd(t,s,o,i,a,"F",u,c)}function df(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function yu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=te(e.unaryFilter.field);return B.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=te(e.unaryFilter.field);return B.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=te(e.unaryFilter.field);return B.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=te(e.unaryFilter.field);return B.create(o,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(n):n.fieldFilter!==void 0?function(e){return B.create(te(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return dt.create(e.compositeFilter.filters.map(r=>yu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return v()}}(e.compositeFilter.op))}(n):v()}function ff(n){return Zd[n]}function pf(n){return tf[n]}function gf(n){return ef[n]}function Zt(n){return{fieldPath:n.canonicalString()}}function te(n){return W.fromServerFormat(n.fieldPath)}function Eu(n){return n instanceof B?function(e){if(e.op==="=="){if(Wi(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NAN"}};if(Qi(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Wi(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NOT_NAN"}};if(Qi(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zt(e.field),op:pf(e.op),value:e.value}}}(n):n instanceof dt?function(e){const r=e.getFilters().map(s=>Eu(s));return r.length===1?r[0]:{compositeFilter:{op:gf(e.op),filters:r}}}(n):v()}function mf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function vu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e,r,s,i=w.min(),o=w.min(),a=nt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new St(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t){this.ct=t}}function yf(n){const t=hf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?as(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this._n=new vf}addToCollectionParentIndex(t,e){return this._n.add(e),p.resolve()}getCollectionParents(t,e){return p.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return p.resolve()}deleteFieldIndex(t,e){return p.resolve()}deleteAllFieldIndexes(t){return p.resolve()}createTargetIndexes(t,e){return p.resolve()}getDocumentsMatchingTarget(t,e){return p.resolve(null)}getIndexType(t,e){return p.resolve(0)}getFieldIndexes(t,e){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,e){return p.resolve(Dt.min())}getMinOffsetFromCollectionGroup(t,e){return p.resolve(Dt.min())}updateCollectionGroup(t,e,r){return p.resolve()}updateIndexEntries(t,e){return p.resolve()}}class vf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Y(x.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Y(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new de(0)}static Bn(){return new de(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.changes=new Ie(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Z.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?p.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Le(r.mutation,s,lt.empty(),j.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,e,r=P()){const s=Bt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let o=Ve();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=Bt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,P()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,s){let i=Rt();const o=Me(),a=function(){return Me()}();return e.forEach((u,c)=>{const l=r.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof Qt)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Le(l.mutation,c,l.mutation.getFieldMask(),j.now())):o.set(c.key,lt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,l)=>o.set(c,l)),e.forEach((c,l)=>{var h;return a.set(c,new If(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=Me();let s=new O((o,a)=>o-a),i=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=e.get(u);if(c===null)return;let l=r.get(u)||lt.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(s.get(a.batchId)||P()).add(u);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=eu();l.forEach(f=>{if(!i.has(f)){const g=uu(e.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ya(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):p.resolve(Bt());let a=-1,u=i;return o.next(c=>p.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?p.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,P())).next(l=>({batchId:a,changes:tu(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new E(e)).next(r=>{let s=Ve();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let o=Ve();return this.indexManager.getCollectionParents(t,i).next(a=>p.forEach(a,u=>{const c=function(h,f){return new Te(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(l=>{l.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(o=>{i.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,Z.newInvalidDocument(l)))});let a=Ve();return o.forEach((u,c)=>{const l=i.get(u);l!==void 0&&Le(l.mutation,c,lt.empty(),j.now()),dr(e,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return p.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:yt(s.createTime)}}(e)),p.resolve()}getNamedQuery(t,e){return p.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:yf(s.bundledQuery),readTime:yt(s.readTime)}}(e)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.overlays=new O(E.comparator),this.hr=new Map}getOverlay(t,e){return p.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Bt();return p.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.ht(t,e,i)}),p.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),p.resolve()}getOverlaysForCollection(t,e,r){const s=Bt(),i=e.length+1,o=new E(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return p.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new O((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=Bt(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=Bt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=s)););return p.resolve(a)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Qd(e,r));let i=this.hr.get(e);i===void 0&&(i=P(),this.hr.set(e,i)),this.hr.set(e,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.Pr=new Y(q.Ir),this.Tr=new Y(q.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new q(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new q(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new E(new x([])),r=new q(e,t),s=new q(e,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new E(new x([])),r=new q(e,t),s=new q(e,t+1);let i=P();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new q(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class q{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return E.comparator(t.key,e.key)||D(t.pr,e.pr)}static Er(t,e){return D(t.pr,e.pr)||E.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Y(q.Ir)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Kd(i,e,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new q(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,e){return p.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),i=s<0?0:s;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new q(e,0),s=new q(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Y(D);return e.forEach(s=>{const i=new q(s,0),o=new q(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),p.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;E.isDocumentKey(i)||(i=i.child(""));const o=new q(new E(i),0);let a=new Y(D);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.pr)),!0)},o),p.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){N(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return p.forEach(e.mutations,s=>{const i=new q(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new q(e,0),s=this.wr.firstAfterOrEqual(r);return p.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t){this.vr=t,this.docs=function(){return new O(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return p.resolve(r?r.document.mutableCopy():Z.newInvalidDocument(e))}getEntries(t,e){let r=Rt();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Z.newInvalidDocument(s))}),p.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=Rt();const o=e.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ld(cd(l),r)<=0||(s.has(l.key)||dr(e,l))&&(i=i.insert(l.key,l.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(t,e,r,s){v()}Fr(t,e){return p.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Cf(this)}getSize(t){return p.resolve(this.size)}}class Cf extends Tf{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),p.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t){this.persistence=t,this.Mr=new Ie(e=>Gs(e),Ks),this.lastRemoteSnapshotVersion=w.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Xs,this.targetCount=0,this.Br=de.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),p.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new de(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,p.resolve()}updateTargetData(t,e){return this.qn(e),p.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),p.waitFor(i).next(()=>s)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return p.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),p.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),p.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return p.resolve(r)}containsKey(t,e){return p.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,e){this.Lr={},this.overlays={},this.kr=new js(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Vf(this),this.indexManager=new Ef,this.remoteDocumentCache=function(s){return new Pf(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new _f(e),this.$r=new Af(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Rf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Lr[t.toKey()];return r||(r=new Sf(e,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){m("MemoryPersistence","Starting transaction:",t);const s=new bf(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,e){return p.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,e)))}}class bf extends dd{constructor(t){super(),this.currentSequenceNumber=t}}class Js{constructor(t){this.persistence=t,this.zr=new Xs,this.jr=null}static Hr(t){return new Js(t)}get Jr(){if(this.jr)return this.jr;throw v()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),p.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),p.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Jr,r=>{const s=E.fromPath(r);return this.Yr(t,s).next(i=>{i||e.removeEntry(s,w.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return p.or([()=>p.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=P(),s=P();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zs(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return xc()?8:Ut.v(Nn())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ji(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,e,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Nf;return this.Ji(t,e,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>i.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(Se()<=V.DEBUG&&m("QueryEngine","SDK will not create cache indexes for query:",Jt(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),p.resolve()):(Se()<=V.DEBUG&&m("QueryEngine","Query:",Jt(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Se()<=V.DEBUG&&m("QueryEngine","The SDK decides to create cache indexes for query:",Jt(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,_t(e))):p.resolve())}ji(t,e){if(Ji(e))return p.resolve(null);let r=_t(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=as(e,null,"F"),r=_t(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=P(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Zi(e,a);return this.Xi(e,c,o,u.readTime)?this.ji(t,as(e,null,"F")):this.es(t,c,e,u)}))})))}Hi(t,e,r,s){return Ji(e)||s.isEqual(w.min())?p.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(e,i);return this.Xi(e,o,r,s)?p.resolve(null):(Se()<=V.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jt(e)),this.es(t,o,e,ud(s,-1)).next(a=>a))})}Zi(t,e){let r=new Y(Ja(t));return e.forEach((s,i)=>{dr(t,i)&&(r=r.add(i))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,e,r){return Se()<=V.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",Jt(e)),this.zi.getDocumentsMatchingQuery(t,e,Dt.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new O(D),this.rs=new Ie(i=>Gs(i),Ks),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new wf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Of(n,t,e,r){return new xf(n,t,e,r)}async function Tu(n,t){const e=A(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=P();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return e.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function Mf(n,t){const e=A(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=e.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,f=h.keys();let g=p.resolve();return f.forEach(R=>{g=g.next(()=>l.getEntry(u,R)).next(S=>{const T=c.docVersions.get(R);N(T!==null),S.version.compareTo(T)<0&&(h.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),l.addEntry(S)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=P();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Iu(n){const t=A(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Lf(n,t){const e=A(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const a=[];t.targetChanges.forEach((l,h)=>{const f=s.get(h);if(!f)return;a.push(e.Qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>e.Qr.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(nt.EMPTY_BYTE_STRING,w.min()).withLastLimboFreeSnapshotVersion(w.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),s=s.insert(h,g),function(S,T,L){return S.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(f,g,l)&&a.push(e.Qr.updateTargetData(i,g))});let u=Rt(),c=P();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Ff(i,o,t.documentUpdates).next(l=>{u=l.cs,c=l.ls})),!r.isEqual(w.min())){const l=e.Qr.getLastRemoteSnapshotVersion(i).next(h=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(e.ns=s,i))}function Ff(n,t,e){let r=P(),s=P();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let o=Rt();return e.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(w.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):m("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:s}})}function Uf(n,t){const e=A(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Bf(n,t){const e=A(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(i=>i?(s=i,p.resolve(s)):e.Qr.allocateTargetId(r).next(o=>(s=new St(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function ds(n,t,e){const r=A(n),s=r.ns.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!hn(o))throw o;m("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function co(n,t,e){const r=A(n);let s=w.min(),i=P();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=A(u),f=h.rs.get(l);return f!==void 0?p.resolve(h.ns.get(f)):h.Qr.getTargetData(c,l)}(r,o,_t(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?s:w.min(),e?i:P())).next(a=>(jf(r,bd(t),a),{documents:a,hs:i})))}function jf(n,t,e){let r=n.ss.get(t)||w.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(t,r)}class lo{constructor(){this.activeTargetIds=Ld()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class qf{constructor(){this.no=new lo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new lo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn=null;function Or(){return Sn===null?Sn=function(){return 268435456+Math.round(2147483648*Math.random())}():Sn++,"0x"+Sn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="WebChannelConnection";class Kf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(e,r,s,i,o){const a=Or(),u=this.bo(e,r.toUriEncodedString());m("RestConnection",`Sending RPC '${e}' ${a}:`,u,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(e,u,c,s).then(l=>(m("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw ue("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",u,"request:",s),l})}vo(e,r,s,i,o,a){return this.So(e,r,s,i,o)}Do(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ee}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>e[o]=i),s&&s.headers.forEach((i,o)=>e[o]=i)}bo(e,r){const s=zf[e];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,s){const i=Or();return new Promise((o,a)=>{const u=new Xh;u.setWithCredentials(!0),u.listenOnce(Hh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case kr.NO_ERROR:const l=u.getResponseJson();m(X,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case kr.TIMEOUT:m(X,`RPC '${t}' ${i} timed out`),a(new y(d.DEADLINE_EXCEEDED,"Request time out"));break;case kr.HTTP_ERROR:const h=u.getStatus();if(m(X,`RPC '${t}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const R=function(T){const L=T.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(L)>=0?L:d.UNKNOWN}(g.status);a(new y(R,g.message))}else a(new y(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(d.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{m(X,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);m(X,`RPC '${t}' ${i} sending request:`,s),u.send(e,"POST",c,r,15)})}Fo(t,e,r){const s=Or(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Qh(),a=Wh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const l=i.join("");m(X,`Creating RPC '${t}' stream ${s}: ${l}`,u);const h=o.createWebChannel(l,u);let f=!1,g=!1;const R=new Gf({lo:T=>{g?m(X,`Not sending because RPC '${t}' stream ${s} is closed:`,T):(f||(m(X,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),m(X,`RPC '${t}' stream ${s} sending:`,T),h.send(T))},ho:()=>h.close()}),S=(T,L,G)=>{T.listen(L,st=>{try{G(st)}catch(Tt){setTimeout(()=>{throw Tt},0)}})};return S(h,wn.EventType.OPEN,()=>{g||m(X,`RPC '${t}' stream ${s} transport opened.`)}),S(h,wn.EventType.CLOSE,()=>{g||(g=!0,m(X,`RPC '${t}' stream ${s} transport closed`),R.Vo())}),S(h,wn.EventType.ERROR,T=>{g||(g=!0,ue(X,`RPC '${t}' stream ${s} transport errored:`,T),R.Vo(new y(d.UNAVAILABLE,"The operation could not be completed")))}),S(h,wn.EventType.MESSAGE,T=>{var L;if(!g){const G=T.data[0];N(!!G);const st=G,Tt=st.error||((L=st[0])===null||L===void 0?void 0:L.error);if(Tt){m(X,`RPC '${t}' stream ${s} received error:`,Tt);const mn=Tt.status;let Yt=function(hc){const _i=F[hc];if(_i!==void 0)return hu(_i)}(mn),_n=Tt.message;Yt===void 0&&(Yt=d.INTERNAL,_n="Unknown error status: "+mn+" with message "+Tt.message),g=!0,R.Vo(new y(Yt,_n)),h.close()}else m(X,`RPC '${t}' stream ${s} received:`,G),R.mo(G)}}),S(a,Yh.STAT_EVENT,T=>{T.stat===Bi.PROXY?m(X,`RPC '${t}' stream ${s} detected buffering proxy`):T.stat===Bi.NOPROXY&&m(X,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.Ro()},0),R}}function Mr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(n){return new nf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,e-r);s>0&&m("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t,e,r,s,i,o,a,u){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new wu(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===d.RESOURCE_EXHAUSTED?(Et(e.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===e&&this.o_(r,s)},r=>{t(()=>{const s=new y(d.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qf extends Au{constructor(t,e,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=of(this.serializer,t),r=function(i){if(!("targetChange"in i))return w.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?w.min():o.readTime?yt(o.readTime):w.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=hs(this.serializer),e.addTarget=function(i,o){let a;const u=o.target;if(a=is(u)?{documents:cf(i,u)}:{query:lf(i,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=pu(i,o.resumeToken);const c=us(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(w.min())>0){a.readTime=Gn(i,o.snapshotVersion.toTimestamp());const c=us(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=df(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=hs(this.serializer),e.removeTarget=t,this.t_(e)}}class Wf extends Au{constructor(t,e,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(N(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=uf(t.writeResults,t.commitTime),r=yt(t.commitTime);return this.listener.T_(r,e)}return N(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=hs(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>af(this.serializer,r))};this.t_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,cs(e,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(d.UNKNOWN,i.toString())})}vo(t,e,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,cs(e,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(d.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Yf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Et(e),this.g_=!1):m("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Wt(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=A(u);c.v_.add(4),await pn(c),c.x_.set("Unknown"),c.v_.delete(4),await _r(c)}(this))})}),this.x_=new Yf(r,s)}}async function _r(n){if(Wt(n))for(const t of n.F_)await t(!0)}async function pn(n){for(const t of n.F_)await t(!1)}function Ru(n,t){const e=A(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),ni(e)?ei(e):we(e).Jo()&&ti(e,t))}function Su(n,t){const e=A(n),r=we(e);e.C_.delete(t),r.Jo()&&Pu(e,t),e.C_.size===0&&(r.Jo()?r.Xo():Wt(e)&&e.x_.set("Unknown"))}function ti(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(w.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}we(n).c_(t)}function Pu(n,t){n.O_.Oe(t),we(n).l_(t)}function ei(n){n.O_=new Jd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),we(n).start(),n.x_.p_()}function ni(n){return Wt(n)&&!we(n).Ho()&&n.C_.size>0}function Wt(n){return A(n).v_.size===0}function Cu(n){n.O_=void 0}async function Jf(n){n.C_.forEach((t,e)=>{ti(n,t)})}async function Zf(n,t){Cu(n),ni(n)?(n.x_.S_(t),ei(n)):n.x_.set("Unknown")}async function tp(n,t,e){if(n.x_.set("Online"),t instanceof fu&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(n,t)}catch(r){m("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Kn(n,r)}else if(t instanceof Vn?n.O_.$e(t):t instanceof du?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(w.min()))try{const r=await Iu(n.localStore);e.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.C_.get(c);l&&i.C_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=i.C_.get(u);if(!l)return;i.C_.set(u,l.withResumeToken(nt.EMPTY_BYTE_STRING,l.snapshotVersion)),Pu(i,u);const h=new St(l.target,u,c,l.sequenceNumber);ti(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){m("RemoteStore","Failed to raise snapshot:",r),await Kn(n,r)}}async function Kn(n,t,e){if(!hn(t))throw t;n.v_.add(1),await pn(n),n.x_.set("Offline"),e||(e=()=>Iu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await _r(n)})}function Vu(n,t){return t().catch(e=>Kn(n,e,t))}async function yr(n){const t=A(n),e=Nt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;ep(t);)try{const s=await Uf(t.localStore,r);if(s===null){t.D_.length===0&&e.Xo();break}r=s.batchId,np(t,s)}catch(s){await Kn(t,s)}Du(t)&&bu(t)}function ep(n){return Wt(n)&&n.D_.length<10}function np(n,t){n.D_.push(t);const e=Nt(n);e.Jo()&&e.P_&&e.I_(t.mutations)}function Du(n){return Wt(n)&&!Nt(n).Ho()&&n.D_.length>0}function bu(n){Nt(n).start()}async function rp(n){Nt(n).d_()}async function sp(n){const t=Nt(n);for(const e of n.D_)t.I_(e.mutations)}async function ip(n,t,e){const r=n.D_.shift(),s=Ws.from(r,t,e);await Vu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await yr(n)}async function op(n,t){t&&Nt(n).P_&&await async function(r,s){if(function(o){return Hd(o)&&o!==d.ABORTED}(s.code)){const i=r.D_.shift();Nt(r).Zo(),await Vu(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yr(r)}}(n,t),Du(n)&&bu(n)}async function fo(n,t){const e=A(n);e.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const r=Wt(e);e.v_.add(3),await pn(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await _r(e)}async function ap(n,t){const e=A(n);t?(e.v_.delete(2),await _r(e)):t||(e.v_.add(2),await pn(e),e.x_.set("Unknown"))}function we(n){return n.N_||(n.N_=function(e,r,s){const i=A(e);return i.R_(),new Qf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:Jf.bind(null,n),To:Zf.bind(null,n),u_:tp.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),ni(n)?ei(n):n.x_.set("Unknown")):(await n.N_.stop(),Cu(n))})),n.N_}function Nt(n){return n.B_||(n.B_=function(e,r,s){const i=A(e);return i.R_(),new Wf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:rp.bind(null,n),To:op.bind(null,n),E_:sp.bind(null,n),T_:ip.bind(null,n)}),n.F_.push(async t=>{t?(n.B_.Zo(),await yr(n)):(await n.B_.stop(),n.D_.length>0&&(m("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,a=new ri(t,e,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function si(n,t){if(Et("AsyncQueue",`${t}: ${n}`),hn(n))return new y(d.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.comparator=t?(e,r)=>t(e,r)||E.comparator(e.key,r.key):(e,r)=>E.comparator(e.key,r.key),this.keyedMap=Ve(),this.sortedSet=new O(this.comparator)}static emptySet(t){return new ie(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ie)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ie;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.L_=new O(E.comparator)}track(t){const e=t.doc.key,r=this.L_.get(e);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(e,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(e):t.type===1&&r.type===2?this.L_=this.L_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):v():this.L_=this.L_.insert(e,t)}k_(){const t=[];return this.L_.inorderTraversal((e,r)=>{t.push(r)}),t}}class fe{constructor(t,e,r,s,i,o,a,u,c){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,e,r,s,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new fe(t,e,ie.emptySet(e),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.q_=void 0,this.Q_=[]}}class cp{constructor(){this.queries=new Ie(t=>Xa(t),hr),this.onlineState="Unknown",this.K_=new Set}}async function Nu(n,t){const e=A(n),r=t.query;let s=!1,i=e.queries.get(r);if(i||(s=!0,i=new up),s)try{i.q_=await e.onListen(r)}catch(o){const a=si(o,`Initialization of query '${Jt(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,i),i.Q_.push(t),t.U_(e.onlineState),i.q_&&t.W_(i.q_)&&ii(e)}async function ku(n,t){const e=A(n),r=t.query;let s=!1;const i=e.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return e.queries.delete(r),e.onUnlisten(r)}function lp(n,t){const e=A(n);let r=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&ii(e)}function hp(n,t,e){const r=A(n),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(e);r.queries.delete(t)}function ii(n){n.K_.forEach(t=>{t.next()})}class xu{constructor(t,e,r){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new fe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Y_(t){t=fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t){this.key=t}}class Mu{constructor(t){this.key=t}}class dp{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=P(),this.mutatedKeys=P(),this.ua=Ja(t),this.ca=new ie(this.ua)}get la(){return this.oa}ha(t,e){const r=e?e.Pa:new po,s=e?e.ca:this.ca;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const f=s.get(l),g=dr(this.query,h)?h:null,R=!!f&&this.mutatedKeys.has(f.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;f&&g?f.data.isEqual(g.data)?R!==S&&(r.track({type:3,doc:g}),T=!0):this.Ia(f,g)||(r.track({type:2,doc:g}),T=!0,(u&&this.ua(g,u)>0||c&&this.ua(g,c)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),T=!0):f&&!g&&(r.track({type:1,doc:f}),T=!0,(u||c)&&(a=!0)),T&&(g?(o=o.add(g),i=S?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((l,h)=>function(g,R){const S=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return S(g)-S(R)}(l.type,h.type)||this.ua(l.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=e&&!s?this.Ea():[],u=this.aa.size===0&&this.current&&!s?1:0,c=u!==this._a;return this._a=u,o.length!==0||c?{snapshot:new fe(this.query,t.ca,i,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new po,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=P(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const e=[];return t.forEach(r=>{this.aa.has(r)||e.push(new Mu(r))}),this.aa.forEach(r=>{t.has(r)||e.push(new Ou(r))}),e}Ra(t){this.oa=t.hs,this.aa=P();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return fe.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class fp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class pp{constructor(t){this.key=t,this.ma=!1}}class gp{constructor(t,e,r,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ie(a=>Xa(a),hr),this.pa=new Map,this.ya=new Set,this.wa=new O(E.comparator),this.Sa=new Map,this.ba=new Xs,this.Da={},this.Ca=new Map,this.va=de.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function mp(n,t){const e=Sp(n);let r,s;const i=e.ga.get(t);if(i)r=i.targetId,e.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await Bf(e.localStore,_t(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await _p(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&Ru(e.remoteStore,o)}return s}async function _p(n,t,e,r,s){n.Ma=(h,f,g)=>async function(S,T,L,G){let st=T.view.ha(L);st.Xi&&(st=await co(S.localStore,T.query,!1).then(({documents:_n})=>T.view.ha(_n,st)));const Tt=G&&G.targetChanges.get(T.targetId),mn=G&&G.targetMismatches.get(T.targetId)!=null,Yt=T.view.applyChanges(st,S.isPrimaryClient,Tt,mn);return mo(S,T.targetId,Yt.da),Yt.snapshot}(n,h,f,g);const i=await co(n.localStore,t,!0),o=new dp(t,i.hs),a=o.ha(i.documents),u=fn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),c=o.applyChanges(a,n.isPrimaryClient,u);mo(n,e,c.da);const l=new fp(t,e,o);return n.ga.set(t,l),n.pa.has(e)?n.pa.get(e).push(t):n.pa.set(e,[t]),c.snapshot}async function yp(n,t){const e=A(n),r=e.ga.get(t),s=e.pa.get(r.targetId);if(s.length>1)return e.pa.set(r.targetId,s.filter(i=>!hr(i,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await ds(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),Su(e.remoteStore,r.targetId),fs(e,r.targetId)}).catch(ln)):(fs(e,r.targetId),await ds(e.localStore,r.targetId,!0))}async function Ep(n,t,e){const r=Pp(n);try{const s=await function(o,a){const u=A(o),c=j.now(),l=a.reduce((g,R)=>g.add(R.key),P());let h,f;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let R=Rt(),S=P();return u.os.getEntries(g,l).next(T=>{R=T,R.forEach((L,G)=>{G.isValidDocument()||(S=S.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,R)).next(T=>{h=T;const L=[];for(const G of a){const st=zd(G,h.get(G.key).overlayedDocument);st!=null&&L.push(new Qt(G.key,st,$a(st.value.mapValue),wt.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,L,a)}).next(T=>{f=T;const L=T.applyToLocalDocumentSet(h,S);return u.documentOverlayCache.saveOverlays(g,T.batchId,L)})}).then(()=>({batchId:f.batchId,changes:tu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let c=o.Da[o.currentUser.toKey()];c||(c=new O(D)),c=c.insert(a,u),o.Da[o.currentUser.toKey()]=c}(r,s.batchId,e),await gn(r,s.changes),await yr(r.remoteStore)}catch(s){const i=si(s,"Failed to persist write");e.reject(i)}}async function Lu(n,t){const e=A(n);try{const r=await Lf(e.localStore,t);t.targetChanges.forEach((s,i)=>{const o=e.Sa.get(i);o&&(N(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?N(o.ma):s.removedDocuments.size>0&&(N(o.ma),o.ma=!1))}),await gn(e,r,t)}catch(r){await ln(r)}}function go(n,t,e){const r=A(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=A(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const f of h.Q_)f.U_(a)&&(c=!0)}),c&&ii(u)}(r.eventManager,t),s.length&&r.fa.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function vp(n,t,e){const r=A(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Sa.get(t),i=s&&s.key;if(i){let o=new O(E.comparator);o=o.insert(i,Z.newNoDocument(i,w.min()));const a=P().add(i),u=new gr(w.min(),new Map,new O(D),o,a);await Lu(r,u),r.wa=r.wa.remove(i),r.Sa.delete(t),oi(r)}else await ds(r.localStore,t,!1).then(()=>fs(r,t,e)).catch(ln)}async function Tp(n,t){const e=A(n),r=t.batch.batchId;try{const s=await Mf(e.localStore,t);Uu(e,r,null),Fu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await gn(e,s)}catch(s){await ln(s)}}async function Ip(n,t,e){const r=A(n);try{const s=await function(o,a){const u=A(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(N(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,t);Uu(r,t,e),Fu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await gn(r,s)}catch(s){await ln(s)}}function Fu(n,t){(n.Ca.get(t)||[]).forEach(e=>{e.resolve()}),n.Ca.delete(t)}function Uu(n,t,e){const r=A(n);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Da[r.currentUser.toKey()]=s}}function fs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.pa.get(t))n.ga.delete(r),e&&n.fa.xa(r,e);n.pa.delete(t),n.isPrimaryClient&&n.ba.Vr(t).forEach(r=>{n.ba.containsKey(r)||Bu(n,r)})}function Bu(n,t){n.ya.delete(t.path.canonicalString());const e=n.wa.get(t);e!==null&&(Su(n.remoteStore,e),n.wa=n.wa.remove(t),n.Sa.delete(e),oi(n))}function mo(n,t,e){for(const r of e)r instanceof Ou?(n.ba.addReference(r.key,t),wp(n,r)):r instanceof Mu?(m("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,t),n.ba.containsKey(r.key)||Bu(n,r.key)):v()}function wp(n,t){const e=t.key,r=e.path.canonicalString();n.wa.get(e)||n.ya.has(r)||(m("SyncEngine","New document in limbo: "+e),n.ya.add(r),oi(n))}function oi(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const t=n.ya.values().next().value;n.ya.delete(t);const e=new E(x.fromString(t)),r=n.va.next();n.Sa.set(r,new pp(e)),n.wa=n.wa.insert(e,r),Ru(n.remoteStore,new St(_t(Qs(e.path)),r,"TargetPurposeLimboResolution",js._e))}}async function gn(n,t,e){const r=A(n),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,u)=>{o.push(r.Ma(u,t,e).then(c=>{if((c||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const l=Zs.Ki(u.targetId,c);i.push(l)}}))}),await Promise.all(o),r.fa.u_(s),await async function(u,c){const l=A(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(c,f=>p.forEach(f.qi,g=>l.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>p.forEach(f.Qi,g=>l.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!hn(h))throw h;m("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const g=l.ns.get(f),R=g.snapshotVersion,S=g.withLastLimboFreeSnapshotVersion(R);l.ns=l.ns.insert(f,S)}}}(r.localStore,i))}async function Ap(n,t){const e=A(n);if(!e.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const r=await Tu(e.localStore,t);e.currentUser=t,function(i,o){i.Ca.forEach(a=>{a.forEach(u=>{u.reject(new y(d.CANCELLED,o))})}),i.Ca.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await gn(e,r.us)}}function Rp(n,t){const e=A(n),r=e.Sa.get(t);if(r&&r.ma)return P().add(r.key);{let s=P();const i=e.pa.get(t);if(!i)return s;for(const o of i){const a=e.ga.get(o);s=s.unionWith(a.view.la)}return s}}function Sp(n){const t=A(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Lu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=vp.bind(null,t),t.fa.u_=lp.bind(null,t.eventManager),t.fa.xa=hp.bind(null,t.eventManager),t}function Pp(n){const t=A(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Tp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ip.bind(null,t),t}class _o{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=mr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Of(this.persistence,new kf,t.initialUser,this.serializer)}createPersistence(t){return new Df(Js.Hr,this.serializer)}createSharedClientState(t){return new qf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cp{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>go(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ap.bind(null,this.syncEngine),await ap(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new cp}()}createDatastore(t){const e=mr(t.databaseInfo.databaseId),r=function(i){return new Kf(i)}(t.databaseInfo);return function(i,o,a,u){return new Hf(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,o,a){return new Xf(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>go(this.syncEngine,e,0),function(){return ho.D()?new ho:new $f}())}createSyncEngine(t,e){return function(s,i,o,a,u,c,l){const h=new gp(s,i,o,a,u,c);return l&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=A(r);m("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await pn(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Et("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=J.UNAUTHENTICATED,this.clientId=Ba.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{m("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(m("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=si(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Lr(n,t){n.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function yo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await bp(n);m("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>fo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>fo(t.remoteStore,s)),n._onlineComponents=t}function Dp(n){return n.name==="FirebaseError"?n.code===d.FAILED_PRECONDITION||n.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function bp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){m("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Dp(e))throw e;ue("Error using user provided cache. Falling back to memory cache: "+e),await Lr(n,new _o)}}else m("FirestoreClient","Using default OfflineComponentProvider"),await Lr(n,new _o);return n._offlineComponents}async function qu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(m("FirestoreClient","Using user provided OnlineComponentProvider"),await yo(n,n._uninitializedComponentsProvider._online)):(m("FirestoreClient","Using default OnlineComponentProvider"),await yo(n,new Cp))),n._onlineComponents}function Np(n){return qu(n).then(t=>t.syncEngine)}async function $u(n){const t=await qu(n),e=t.eventManager;return e.onListen=mp.bind(null,t.syncEngine),e.onUnlisten=yp.bind(null,t.syncEngine),e}function kp(n,t,e={}){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const l=new ju({next:f=>{o.enqueueAndForget(()=>ku(i,h));const g=f.docs.has(a);!g&&f.fromCache?c.reject(new y(d.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&u&&u.source==="server"?c.reject(new y(d.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new xu(Qs(a.path),l,{includeMetadataChanges:!0,Z_:!0});return Nu(i,h)}(await $u(n),n.asyncQueue,t,e,r)),r.promise}function xp(n,t,e={}){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const l=new ju({next:f=>{o.enqueueAndForget(()=>ku(i,h)),f.fromCache&&u.source==="server"?c.reject(new y(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new xu(a,l,{includeMetadataChanges:!0,Z_:!0});return Nu(i,h)}(await $u(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n,t,e){if(!e)throw new y(d.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Op(n,t,e,r){if(t===!0&&r===!0)throw new y(d.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function vo(n){if(!E.isDocumentKey(n))throw new y(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function To(n){if(E.isDocumentKey(n))throw new y(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Er(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":v()}function pe(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new y(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Er(n);throw new y(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Op("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class vr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Io({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Io(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zh;switch(r.type){case"firstParty":return new rd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Eo.get(e);r&&(m("ComponentProvider","Removing Datastore"),Eo.delete(e),r.terminate())}(this),Promise.resolve()}}function Mp(n,t,e,r={}){var s;const i=(n=pe(n,vr))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ue("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=J.MOCK_USER;else{a=Nc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new J(c)}n._authCredentials=new td(new Ua(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ht(this.firestore,t,this._query)}}class it{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new it(this.firestore,t,this._key)}}class Vt extends Ht{constructor(t,e,r){super(t,e,Qs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new it(this.firestore,null,new E(t))}withConverter(t){return new Vt(this.firestore,t,this._path)}}function Ku(n,t,...e){if(n=oe(n),Gu("collection","path",t),n instanceof vr){const r=x.fromString(t,...e);return To(r),new Vt(n,null,r)}{if(!(n instanceof it||n instanceof Vt))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(t,...e));return To(r),new Vt(n.firestore,null,r)}}function Lp(n,t,...e){if(n=oe(n),arguments.length===1&&(t=Ba.newId()),Gu("doc","path",t),n instanceof vr){const r=x.fromString(t,...e);return vo(r),new it(n,null,new E(r))}{if(!(n instanceof it||n instanceof Vt))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(t,...e));return vo(r),new it(n.firestore,n instanceof Vt?n.converter:null,new E(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new wu(this,"async_queue_retry"),this._u=()=>{const e=Mr();e&&m("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=Mr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=Mr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const e=new mt;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!hn(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const e=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Et("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=e,e}enqueueAfterDelay(t,e,r){this.au(),this.ou.indexOf(t)>-1&&(e=0);const s=ri.createAndSchedule(this,t,e,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&v()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.nu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}}class Tr extends vr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Fp}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qu(this),this._firestoreClient.terminate()}}function Up(n,t){const e=typeof n=="object"?n:Ll(),r=typeof n=="string"?n:t||"(default)",s=kl(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dc("firestore");i&&Mp(s,...i)}return s}function ai(n){return n._firestoreClient||Qu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Qu(n){var t,e,r;const s=n._freezeSettings(),i=function(a,u,c,l){return new _d(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,zu(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Vp(n._authCredentials,n._appCheckCredentials,n._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ge(nt.fromBase64String(t))}catch(e){throw new y(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ge(nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new y(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new y(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new y(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=/^__.*__$/;class jp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Qt(t,this.data,this.fieldMask,e,this.fieldTransforms):new dn(t,this.data,e,this.fieldTransforms)}}function Hu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class li{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new li(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Au({path:r,Vu:!1});return s.mu(t),s}fu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Qn(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(Hu(this.du)&&Bp.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class qp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||mr(t)}Su(t,e,r,s=!1){return new li({du:t,methodName:e,wu:r,path:W.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yu(n){const t=n._freezeSettings(),e=mr(n._databaseId);return new qp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function $p(n,t,e,r,s,i={}){const o=n.Su(i.merge||i.mergeFields?2:0,t,e,s);Zu("Data must be an object, but it was:",o,r);const a=Xu(r,o);let u,c;if(i.merge)u=new lt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=Gp(t,h,e);if(!o.contains(f))throw new y(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Qp(l,f)||l.push(f)}u=new lt(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new jp(new ut(a),u,c)}function zp(n,t,e,r=!1){return hi(e,n.Su(r?4:3,t))}function hi(n,t){if(Ju(n=oe(n)))return Zu("Unsupported field value:",t,n),Xu(n,t);if(n instanceof Wu)return function(r,s){if(!Hu(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=hi(a,s.gu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(n,t)}return function(r,s){if((r=oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Fd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=j.fromDate(r);return{timestampValue:Gn(s.serializer,i)}}if(r instanceof j){const i=new j(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gn(s.serializer,i)}}if(r instanceof ci)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ge)return{bytesValue:pu(s.serializer,r._byteString)};if(r instanceof it){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ys(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${Er(r)}`)}(n,t)}function Xu(n,t){const e={};return ja(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ve(n,(r,s)=>{const i=hi(s,t.Ru(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function Ju(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof j||n instanceof ci||n instanceof ge||n instanceof it||n instanceof Wu)}function Zu(n,t,e){if(!Ju(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Er(e);throw r==="an object"?t.pu(n+" a custom object"):t.pu(n+" "+r)}}function Gp(n,t,e){if((t=oe(t))instanceof ui)return t._internalPath;if(typeof t=="string")return tc(n,t);throw Qn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Kp=new RegExp("[~\\*/\\[\\]]");function tc(n,t,e){if(t.search(Kp)>=0)throw Qn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ui(...t.split("."))._internalPath}catch{throw Qn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Qn(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new y(d.INVALID_ARGUMENT,a+n+u)}function Qp(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Wp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(di("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Wp extends ec{data(){return super.data()}}function di(n,t){return typeof t=="string"?tc(n,t):t instanceof ui?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fi{}class nc extends fi{}function rc(n,t,...e){let r=[];t instanceof fi&&r.push(t),r=r.concat(e),function(i){const o=i.filter(u=>u instanceof gi).length,a=i.filter(u=>u instanceof pi).length;if(o>1||o>0&&a>0)throw new y(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class pi extends nc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new pi(t,e,r)}_apply(t){const e=this._parse(t);return ic(t._query,e),new Ht(t.firestore,t.converter,os(t._query,e))}_parse(t){const e=Yu(t.firestore);return function(i,o,a,u,c,l,h){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new y(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ao(h,l);const g=[];for(const R of h)g.push(wo(u,i,R));f={arrayValue:{values:g}}}else f=wo(u,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ao(h,l),f=zp(a,o,h,l==="in"||l==="not-in");return B.create(c,l,f)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class gi extends fi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new gi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:dt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)ic(o,u),o=os(o,u)}(t._query,e),new Ht(t.firestore,t.converter,os(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mi extends nc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new mi(t,e)}_apply(t){const e=function(s,i,o){if(s.startAt!==null)throw new y(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Je(i,o)}(t._query,this._field,this._direction);return new Ht(t.firestore,t.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Te(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function sc(n,t="asc"){const e=t,r=di("orderBy",n);return mi._create(r,e)}function wo(n,t,e){if(typeof(e=oe(e))=="string"){if(e==="")throw new y(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ya(t)&&e.indexOf("/")!==-1)throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(x.fromString(e));if(!E.isDocumentKey(r))throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ki(n,new E(r))}if(e instanceof it)return Ki(n,e._key);throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Er(e)}.`)}function Ao(n,t){if(!Array.isArray(n)||n.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ic(n,t){const e=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Yp{convertValue(t,e="none"){switch(Gt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return U(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ve(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new ci(U(t.latitude),U(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=$s(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(He(t));default:return null}}convertTimestamp(t){const e=bt(t);return new j(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=x.fromString(t);N(vu(r));const s=new Ye(r.get(1),r.get(3)),i=new E(r.popFirst(5));return s.isEqual(e)||Et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class oc extends ec{constructor(t,e,r,s,i,o){super(t,e,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Dn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(di("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Dn extends oc{data(t={}){return super.data(t)}}class Jp{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new be(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Dn(this._firestore,this._userDataWriter,r.key,r,new be(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new y(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Dn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new be(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Dn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new be(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Zp(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n){n=pe(n,it);const t=pe(n.firestore,Tr);return kp(ai(t),n._key).then(e=>eg(t,n,e))}class ac extends Yp{constructor(t){super(),this.firestore=t}convertBytes(t){return new ge(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new it(this.firestore,null,e)}}function uc(n){n=pe(n,Ht);const t=pe(n.firestore,Tr),e=ai(t),r=new ac(t);return Hp(n._query),xp(e,n._query).then(s=>new Jp(t,r,n,s))}function vg(n,t){const e=pe(n.firestore,Tr),r=Lp(n),s=Xp(n.converter,t);return tg(e,[$p(Yu(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,wt.exists(!1))]).then(()=>r)}function tg(n,t){return function(r,s){const i=new mt;return r.asyncQueue.enqueueAndForget(async()=>Ep(await Np(r),s,i)),i.promise}(ai(n),t)}function eg(n,t,e){const r=e.docs.get(t._key),s=new ac(n);return new oc(n,s,t._key,r,new be(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Ee=s})(Ml),xn(new Fe("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Tr(new ed(r.getProvider("auth-internal")),new id(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new y(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ye(c.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ne(ji,"4.4.2",t),ne(ji,"4.4.2","esm2017")})();var ng="firebase",rg="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ne(ng,rg,"app");const sg={apiKey:"AIzaSyAe2ouI4t23pZWQNsQbSUmNwEU9cLshiY0",authDomain:"shengji-bc61c.firebaseapp.com",projectId:"shengji-bc61c",storageBucket:"shengji-bc61c.appspot.com",messagingSenderId:"526528559667",appId:"1:526528559667:web:f22294f74c2fc56838c146",measurementId:"G-P65PP4QGVL"},ig=ko(sg),cc=Up(ig);class og{constructor(t,e,r){ct(this,"_id");ct(this,"_name");ct(this,"_games");ct(this,"_start");this._id=t,this._name=e,this._start=r,this._games=[]}get id(){return this._id}get name(){return this._name}get games(){return this._games}get start(){return this._start}addGame(t){this._games.push(t)}getScore(){if(this._games.length==0)return this._start;const t=this._games[this._games.length-1],e=t.players.indexOf(this);return t.scores[e]}getScores(){let t=[];for(let e of this._games){const r=e.players.indexOf(this);t.push(e.scores[r])}return t}getScoresWithStaged(){let t=[];for(let e of this._games){const r=e.players.indexOf(this);t.push([e.scores[r],e.staged[r]])}return t}isStaged(){if(this._games.length==0)return!1;const t=this._games[this._games.length-1],e=t.players.indexOf(this);return t.staged[e]}getPrestige(){let t=0;const e=this.start,r=this.getScores();for(let s=1;s<r.length;s++){let i=Math.abs(r[s]-r[s-1]);(r[s]==e&&r[s-1]!=r[s]||r[s]>e&&r[s-1]<e||i==9||i==10)&&t++}return t}getProgress(){const t=this.getScore();let e=this.start,r=0;for(;e!=t;)e++,r++,e>13&&(e=2);return r/12}}class lc{static async initialize(){return this.players=[],uc(rc(Ku(cc,"players"),sc("name","asc"))).then(t=>{t.forEach(e=>{const r=e.data();this.addPlayer(e.id,r.name,r.level)})})}static addPlayer(t,e,r){const s=new og(t,e,r);return this.players.includes(s)||this.players.push(s),s}static getPlayerById(t){for(let e of this.players)if(e.id===t)return e;return null}static getPlayerByName(t){for(let e of this.players)if(e.name===t)return e;return null}}ct(lc,"players",[]);class ag{constructor(t,e,r,s){ct(this,"_date");ct(this,"_players");ct(this,"_scores");ct(this,"_staged");this._date=t,this._players=e,this._scores=r,this._staged=s}get date(){return this._date}get players(){return this._players}get scores(){return this._scores}get staged(){return this._staged}getScoresWithStaged(){let t=[];for(let e=0;e<this.scores.length;e++)t.push([this.scores[e],this.staged[e]]);return t}getPlayerPreviousScoreStage(t){let r=t.games.indexOf(this)-1,s=t.games[r];if(r<0)return[t.start,!1];let i=s.players.indexOf(t);return[s.scores[i],s.staged[i]]}getSingleScoreDifference(t,e){let r=t[1]==e[1],s=t[1]==!0&&e[1]==!1,i=t[1]==!1&&e[1]==!0,o=Math.abs(e[0]-t[0]),a=o==0,u=o==1||o==11,c=o==2||o==10,l=o==3||o==9;return s||a&&r?0:i&&a||u&&r?1:u&&i||c&&r?2:c&&i||l?3:-1}getScoreDifference(){let t=this.getScoresWithStaged(),e=[];for(let s of this.players)e.push(this.getPlayerPreviousScoreStage(s));let r=[];for(let s=0;s<t.length;s++){const i=t[s],o=e[s];r.push(this.getSingleScoreDifference(o,i))}return r}}function Tg(n){return n<=10?n.toString():n<=13?{11:"J",12:"Q",13:"K"}[n]:null}function Ig(n,t){let e=JSON.stringify(n,null,"	"),r=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(r),i=`${t}.json`,o=document.createElement("a");o.href=s,o.download=i,o.click(),URL.revokeObjectURL(s),o.remove()}class ug{static async initialize(){return this.games=[],uc(rc(Ku(cc,"games"),sc("date","asc"))).then(t=>{t.forEach(e=>{this.addGame(e.data())})})}static addGame(t){for(let s=0;s<t.players.length;s++)t.players[s]=lc.getPlayerById(t.players[s].id);let e=new ag(t.date.toDate(),t.players,t.scores.map(s=>parseInt(s)),t.staged);this.games.push(e);const r=e.players;for(let s=0;s<r.length;s++)r[s].addGame(e)}}ct(ug,"games",[]);export{ug as G,lc as P,j as T,vg as a,cc as b,Ku as c,Ig as d,gg as e,Lp as f,Eg as g,fg as h,Tg as s,pg as u};
