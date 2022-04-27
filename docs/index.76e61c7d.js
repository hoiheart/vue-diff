var si=Object.defineProperty,ii=Object.defineProperties;var ai=Object.getOwnPropertyDescriptors;var Fr=Object.getOwnPropertySymbols;var li=Object.prototype.hasOwnProperty,ci=Object.prototype.propertyIsEnumerable;var Lr=(e,n,t)=>n in e?si(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,rt=(e,n)=>{for(var t in n||(n={}))li.call(n,t)&&Lr(e,t,n[t]);if(Fr)for(var t of Fr(n))ci.call(n,t)&&Lr(e,t,n[t]);return e},qr=(e,n)=>ii(e,ai(n));const ui=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}};ui();function ar(e,n){const t=Object.create(null),s=e.split(",");for(let a=0;a<s.length;a++)t[s[a]]=!0;return n?a=>!!t[a.toLowerCase()]:a=>!!t[a]}const di="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pi=ar(di);function No(e){return!!e||e===""}function En(e){if(H(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],a=de(s)?mi(s):En(s);if(a)for(const r in a)n[r]=a[r]}return n}else{if(de(e))return e;if(ce(e))return e}}const fi=/;(?![^(]*\))/g,hi=/:(.+)/;function mi(e){const n={};return e.split(fi).forEach(t=>{if(t){const s=t.split(hi);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function ze(e){let n="";if(de(e))n=e;else if(H(e))for(let t=0;t<e.length;t++){const s=ze(e[t]);s&&(n+=s+" ")}else if(ce(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function gi(e,n){if(e.length!==n.length)return!1;let t=!0;for(let s=0;t&&s<e.length;s++)t=et(e[s],n[s]);return t}function et(e,n){if(e===n)return!0;let t=Hr(e),s=Hr(n);if(t||s)return t&&s?e.getTime()===n.getTime():!1;if(t=H(e),s=H(n),t||s)return t&&s?gi(e,n):!1;if(t=ce(e),s=ce(n),t||s){if(!t||!s)return!1;const a=Object.keys(e).length,r=Object.keys(n).length;if(a!==r)return!1;for(const o in e){const i=e.hasOwnProperty(o),l=n.hasOwnProperty(o);if(i&&!l||!i&&l||!et(e[o],n[o]))return!1}}return String(e)===String(n)}function lr(e,n){return e.findIndex(t=>et(t,n))}const Fn=e=>de(e)?e:e==null?"":H(e)||ce(e)&&(e.toString===Po||!W(e.toString))?JSON.stringify(e,_o,2):String(e),_o=(e,n)=>n&&n.__v_isRef?_o(e,n.value):jn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,a])=>(t[`${s} =>`]=a,t),{})}:An(n)?{[`Set(${n.size})`]:[...n.values()]}:ce(n)&&!H(n)&&!Ro(n)?String(n):n,re={},xn=[],Oe=()=>{},yi=()=>!1,bi=/^on[^a-z]/,Et=e=>bi.test(e),cr=e=>e.startsWith("onUpdate:"),be=Object.assign,ur=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},vi=Object.prototype.hasOwnProperty,J=(e,n)=>vi.call(e,n),H=Array.isArray,jn=e=>St(e)==="[object Map]",An=e=>St(e)==="[object Set]",Hr=e=>e instanceof Date,W=e=>typeof e=="function",de=e=>typeof e=="string",dr=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",Mo=e=>ce(e)&&W(e.then)&&W(e.catch),Po=Object.prototype.toString,St=e=>Po.call(e),wi=e=>St(e).slice(8,-1),Ro=e=>St(e)==="[object Object]",pr=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ut=ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tt=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},xi=/-(\w)/g,Fe=Tt(e=>e.replace(xi,(n,t)=>t?t.toUpperCase():"")),ji=/\B([A-Z])/g,In=Tt(e=>e.replace(ji,"-$1").toLowerCase()),Ct=Tt(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rt=Tt(e=>e?`on${Ct(e)}`:""),Bn=(e,n)=>!Object.is(e,n),dt=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},ft=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},ht=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let zr;const ki=()=>zr||(zr=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ee;class Ei{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&Ee&&(this.parent=Ee,this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}run(n){if(this.active){const t=Ee;try{return Ee=this,n()}finally{Ee=t}}}on(){Ee=this}off(){Ee=this.parent}stop(n){if(this.active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Si(e,n=Ee){n&&n.active&&n.effects.push(e)}function Ti(){return Ee}function Ci(e){Ee&&Ee.cleanups.push(e)}const fr=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Fo=e=>(e.w&rn)>0,Lo=e=>(e.n&rn)>0,Ai=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=rn},Ii=e=>{const{deps:n}=e;if(n.length){let t=0;for(let s=0;s<n.length;s++){const a=n[s];Fo(a)&&!Lo(a)?a.delete(e):n[t++]=a,a.w&=~rn,a.n&=~rn}n.length=t}},Ut=new WeakMap;let Mn=0,rn=1;const Wt=30;let Qe;const un=Symbol(""),$t=Symbol("");class hr{constructor(n,t=null,s){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Si(this,s)}run(){if(!this.active)return this.fn();let n=Qe,t=nn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Qe,Qe=this,nn=!0,rn=1<<++Mn,Mn<=Wt?Ai(this):Br(this),this.fn()}finally{Mn<=Wt&&Ii(this),rn=1<<--Mn,Qe=this.parent,nn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qe===this?this.deferStop=!0:this.active&&(Br(this),this.onStop&&this.onStop(),this.active=!1)}}function Br(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let nn=!0;const qo=[];function Qn(){qo.push(nn),nn=!1}function Dn(){const e=qo.pop();nn=e===void 0?!0:e}function Te(e,n,t){if(nn&&Qe){let s=Ut.get(e);s||Ut.set(e,s=new Map);let a=s.get(t);a||s.set(t,a=fr()),Ho(a)}}function Ho(e,n){let t=!1;Mn<=Wt?Lo(e)||(e.n|=rn,t=!Fo(e)):t=!e.has(Qe),t&&(e.add(Qe),Qe.deps.push(e))}function We(e,n,t,s,a,r){const o=Ut.get(e);if(!o)return;let i=[];if(n==="clear")i=[...o.values()];else if(t==="length"&&H(e))o.forEach((l,c)=>{(c==="length"||c>=s)&&i.push(l)});else switch(t!==void 0&&i.push(o.get(t)),n){case"add":H(e)?pr(t)&&i.push(o.get("length")):(i.push(o.get(un)),jn(e)&&i.push(o.get($t)));break;case"delete":H(e)||(i.push(o.get(un)),jn(e)&&i.push(o.get($t)));break;case"set":jn(e)&&i.push(o.get(un));break}if(i.length===1)i[0]&&Xt(i[0]);else{const l=[];for(const c of i)c&&l.push(...c);Xt(fr(l))}}function Xt(e,n){for(const t of H(e)?e:[...e])(t!==Qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Qi=ar("__proto__,__v_isRef,__isVue"),zo=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(dr)),Di=mr(),Oi=mr(!1,!0),Ni=mr(!0),Ur=_i();function _i(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const s=ne(this);for(let r=0,o=this.length;r<o;r++)Te(s,"get",r+"");const a=s[n](...t);return a===-1||a===!1?s[n](...t.map(ne)):a}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){Qn();const s=ne(this)[n].apply(this,t);return Dn(),s}}),e}function mr(e=!1,n=!1){return function(s,a,r){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return n;if(a==="__v_raw"&&r===(e?n?Ki:Xo:n?$o:Wo).get(s))return s;const o=H(s);if(!e&&o&&J(Ur,a))return Reflect.get(Ur,a,r);const i=Reflect.get(s,a,r);return(dr(a)?zo.has(a):Qi(a))||(e||Te(s,"get",a),n)?i:he(i)?!o||!pr(a)?i.value:i:ce(i)?e?Vo(i):br(i):i}}const Mi=Bo(),Pi=Bo(!0);function Bo(e=!1){return function(t,s,a,r){let o=t[s];if(Un(o)&&he(o)&&!he(a))return!1;if(!e&&!Un(a)&&(Go(a)||(a=ne(a),o=ne(o)),!H(t)&&he(o)&&!he(a)))return o.value=a,!0;const i=H(t)&&pr(s)?Number(s)<t.length:J(t,s),l=Reflect.set(t,s,a,r);return t===ne(r)&&(i?Bn(a,o)&&We(t,"set",s,a):We(t,"add",s,a)),l}}function Ri(e,n){const t=J(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&t&&We(e,"delete",n,void 0),s}function Fi(e,n){const t=Reflect.has(e,n);return(!dr(n)||!zo.has(n))&&Te(e,"has",n),t}function Li(e){return Te(e,"iterate",H(e)?"length":un),Reflect.ownKeys(e)}const Uo={get:Di,set:Mi,deleteProperty:Ri,has:Fi,ownKeys:Li},qi={get:Ni,set(e,n){return!0},deleteProperty(e,n){return!0}},Hi=be({},Uo,{get:Oi,set:Pi}),gr=e=>e,At=e=>Reflect.getPrototypeOf(e);function ot(e,n,t=!1,s=!1){e=e.__v_raw;const a=ne(e),r=ne(n);n!==r&&!t&&Te(a,"get",n),!t&&Te(a,"get",r);const{has:o}=At(a),i=s?gr:t?wr:Wn;if(o.call(a,n))return i(e.get(n));if(o.call(a,r))return i(e.get(r));e!==a&&e.get(n)}function st(e,n=!1){const t=this.__v_raw,s=ne(t),a=ne(e);return e!==a&&!n&&Te(s,"has",e),!n&&Te(s,"has",a),e===a?t.has(e):t.has(e)||t.has(a)}function it(e,n=!1){return e=e.__v_raw,!n&&Te(ne(e),"iterate",un),Reflect.get(e,"size",e)}function Wr(e){e=ne(e);const n=ne(this);return At(n).has.call(n,e)||(n.add(e),We(n,"add",e,e)),this}function $r(e,n){n=ne(n);const t=ne(this),{has:s,get:a}=At(t);let r=s.call(t,e);r||(e=ne(e),r=s.call(t,e));const o=a.call(t,e);return t.set(e,n),r?Bn(n,o)&&We(t,"set",e,n):We(t,"add",e,n),this}function Xr(e){const n=ne(this),{has:t,get:s}=At(n);let a=t.call(n,e);a||(e=ne(e),a=t.call(n,e)),s&&s.call(n,e);const r=n.delete(e);return a&&We(n,"delete",e,void 0),r}function Vr(){const e=ne(this),n=e.size!==0,t=e.clear();return n&&We(e,"clear",void 0,void 0),t}function at(e,n){return function(s,a){const r=this,o=r.__v_raw,i=ne(o),l=n?gr:e?wr:Wn;return!e&&Te(i,"iterate",un),o.forEach((c,u)=>s.call(a,l(c),l(u),r))}}function lt(e,n,t){return function(...s){const a=this.__v_raw,r=ne(a),o=jn(r),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...s),u=t?gr:n?wr:Wn;return!n&&Te(r,"iterate",l?$t:un),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:i?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...n){return e==="delete"?!1:this}}function zi(){const e={get(r){return ot(this,r)},get size(){return it(this)},has:st,add:Wr,set:$r,delete:Xr,clear:Vr,forEach:at(!1,!1)},n={get(r){return ot(this,r,!1,!0)},get size(){return it(this)},has:st,add:Wr,set:$r,delete:Xr,clear:Vr,forEach:at(!1,!0)},t={get(r){return ot(this,r,!0)},get size(){return it(this,!0)},has(r){return st.call(this,r,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:at(!0,!1)},s={get(r){return ot(this,r,!0,!0)},get size(){return it(this,!0)},has(r){return st.call(this,r,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:at(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=lt(r,!1,!1),t[r]=lt(r,!0,!1),n[r]=lt(r,!1,!0),s[r]=lt(r,!0,!0)}),[e,t,n,s]}const[Bi,Ui,Wi,$i]=zi();function yr(e,n){const t=n?e?$i:Wi:e?Ui:Bi;return(s,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?s:Reflect.get(J(t,a)&&a in s?t:s,a,r)}const Xi={get:yr(!1,!1)},Vi={get:yr(!1,!0)},Gi={get:yr(!0,!1)},Wo=new WeakMap,$o=new WeakMap,Xo=new WeakMap,Ki=new WeakMap;function Ji(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zi(e){return e.__v_skip||!Object.isExtensible(e)?0:Ji(wi(e))}function br(e){return Un(e)?e:vr(e,!1,Uo,Xi,Wo)}function Yi(e){return vr(e,!1,Hi,Vi,$o)}function Vo(e){return vr(e,!0,qi,Gi,Xo)}function vr(e,n,t,s,a){if(!ce(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=a.get(e);if(r)return r;const o=Zi(e);if(o===0)return e;const i=new Proxy(e,o===2?s:t);return a.set(e,i),i}function kn(e){return Un(e)?kn(e.__v_raw):!!(e&&e.__v_isReactive)}function Un(e){return!!(e&&e.__v_isReadonly)}function Go(e){return!!(e&&e.__v_isShallow)}function Ko(e){return kn(e)||Un(e)}function ne(e){const n=e&&e.__v_raw;return n?ne(n):e}function Jo(e){return ft(e,"__v_skip",!0),e}const Wn=e=>ce(e)?br(e):e,wr=e=>ce(e)?Vo(e):e;function Zo(e){nn&&Qe&&(e=ne(e),Ho(e.dep||(e.dep=fr())))}function Yo(e,n){e=ne(e),e.dep&&Xt(e.dep)}function he(e){return!!(e&&e.__v_isRef===!0)}function we(e){return ea(e,!1)}function ea(e,n){return he(e)?e:new na(e,n)}class na{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:ne(n),this._value=t?n:Wn(n)}get value(){return Zo(this),this._value}set value(n){n=this.__v_isShallow?n:ne(n),Bn(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:Wn(n),Yo(this))}}function $n(e){return he(e)?e.value:e}const ta={get:(e,n,t)=>$n(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const a=e[n];return he(a)&&!he(t)?(a.value=t,!0):Reflect.set(e,n,t,s)}};function es(e){return kn(e)?e:new Proxy(e,ta)}class ra{constructor(n,t,s,a){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new hr(n,()=>{this._dirty||(this._dirty=!0,Yo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=s}get value(){const n=ne(this);return Zo(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function oa(e,n,t=!1){let s,a;const r=W(e);return r?(s=e,a=Oe):(s=e.get,a=e.set),new ra(s,a,r||!a,t)}function tn(e,n,t,s){let a;try{a=s?e(...s):e()}catch(r){It(r,n,t)}return a}function Ne(e,n,t,s){if(W(e)){const r=tn(e,n,t,s);return r&&Mo(r)&&r.catch(o=>{It(o,n,t)}),r}const a=[];for(let r=0;r<e.length;r++)a.push(Ne(e[r],n,t,s));return a}function It(e,n,t,s=!0){const a=n?n.vnode:null;if(n){let r=n.parent;const o=n.proxy,i=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,i)===!1)return}r=r.parent}const l=n.appContext.config.errorHandler;if(l){tn(l,null,10,[e,o,i]);return}}sa(e,t,a,s)}function sa(e,n,t,s=!0){console.error(e)}let mt=!1,Vt=!1;const Se=[];let Be=0;const Ln=[];let Pn=null,vn=0;const qn=[];let Je=null,wn=0;const ns=Promise.resolve();let xr=null,Gt=null;function gt(e){const n=xr||ns;return e?n.then(this?e.bind(this):e):n}function ia(e){let n=Be+1,t=Se.length;for(;n<t;){const s=n+t>>>1;Xn(Se[s])<e?n=s+1:t=s}return n}function ts(e){(!Se.length||!Se.includes(e,mt&&e.allowRecurse?Be+1:Be))&&e!==Gt&&(e.id==null?Se.push(e):Se.splice(ia(e.id),0,e),rs())}function rs(){!mt&&!Vt&&(Vt=!0,xr=ns.then(is))}function aa(e){const n=Se.indexOf(e);n>Be&&Se.splice(n,1)}function os(e,n,t,s){H(e)?t.push(...e):(!n||!n.includes(e,e.allowRecurse?s+1:s))&&t.push(e),rs()}function la(e){os(e,Pn,Ln,vn)}function ca(e){os(e,Je,qn,wn)}function jr(e,n=null){if(Ln.length){for(Gt=n,Pn=[...new Set(Ln)],Ln.length=0,vn=0;vn<Pn.length;vn++)Pn[vn]();Pn=null,vn=0,Gt=null,jr(e,n)}}function ss(e){if(qn.length){const n=[...new Set(qn)];if(qn.length=0,Je){Je.push(...n);return}for(Je=n,Je.sort((t,s)=>Xn(t)-Xn(s)),wn=0;wn<Je.length;wn++)Je[wn]();Je=null,wn=0}}const Xn=e=>e.id==null?1/0:e.id;function is(e){Vt=!1,mt=!0,jr(e),Se.sort((t,s)=>Xn(t)-Xn(s));const n=Oe;try{for(Be=0;Be<Se.length;Be++){const t=Se[Be];t&&t.active!==!1&&tn(t,null,14)}}finally{Be=0,Se.length=0,ss(),mt=!1,xr=null,(Se.length||Ln.length||qn.length)&&is(e)}}function ua(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||re;let a=t;const r=n.startsWith("update:"),o=r&&n.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=s[u]||re;f?a=t.map(m=>m.trim()):d&&(a=t.map(ht))}let i,l=s[i=Rt(n)]||s[i=Rt(Fe(n))];!l&&r&&(l=s[i=Rt(In(n))]),l&&Ne(l,e,6,a);const c=s[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Ne(c,e,6,a)}}function as(e,n,t=!1){const s=n.emitsCache,a=s.get(e);if(a!==void 0)return a;const r=e.emits;let o={},i=!1;if(!W(e)){const l=c=>{const u=as(c,n,!0);u&&(i=!0,be(o,u))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!i?(s.set(e,null),null):(H(r)?r.forEach(l=>o[l]=null):be(o,r),s.set(e,o),o)}function Qt(e,n){return!e||!Et(n)?!1:(n=n.slice(2).replace(/Once$/,""),J(e,n[0].toLowerCase()+n.slice(1))||J(e,In(n))||J(e,n))}let De=null,ls=null;function yt(e){const n=De;return De=e,ls=e&&e.type.__scopeId||null,n}function da(e,n=De,t){if(!n||e._n)return e;const s=(...a)=>{s._d&&oo(-1);const r=yt(n),o=e(...a);return yt(r),s._d&&oo(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ft(e){const{type:n,vnode:t,proxy:s,withProxy:a,props:r,propsOptions:[o],slots:i,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:m,ctx:y,inheritAttrs:w}=e;let j,I;const M=yt(e);try{if(t.shapeFlag&4){const R=a||s;j=Re(u.call(R,R,d,r,m,f,y)),I=l}else{const R=n;j=Re(R.length>1?R(r,{attrs:l,slots:i,emit:c}):R(r,null)),I=n.props?l:pa(l)}}catch(R){Hn.length=0,It(R,e,1),j=Ae(hn)}let P=j;if(I&&w!==!1){const R=Object.keys(I),{shapeFlag:U}=P;R.length&&U&7&&(o&&R.some(cr)&&(I=fa(I,o)),P=Vn(P,I))}return t.dirs&&(P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition&&(P.transition=t.transition),j=P,yt(M),j}const pa=e=>{let n;for(const t in e)(t==="class"||t==="style"||Et(t))&&((n||(n={}))[t]=e[t]);return n},fa=(e,n)=>{const t={};for(const s in e)(!cr(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function ha(e,n,t){const{props:s,children:a,component:r}=e,{props:o,children:i,patchFlag:l}=n,c=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return s?Gr(s,o,c):!!o;if(l&8){const u=n.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!Qt(c,f))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:s===o?!1:s?o?Gr(s,o,c):!0:!!o;return!1}function Gr(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let a=0;a<s.length;a++){const r=s[a];if(n[r]!==e[r]&&!Qt(t,r))return!0}return!1}function ma({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const ga=e=>e.__isSuspense;function ya(e,n){n&&n.pendingBranch?H(e)?n.effects.push(...e):n.effects.push(e):ca(e)}function ba(e,n){if(fe){let t=fe.provides;const s=fe.parent&&fe.parent.provides;s===t&&(t=fe.provides=Object.create(s)),t[e]=n}}function Lt(e,n,t=!1){const s=fe||De;if(s){const a=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return t&&W(n)?n.call(s.proxy):n}}const Kr={};function Ue(e,n,t){return cs(e,n,t)}function cs(e,n,{immediate:t,deep:s,flush:a,onTrack:r,onTrigger:o}=re){const i=fe;let l,c=!1,u=!1;if(he(e)?(l=()=>e.value,c=Go(e)):kn(e)?(l=()=>e,s=!0):H(e)?(u=!0,c=e.some(kn),l=()=>e.map(I=>{if(he(I))return I.value;if(kn(I))return cn(I);if(W(I))return tn(I,i,2)})):W(e)?n?l=()=>tn(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return d&&d(),Ne(e,i,3,[f])}:l=Oe,n&&s){const I=l;l=()=>cn(I())}let d,f=I=>{d=j.onStop=()=>{tn(I,i,4)}};if(Gn)return f=Oe,n?t&&Ne(n,i,3,[l(),u?[]:void 0,f]):l(),Oe;let m=u?[]:Kr;const y=()=>{if(!!j.active)if(n){const I=j.run();(s||c||(u?I.some((M,P)=>Bn(M,m[P])):Bn(I,m)))&&(d&&d(),Ne(n,i,3,[I,m===Kr?void 0:m,f]),m=I)}else j.run()};y.allowRecurse=!!n;let w;a==="sync"?w=y:a==="post"?w=()=>ve(y,i&&i.suspense):w=()=>{!i||i.isMounted?la(y):y()};const j=new hr(l,w);return n?t?y():m=j.run():a==="post"?ve(j.run.bind(j),i&&i.suspense):j.run(),()=>{j.stop(),i&&i.scope&&ur(i.scope.effects,j)}}function va(e,n,t){const s=this.proxy,a=de(e)?e.includes(".")?us(s,e):()=>s[e]:e.bind(s,s);let r;W(n)?r=n:(r=n.handler,t=n);const o=fe;Sn(this);const i=cs(a,r.bind(s),t);return o?Sn(o):pn(),i}function us(e,n){const t=n.split(".");return()=>{let s=e;for(let a=0;a<t.length&&s;a++)s=s[t[a]];return s}}function cn(e,n){if(!ce(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),he(e))cn(e.value,n);else if(H(e))for(let t=0;t<e.length;t++)cn(e[t],n);else if(An(e)||jn(e))e.forEach(t=>{cn(t,n)});else if(Ro(e))for(const t in e)cn(e[t],n);return e}function Dt(e){return W(e)?{setup:e,name:e.name}:e}const Kt=e=>!!e.type.__asyncLoader,ds=e=>e.type.__isKeepAlive;function wa(e,n){ps(e,"a",n)}function xa(e,n){ps(e,"da",n)}function ps(e,n,t=fe){const s=e.__wdc||(e.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ot(n,s,t),t){let a=t.parent;for(;a&&a.parent;)ds(a.parent.vnode)&&ja(s,n,t,a),a=a.parent}}function ja(e,n,t,s){const a=Ot(n,e,s,!0);hs(()=>{ur(s[n],a)},t)}function Ot(e,n,t=fe,s=!1){if(t){const a=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...o)=>{if(t.isUnmounted)return;Qn(),Sn(t);const i=Ne(n,t,e,o);return pn(),Dn(),i});return s?a.unshift(r):a.push(r),r}}const $e=e=>(n,t=fe)=>(!Gn||e==="sp")&&Ot(e,n,t),ka=$e("bm"),kr=$e("m"),Ea=$e("bu"),Sa=$e("u"),fs=$e("bum"),hs=$e("um"),Ta=$e("sp"),Ca=$e("rtg"),Aa=$e("rtc");function Ia(e,n=fe){Ot("ec",e,n)}let Jt=!0;function Qa(e){const n=gs(e),t=e.proxy,s=e.ctx;Jt=!1,n.beforeCreate&&Jr(n.beforeCreate,e,"bc");const{data:a,computed:r,methods:o,watch:i,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:y,activated:w,deactivated:j,beforeDestroy:I,beforeUnmount:M,destroyed:P,unmounted:R,render:U,renderTracked:$,renderTriggered:X,errorCaptured:K,serverPrefetch:z,expose:te,inheritAttrs:Z,components:Y,directives:oe,filters:ie}=n;if(c&&Da(c,s,null,e.appContext.config.unwrapInjectedRef),o)for(const C in o){const O=o[C];W(O)&&(s[C]=O.bind(t))}if(a){const C=a.call(t,t);ce(C)&&(e.data=br(C))}if(Jt=!0,r)for(const C in r){const O=r[C],q=W(O)?O.bind(t,t):W(O.get)?O.get.bind(t,t):Oe,ee=!W(O)&&W(O.set)?O.set.bind(t):Oe,se=Tn({get:q,set:ee});Object.defineProperty(s,C,{enumerable:!0,configurable:!0,get:()=>se.value,set:pe=>se.value=pe})}if(i)for(const C in i)ms(i[C],s,t,C);if(l){const C=W(l)?l.call(t):l;Reflect.ownKeys(C).forEach(O=>{ba(O,C[O])})}u&&Jr(u,e,"c");function S(C,O){H(O)?O.forEach(q=>C(q.bind(t))):O&&C(O.bind(t))}if(S(ka,d),S(kr,f),S(Ea,m),S(Sa,y),S(wa,w),S(xa,j),S(Ia,K),S(Aa,$),S(Ca,X),S(fs,M),S(hs,R),S(Ta,z),H(te))if(te.length){const C=e.exposed||(e.exposed={});te.forEach(O=>{Object.defineProperty(C,O,{get:()=>t[O],set:q=>t[O]=q})})}else e.exposed||(e.exposed={});U&&e.render===Oe&&(e.render=U),Z!=null&&(e.inheritAttrs=Z),Y&&(e.components=Y),oe&&(e.directives=oe)}function Da(e,n,t=Oe,s=!1){H(e)&&(e=Zt(e));for(const a in e){const r=e[a];let o;ce(r)?"default"in r?o=Lt(r.from||a,r.default,!0):o=Lt(r.from||a):o=Lt(r),he(o)&&s?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):n[a]=o}}function Jr(e,n,t){Ne(H(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function ms(e,n,t,s){const a=s.includes(".")?us(t,s):()=>t[s];if(de(e)){const r=n[e];W(r)&&Ue(a,r)}else if(W(e))Ue(a,e.bind(t));else if(ce(e))if(H(e))e.forEach(r=>ms(r,n,t,s));else{const r=W(e.handler)?e.handler.bind(t):n[e.handler];W(r)&&Ue(a,r,e)}}function gs(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:a,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,i=r.get(n);let l;return i?l=i:!a.length&&!t&&!s?l=n:(l={},a.length&&a.forEach(c=>bt(l,c,o,!0)),bt(l,n,o)),r.set(n,l),l}function bt(e,n,t,s=!1){const{mixins:a,extends:r}=n;r&&bt(e,r,t,!0),a&&a.forEach(o=>bt(e,o,t,!0));for(const o in n)if(!(s&&o==="expose")){const i=Oa[o]||t&&t[o];e[o]=i?i(e[o],n[o]):n[o]}return e}const Oa={data:Zr,props:an,emits:an,methods:an,computed:an,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:an,directives:an,watch:_a,provide:Zr,inject:Na};function Zr(e,n){return n?e?function(){return be(W(e)?e.call(this,this):e,W(n)?n.call(this,this):n)}:n:e}function Na(e,n){return an(Zt(e),Zt(n))}function Zt(e){if(H(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function ge(e,n){return e?[...new Set([].concat(e,n))]:n}function an(e,n){return e?be(be(Object.create(null),e),n):n}function _a(e,n){if(!e)return n;if(!n)return e;const t=be(Object.create(null),e);for(const s in n)t[s]=ge(e[s],n[s]);return t}function Ma(e,n,t,s=!1){const a={},r={};ft(r,Nt,1),e.propsDefaults=Object.create(null),ys(e,n,a,r);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);t?e.props=s?a:Yi(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function Pa(e,n,t,s){const{props:a,attrs:r,vnode:{patchFlag:o}}=e,i=ne(a),[l]=e.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Qt(e.emitsOptions,f))continue;const m=n[f];if(l)if(J(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const y=Fe(f);a[y]=Yt(l,i,y,m,e,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{ys(e,n,a,r)&&(c=!0);let u;for(const d in i)(!n||!J(n,d)&&((u=In(d))===d||!J(n,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(a[d]=Yt(l,i,d,void 0,e,!0)):delete a[d]);if(r!==i)for(const d in r)(!n||!J(n,d)&&!0)&&(delete r[d],c=!0)}c&&We(e,"set","$attrs")}function ys(e,n,t,s){const[a,r]=e.propsOptions;let o=!1,i;if(n)for(let l in n){if(ut(l))continue;const c=n[l];let u;a&&J(a,u=Fe(l))?!r||!r.includes(u)?t[u]=c:(i||(i={}))[u]=c:Qt(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ne(t),c=i||re;for(let u=0;u<r.length;u++){const d=r[u];t[d]=Yt(a,l,d,c[d],e,!J(c,d))}}return o}function Yt(e,n,t,s,a,r){const o=e[t];if(o!=null){const i=J(o,"default");if(i&&s===void 0){const l=o.default;if(o.type!==Function&&W(l)){const{propsDefaults:c}=a;t in c?s=c[t]:(Sn(a),s=c[t]=l.call(null,n),pn())}else s=l}o[0]&&(r&&!i?s=!1:o[1]&&(s===""||s===In(t))&&(s=!0))}return s}function bs(e,n,t=!1){const s=n.propsCache,a=s.get(e);if(a)return a;const r=e.props,o={},i=[];let l=!1;if(!W(e)){const u=d=>{l=!0;const[f,m]=bs(d,n,!0);be(o,f),m&&i.push(...m)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return s.set(e,xn),xn;if(H(r))for(let u=0;u<r.length;u++){const d=Fe(r[u]);Yr(d)&&(o[d]=re)}else if(r)for(const u in r){const d=Fe(u);if(Yr(d)){const f=r[u],m=o[d]=H(f)||W(f)?{type:f}:f;if(m){const y=to(Boolean,m.type),w=to(String,m.type);m[0]=y>-1,m[1]=w<0||y<w,(y>-1||J(m,"default"))&&i.push(d)}}}const c=[o,i];return s.set(e,c),c}function Yr(e){return e[0]!=="$"}function eo(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function no(e,n){return eo(e)===eo(n)}function to(e,n){return H(n)?n.findIndex(t=>no(t,e)):W(n)&&no(n,e)?0:-1}const vs=e=>e[0]==="_"||e==="$stable",Er=e=>H(e)?e.map(Re):[Re(e)],Ra=(e,n,t)=>{const s=da((...a)=>Er(n(...a)),t);return s._c=!1,s},ws=(e,n,t)=>{const s=e._ctx;for(const a in e){if(vs(a))continue;const r=e[a];if(W(r))n[a]=Ra(a,r,s);else if(r!=null){const o=Er(r);n[a]=()=>o}}},xs=(e,n)=>{const t=Er(n);e.slots.default=()=>t},Fa=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=ne(n),ft(n,"_",t)):ws(n,e.slots={})}else e.slots={},n&&xs(e,n);ft(e.slots,Nt,1)},La=(e,n,t)=>{const{vnode:s,slots:a}=e;let r=!0,o=re;if(s.shapeFlag&32){const i=n._;i?t&&i===1?r=!1:(be(a,n),!t&&i===1&&delete a._):(r=!n.$stable,ws(n,a)),o=n}else n&&(xs(e,n),o={default:1});if(r)for(const i in a)!vs(i)&&!(i in o)&&delete a[i]};function yn(e,n){const t=De;if(t===null)return e;const s=_t(t)||t.proxy,a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[o,i,l,c=re]=n[r];W(o)&&(o={mounted:o,updated:o}),o.deep&&cn(i),a.push({dir:o,instance:s,value:i,oldValue:void 0,arg:l,modifiers:c})}return e}function on(e,n,t,s){const a=e.dirs,r=n&&n.dirs;for(let o=0;o<a.length;o++){const i=a[o];r&&(i.oldValue=r[o].value);let l=i.dir[s];l&&(Qn(),Ne(l,t,8,[e.el,i,e,n]),Dn())}}function js(){return{app:null,config:{isNativeTag:yi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qa=0;function Ha(e,n){return function(s,a=null){W(s)||(s=Object.assign({},s)),a!=null&&!ce(a)&&(a=null);const r=js(),o=new Set;let i=!1;const l=r.app={_uid:qa++,_component:s,_props:a,_container:null,_context:r,_instance:null,version:ul,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(l,...u)):W(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!i){const f=Ae(s,a);return f.appContext=r,u&&n?n(f,c):e(f,c,d),i=!0,l._container=c,c.__vue_app__=l,_t(f.component)||f.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function er(e,n,t,s,a=!1){if(H(e)){e.forEach((f,m)=>er(f,n&&(H(n)?n[m]:n),t,s,a));return}if(Kt(s)&&!a)return;const r=s.shapeFlag&4?_t(s.component)||s.component.proxy:s.el,o=a?null:r,{i,r:l}=e,c=n&&n.r,u=i.refs===re?i.refs={}:i.refs,d=i.setupState;if(c!=null&&c!==l&&(de(c)?(u[c]=null,J(d,c)&&(d[c]=null)):he(c)&&(c.value=null)),W(l))tn(l,i,12,[o,u]);else{const f=de(l),m=he(l);if(f||m){const y=()=>{if(e.f){const w=f?u[l]:l.value;a?H(w)&&ur(w,r):H(w)?w.includes(r)||w.push(r):f?(u[l]=[r],J(d,l)&&(d[l]=u[l])):(l.value=[r],e.k&&(u[e.k]=l.value))}else f?(u[l]=o,J(d,l)&&(d[l]=o)):he(l)&&(l.value=o,e.k&&(u[e.k]=o))};o?(y.id=-1,ve(y,t)):y()}}}const ve=ya;function za(e){return Ba(e)}function Ba(e,n){const t=ki();t.__VUE__=!0;const{insert:s,remove:a,patchProp:r,createElement:o,createText:i,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=Oe,cloneNode:y,insertStaticContent:w}=e,j=(p,h,b,k=null,g=null,Q=null,A=!1,x=null,D=!!h.dynamicChildren)=>{if(p===h)return;p&&!_n(p,h)&&(k=gn(p),xe(p,g,Q,!0),p=null),h.patchFlag===-2&&(D=!1,h.dynamicChildren=null);const{type:E,ref:F,shapeFlag:_}=h;switch(E){case Tr:I(p,h,b,k);break;case hn:M(p,h,b,k);break;case qt:p==null&&P(h,b,k,A);break;case ae:oe(p,h,b,k,g,Q,A,x,D);break;default:_&1?$(p,h,b,k,g,Q,A,x,D):_&6?ie(p,h,b,k,g,Q,A,x,D):(_&64||_&128)&&E.process(p,h,b,k,g,Q,A,x,D,Xe)}F!=null&&g&&er(F,p&&p.ref,Q,h||p,!h)},I=(p,h,b,k)=>{if(p==null)s(h.el=i(h.children),b,k);else{const g=h.el=p.el;h.children!==p.children&&c(g,h.children)}},M=(p,h,b,k)=>{p==null?s(h.el=l(h.children||""),b,k):h.el=p.el},P=(p,h,b,k)=>{[p.el,p.anchor]=w(p.children,h,b,k,p.el,p.anchor)},R=({el:p,anchor:h},b,k)=>{let g;for(;p&&p!==h;)g=f(p),s(p,b,k),p=g;s(h,b,k)},U=({el:p,anchor:h})=>{let b;for(;p&&p!==h;)b=f(p),a(p),p=b;a(h)},$=(p,h,b,k,g,Q,A,x,D)=>{A=A||h.type==="svg",p==null?X(h,b,k,g,Q,A,x,D):te(p,h,g,Q,A,x,D)},X=(p,h,b,k,g,Q,A,x)=>{let D,E;const{type:F,props:_,shapeFlag:v,transition:T,patchFlag:N,dirs:L}=p;if(p.el&&y!==void 0&&N===-1)D=p.el=y(p.el);else{if(D=p.el=o(p.type,Q,_&&_.is,_),v&8?u(D,p.children):v&16&&z(p.children,D,null,k,g,Q&&F!=="foreignObject",A,x),L&&on(p,null,k,"created"),_){for(const V in _)V!=="value"&&!ut(V)&&r(D,V,null,_[V],Q,p.children,k,g,Ce);"value"in _&&r(D,"value",null,_.value),(E=_.onVnodeBeforeMount)&&Pe(E,k,p)}K(D,p,p.scopeId,A,k)}L&&on(p,null,k,"beforeMount");const B=(!g||g&&!g.pendingBranch)&&T&&!T.persisted;B&&T.beforeEnter(D),s(D,h,b),((E=_&&_.onVnodeMounted)||B||L)&&ve(()=>{E&&Pe(E,k,p),B&&T.enter(D),L&&on(p,null,k,"mounted")},g)},K=(p,h,b,k,g)=>{if(b&&m(p,b),k)for(let Q=0;Q<k.length;Q++)m(p,k[Q]);if(g){let Q=g.subTree;if(h===Q){const A=g.vnode;K(p,A,A.scopeId,A.slotScopeIds,g.parent)}}},z=(p,h,b,k,g,Q,A,x,D=0)=>{for(let E=D;E<p.length;E++){const F=p[E]=x?Ze(p[E]):Re(p[E]);j(null,F,h,b,k,g,Q,A,x)}},te=(p,h,b,k,g,Q,A)=>{const x=h.el=p.el;let{patchFlag:D,dynamicChildren:E,dirs:F}=h;D|=p.patchFlag&16;const _=p.props||re,v=h.props||re;let T;b&&sn(b,!1),(T=v.onVnodeBeforeUpdate)&&Pe(T,b,h,p),F&&on(h,p,b,"beforeUpdate"),b&&sn(b,!0);const N=g&&h.type!=="foreignObject";if(E?Z(p.dynamicChildren,E,x,b,k,N,Q):A||q(p,h,x,null,b,k,N,Q,!1),D>0){if(D&16)Y(x,h,_,v,b,k,g);else if(D&2&&_.class!==v.class&&r(x,"class",null,v.class,g),D&4&&r(x,"style",_.style,v.style,g),D&8){const L=h.dynamicProps;for(let B=0;B<L.length;B++){const V=L[B],je=_[V],Ge=v[V];(Ge!==je||V==="value")&&r(x,V,je,Ge,g,p.children,b,k,Ce)}}D&1&&p.children!==h.children&&u(x,h.children)}else!A&&E==null&&Y(x,h,_,v,b,k,g);((T=v.onVnodeUpdated)||F)&&ve(()=>{T&&Pe(T,b,h,p),F&&on(h,p,b,"updated")},k)},Z=(p,h,b,k,g,Q,A)=>{for(let x=0;x<h.length;x++){const D=p[x],E=h[x],F=D.el&&(D.type===ae||!_n(D,E)||D.shapeFlag&70)?d(D.el):b;j(D,E,F,null,k,g,Q,A,!0)}},Y=(p,h,b,k,g,Q,A)=>{if(b!==k){for(const x in k){if(ut(x))continue;const D=k[x],E=b[x];D!==E&&x!=="value"&&r(p,x,E,D,A,h.children,g,Q,Ce)}if(b!==re)for(const x in b)!ut(x)&&!(x in k)&&r(p,x,b[x],null,A,h.children,g,Q,Ce);"value"in k&&r(p,"value",b.value,k.value)}},oe=(p,h,b,k,g,Q,A,x,D)=>{const E=h.el=p?p.el:i(""),F=h.anchor=p?p.anchor:i("");let{patchFlag:_,dynamicChildren:v,slotScopeIds:T}=h;T&&(x=x?x.concat(T):T),p==null?(s(E,b,k),s(F,b,k),z(h.children,b,F,g,Q,A,x,D)):_>0&&_&64&&v&&p.dynamicChildren?(Z(p.dynamicChildren,v,b,g,Q,A,x),(h.key!=null||g&&h===g.subTree)&&ks(p,h,!0)):q(p,h,b,F,g,Q,A,x,D)},ie=(p,h,b,k,g,Q,A,x,D)=>{h.slotScopeIds=x,p==null?h.shapeFlag&512?g.ctx.activate(h,b,k,A,D):Ie(h,b,k,g,Q,A,D):S(p,h,D)},Ie=(p,h,b,k,g,Q,A)=>{const x=p.component=rl(p,k,g);if(ds(p)&&(x.ctx.renderer=Xe),ol(x),x.asyncDep){if(g&&g.registerDep(x,C),!p.el){const D=x.subTree=Ae(hn);M(null,D,h,b)}return}C(x,p,h,b,g,Q,A)},S=(p,h,b)=>{const k=h.component=p.component;if(ha(p,h,b))if(k.asyncDep&&!k.asyncResolved){O(k,h,b);return}else k.next=h,aa(k.update),k.update();else h.component=p.component,h.el=p.el,k.vnode=h},C=(p,h,b,k,g,Q,A)=>{const x=()=>{if(p.isMounted){let{next:F,bu:_,u:v,parent:T,vnode:N}=p,L=F,B;sn(p,!1),F?(F.el=N.el,O(p,F,A)):F=N,_&&dt(_),(B=F.props&&F.props.onVnodeBeforeUpdate)&&Pe(B,T,F,N),sn(p,!0);const V=Ft(p),je=p.subTree;p.subTree=V,j(je,V,d(je.el),gn(je),p,g,Q),F.el=V.el,L===null&&ma(p,V.el),v&&ve(v,g),(B=F.props&&F.props.onVnodeUpdated)&&ve(()=>Pe(B,T,F,N),g)}else{let F;const{el:_,props:v}=h,{bm:T,m:N,parent:L}=p,B=Kt(h);if(sn(p,!1),T&&dt(T),!B&&(F=v&&v.onVnodeBeforeMount)&&Pe(F,L,h),sn(p,!0),_&&Ve){const V=()=>{p.subTree=Ft(p),Ve(_,p.subTree,p,g,null)};B?h.type.__asyncLoader().then(()=>!p.isUnmounted&&V()):V()}else{const V=p.subTree=Ft(p);j(null,V,b,k,p,g,Q),h.el=V.el}if(N&&ve(N,g),!B&&(F=v&&v.onVnodeMounted)){const V=h;ve(()=>Pe(F,L,V),g)}h.shapeFlag&256&&p.a&&ve(p.a,g),p.isMounted=!0,h=b=k=null}},D=p.effect=new hr(x,()=>ts(p.update),p.scope),E=p.update=D.run.bind(D);E.id=p.uid,sn(p,!0),E()},O=(p,h,b)=>{h.component=p;const k=p.vnode.props;p.vnode=h,p.next=null,Pa(p,h.props,k,b),La(p,h.children,b),Qn(),jr(void 0,p.update),Dn()},q=(p,h,b,k,g,Q,A,x,D=!1)=>{const E=p&&p.children,F=p?p.shapeFlag:0,_=h.children,{patchFlag:v,shapeFlag:T}=h;if(v>0){if(v&128){se(E,_,b,k,g,Q,A,x,D);return}else if(v&256){ee(E,_,b,k,g,Q,A,x,D);return}}T&8?(F&16&&Ce(E,g,Q),_!==E&&u(b,_)):F&16?T&16?se(E,_,b,k,g,Q,A,x,D):Ce(E,g,Q,!0):(F&8&&u(b,""),T&16&&z(_,b,k,g,Q,A,x,D))},ee=(p,h,b,k,g,Q,A,x,D)=>{p=p||xn,h=h||xn;const E=p.length,F=h.length,_=Math.min(E,F);let v;for(v=0;v<_;v++){const T=h[v]=D?Ze(h[v]):Re(h[v]);j(p[v],T,b,null,g,Q,A,x,D)}E>F?Ce(p,g,Q,!0,!1,_):z(h,b,k,g,Q,A,x,D,_)},se=(p,h,b,k,g,Q,A,x,D)=>{let E=0;const F=h.length;let _=p.length-1,v=F-1;for(;E<=_&&E<=v;){const T=p[E],N=h[E]=D?Ze(h[E]):Re(h[E]);if(_n(T,N))j(T,N,b,null,g,Q,A,x,D);else break;E++}for(;E<=_&&E<=v;){const T=p[_],N=h[v]=D?Ze(h[v]):Re(h[v]);if(_n(T,N))j(T,N,b,null,g,Q,A,x,D);else break;_--,v--}if(E>_){if(E<=v){const T=v+1,N=T<F?h[T].el:k;for(;E<=v;)j(null,h[E]=D?Ze(h[E]):Re(h[E]),b,N,g,Q,A,x,D),E++}}else if(E>v)for(;E<=_;)xe(p[E],g,Q,!0),E++;else{const T=E,N=E,L=new Map;for(E=N;E<=v;E++){const ke=h[E]=D?Ze(h[E]):Re(h[E]);ke.key!=null&&L.set(ke.key,E)}let B,V=0;const je=v-N+1;let Ge=!1,Mr=0;const Nn=new Array(je);for(E=0;E<je;E++)Nn[E]=0;for(E=T;E<=_;E++){const ke=p[E];if(V>=je){xe(ke,g,Q,!0);continue}let Me;if(ke.key!=null)Me=L.get(ke.key);else for(B=N;B<=v;B++)if(Nn[B-N]===0&&_n(ke,h[B])){Me=B;break}Me===void 0?xe(ke,g,Q,!0):(Nn[Me-N]=E+1,Me>=Mr?Mr=Me:Ge=!0,j(ke,h[Me],b,null,g,Q,A,x,D),V++)}const Pr=Ge?Ua(Nn):xn;for(B=Pr.length-1,E=je-1;E>=0;E--){const ke=N+E,Me=h[ke],Rr=ke+1<F?h[ke+1].el:k;Nn[E]===0?j(null,Me,b,Rr,g,Q,A,x,D):Ge&&(B<0||E!==Pr[B]?pe(Me,b,Rr,2):B--)}}},pe=(p,h,b,k,g=null)=>{const{el:Q,type:A,transition:x,children:D,shapeFlag:E}=p;if(E&6){pe(p.component.subTree,h,b,k);return}if(E&128){p.suspense.move(h,b,k);return}if(E&64){A.move(p,h,b,Xe);return}if(A===ae){s(Q,h,b);for(let _=0;_<D.length;_++)pe(D[_],h,b,k);s(p.anchor,h,b);return}if(A===qt){R(p,h,b);return}if(k!==2&&E&1&&x)if(k===0)x.beforeEnter(Q),s(Q,h,b),ve(()=>x.enter(Q),g);else{const{leave:_,delayLeave:v,afterLeave:T}=x,N=()=>s(Q,h,b),L=()=>{_(Q,()=>{N(),T&&T()})};v?v(Q,N,L):L()}else s(Q,h,b)},xe=(p,h,b,k=!1,g=!1)=>{const{type:Q,props:A,ref:x,children:D,dynamicChildren:E,shapeFlag:F,patchFlag:_,dirs:v}=p;if(x!=null&&er(x,null,b,p,!0),F&256){h.ctx.deactivate(p);return}const T=F&1&&v,N=!Kt(p);let L;if(N&&(L=A&&A.onVnodeBeforeUnmount)&&Pe(L,h,p),F&6)nt(p.component,b,k);else{if(F&128){p.suspense.unmount(b,k);return}T&&on(p,null,h,"beforeUnmount"),F&64?p.type.remove(p,h,b,g,Xe,k):E&&(Q!==ae||_>0&&_&64)?Ce(E,h,b,!1,!0):(Q===ae&&_&384||!g&&F&16)&&Ce(D,h,b),k&&me(p)}(N&&(L=A&&A.onVnodeUnmounted)||T)&&ve(()=>{L&&Pe(L,h,p),T&&on(p,null,h,"unmounted")},b)},me=p=>{const{type:h,el:b,anchor:k,transition:g}=p;if(h===ae){_e(b,k);return}if(h===qt){U(p);return}const Q=()=>{a(b),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(p.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:x}=g,D=()=>A(b,Q);x?x(p.el,Q,D):D()}else Q()},_e=(p,h)=>{let b;for(;p!==h;)b=f(p),a(p),p=b;a(h)},nt=(p,h,b)=>{const{bum:k,scope:g,update:Q,subTree:A,um:x}=p;k&&dt(k),g.stop(),Q&&(Q.active=!1,xe(A,p,h,b)),x&&ve(x,h),ve(()=>{p.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ce=(p,h,b,k=!1,g=!1,Q=0)=>{for(let A=Q;A<p.length;A++)xe(p[A],h,b,k,g)},gn=p=>p.shapeFlag&6?gn(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),tt=(p,h,b)=>{p==null?h._vnode&&xe(h._vnode,null,null,!0):j(h._vnode||null,p,h,null,null,null,b),ss(),h._vnode=p},Xe={p:j,um:xe,m:pe,r:me,mt:Ie,mc:z,pc:q,pbc:Z,n:gn,o:e};let On,Ve;return n&&([On,Ve]=n(Xe)),{render:tt,hydrate:On,createApp:Ha(tt,On)}}function sn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function ks(e,n,t=!1){const s=e.children,a=n.children;if(H(s)&&H(a))for(let r=0;r<s.length;r++){const o=s[r];let i=a[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[r]=Ze(a[r]),i.el=o.el),t||ks(o,i))}}function Ua(e){const n=e.slice(),t=[0];let s,a,r,o,i;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(a=t[t.length-1],e[a]<c){n[s]=a,t.push(s);continue}for(r=0,o=t.length-1;r<o;)i=r+o>>1,e[t[i]]<c?r=i+1:o=i;c<e[t[r]]&&(r>0&&(n[s]=t[r-1]),t[r]=s)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=n[o];return t}const Wa=e=>e.__isTeleport,Es="components";function Sr(e,n){return Xa(Es,e,!0,n)||e}const $a=Symbol();function Xa(e,n,t=!0,s=!1){const a=De||fe;if(a){const r=a.type;if(e===Es){const i=ll(r);if(i&&(i===n||i===Fe(n)||i===Ct(Fe(n))))return r}const o=ro(a[e]||r[e],n)||ro(a.appContext[e],n);return!o&&s?r:o}}function ro(e,n){return e&&(e[n]||e[Fe(n)]||e[Ct(Fe(n))])}const ae=Symbol(void 0),Tr=Symbol(void 0),hn=Symbol(void 0),qt=Symbol(void 0),Hn=[];let dn=null;function le(e=!1){Hn.push(dn=e?null:[])}function Va(){Hn.pop(),dn=Hn[Hn.length-1]||null}let vt=1;function oo(e){vt+=e}function Ss(e){return e.dynamicChildren=vt>0?dn||xn:null,Va(),vt>0&&dn&&dn.push(e),e}function ue(e,n,t,s,a,r){return Ss(G(e,n,t,s,a,r,!0))}function Ts(e,n,t,s,a){return Ss(Ae(e,n,t,s,a,!0))}function Ga(e){return e?e.__v_isVNode===!0:!1}function _n(e,n){return e.type===n.type&&e.key===n.key}const Nt="__vInternal",Cs=({key:e})=>e!=null?e:null,pt=({ref:e,ref_key:n,ref_for:t})=>e!=null?de(e)||he(e)||W(e)?{i:De,r:e,k:n,f:!!t}:e:null;function G(e,n=null,t=null,s=0,a=null,r=e===ae?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Cs(n),ref:n&&pt(n),scopeId:ls,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:a,dynamicChildren:null,appContext:null};return i?(Cr(l,t),r&128&&e.normalize(l)):t&&(l.shapeFlag|=de(t)?8:16),vt>0&&!o&&dn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&dn.push(l),l}const Ae=Ka;function Ka(e,n=null,t=null,s=0,a=null,r=!1){if((!e||e===$a)&&(e=hn),Ga(e)){const i=Vn(e,n,!0);return t&&Cr(i,t),i}if(cl(e)&&(e=e.__vccOpts),n){n=Ja(n);let{class:i,style:l}=n;i&&!de(i)&&(n.class=ze(i)),ce(l)&&(Ko(l)&&!H(l)&&(l=be({},l)),n.style=En(l))}const o=de(e)?1:ga(e)?128:Wa(e)?64:ce(e)?4:W(e)?2:0;return G(e,n,t,s,a,o,r,!0)}function Ja(e){return e?Ko(e)||Nt in e?be({},e):e:null}function Vn(e,n,t=!1){const{props:s,ref:a,patchFlag:r,children:o}=e,i=n?Ya(s||{},n):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Cs(i),ref:n&&n.ref?t&&a?H(a)?a.concat(pt(n)):[a,pt(n)]:pt(n):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==ae?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vn(e.ssContent),ssFallback:e.ssFallback&&Vn(e.ssFallback),el:e.el,anchor:e.anchor}}function Za(e=" ",n=0){return Ae(Tr,null,e,n)}function so(e="",n=!1){return n?(le(),Ts(hn,null,e)):Ae(hn,null,e)}function Re(e){return e==null||typeof e=="boolean"?Ae(hn):H(e)?Ae(ae,null,e.slice()):typeof e=="object"?Ze(e):Ae(Tr,null,String(e))}function Ze(e){return e.el===null||e.memo?e:Vn(e)}function Cr(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(H(n))t=16;else if(typeof n=="object")if(s&65){const a=n.default;a&&(a._c&&(a._d=!1),Cr(e,a()),a._c&&(a._d=!0));return}else{t=32;const a=n._;!a&&!(Nt in n)?n._ctx=De:a===3&&De&&(De.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else W(n)?(n={default:n,_ctx:De},t=32):(n=String(n),s&64?(t=16,n=[Za(n)]):t=8);e.children=n,e.shapeFlag|=t}function Ya(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const a in s)if(a==="class")n.class!==s.class&&(n.class=ze([n.class,s.class]));else if(a==="style")n.style=En([n.style,s.style]);else if(Et(a)){const r=n[a],o=s[a];o&&r!==o&&!(H(r)&&r.includes(o))&&(n[a]=r?[].concat(r,o):o)}else a!==""&&(n[a]=s[a])}return n}function Pe(e,n,t,s=null){Ne(e,n,7,[t,s])}function zn(e,n,t,s){let a;const r=t&&t[s];if(H(e)||de(e)){a=new Array(e.length);for(let o=0,i=e.length;o<i;o++)a[o]=n(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=n(o+1,o,void 0,r&&r[o])}else if(ce(e))if(e[Symbol.iterator])a=Array.from(e,(o,i)=>n(o,i,void 0,r&&r[i]));else{const o=Object.keys(e);a=new Array(o.length);for(let i=0,l=o.length;i<l;i++){const c=o[i];a[i]=n(e[c],c,i,r&&r[i])}}else a=[];return t&&(t[s]=a),a}const nr=e=>e?As(e)?_t(e)||e.proxy:nr(e.parent):null,wt=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>nr(e.parent),$root:e=>nr(e.root),$emit:e=>e.emit,$options:e=>gs(e),$forceUpdate:e=>()=>ts(e.update),$nextTick:e=>gt.bind(e.proxy),$watch:e=>va.bind(e)}),el={get({_:e},n){const{ctx:t,setupState:s,data:a,props:r,accessCache:o,type:i,appContext:l}=e;let c;if(n[0]!=="$"){const m=o[n];if(m!==void 0)switch(m){case 1:return s[n];case 2:return a[n];case 4:return t[n];case 3:return r[n]}else{if(s!==re&&J(s,n))return o[n]=1,s[n];if(a!==re&&J(a,n))return o[n]=2,a[n];if((c=e.propsOptions[0])&&J(c,n))return o[n]=3,r[n];if(t!==re&&J(t,n))return o[n]=4,t[n];Jt&&(o[n]=0)}}const u=wt[n];let d,f;if(u)return n==="$attrs"&&Te(e,"get",n),u(e);if((d=i.__cssModules)&&(d=d[n]))return d;if(t!==re&&J(t,n))return o[n]=4,t[n];if(f=l.config.globalProperties,J(f,n))return f[n]},set({_:e},n,t){const{data:s,setupState:a,ctx:r}=e;return a!==re&&J(a,n)?(a[n]=t,!0):s!==re&&J(s,n)?(s[n]=t,!0):J(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:a,propsOptions:r}},o){let i;return!!t[o]||e!==re&&J(e,o)||n!==re&&J(n,o)||(i=r[0])&&J(i,o)||J(s,o)||J(wt,o)||J(a.config.globalProperties,o)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:J(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}},nl=js();let tl=0;function rl(e,n,t){const s=e.type,a=(n?n.appContext:e.appContext)||nl,r={uid:tl++,vnode:e,type:s,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ei(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bs(s,a),emitsOptions:as(s,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=ua.bind(null,r),e.ce&&e.ce(r),r}let fe=null;const Sn=e=>{fe=e,e.scope.on()},pn=()=>{fe&&fe.scope.off(),fe=null};function As(e){return e.vnode.shapeFlag&4}let Gn=!1;function ol(e,n=!1){Gn=n;const{props:t,children:s}=e.vnode,a=As(e);Ma(e,t,a,n),Fa(e,s);const r=a?sl(e,n):void 0;return Gn=!1,r}function sl(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=Jo(new Proxy(e.ctx,el));const{setup:s}=t;if(s){const a=e.setupContext=s.length>1?al(e):null;Sn(e),Qn();const r=tn(s,e,0,[e.props,a]);if(Dn(),pn(),Mo(r)){if(r.then(pn,pn),n)return r.then(o=>{io(e,o,n)}).catch(o=>{It(o,e,0)});e.asyncDep=r}else io(e,r,n)}else Is(e,n)}function io(e,n,t){W(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ce(n)&&(e.setupState=es(n)),Is(e,t)}let ao;function Is(e,n,t){const s=e.type;if(!e.render){if(!n&&ao&&!s.render){const a=s.template;if(a){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:i,compilerOptions:l}=s,c=be(be({isCustomElement:r,delimiters:i},o),l);s.render=ao(a,c)}}e.render=s.render||Oe}Sn(e),Qn(),Qa(e),Dn(),pn()}function il(e){return new Proxy(e.attrs,{get(n,t){return Te(e,"get","$attrs"),n[t]}})}function al(e){const n=s=>{e.exposed=s||{}};let t;return{get attrs(){return t||(t=il(e))},slots:e.slots,emit:e.emit,expose:n}}function _t(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(es(Jo(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in wt)return wt[t](e)}}))}function ll(e){return W(e)&&e.displayName||e.name}function cl(e){return W(e)&&"__vccOpts"in e}const Tn=(e,n)=>oa(e,n,Gn),ul="3.2.33",dl="http://www.w3.org/2000/svg",ln=typeof document!="undefined"?document:null,lo=ln&&ln.createElement("template"),pl={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const a=n?ln.createElementNS(dl,e):ln.createElement(e,t?{is:t}:void 0);return e==="select"&&s&&s.multiple!=null&&a.setAttribute("multiple",s.multiple),a},createText:e=>ln.createTextNode(e),createComment:e=>ln.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ln.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},cloneNode(e){const n=e.cloneNode(!0);return"_value"in e&&(n._value=e._value),n},insertStaticContent(e,n,t,s,a,r){const o=t?t.previousSibling:n.lastChild;if(a&&(a===r||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),t),!(a===r||!(a=a.nextSibling)););else{lo.innerHTML=s?`<svg>${e}</svg>`:e;const i=lo.content;if(s){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function fl(e,n,t){const s=e._vtc;s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function hl(e,n,t){const s=e.style,a=de(t);if(t&&!a){for(const r in t)tr(s,r,t[r]);if(n&&!de(n))for(const r in n)t[r]==null&&tr(s,r,"")}else{const r=s.display;a?n!==t&&(s.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const co=/\s*!important$/;function tr(e,n,t){if(H(t))t.forEach(s=>tr(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=ml(e,n);co.test(t)?e.setProperty(In(s),t.replace(co,""),"important"):e[s]=t}}const uo=["Webkit","Moz","ms"],Ht={};function ml(e,n){const t=Ht[n];if(t)return t;let s=Fe(n);if(s!=="filter"&&s in e)return Ht[n]=s;s=Ct(s);for(let a=0;a<uo.length;a++){const r=uo[a]+s;if(r in e)return Ht[n]=r}return n}const po="http://www.w3.org/1999/xlink";function gl(e,n,t,s,a){if(s&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(po,n.slice(6,n.length)):e.setAttributeNS(po,n,t);else{const r=pi(n);t==null||r&&!No(t)?e.removeAttribute(n):e.setAttribute(n,r?"":t)}}function yl(e,n,t,s,a,r,o){if(n==="innerHTML"||n==="textContent"){s&&o(s,a,r),e[n]=t==null?"":t;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t==null?"":t;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let i=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=No(t):t==null&&l==="string"?(t="",i=!0):l==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(n)}const[Qs,bl]=(()=>{let e=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(t&&Number(t[1])<=53)}return[e,n]})();let rr=0;const vl=Promise.resolve(),wl=()=>{rr=0},xl=()=>rr||(vl.then(wl),rr=Qs());function Ye(e,n,t,s){e.addEventListener(n,t,s)}function jl(e,n,t,s){e.removeEventListener(n,t,s)}function kl(e,n,t,s,a=null){const r=e._vei||(e._vei={}),o=r[n];if(s&&o)o.value=s;else{const[i,l]=El(n);if(s){const c=r[n]=Sl(s,a);Ye(e,i,c,l)}else o&&(jl(e,i,o,l),r[n]=void 0)}}const fo=/(?:Once|Passive|Capture)$/;function El(e){let n;if(fo.test(e)){n={};let t;for(;t=e.match(fo);)e=e.slice(0,e.length-t[0].length),n[t[0].toLowerCase()]=!0}return[In(e.slice(2)),n]}function Sl(e,n){const t=s=>{const a=s.timeStamp||Qs();(bl||a>=t.attached-1)&&Ne(Tl(s,t.value),n,5,[s])};return t.value=e,t.attached=xl(),t}function Tl(e,n){if(H(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>a=>!a._stopped&&s&&s(a))}else return n}const ho=/^on[a-z]/,Cl=(e,n,t,s,a=!1,r,o,i,l)=>{n==="class"?fl(e,s,a):n==="style"?hl(e,t,s):Et(n)?cr(n)||kl(e,n,t,s,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Al(e,n,s,a))?yl(e,n,s,r,o,i,l):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),gl(e,n,s,a))};function Al(e,n,t,s){return s?!!(n==="innerHTML"||n==="textContent"||n in e&&ho.test(n)&&W(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||ho.test(n)&&de(t)?!1:n in e}const Cn=e=>{const n=e.props["onUpdate:modelValue"];return H(n)?t=>dt(n,t):n};function Il(e){e.target.composing=!0}function mo(e){const n=e.target;n.composing&&(n.composing=!1,Ql(n,"input"))}function Ql(e,n){const t=document.createEvent("HTMLEvents");t.initEvent(n,!0,!0),e.dispatchEvent(t)}const go={created(e,{modifiers:{lazy:n,trim:t,number:s}},a){e._assign=Cn(a);const r=s||a.props&&a.props.type==="number";Ye(e,n?"change":"input",o=>{if(o.target.composing)return;let i=e.value;t?i=i.trim():r&&(i=ht(i)),e._assign(i)}),t&&Ye(e,"change",()=>{e.value=e.value.trim()}),n||(Ye(e,"compositionstart",Il),Ye(e,"compositionend",mo),Ye(e,"change",mo))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:s,number:a}},r){if(e._assign=Cn(r),e.composing||document.activeElement===e&&(t||s&&e.value.trim()===n||(a||e.type==="number")&&ht(e.value)===n))return;const o=n==null?"":n;e.value!==o&&(e.value=o)}},Dl={deep:!0,created(e,n,t){e._assign=Cn(t),Ye(e,"change",()=>{const s=e._modelValue,a=Kn(e),r=e.checked,o=e._assign;if(H(s)){const i=lr(s,a),l=i!==-1;if(r&&!l)o(s.concat(a));else if(!r&&l){const c=[...s];c.splice(i,1),o(c)}}else if(An(s)){const i=new Set(s);r?i.add(a):i.delete(a),o(i)}else o(Ds(e,r))})},mounted:yo,beforeUpdate(e,n,t){e._assign=Cn(t),yo(e,n,t)}};function yo(e,{value:n,oldValue:t},s){e._modelValue=n,H(n)?e.checked=lr(n,s.props.value)>-1:An(n)?e.checked=n.has(s.props.value):n!==t&&(e.checked=et(n,Ds(e,!0)))}const zt={deep:!0,created(e,{value:n,modifiers:{number:t}},s){const a=An(n);Ye(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>t?ht(Kn(o)):Kn(o));e._assign(e.multiple?a?new Set(r):r:r[0])}),e._assign=Cn(s)},mounted(e,{value:n}){bo(e,n)},beforeUpdate(e,n,t){e._assign=Cn(t)},updated(e,{value:n}){bo(e,n)}};function bo(e,n){const t=e.multiple;if(!(t&&!H(n)&&!An(n))){for(let s=0,a=e.options.length;s<a;s++){const r=e.options[s],o=Kn(r);if(t)H(n)?r.selected=lr(n,o)>-1:r.selected=n.has(o);else if(et(Kn(r),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Kn(e){return"_value"in e?e._value:e.value}function Ds(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const Ol=be({patchProp:Cl},pl);let vo;function Nl(){return vo||(vo=za(Ol))}const _l=(...e)=>{const n=Nl().createApp(...e),{mount:t}=n;return n.mount=s=>{const a=Ml(s);if(!a)return;const r=n._component;!W(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.innerHTML="";const o=t(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},n};function Ml(e){return de(e)?document.querySelector(e):e}var Pl=`/*!
 * jQuery JavaScript Library v3.5.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-04-10T15:07Z
 */
(function (global, factory) {
  'use strict'

  if (typeof module === 'object' && typeof module.exports === 'object') {
    // For CommonJS and CommonJS-like environments where a proper \`window\`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a \`window\` with a \`document\`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real \`window\`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document
      ? factory(global, true)
      : function (w) {
        if (!w.document) {
          throw new Error('jQuery requires a window with a document')
        }
        return factory(w)
      }
  } else {
    factory(global)
  }

// Pass this if window is not defined yet
})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  'use strict'

  const arr = []

  const getProto = Object.getPrototypeOf

  const slice = arr.slice

  const flat = arr.flat ? function (array) {
    return arr.flat.call(array)
  } : function (array) {
    return arr.concat.apply([], array)
  }

  const push = arr.push

  const indexOf = arr.indexOf

  const class2type = {}

  const toString = class2type.toString

  const hasOwn = class2type.hasOwnProperty

  const fnToString = hasOwn.toString

  const ObjectFunctionString = fnToString.call(Object)

  const support = {}

  const isFunction = function isFunction (obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., \`typeof document.createElement( "object" ) === "function"\`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === 'function' && typeof obj.nodeType !== 'number'
  }

  const isWindow = function isWindow (obj) {
    return obj != null && obj === obj.window
  }

  const document = window.document

  const preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  }

  function DOMEval (code, node, doc) {
    doc = doc || document

    let i; let val
    const script = doc.createElement('script')

    script.text = code
    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using \`getAttribute\` is not enough as
        // the \`nonce\` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The \`node.getAttribute\` check was added for the sake of
        // \`jQuery.globalEval\` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i)
        if (val) {
          script.setAttribute(i, val)
        }
      }
    }
    doc.head.appendChild(script).parentNode.removeChild(script)
  }

  function toType (obj) {
    if (obj == null) {
      return obj + ''
    }

    // Support: Android <=2.3 only (functionish RegExp)
    return typeof obj === 'object' || typeof obj === 'function'
      ? class2type[toString.call(obj)] || 'object'
      : typeof obj
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module

  const
    version = '3.5.0'

  // Define a local copy of jQuery
  var jQuery = function (selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context)
  }

  jQuery.fn = jQuery.prototype = {

    // The current version of jQuery being used
    jquery: version,

    constructor: jQuery,

    // The default length of a jQuery object is 0
    length: 0,

    toArray: function () {
      return slice.call(this)
    },

    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function (num) {
      // Return all the elements in a clean array
      if (num == null) {
        return slice.call(this)
      }

      // Return just the one element from the set
      return num < 0 ? this[num + this.length] : this[num]
    },

    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function (elems) {
      // Build a new jQuery matched element set
      const ret = jQuery.merge(this.constructor(), elems)

      // Add the old object onto the stack (as a reference)
      ret.prevObject = this

      // Return the newly-formed element set
      return ret
    },

    // Execute a callback for every element in the matched set.
    each: function (callback) {
      return jQuery.each(this, callback)
    },

    map: function (callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem)
      }))
    },

    slice: function () {
      return this.pushStack(slice.apply(this, arguments))
    },

    first: function () {
      return this.eq(0)
    },

    last: function () {
      return this.eq(-1)
    },

    even: function () {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return (i + 1) % 2
      }))
    },

    odd: function () {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return i % 2
      }))
    },

    eq: function (i) {
      const len = this.length
      const j = +i + (i < 0 ? len : 0)
      return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
    },

    end: function () {
      return this.prevObject || this.constructor()
    },

    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  }

  jQuery.extend = jQuery.fn.extend = function () {
    let options; let name; let src; let copy; let copyIsArray; let clone
    let target = arguments[0] || {}
    let i = 1
    const length = arguments.length
    let deep = false

    // Handle a deep copy situation
    if (typeof target === 'boolean') {
      deep = target

      // Skip the boolean and the target
      target = arguments[i] || {}
      i++
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== 'object' && !isFunction(target)) {
      target = {}
    }

    // Extend jQuery itself if only one argument is passed
    if (i === length) {
      target = this
      i--
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]

          // Prevent Object.prototype pollution
          // Prevent never-ending loop
          if (name === '__proto__' || target === copy) {
            continue
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (jQuery.isPlainObject(copy) ||
					(copyIsArray = Array.isArray(copy)))) {
            src = target[name]

            // Ensure proper type for the source value
            if (copyIsArray && !Array.isArray(src)) {
              clone = []
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {}
            } else {
              clone = src
            }
            copyIsArray = false

            // Never move original objects, clone them
            target[name] = jQuery.extend(deep, clone, copy)

            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy
          }
        }
      }
    }

    // Return the modified object
    return target
  }

  jQuery.extend({

    // Unique for each copy of jQuery on the page
    expando: 'jQuery' + (version + Math.random()).replace(/\\D/g, ''),

    // Assume jQuery is ready without the ready module
    isReady: true,

    error: function (msg) {
      throw new Error(msg)
    },

    noop: function () {},

    isPlainObject: function (obj) {
      let proto, Ctor

      // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects
      if (!obj || toString.call(obj) !== '[object Object]') {
        return false
      }

      proto = getProto(obj)

      // Objects with no prototype (e.g., \`Object.create( null )\`) are plain
      if (!proto) {
        return true
      }

      // Objects with prototype are plain iff they were constructed by a global Object function
      Ctor = hasOwn.call(proto, 'constructor') && proto.constructor
      return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString
    },

    isEmptyObject: function (obj) {
      let name

      for (name in obj) {
        return false
      }
      return true
    },

    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function (code, options, doc) {
      DOMEval(code, { nonce: options && options.nonce }, doc)
    },

    each: function (obj, callback) {
      let length; let i = 0

      if (isArrayLike(obj)) {
        length = obj.length
        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break
          }
        }
      }

      return obj
    },

    // results is for internal usage only
    makeArray: function (arr, results) {
      const ret = results || []

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret,
            typeof arr === 'string'
              ? [arr] : arr
          )
        } else {
          push.call(ret, arr)
        }
      }

      return ret
    },

    inArray: function (elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i)
    },

    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function (first, second) {
      const len = +second.length
      let j = 0
      let i = first.length

      for (; j < len; j++) {
        first[i++] = second[j]
      }

      first.length = i

      return first
    },

    grep: function (elems, callback, invert) {
      let callbackInverse
      const matches = []
      let i = 0
      const length = elems.length
      const callbackExpect = !invert

      // Go through the array, only saving the items
      // that pass the validator function
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i)
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i])
        }
      }

      return matches
    },

    // arg is for internal usage only
    map: function (elems, callback, arg) {
      let length; let value
      let i = 0
      const ret = []

      // Go through the array, translating each of the items to their new values
      if (isArrayLike(elems)) {
        length = elems.length
        for (; i < length; i++) {
          value = callback(elems[i], i, arg)

          if (value != null) {
            ret.push(value)
          }
        }

        // Go through every key on the object,
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg)

          if (value != null) {
            ret.push(value)
          }
        }
      }

      // Flatten any nested arrays
      return flat(ret)
    },

    // A global GUID counter for objects
    guid: 1,

    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  })

  if (typeof Symbol === 'function') {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]
  }

  // Populate the class2type map
  jQuery.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
    function (_i, name) {
      class2type['[object ' + name + ']'] = name.toLowerCase()
    })

  function isArrayLike (obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // \`in\` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    const length = !!obj && 'length' in obj && obj.length
    const type = toType(obj)

    if (isFunction(obj) || isWindow(obj)) {
      return false
    }

    return type === 'array' || length === 0 ||
		typeof length === 'number' && length > 0 && (length - 1) in obj
  }
  const Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
(function (window) {
  let i
  let support
  let Expr
  let getText
  let isXML
  let tokenize
  let compile
  let select
  let outermostContext
  let sortInput
  let hasDuplicate

  // Local document vars
  let setDocument
  let document
  let docElem
  let documentIsHTML
  let rbuggyQSA
  let rbuggyMatches
  let matches
  let contains

  // Instance-specific data
  const expando = 'sizzle' + 1 * new Date()
  const preferredDoc = window.document
  let dirruns = 0
  let done = 0
  const classCache = createCache()
  const tokenCache = createCache()
  const compilerCache = createCache()
  const nonnativeSelectorCache = createCache()
  let sortOrder = function (a, b) {
    if (a === b) {
      hasDuplicate = true
    }
    return 0
  }

  // Instance methods
  const hasOwn = ({}).hasOwnProperty
  let arr = []
  const pop = arr.pop
  const pushNative = arr.push
  let push = arr.push
  const slice = arr.slice

  // Use a stripped-down indexOf as it's faster than native
  // https://jsperf.com/thor-indexof-vs-for/5
  const indexOf = function (list, elem) {
    let i = 0
    const len = list.length
    for (; i < len; i++) {
      if (list[i] === elem) {
        return i
      }
    }
    return -1
  }

  const booleans = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|' +
		'ismap|loop|multiple|open|readonly|required|scoped'

  // Regular expressions

  // http://www.w3.org/TR/css3-selectors/#whitespace
  const whitespace = '[\\\\x20\\\\t\\\\r\\\\n\\\\f]'

  // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
  const identifier = '(?:\\\\\\\\[\\\\da-fA-F]{1,6}' + whitespace +
		'?|\\\\\\\\[^\\\\r\\\\n\\\\f]|[\\\\w-]|[^\\0-\\\\x7f])+'

  // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
  const attributes = '\\\\[' + whitespace + '*(' + identifier + ')(?:' + whitespace +

		// Operator (capture 2)
		'*([*^$|!~]?=)' + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\"|(" + identifier + '))|)' +
		whitespace + '*\\\\]'

  const pseudos = ':(' + identifier + ')(?:\\\\((' +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\")|" +

		// 2. simple (capture 6)
		'((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|' + attributes + ')*)|' +

		// 3. anything else (capture 2)
		'.*' +
		')\\\\)|)'

  // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  const rwhitespace = new RegExp(whitespace + '+', 'g')
  const rtrim = new RegExp('^' + whitespace + '+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)' +
		whitespace + '+$', 'g')

  const rcomma = new RegExp('^' + whitespace + '*,' + whitespace + '*')
  const rcombinators = new RegExp('^' + whitespace + '*([>+~]|' + whitespace + ')' + whitespace +
		'*')
  const rdescend = new RegExp(whitespace + '|>')

  const rpseudo = new RegExp(pseudos)
  const ridentifier = new RegExp('^' + identifier + '$')

  const matchExpr = {
    ID: new RegExp('^#(' + identifier + ')'),
    CLASS: new RegExp('^\\\\.(' + identifier + ')'),
    TAG: new RegExp('^(' + identifier + '|[*])'),
    ATTR: new RegExp('^' + attributes),
    PSEUDO: new RegExp('^' + pseudos),
    CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(' +
			whitespace + '*(even|odd|(([+-]|)(\\\\d*)n|)' + whitespace + '*(?:([+-]|)' +
			whitespace + '*(\\\\d+)|))' + whitespace + '*\\\\)|)', 'i'),
    bool: new RegExp('^(?:' + booleans + ')$', 'i'),

    // For use in libraries implementing .is()
    // We use this for POS matching in \`select\`
    needsContext: new RegExp('^' + whitespace +
			'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(' + whitespace +
			'*((?:-\\\\d)?\\\\d*)' + whitespace + '*\\\\)|)(?=[^-]|$)', 'i')
  }

  const rhtml = /HTML$/i
  const rinputs = /^(?:input|select|textarea|button)$/i
  const rheader = /^h\\d$/i

  const rnative = /^[^{]+\\{\\s*\\[native \\w/

  // Easily-parseable/retrievable ID or TAG or CLASS selectors
  const rquickExpr = /^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/

  const rsibling = /[+~]/

  // CSS escapes
  // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
  const runescape = new RegExp('\\\\\\\\[\\\\da-fA-F]{1,6}' + whitespace + '?|\\\\\\\\([^\\\\r\\\\n\\\\f])', 'g')
  const funescape = function (escape, nonHex) {
    const high = '0x' + escape.slice(1) - 0x10000

    return nonHex || (high < 0
      ? String.fromCharCode(high + 0x10000)
      : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00))
  }

  // CSS string/identifier serialization
  // https://drafts.csswg.org/cssom/#common-serializing-idioms
  const rcssescape = /([\\0-\\x1f\\x7f]|^-?\\d)|^-$|[^\\0-\\x1f\\x7f-\\uFFFF\\w-]/g
  const fcssescape = function (ch, asCodePoint) {
    if (asCodePoint) {
      // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
      if (ch === '\\0') {
        return '\\uFFFD'
      }

      // Control characters and (dependent upon position) numbers get escaped as code points
      return ch.slice(0, -1) + '\\\\' +
				ch.charCodeAt(ch.length - 1).toString(16) + ' '
    }

    // Other potentially-special ASCII characters get backslash-escaped
    return '\\\\' + ch
  }

  // Used for iframes
  // See setDocument()
  // Removing the function wrapper causes a "Permission Denied"
  // error in IE
  const unloadHandler = function () {
    setDocument()
  }

  const inDisabledFieldset = addCombinator(
    function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === 'fieldset'
    },
    { dir: 'parentNode', next: 'legend' }
  )

  // Optimize for push.apply( _, NodeList )
  try {
    push.apply(
      (arr = slice.call(preferredDoc.childNodes)),
      preferredDoc.childNodes
    )

    // Support: Android<4.0
    // Detect silently failing push.apply
    // eslint-disable-next-line no-unused-expressions
    arr[preferredDoc.childNodes.length].nodeType
  } catch (e) {
    push = {
      apply: arr.length

      // Leverage slice if possible
        ? function (target, els) {
          pushNative.apply(target, slice.call(els))
        }

      // Support: IE<9
      // Otherwise append directly
        : function (target, els) {
          let j = target.length
          let i = 0

          // Can't trust NodeList.length
          while ((target[j++] = els[i++])) {}
          target.length = j - 1
        }
    }
  }

  function Sizzle (selector, context, results, seed) {
    let m; let i; let elem; let nid; let match; let groups; let newSelector
    let newContext = context && context.ownerDocument

    // nodeType defaults to 9, since context defaults to document
    const nodeType = context ? context.nodeType : 9

    results = results || []

    // Return early from calls with invalid selector or context
    if (typeof selector !== 'string' || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
      return results
    }

    // Try to shortcut find operations (as opposed to filters) in HTML documents
    if (!seed) {
      setDocument(context)
      context = context || document

      if (documentIsHTML) {
        // If the selector is sufficiently simple, try using a "get*By*" DOM method
        // (excepting DocumentFragment context, where the methods don't exist)
        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
          // ID selector
          if ((m = match[1])) {
            // Document context
            if (nodeType === 9) {
              if ((elem = context.getElementById(m))) {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (elem.id === m) {
                  results.push(elem)
                  return results
                }
              } else {
                return results
              }

              // Element context
            } else {
              // Support: IE, Opera, Webkit
              // TODO: identify versions
              // getElementById can match elements by name instead of ID
              if (newContext && (elem = newContext.getElementById(m)) &&
							contains(context, elem) &&
							elem.id === m) {
                results.push(elem)
                return results
              }
            }

            // Type selector
          } else if (match[2]) {
            push.apply(results, context.getElementsByTagName(selector))
            return results

            // Class selector
          } else if ((m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {
            push.apply(results, context.getElementsByClassName(m))
            return results
          }
        }

        // Take advantage of querySelectorAll
        if (support.qsa &&
				!nonnativeSelectorCache[selector + ' '] &&
				(!rbuggyQSA || !rbuggyQSA.test(selector)) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== 'object')) {
          newSelector = selector
          newContext = context

          // qSA considers elements outside a scoping root when evaluating child or
          // descendant combinators, which is not what we want.
          // In such cases, we work around the behavior by prefixing every selector in the
          // list with an ID selector referencing the scope context.
          // The technique has to be used as well when a leading combinator is used
          // as such selectors are not recognized by querySelectorAll.
          // Thanks to Andrew Dupont for this technique.
          if (nodeType === 1 &&
					(rdescend.test(selector) || rcombinators.test(selector))) {
            // Expand context for sibling selectors
            newContext = rsibling.test(selector) && testContext(context.parentNode) ||
						context

            // We can use :scope instead of the ID hack if the browser
            // supports it & if we're not changing the context.
            if (newContext !== context || !support.scope) {
              // Capture the context ID, setting it first if necessary
              if ((nid = context.getAttribute('id'))) {
                nid = nid.replace(rcssescape, fcssescape)
              } else {
                context.setAttribute('id', (nid = expando))
              }
            }

            // Prefix every selector in the list
            groups = tokenize(selector)
            i = groups.length
            while (i--) {
              groups[i] = (nid ? '#' + nid : ':scope') + ' ' +
							toSelector(groups[i])
            }
            newSelector = groups.join(',')
          }

          try {
            push.apply(results,
              newContext.querySelectorAll(newSelector)
            )
            return results
          } catch (qsaError) {
            nonnativeSelectorCache(selector, true)
          } finally {
            if (nid === expando) {
              context.removeAttribute('id')
            }
          }
        }
      }
    }

    // All others
    return select(selector.replace(rtrim, '$1'), context, results, seed)
  }

  /**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
  function createCache () {
    const keys = []

    function cache (key, value) {
      // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
      if (keys.push(key + ' ') > Expr.cacheLength) {
        // Only keep the most recent entries
        delete cache[keys.shift()]
      }
      return (cache[key + ' '] = value)
    }
    return cache
  }

  /**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
  function markFunction (fn) {
    fn[expando] = true
    return fn
  }

  /**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
  function assert (fn) {
    let el = document.createElement('fieldset')

    try {
      return !!fn(el)
    } catch (e) {
      return false
    } finally {
      // Remove from its parent by default
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      }

      // release memory in IE
      el = null
    }
  }

  /**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
  function addHandle (attrs, handler) {
    const arr = attrs.split('|')
    let i = arr.length

    while (i--) {
      Expr.attrHandle[arr[i]] = handler
    }
  }

  /**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
  function siblingCheck (a, b) {
    let cur = b && a
    const diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex

    // Use IE sourceIndex if available on both nodes
    if (diff) {
      return diff
    }

    // Check if b follows a
    if (cur) {
      while ((cur = cur.nextSibling)) {
        if (cur === b) {
          return -1
        }
      }
    }

    return a ? 1 : -1
  }

  /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
  function createInputPseudo (type) {
    return function (elem) {
      const name = elem.nodeName.toLowerCase()
      return name === 'input' && elem.type === type
    }
  }

  /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
  function createButtonPseudo (type) {
    return function (elem) {
      const name = elem.nodeName.toLowerCase()
      return (name === 'input' || name === 'button') && elem.type === type
    }
  }

  /**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
  function createDisabledPseudo (disabled) {
    // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
    return function (elem) {
      // Only certain elements can match :enabled or :disabled
      // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
      // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
      if ('form' in elem) {
        // Check for inherited disabledness on relevant non-disabled elements:
        // * listed form-associated elements in a disabled fieldset
        //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
        //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
        // * option elements in a disabled optgroup
        //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
        // All such elements have a "form" property.
        if (elem.parentNode && elem.disabled === false) {
          // Option elements defer to a parent optgroup if present
          if ('label' in elem) {
            if ('label' in elem.parentNode) {
              return elem.parentNode.disabled === disabled
            } else {
              return elem.disabled === disabled
            }
          }

          // Support: IE 6 - 11
          // Use the isDisabled shortcut property to check for disabled fieldset ancestors
          return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset(elem) === disabled
        }

        return elem.disabled === disabled

        // Try to winnow out elements that can't be disabled before trusting the disabled property.
        // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
        // even exist on them, let alone have a boolean value.
      } else if ('label' in elem) {
        return elem.disabled === disabled
      }

      // Remaining elements are neither :enabled nor :disabled
      return false
    }
  }

  /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
  function createPositionalPseudo (fn) {
    return markFunction(function (argument) {
      argument = +argument
      return markFunction(function (seed, matches) {
        let j
        const matchIndexes = fn([], seed.length, argument)
        let i = matchIndexes.length

        // Match elements found at the specified indexes
        while (i--) {
          if (seed[(j = matchIndexes[i])]) {
            seed[j] = !(matches[j] = seed[j])
          }
        }
      })
    })
  }

  /**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
  function testContext (context) {
    return context && typeof context.getElementsByTagName !== 'undefined' && context
  }

  // Expose support vars for convenience
  support = Sizzle.support = {}

  /**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
  isXML = Sizzle.isXML = function (elem) {
    const namespace = elem.namespaceURI
    const docElem = (elem.ownerDocument || elem).documentElement

    // Support: IE <=8
    // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
    // https://bugs.jquery.com/ticket/4833
    return !rhtml.test(namespace || docElem && docElem.nodeName || 'HTML')
  }

  /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
  setDocument = Sizzle.setDocument = function (node) {
    let hasCompare; let subWindow
    const doc = node ? node.ownerDocument || node : preferredDoc

    // Return early if doc is invalid or already selected
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq
    if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
      return document
    }

    // Update global variables
    document = doc
    docElem = document.documentElement
    documentIsHTML = !isXML(document)

    // Support: IE 9 - 11+, Edge 12 - 18+
    // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq
    if (preferredDoc != document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow) {
      // Support: IE 11, Edge
      if (subWindow.addEventListener) {
        subWindow.addEventListener('unload', unloadHandler, false)

        // Support: IE 9 - 10 only
      } else if (subWindow.attachEvent) {
        subWindow.attachEvent('onunload', unloadHandler)
      }
    }

    // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
    // Safari 4 - 5 only, Opera <=11.6 - 12.x only
    // IE/Edge & older browsers don't support the :scope pseudo-class.
    // Support: Safari 6.0 only
    // Safari 6.0 supports :scope but it's an alias of :root there.
    support.scope = assert(function (el) {
      docElem.appendChild(el).appendChild(document.createElement('div'))
      return typeof el.querySelectorAll !== 'undefined' &&
			!el.querySelectorAll(':scope fieldset div').length
    })

    /* Attributes
	---------------------------------------------------------------------- */

    // Support: IE<8
    // Verify that getAttribute really returns attributes and not properties
    // (excepting IE8 booleans)
    support.attributes = assert(function (el) {
      el.className = 'i'
      return !el.getAttribute('className')
    })

    /* getElement(s)By*
	---------------------------------------------------------------------- */

    // Check if getElementsByTagName("*") returns only elements
    support.getElementsByTagName = assert(function (el) {
      el.appendChild(document.createComment(''))
      return !el.getElementsByTagName('*').length
    })

    // Support: IE<9
    support.getElementsByClassName = rnative.test(document.getElementsByClassName)

    // Support: IE<10
    // Check if getElementById returns elements by name
    // The broken getElementById methods don't pick up programmatically-set names,
    // so use a roundabout getElementsByName test
    support.getById = assert(function (el) {
      docElem.appendChild(el).id = expando
      return !document.getElementsByName || !document.getElementsByName(expando).length
    })

    // ID filter and find
    if (support.getById) {
      Expr.filter.ID = function (id) {
        const attrId = id.replace(runescape, funescape)
        return function (elem) {
          return elem.getAttribute('id') === attrId
        }
      }
      Expr.find.ID = function (id, context) {
        if (typeof context.getElementById !== 'undefined' && documentIsHTML) {
          const elem = context.getElementById(id)
          return elem ? [elem] : []
        }
      }
    } else {
      Expr.filter.ID = function (id) {
        const attrId = id.replace(runescape, funescape)
        return function (elem) {
          const node = typeof elem.getAttributeNode !== 'undefined' &&
					elem.getAttributeNode('id')
          return node && node.value === attrId
        }
      }

      // Support: IE 6 - 7 only
      // getElementById is not reliable as a find shortcut
      Expr.find.ID = function (id, context) {
        if (typeof context.getElementById !== 'undefined' && documentIsHTML) {
          let node; let i; let elems
          let elem = context.getElementById(id)

          if (elem) {
            // Verify the id attribute
            node = elem.getAttributeNode('id')
            if (node && node.value === id) {
              return [elem]
            }

            // Fall back on getElementsByName
            elems = context.getElementsByName(id)
            i = 0
            while ((elem = elems[i++])) {
              node = elem.getAttributeNode('id')
              if (node && node.value === id) {
                return [elem]
              }
            }
          }

          return []
        }
      }
    }

    // Tag
    Expr.find.TAG = support.getElementsByTagName
      ? function (tag, context) {
        if (typeof context.getElementsByTagName !== 'undefined') {
          return context.getElementsByTagName(tag)

          // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag)
        }
      }

      : function (tag, context) {
        let elem
        const tmp = []
        let i = 0

        // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        const results = context.getElementsByTagName(tag)

        // Filter out possible comments
        if (tag === '*') {
          while ((elem = results[i++])) {
            if (elem.nodeType === 1) {
              tmp.push(elem)
            }
          }

          return tmp
        }
        return results
      }

    // Class
    Expr.find.CLASS = support.getElementsByClassName && function (className, context) {
      if (typeof context.getElementsByClassName !== 'undefined' && documentIsHTML) {
        return context.getElementsByClassName(className)
      }
    }

    /* QSA/matchesSelector
	---------------------------------------------------------------------- */

    // QSA and matchesSelector support

    // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
    rbuggyMatches = []

    // qSa(:focus) reports false when true (Chrome 21)
    // We allow this because of a bug in IE8/9 that throws an error
    // whenever \`document.activeElement\` is accessed on an iframe
    // So, we allow :focus to pass through QSA all the time to avoid the IE error
    // See https://bugs.jquery.com/ticket/13378
    rbuggyQSA = []

    if ((support.qsa = rnative.test(document.querySelectorAll))) {
      // Build QSA regex
      // Regex strategy adopted from Diego Perini
      assert(function (el) {
        let input

        // Select is set to empty string on purpose
        // This is to test IE's treatment of not explicitly
        // setting a boolean content attribute,
        // since its presence should be enough
        // https://bugs.jquery.com/ticket/12359
        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\\r\\\\' msallowcapture=''>" +
				"<option selected=''></option></select>"

        // Support: IE8, Opera 11-12.16
        // Nothing should be selected when empty strings follow ^= or $= or *=
        // The test attribute must be unknown in Opera but "safe" for WinRT
        // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
        if (el.querySelectorAll("[msallowcapture^='']").length) {
          rbuggyQSA.push('[*^$]=' + whitespace + "*(?:''|\\"\\")")
        }

        // Support: IE8
        // Boolean attributes and "value" are not treated correctly
        if (!el.querySelectorAll('[selected]').length) {
          rbuggyQSA.push('\\\\[' + whitespace + '*(?:value|' + booleans + ')')
        }

        // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
        if (!el.querySelectorAll('[id~=' + expando + '-]').length) {
          rbuggyQSA.push('~=')
        }

        // Support: IE 11+, Edge 15 - 18+
        // IE 11/Edge don't find elements on a \`[name='']\` query in some cases.
        // Adding a temporary attribute to the document before the selection works
        // around the issue.
        // Interestingly, IE 10 & older don't seem to have the issue.
        input = document.createElement('input')
        input.setAttribute('name', '')
        el.appendChild(input)
        if (!el.querySelectorAll("[name='']").length) {
          rbuggyQSA.push('\\\\[' + whitespace + '*name' + whitespace + '*=' +
					whitespace + "*(?:''|\\"\\")")
        }

        // Webkit/Opera - :checked should return selected option elements
        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
        // IE8 throws error here and will not see later tests
        if (!el.querySelectorAll(':checked').length) {
          rbuggyQSA.push(':checked')
        }

        // Support: Safari 8+, iOS 8+
        // https://bugs.webkit.org/show_bug.cgi?id=136851
        // In-page \`selector#id sibling-combinator selector\` fails
        if (!el.querySelectorAll('a#' + expando + '+*').length) {
          rbuggyQSA.push('.#.+[+~]')
        }

        // Support: Firefox <=3.6 - 5 only
        // Old Firefox doesn't throw on a badly-escaped identifier.
        el.querySelectorAll('\\\\\\f')
        rbuggyQSA.push('[\\\\r\\\\n\\\\f]')
      })

      assert(function (el) {
        el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>"

        // Support: Windows 8 Native Apps
        // The type and name attributes are restricted during .innerHTML assignment
        const input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        el.appendChild(input).setAttribute('name', 'D')

        // Support: IE8
        // Enforce case-sensitivity of name attribute
        if (el.querySelectorAll('[name=d]').length) {
          rbuggyQSA.push('name' + whitespace + '*[*^$|!~]?=')
        }

        // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
        // IE8 throws error here and will not see later tests
        if (el.querySelectorAll(':enabled').length !== 2) {
          rbuggyQSA.push(':enabled', ':disabled')
        }

        // Support: IE9-11+
        // IE's :disabled selector does not pick up the children of disabled fieldsets
        docElem.appendChild(el).disabled = true
        if (el.querySelectorAll(':disabled').length !== 2) {
          rbuggyQSA.push(':enabled', ':disabled')
        }

        // Support: Opera 10 - 11 only
        // Opera 10-11 does not throw on post-comma invalid pseudos
        el.querySelectorAll('*,:x')
        rbuggyQSA.push(',.*:')
      })
    }

    if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {
      assert(function (el) {
        // Check to see if it's possible to do matchesSelector
        // on a disconnected node (IE 9)
        support.disconnectedMatch = matches.call(el, '*')

        // This should fail with an exception
        // Gecko does not error, returns false instead
        matches.call(el, "[s!='']:x")
        rbuggyMatches.push('!=', pseudos)
      })
    }

    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join('|'))
    rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join('|'))

    /* Contains
	---------------------------------------------------------------------- */
    hasCompare = rnative.test(docElem.compareDocumentPosition)

    // Element contains another
    // Purposefully self-exclusive
    // As in, an element does not contain itself
    contains = hasCompare || rnative.test(docElem.contains)
      ? function (a, b) {
        const adown = a.nodeType === 9 ? a.documentElement : a
        const bup = b && b.parentNode
        return a === bup || !!(bup && bup.nodeType === 1 && (
          adown.contains
            ? adown.contains(bup)
            : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
        ))
      }
      : function (a, b) {
        if (b) {
          while ((b = b.parentNode)) {
            if (b === a) {
              return true
            }
          }
        }
        return false
      }

    /* Sorting
	---------------------------------------------------------------------- */

    // Document order sorting
    sortOrder = hasCompare
      ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true
          return 0
        }

        // Sort on method existence if only one input has compareDocumentPosition
        let compare = !a.compareDocumentPosition - !b.compareDocumentPosition
        if (compare) {
          return compare
        }

        // Calculate position if both inputs belong to the same document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        compare = (a.ownerDocument || a) == (b.ownerDocument || b)
          ? a.compareDocumentPosition(b)

        // Otherwise we know they are disconnected
          : 1

        // Disconnected nodes
        if (compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
          // Choose the first element that is related to our preferred document
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (a == document || a.ownerDocument == preferredDoc &&
				contains(preferredDoc, a)) {
            return -1
          }

          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (b == document || b.ownerDocument == preferredDoc &&
				contains(preferredDoc, b)) {
            return 1
          }

          // Maintain original order
          return sortInput
            ? (indexOf(sortInput, a) - indexOf(sortInput, b))
            : 0
        }

        return compare & 4 ? -1 : 1
      }
      : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true
          return 0
        }

        let cur
        let i = 0
        const aup = a.parentNode
        const bup = b.parentNode
        const ap = [a]
        const bp = [b]

        // Parentless nodes are either documents or disconnected
        if (!aup || !bup) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          /* eslint-disable eqeqeq */
          return a == document ? -1
            : b == document ? 1
            /* eslint-enable eqeqeq */
              : aup ? -1
                : bup ? 1
                  : sortInput
                    ? (indexOf(sortInput, a) - indexOf(sortInput, b))
                    : 0

          // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b)
        }

        // Otherwise we need full lists of their ancestors for comparison
        cur = a
        while ((cur = cur.parentNode)) {
          ap.unshift(cur)
        }
        cur = b
        while ((cur = cur.parentNode)) {
          bp.unshift(cur)
        }

        // Walk down the tree looking for a discrepancy
        while (ap[i] === bp[i]) {
          i++
        }

        return i

        // Do a sibling check if the nodes have a common ancestor
          ? siblingCheck(ap[i], bp[i])

        // Otherwise nodes in our document sort first
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        /* eslint-disable eqeqeq */
          : ap[i] == preferredDoc ? -1
            : bp[i] == preferredDoc ? 1
            /* eslint-enable eqeqeq */
              : 0
      }

    return document
  }

  Sizzle.matches = function (expr, elements) {
    return Sizzle(expr, null, null, elements)
  }

  Sizzle.matchesSelector = function (elem, expr) {
    setDocument(elem)

    if (support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[expr + ' '] &&
		(!rbuggyMatches || !rbuggyMatches.test(expr)) &&
		(!rbuggyQSA || !rbuggyQSA.test(expr))) {
      try {
        const ret = matches.call(elem, expr)

        // IE 9's matchesSelector returns false on disconnected nodes
        if (ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11) {
          return ret
        }
      } catch (e) {
        nonnativeSelectorCache(expr, true)
      }
    }

    return Sizzle(expr, document, null, [elem]).length > 0
  }

  Sizzle.contains = function (context, elem) {
    // Set document vars if needed
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq
    if ((context.ownerDocument || context) != document) {
      setDocument(context)
    }
    return contains(context, elem)
  }

  Sizzle.attr = function (elem, name) {
    // Set document vars if needed
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq
    if ((elem.ownerDocument || elem) != document) {
      setDocument(elem)
    }

    const fn = Expr.attrHandle[name.toLowerCase()]

    // Don't get fooled by Object.prototype properties (jQuery #13807)
    let val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase())
      ? fn(elem, name, !documentIsHTML)
      : undefined

    return val !== undefined
      ? val
      : support.attributes || !documentIsHTML
        ? elem.getAttribute(name)
        : (val = elem.getAttributeNode(name)) && val.specified
          ? val.value
          : null
  }

  Sizzle.escape = function (sel) {
    return (sel + '').replace(rcssescape, fcssescape)
  }

  Sizzle.error = function (msg) {
    throw new Error('Syntax error, unrecognized expression: ' + msg)
  }

  /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
  Sizzle.uniqueSort = function (results) {
    let elem
    const duplicates = []
    let j = 0
    let i = 0

    // Unless we *know* we can detect duplicates, assume their presence
    hasDuplicate = !support.detectDuplicates
    sortInput = !support.sortStable && results.slice(0)
    results.sort(sortOrder)

    if (hasDuplicate) {
      while ((elem = results[i++])) {
        if (elem === results[i]) {
          j = duplicates.push(i)
        }
      }
      while (j--) {
        results.splice(duplicates[j], 1)
      }
    }

    // Clear input after sorting to release objects
    // See https://github.com/jquery/sizzle/pull/225
    sortInput = null

    return results
  }

  /**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
  getText = Sizzle.getText = function (elem) {
    let node
    let ret = ''
    let i = 0
    const nodeType = elem.nodeType

    if (!nodeType) {
      // If no nodeType, this is expected to be an array
      while ((node = elem[i++])) {
        // Do not traverse comment nodes
        ret += getText(node)
      }
    } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
      // Use textContent for elements
      // innerText usage removed for consistency of new lines (jQuery #11153)
      if (typeof elem.textContent === 'string') {
        return elem.textContent
      } else {
        // Traverse its children
        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
          ret += getText(elem)
        }
      }
    } else if (nodeType === 3 || nodeType === 4) {
      return elem.nodeValue
    }

    // Do not include comment or processing instruction nodes

    return ret
  }

  Expr = Sizzle.selectors = {

    // Can be adjusted by the user
    cacheLength: 50,

    createPseudo: markFunction,

    match: matchExpr,

    attrHandle: {},

    find: {},

    relative: {
      '>': { dir: 'parentNode', first: true },
      ' ': { dir: 'parentNode' },
      '+': { dir: 'previousSibling', first: true },
      '~': { dir: 'previousSibling' }
    },

    preFilter: {
      ATTR: function (match) {
        match[1] = match[1].replace(runescape, funescape)

        // Move the given value to match[3] whether quoted or unquoted
        match[3] = (match[3] || match[4] ||
				match[5] || '').replace(runescape, funescape)

        if (match[2] === '~=') {
          match[3] = ' ' + match[3] + ' '
        }

        return match.slice(0, 4)
      },

      CHILD: function (match) {
        /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\\d*|\\d*n([+-]\\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
        match[1] = match[1].toLowerCase()

        if (match[1].slice(0, 3) === 'nth') {
          // nth-* requires argument
          if (!match[3]) {
            Sizzle.error(match[0])
          }

          // numeric x and y parameters for Expr.filter.CHILD
          // remember that false/true cast respectively to 0/1
          match[4] = +(match[4]
            ? match[5] + (match[6] || 1)
            : 2 * (match[3] === 'even' || match[3] === 'odd'))
          match[5] = +((match[7] + match[8]) || match[3] === 'odd')

          // other types prohibit arguments
        } else if (match[3]) {
          Sizzle.error(match[0])
        }

        return match
      },

      PSEUDO: function (match) {
        let excess
        const unquoted = !match[6] && match[2]

        if (matchExpr.CHILD.test(match[0])) {
          return null
        }

        // Accept quoted arguments as-is
        if (match[3]) {
          match[2] = match[4] || match[5] || ''

          // Strip excess characters from unquoted arguments
        } else if (unquoted && rpseudo.test(unquoted) &&

				// Get excess from tokenize (recursively)
				(excess = tokenize(unquoted, true)) &&

				// advance to the next closing parenthesis
				(excess = unquoted.indexOf(')', unquoted.length - excess) - unquoted.length)) {
          // excess is a negative index
          match[0] = match[0].slice(0, excess)
          match[2] = unquoted.slice(0, excess)
        }

        // Return only captures needed by the pseudo filter method (type and argument)
        return match.slice(0, 3)
      }
    },

    filter: {

      TAG: function (nodeNameSelector) {
        const nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase()
        return nodeNameSelector === '*'
          ? function () {
            return true
          }
          : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
          }
      },

      CLASS: function (className) {
        let pattern = classCache[className + ' ']

        return pattern ||
				(pattern = new RegExp('(^|' + whitespace +
					')' + className + '(' + whitespace + '|$)')) && classCache(
				  className, function (elem) {
				    return pattern.test(
				      typeof elem.className === 'string' && elem.className ||
								typeof elem.getAttribute !== 'undefined' &&
									elem.getAttribute('class') ||
								''
				    )
				  })
      },

      ATTR: function (name, operator, check) {
        return function (elem) {
          let result = Sizzle.attr(elem, name)

          if (result == null) {
            return operator === '!='
          }
          if (!operator) {
            return true
          }

          result += ''

          /* eslint-disable max-len */

          return operator === '=' ? result === check
            : operator === '!=' ? result !== check
              : operator === '^=' ? check && result.indexOf(check) === 0
                : operator === '*=' ? check && result.indexOf(check) > -1
                  : operator === '$=' ? check && result.slice(-check.length) === check
                    : operator === '~=' ? (' ' + result.replace(rwhitespace, ' ') + ' ').indexOf(check) > -1
                      : operator === '|=' ? result === check || result.slice(0, check.length + 1) === check + '-'
                        : false
          /* eslint-enable max-len */
        }
      },

      CHILD: function (type, what, _argument, first, last) {
        const simple = type.slice(0, 3) !== 'nth'
        const forward = type.slice(-4) !== 'last'
        const ofType = what === 'of-type'

        return first === 1 && last === 0

        // Shortcut for :nth-*(n)
          ? function (elem) {
            return !!elem.parentNode
          }

          : function (elem, _context, xml) {
            let cache; let uniqueCache; let outerCache; let node; let nodeIndex; let start
            let dir = simple !== forward ? 'nextSibling' : 'previousSibling'
            const parent = elem.parentNode
            const name = ofType && elem.nodeName.toLowerCase()
            const useCache = !xml && !ofType
            let diff = false

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem
                  while ((node = node[dir])) {
                    if (ofType
                      ? node.nodeName.toLowerCase() === name
                      : node.nodeType === 1) {
                      return false
                    }
                  }

                  // Reverse direction for :only-* (if we haven't yet done so)
                  start = dir = type === 'only' && !start && 'nextSibling'
                }
                return true
              }

              start = [forward ? parent.firstChild : parent.lastChild]

              // non-xml :nth-child(...) stores cache data on \`parent\`
              if (forward && useCache) {
                // Seek \`elem\` from a previously-cached index

                // ...in a gzip-friendly way
                node = parent
                outerCache = node[expando] || (node[expando] = {})

                // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)
                uniqueCache = outerCache[node.uniqueID] ||
								(outerCache[node.uniqueID] = {})

                cache = uniqueCache[type] || []
                nodeIndex = cache[0] === dirruns && cache[1]
                diff = nodeIndex && cache[2]
                node = nodeIndex && parent.childNodes[nodeIndex]

                while ((node = ++nodeIndex && node && node[dir] ||

								// Fallback to seeking \`elem\` from the start
								(diff = nodeIndex = 0) || start.pop())) {
                  // When found, cache indexes on \`parent\` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff]
                    break
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem
                  outerCache = node[expando] || (node[expando] = {})

                  // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)
                  uniqueCache = outerCache[node.uniqueID] ||
									(outerCache[node.uniqueID] = {})

                  cache = uniqueCache[type] || []
                  nodeIndex = cache[0] === dirruns && cache[1]
                  diff = nodeIndex
                }

                // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                if (diff === false) {
                  // Use the same loop as above to seek \`elem\` from the start
                  while ((node = ++nodeIndex && node && node[dir] ||
									(diff = nodeIndex = 0) || start.pop())) {
                    if ((ofType
                      ? node.nodeName.toLowerCase() === name
                      : node.nodeType === 1) &&
										++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] ||
												(node[expando] = {})

                        // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)
                        uniqueCache = outerCache[node.uniqueID] ||
												(outerCache[node.uniqueID] = {})

                        uniqueCache[type] = [dirruns, diff]
                      }

                      if (node === elem) {
                        break
                      }
                    }
                  }
                }
              }

              // Incorporate the offset, then check against cycle size
              diff -= last
              return diff === first || (diff % first === 0 && diff / first >= 0)
            }
          }
      },

      PSEUDO: function (pseudo, argument) {
        // pseudo-class names are case-insensitive
        // http://www.w3.org/TR/selectors/#pseudo-classes
        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
        // Remember that setFilters inherits from pseudos
        let args
        const fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
					Sizzle.error('unsupported pseudo: ' + pseudo)

        // The user may use createPseudo to indicate that
        // arguments are needed to create the filter function
        // just as Sizzle does
        if (fn[expando]) {
          return fn(argument)
        }

        // But maintain support for old signatures
        if (fn.length > 1) {
          args = [pseudo, pseudo, '', argument]
          return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())
            ? markFunction(function (seed, matches) {
              let idx
              const matched = fn(seed, argument)
              let i = matched.length
              while (i--) {
                idx = indexOf(seed, matched[i])
                seed[idx] = !(matches[idx] = matched[i])
              }
            })
            : function (elem) {
              return fn(elem, 0, args)
            }
        }

        return fn
      }
    },

    pseudos: {

      // Potentially complex pseudos
      not: markFunction(function (selector) {
        // Trim the selector passed to compile
        // to avoid treating leading and trailing
        // spaces as combinators
        const input = []
        const results = []
        const matcher = compile(selector.replace(rtrim, '$1'))

        return matcher[expando]
          ? markFunction(function (seed, matches, _context, xml) {
            let elem
            const unmatched = matcher(seed, null, xml, [])
            let i = seed.length

            // Match elements unmatched by \`matcher\`
            while (i--) {
              if ((elem = unmatched[i])) {
                seed[i] = !(matches[i] = elem)
              }
            }
          })
          : function (elem, _context, xml) {
            input[0] = elem
            matcher(input, null, xml, results)

            // Don't keep the element (issue #299)
            input[0] = null
            return !results.pop()
          }
      }),

      has: markFunction(function (selector) {
        return function (elem) {
          return Sizzle(selector, elem).length > 0
        }
      }),

      contains: markFunction(function (text) {
        text = text.replace(runescape, funescape)
        return function (elem) {
          return (elem.textContent || getText(elem)).indexOf(text) > -1
        }
      }),

      // "Whether an element is represented by a :lang() selector
      // is based solely on the element's language value
      // being equal to the identifier C,
      // or beginning with the identifier C immediately followed by "-".
      // The matching of C against the element's language value is performed case-insensitively.
      // The identifier C does not have to be a valid language name."
      // http://www.w3.org/TR/selectors/#lang-pseudo
      lang: markFunction(function (lang) {
        // lang value must be a valid identifier
        if (!ridentifier.test(lang || '')) {
          Sizzle.error('unsupported lang: ' + lang)
        }
        lang = lang.replace(runescape, funescape).toLowerCase()
        return function (elem) {
          let elemLang
          do {
            if ((elemLang = documentIsHTML
              ? elem.lang
              : elem.getAttribute('xml:lang') || elem.getAttribute('lang'))) {
              elemLang = elemLang.toLowerCase()
              return elemLang === lang || elemLang.indexOf(lang + '-') === 0
            }
          } while ((elem = elem.parentNode) && elem.nodeType === 1)
          return false
        }
      }),

      // Miscellaneous
      target: function (elem) {
        const hash = window.location && window.location.hash
        return hash && hash.slice(1) === elem.id
      },

      root: function (elem) {
        return elem === docElem
      },

      focus: function (elem) {
        return elem === document.activeElement &&
				(!document.hasFocus || document.hasFocus()) &&
				!!(elem.type || elem.href || ~elem.tabIndex)
      },

      // Boolean properties
      enabled: createDisabledPseudo(false),
      disabled: createDisabledPseudo(true),

      checked: function (elem) {
        // In CSS3, :checked should return both checked and selected elements
        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
        const nodeName = elem.nodeName.toLowerCase()
        return (nodeName === 'input' && !!elem.checked) ||
				(nodeName === 'option' && !!elem.selected)
      },

      selected: function (elem) {
        // Accessing this property makes selected-by-default
        // options in Safari work properly
        if (elem.parentNode) {
          // eslint-disable-next-line no-unused-expressions
          elem.parentNode.selectedIndex
        }

        return elem.selected === true
      },

      // Contents
      empty: function (elem) {
        // http://www.w3.org/TR/selectors/#empty-pseudo
        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
        //   but not by others (comment: 8; processing instruction: 7; etc.)
        // nodeType < 6 works because attributes (2) do not appear as children
        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
          if (elem.nodeType < 6) {
            return false
          }
        }
        return true
      },

      parent: function (elem) {
        return !Expr.pseudos.empty(elem)
      },

      // Element/input types
      header: function (elem) {
        return rheader.test(elem.nodeName)
      },

      input: function (elem) {
        return rinputs.test(elem.nodeName)
      },

      button: function (elem) {
        const name = elem.nodeName.toLowerCase()
        return name === 'input' && elem.type === 'button' || name === 'button'
      },

      text: function (elem) {
        let attr
        return elem.nodeName.toLowerCase() === 'input' &&
				elem.type === 'text' &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				((attr = elem.getAttribute('type')) == null ||
					attr.toLowerCase() === 'text')
      },

      // Position-in-collection
      first: createPositionalPseudo(function () {
        return [0]
      }),

      last: createPositionalPseudo(function (_matchIndexes, length) {
        return [length - 1]
      }),

      eq: createPositionalPseudo(function (_matchIndexes, length, argument) {
        return [argument < 0 ? argument + length : argument]
      }),

      even: createPositionalPseudo(function (matchIndexes, length) {
        let i = 0
        for (; i < length; i += 2) {
          matchIndexes.push(i)
        }
        return matchIndexes
      }),

      odd: createPositionalPseudo(function (matchIndexes, length) {
        let i = 1
        for (; i < length; i += 2) {
          matchIndexes.push(i)
        }
        return matchIndexes
      }),

      lt: createPositionalPseudo(function (matchIndexes, length, argument) {
        let i = argument < 0
          ? argument + length
          : argument > length
            ? length
            : argument
        for (; --i >= 0;) {
          matchIndexes.push(i)
        }
        return matchIndexes
      }),

      gt: createPositionalPseudo(function (matchIndexes, length, argument) {
        let i = argument < 0 ? argument + length : argument
        for (; ++i < length;) {
          matchIndexes.push(i)
        }
        return matchIndexes
      })
    }
  }

  Expr.pseudos.nth = Expr.pseudos.eq

  // Add button/input type pseudos
  for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
    Expr.pseudos[i] = createInputPseudo(i)
  }
  for (i in { submit: true, reset: true }) {
    Expr.pseudos[i] = createButtonPseudo(i)
  }

  // Easy API for creating new setFilters
  function setFilters () {}
  setFilters.prototype = Expr.filters = Expr.pseudos
  Expr.setFilters = new setFilters()

  tokenize = Sizzle.tokenize = function (selector, parseOnly) {
    let matched; let match; let tokens; let type
    let soFar; let groups; let preFilters
    const cached = tokenCache[selector + ' ']

    if (cached) {
      return parseOnly ? 0 : cached.slice(0)
    }

    soFar = selector
    groups = []
    preFilters = Expr.preFilter

    while (soFar) {
      // Comma and first run
      if (!matched || (match = rcomma.exec(soFar))) {
        if (match) {
          // Don't consume trailing commas as valid
          soFar = soFar.slice(match[0].length) || soFar
        }
        groups.push((tokens = []))
      }

      matched = false

      // Combinators
      if ((match = rcombinators.exec(soFar))) {
        matched = match.shift()
        tokens.push({
          value: matched,

          // Cast descendant combinators to space
          type: match[0].replace(rtrim, ' ')
        })
        soFar = soFar.slice(matched.length)
      }

      // Filters
      for (type in Expr.filter) {
        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
				(match = preFilters[type](match)))) {
          matched = match.shift()
          tokens.push({
            value: matched,
            type: type,
            matches: match
          })
          soFar = soFar.slice(matched.length)
        }
      }

      if (!matched) {
        break
      }
    }

    // Return the length of the invalid excess
    // if we're just parsing
    // Otherwise, throw an error or return tokens
    return parseOnly
      ? soFar.length
      : soFar
        ? Sizzle.error(selector)

      // Cache the tokens
        : tokenCache(selector, groups).slice(0)
  }

  function toSelector (tokens) {
    let i = 0
    const len = tokens.length
    let selector = ''
    for (; i < len; i++) {
      selector += tokens[i].value
    }
    return selector
  }

  function addCombinator (matcher, combinator, base) {
    const dir = combinator.dir
    const skip = combinator.next
    const key = skip || dir
    const checkNonElements = base && key === 'parentNode'
    const doneName = done++

    return combinator.first

    // Check against closest ancestor/preceding element
      ? function (elem, context, xml) {
        while ((elem = elem[dir])) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml)
          }
        }
        return false
      }

    // Check against all ancestor/preceding elements
      : function (elem, context, xml) {
        let oldCache; let uniqueCache; let outerCache
        const newCache = [dirruns, doneName]

        // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
        if (xml) {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true
              }
            }
          }
        } else {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {})

              // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)
              uniqueCache = outerCache[elem.uniqueID] ||
							(outerCache[elem.uniqueID] = {})

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem
              } else if ((oldCache = uniqueCache[key]) &&
							oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return (newCache[2] = oldCache[2])
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache

                // A match means we're done; a fail means we have to keep checking
                if ((newCache[2] = matcher(elem, context, xml))) {
                  return true
                }
              }
            }
          }
        }
        return false
      }
  }

  function elementMatcher (matchers) {
    return matchers.length > 1
      ? function (elem, context, xml) {
        let i = matchers.length
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false
          }
        }
        return true
      }
      : matchers[0]
  }

  function multipleContexts (selector, contexts, results) {
    let i = 0
    const len = contexts.length
    for (; i < len; i++) {
      Sizzle(selector, contexts[i], results)
    }
    return results
  }

  function condense (unmatched, map, filter, context, xml) {
    let elem
    const newUnmatched = []
    let i = 0
    const len = unmatched.length
    const mapped = map != null

    for (; i < len; i++) {
      if ((elem = unmatched[i])) {
        if (!filter || filter(elem, context, xml)) {
          newUnmatched.push(elem)
          if (mapped) {
            map.push(i)
          }
        }
      }
    }

    return newUnmatched
  }

  function setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
    if (postFilter && !postFilter[expando]) {
      postFilter = setMatcher(postFilter)
    }
    if (postFinder && !postFinder[expando]) {
      postFinder = setMatcher(postFinder, postSelector)
    }
    return markFunction(function (seed, results, context, xml) {
      let temp; let i; let elem
      const preMap = []
      const postMap = []
      const preexisting = results.length

      // Get initial elements from seed or context
      const elems = seed || multipleContexts(
        selector || '*',
        context.nodeType ? [context] : context,
        []
      )

      // Prefilter to get matcher input, preserving a map for seed-results synchronization
      const matcherIn = preFilter && (seed || !selector)
        ? condense(elems, preMap, preFilter, context, xml)
        : elems

      let matcherOut = matcher

      // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        ? postFinder || (seed ? preFilter : preexisting || postFilter)

        // ...intermediate processing is necessary
          ? []

        // ...otherwise use results directly
          : results
        : matcherIn

      // Find primary matches
      if (matcher) {
        matcher(matcherIn, matcherOut, context, xml)
      }

      // Apply postFilter
      if (postFilter) {
        temp = condense(matcherOut, postMap)
        postFilter(temp, [], context, xml)

        // Un-match failing elements by moving them back to matcherIn
        i = temp.length
        while (i--) {
          if ((elem = temp[i])) {
            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)
          }
        }
      }

      if (seed) {
        if (postFinder || preFilter) {
          if (postFinder) {
            // Get the final matcherOut by condensing this intermediate into postFinder contexts
            temp = []
            i = matcherOut.length
            while (i--) {
              if ((elem = matcherOut[i])) {
                // Restore matcherIn since elem is not yet a final match
                temp.push((matcherIn[i] = elem))
              }
            }
            postFinder(null, (matcherOut = []), temp, xml)
          }

          // Move matched elements from seed to results to keep them synchronized
          i = matcherOut.length
          while (i--) {
            if ((elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
              seed[temp] = !(results[temp] = elem)
            }
          }
        }

        // Add elements to results, through postFinder if defined
      } else {
        matcherOut = condense(
          matcherOut === results
            ? matcherOut.splice(preexisting, matcherOut.length)
            : matcherOut
        )
        if (postFinder) {
          postFinder(null, results, matcherOut, xml)
        } else {
          push.apply(results, matcherOut)
        }
      }
    })
  }

  function matcherFromTokens (tokens) {
    let checkContext; let matcher; let j
    const len = tokens.length
    const leadingRelative = Expr.relative[tokens[0].type]
    const implicitRelative = leadingRelative || Expr.relative[' ']
    let i = leadingRelative ? 1 : 0

    // The foundational matcher ensures that elements are reachable from top-level context(s)
    const matchContext = addCombinator(function (elem) {
      return elem === checkContext
    }, implicitRelative, true)
    const matchAnyContext = addCombinator(function (elem) {
      return indexOf(checkContext, elem) > -1
    }, implicitRelative, true)
    let matchers = [function (elem, context, xml) {
      const ret = (!leadingRelative && (xml || context !== outermostContext)) || (
        (checkContext = context).nodeType
          ? matchContext(elem, context, xml)
          : matchAnyContext(elem, context, xml))

      // Avoid hanging onto element (issue #299)
      checkContext = null
      return ret
    }]

    for (; i < len; i++) {
      if ((matcher = Expr.relative[tokens[i].type])) {
        matchers = [addCombinator(elementMatcher(matchers), matcher)]
      } else {
        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches)

        // Return special upon seeing a positional matcher
        if (matcher[expando]) {
          // Find the next relative operator (if any) for proper handling
          j = ++i
          for (; j < len; j++) {
            if (Expr.relative[tokens[j].type]) {
              break
            }
          }
          return setMatcher(
            i > 1 && elementMatcher(matchers),
            i > 1 && toSelector(

              // If the preceding token was a descendant combinator, insert an implicit any-element \`*\`
              tokens
                .slice(0, i - 1)
                .concat({ value: tokens[i - 2].type === ' ' ? '*' : '' })
            ).replace(rtrim, '$1'),
            matcher,
            i < j && matcherFromTokens(tokens.slice(i, j)),
            j < len && matcherFromTokens((tokens = tokens.slice(j))),
            j < len && toSelector(tokens)
          )
        }
        matchers.push(matcher)
      }
    }

    return elementMatcher(matchers)
  }

  function matcherFromGroupMatchers (elementMatchers, setMatchers) {
    const bySet = setMatchers.length > 0
    const byElement = elementMatchers.length > 0
    const superMatcher = function (seed, context, xml, results, outermost) {
      let elem; let j; let matcher
      let matchedCount = 0
      let i = '0'
      const unmatched = seed && []
      let setMatched = []
      const contextBackup = outermostContext

      // We must always have either seed elements or outermost context
      const elems = seed || byElement && Expr.find.TAG('*', outermost)

      // Use integer dirruns iff this is the outermost matcher
      const dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1)
      const len = elems.length

      if (outermost) {
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        outermostContext = context == document || context || outermost
      }

      // Add elements passing elementMatchers directly to results
      // Support: IE<9, Safari
      // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
      for (; i !== len && (elem = elems[i]) != null; i++) {
        if (byElement && elem) {
          j = 0

          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (!context && elem.ownerDocument != document) {
            setDocument(elem)
            xml = !documentIsHTML
          }
          while ((matcher = elementMatchers[j++])) {
            if (matcher(elem, context || document, xml)) {
              results.push(elem)
              break
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique
          }
        }

        // Track unmatched elements for set filters
        if (bySet) {
          // They will have gone through all possible matchers
          if ((elem = !matcher && elem)) {
            matchedCount--
          }

          // Lengthen the array for every element, matched or not
          if (seed) {
            unmatched.push(elem)
          }
        }
      }

      // \`i\` is now the count of elements visited above, and adding it to \`matchedCount\`
      // makes the latter nonnegative.
      matchedCount += i

      // Apply set filters to unmatched elements
      // NOTE: This can be skipped if there are no unmatched elements (i.e., \`matchedCount\`
      // equals \`i\`), unless we didn't visit _any_ elements in the above loop because we have
      // no element matchers and no seed.
      // Incrementing an initially-string "0" \`i\` allows \`i\` to remain a string only in that
      // case, which will result in a "00" \`matchedCount\` that differs from \`i\` but is also
      // numerically zero.
      if (bySet && i !== matchedCount) {
        j = 0
        while ((matcher = setMatchers[j++])) {
          matcher(unmatched, setMatched, context, xml)
        }

        if (seed) {
          // Reintegrate element matches to eliminate the need for sorting
          if (matchedCount > 0) {
            while (i--) {
              if (!(unmatched[i] || setMatched[i])) {
                setMatched[i] = pop.call(results)
              }
            }
          }

          // Discard index placeholder values to get only actual matches
          setMatched = condense(setMatched)
        }

        // Add matches to results
        push.apply(results, setMatched)

        // Seedless set matches succeeding multiple successful matchers stipulate sorting
        if (outermost && !seed && setMatched.length > 0 &&
					(matchedCount + setMatchers.length) > 1) {
          Sizzle.uniqueSort(results)
        }
      }

      // Override manipulation of globals by nested matchers
      if (outermost) {
        dirruns = dirrunsUnique
        outermostContext = contextBackup
      }

      return unmatched
    }

    return bySet
      ? markFunction(superMatcher)
      : superMatcher
  }

  compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
    let i
    const setMatchers = []
    const elementMatchers = []
    let cached = compilerCache[selector + ' ']

    if (!cached) {
      // Generate a function of recursive functions that can be used to check each element
      if (!match) {
        match = tokenize(selector)
      }
      i = match.length
      while (i--) {
        cached = matcherFromTokens(match[i])
        if (cached[expando]) {
          setMatchers.push(cached)
        } else {
          elementMatchers.push(cached)
        }
      }

      // Cache the compiled function
      cached = compilerCache(
        selector,
        matcherFromGroupMatchers(elementMatchers, setMatchers)
      )

      // Save selector and tokenization
      cached.selector = selector
    }
    return cached
  }

  /**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
  select = Sizzle.select = function (selector, context, results, seed) {
    let i; let tokens; let token; let type; let find
    const compiled = typeof selector === 'function' && selector
    const match = !seed && tokenize((selector = compiled.selector || selector))

    results = results || []

    // Try to minimize operations if there is only one selector in the list and no seed
    // (the latter of which guarantees us context)
    if (match.length === 1) {
      // Reduce context if the leading compound selector is an ID
      tokens = match[0] = match[0].slice(0)
      if (tokens.length > 2 && (token = tokens[0]).type === 'ID' &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
        context = (Expr.find.ID(token.matches[0]
          .replace(runescape, funescape), context) || [])[0]
        if (!context) {
          return results

          // Precompiled matchers will still verify ancestry, so step up a level
        } else if (compiled) {
          context = context.parentNode
        }

        selector = selector.slice(tokens.shift().value.length)
      }

      // Fetch a seed set for right-to-left matching
      i = matchExpr.needsContext.test(selector) ? 0 : tokens.length
      while (i--) {
        token = tokens[i]

        // Abort if we hit a combinator
        if (Expr.relative[(type = token.type)]) {
          break
        }
        if ((find = Expr.find[type])) {
          // Search, expanding context for leading sibling combinators
          if ((seed = find(
            token.matches[0].replace(runescape, funescape),
            rsibling.test(tokens[0].type) && testContext(context.parentNode) ||
						context
          ))) {
            // If seed is empty or no tokens remain, we can return early
            tokens.splice(i, 1)
            selector = seed.length && toSelector(tokens)
            if (!selector) {
              push.apply(results, seed)
              return results
            }

            break
          }
        }
      }
    }

    // Compile and execute a filtering function if one is not provided
    // Provide \`match\` to avoid retokenization if we modified the selector above
    (compiled || compile(selector, match))(
      seed,
      context,
      !documentIsHTML,
      results,
      !context || rsibling.test(selector) && testContext(context.parentNode) || context
    )
    return results
  }

  // One-time assignments

  // Sort stability
  support.sortStable = expando.split('').sort(sortOrder).join('') === expando

  // Support: Chrome 14-35+
  // Always assume duplicates if they aren't passed to the comparison function
  support.detectDuplicates = !!hasDuplicate

  // Initialize against the default document
  setDocument()

  // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
  // Detached nodes confoundingly follow *each other*
  support.sortDetached = assert(function (el) {
    // Should return 1, but returns 4 (following)
    return el.compareDocumentPosition(document.createElement('fieldset')) & 1
  })

  // Support: IE<8
  // Prevent attribute/property "interpolation"
  // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
  if (!assert(function (el) {
    el.innerHTML = "<a href='#'></a>"
    return el.firstChild.getAttribute('href') === '#'
  })) {
    addHandle('type|href|height|width', function (elem, name, isXML) {
      if (!isXML) {
        return elem.getAttribute(name, name.toLowerCase() === 'type' ? 1 : 2)
      }
    })
  }

  // Support: IE<9
  // Use defaultValue in place of getAttribute("value")
  if (!support.attributes || !assert(function (el) {
    el.innerHTML = '<input/>'
    el.firstChild.setAttribute('value', '')
    return el.firstChild.getAttribute('value') === ''
  })) {
    addHandle('value', function (elem, _name, isXML) {
      if (!isXML && elem.nodeName.toLowerCase() === 'input') {
        return elem.defaultValue
      }
    })
  }

  // Support: IE<9
  // Use getAttributeNode to fetch booleans when getAttribute lies
  if (!assert(function (el) {
    return el.getAttribute('disabled') == null
  })) {
    addHandle(booleans, function (elem, name, isXML) {
      let val
      if (!isXML) {
        return elem[name] === true ? name.toLowerCase()
          : (val = elem.getAttributeNode(name)) && val.specified
            ? val.value
            : null
      }
    })
  }

  return Sizzle
})(window)

  jQuery.find = Sizzle
  jQuery.expr = Sizzle.selectors

  // Deprecated
  jQuery.expr[':'] = jQuery.expr.pseudos
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort
  jQuery.text = Sizzle.getText
  jQuery.isXMLDoc = Sizzle.isXML
  jQuery.contains = Sizzle.contains
  jQuery.escapeSelector = Sizzle.escape

  const dir = function (elem, dir, until) {
    const matched = []
    const truncate = until !== undefined

    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break
        }
        matched.push(elem)
      }
    }
    return matched
  }

  const siblings = function (n, elem) {
    const matched = []

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n)
      }
    }

    return matched
  }

  const rneedsContext = jQuery.expr.match.needsContext

  function nodeName (elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
  };
  const rsingleTag = (/^<([a-z][^\\/\\0>:\\x20\\t\\r\\n\\f]*)[\\x20\\t\\r\\n\\f]*\\/?>(?:<\\/\\1>|)$/i)

  // Implement the identical functionality for filter and not
  function winnow (elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not
      })
    }

    // Single element
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return (elem === qualifier) !== not
      })
    }

    // Arraylike of elements (jQuery, arguments, Array)
    if (typeof qualifier !== 'string') {
      return jQuery.grep(elements, function (elem) {
        return (indexOf.call(qualifier, elem) > -1) !== not
      })
    }

    // Filtered directly for both simple and complex selectors
    return jQuery.filter(qualifier, elements, not)
  }

  jQuery.filter = function (expr, elems, not) {
    const elem = elems[0]

    if (not) {
      expr = ':not(' + expr + ')'
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : []
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1
    }))
  }

  jQuery.fn.extend({
    find: function (selector) {
      let i; let ret
      const len = this.length
      const self = this

      if (typeof selector !== 'string') {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true
            }
          }
        }))
      }

      ret = this.pushStack([])

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret)
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret
    },
    filter: function (selector) {
      return this.pushStack(winnow(this, selector || [], false))
    },
    not: function (selector) {
      return this.pushStack(winnow(this, selector || [], true))
    },
    is: function (selector) {
      return !!winnow(
        this,

        // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        typeof selector === 'string' && rneedsContext.test(selector)
          ? jQuery(selector)
          : selector || [],
        false
      ).length
    }
  })

  // Initialize a jQuery object

  // A central reference to the root jQuery(document)
  let rootjQuery

  // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  const rquickExpr = /^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]+))$/

  const init = jQuery.fn.init = function (selector, context, root) {
    let match, elem

    // HANDLE: $(""), $(null), $(undefined), $(false)
    if (!selector) {
      return this
    }

    // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)
    root = root || rootjQuery

    // Handle HTML strings
    if (typeof selector === 'string') {
      if (selector[0] === '<' &&
				selector[selector.length - 1] === '>' &&
				selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null]
      } else {
        match = rquickExpr.exec(selector)
      }

      // Match html or make sure no context is specified for #id
      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context

          // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present
          jQuery.merge(this, jQuery.parseHTML(
            match[1],
            context && context.nodeType ? context.ownerDocument || context : document,
            true
          ))

          // HANDLE: $(html, props)
          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match])

                // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match])
              }
            }
          }

          return this

          // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2])

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem
            this.length = 1
          }
          return this
        }

        // HANDLE: $(expr, $(...))
      } else if (!context || context.jquery) {
        return (context || root).find(selector)

        // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector)
      }

      // HANDLE: $(DOMElement)
    } else if (selector.nodeType) {
      this[0] = selector
      this.length = 1
      return this

      // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined
        ? root.ready(selector)

      // Execute immediately if ready is not present
        : selector(jQuery)
    }

    return jQuery.makeArray(selector, this)
  }

  // Give the init function the jQuery prototype for later instantiation
  init.prototype = jQuery.fn

  // Initialize central reference
  rootjQuery = jQuery(document)

  const rparentsprev = /^(?:parents|prev(?:Until|All))/

  // Methods guaranteed to produce a unique set when starting from a unique set
  const guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  }

  jQuery.fn.extend({
    has: function (target) {
      const targets = jQuery(target, this)
      const l = targets.length

      return this.filter(function () {
        let i = 0
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true
          }
        }
      })
    },

    closest: function (selectors, context) {
      let cur
      let i = 0
      const l = this.length
      const matched = []
      const targets = typeof selectors !== 'string' && jQuery(selectors)

      // Positional selectors never match, since there's no _selection_ context
      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets
              ? targets.index(cur) > -1

            // Don't pass non-elements to Sizzle
              : cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur)
              break
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched)
    },

    // Determine the position of an element within the set
    index: function (elem) {
      // No argument, return index in parent
      if (!elem) {
        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
      }

      // Index in selector
      if (typeof elem === 'string') {
        return indexOf.call(jQuery(elem), this[0])
      }

      // Locate the position of the desired element
      return indexOf.call(this,

        // If it receives a jQuery object, the first element is used
        elem.jquery ? elem[0] : elem
      )
    },

    add: function (selector, context) {
      return this.pushStack(
        jQuery.uniqueSort(
          jQuery.merge(this.get(), jQuery(selector, context))
        )
      )
    },

    addBack: function (selector) {
      return this.add(selector == null
        ? this.prevObject : this.prevObject.filter(selector)
      )
    }
  })

  function sibling (cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}
    return cur
  }

  jQuery.each({
    parent: function (elem) {
      const parent = elem.parentNode
      return parent && parent.nodeType !== 11 ? parent : null
    },
    parents: function (elem) {
      return dir(elem, 'parentNode')
    },
    parentsUntil: function (elem, _i, until) {
      return dir(elem, 'parentNode', until)
    },
    next: function (elem) {
      return sibling(elem, 'nextSibling')
    },
    prev: function (elem) {
      return sibling(elem, 'previousSibling')
    },
    nextAll: function (elem) {
      return dir(elem, 'nextSibling')
    },
    prevAll: function (elem) {
      return dir(elem, 'previousSibling')
    },
    nextUntil: function (elem, _i, until) {
      return dir(elem, 'nextSibling', until)
    },
    prevUntil: function (elem, _i, until) {
      return dir(elem, 'previousSibling', until)
    },
    siblings: function (elem) {
      return siblings((elem.parentNode || {}).firstChild, elem)
    },
    children: function (elem) {
      return siblings(elem.firstChild)
    },
    contents: function (elem) {
      if (elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no \`data\` attribute has an object
			// \`contentDocument\` with a \`null\` prototype.
			getProto(elem.contentDocument)) {
        return elem.contentDocument
      }

      // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.
      if (nodeName(elem, 'template')) {
        elem = elem.content || elem
      }

      return jQuery.merge([], elem.childNodes)
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      let matched = jQuery.map(this, fn, until)

      if (name.slice(-5) !== 'Until') {
        selector = until
      }

      if (selector && typeof selector === 'string') {
        matched = jQuery.filter(selector, matched)
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched)
        }

        // Reverse order for parents* and prev-derivatives
        if (rparentsprev.test(name)) {
          matched.reverse()
        }
      }

      return this.pushStack(matched)
    }
  })
  const rnothtmlwhite = (/[^\\x20\\t\\r\\n\\f]+/g)

  // Convert String-formatted options into Object-formatted ones
  function createOptions (options) {
    const object = {}
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true
    })
    return object
  }

  /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === 'string'
      ? createOptions(options)
      : jQuery.extend({}, options)

    let // Flag to know if list is currently firing
      firing

    // Last fire value for non-forgettable lists
    let memory

    // Flag to know if list was already fired
    let fired

    // Flag to prevent firing
    let locked

    // Actual callback list
    let list = []

    // Queue of execution data for repeatable lists
    let queue = []

    // Index of currently firing callback (modified by add/remove as needed)
    let firingIndex = -1

    // Fire callbacks
    const fire = function () {
      // Enforce single-firing
      locked = locked || options.once

      // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes
      fired = firing = true
      for (; queue.length; firingIndex = -1) {
        memory = queue.shift()
        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false &&
						options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length
            memory = false
          }
        }
      }

      // Forget the data if we're done with it
      if (!options.memory) {
        memory = false
      }

      firing = false

      // Clean up if we're done firing for good
      if (locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []

          // Otherwise, this object is spent
        } else {
          list = ''
        }
      }
    }

    // Actual Callbacks object
    var self = {

      // Add a callback or a collection of callbacks to the list
      add: function () {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1
            queue.push(memory)
          }

          (function add (args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg)
                }
              } else if (arg && arg.length && toType(arg) !== 'string') {
                // Inspect recursively
                add(arg)
              }
            })
          })(arguments)

          if (memory && !firing) {
            fire()
          }
        }
        return this
      },

      // Remove a callback from the list
      remove: function () {
        jQuery.each(arguments, function (_, arg) {
          let index
          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1)

            // Handle firing indexes
            if (index <= firingIndex) {
              firingIndex--
            }
          }
        })
        return this
      },

      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function (fn) {
        return fn
          ? jQuery.inArray(fn, list) > -1
          : list.length > 0
      },

      // Remove all callbacks from the list
      empty: function () {
        if (list) {
          list = []
        }
        return this
      },

      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function () {
        locked = queue = []
        list = memory = ''
        return this
      },
      disabled: function () {
        return !list
      },

      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function () {
        locked = queue = []
        if (!memory && !firing) {
          list = memory = ''
        }
        return this
      },
      locked: function () {
        return !!locked
      },

      // Call all callbacks with the given context and arguments
      fireWith: function (context, args) {
        if (!locked) {
          args = args || []
          args = [context, args.slice ? args.slice() : args]
          queue.push(args)
          if (!firing) {
            fire()
          }
        }
        return this
      },

      // Call all the callbacks with the given arguments
      fire: function () {
        self.fireWith(this, arguments)
        return this
      },

      // To know if the callbacks have already been called at least once
      fired: function () {
        return !!fired
      }
    }

    return self
  }

  function Identity (v) {
    return v
  }
  function Thrower (ex) {
    throw ex
  }

  function adoptValue (value, resolve, reject, noValue) {
    let method

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction((method = value.promise))) {
        method.call(value).done(resolve).fail(reject)

        // Other thenables
      } else if (value && isFunction((method = value.then))) {
        method.call(value, resolve, reject)

        // Other non-thenables
      } else {
        // Control \`resolve\` arguments by letting Array#slice cast boolean \`noValue\` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue))
      }

      // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.
    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value])
    }
  }

  jQuery.extend({

    Deferred: function (func) {
      const tuples = [

        // action, add listener, callbacks,
        // ... .then handlers, argument index, [final state]
        ['notify', 'progress', jQuery.Callbacks('memory'),
          jQuery.Callbacks('memory'), 2],
        ['resolve', 'done', jQuery.Callbacks('once memory'),
          jQuery.Callbacks('once memory'), 0, 'resolved'],
        ['reject', 'fail', jQuery.Callbacks('once memory'),
          jQuery.Callbacks('once memory'), 1, 'rejected']
      ]
      let state = 'pending'
      var promise = {
        state: function () {
          return state
        },
        always: function () {
          deferred.done(arguments).fail(arguments)
          return this
        },
        catch: function (fn) {
          return promise.then(null, fn)
        },

        // Keep pipe for back-compat
        pipe: function (/* fnDone, fnFail, fnProgress */) {
          let fns = arguments

          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (_i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              const fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]

              // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })
              deferred[tuple[1]](function () {
                const returned = fn && fn.apply(this, arguments)
                if (returned && isFunction(returned.promise)) {
                  returned.promise()
                    .progress(newDefer.notify)
                    .done(newDefer.resolve)
                    .fail(newDefer.reject)
                } else {
                  newDefer[tuple[0] + 'With'](
                    this,
                    fn ? [returned] : arguments
                  )
                }
              })
            })
            fns = null
          }).promise()
        },
        then: function (onFulfilled, onRejected, onProgress) {
          let maxDepth = 0
          function resolve (depth, deferred, handler, special) {
            return function () {
              let that = this
              let args = arguments
              const mightThrow = function () {
                let returned, then

                // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts
                if (depth < maxDepth) {
                  return
                }

                returned = handler.apply(that, args)

                // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48
                if (returned === deferred.promise()) {
                  throw new TypeError('Thenable self-resolution')
                }

                // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve \`then\` only once
                then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										(typeof returned === 'object' ||
											typeof returned === 'function') &&
										returned.then

                // Handle a returned thenable
                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(
                      returned,
                      resolve(maxDepth, deferred, Identity, special),
                      resolve(maxDepth, deferred, Thrower, special)
                    )

                    // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++

                    then.call(
                      returned,
                      resolve(maxDepth, deferred, Identity, special),
                      resolve(maxDepth, deferred, Thrower, special),
                      resolve(maxDepth, deferred, Identity,
                        deferred.notifyWith)
                    )
                  }

                  // Handle all other returned values
                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined
                    args = [returned]
                  }

                  // Process the value(s)
                  // Default process is resolve
                  (special || deferred.resolveWith)(that, args)
                }
              }

              // Only normal processors (resolve) catch and reject exceptions
              var process = special
                ? mightThrow
                : function () {
                  try {
                    mightThrow()
                  } catch (e) {
                    if (jQuery.Deferred.exceptionHook) {
                      jQuery.Deferred.exceptionHook(e,
                        process.stackTrace)
                    }

                    // Support: Promises/A+ section 2.3.3.3.4.1
                    // https://promisesaplus.com/#point-61
                    // Ignore post-resolution exceptions
                    if (depth + 1 >= maxDepth) {
                      // Only substitute handlers pass on context
                      // and multiple values (non-spec behavior)
                      if (handler !== Thrower) {
                        that = undefined
                        args = [e]
                      }

                      deferred.rejectWith(that, args)
                    }
                  }
                }

              // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors
              if (depth) {
                process()
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook()
                }
                window.setTimeout(process)
              }
            }
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(
              resolve(
                0,
                newDefer,
                isFunction(onProgress)
                  ? onProgress
                  : Identity,
                newDefer.notifyWith
              )
            )

            // fulfilled_handlers.add( ... )
            tuples[1][3].add(
              resolve(
                0,
                newDefer,
                isFunction(onFulfilled)
                  ? onFulfilled
                  : Identity
              )
            )

            // rejected_handlers.add( ... )
            tuples[2][3].add(
              resolve(
                0,
                newDefer,
                isFunction(onRejected)
                  ? onRejected
                  : Thrower
              )
            )
          }).promise()
        },

        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function (obj) {
          return obj != null ? jQuery.extend(obj, promise) : promise
        }
      }
      var deferred = {}

      // Add list-specific methods
      jQuery.each(tuples, function (i, tuple) {
        const list = tuple[2]
        const stateString = tuple[5]

        // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add
        promise[tuple[1]] = list.add

        // Handle state
        if (stateString) {
          list.add(
            function () {
              // state = "resolved" (i.e., fulfilled)
              // state = "rejected"
              state = stateString
            },

            // rejected_callbacks.disable
            // fulfilled_callbacks.disable
            tuples[3 - i][2].disable,

            // rejected_handlers.disable
            // fulfilled_handlers.disable
            tuples[3 - i][3].disable,

            // progress_callbacks.lock
            tuples[0][2].lock,

            // progress_handlers.lock
            tuples[0][3].lock
          )
        }

        // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire
        list.add(tuple[3].fire)

        // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }
        deferred[tuple[0]] = function () {
          deferred[tuple[0] + 'With'](this === deferred ? undefined : this, arguments)
          return this
        }

        // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith
        deferred[tuple[0] + 'With'] = list.fireWith
      })

      // Make the deferred a promise
      promise.promise(deferred)

      // Call given func if any
      if (func) {
        func.call(deferred, deferred)
      }

      // All done!
      return deferred
    },

    // Deferred helper
    when: function (singleValue) {
      let

        // count of uncompleted subordinates
        remaining = arguments.length

      // count of unprocessed arguments
      let i = remaining

      // subordinate fulfillment data
      const resolveContexts = Array(i)
      const resolveValues = slice.call(arguments)

      // the master Deferred
      const master = jQuery.Deferred()

      // subordinate callback factory
      const updateFunc = function (i) {
        return function (value) {
          resolveContexts[i] = this
          resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value
          if (!(--remaining)) {
            master.resolveWith(resolveContexts, resolveValues)
          }
        }
      }

      // Single- and empty arguments are adopted like Promise.resolve
      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject,
          !remaining)

        // Use .then() to unwrap secondary thenables (cf. gh-3000)
        if (master.state() === 'pending' ||
				isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then()
        }
      }

      // Multiple arguments are aggregated like Promise.all array elements
      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject)
      }

      return master.promise()
    }
  })

  // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.
  const rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn('jQuery.Deferred exception: ' + error.message, error.stack, stack)
    }
  }

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error
    })
  }

  // The deferred used on DOM ready
  const readyList = jQuery.Deferred()

  jQuery.fn.ready = function (fn) {
    readyList
      .then(fn)

    // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
      .catch(function (error) {
        jQuery.readyException(error)
      })

    return this
  }

  jQuery.extend({

    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,

    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,

    // Handle when the DOM is ready
    ready: function (wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return
      }

      // Remember that the DOM is ready
      jQuery.isReady = true

      // If a normal DOM Ready event fired, decrement, and wait if need be
      if (wait !== true && --jQuery.readyWait > 0) {
        return
      }

      // If there are functions bound, to execute
      readyList.resolveWith(document, [jQuery])
    }
  })

  jQuery.ready.then = readyList.then

  // The ready event handler and self cleanup method
  function completed () {
    document.removeEventListener('DOMContentLoaded', completed)
    window.removeEventListener('load', completed)
    jQuery.ready()
  }

  // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon
  if (document.readyState === 'complete' ||
	(document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready)
  } else {
    // Use the handy event callback
    document.addEventListener('DOMContentLoaded', completed)

    // A fallback to window.onload, that will always work
    window.addEventListener('load', completed)
  }

  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
    let i = 0
    const len = elems.length
    let bulk = key == null

    // Sets many values
    if (toType(key) === 'object') {
      chainable = true
      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw)
      }

      // Sets one value
    } else if (value !== undefined) {
      chainable = true

      if (!isFunction(value)) {
        raw = true
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value)
          fn = null

          // ...except when executing function values
        } else {
          bulk = fn
          fn = function (elem, _key, value) {
            return bulk.call(jQuery(elem), value)
          }
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(
            elems[i], key, raw
              ? value
              : value.call(elems[i], i, fn(elems[i], key))
          )
        }
      }
    }

    if (chainable) {
      return elems
    }

    // Gets
    if (bulk) {
      return fn.call(elems)
    }

    return len ? fn(elems[0], key) : emptyGet
  }

  // Matches dashed string for camelizing
  const rmsPrefix = /^-ms-/
  const rdashAlpha = /-([a-z])/g

  // Used by camelCase as callback to replace()
  function fcamelCase (_all, letter) {
    return letter.toUpperCase()
  }

  // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)
  function camelCase (string) {
    return string.replace(rmsPrefix, 'ms-').replace(rdashAlpha, fcamelCase)
  }
  const acceptData = function (owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType)
  }

  function Data () {
    this.expando = jQuery.expando + Data.uid++
  }

  Data.uid = 1

  Data.prototype = {

    cache: function (owner) {
      // Check if the owner object already has a cache
      let value = owner[this.expando]

      // If not, create one
      if (!value) {
        value = Object.create(null)

        // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.
        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value

            // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            })
          }
        }
      }

      return value
    },
    set: function (owner, data, value) {
      let prop
      const cache = this.cache(owner)

      // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)
      if (typeof data === 'string') {
        cache[camelCase(data)] = value

        // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop]
        }
      }
      return cache
    },
    get: function (owner, key) {
      return key === undefined
        ? this.cache(owner)

      // Always use camelCase key (gh-2257)
        : owner[this.expando] && owner[this.expando][camelCase(key)]
    },
    access: function (owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined ||
				((key && typeof key === 'string') && value === undefined)) {
        return this.get(owner, key)
      }

      // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //
      this.set(owner, key, value)

      // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]
      return value !== undefined ? value : key
    },
    remove: function (owner, key) {
      let i
      const cache = owner[this.expando]

      if (cache === undefined) {
        return
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase)
        } else {
          key = camelCase(key)

          // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace
          key = key in cache
            ? [key]
            : (key.match(rnothtmlwhite) || [])
        }

        i = key.length

        while (i--) {
          delete cache[key[i]]
        }
      }

      // Remove the expando if there's no more data
      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined
        } else {
          delete owner[this.expando]
        }
      }
    },
    hasData: function (owner) {
      const cache = owner[this.expando]
      return cache !== undefined && !jQuery.isEmptyObject(cache)
    }
  }
  const dataPriv = new Data()

  const dataUser = new Data()

  //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  const rbrace = /^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/
  const rmultiDash = /[A-Z]/g

  function getData (data) {
    if (data === 'true') {
      return true
    }

    if (data === 'false') {
      return false
    }

    if (data === 'null') {
      return null
    }

    // Only convert to a number if it doesn't change the string
    if (data === +data + '') {
      return +data
    }

    if (rbrace.test(data)) {
      return JSON.parse(data)
    }

    return data
  }

  function dataAttr (elem, key, data) {
    let name

    // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute
    if (data === undefined && elem.nodeType === 1) {
      name = 'data-' + key.replace(rmultiDash, '-$&').toLowerCase()
      data = elem.getAttribute(name)

      if (typeof data === 'string') {
        try {
          data = getData(data)
        } catch (e) {}

        // Make sure we set the data so it isn't changed later
        dataUser.set(elem, key, data)
      } else {
        data = undefined
      }
    }
    return data
  }

  jQuery.extend({
    hasData: function (elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem)
    },

    data: function (elem, name, data) {
      return dataUser.access(elem, name, data)
    },

    removeData: function (elem, name) {
      dataUser.remove(elem, name)
    },

    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function (elem, name, data) {
      return dataPriv.access(elem, name, data)
    },

    _removeData: function (elem, name) {
      dataPriv.remove(elem, name)
    }
  })

  jQuery.fn.extend({
    data: function (key, value) {
      let i; let name; let data
      const elem = this[0]
      const attrs = elem && elem.attributes

      // Gets all values
      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem)

          if (elem.nodeType === 1 && !dataPriv.get(elem, 'hasDataAttrs')) {
            i = attrs.length
            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name
                if (name.indexOf('data-') === 0) {
                  name = camelCase(name.slice(5))
                  dataAttr(elem, name, data[name])
                }
              }
            }
            dataPriv.set(elem, 'hasDataAttrs', true)
          }
        }

        return data
      }

      // Sets multiple values
      if (typeof key === 'object') {
        return this.each(function () {
          dataUser.set(this, key)
        })
      }

      return access(this, function (value) {
        let data

        // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // \`value\` parameter was not undefined. An empty jQuery object
        // will result in \`undefined\` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.
        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key)
          if (data !== undefined) {
            return data
          }

          // Attempt to "discover" the data in
          // HTML5 custom data-* attrs
          data = dataAttr(elem, key)
          if (data !== undefined) {
            return data
          }

          // We tried really hard, but the data doesn't exist.
          return
        }

        // Set the data...
        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value)
        })
      }, null, value, arguments.length > 1, null, true)
    },

    removeData: function (key) {
      return this.each(function () {
        dataUser.remove(this, key)
      })
    }
  })

  jQuery.extend({
    queue: function (elem, type, data) {
      let queue

      if (elem) {
        type = (type || 'fx') + 'queue'
        queue = dataPriv.get(elem, type)

        // Speed up dequeue by getting out quickly if this is just a lookup
        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data))
          } else {
            queue.push(data)
          }
        }
        return queue || []
      }
    },

    dequeue: function (elem, type) {
      type = type || 'fx'

      const queue = jQuery.queue(elem, type)
      let startLength = queue.length
      let fn = queue.shift()
      const hooks = jQuery._queueHooks(elem, type)
      const next = function () {
        jQuery.dequeue(elem, type)
      }

      // If the fx queue is dequeued, always remove the progress sentinel
      if (fn === 'inprogress') {
        fn = queue.shift()
        startLength--
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === 'fx') {
          queue.unshift('inprogress')
        }

        // Clear up the last queue stop function
        delete hooks.stop
        fn.call(elem, next, hooks)
      }

      if (!startLength && hooks) {
        hooks.empty.fire()
      }
    },

    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function (elem, type) {
      const key = type + 'queueHooks'
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks('once memory').add(function () {
          dataPriv.remove(elem, [type + 'queue', key])
        })
      })
    }
  })

  jQuery.fn.extend({
    queue: function (type, data) {
      let setter = 2

      if (typeof type !== 'string') {
        data = type
        type = 'fx'
        setter--
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type)
      }

      return data === undefined
        ? this
        : this.each(function () {
          const queue = jQuery.queue(this, type, data)

          // Ensure a hooks for this queue
          jQuery._queueHooks(this, type)

          if (type === 'fx' && queue[0] !== 'inprogress') {
            jQuery.dequeue(this, type)
          }
        })
    },
    dequeue: function (type) {
      return this.each(function () {
        jQuery.dequeue(this, type)
      })
    },
    clearQueue: function (type) {
      return this.queue(type || 'fx', [])
    },

    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function (type, obj) {
      let tmp
      let count = 1
      const defer = jQuery.Deferred()
      const elements = this
      let i = this.length
      const resolve = function () {
        if (!(--count)) {
          defer.resolveWith(elements, [elements])
        }
      }

      if (typeof type !== 'string') {
        obj = type
        type = undefined
      }
      type = type || 'fx'

      while (i--) {
        tmp = dataPriv.get(elements[i], type + 'queueHooks')
        if (tmp && tmp.empty) {
          count++
          tmp.empty.add(resolve)
        }
      }
      resolve()
      return defer.promise(obj)
    }
  })
  const pnum = (/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/).source

  const rcssNum = new RegExp('^(?:([+-])=|)(' + pnum + ')([a-z%]*)$', 'i')

  const cssExpand = ['Top', 'Right', 'Bottom', 'Left']

  const documentElement = document.documentElement

  let isAttached = function (elem) {
    return jQuery.contains(elem.ownerDocument, elem)
  }
  const composed = { composed: true }

  // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support \`attachShadow\` but not \`getRootNode\`,
  // leading to errors. We need to check for \`getRootNode\`.
  if (documentElement.getRootNode) {
    isAttached = function (elem) {
      return jQuery.contains(elem.ownerDocument, elem) ||
				elem.getRootNode(composed) === elem.ownerDocument
    }
  }
  const isHiddenWithinTree = function (elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem

    // Inline style trumps all
    return elem.style.display === 'none' ||
			elem.style.display === '' &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached(elem) &&

			jQuery.css(elem, 'display') === 'none'
  }

  function adjustCSS (elem, prop, valueParts, tween) {
    let adjusted; let scale
    let maxIterations = 20
    const currentValue = tween
      ? function () {
        return tween.cur()
      }
      : function () {
        return jQuery.css(elem, prop, '')
      }
    let initial = currentValue()
    let unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? '' : 'px')

    // Starting value computation is required for potential unit mismatches
    let initialInUnit = elem.nodeType &&
			(jQuery.cssNumber[prop] || unit !== 'px' && +initial) &&
			rcssNum.exec(jQuery.css(elem, prop))

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2

      // Trust units reported by jQuery.css
      unit = unit || initialInUnit[3]

      // Iteratively approximate from a nonzero starting point
      initialInUnit = +initial || 1

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit)
        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0
        }
        initialInUnit = initialInUnit / scale
      }

      initialInUnit = initialInUnit * 2
      jQuery.style(elem, prop, initialInUnit + unit)

      // Make sure we update the tween properties later on
      valueParts = valueParts || []
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0

      // Apply relative offset (+=/-=) if specified
      adjusted = valueParts[1]
        ? initialInUnit + (valueParts[1] + 1) * valueParts[2]
        : +valueParts[2]
      if (tween) {
        tween.unit = unit
        tween.start = initialInUnit
        tween.end = adjusted
      }
    }
    return adjusted
  }

  const defaultDisplayMap = {}

  function getDefaultDisplay (elem) {
    let temp
    const doc = elem.ownerDocument
    const nodeName = elem.nodeName
    let display = defaultDisplayMap[nodeName]

    if (display) {
      return display
    }

    temp = doc.body.appendChild(doc.createElement(nodeName))
    display = jQuery.css(temp, 'display')

    temp.parentNode.removeChild(temp)

    if (display === 'none') {
      display = 'block'
    }
    defaultDisplayMap[nodeName] = display

    return display
  }

  function showHide (elements, show) {
    let display; let elem
    const values = []
    let index = 0
    const length = elements.length

    // Determine new display value for elements that need to change
    for (; index < length; index++) {
      elem = elements[index]
      if (!elem.style) {
        continue
      }

      display = elem.style.display
      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === 'none') {
          values[index] = dataPriv.get(elem, 'display') || null
          if (!values[index]) {
            elem.style.display = ''
          }
        }
        if (elem.style.display === '' && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem)
        }
      } else {
        if (display !== 'none') {
          values[index] = 'none'

          // Remember what we're overwriting
          dataPriv.set(elem, 'display', display)
        }
      }
    }

    // Set the display of the elements in a second loop to avoid constant reflow
    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index]
      }
    }

    return elements
  }

  jQuery.fn.extend({
    show: function () {
      return showHide(this, true)
    },
    hide: function () {
      return showHide(this)
    },
    toggle: function (state) {
      if (typeof state === 'boolean') {
        return state ? this.show() : this.hide()
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show()
        } else {
          jQuery(this).hide()
        }
      })
    }
  })
  const rcheckableType = (/^(?:checkbox|radio)$/i)

  const rtagName = (/<([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]*)/i)

  const rscriptType = (/^$|^module$|\\/(?:java|ecma)script/i);

  (function () {
    const fragment = document.createDocumentFragment()
    const div = fragment.appendChild(document.createElement('div'))
    const input = document.createElement('input')

    // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // \`name\` and \`type\` must use .setAttribute for WWA (#14901)
    input.setAttribute('type', 'radio')
    input.setAttribute('checked', 'checked')
    input.setAttribute('name', 't')

    div.appendChild(input)

    // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked

    // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned
    div.innerHTML = '<textarea>x</textarea>'
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue

    // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.
    div.innerHTML = '<option></option>'
    support.option = !!div.lastChild
  })()

  // We have to close these tags to support XHTML (#13200)
  const wrapMap = {

    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],

    _default: [0, '', '']
  }

  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead
  wrapMap.th = wrapMap.td

  // Support: IE <=9 only
  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", '</select>']
  }

  function getAll (context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    let ret

    if (typeof context.getElementsByTagName !== 'undefined') {
      ret = context.getElementsByTagName(tag || '*')
    } else if (typeof context.querySelectorAll !== 'undefined') {
      ret = context.querySelectorAll(tag || '*')
    } else {
      ret = []
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret)
    }

    return ret
  }

  // Mark scripts as having already been evaluated
  function setGlobalEval (elems, refElements) {
    let i = 0
    const l = elems.length

    for (; i < l; i++) {
      dataPriv.set(
        elems[i],
        'globalEval',
        !refElements || dataPriv.get(refElements[i], 'globalEval')
      )
    }
  }

  const rhtml = /<|&#?\\w+;/

  function buildFragment (elems, context, scripts, selection, ignored) {
    let elem; let tmp; let tag; let wrap; let attached; let j
    const fragment = context.createDocumentFragment()
    const nodes = []
    let i = 0
    const l = elems.length

    for (; i < l; i++) {
      elem = elems[i]

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === 'object') {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem)

          // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem))

          // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement('div'))

          // Deserialize a standard representation
          tag = (rtagName.exec(elem) || ['', ''])[1].toLowerCase()
          wrap = wrapMap[tag] || wrapMap._default
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]

          // Descend through wrappers to the right content
          j = wrap[0]
          while (j--) {
            tmp = tmp.lastChild
          }

          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, tmp.childNodes)

          // Remember the top-level container
          tmp = fragment.firstChild

          // Ensure the created nodes are orphaned (#12392)
          tmp.textContent = ''
        }
      }
    }

    // Remove wrapper from fragment
    fragment.textContent = ''

    i = 0
    while ((elem = nodes[i++])) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem)
        }
        continue
      }

      attached = isAttached(elem)

      // Append to fragment
      tmp = getAll(fragment.appendChild(elem), 'script')

      // Preserve script evaluation history
      if (attached) {
        setGlobalEval(tmp)
      }

      // Capture executables
      if (scripts) {
        j = 0
        while ((elem = tmp[j++])) {
          if (rscriptType.test(elem.type || '')) {
            scripts.push(elem)
          }
        }
      }
    }

    return fragment
  }

  const
    rkeyEvent = /^key/
  const rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
  const rtypenamespace = /^([^.]*)(?:\\.(.+)|)/

  function returnTrue () {
    return true
  }

  function returnFalse () {
    return false
  }

  // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).
  function expectSync (elem, type) {
    return (elem === safeActiveElement()) === (type === 'focus')
  }

  // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393
  function safeActiveElement () {
    try {
      return document.activeElement
    } catch (err) { }
  }

  function on (elem, types, selector, data, fn, one) {
    let origFn, type

    // Types can be a map of types/handlers
    if (typeof types === 'object') {
      // ( types-Object, selector, data )
      if (typeof selector !== 'string') {
        // ( types-Object, data )
        data = data || selector
        selector = undefined
      }
      for (type in types) {
        on(elem, type, selector, data, types[type], one)
      }
      return elem
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector
      data = selector = undefined
    } else if (fn == null) {
      if (typeof selector === 'string') {
        // ( types, selector, fn )
        fn = data
        data = undefined
      } else {
        // ( types, data, fn )
        fn = data
        data = selector
        selector = undefined
      }
    }
    if (fn === false) {
      fn = returnFalse
    } else if (!fn) {
      return elem
    }

    if (one === 1) {
      origFn = fn
      fn = function (event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event)
        return origFn.apply(this, arguments)
      }

      // Use same guid so caller can remove using origFn
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)
    }
    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector)
    })
  }

  /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
  jQuery.event = {

    global: {},

    add: function (elem, types, handler, data, selector) {
      let handleObjIn; let eventHandle; let tmp
      let events; let t; let handleObj
      let special; let handlers; let type; let namespaces; let origType
      const elemData = dataPriv.get(elem)

      // Only attach events to objects that accept data
      if (!acceptData(elem)) {
        return
      }

      // Caller can pass in an object of custom data in lieu of the handler
      if (handler.handler) {
        handleObjIn = handler
        handler = handleObjIn.handler
        selector = handleObjIn.selector
      }

      // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)
      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector)
      }

      // Make sure that the handler has a unique ID, used to find/remove it later
      if (!handler.guid) {
        handler.guid = jQuery.guid++
      }

      // Init the element's event structure and main handler, if this is the first
      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null)
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== 'undefined' && jQuery.event.triggered !== e.type
            ? jQuery.event.dispatch.apply(elem, arguments) : undefined
        }
      }

      // Handle multiple events separated by a space
      types = (types || '').match(rnothtmlwhite) || ['']
      t = types.length
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || []
        type = origType = tmp[1]
        namespaces = (tmp[2] || '').split('.').sort()

        // There *must* be a type, no attaching namespace-only handlers
        if (!type) {
          continue
        }

        // If event changes its type, use the special event handlers for the changed type
        special = jQuery.event.special[type] || {}

        // If selector defined, determine special event api type, otherwise given type
        type = (selector ? special.delegateType : special.bindType) || type

        // Update special based on newly reset type
        special = jQuery.event.special[type] || {}

        // handleObj is passed to all event handlers
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join('.')
        }, handleObjIn)

        // Init the event handler queue if we're the first
        if (!(handlers = events[type])) {
          handlers = events[type] = []
          handlers.delegateCount = 0

          // Only use addEventListener if the special events handler returns false
          if (!special.setup ||
					special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle)
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj)

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid
          }
        }

        // Add to the element's handler list, delegates in front
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj)
        } else {
          handlers.push(handleObj)
        }

        // Keep track of which events have ever been used, for event optimization
        jQuery.event.global[type] = true
      }
    },

    // Detach an event or set of events from an element
    remove: function (elem, types, handler, selector, mappedTypes) {
      let j; let origCount; let tmp
      let events; let t; let handleObj
      let special; let handlers; let type; let namespaces; let origType
      const elemData = dataPriv.hasData(elem) && dataPriv.get(elem)

      if (!elemData || !(events = elemData.events)) {
        return
      }

      // Once for each type.namespace in types; type may be omitted
      types = (types || '').match(rnothtmlwhite) || ['']
      t = types.length
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || []
        type = origType = tmp[1]
        namespaces = (tmp[2] || '').split('.').sort()

        // Unbind all events (on this namespace, if provided) for the element
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true)
          }
          continue
        }

        special = jQuery.event.special[type] || {}
        type = (selector ? special.delegateType : special.bindType) || type
        handlers = events[type] || []
        tmp = tmp[2] &&
				new RegExp('(^|\\\\.)' + namespaces.join('\\\\.(?:.*\\\\.|)') + '(\\\\.|$)')

        // Remove matching events
        origCount = j = handlers.length
        while (j--) {
          handleObj = handlers[j]

          if ((mappedTypes || origType === handleObj.origType) &&
					(!handler || handler.guid === handleObj.guid) &&
					(!tmp || tmp.test(handleObj.namespace)) &&
					(!selector || selector === handleObj.selector ||
						selector === '**' && handleObj.selector)) {
            handlers.splice(j, 1)

            if (handleObj.selector) {
              handlers.delegateCount--
            }
            if (special.remove) {
              special.remove.call(elem, handleObj)
            }
          }
        }

        // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)
        if (origCount && !handlers.length) {
          if (!special.teardown ||
					special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle)
          }

          delete events[type]
        }
      }

      // Remove data and the expando if it's no longer used
      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, 'handle events')
      }
    },

    dispatch: function (nativeEvent) {
      let i; let j; let ret; let matched; let handleObj; let handlerQueue
      const args = new Array(arguments.length)

      // Make a writable jQuery.Event from the native event object
      const event = jQuery.event.fix(nativeEvent)

      const handlers = (
        dataPriv.get(this, 'events') || Object.create(null)
      )[event.type] || []
      const special = jQuery.event.special[event.type] || {}

      // Use the fix-ed jQuery.Event rather than the (read-only) native event
      args[0] = event

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i]
      }

      event.delegateTarget = this

      // Call the preDispatch hook for the mapped type, and let it bail if desired
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return
      }

      // Determine handlers
      handlerQueue = jQuery.event.handlers.call(this, event, handlers)

      // Run delegates first; they may want to stop propagation beneath us
      i = 0
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem

        j = 0
        while ((handleObj = matched.handlers[j++]) &&
				!event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj
            event.data = handleObj.data

            ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||
						handleObj.handler).apply(matched.elem, args)

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault()
                event.stopPropagation()
              }
            }
          }
        }
      }

      // Call the postDispatch hook for the mapped type
      if (special.postDispatch) {
        special.postDispatch.call(this, event)
      }

      return event.result
    },

    handlers: function (event, handlers) {
      let i; let handleObj; let sel; let matchedHandlers; let matchedSelectors
      const handlerQueue = []
      const delegateCount = handlers.delegateCount
      let cur = event.target

      // Find delegate handlers
      if (delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have \`button\` -1 (gh-2343)
			!(event.type === 'click' && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === 'click' && cur.disabled === true)) {
            matchedHandlers = []
            matchedSelectors = {}
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i]

              // Don't conflict with Object.prototype properties (#13203)
              sel = handleObj.selector + ' '

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext
                  ? jQuery(sel, this).index(cur) > -1
                  : jQuery.find(sel, this, null, [cur]).length
              }
              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj)
              }
            }
            if (matchedHandlers.length) {
              handlerQueue.push({ elem: cur, handlers: matchedHandlers })
            }
          }
        }
      }

      // Add the remaining (directly-bound) handlers
      cur = this
      if (delegateCount < handlers.length) {
        handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) })
      }

      return handlerQueue
    },

    addProp: function (name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,

        get: isFunction(hook)
          ? function () {
            if (this.originalEvent) {
              return hook(this.originalEvent)
            }
          }
          : function () {
            if (this.originalEvent) {
              return this.originalEvent[name]
            }
          },

        set: function (value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          })
        }
      })
    },

    fix: function (originalEvent) {
      return originalEvent[jQuery.expando]
        ? originalEvent
        : new jQuery.Event(originalEvent)
    },

    special: {
      load: {

        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {

        // Utilize native event to ensure correct state for checkable inputs
        setup: function (data) {
          // For mutual compressibility with _default, replace \`this\` access with a local var.
          // \`|| data\` is dead code meant only to preserve the variable through minification.
          const el = this || data

          // Claim the first handler
          if (rcheckableType.test(el.type) &&
					el.click && nodeName(el, 'input')) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, 'click', returnTrue)
          }

          // Return false to allow normal processing in the caller
          return false
        },
        trigger: function (data) {
          // For mutual compressibility with _default, replace \`this\` access with a local var.
          // \`|| data\` is dead code meant only to preserve the variable through minification.
          const el = this || data

          // Force setup before triggering a click
          if (rcheckableType.test(el.type) &&
					el.click && nodeName(el, 'input')) {
            leverageNative(el, 'click')
          }

          // Return non-false to allow normal event-path propagation
          return true
        },

        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function (event) {
          const target = event.target
          return rcheckableType.test(target.type) &&
					target.click && nodeName(target, 'input') &&
					dataPriv.get(target, 'click') ||
					nodeName(target, 'a')
        }
      },

      beforeunload: {
        postDispatch: function (event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result
          }
        }
      }
    }
  }

  // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.
  function leverageNative (el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue)
      }
      return
    }

    // Register the controller as a special universal handler for all event namespaces
    dataPriv.set(el, type, false)
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function (event) {
        let notAsync; let result
        let saved = dataPriv.get(this, type)

        if ((event.isTrigger & 1) && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = slice.call(arguments)
            dataPriv.set(this, type, saved)

            // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous
            notAsync = expectSync(this, type)
            this[type]()
            result = dataPriv.get(this, type)
            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false)
            } else {
              result = {}
            }
            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation()
              event.preventDefault()
              return result.value
            }

            // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to \`.trigger()\` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.
          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation()
          }

          // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments
        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger(

              // Support: IE <=9 - 11+
              // Extend with the prototype to reset the above stopImmediatePropagation()
              jQuery.extend(saved[0], jQuery.Event.prototype),
              saved.slice(1),
              this
            )
          })

          // Abort handling of the native event
          event.stopImmediatePropagation()
        }
      }
    })
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle)
    }
  }

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props)
    }

    // Event object
    if (src && src.type) {
      this.originalEvent = src
      this.type = src.type

      // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.
      this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false
        ? returnTrue
        : returnFalse

      // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)
      this.target = (src.target && src.target.nodeType === 3)
        ? src.target.parentNode
        : src.target

      this.currentTarget = src.currentTarget
      this.relatedTarget = src.relatedTarget

      // Event type
    } else {
      this.type = src
    }

    // Put explicitly provided properties onto the event object
    if (props) {
      jQuery.extend(this, props)
    }

    // Create a timestamp if incoming event doesn't have one
    this.timeStamp = src && src.timeStamp || Date.now()

    // Mark it as fixed
    this[jQuery.expando] = true
  }

  // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,

    preventDefault: function () {
      const e = this.originalEvent

      this.isDefaultPrevented = returnTrue

      if (e && !this.isSimulated) {
        e.preventDefault()
      }
    },
    stopPropagation: function () {
      const e = this.originalEvent

      this.isPropagationStopped = returnTrue

      if (e && !this.isSimulated) {
        e.stopPropagation()
      }
    },
    stopImmediatePropagation: function () {
      const e = this.originalEvent

      this.isImmediatePropagationStopped = returnTrue

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation()
      }

      this.stopPropagation()
    }
  }

  // Includes all common event props including KeyEvent and MouseEvent specific props
  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    char: true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,

    which: function (event) {
      const button = event.button

      // Add which for key events
      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode
      }

      // Add which for click: 1 === left; 2 === middle; 3 === right
      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1
        }

        if (button & 2) {
          return 3
        }

        if (button & 4) {
          return 2
        }

        return 0
      }

      return event.which
    }
  }, jQuery.event.addProp)

  jQuery.each({ focus: 'focusin', blur: 'focusout' }, function (type, delegateType) {
    jQuery.event.special[type] = {

      // Utilize native event if possible so blur/focus sequence is correct
      setup: function () {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync)

        // Return false to allow normal processing in the caller
        return false
      },
      trigger: function () {
        // Force setup before trigger
        leverageNative(this, type)

        // Return non-false to allow normal event-path propagation
        return true
      },

      delegateType: delegateType
    }
  })

  // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).
  jQuery.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,

      handle: function (event) {
        let ret
        const target = this
        const related = event.relatedTarget
        const handleObj = event.handleObj

        // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window
        if (!related || (related !== target && !jQuery.contains(target, related))) {
          event.type = handleObj.origType
          ret = handleObj.handler.apply(this, arguments)
          event.type = fix
        }
        return ret
      }
    }
  })

  jQuery.fn.extend({

    on: function (types, selector, data, fn) {
      return on(this, types, selector, data, fn)
    },
    one: function (types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1)
    },
    off: function (types, selector, fn) {
      let handleObj, type
      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj
        jQuery(types.delegateTarget).off(
          handleObj.namespace
            ? handleObj.origType + '.' + handleObj.namespace
            : handleObj.origType,
          handleObj.selector,
          handleObj.handler
        )
        return this
      }
      if (typeof types === 'object') {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type])
        }
        return this
      }
      if (selector === false || typeof selector === 'function') {
        // ( types [, fn] )
        fn = selector
        selector = undefined
      }
      if (fn === false) {
        fn = returnFalse
      }
      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector)
      })
    }
  })

  const

    // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i

  // checked="checked" or checked
  const rchecked = /checked\\s*(?:[^=]|=\\s*.checked.)/i
  const rcleanScript = /^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g

  // Prefer a tbody over its parent table for containing new rows
  function manipulationTarget (elem, content) {
    if (nodeName(elem, 'table') &&
		nodeName(content.nodeType !== 11 ? content : content.firstChild, 'tr')) {
      return jQuery(elem).children('tbody')[0] || elem
    }

    return elem
  }

  // Replace/restore the type attribute of script elements for safe DOM manipulation
  function disableScript (elem) {
    elem.type = (elem.getAttribute('type') !== null) + '/' + elem.type
    return elem
  }
  function restoreScript (elem) {
    if ((elem.type || '').slice(0, 5) === 'true/') {
      elem.type = elem.type.slice(5)
    } else {
      elem.removeAttribute('type')
    }

    return elem
  }

  function cloneCopyEvent (src, dest) {
    let i, l, type, pdataOld, udataOld, udataCur, events

    if (dest.nodeType !== 1) {
      return
    }

    // 1. Copy private data: events, handlers, etc.
    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src)
      events = pdataOld.events

      if (events) {
        dataPriv.remove(dest, 'handle events')

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i])
          }
        }
      }
    }

    // 2. Copy user data
    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src)
      udataCur = jQuery.extend({}, udataOld)

      dataUser.set(dest, udataCur)
    }
  }

  // Fix IE bugs, see support tests
  function fixInput (src, dest) {
    const nodeName = dest.nodeName.toLowerCase()

    // Fails to persist the checked state of a cloned checkbox or radio button.
    if (nodeName === 'input' && rcheckableType.test(src.type)) {
      dest.checked = src.checked

      // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === 'input' || nodeName === 'textarea') {
      dest.defaultValue = src.defaultValue
    }
  }

  function domManip (collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args)

    let fragment; let first; let scripts; let hasScripts; let node; let doc
    let i = 0
    const l = collection.length
    const iNoClone = l - 1
    const value = args[0]
    const valueIsFunction = isFunction(value)

    // We can't cloneNode fragments that contain checked, in WebKit
    if (valueIsFunction ||
			(l > 1 && typeof value === 'string' &&
				!support.checkClone && rchecked.test(value))) {
      return collection.each(function (index) {
        const self = collection.eq(index)
        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html())
        }
        domManip(self, args, callback, ignored)
      })
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored)
      first = fragment.firstChild

      if (fragment.childNodes.length === 1) {
        fragment = first
      }

      // Require either new content or an interest in ignored elements to invoke the callback
      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, 'script'), disableScript)
        hasScripts = scripts.length

        // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).
        for (; i < l; i++) {
          node = fragment

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true)

            // Keep references to cloned scripts for later restoration
            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, 'script'))
            }
          }

          callback.call(collection[i], node, i)
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument

          // Reenable scripts
          jQuery.map(scripts, restoreScript)

          // Evaluate executable scripts on first document insertion
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i]
            if (rscriptType.test(node.type || '') &&
						!dataPriv.access(node, 'globalEval') &&
						jQuery.contains(doc, node)) {
              if (node.src && (node.type || '').toLowerCase() !== 'module') {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute('nonce')
                  }, doc)
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ''), node, doc)
              }
            }
          }
        }
      }
    }

    return collection
  }

  function remove (elem, selector, keepData) {
    let node
    const nodes = selector ? jQuery.filter(selector, elem) : elem
    let i = 0

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node))
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, 'script'))
        }
        node.parentNode.removeChild(node)
      }
    }

    return elem
  }

  jQuery.extend({
    htmlPrefilter: function (html) {
      return html
    },

    clone: function (elem, dataAndEvents, deepDataAndEvents) {
      let i; let l; let srcElements; let destElements
      const clone = elem.cloneNode(true)
      const inPage = isAttached(elem)

      // Fix IE cloning issues
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
				!jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone)
        srcElements = getAll(elem)

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i])
        }
      }

      // Copy the events from the original to the clone
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem)
          destElements = destElements || getAll(clone)

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i])
          }
        } else {
          cloneCopyEvent(elem, clone)
        }
      }

      // Preserve script evaluation history
      destElements = getAll(clone, 'script')
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, 'script'))
      }

      // Return the cloned set
      return clone
    },

    cleanData: function (elems) {
      let data; let elem; let type
      const special = jQuery.event.special
      let i = 0

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if ((data = elem[dataPriv.expando])) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type)

                  // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle)
                }
              }
            }

            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataPriv.expando] = undefined
          }
          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined
          }
        }
      }
    }
  })

  jQuery.fn.extend({
    detach: function (selector) {
      return remove(this, selector, true)
    },

    remove: function (selector) {
      return remove(this, selector)
    },

    text: function (value) {
      return access(this, function (value) {
        return value === undefined
          ? jQuery.text(this)
          : this.empty().each(function () {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              this.textContent = value
            }
          })
      }, null, value, arguments.length)
    },

    append: function () {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          const target = manipulationTarget(this, elem)
          target.appendChild(elem)
        }
      })
    },

    prepend: function () {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          const target = manipulationTarget(this, elem)
          target.insertBefore(elem, target.firstChild)
        }
      })
    },

    before: function () {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this)
        }
      })
    },

    after: function () {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling)
        }
      })
    },

    empty: function () {
      let elem
      let i = 0

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false))

          // Remove any remaining nodes
          elem.textContent = ''
        }
      }

      return this
    },

    clone: function (dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents

      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
      })
    },

    html: function (value) {
      return access(this, function (value) {
        let elem = this[0] || {}
        let i = 0
        const l = this.length

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML
        }

        // See if we can take a shortcut and just use innerHTML
        if (typeof value === 'string' && !rnoInnerhtml.test(value) &&
				!wrapMap[(rtagName.exec(value) || ['', ''])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value)

          try {
            for (; i < l; i++) {
              elem = this[i] || {}

              // Remove element nodes and prevent memory leaks
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false))
                elem.innerHTML = value
              }
            }

            elem = 0

            // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value)
        }
      }, null, value, arguments.length)
    },

    replaceWith: function () {
      const ignored = []

      // Make the changes, replacing each non-ignored context element with the new content
      return domManip(this, arguments, function (elem) {
        const parent = this.parentNode

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this))
          if (parent) {
            parent.replaceChild(elem, this)
          }
        }

        // Force callback invocation
      }, ignored)
    }
  })

  jQuery.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      let elems
      const ret = []
      const insert = jQuery(selector)
      const last = insert.length - 1
      let i = 0

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true)
        jQuery(insert[i])[original](elems)

        // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit
        push.apply(ret, elems.get())
      }

      return this.pushStack(ret)
    }
  })
  const rnumnonpx = new RegExp('^(' + pnum + ')(?!px)[a-z%]+$', 'i')

  const getStyles = function (elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    let view = elem.ownerDocument.defaultView

    if (!view || !view.opener) {
      view = window
    }

    return view.getComputedStyle(elem)
  }

  const swap = function (elem, options, callback) {
    let ret; let name
    const old = {}

    // Remember the old values, and insert the new ones
    for (name in options) {
      old[name] = elem.style[name]
      elem.style[name] = options[name]
    }

    ret = callback.call(elem)

    // Revert the old values
    for (name in options) {
      elem.style[name] = old[name]
    }

    return ret
  }

  const rboxStyle = new RegExp(cssExpand.join('|'), 'i');

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests () {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return
      }

      container.style.cssText = 'position:absolute;left:-11111px;width:60px;' +
			'margin-top:1px;padding:0;border:0'
      div.style.cssText =
			'position:relative;display:block;box-sizing:border-box;overflow:scroll;' +
			'margin:auto;border:1px;padding:1px;' +
			'width:60%;top:1%'
      documentElement.appendChild(container).appendChild(div)

      const divStyle = window.getComputedStyle(div)
      pixelPositionVal = divStyle.top !== '1%'

      // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12

      // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't
      div.style.right = '60%'
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36

      // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements
      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36

      // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)
      div.style.position = 'absolute'
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12

      documentElement.removeChild(container)

      // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed
      div = null
    }

    function roundPixelMeasures (measure) {
      return Math.round(parseFloat(measure))
    }

    let pixelPositionVal; let boxSizingReliableVal; let scrollboxSizeVal; let pixelBoxStylesVal
    let reliableTrDimensionsVal; let reliableMarginLeftVal
    var container = document.createElement('div')
    var div = document.createElement('div')

    // Finish early in limited (non-browser) environments
    if (!div.style) {
      return
    }

    // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)
    div.style.backgroundClip = 'content-box'
    div.cloneNode(true).style.backgroundClip = ''
    support.clearCloneStyle = div.style.backgroundClip === 'content-box'

    jQuery.extend(support, {
      boxSizingReliable: function () {
        computeStyleTests()
        return boxSizingReliableVal
      },
      pixelBoxStyles: function () {
        computeStyleTests()
        return pixelBoxStylesVal
      },
      pixelPosition: function () {
        computeStyleTests()
        return pixelPositionVal
      },
      reliableMarginLeft: function () {
        computeStyleTests()
        return reliableMarginLeftVal
      },
      scrollboxSize: function () {
        computeStyleTests()
        return scrollboxSizeVal
      },

      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport \`getComputedStyle\` of table rows with width/height
      // set in CSS while \`offset*\` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      reliableTrDimensions: function () {
        let table, tr, trChild, trStyle
        if (reliableTrDimensionsVal == null) {
          table = document.createElement('table')
          tr = document.createElement('tr')
          trChild = document.createElement('div')

          table.style.cssText = 'position:absolute;left:-11111px'
          tr.style.height = '1px'
          trChild.style.height = '9px'

          documentElement
            .appendChild(table)
            .appendChild(tr)
            .appendChild(trChild)

          trStyle = window.getComputedStyle(tr)
          reliableTrDimensionsVal = parseInt(trStyle.height) > 3

          documentElement.removeChild(table)
        }
        return reliableTrDimensionsVal
      }
    })
  })()

  function curCSS (elem, name, computed) {
    let width; let minWidth; let maxWidth; let ret

    // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    const style = elem.style

    computed = computed || getStyles(elem)

    // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name]

      if (ret === '' && !isAttached(elem)) {
        ret = jQuery.style(elem, name)
      }

      // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values
      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width
        minWidth = style.minWidth
        maxWidth = style.maxWidth

        // Put in the new values to get a computed value out
        style.minWidth = style.maxWidth = style.width = ret
        ret = computed.width

        // Revert the changed values
        style.width = width
        style.minWidth = minWidth
        style.maxWidth = maxWidth
      }
    }

    return ret !== undefined

    // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
      ? ret + ''
      : ret
  }

  function addGetHookIf (conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function () {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get
          return
        }

        // Hook needed; redefine it so that the support test is not executed again.
        return (this.get = hookFn).apply(this, arguments)
      }
    }
  }

  const cssPrefixes = ['Webkit', 'Moz', 'ms']
  const emptyStyle = document.createElement('div').style
  const vendorProps = {}

  // Return a vendor-prefixed property or undefined
  function vendorPropName (name) {
    // Check for vendor prefixed names
    const capName = name[0].toUpperCase() + name.slice(1)
    let i = cssPrefixes.length

    while (i--) {
      name = cssPrefixes[i] + capName
      if (name in emptyStyle) {
        return name
      }
    }
  }

  // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
  function finalPropName (name) {
    const final = jQuery.cssProps[name] || vendorProps[name]

    if (final) {
      return final
    }
    if (name in emptyStyle) {
      return name
    }
    return vendorProps[name] = vendorPropName(name) || name
  }

  const

    // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/
  const rcustomProp = /^--/
  const cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' }
  const cssNormalTransform = {
    letterSpacing: '0',
    fontWeight: '400'
  }

  function setPositiveNumber (_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    const matches = rcssNum.exec(value)
    return matches

    // Guard against undefined "subtract", e.g., when used as in cssHooks
      ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || 'px')
      : value
  }

  function boxModelAdjustment (elem, dimension, box, isBorderBox, styles, computedVal) {
    let i = dimension === 'width' ? 1 : 0
    let extra = 0
    let delta = 0

    // Adjustment may not be necessary
    if (box === (isBorderBox ? 'border' : 'content')) {
      return 0
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === 'margin') {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles)
      }

      // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, 'padding' + cssExpand[i], true, styles)

        // For "border" or "margin", add border
        if (box !== 'padding') {
          delta += jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles)

          // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles)
        }

        // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"
      } else {
        // For "content", subtract padding
        if (box === 'content') {
          delta -= jQuery.css(elem, 'padding' + cssExpand[i], true, styles)
        }

        // For "content" or "padding", subtract border
        if (box !== 'margin') {
          delta -= jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles)
        }
      }
    }

    // Account for positive content-box scroll gutter when requested by providing computedVal
    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(
        elem['offset' + dimension[0].toUpperCase() + dimension.slice(1)] -
			computedVal -
			delta -
			extra -
			0.5

        // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
        // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0
    }

    return delta
  }

  function getWidthOrHeight (elem, dimension, extra) {
    // Start with computed style
    const styles = getStyles(elem)

    // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    const boxSizingNeeded = !support.boxSizingReliable() || extra
    let isBorderBox = boxSizingNeeded &&
			jQuery.css(elem, 'boxSizing', false, styles) === 'border-box'
    let valueIsBorderBox = isBorderBox

    let val = curCSS(elem, dimension, styles)
    const offsetProp = 'offset' + dimension[0].toUpperCase() + dimension.slice(1)

    // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.
    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val
      }
      val = 'auto'
    }

    // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.
    if ((!support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport \`getComputedStyle\` of table rows with width/height
		// set in CSS while \`offset*\` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName(elem, 'tr') ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === 'auto' ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat(val) && jQuery.css(elem, 'display', false, styles) === 'inline') &&

		// Make sure the element is visible & connected
		elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, 'boxSizing', false, styles) === 'border-box'

      // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.
      valueIsBorderBox = offsetProp in elem
      if (valueIsBorderBox) {
        val = elem[offsetProp]
      }
    }

    // Normalize "" and auto
    val = parseFloat(val) || 0

    // Adjust for the element's box model
    return (val +
		boxModelAdjustment(
		  elem,
		  dimension,
		  extra || (isBorderBox ? 'border' : 'content'),
		  valueIsBorderBox,
		  styles,

		  // Provide the current computed size to request scroll gutter calculation (gh-3589)
		  val
		)
    ) + 'px'
  }

  jQuery.extend({

    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function (elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            const ret = curCSS(elem, 'opacity')
            return ret === '' ? '1' : ret
          }
        }
      }
    },

    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      animationIterationCount: true,
      columnCount: true,
      fillOpacity: true,
      flexGrow: true,
      flexShrink: true,
      fontWeight: true,
      gridArea: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnStart: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowStart: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      widows: true,
      zIndex: true,
      zoom: true
    },

    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},

    // Get and set the style property on a DOM Node
    style: function (elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return
      }

      // Make sure that we're working with the right name
      let ret; let type; let hooks
      const origName = camelCase(name)
      const isCustomProp = rcustomProp.test(name)
      const style = elem.style

      // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.
      if (!isCustomProp) {
        name = finalPropName(origName)
      }

      // Gets hook for the prefixed version, then unprefixed version
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]

      // Check if we're setting a value
      if (value !== undefined) {
        type = typeof value

        // Convert "+=" or "-=" to relative numbers (#7345)
        if (type === 'string' && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret)

          // Fixes bug #9237
          type = 'number'
        }

        // Make sure that null and NaN values aren't set (#7116)
        if (value == null || value !== value) {
          return
        }

        // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.
        if (type === 'number' && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? '' : 'px')
        }

        // background-* props affect original clone's values
        if (!support.clearCloneStyle && value === '' && name.indexOf('background') === 0) {
          style[name] = 'inherit'
        }

        // If a hook was provided, use that value, otherwise just set the specified value
        if (!hooks || !('set' in hooks) ||
				(value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value)
          } else {
            style[name] = value
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && 'get' in hooks &&
				(ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret
        }

        // Otherwise just get the value from the style object
        return style[name]
      }
    },

    css: function (elem, name, extra, styles) {
      let val; let num; let hooks
      const origName = camelCase(name)
      const isCustomProp = rcustomProp.test(name)

      // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.
      if (!isCustomProp) {
        name = finalPropName(origName)
      }

      // Try prefixed name followed by the unprefixed name
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]

      // If a hook was provided get the computed value from there
      if (hooks && 'get' in hooks) {
        val = hooks.get(elem, true, extra)
      }

      // Otherwise, if a way to get the computed value exists, use that
      if (val === undefined) {
        val = curCSS(elem, name, styles)
      }

      // Convert "normal" to computed value
      if (val === 'normal' && name in cssNormalTransform) {
        val = cssNormalTransform[name]
      }

      // Make numeric if forced or a qualifier was provided and val looks numeric
      if (extra === '' || extra) {
        num = parseFloat(val)
        return extra === true || isFinite(num) ? num || 0 : val
      }

      return val
    }
  })

  jQuery.each(['height', 'width'], function (_i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function (elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, 'display')) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					(!elem.getClientRects().length || !elem.getBoundingClientRect().width)
            ? swap(elem, cssShow, function () {
              return getWidthOrHeight(elem, dimension, extra)
            })
            : getWidthOrHeight(elem, dimension, extra)
        }
      },

      set: function (elem, value, extra) {
        let matches
        const styles = getStyles(elem)

        // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        const scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === 'absolute'

        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        const boxSizingNeeded = scrollboxSizeBuggy || extra
        const isBorderBox = boxSizingNeeded &&
					jQuery.css(elem, 'boxSizing', false, styles) === 'border-box'
        let subtract = extra
          ? boxModelAdjustment(
            elem,
            dimension,
            extra,
            isBorderBox,
            styles
          )
          : 0

        // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)
        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(
            elem['offset' + dimension[0].toUpperCase() + dimension.slice(1)] -
					parseFloat(styles[dimension]) -
					boxModelAdjustment(elem, dimension, 'border', false, styles) -
					0.5
          )
        }

        // Convert to pixels if value adjustment is needed
        if (subtract && (matches = rcssNum.exec(value)) &&
				(matches[3] || 'px') !== 'px') {
          elem.style[dimension] = value
          value = jQuery.css(elem, dimension)
        }

        return setPositiveNumber(elem, value, subtract)
      }
    }
  })

  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,
    function (elem, computed) {
      if (computed) {
        return (parseFloat(curCSS(elem, 'marginLeft')) ||
				elem.getBoundingClientRect().left -
					swap(elem, { marginLeft: 0 }, function () {
					  return elem.getBoundingClientRect().left
					})
        ) + 'px'
      }
    }
  )

  // These hooks are used by animate to expand properties
  jQuery.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function (value) {
        let i = 0
        const expanded = {}

        // Assumes a single number if not a string
        const parts = typeof value === 'string' ? value.split(' ') : [value]

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] =
					parts[i] || parts[i - 2] || parts[0]
        }

        return expanded
      }
    }

    if (prefix !== 'margin') {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber
    }
  })

  jQuery.fn.extend({
    css: function (name, value) {
      return access(this, function (elem, name, value) {
        let styles; let len
        const map = {}
        let i = 0

        if (Array.isArray(name)) {
          styles = getStyles(elem)
          len = name.length

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles)
          }

          return map
        }

        return value !== undefined
          ? jQuery.style(elem, name, value)
          : jQuery.css(elem, name)
      }, name, value, arguments.length > 1)
    }
  })

  function Tween (elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing)
  }
  jQuery.Tween = Tween

  Tween.prototype = {
    constructor: Tween,
    init: function (elem, options, prop, end, easing, unit) {
      this.elem = elem
      this.prop = prop
      this.easing = easing || jQuery.easing._default
      this.options = options
      this.start = this.now = this.cur()
      this.end = end
      this.unit = unit || (jQuery.cssNumber[prop] ? '' : 'px')
    },
    cur: function () {
      const hooks = Tween.propHooks[this.prop]

      return hooks && hooks.get
        ? hooks.get(this)
        : Tween.propHooks._default.get(this)
    },
    run: function (percent) {
      let eased
      const hooks = Tween.propHooks[this.prop]

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](
          percent, this.options.duration * percent, 0, 1, this.options.duration
        )
      } else {
        this.pos = eased = percent
      }
      this.now = (this.end - this.start) * eased + this.start

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this)
      }

      if (hooks && hooks.set) {
        hooks.set(this)
      } else {
        Tween.propHooks._default.set(this)
      }
      return this
    }
  }

  Tween.prototype.init.prototype = Tween.prototype

  Tween.propHooks = {
    _default: {
      get: function (tween) {
        let result

        // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.
        if (tween.elem.nodeType !== 1 ||
				tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop]
        }

        // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.
        result = jQuery.css(tween.elem, tween.prop, '')

        // Empty strings, null, undefined and "auto" are converted to 0.
        return !result || result === 'auto' ? 0 : result
      },
      set: function (tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween)
        } else if (tween.elem.nodeType === 1 && (
          jQuery.cssHooks[tween.prop] ||
					tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
        } else {
          tween.elem[tween.prop] = tween.now
        }
      }
    }
  }

  // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now
      }
    }
  }

  jQuery.easing = {
    linear: function (p) {
      return p
    },
    swing: function (p) {
      return 0.5 - Math.cos(p * Math.PI) / 2
    },
    _default: 'swing'
  }

  jQuery.fx = Tween.prototype.init

  // Back compat <1.8 extension point
  jQuery.fx.step = {}

  let
    fxNow; let inProgress
  const rfxtypes = /^(?:toggle|show|hide)$/
  const rrun = /queueHooks$/

  function schedule () {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule)
      } else {
        window.setTimeout(schedule, jQuery.fx.interval)
      }

      jQuery.fx.tick()
    }
  }

  // Animations created synchronously will run synchronously
  function createFxNow () {
    window.setTimeout(function () {
      fxNow = undefined
    })
    return (fxNow = Date.now())
  }

  // Generate parameters to create a standard animation
  function genFx (type, includeWidth) {
    let which
    let i = 0
    const attrs = { height: type }

    // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right
    includeWidth = includeWidth ? 1 : 0
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i]
      attrs['margin' + which] = attrs['padding' + which] = type
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type
    }

    return attrs
  }

  function createTween (value, prop, animation) {
    let tween
    const collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners['*'])
    let index = 0
    const length = collection.length
    for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {
        // We're done with this property
        return tween
      }
    }
  }

  function defaultPrefilter (elem, props, opts) {
    let prop; let value; let toggle; let hooks; let oldfire; let propTween; let restoreDisplay; let display
    const isBox = 'width' in props || 'height' in props
    const anim = this
    const orig = {}
    const style = elem.style
    let hidden = elem.nodeType && isHiddenWithinTree(elem)
    let dataShow = dataPriv.get(elem, 'fxshow')

    // Queue-skipping animations hijack the fx hooks
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, 'fx')
      if (hooks.unqueued == null) {
        hooks.unqueued = 0
        oldfire = hooks.empty.fire
        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire()
          }
        }
      }
      hooks.unqueued++

      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--
          if (!jQuery.queue(elem, 'fx').length) {
            hooks.empty.fire()
          }
        })
      })
    }

    // Detect show/hide animations
    for (prop in props) {
      value = props[prop]
      if (rfxtypes.test(value)) {
        delete props[prop]
        toggle = toggle || value === 'toggle'
        if (value === (hidden ? 'hide' : 'show')) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === 'show' && dataShow && dataShow[prop] !== undefined) {
            hidden = true

            // Ignore all other no-op show/hide data
          } else {
            continue
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
      }
    }

    // Bail out if this is a no-op like .hide().hide()
    propTween = !jQuery.isEmptyObject(props)
    if (!propTween && jQuery.isEmptyObject(orig)) {
      return
    }

    // Restrict "overflow" and "display" styles during box animations
    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]

      // Identify a display type, preferring old show/hide data over the CSS cascade
      restoreDisplay = dataShow && dataShow.display
      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, 'display')
      }
      display = jQuery.css(elem, 'display')
      if (display === 'none') {
        if (restoreDisplay) {
          display = restoreDisplay
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true)
          restoreDisplay = elem.style.display || restoreDisplay
          display = jQuery.css(elem, 'display')
          showHide([elem])
        }
      }

      // Animate inline elements as inline-block
      if (display === 'inline' || display === 'inline-block' && restoreDisplay != null) {
        if (jQuery.css(elem, 'float') === 'none') {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay
            })
            if (restoreDisplay == null) {
              display = style.display
              restoreDisplay = display === 'none' ? '' : display
            }
          }
          style.display = 'inline-block'
        }
      }
    }

    if (opts.overflow) {
      style.overflow = 'hidden'
      anim.always(function () {
        style.overflow = opts.overflow[0]
        style.overflowX = opts.overflow[1]
        style.overflowY = opts.overflow[2]
      })
    }

    // Implement show/hide animations
    propTween = false
    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ('hidden' in dataShow) {
            hidden = dataShow.hidden
          }
        } else {
          dataShow = dataPriv.access(elem, 'fxshow', { display: restoreDisplay })
        }

        // Store hidden/visible for toggle so \`.stop().toggle()\` "reverses"
        if (toggle) {
          dataShow.hidden = !hidden
        }

        // Show elements before animating them
        if (hidden) {
          showHide([elem], true)
        }

        /* eslint-disable no-loop-func */

        anim.done(function () {
          /* eslint-enable no-loop-func */

          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem])
          }
          dataPriv.remove(elem, 'fxshow')
          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop])
          }
        })
      }

      // Per-property setup
      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim)
      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start
        if (hidden) {
          propTween.end = propTween.start
          propTween.start = 0
        }
      }
    }
  }

  function propFilter (props, specialEasing) {
    let index, name, easing, value, hooks

    // camelCase, specialEasing and expand cssHook pass
    for (index in props) {
      name = camelCase(index)
      easing = specialEasing[name]
      value = props[index]
      if (Array.isArray(value)) {
        easing = value[1]
        value = props[index] = value[0]
      }

      if (index !== name) {
        props[name] = value
        delete props[index]
      }

      hooks = jQuery.cssHooks[name]
      if (hooks && 'expand' in hooks) {
        value = hooks.expand(value)
        delete props[name]

        // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index]
            specialEasing[index] = easing
          }
        }
      } else {
        specialEasing[name] = easing
      }
    }
  }

  function Animation (elem, properties, options) {
    let result
    let stopped
    let index = 0
    const length = Animation.prefilters.length
    const deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem
    })
    var tick = function () {
      if (stopped) {
        return false
      }
      const currentTime = fxNow || createFxNow()
      const remaining = Math.max(0, animation.startTime + animation.duration - currentTime)

      // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use \`1 - ( 0.5 || 0 )\` (#12497)
      const temp = remaining / animation.duration || 0
      const percent = 1 - temp
      let index = 0
      const length = animation.tweens.length

      for (; index < length; index++) {
        animation.tweens[index].run(percent)
      }

      deferred.notifyWith(elem, [animation, percent, remaining])

      // If there's more to do, yield
      if (percent < 1 && length) {
        return remaining
      }

      // If this was an empty animation, synthesize a final progress notification
      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0])
      }

      // Resolve the animation and report its conclusion
      deferred.resolveWith(elem, [animation])
      return false
    }
    var animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function (prop, end) {
        const tween = jQuery.Tween(elem, animation.opts, prop, end,
          animation.opts.specialEasing[prop] || animation.opts.easing)
        animation.tweens.push(tween)
        return tween
      },
      stop: function (gotoEnd) {
        let index = 0

        // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        const length = gotoEnd ? animation.tweens.length : 0
        if (stopped) {
          return this
        }
        stopped = true
        for (; index < length; index++) {
          animation.tweens[index].run(1)
        }

        // Resolve when we played the last frame; otherwise, reject
        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0])
          deferred.resolveWith(elem, [animation, gotoEnd])
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd])
        }
        return this
      }
    })
    const props = animation.props

    propFilter(props, animation.opts.specialEasing)

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts)
      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
					result.stop.bind(result)
        }
        return result
      }
    }

    jQuery.map(props, createTween, animation)

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation)
    }

    // Attach callbacks from options
    animation
      .progress(animation.opts.progress)
      .done(animation.opts.done, animation.opts.complete)
      .fail(animation.opts.fail)
      .always(animation.opts.always)

    jQuery.fx.timer(
      jQuery.extend(tick, {
        elem: elem,
        anim: animation,
        queue: animation.opts.queue
      })
    )

    return animation
  }

  jQuery.Animation = jQuery.extend(Animation, {

    tweeners: {
      '*': [function (prop, value) {
        const tween = this.createTween(prop, value)
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween)
        return tween
      }]
    },

    tweener: function (props, callback) {
      if (isFunction(props)) {
        callback = props
        props = ['*']
      } else {
        props = props.match(rnothtmlwhite)
      }

      let prop
      let index = 0
      const length = props.length

      for (; index < length; index++) {
        prop = props[index]
        Animation.tweeners[prop] = Animation.tweeners[prop] || []
        Animation.tweeners[prop].unshift(callback)
      }
    },

    prefilters: [defaultPrefilter],

    prefilter: function (callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback)
      } else {
        Animation.prefilters.push(callback)
      }
    }
  })

  jQuery.speed = function (speed, easing, fn) {
    const opt = speed && typeof speed === 'object' ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing ||
			isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }

    // Go to the end state if fx are off
    if (jQuery.fx.off) {
      opt.duration = 0
    } else {
      if (typeof opt.duration !== 'number') {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration]
        } else {
          opt.duration = jQuery.fx.speeds._default
        }
      }
    }

    // Normalize opt.queue - true/undefined/null -> "fx"
    if (opt.queue == null || opt.queue === true) {
      opt.queue = 'fx'
    }

    // Queueing
    opt.old = opt.complete

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this)
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue)
      }
    }

    return opt
  }

  jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css('opacity', 0).show()

      // Animate to the value specified
        .end().animate({ opacity: to }, speed, easing, callback)
    },
    animate: function (prop, speed, easing, callback) {
      const empty = jQuery.isEmptyObject(prop)
      const optall = jQuery.speed(speed, easing, callback)
      const doAnimation = function () {
        // Operate on a copy of prop so per-property easing won't be lost
        const anim = Animation(this, jQuery.extend({}, prop), optall)

        // Empty animations, or finishing resolves immediately
        if (empty || dataPriv.get(this, 'finish')) {
          anim.stop(true)
        }
      }
      doAnimation.finish = doAnimation

      return empty || optall.queue === false
        ? this.each(doAnimation)
        : this.queue(optall.queue, doAnimation)
    },
    stop: function (type, clearQueue, gotoEnd) {
      const stopQueue = function (hooks) {
        const stop = hooks.stop
        delete hooks.stop
        stop(gotoEnd)
      }

      if (typeof type !== 'string') {
        gotoEnd = clearQueue
        clearQueue = type
        type = undefined
      }
      if (clearQueue) {
        this.queue(type || 'fx', [])
      }

      return this.each(function () {
        let dequeue = true
        let index = type != null && type + 'queueHooks'
        const timers = jQuery.timers
        const data = dataPriv.get(this)

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index])
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index])
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this &&
					(type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd)
            dequeue = false
            timers.splice(index, 1)
          }
        }

        // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type)
        }
      })
    },
    finish: function (type) {
      if (type !== false) {
        type = type || 'fx'
      }
      return this.each(function () {
        let index
        const data = dataPriv.get(this)
        const queue = data[type + 'queue']
        const hooks = data[type + 'queueHooks']
        const timers = jQuery.timers
        const length = queue ? queue.length : 0

        // Enable finishing flag on private data
        data.finish = true

        // Empty the queue first
        jQuery.queue(this, type, [])

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true)
        }

        // Look for any active animations, and finish them
        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true)
            timers.splice(index, 1)
          }
        }

        // Look for any animations in the old queue and finish them
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this)
          }
        }

        // Turn off finishing flag
        delete data.finish
      })
    }
  })

  jQuery.each(['toggle', 'show', 'hide'], function (_i, name) {
    const cssFn = jQuery.fn[name]
    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === 'boolean'
        ? cssFn.apply(this, arguments)
        : this.animate(genFx(name, true), speed, easing, callback)
    }
  })

  // Generate shortcuts for custom animations
  jQuery.each({
    slideDown: genFx('show'),
    slideUp: genFx('hide'),
    slideToggle: genFx('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback)
    }
  })

  jQuery.timers = []
  jQuery.fx.tick = function () {
    let timer
    let i = 0
    const timers = jQuery.timers

    fxNow = Date.now()

    for (; i < timers.length; i++) {
      timer = timers[i]

      // Run the timer and safely remove it when done (allowing for external removal)
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1)
      }
    }

    if (!timers.length) {
      jQuery.fx.stop()
    }
    fxNow = undefined
  }

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer)
    jQuery.fx.start()
  }

  jQuery.fx.interval = 13
  jQuery.fx.start = function () {
    if (inProgress) {
      return
    }

    inProgress = true
    schedule()
  }

  jQuery.fx.stop = function () {
    inProgress = null
  }

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,

    // Default speed
    _default: 400
  }

  // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time
    type = type || 'fx'

    return this.queue(type, function (next, hooks) {
      const timeout = window.setTimeout(next, time)
      hooks.stop = function () {
        window.clearTimeout(timeout)
      }
    })
  };

  (function () {
    let input = document.createElement('input')
    const select = document.createElement('select')
    const opt = select.appendChild(document.createElement('option'))

    input.type = 'checkbox'

    // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"
    support.checkOn = input.value !== ''

    // Support: IE <=11 only
    // Must access selectedIndex to make default options select
    support.optSelected = opt.selected

    // Support: IE <=11 only
    // An input loses its value after becoming a radio
    input = document.createElement('input')
    input.value = 't'
    input.type = 'radio'
    support.radioValue = input.value === 't'
  })()

  let boolHook
  const attrHandle = jQuery.expr.attrHandle

  jQuery.fn.extend({
    attr: function (name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1)
    },

    removeAttr: function (name) {
      return this.each(function () {
        jQuery.removeAttr(this, name)
      })
    }
  })

  jQuery.extend({
    attr: function (elem, name, value) {
      let ret; let hooks
      const nType = elem.nodeType

      // Don't get/set attributes on text, comment and attribute nodes
      if (nType === 3 || nType === 8 || nType === 2) {
        return
      }

      // Fallback to prop when attributes are not supported
      if (typeof elem.getAttribute === 'undefined') {
        return jQuery.prop(elem, name, value)
      }

      // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] ||
				(jQuery.expr.match.bool.test(name) ? boolHook : undefined)
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name)
          return
        }

        if (hooks && 'set' in hooks &&
				(ret = hooks.set(elem, value, name)) !== undefined) {
          return ret
        }

        elem.setAttribute(name, value + '')
        return value
      }

      if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret
      }

      ret = jQuery.find.attr(elem, name)

      // Non-existent attributes return null, we normalize to undefined
      return ret == null ? undefined : ret
    },

    attrHooks: {
      type: {
        set: function (elem, value) {
          if (!support.radioValue && value === 'radio' &&
					nodeName(elem, 'input')) {
            const val = elem.value
            elem.setAttribute('type', value)
            if (val) {
              elem.value = val
            }
            return value
          }
        }
      }
    },

    removeAttr: function (elem, value) {
      let name
      let i = 0

      // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      const attrNames = value && value.match(rnothtmlwhite)

      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          elem.removeAttribute(name)
        }
      }
    }
  })

  // Hooks for boolean attributes
  boolHook = {
    set: function (elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name)
      } else {
        elem.setAttribute(name, name)
      }
      return name
    }
  }

  jQuery.each(jQuery.expr.match.bool.source.match(/\\w+/g), function (_i, name) {
    const getter = attrHandle[name] || jQuery.find.attr

    attrHandle[name] = function (elem, name, isXML) {
      let ret; let handle
      const lowercaseName = name.toLowerCase()

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName]
        attrHandle[lowercaseName] = ret
        ret = getter(elem, name, isXML) != null
          ? lowercaseName
          : null
        attrHandle[lowercaseName] = handle
      }
      return ret
    }
  })

  const rfocusable = /^(?:input|select|textarea|button)$/i
  const rclickable = /^(?:a|area)$/i

  jQuery.fn.extend({
    prop: function (name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1)
    },

    removeProp: function (name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name]
      })
    }
  })

  jQuery.extend({
    prop: function (elem, name, value) {
      let ret; let hooks
      const nType = elem.nodeType

      // Don't get/set properties on text, comment and attribute nodes
      if (nType === 3 || nType === 8 || nType === 2) {
        return
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name
        hooks = jQuery.propHooks[name]
      }

      if (value !== undefined) {
        if (hooks && 'set' in hooks &&
				(ret = hooks.set(elem, value, name)) !== undefined) {
          return ret
        }

        return (elem[name] = value)
      }

      if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret
      }

      return elem[name]
    },

    propHooks: {
      tabIndex: {
        get: function (elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          const tabindex = jQuery.find.attr(elem, 'tabindex')

          if (tabindex) {
            return parseInt(tabindex, 10)
          }

          if (
            rfocusable.test(elem.nodeName) ||
					rclickable.test(elem.nodeName) &&
					elem.href
          ) {
            return 0
          }

          return -1
        }
      }
    },

    propFix: {
      for: 'htmlFor',
      class: 'className'
    }
  })

  // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function (elem) {
        /* eslint no-unused-expressions: "off" */

        const parent = elem.parentNode
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex
        }
        return null
      },
      set: function (elem) {
        /* eslint no-unused-expressions: "off" */

        const parent = elem.parentNode
        if (parent) {
          parent.selectedIndex

          if (parent.parentNode) {
            parent.parentNode.selectedIndex
          }
        }
      }
    }
  }

  jQuery.each([
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'
  ], function () {
    jQuery.propFix[this.toLowerCase()] = this
  })

  // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
  function stripAndCollapse (value) {
    const tokens = value.match(rnothtmlwhite) || []
    return tokens.join(' ')
  }

  function getClass (elem) {
    return elem.getAttribute && elem.getAttribute('class') || ''
  }

  function classesToArray (value) {
    if (Array.isArray(value)) {
      return value
    }
    if (typeof value === 'string') {
      return value.match(rnothtmlwhite) || []
    }
    return []
  }

  jQuery.fn.extend({
    addClass: function (value) {
      let classes; let elem; let cur; let curValue; let clazz; let j; let finalValue
      let i = 0

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)))
        })
      }

      classes = classesToArray(value)

      if (classes.length) {
        while ((elem = this[i++])) {
          curValue = getClass(elem)
          cur = elem.nodeType === 1 && (' ' + stripAndCollapse(curValue) + ' ')

          if (cur) {
            j = 0
            while ((clazz = classes[j++])) {
              if (cur.indexOf(' ' + clazz + ' ') < 0) {
                cur += clazz + ' '
              }
            }

            // Only assign if different to avoid unneeded rendering.
            finalValue = stripAndCollapse(cur)
            if (curValue !== finalValue) {
              elem.setAttribute('class', finalValue)
            }
          }
        }
      }

      return this
    },

    removeClass: function (value) {
      let classes; let elem; let cur; let curValue; let clazz; let j; let finalValue
      let i = 0

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)))
        })
      }

      if (!arguments.length) {
        return this.attr('class', '')
      }

      classes = classesToArray(value)

      if (classes.length) {
        while ((elem = this[i++])) {
          curValue = getClass(elem)

          // This expression is here for better compressibility (see addClass)
          cur = elem.nodeType === 1 && (' ' + stripAndCollapse(curValue) + ' ')

          if (cur) {
            j = 0
            while ((clazz = classes[j++])) {
              // Remove *all* instances
              while (cur.indexOf(' ' + clazz + ' ') > -1) {
                cur = cur.replace(' ' + clazz + ' ', ' ')
              }
            }

            // Only assign if different to avoid unneeded rendering.
            finalValue = stripAndCollapse(cur)
            if (curValue !== finalValue) {
              elem.setAttribute('class', finalValue)
            }
          }
        }
      }

      return this
    },

    toggleClass: function (value, stateVal) {
      const type = typeof value
      const isValidValue = type === 'string' || Array.isArray(value)

      if (typeof stateVal === 'boolean' && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value)
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(
            value.call(this, i, getClass(this), stateVal),
            stateVal
          )
        })
      }

      return this.each(function () {
        let className, i, self, classNames

        if (isValidValue) {
          // Toggle individual class names
          i = 0
          self = jQuery(this)
          classNames = classesToArray(value)

          while ((className = classNames[i++])) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className)
            } else {
              self.addClass(className)
            }
          }

          // Toggle whole class name
        } else if (value === undefined || type === 'boolean') {
          className = getClass(this)
          if (className) {
            // Store className if set
            dataPriv.set(this, '__className__', className)
          }

          // If the element has a class name or if we're passed \`false\`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.
          if (this.setAttribute) {
            this.setAttribute('class',
              className || value === false
                ? ''
                : dataPriv.get(this, '__className__') || ''
            )
          }
        }
      })
    },

    hasClass: function (selector) {
      let className; let elem
      let i = 0

      className = ' ' + selector + ' '
      while ((elem = this[i++])) {
        if (elem.nodeType === 1 &&
				(' ' + stripAndCollapse(getClass(elem)) + ' ').indexOf(className) > -1) {
          return true
        }
      }

      return false
    }
  })

  const rreturn = /\\r/g

  jQuery.fn.extend({
    val: function (value) {
      let hooks; let ret; let valueIsFunction
      const elem = this[0]

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] ||
					jQuery.valHooks[elem.nodeName.toLowerCase()]

          if (hooks &&
					'get' in hooks &&
					(ret = hooks.get(elem, 'value')) !== undefined
          ) {
            return ret
          }

          ret = elem.value

          // Handle most common string cases
          if (typeof ret === 'string') {
            return ret.replace(rreturn, '')
          }

          // Handle cases where value is null/undef or number
          return ret == null ? '' : ret
        }

        return
      }

      valueIsFunction = isFunction(value)

      return this.each(function (i) {
        let val

        if (this.nodeType !== 1) {
          return
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val())
        } else {
          val = value
        }

        // Treat null/undefined as ""; convert numbers to string
        if (val == null) {
          val = ''
        } else if (typeof val === 'number') {
          val += ''
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? '' : value + ''
          })
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]

        // If set returns undefined, fall back to normal setting
        if (!hooks || !('set' in hooks) || hooks.set(this, val, 'value') === undefined) {
          this.value = val
        }
      })
    }
  })

  jQuery.extend({
    valHooks: {
      option: {
        get: function (elem) {
          const val = jQuery.find.attr(elem, 'value')
          return val != null
            ? val

          // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
            : stripAndCollapse(jQuery.text(elem))
        }
      },
      select: {
        get: function (elem) {
          let value; let option; let i
          const options = elem.options
          const index = elem.selectedIndex
          const one = elem.type === 'select-one'
          const values = one ? null : []
          const max = one ? index + 1 : options.length

          if (index < 0) {
            i = max
          } else {
            i = one ? index : 0
          }

          // Loop through all the selected options
          for (; i < max; i++) {
            option = options[i]

            // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)
            if ((option.selected || i === index) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							(!option.parentNode.disabled ||
								!nodeName(option.parentNode, 'optgroup'))) {
              // Get the specific value for the option
              value = jQuery(option).val()

              // We don't need an array for one selects
              if (one) {
                return value
              }

              // Multi-Selects return an array
              values.push(value)
            }
          }

          return values
        },

        set: function (elem, value) {
          let optionSet; let option
          const options = elem.options
          const values = jQuery.makeArray(value)
          let i = options.length

          while (i--) {
            option = options[i]

            /* eslint-disable no-cond-assign */

            if (option.selected =
						jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1
            ) {
              optionSet = true
            }

            /* eslint-enable no-cond-assign */
          }

          // Force browsers to behave consistently when non-matching value is set
          if (!optionSet) {
            elem.selectedIndex = -1
          }
          return values
        }
      }
    }
  })

  // Radios and checkboxes getter/setter
  jQuery.each(['radio', 'checkbox'], function () {
    jQuery.valHooks[this] = {
      set: function (elem, value) {
        if (Array.isArray(value)) {
          return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1)
        }
      }
    }
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute('value') === null ? 'on' : elem.value
      }
    }
  })

  // Return jQuery for attributes-only inclusion

  support.focusin = 'onfocusin' in window

  const rfocusMorph = /^(?:focusinfocus|focusoutblur)$/
  const stopPropagationCallback = function (e) {
    e.stopPropagation()
  }

  jQuery.extend(jQuery.event, {

    trigger: function (event, data, elem, onlyHandlers) {
      let i; let cur; let tmp; let bubbleType; let ontype; let handle; let special; let lastElement
      const eventPath = [elem || document]
      let type = hasOwn.call(event, 'type') ? event.type : event
      let namespaces = hasOwn.call(event, 'namespace') ? event.namespace.split('.') : []

      cur = lastElement = tmp = elem = elem || document

      // Don't do events on text and comment nodes
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return
      }

      // focus/blur morphs to focusin/out; ensure we're not firing them right now
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return
      }

      if (type.indexOf('.') > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split('.')
        type = namespaces.shift()
        namespaces.sort()
      }
      ontype = type.indexOf(':') < 0 && 'on' + type

      // Caller can pass in a jQuery.Event object, Object, or just an event type string
      event = event[jQuery.expando]
        ? event
        : new jQuery.Event(type, typeof event === 'object' && event)

      // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
      event.isTrigger = onlyHandlers ? 2 : 3
      event.namespace = namespaces.join('.')
      event.rnamespace = event.namespace
        ? new RegExp('(^|\\\\.)' + namespaces.join('\\\\.(?:.*\\\\.|)') + '(\\\\.|$)')
        : null

      // Clean up the event in case it is being reused
      event.result = undefined
      if (!event.target) {
        event.target = elem
      }

      // Clone any incoming data and prepend the event, creating the handler arg list
      data = data == null
        ? [event]
        : jQuery.makeArray(data, [event])

      // Allow special events to draw outside the lines
      special = jQuery.event.special[type] || {}
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return
      }

      // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur)
          tmp = cur
        }

        // Only add window if we got to document (e.g., not plain obj or detached DOM)
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window)
        }
      }

      // Fire handlers on the event path
      i = 0
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur
        event.type = i > 1
          ? bubbleType
          : special.bindType || type

        // jQuery handler
        handle = (
          dataPriv.get(cur, 'events') || Object.create(null)
        )[event.type] &&
				dataPriv.get(cur, 'handle')
        if (handle) {
          handle.apply(cur, data)
        }

        // Native handler
        handle = ontype && cur[ontype]
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data)
          if (event.result === false) {
            event.preventDefault()
          }
        }
      }
      event.type = type

      // If nobody prevented the default action, do it now
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default ||
				special._default.apply(eventPath.pop(), data) === false) &&
				acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype]

            if (tmp) {
              elem[ontype] = null
            }

            // Prevent re-triggering of the same event, since we already bubbled it above
            jQuery.event.triggered = type

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback)
            }

            elem[type]()

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback)
            }

            jQuery.event.triggered = undefined

            if (tmp) {
              elem[ontype] = tmp
            }
          }
        }
      }

      return event.result
    },

    // Piggyback on a donor event to simulate a different one
    // Used only for \`focus(in | out)\` events
    simulate: function (type, elem, event) {
      const e = jQuery.extend(
        new jQuery.Event(),
        event,
        {
          type: type,
          isSimulated: true
        }
      )

      jQuery.event.trigger(e, null, elem)
    }

  })

  jQuery.fn.extend({

    trigger: function (type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this)
      })
    },
    triggerHandler: function (type, data) {
      const elem = this[0]
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true)
      }
    }
  })

  // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
  if (!support.focusin) {
    jQuery.each({ focus: 'focusin', blur: 'focusout' }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      const handler = function (event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event))
      }

      jQuery.event.special[fix] = {
        setup: function () {
          // Handle: regular nodes (via \`this.ownerDocument\`), window
          // (via \`this.document\`) & document (via \`this\`).
          const doc = this.ownerDocument || this.document || this
          const attaches = dataPriv.access(doc, fix)

          if (!attaches) {
            doc.addEventListener(orig, handler, true)
          }
          dataPriv.access(doc, fix, (attaches || 0) + 1)
        },
        teardown: function () {
          const doc = this.ownerDocument || this.document || this
          const attaches = dataPriv.access(doc, fix) - 1

          if (!attaches) {
            doc.removeEventListener(orig, handler, true)
            dataPriv.remove(doc, fix)
          } else {
            dataPriv.access(doc, fix, attaches)
          }
        }
      }
    })
  }
  const location = window.location

  const nonce = { guid: Date.now() }

  const rquery = (/\\?/)

  // Cross-browser xml parsing
  jQuery.parseXML = function (data) {
    let xml
    if (!data || typeof data !== 'string') {
      return null
    }

    // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.
    try {
      xml = (new window.DOMParser()).parseFromString(data, 'text/xml')
    } catch (e) {
      xml = undefined
    }

    if (!xml || xml.getElementsByTagName('parsererror').length) {
      jQuery.error('Invalid XML: ' + data)
    }
    return xml
  }

  const
    rbracket = /\\[\\]$/
  const rCRLF = /\\r?\\n/g
  const rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i
  const rsubmittable = /^(?:input|select|textarea|keygen)/i

  function buildParams (prefix, obj, traditional, add) {
    let name

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v)
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(
            prefix + '[' + (typeof v === 'object' && v != null ? i : '') + ']',
            v,
            traditional,
            add
          )
        }
      })
    } else if (!traditional && toType(obj) === 'object') {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj)
    }
  }

  // Serialize an array of form elements or a set of
  // key/values into a query string
  jQuery.param = function (a, traditional) {
    let prefix
    const s = []
    const add = function (key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      const value = isFunction(valueOrFunction)
        ? valueOrFunction()
        : valueOrFunction

      s[s.length] = encodeURIComponent(key) + '=' +
				encodeURIComponent(value == null ? '' : value)
    }

    if (a == null) {
      return ''
    }

    // If an array was passed in, assume that it is an array of form elements.
    if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value)
      })
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add)
      }
    }

    // Return the resulting serialization
    return s.join('&')
  }

  jQuery.fn.extend({
    serialize: function () {
      return jQuery.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        const elements = jQuery.prop(this, 'elements')
        return elements ? jQuery.makeArray(elements) : this
      })
        .filter(function () {
          const type = this.type

          // Use .is( ":disabled" ) so that fieldset[disabled] works
          return this.name && !jQuery(this).is(':disabled') &&
				rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
				(this.checked || !rcheckableType.test(type))
        })
        .map(function (_i, elem) {
          const val = jQuery(this).val()

          if (val == null) {
            return null
          }

          if (Array.isArray(val)) {
            return jQuery.map(val, function (val) {
              return { name: elem.name, value: val.replace(rCRLF, '\\r\\n') }
            })
          }

          return { name: elem.name, value: val.replace(rCRLF, '\\r\\n') }
        }).get()
    }
  })

  const
    r20 = /%20/g
  const rhash = /#.*$/
  const rantiCache = /([?&])_=[^&]*/
  const rheaders = /^(.*?):[ \\t]*([^\\r\\n]*)$/mg

  // #7653, #8125, #8152: local protocol detection
  const rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
  const rnoContent = /^(?:GET|HEAD)$/
  const rprotocol = /^\\/\\//

  /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
  const prefilters = {}

  /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
  const transports = {}

  // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  const allTypes = '*/'.concat('*')

  // Anchor tag for parsing the document origin
  const originAnchor = document.createElement('a')
  originAnchor.href = location.href

  // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
  function addToPrefiltersOrTransports (structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== 'string') {
        func = dataTypeExpression
        dataTypeExpression = '*'
      }

      let dataType
      let i = 0
      const dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || []

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while ((dataType = dataTypes[i++])) {
          // Prepend if requested
          if (dataType[0] === '+') {
            dataType = dataType.slice(1) || '*';
            (structure[dataType] = structure[dataType] || []).unshift(func)

            // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func)
          }
        }
      }
    }
  }

  // Base inspection function for prefilters and transports
  function inspectPrefiltersOrTransports (structure, options, originalOptions, jqXHR) {
    const inspected = {}
    const seekingTransport = (structure === transports)

    function inspect (dataType) {
      let selected
      inspected[dataType] = true
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        const dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR)
        if (typeof dataTypeOrTransport === 'string' &&
				!seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport)
          inspect(dataTypeOrTransport)
          return false
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport)
        }
      })
      return selected
    }

    return inspect(options.dataTypes[0]) || !inspected['*'] && inspect('*')
  }

  // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887
  function ajaxExtend (target, src) {
    let key; let deep
    const flatOptions = jQuery.ajaxSettings.flatOptions || {}

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key]
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep)
    }

    return target
  }

  /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
  function ajaxHandleResponses (s, jqXHR, responses) {
    let ct; let type; let finalDataType; let firstDataType
    const contents = s.contents
    const dataTypes = s.dataTypes

    // Remove auto dataType and get content-type in the process
    while (dataTypes[0] === '*') {
      dataTypes.shift()
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader('Content-Type')
      }
    }

    // Check if we're dealing with a known content-type
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type)
          break
        }
      }
    }

    // Check to see if we have a response for the expected dataType
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0]
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + ' ' + dataTypes[0]]) {
          finalDataType = type
          break
        }
        if (!firstDataType) {
          firstDataType = type
        }
      }

      // Or just use first one
      finalDataType = finalDataType || firstDataType
    }

    // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType)
      }
      return responses[finalDataType]
    }
  }

  /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
  function ajaxConvert (s, response, jqXHR, isSuccess) {
    let conv2; let current; let conv; let tmp; let prev
    const converters = {}

    // Work with a copy of dataTypes in case we need to modify it for conversion
    const dataTypes = s.dataTypes.slice()

    // Create converters map with lowercased keys
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv]
      }
    }

    current = dataTypes.shift()

    // Convert to each sequential dataType
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response
      }

      // Apply the dataFilter if provided
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType)
      }

      prev = current
      current = dataTypes.shift()

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === '*') {
          current = prev

          // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== '*' && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + ' ' + current] || converters['* ' + current]

          // If none found, seek a pair
          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(' ')
              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + ' ' + tmp[0]] ||
								converters['* ' + tmp[0]]
                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]

                    // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0]
                    dataTypes.unshift(tmp[1])
                  }
                  break
                }
              }
            }
          }

          // Apply converter (if not an equivalence)
          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s.throws) {
              response = conv(response)
            } else {
              try {
                response = conv(response)
              } catch (e) {
                return {
                  state: 'parsererror',
                  error: conv ? e : 'No conversion from ' + prev + ' to ' + current
                }
              }
            }
          }
        }
      }
    }

    return { state: 'success', data: response }
  }

  jQuery.extend({

    // Counter for holding the number of active queries
    active: 0,

    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},

    ajaxSettings: {
      url: location.href,
      type: 'GET',
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

      /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

      accepts: {
        '*': allTypes,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },

      contents: {
        xml: /\\bxml\\b/,
        html: /\\bhtml/,
        json: /\\bjson\\b/
      },

      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },

      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {

        // Convert anything to text
        '* text': String,

        // Text to html (true = no transformation)
        'text html': true,

        // Evaluate text as a json expression
        'text json': JSON.parse,

        // Parse text as xml
        'text xml': jQuery.parseXML
      },

      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },

    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function (target, settings) {
      return settings

      // Building a settings object
        ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)

      // Extending ajaxSettings
        : ajaxExtend(jQuery.ajaxSettings, target)
    },

    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),

    // Main method
    ajax: function (url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (typeof url === 'object') {
        options = url
        url = undefined
      }

      // Force options to be an object
      options = options || {}

      let transport

      // URL without anti-cache param
      let cacheURL

      // Response headers
      let responseHeadersString
      let responseHeaders

      // timeout handle
      let timeoutTimer

      // Url cleanup var
      let urlAnchor

      // Request state (becomes false upon send and true upon completion)
      let completed

      // To know if global events are to be dispatched
      let fireGlobals

      // Loop variable
      let i

      // uncached part of the url
      let uncached

      // Create the final options object
      const s = jQuery.ajaxSetup({}, options)

      // Callbacks context
      const callbackContext = s.context || s

      // Context for global events is callbackContext if it is a DOM node or jQuery collection
      const globalEventContext = s.context &&
				(callbackContext.nodeType || callbackContext.jquery)
        ? jQuery(callbackContext)
        : jQuery.event

      // Deferreds
      const deferred = jQuery.Deferred()
      const completeDeferred = jQuery.Callbacks('once memory')

      // Status-dependent callbacks
      let statusCode = s.statusCode || {}

      // Headers (they are sent all at once)
      const requestHeaders = {}
      const requestHeadersNames = {}

      // Default abort message
      let strAbort = 'canceled'

      // Fake xhr
      var jqXHR = {
        readyState: 0,

        // Builds headers hashtable if needed
        getResponseHeader: function (key) {
          let match
          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {}
              while ((match = rheaders.exec(responseHeadersString))) {
                responseHeaders[match[1].toLowerCase() + ' '] =
									(responseHeaders[match[1].toLowerCase() + ' '] || [])
									  .concat(match[2])
              }
            }
            match = responseHeaders[key.toLowerCase() + ' ']
          }
          return match == null ? null : match.join(', ')
        },

        // Raw string
        getAllResponseHeaders: function () {
          return completed ? responseHeadersString : null
        },

        // Caches the header
        setRequestHeader: function (name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] =
							requestHeadersNames[name.toLowerCase()] || name
            requestHeaders[name] = value
          }
          return this
        },

        // Overrides response content-type header
        overrideMimeType: function (type) {
          if (completed == null) {
            s.mimeType = type
          }
          return this
        },

        // Status-dependent callbacks
        statusCode: function (map) {
          let code
          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status])
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                statusCode[code] = [statusCode[code], map[code]]
              }
            }
          }
          return this
        },

        // Cancel the request
        abort: function (statusText) {
          const finalText = statusText || strAbort
          if (transport) {
            transport.abort(finalText)
          }
          done(0, finalText)
          return this
        }
      }

      // Attach deferreds
      deferred.promise(jqXHR)

      // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available
      s.url = ((url || s.url || location.href) + '')
        .replace(rprotocol, location.protocol + '//')

      // Alias method option to type as per ticket #12004
      s.type = options.method || options.type || s.method || s.type

      // Extract dataTypes list
      s.dataTypes = (s.dataType || '*').toLowerCase().match(rnothtmlwhite) || ['']

      // A cross-domain request is in order when the origin doesn't match the current origin.
      if (s.crossDomain == null) {
        urlAnchor = document.createElement('a')

        // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/
        try {
          urlAnchor.href = s.url

          // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative
          urlAnchor.href = urlAnchor.href
          s.crossDomain = originAnchor.protocol + '//' + originAnchor.host !==
					urlAnchor.protocol + '//' + urlAnchor.host
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true
        }
      }

      // Convert data if not already a string
      if (s.data && s.processData && typeof s.data !== 'string') {
        s.data = jQuery.param(s.data, s.traditional)
      }

      // Apply prefilters
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR)

      // If request was aborted inside a prefilter, stop there
      if (completed) {
        return jqXHR
      }

      // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
      fireGlobals = jQuery.event && s.global

      // Watch for a new set of requests
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger('ajaxStart')
      }

      // Uppercase the type
      s.type = s.type.toUpperCase()

      // Determine if request has content
      s.hasContent = !rnoContent.test(s.type)

      // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation
      cacheURL = s.url.replace(rhash, '')

      // More options handling for requests with no content
      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length)

        // If data is available and should be processed, append data to url
        if (s.data && (s.processData || typeof s.data === 'string')) {
          cacheURL += (rquery.test(cacheURL) ? '&' : '?') + s.data

          // #9682: remove data so that it's not used in an eventual retry
          delete s.data
        }

        // Add or update anti-cache param if needed
        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, '$1')
          uncached = (rquery.test(cacheURL) ? '&' : '?') + '_=' + (nonce.guid++) +
					uncached
        }

        // Put hash and anti-cache on the URL that will be requested (gh-1732)
        s.url = cacheURL + uncached

        // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData &&
			(s.contentType || '').indexOf('application/x-www-form-urlencoded') === 0) {
        s.data = s.data.replace(r20, '+')
      }

      // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader('If-Modified-Since', jQuery.lastModified[cacheURL])
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader('If-None-Match', jQuery.etag[cacheURL])
        }
      }

      // Set the correct header, if data is being sent
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader('Content-Type', s.contentType)
      }

      // Set the Accepts header for the server, depending on the dataType
      jqXHR.setRequestHeader(
        'Accept',
        s.dataTypes[0] && s.accepts[s.dataTypes[0]]
          ? s.accepts[s.dataTypes[0]] +
					(s.dataTypes[0] !== '*' ? ', ' + allTypes + '; q=0.01' : '')
          : s.accepts['*']
      )

      // Check for headers option
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i])
      }

      // Allow custom headers/mimetypes and early abort
      if (s.beforeSend &&
			(s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort()
      }

      // Aborting is no longer a cancellation
      strAbort = 'abort'

      // Install callbacks on deferreds
      completeDeferred.add(s.complete)
      jqXHR.done(s.success)
      jqXHR.fail(s.error)

      // Get transport
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)

      // If no transport, we auto-abort
      if (!transport) {
        done(-1, 'No Transport')
      } else {
        jqXHR.readyState = 1

        // Send global event
        if (fireGlobals) {
          globalEventContext.trigger('ajaxSend', [jqXHR, s])
        }

        // If request was aborted inside ajaxSend, stop there
        if (completed) {
          return jqXHR
        }

        // Timeout
        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort('timeout')
          }, s.timeout)
        }

        try {
          completed = false
          transport.send(requestHeaders, done)
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e
          }

          // Propagate others as results
          done(-1, e)
        }
      }

      // Callback for when everything is done
      function done (status, nativeStatusText, responses, headers) {
        let isSuccess; let success; let error; let response; let modified
        let statusText = nativeStatusText

        // Ignore repeat invocations
        if (completed) {
          return
        }

        completed = true

        // Clear timeout if it exists
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer)
        }

        // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)
        transport = undefined

        // Cache response headers
        responseHeadersString = headers || ''

        // Set readyState
        jqXHR.readyState = status > 0 ? 4 : 0

        // Determine if successful
        isSuccess = status >= 200 && status < 300 || status === 304

        // Get response data
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses)
        }

        // Use a noop converter for missing script
        if (!isSuccess && jQuery.inArray('script', s.dataTypes) > -1) {
          s.converters['text script'] = function () {}
        }

        // Convert no matter what (that way responseXXX fields are always set)
        response = ajaxConvert(s, response, jqXHR, isSuccess)

        // If successful, handle type chaining
        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader('Last-Modified')
            if (modified) {
              jQuery.lastModified[cacheURL] = modified
            }
            modified = jqXHR.getResponseHeader('etag')
            if (modified) {
              jQuery.etag[cacheURL] = modified
            }
          }

          // if no content
          if (status === 204 || s.type === 'HEAD') {
            statusText = 'nocontent'

            // if not modified
          } else if (status === 304) {
            statusText = 'notmodified'

            // If we have data, let's convert it
          } else {
            statusText = response.state
            success = response.data
            error = response.error
            isSuccess = !error
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText
          if (status || !statusText) {
            statusText = 'error'
            if (status < 0) {
              status = 0
            }
          }
        }

        // Set data for the fake xhr object
        jqXHR.status = status
        jqXHR.statusText = (nativeStatusText || statusText) + ''

        // Success/Error
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR])
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error])
        }

        // Status-dependent callbacks
        jqXHR.statusCode(statusCode)
        statusCode = undefined

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? 'ajaxSuccess' : 'ajaxError',
            [jqXHR, s, isSuccess ? success : error])
        }

        // Complete
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText])

        if (fireGlobals) {
          globalEventContext.trigger('ajaxComplete', [jqXHR, s])

          // Handle the global AJAX counter
          if (!(--jQuery.active)) {
            jQuery.event.trigger('ajaxStop')
          }
        }
      }

      return jqXHR
    },

    getJSON: function (url, data, callback) {
      return jQuery.get(url, data, callback, 'json')
    },

    getScript: function (url, callback) {
      return jQuery.get(url, undefined, callback, 'script')
    }
  })

  jQuery.each(['get', 'post'], function (_i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback
        callback = data
        data = undefined
      }

      // The url can be an options object (which then must have .url)
      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url))
    }
  })

  jQuery.ajaxPrefilter(function (s) {
    let i
    for (i in s.headers) {
      if (i.toLowerCase() === 'content-type') {
        s.contentType = s.headers[i] || ''
      }
    }
  })

  jQuery._evalUrl = function (url, options, doc) {
    return jQuery.ajax({
      url: url,

      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: 'GET',
      dataType: 'script',
      cache: true,
      async: false,
      global: false,

      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        'text script': function () {}
      },
      dataFilter: function (response) {
        jQuery.globalEval(response, options, doc)
      }
    })
  }

  jQuery.fn.extend({
    wrapAll: function (html) {
      let wrap

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0])
        }

        // The elements to wrap the target around
        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true)

        if (this[0].parentNode) {
          wrap.insertBefore(this[0])
        }

        wrap.map(function () {
          let elem = this

          while (elem.firstElementChild) {
            elem = elem.firstElementChild
          }

          return elem
        }).append(this)
      }

      return this
    },

    wrapInner: function (html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i))
        })
      }

      return this.each(function () {
        const self = jQuery(this)
        const contents = self.contents()

        if (contents.length) {
          contents.wrapAll(html)
        } else {
          self.append(html)
        }
      })
    },

    wrap: function (html) {
      const htmlIsFunction = isFunction(html)

      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html)
      })
    },

    unwrap: function (selector) {
      this.parent(selector).not('body').each(function () {
        jQuery(this).replaceWith(this.childNodes)
      })
      return this
    }
  })

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem)
  }
  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
  }

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest()
    } catch (e) {}
  }

  const xhrSuccessStatus = {

    // File protocol always yields status code 0, assume 200
    0: 200,

    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  }
  let xhrSupported = jQuery.ajaxSettings.xhr()

  support.cors = !!xhrSupported && ('withCredentials' in xhrSupported)
  support.ajax = xhrSupported = !!xhrSupported

  jQuery.ajaxTransport(function (options) {
    let callback, errorCallback

    // Cross domain only allowed if supported through XMLHttpRequest
    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function (headers, complete) {
          let i
          const xhr = options.xhr()

          xhr.open(
            options.type,
            options.url,
            options.async,
            options.username,
            options.password
          )

          // Apply custom fields if provided
          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i]
            }
          }

          // Override mime type if needed
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType)
          }

          // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.
          if (!options.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest'
          }

          // Set headers
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i])
          }

          // Callback
          callback = function (type) {
            return function () {
              if (callback) {
                callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null

                if (type === 'abort') {
                  xhr.abort()
                } else if (type === 'error') {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== 'number') {
                    complete(0, 'error')
                  } else {
                    complete(

                      // File: protocol always yields status 0; see #8605, #14207
                      xhr.status,
                      xhr.statusText
                    )
                  }
                } else {
                  complete(
                    xhrSuccessStatus[xhr.status] || xhr.status,
                    xhr.statusText,

                    // Support: IE <=9 only
                    // IE9 has no XHR2 but throws on binary (trac-11426)
                    // For XHR2 non-text, let the caller handle it (gh-2498)
                    (xhr.responseType || 'text') !== 'text' ||
									typeof xhr.responseText !== 'string'
                      ? { binary: xhr.response }
                      : { text: xhr.responseText },
                    xhr.getAllResponseHeaders()
                  )
                }
              }
            }
          }

          // Listen to events
          xhr.onload = callback()
          errorCallback = xhr.onerror = xhr.ontimeout = callback('error')

          // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts
          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (callback) {
                    errorCallback()
                  }
                })
              }
            }
          }

          // Create the abort callback
          callback = callback('abort')

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null)
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (callback) {
              throw e
            }
          }
        },

        abort: function () {
          if (callback) {
            callback()
          }
        }
      }
    }
  })

  // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false
    }
  })

  // Install script dataType
  jQuery.ajaxSetup({
    accepts: {
      script: 'text/javascript, application/javascript, ' +
			'application/ecmascript, application/x-ecmascript'
    },
    contents: {
      script: /\\b(?:java|ecma)script\\b/
    },
    converters: {
      'text script': function (text) {
        jQuery.globalEval(text)
        return text
      }
    }
  })

  // Handle cache's special case and crossDomain
  jQuery.ajaxPrefilter('script', function (s) {
    if (s.cache === undefined) {
      s.cache = false
    }
    if (s.crossDomain) {
      s.type = 'GET'
    }
  })

  // Bind script tag hack transport
  jQuery.ajaxTransport('script', function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      let script, callback
      return {
        send: function (_, complete) {
          script = jQuery('<script>')
            .attr(s.scriptAttrs || {})
            .prop({ charset: s.scriptCharset, src: s.url })
            .on('load error', callback = function (evt) {
              script.remove()
              callback = null
              if (evt) {
                complete(evt.type === 'error' ? 404 : 200, evt.type)
              }
            })

          // Use native DOM manipulation to avoid our domManip AJAX trickery
          document.head.appendChild(script[0])
        },
        abort: function () {
          if (callback) {
            callback()
          }
        }
      }
    }
  })

  const oldCallbacks = []
  const rjsonp = /(=)\\?(?=&|$)|\\?\\?/

  // Default jsonp settings
  jQuery.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      const callback = oldCallbacks.pop() || (jQuery.expando + '_' + (nonce.guid++))
      this[callback] = true
      return callback
    }
  })

  // Detect, normalize options and install callbacks for jsonp requests
  jQuery.ajaxPrefilter('json jsonp', function (s, originalSettings, jqXHR) {
    let callbackName; let overwritten; let responseContainer
    const jsonProp = s.jsonp !== false && (rjsonp.test(s.url)
      ? 'url'
      : typeof s.data === 'string' &&
				(s.contentType || '')
				  .indexOf('application/x-www-form-urlencoded') === 0 &&
				rjsonp.test(s.data) && 'data'
    )

    // Handle iff the expected data type is "jsonp" or we have a parameter to set
    if (jsonProp || s.dataTypes[0] === 'jsonp') {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback)
        ? s.jsonpCallback()
        : s.jsonpCallback

      // Insert callback into url or form data
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, '$1' + callbackName)
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? '&' : '?') + s.jsonp + '=' + callbackName
      }

      // Use data converter to retrieve json after script execution
      s.converters['script json'] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + ' was not called')
        }
        return responseContainer[0]
      }

      // Force json dataType
      s.dataTypes[0] = 'json'

      // Install callback
      overwritten = window[callbackName]
      window[callbackName] = function () {
        responseContainer = arguments
      }

      // Clean-up function (fires after converters)
      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName)

          // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten
        }

        // Save back as free
        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback

          // Save the callback name for future use
          oldCallbacks.push(callbackName)
        }

        // Call if it was a function and we have a response
        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0])
        }

        responseContainer = overwritten = undefined
      })

      // Delegate to script
      return 'script'
    }
  })

  // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337
  support.createHTMLDocument = (function () {
    const body = document.implementation.createHTMLDocument('').body
    body.innerHTML = '<form></form><form></form>'
    return body.childNodes.length === 2
  })()

  // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string
  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== 'string') {
      return []
    }
    if (typeof context === 'boolean') {
      keepScripts = context
      context = false
    }

    let base, parsed, scripts

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument('')

        // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)
        base = context.createElement('base')
        base.href = document.location.href
        context.head.appendChild(base)
      } else {
        context = document
      }
    }

    parsed = rsingleTag.exec(data)
    scripts = !keepScripts && []

    // Single tag
    if (parsed) {
      return [context.createElement(parsed[1])]
    }

    parsed = buildFragment([data], context, scripts)

    if (scripts && scripts.length) {
      jQuery(scripts).remove()
    }

    return jQuery.merge([], parsed.childNodes)
  }

  /**
 * Load a url into a page
 */
  jQuery.fn.load = function (url, params, callback) {
    let selector; let type; let response
    const self = this
    const off = url.indexOf(' ')

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off))
      url = url.slice(0, off)
    }

    // If it's a function
    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params
      params = undefined

      // Otherwise, build a param string
    } else if (params && typeof params === 'object') {
      type = 'POST'
    }

    // If we have elements to modify, make the request
    if (self.length > 0) {
      jQuery.ajax({
        url: url,

        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || 'GET',
        dataType: 'html',
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments

        self.html(selector

        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
          ? jQuery('<div>').append(jQuery.parseHTML(responseText)).find(selector)

        // Otherwise use the full result
          : responseText)

        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR])
        })
      })
    }

    return this
  }

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem
    }).length
  }

  jQuery.offset = {
    setOffset: function (elem, options, i) {
      let curPosition; let curLeft; let curCSSTop; let curTop; let curOffset; let curCSSLeft; let calculatePosition
      const position = jQuery.css(elem, 'position')
      const curElem = jQuery(elem)
      const props = {}

      // Set position first, in-case top/left are set even on static elem
      if (position === 'static') {
        elem.style.position = 'relative'
      }

      curOffset = curElem.offset()
      curCSSTop = jQuery.css(elem, 'top')
      curCSSLeft = jQuery.css(elem, 'left')
      calculatePosition = (position === 'absolute' || position === 'fixed') &&
			(curCSSTop + curCSSLeft).indexOf('auto') > -1

      // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed
      if (calculatePosition) {
        curPosition = curElem.position()
        curTop = curPosition.top
        curLeft = curPosition.left
      } else {
        curTop = parseFloat(curCSSTop) || 0
        curLeft = parseFloat(curCSSLeft) || 0
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset))
      }

      if (options.top != null) {
        props.top = (options.top - curOffset.top) + curTop
      }
      if (options.left != null) {
        props.left = (options.left - curOffset.left) + curLeft
      }

      if ('using' in options) {
        options.using.call(elem, props)
      } else {
        if (typeof props.top === 'number') {
          props.top += 'px'
        }
        if (typeof props.left === 'number') {
          props.left += 'px'
        }
        curElem.css(props)
      }
    }
  }

  jQuery.fn.extend({

    // offset() relates an element's border box to the document origin
    offset: function (options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined
          ? this
          : this.each(function (i) {
            jQuery.offset.setOffset(this, options, i)
          })
      }

      let rect; let win
      const elem = this[0]

      if (!elem) {
        return
      }

      // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error
      if (!elem.getClientRects().length) {
        return { top: 0, left: 0 }
      }

      // Get document-relative position by adding viewport scroll to viewport-relative gBCR
      rect = elem.getBoundingClientRect()
      win = elem.ownerDocument.defaultView
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      }
    },

    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function () {
      if (!this[0]) {
        return
      }

      let offsetParent; let offset; let doc
      const elem = this[0]
      let parentOffset = { top: 0, left: 0 }

      // position:fixed elements are offset from the viewport, which itself always has zero offset
      if (jQuery.css(elem, 'position') === 'fixed') {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect()
      } else {
        offset = this.offset()

        // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified
        doc = elem.ownerDocument
        offsetParent = elem.offsetParent || doc.documentElement
        while (offsetParent &&
				(offsetParent === doc.body || offsetParent === doc.documentElement) &&
				jQuery.css(offsetParent, 'position') === 'static') {
          offsetParent = offsetParent.parentNode
        }
        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset()
          parentOffset.top += jQuery.css(offsetParent, 'borderTopWidth', true)
          parentOffset.left += jQuery.css(offsetParent, 'borderLeftWidth', true)
        }
      }

      // Subtract parent offsets and element margins
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, 'marginTop', true),
        left: offset.left - parentOffset.left - jQuery.css(elem, 'marginLeft', true)
      }
    },

    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function () {
      return this.map(function () {
        let offsetParent = this.offsetParent

        while (offsetParent && jQuery.css(offsetParent, 'position') === 'static') {
          offsetParent = offsetParent.offsetParent
        }

        return offsetParent || documentElement
      })
    }
  })

  // Create scrollLeft and scrollTop methods
  jQuery.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (method, prop) {
    const top = prop === 'pageYOffset'

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        let win
        if (isWindow(elem)) {
          win = elem
        } else if (elem.nodeType === 9) {
          win = elem.defaultView
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method]
        }

        if (win) {
          win.scrollTo(
            !top ? val : win.pageXOffset,
            top ? val : win.pageYOffset
          )
        } else {
          elem[method] = val
        }
      }, method, val, arguments.length)
    }
  })

  // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here
  jQuery.each(['top', 'left'], function (_i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
      function (elem, computed) {
        if (computed) {
          computed = curCSS(elem, prop)

          // If curCSS returns percentage, fallback to offset
          return rnumnonpx.test(computed)
            ? jQuery(elem).position()[prop] + 'px'
            : computed
        }
      }
    )
  })

  // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
  jQuery.each({ Height: 'height', Width: 'width' }, function (name, type) {
    jQuery.each({ padding: 'inner' + name, content: type, '': 'outer' + name },
      function (defaultExtra, funcName) {
        // Margin is only for outerHeight, outerWidth
        jQuery.fn[funcName] = function (margin, value) {
          const chainable = arguments.length && (defaultExtra || typeof margin !== 'boolean')
          const extra = defaultExtra || (margin === true || value === true ? 'margin' : 'border')

          return access(this, function (elem, type, value) {
            let doc

            if (isWindow(elem)) {
              // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
              return funcName.indexOf('outer') === 0
                ? elem['inner' + name]
                : elem.document.documentElement['client' + name]
            }

            // Get document width or height
            if (elem.nodeType === 9) {
              doc = elem.documentElement

              // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
              // whichever is greatest
              return Math.max(
                elem.body['scroll' + name], doc['scroll' + name],
                elem.body['offset' + name], doc['offset' + name],
                doc['client' + name]
              )
            }

            return value === undefined

            // Get width or height on the element, requesting but not forcing parseFloat
              ? jQuery.css(elem, type, extra)

            // Set width or height on the element
              : jQuery.style(elem, type, value, extra)
          }, type, chainable ? margin : undefined, chainable)
        }
      })
  })

  jQuery.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'
  ], function (_i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn)
    }
  })

  jQuery.fn.extend({

    bind: function (types, data, fn) {
      return this.on(types, null, data, fn)
    },
    unbind: function (types, fn) {
      return this.off(types, null, fn)
    },

    delegate: function (selector, types, data, fn) {
      return this.on(types, selector, data, fn)
    },
    undelegate: function (selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1
        ? this.off(selector, '**')
        : this.off(types, selector || '**', fn)
    },

    hover: function (fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
    }
  })

  jQuery.each(('blur focus focusin focusout resize scroll click dblclick ' +
	'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' +
	'change select submit keydown keypress keyup contextmenu').split(' '),
  function (_i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0
        ? this.on(name, null, data, fn)
        : this.trigger(name)
    }
  })

  // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  const rtrim = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g

  // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon
  jQuery.proxy = function (fn, context) {
    let tmp, args, proxy

    if (typeof context === 'string') {
      tmp = fn[context]
      context = fn
      fn = tmp
    }

    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if (!isFunction(fn)) {
      return undefined
    }

    // Simulated bind
    args = slice.call(arguments, 2)
    proxy = function () {
      return fn.apply(context || this, args.concat(slice.call(arguments)))
    }

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || jQuery.guid++

    return proxy
  }

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++
    } else {
      jQuery.ready(true)
    }
  }
  jQuery.isArray = Array.isArray
  jQuery.parseJSON = JSON.parse
  jQuery.nodeName = nodeName
  jQuery.isFunction = isFunction
  jQuery.isWindow = isWindow
  jQuery.camelCase = camelCase
  jQuery.type = toType

  jQuery.now = Date.now

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    const type = jQuery.type(obj)
    return (type === 'number' || type === 'string') &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN(obj - parseFloat(obj))
  }

  jQuery.trim = function (text) {
    return text == null
      ? ''
      : (text + '').replace(rtrim, '')
  }

  // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.

  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

  if (typeof define === 'function' && define.amd) {
    define('jquery', [], function () {
      return jQuery
    })
  }

  const

    // Map over jQuery in case of overwrite
    _jQuery = window.jQuery

  // Map over the $ in case of overwrite
  const _$ = window.$

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery
    }

    return jQuery
  }

  // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)
  if (typeof noGlobal === 'undefined') {
    window.jQuery = window.$ = jQuery
  }

  return jQuery
})
`,Rl=`/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
(function (global, factory) {
  'use strict'

  if (typeof module === 'object' && typeof module.exports === 'object') {
    // For CommonJS and CommonJS-like environments where a proper \`window\`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a \`window\` with a \`document\`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real \`window\`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document
      ? factory(global, true)
      : function (w) {
        if (!w.document) {
          throw new Error('jQuery requires a window with a document')
        }
        return factory(w)
      }
  } else {
    factory(global)
  }

// Pass this if window is not defined yet
})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  'use strict'

  const arr = []

  const getProto = Object.getPrototypeOf

  const slice = arr.slice

  const flat = arr.flat ? function (array) {
    return arr.flat.call(array)
  } : function (array) {
    return arr.concat.apply([], array)
  }

  const push = arr.push

  const indexOf = arr.indexOf

  const class2type = {}

  const toString = class2type.toString

  const hasOwn = class2type.hasOwnProperty

  const fnToString = hasOwn.toString

  const ObjectFunctionString = fnToString.call(Object)

  const support = {}

  const isFunction = function isFunction (obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., \`typeof document.createElement( "object" ) === "function"\`).
    // We don't want to classify *any* DOM node as a function.
    // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
    // Plus for old WebKit, typeof returns "function" for HTML collections
    // (e.g., \`typeof document.getElementsByTagName("div") === "function"\`). (gh-4756)
    return typeof obj === 'function' && typeof obj.nodeType !== 'number' &&
			typeof obj.item !== 'function'
  }

  const isWindow = function isWindow (obj) {
    return obj != null && obj === obj.window
  }

  const document = window.document

  const preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  }

  function DOMEval (code, node, doc) {
    doc = doc || document

    let i; let val
    const script = doc.createElement('script')

    script.text = code
    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using \`getAttribute\` is not enough as
        // the \`nonce\` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The \`node.getAttribute\` check was added for the sake of
        // \`jQuery.globalEval\` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i)
        if (val) {
          script.setAttribute(i, val)
        }
      }
    }
    doc.head.appendChild(script).parentNode.removeChild(script)
  }

  function toType (obj) {
    if (obj == null) {
      return obj + ''
    }

    // Support: Android <=2.3 only (functionish RegExp)
    return typeof obj === 'object' || typeof obj === 'function'
      ? class2type[toString.call(obj)] || 'object'
      : typeof obj
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module

  const
    version = '3.6.0'

  // Define a local copy of jQuery
  var jQuery = function (selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context)
  }

  jQuery.fn = jQuery.prototype = {

    // The current version of jQuery being used
    jquery: version,

    constructor: jQuery,

    // The default length of a jQuery object is 0
    length: 0,

    toArray: function () {
      return slice.call(this)
    },

    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function (num) {
      // Return all the elements in a clean array
      if (num == null) {
        return slice.call(this)
      }

      // Return just the one element from the set
      return num < 0 ? this[num + this.length] : this[num]
    },

    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function (elems) {
      // Build a new jQuery matched element set
      const ret = jQuery.merge(this.constructor(), elems)

      // Add the old object onto the stack (as a reference)
      ret.prevObject = this

      // Return the newly-formed element set
      return ret
    },

    // Execute a callback for every element in the matched set.
    each: function (callback) {
      return jQuery.each(this, callback)
    },

    map: function (callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem)
      }))
    },

    slice: function () {
      return this.pushStack(slice.apply(this, arguments))
    },

    first: function () {
      return this.eq(0)
    },

    last: function () {
      return this.eq(-1)
    },

    even: function () {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return (i + 1) % 2
      }))
    },

    odd: function () {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return i % 2
      }))
    },

    eq: function (i) {
      const len = this.length
      const j = +i + (i < 0 ? len : 0)
      return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
    },

    end: function () {
      return this.prevObject || this.constructor()
    },

    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  }

  jQuery.extend = jQuery.fn.extend = function () {
    let options; let name; let src; let copy; let copyIsArray; let clone
    let target = arguments[0] || {}
    let i = 1
    const length = arguments.length
    let deep = false

    // Handle a deep copy situation
    if (typeof target === 'boolean') {
      deep = target

      // Skip the boolean and the target
      target = arguments[i] || {}
      i++
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== 'object' && !isFunction(target)) {
      target = {}
    }

    // Extend jQuery itself if only one argument is passed
    if (i === length) {
      target = this
      i--
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]

          // Prevent Object.prototype pollution
          // Prevent never-ending loop
          if (name === '__proto__' || target === copy) {
            continue
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (jQuery.isPlainObject(copy) ||
					(copyIsArray = Array.isArray(copy)))) {
            src = target[name]

            // Ensure proper type for the source value
            if (copyIsArray && !Array.isArray(src)) {
              clone = []
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {}
            } else {
              clone = src
            }
            copyIsArray = false

            // Never move original objects, clone them
            target[name] = jQuery.extend(deep, clone, copy)

            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy
          }
        }
      }
    }

    // Return the modified object
    return target
  }

  jQuery.extend({

    // Unique for each copy of jQuery on the page
    expando: 'jQuery' + (version + Math.random()).replace(/\\D/g, ''),

    // Assume jQuery is ready without the ready module
    isReady: true,

    error: function (msg) {
      throw new Error(msg)
    },

    noop: function () {},

    isPlainObject: function (obj) {
      let proto, Ctor

      // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects
      if (!obj || toString.call(obj) !== '[object Object]') {
        return false
      }

      proto = getProto(obj)

      // Objects with no prototype (e.g., \`Object.create( null )\`) are plain
      if (!proto) {
        return true
      }

      // Objects with prototype are plain iff they were constructed by a global Object function
      Ctor = hasOwn.call(proto, 'constructor') && proto.constructor
      return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString
    },

    isEmptyObject: function (obj) {
      let name

      for (name in obj) {
        return false
      }
      return true
    },

    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function (code, options, doc) {
      DOMEval(code, { nonce: options && options.nonce }, doc)
    },

    each: function (obj, callback) {
      let length; let i = 0

      if (isArrayLike(obj)) {
        length = obj.length
        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break
          }
        }
      }

      return obj
    },

    // results is for internal usage only
    makeArray: function (arr, results) {
      const ret = results || []

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret,
            typeof arr === 'string'
              ? [arr] : arr
          )
        } else {
          push.call(ret, arr)
        }
      }

      return ret
    },

    inArray: function (elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i)
    },

    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function (first, second) {
      const len = +second.length
      let j = 0
      let i = first.length

      for (; j < len; j++) {
        first[i++] = second[j]
      }

      first.length = i

      return first
    },

    grep: function (elems, callback, invert) {
      let callbackInverse
      const matches = []
      let i = 0
      const length = elems.length
      const callbackExpect = !invert

      // Go through the array, only saving the items
      // that pass the validator function
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i)
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i])
        }
      }

      return matches
    },

    // arg is for internal usage only
    map: function (elems, callback, arg) {
      let length; let value
      let i = 0
      const ret = []

      // Go through the array, translating each of the items to their new values
      if (isArrayLike(elems)) {
        length = elems.length
        for (; i < length; i++) {
          value = callback(elems[i], i, arg)

          if (value != null) {
            ret.push(value)
          }
        }

        // Go through every key on the object,
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg)

          if (value != null) {
            ret.push(value)
          }
        }
      }

      // Flatten any nested arrays
      return flat(ret)
    },

    // A global GUID counter for objects
    guid: 1,

    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  })

  if (typeof Symbol === 'function') {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]
  }

  // Populate the class2type map
  jQuery.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
    function (_i, name) {
      class2type['[object ' + name + ']'] = name.toLowerCase()
    })

  function isArrayLike (obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // \`in\` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    const length = !!obj && 'length' in obj && obj.length
    const type = toType(obj)

    if (isFunction(obj) || isWindow(obj)) {
      return false
    }

    return type === 'array' || length === 0 ||
		typeof length === 'number' && length > 0 && (length - 1) in obj
  }
  const Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
(function (window) {
  let i
  let support
  let Expr
  let getText
  let isXML
  let tokenize
  let compile
  let select
  let outermostContext
  let sortInput
  let hasDuplicate

  // Local document vars
  let setDocument
  let document
  let docElem
  let documentIsHTML
  let rbuggyQSA
  let rbuggyMatches
  let matches
  let contains

  // Instance-specific data
  const expando = 'sizzle' + 1 * new Date()
  const preferredDoc = window.document
  let dirruns = 0
  let done = 0
  const classCache = createCache()
  const tokenCache = createCache()
  const compilerCache = createCache()
  const nonnativeSelectorCache = createCache()
  let sortOrder = function (a, b) {
    if (a === b) {
      hasDuplicate = true
    }
    return 0
  }

  // Instance methods
  const hasOwn = ({}).hasOwnProperty
  let arr = []
  const pop = arr.pop
  const pushNative = arr.push
  let push = arr.push
  const slice = arr.slice

  // Use a stripped-down indexOf as it's faster than native
  // https://jsperf.com/thor-indexof-vs-for/5
  const indexOf = function (list, elem) {
    let i = 0
    const len = list.length
    for (; i < len; i++) {
      if (list[i] === elem) {
        return i
      }
    }
    return -1
  }

  const booleans = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|' +
		'ismap|loop|multiple|open|readonly|required|scoped'

  // Regular expressions

  // http://www.w3.org/TR/css3-selectors/#whitespace
  const whitespace = '[\\\\x20\\\\t\\\\r\\\\n\\\\f]'

  // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
  const identifier = '(?:\\\\\\\\[\\\\da-fA-F]{1,6}' + whitespace +
		'?|\\\\\\\\[^\\\\r\\\\n\\\\f]|[\\\\w-]|[^\\0-\\\\x7f])+'

  // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
  const attributes = '\\\\[' + whitespace + '*(' + identifier + ')(?:' + whitespace +

		// Operator (capture 2)
		'*([*^$|!~]?=)' + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\"|(" + identifier + '))|)' +
		whitespace + '*\\\\]'

  const pseudos = ':(' + identifier + ')(?:\\\\((' +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\")|" +

		// 2. simple (capture 6)
		'((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|' + attributes + ')*)|' +

		// 3. anything else (capture 2)
		'.*' +
		')\\\\)|)'

  // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  const rwhitespace = new RegExp(whitespace + '+', 'g')
  const rtrim = new RegExp('^' + whitespace + '+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)' +
		whitespace + '+$', 'g')

  const rcomma = new RegExp('^' + whitespace + '*,' + whitespace + '*')
  const rcombinators = new RegExp('^' + whitespace + '*([>+~]|' + whitespace + ')' + whitespace +
		'*')
  const rdescend = new RegExp(whitespace + '|>')

  const rpseudo = new RegExp(pseudos)
  const ridentifier = new RegExp('^' + identifier + '$')

  const matchExpr = {
    ID: new RegExp('^#(' + identifier + ')'),
    CLASS: new RegExp('^\\\\.(' + identifier + ')'),
    TAG: new RegExp('^(' + identifier + '|[*])'),
    ATTR: new RegExp('^' + attributes),
    PSEUDO: new RegExp('^' + pseudos),
    CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(' +
			whitespace + '*(even|odd|(([+-]|)(\\\\d*)n|)' + whitespace + '*(?:([+-]|)' +
			whitespace + '*(\\\\d+)|))' + whitespace + '*\\\\)|)', 'i'),
    bool: new RegExp('^(?:' + booleans + ')$', 'i'),

    // For use in libraries implementing .is()
    // We use this for POS matching in \`select\`
    needsContext: new RegExp('^' + whitespace +
			'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(' + whitespace +
			'*((?:-\\\\d)?\\\\d*)' + whitespace + '*\\\\)|)(?=[^-]|$)', 'i')
  }

  const rhtml = /HTML$/i
  const rinputs = /^(?:input|select|textarea|button)$/i
  const rheader = /^h\\d$/i

  const rnative = /^[^{]+\\{\\s*\\[native \\w/

  // Easily-parseable/retrievable ID or TAG or CLASS selectors
  const rquickExpr = /^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/

  const rsibling = /[+~]/

  // CSS escapes
  // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
  const runescape = new RegExp('\\\\\\\\[\\\\da-fA-F]{1,6}' + whitespace + '?|\\\\\\\\([^\\\\r\\\\n\\\\f])', 'g')
  const funescape = function (escape, nonHex) {
    const high = '0x' + escape.slice(1) - 0x10000

    return nonHex || (high < 0
      ? String.fromCharCode(high + 0x10000)
      : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00))
  }

  // CSS string/identifier serialization
  // https://drafts.csswg.org/cssom/#common-serializing-idioms
  const rcssescape = /([\\0-\\x1f\\x7f]|^-?\\d)|^-$|[^\\0-\\x1f\\x7f-\\uFFFF\\w-]/g
  const fcssescape = function (ch, asCodePoint) {
    if (asCodePoint) {
      // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
      if (ch === '\\0') {
        return '\\uFFFD'
      }

      // Control characters and (dependent upon position) numbers get escaped as code points
      return ch.slice(0, -1) + '\\\\' +
				ch.charCodeAt(ch.length - 1).toString(16) + ' '
    }

    // Other potentially-special ASCII characters get backslash-escaped
    return '\\\\' + ch
  }

  // Used for iframes
  // See setDocument()
  // Removing the function wrapper causes a "Permission Denied"
  // error in IE
  const unloadHandler = function () {
    setDocument()
  }

  const inDisabledFieldset = addCombinator(
    function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === 'fieldset'
    },
    { dir: 'parentNode', next: 'legend' }
  )

  // Optimize for push.apply( _, NodeList )
  try {
    push.apply(
      (arr = slice.call(preferredDoc.childNodes)),
      preferredDoc.childNodes
    )

    // Support: Android<4.0
    // Detect silently failing push.apply
    // eslint-disable-next-line no-unused-expressions
    arr[preferredDoc.childNodes.length].nodeType
  } catch (e) {
    push = {
      apply: arr.length

      // Leverage slice if possible
        ? function (target, els) {
          pushNative.apply(target, slice.call(els))
        }

      // Support: IE<9
      // Otherwise append directly
        : function (target, els) {
          let j = target.length
          let i = 0

          // Can't trust NodeList.length
          while ((target[j++] = els[i++])) {}
          target.length = j - 1
        }
    }
  }

  function Sizzle (selector, context, results, seed) {
    let m; let i; let elem; let nid; let match; let groups; let newSelector
    let newContext = context && context.ownerDocument

    // nodeType defaults to 9, since context defaults to document
    const nodeType = context ? context.nodeType : 9

    results = results || []

    // Return early from calls with invalid selector or context
    if (typeof selector !== 'string' || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
      return results
    }

    // Try to shortcut find operations (as opposed to filters) in HTML documents
    if (!seed) {
      setDocument(context)
      context = context || document

      if (documentIsHTML) {
        // If the selector is sufficiently simple, try using a "get*By*" DOM method
        // (excepting DocumentFragment context, where the methods don't exist)
        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
          // ID selector
          if ((m = match[1])) {
            // Document context
            if (nodeType === 9) {
              if ((elem = context.getElementById(m))) {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (elem.id === m) {
                  results.push(elem)
                  return results
                }
              } else {
                return results
              }

              // Element context
            } else {
              // Support: IE, Opera, Webkit
              // TODO: identify versions
              // getElementById can match elements by name instead of ID
              if (newContext && (elem = newContext.getElementById(m)) &&
							contains(context, elem) &&
							elem.id === m) {
                results.push(elem)
                return results
              }
            }

            // Type selector
          } else if (match[2]) {
            push.apply(results, context.getElementsByTagName(selector))
            return results

            // Class selector
          } else if ((m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {
            push.apply(results, context.getElementsByClassName(m))
            return results
          }
        }

        // Take advantage of querySelectorAll
        if (support.qsa &&
				!nonnativeSelectorCache[selector + ' '] &&
				(!rbuggyQSA || !rbuggyQSA.test(selector)) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== 'object')) {
          newSelector = selector
          newContext = context

          // qSA considers elements outside a scoping root when evaluating child or
          // descendant combinators, which is not what we want.
          // In such cases, we work around the behavior by prefixing every selector in the
          // list with an ID selector referencing the scope context.
          // The technique has to be used as well when a leading combinator is used
          // as such selectors are not recognized by querySelectorAll.
          // Thanks to Andrew Dupont for this technique.
          if (nodeType === 1 &&
					(rdescend.test(selector) || rcombinators.test(selector))) {
            // Expand context for sibling selectors
            newContext = rsibling.test(selector) && testContext(context.parentNode) ||
						context

            // We can use :scope instead of the ID hack if the browser
            // supports it & if we're not changing the context.
            if (newContext !== context || !support.scope) {
              // Capture the context ID, setting it first if necessary
              if ((nid = context.getAttribute('id'))) {
                nid = nid.replace(rcssescape, fcssescape)
              } else {
                context.setAttribute('id', (nid = expando))
              }
            }

            // Prefix every selector in the list
            groups = tokenize(selector)
            i = groups.length
            while (i--) {
              groups[i] = (nid ? '#' + nid : ':scope') + ' ' +
							toSelector(groups[i])
            }
            newSelector = groups.join(',')
          }

          try {
            push.apply(results,
              newContext.querySelectorAll(newSelector)
            )
            return results
          } catch (qsaError) {
            nonnativeSelectorCache(selector, true)
          } finally {
            if (nid === expando) {
              context.removeAttribute('id')
            }
          }
        }
      }
    }

    // All others
    return select(selector.replace(rtrim, '$1'), context, results, seed)
  }

  /**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
  function createCache () {
    const keys = []

    function cache (key, value) {
      // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
      if (keys.push(key + ' ') > Expr.cacheLength) {
        // Only keep the most recent entries
        delete cache[keys.shift()]
      }
      return (cache[key + ' '] = value)
    }
    return cache
  }

  /**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
  function markFunction (fn) {
    fn[expando] = true
    return fn
  }

  /**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
  function assert (fn) {
    let el = document.createElement('fieldset')

    try {
      return !!fn(el)
    } catch (e) {
      return false
    } finally {
      // Remove from its parent by default
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      }

      // release memory in IE
      el = null
    }
  }

  /**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
  function addHandle (attrs, handler) {
    const arr = attrs.split('|')
    let i = arr.length

    while (i--) {
      Expr.attrHandle[arr[i]] = handler
    }
  }

  /**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
  function siblingCheck (a, b) {
    let cur = b && a
    const diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex

    // Use IE sourceIndex if available on both nodes
    if (diff) {
      return diff
    }

    // Check if b follows a
    if (cur) {
      while ((cur = cur.nextSibling)) {
        if (cur === b) {
          return -1
        }
      }
    }

    return a ? 1 : -1
  }

  /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
  function createInputPseudo (type) {
    return function (elem) {
      const name = elem.nodeName.toLowerCase()
      return name === 'input' && elem.type === type
    }
  }

  /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
  function createButtonPseudo (type) {
    return function (elem) {
      const name = elem.nodeName.toLowerCase()
      return (name === 'input' || name === 'button') && elem.type === type
    }
  }

  /**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
  function createDisabledPseudo (disabled) {
    // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
    return function (elem) {
      // Only certain elements can match :enabled or :disabled
      // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
      // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
      if ('form' in elem) {
        // Check for inherited disabledness on relevant non-disabled elements:
        // * listed form-associated elements in a disabled fieldset
        //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
        //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
        // * option elements in a disabled optgroup
        //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
        // All such elements have a "form" property.
        if (elem.parentNode && elem.disabled === false) {
          // Option elements defer to a parent optgroup if present
          if ('label' in elem) {
            if ('label' in elem.parentNode) {
              return elem.parentNode.disabled === disabled
            } else {
              return elem.disabled === disabled
            }
          }

          // Support: IE 6 - 11
          // Use the isDisabled shortcut property to check for disabled fieldset ancestors
          return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset(elem) === disabled
        }

        return elem.disabled === disabled

        // Try to winnow out elements that can't be disabled before trusting the disabled property.
        // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
        // even exist on them, let alone have a boolean value.
      } else if ('label' in elem) {
        return elem.disabled === disabled
      }

      // Remaining elements are neither :enabled nor :disabled
      return false
    }
  }

  /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
  function createPositionalPseudo (fn) {
    return markFunction(function (argument) {
      argument = +argument
      return markFunction(function (seed, matches) {
        let j
        const matchIndexes = fn([], seed.length, argument)
        let i = matchIndexes.length

        // Match elements found at the specified indexes
        while (i--) {
          if (seed[(j = matchIndexes[i])]) {
            seed[j] = !(matches[j] = seed[j])
          }
        }
      })
    })
  }

  /**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
  function testContext (context) {
    return context && typeof context.getElementsByTagName !== 'undefined' && context
  }

  // Expose support vars for convenience
  support = Sizzle.support = {}

  /**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
  isXML = Sizzle.isXML = function (elem) {
    const namespace = elem && elem.namespaceURI
    const docElem = elem && (elem.ownerDocument || elem).documentElement

    // Support: IE <=8
    // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
    // https://bugs.jquery.com/ticket/4833
    return !rhtml.test(namespace || docElem && docElem.nodeName || 'HTML')
  }

  /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
  setDocument = Sizzle.setDocument = function (node) {
    let hasCompare; let subWindow
    const doc = node ? node.ownerDocument || node : preferredDoc

    // Return early if doc is invalid or already selected
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq
    if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
      return document
    }

    // Update global variables
    document = doc
    docElem = document.documentElement
    documentIsHTML = !isXML(document)

    // Support: IE 9 - 11+, Edge 12 - 18+
    // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq
    if (preferredDoc != document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow) {
      // Support: IE 11, Edge
      if (subWindow.addEventListener) {
        subWindow.addEventListener('unload', unloadHandler, false)

        // Support: IE 9 - 10 only
      } else if (subWindow.attachEvent) {
        subWindow.attachEvent('onunload', unloadHandler)
      }
    }

    // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
    // Safari 4 - 5 only, Opera <=11.6 - 12.x only
    // IE/Edge & older browsers don't support the :scope pseudo-class.
    // Support: Safari 6.0 only
    // Safari 6.0 supports :scope but it's an alias of :root there.
    support.scope = assert(function (el) {
      docElem.appendChild(el).appendChild(document.createElement('div'))
      return typeof el.querySelectorAll !== 'undefined' &&
			!el.querySelectorAll(':scope fieldset div').length
    })

    /* Attributes
	---------------------------------------------------------------------- */

    // Support: IE<8
    // Verify that getAttribute really returns attributes and not properties
    // (excepting IE8 booleans)
    support.attributes = assert(function (el) {
      el.className = 'i'
      return !el.getAttribute('className')
    })

    /* getElement(s)By*
	---------------------------------------------------------------------- */

    // Check if getElementsByTagName("*") returns only elements
    support.getElementsByTagName = assert(function (el) {
      el.appendChild(document.createComment(''))
      return !el.getElementsByTagName('*').length
    })

    // Support: IE<9
    support.getElementsByClassName = rnative.test(document.getElementsByClassName)

    // Support: IE<10
    // Check if getElementById returns elements by name
    // The broken getElementById methods don't pick up programmatically-set names,
    // so use a roundabout getElementsByName test
    support.getById = assert(function (el) {
      docElem.appendChild(el).id = expando
      return !document.getElementsByName || !document.getElementsByName(expando).length
    })

    // ID filter and find
    if (support.getById) {
      Expr.filter.ID = function (id) {
        const attrId = id.replace(runescape, funescape)
        return function (elem) {
          return elem.getAttribute('id') === attrId
        }
      }
      Expr.find.ID = function (id, context) {
        if (typeof context.getElementById !== 'undefined' && documentIsHTML) {
          const elem = context.getElementById(id)
          return elem ? [elem] : []
        }
      }
    } else {
      Expr.filter.ID = function (id) {
        const attrId = id.replace(runescape, funescape)
        return function (elem) {
          const node = typeof elem.getAttributeNode !== 'undefined' &&
					elem.getAttributeNode('id')
          return node && node.value === attrId
        }
      }

      // Support: IE 6 - 7 only
      // getElementById is not reliable as a find shortcut
      Expr.find.ID = function (id, context) {
        if (typeof context.getElementById !== 'undefined' && documentIsHTML) {
          let node; let i; let elems
          let elem = context.getElementById(id)

          if (elem) {
            // Verify the id attribute
            node = elem.getAttributeNode('id')
            if (node && node.value === id) {
              return [elem]
            }

            // Fall back on getElementsByName
            elems = context.getElementsByName(id)
            i = 0
            while ((elem = elems[i++])) {
              node = elem.getAttributeNode('id')
              if (node && node.value === id) {
                return [elem]
              }
            }
          }

          return []
        }
      }
    }

    // Tag
    Expr.find.TAG = support.getElementsByTagName
      ? function (tag, context) {
        if (typeof context.getElementsByTagName !== 'undefined') {
          return context.getElementsByTagName(tag)

          // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag)
        }
      }

      : function (tag, context) {
        let elem
        const tmp = []
        let i = 0

        // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        const results = context.getElementsByTagName(tag)

        // Filter out possible comments
        if (tag === '*') {
          while ((elem = results[i++])) {
            if (elem.nodeType === 1) {
              tmp.push(elem)
            }
          }

          return tmp
        }
        return results
      }

    // Class
    Expr.find.CLASS = support.getElementsByClassName && function (className, context) {
      if (typeof context.getElementsByClassName !== 'undefined' && documentIsHTML) {
        return context.getElementsByClassName(className)
      }
    }

    /* QSA/matchesSelector
	---------------------------------------------------------------------- */

    // QSA and matchesSelector support

    // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
    rbuggyMatches = []

    // qSa(:focus) reports false when true (Chrome 21)
    // We allow this because of a bug in IE8/9 that throws an error
    // whenever \`document.activeElement\` is accessed on an iframe
    // So, we allow :focus to pass through QSA all the time to avoid the IE error
    // See https://bugs.jquery.com/ticket/13378
    rbuggyQSA = []

    if ((support.qsa = rnative.test(document.querySelectorAll))) {
      // Build QSA regex
      // Regex strategy adopted from Diego Perini
      assert(function (el) {
        let input

        // Select is set to empty string on purpose
        // This is to test IE's treatment of not explicitly
        // setting a boolean content attribute,
        // since its presence should be enough
        // https://bugs.jquery.com/ticket/12359
        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\\r\\\\' msallowcapture=''>" +
				"<option selected=''></option></select>"

        // Support: IE8, Opera 11-12.16
        // Nothing should be selected when empty strings follow ^= or $= or *=
        // The test attribute must be unknown in Opera but "safe" for WinRT
        // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
        if (el.querySelectorAll("[msallowcapture^='']").length) {
          rbuggyQSA.push('[*^$]=' + whitespace + "*(?:''|\\"\\")")
        }

        // Support: IE8
        // Boolean attributes and "value" are not treated correctly
        if (!el.querySelectorAll('[selected]').length) {
          rbuggyQSA.push('\\\\[' + whitespace + '*(?:value|' + booleans + ')')
        }

        // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
        if (!el.querySelectorAll('[id~=' + expando + '-]').length) {
          rbuggyQSA.push('~=')
        }

        // Support: IE 11+, Edge 15 - 18+
        // IE 11/Edge don't find elements on a \`[name='']\` query in some cases.
        // Adding a temporary attribute to the document before the selection works
        // around the issue.
        // Interestingly, IE 10 & older don't seem to have the issue.
        input = document.createElement('input')
        input.setAttribute('name', '')
        el.appendChild(input)
        if (!el.querySelectorAll("[name='']").length) {
          rbuggyQSA.push('\\\\[' + whitespace + '*name' + whitespace + '*=' +
					whitespace + "*(?:''|\\"\\")")
        }

        // Webkit/Opera - :checked should return selected option elements
        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
        // IE8 throws error here and will not see later tests
        if (!el.querySelectorAll(':checked').length) {
          rbuggyQSA.push(':checked')
        }

        // Support: Safari 8+, iOS 8+
        // https://bugs.webkit.org/show_bug.cgi?id=136851
        // In-page \`selector#id sibling-combinator selector\` fails
        if (!el.querySelectorAll('a#' + expando + '+*').length) {
          rbuggyQSA.push('.#.+[+~]')
        }

        // Support: Firefox <=3.6 - 5 only
        // Old Firefox doesn't throw on a badly-escaped identifier.
        el.querySelectorAll('\\\\\\f')
        rbuggyQSA.push('[\\\\r\\\\n\\\\f]')
      })

      assert(function (el) {
        el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>"

        // Support: Windows 8 Native Apps
        // The type and name attributes are restricted during .innerHTML assignment
        const input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        el.appendChild(input).setAttribute('name', 'D')

        // Support: IE8
        // Enforce case-sensitivity of name attribute
        if (el.querySelectorAll('[name=d]').length) {
          rbuggyQSA.push('name' + whitespace + '*[*^$|!~]?=')
        }

        // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
        // IE8 throws error here and will not see later tests
        if (el.querySelectorAll(':enabled').length !== 2) {
          rbuggyQSA.push(':enabled', ':disabled')
        }

        // Support: IE9-11+
        // IE's :disabled selector does not pick up the children of disabled fieldsets
        docElem.appendChild(el).disabled = true
        if (el.querySelectorAll(':disabled').length !== 2) {
          rbuggyQSA.push(':enabled', ':disabled')
        }

        // Support: Opera 10 - 11 only
        // Opera 10-11 does not throw on post-comma invalid pseudos
        el.querySelectorAll('*,:x')
        rbuggyQSA.push(',.*:')
      })
    }

    if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {
      assert(function (el) {
        // Check to see if it's possible to do matchesSelector
        // on a disconnected node (IE 9)
        support.disconnectedMatch = matches.call(el, '*')

        // This should fail with an exception
        // Gecko does not error, returns false instead
        matches.call(el, "[s!='']:x")
        rbuggyMatches.push('!=', pseudos)
      })
    }

    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join('|'))
    rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join('|'))

    /* Contains
	---------------------------------------------------------------------- */
    hasCompare = rnative.test(docElem.compareDocumentPosition)

    // Element contains another
    // Purposefully self-exclusive
    // As in, an element does not contain itself
    contains = hasCompare || rnative.test(docElem.contains)
      ? function (a, b) {
        const adown = a.nodeType === 9 ? a.documentElement : a
        const bup = b && b.parentNode
        return a === bup || !!(bup && bup.nodeType === 1 && (
          adown.contains
            ? adown.contains(bup)
            : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
        ))
      }
      : function (a, b) {
        if (b) {
          while ((b = b.parentNode)) {
            if (b === a) {
              return true
            }
          }
        }
        return false
      }

    /* Sorting
	---------------------------------------------------------------------- */

    // Document order sorting
    sortOrder = hasCompare
      ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true
          return 0
        }

        // Sort on method existence if only one input has compareDocumentPosition
        let compare = !a.compareDocumentPosition - !b.compareDocumentPosition
        if (compare) {
          return compare
        }

        // Calculate position if both inputs belong to the same document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        compare = (a.ownerDocument || a) == (b.ownerDocument || b)
          ? a.compareDocumentPosition(b)

        // Otherwise we know they are disconnected
          : 1

        // Disconnected nodes
        if (compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
          // Choose the first element that is related to our preferred document
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (a == document || a.ownerDocument == preferredDoc &&
				contains(preferredDoc, a)) {
            return -1
          }

          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (b == document || b.ownerDocument == preferredDoc &&
				contains(preferredDoc, b)) {
            return 1
          }

          // Maintain original order
          return sortInput
            ? (indexOf(sortInput, a) - indexOf(sortInput, b))
            : 0
        }

        return compare & 4 ? -1 : 1
      }
      : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true
          return 0
        }

        let cur
        let i = 0
        const aup = a.parentNode
        const bup = b.parentNode
        const ap = [a]
        const bp = [b]

        // Parentless nodes are either documents or disconnected
        if (!aup || !bup) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          /* eslint-disable eqeqeq */
          return a == document ? -1
            : b == document ? 1
            /* eslint-enable eqeqeq */
              : aup ? -1
                : bup ? 1
                  : sortInput
                    ? (indexOf(sortInput, a) - indexOf(sortInput, b))
                    : 0

          // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b)
        }

        // Otherwise we need full lists of their ancestors for comparison
        cur = a
        while ((cur = cur.parentNode)) {
          ap.unshift(cur)
        }
        cur = b
        while ((cur = cur.parentNode)) {
          bp.unshift(cur)
        }

        // Walk down the tree looking for a discrepancy
        while (ap[i] === bp[i]) {
          i++
        }

        return i

        // Do a sibling check if the nodes have a common ancestor
          ? siblingCheck(ap[i], bp[i])

        // Otherwise nodes in our document sort first
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        /* eslint-disable eqeqeq */
          : ap[i] == preferredDoc ? -1
            : bp[i] == preferredDoc ? 1
            /* eslint-enable eqeqeq */
              : 0
      }

    return document
  }

  Sizzle.matches = function (expr, elements) {
    return Sizzle(expr, null, null, elements)
  }

  Sizzle.matchesSelector = function (elem, expr) {
    setDocument(elem)

    if (support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[expr + ' '] &&
		(!rbuggyMatches || !rbuggyMatches.test(expr)) &&
		(!rbuggyQSA || !rbuggyQSA.test(expr))) {
      try {
        const ret = matches.call(elem, expr)

        // IE 9's matchesSelector returns false on disconnected nodes
        if (ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11) {
          return ret
        }
      } catch (e) {
        nonnativeSelectorCache(expr, true)
      }
    }

    return Sizzle(expr, document, null, [elem]).length > 0
  }

  Sizzle.contains = function (context, elem) {
    // Set document vars if needed
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq
    if ((context.ownerDocument || context) != document) {
      setDocument(context)
    }
    return contains(context, elem)
  }

  Sizzle.attr = function (elem, name) {
    // Set document vars if needed
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq
    if ((elem.ownerDocument || elem) != document) {
      setDocument(elem)
    }

    const fn = Expr.attrHandle[name.toLowerCase()]

    // Don't get fooled by Object.prototype properties (jQuery #13807)
    let val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase())
      ? fn(elem, name, !documentIsHTML)
      : undefined

    return val !== undefined
      ? val
      : support.attributes || !documentIsHTML
        ? elem.getAttribute(name)
        : (val = elem.getAttributeNode(name)) && val.specified
          ? val.value
          : null
  }

  Sizzle.escape = function (sel) {
    return (sel + '').replace(rcssescape, fcssescape)
  }

  Sizzle.error = function (msg) {
    throw new Error('Syntax error, unrecognized expression: ' + msg)
  }

  /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
  Sizzle.uniqueSort = function (results) {
    let elem
    const duplicates = []
    let j = 0
    let i = 0

    // Unless we *know* we can detect duplicates, assume their presence
    hasDuplicate = !support.detectDuplicates
    sortInput = !support.sortStable && results.slice(0)
    results.sort(sortOrder)

    if (hasDuplicate) {
      while ((elem = results[i++])) {
        if (elem === results[i]) {
          j = duplicates.push(i)
        }
      }
      while (j--) {
        results.splice(duplicates[j], 1)
      }
    }

    // Clear input after sorting to release objects
    // See https://github.com/jquery/sizzle/pull/225
    sortInput = null

    return results
  }

  /**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
  getText = Sizzle.getText = function (elem) {
    let node
    let ret = ''
    let i = 0
    const nodeType = elem.nodeType

    if (!nodeType) {
      // If no nodeType, this is expected to be an array
      while ((node = elem[i++])) {
        // Do not traverse comment nodes
        ret += getText(node)
      }
    } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
      // Use textContent for elements
      // innerText usage removed for consistency of new lines (jQuery #11153)
      if (typeof elem.textContent === 'string') {
        return elem.textContent
      } else {
        // Traverse its children
        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
          ret += getText(elem)
        }
      }
    } else if (nodeType === 3 || nodeType === 4) {
      return elem.nodeValue
    }

    // Do not include comment or processing instruction nodes

    return ret
  }

  Expr = Sizzle.selectors = {

    // Can be adjusted by the user
    cacheLength: 50,

    createPseudo: markFunction,

    match: matchExpr,

    attrHandle: {},

    find: {},

    relative: {
      '>': { dir: 'parentNode', first: true },
      ' ': { dir: 'parentNode' },
      '+': { dir: 'previousSibling', first: true },
      '~': { dir: 'previousSibling' }
    },

    preFilter: {
      ATTR: function (match) {
        match[1] = match[1].replace(runescape, funescape)

        // Move the given value to match[3] whether quoted or unquoted
        match[3] = (match[3] || match[4] ||
				match[5] || '').replace(runescape, funescape)

        if (match[2] === '~=') {
          match[3] = ' ' + match[3] + ' '
        }

        return match.slice(0, 4)
      },

      CHILD: function (match) {
        /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\\d*|\\d*n([+-]\\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
        match[1] = match[1].toLowerCase()

        if (match[1].slice(0, 3) === 'nth') {
          // nth-* requires argument
          if (!match[3]) {
            Sizzle.error(match[0])
          }

          // numeric x and y parameters for Expr.filter.CHILD
          // remember that false/true cast respectively to 0/1
          match[4] = +(match[4]
            ? match[5] + (match[6] || 1)
            : 2 * (match[3] === 'even' || match[3] === 'odd'))
          match[5] = +((match[7] + match[8]) || match[3] === 'odd')

          // other types prohibit arguments
        } else if (match[3]) {
          Sizzle.error(match[0])
        }

        return match
      },

      PSEUDO: function (match) {
        let excess
        const unquoted = !match[6] && match[2]

        if (matchExpr.CHILD.test(match[0])) {
          return null
        }

        // Accept quoted arguments as-is
        if (match[3]) {
          match[2] = match[4] || match[5] || ''

          // Strip excess characters from unquoted arguments
        } else if (unquoted && rpseudo.test(unquoted) &&

				// Get excess from tokenize (recursively)
				(excess = tokenize(unquoted, true)) &&

				// advance to the next closing parenthesis
				(excess = unquoted.indexOf(')', unquoted.length - excess) - unquoted.length)) {
          // excess is a negative index
          match[0] = match[0].slice(0, excess)
          match[2] = unquoted.slice(0, excess)
        }

        // Return only captures needed by the pseudo filter method (type and argument)
        return match.slice(0, 3)
      }
    },

    filter: {

      TAG: function (nodeNameSelector) {
        const nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase()
        return nodeNameSelector === '*'
          ? function () {
            return true
          }
          : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
          }
      },

      CLASS: function (className) {
        let pattern = classCache[className + ' ']

        return pattern ||
				(pattern = new RegExp('(^|' + whitespace +
					')' + className + '(' + whitespace + '|$)')) && classCache(
				  className, function (elem) {
				    return pattern.test(
				      typeof elem.className === 'string' && elem.className ||
								typeof elem.getAttribute !== 'undefined' &&
									elem.getAttribute('class') ||
								''
				    )
				  })
      },

      ATTR: function (name, operator, check) {
        return function (elem) {
          let result = Sizzle.attr(elem, name)

          if (result == null) {
            return operator === '!='
          }
          if (!operator) {
            return true
          }

          result += ''

          /* eslint-disable max-len */

          return operator === '=' ? result === check
            : operator === '!=' ? result !== check
              : operator === '^=' ? check && result.indexOf(check) === 0
                : operator === '*=' ? check && result.indexOf(check) > -1
                  : operator === '$=' ? check && result.slice(-check.length) === check
                    : operator === '~=' ? (' ' + result.replace(rwhitespace, ' ') + ' ').indexOf(check) > -1
                      : operator === '|=' ? result === check || result.slice(0, check.length + 1) === check + '-'
                        : false
          /* eslint-enable max-len */
        }
      },

      CHILD: function (type, what, _argument, first, last) {
        const simple = type.slice(0, 3) !== 'nth'
        const forward = type.slice(-4) !== 'last'
        const ofType = what === 'of-type'

        return first === 1 && last === 0

        // Shortcut for :nth-*(n)
          ? function (elem) {
            return !!elem.parentNode
          }

          : function (elem, _context, xml) {
            let cache; let uniqueCache; let outerCache; let node; let nodeIndex; let start
            let dir = simple !== forward ? 'nextSibling' : 'previousSibling'
            const parent = elem.parentNode
            const name = ofType && elem.nodeName.toLowerCase()
            const useCache = !xml && !ofType
            let diff = false

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem
                  while ((node = node[dir])) {
                    if (ofType
                      ? node.nodeName.toLowerCase() === name
                      : node.nodeType === 1) {
                      return false
                    }
                  }

                  // Reverse direction for :only-* (if we haven't yet done so)
                  start = dir = type === 'only' && !start && 'nextSibling'
                }
                return true
              }

              start = [forward ? parent.firstChild : parent.lastChild]

              // non-xml :nth-child(...) stores cache data on \`parent\`
              if (forward && useCache) {
                // Seek \`elem\` from a previously-cached index

                // ...in a gzip-friendly way
                node = parent
                outerCache = node[expando] || (node[expando] = {})

                // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)
                uniqueCache = outerCache[node.uniqueID] ||
								(outerCache[node.uniqueID] = {})

                cache = uniqueCache[type] || []
                nodeIndex = cache[0] === dirruns && cache[1]
                diff = nodeIndex && cache[2]
                node = nodeIndex && parent.childNodes[nodeIndex]

                while ((node = ++nodeIndex && node && node[dir] ||

								// Fallback to seeking \`elem\` from the start
								(diff = nodeIndex = 0) || start.pop())) {
                  // When found, cache indexes on \`parent\` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff]
                    break
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem
                  outerCache = node[expando] || (node[expando] = {})

                  // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)
                  uniqueCache = outerCache[node.uniqueID] ||
									(outerCache[node.uniqueID] = {})

                  cache = uniqueCache[type] || []
                  nodeIndex = cache[0] === dirruns && cache[1]
                  diff = nodeIndex
                }

                // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                if (diff === false) {
                  // Use the same loop as above to seek \`elem\` from the start
                  while ((node = ++nodeIndex && node && node[dir] ||
									(diff = nodeIndex = 0) || start.pop())) {
                    if ((ofType
                      ? node.nodeName.toLowerCase() === name
                      : node.nodeType === 1) &&
										++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] ||
												(node[expando] = {})

                        // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)
                        uniqueCache = outerCache[node.uniqueID] ||
												(outerCache[node.uniqueID] = {})

                        uniqueCache[type] = [dirruns, diff]
                      }

                      if (node === elem) {
                        break
                      }
                    }
                  }
                }
              }

              // Incorporate the offset, then check against cycle size
              diff -= last
              return diff === first || (diff % first === 0 && diff / first >= 0)
            }
          }
      },

      PSEUDO: function (pseudo, argument) {
        // pseudo-class names are case-insensitive
        // http://www.w3.org/TR/selectors/#pseudo-classes
        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
        // Remember that setFilters inherits from pseudos
        let args
        const fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
					Sizzle.error('unsupported pseudo: ' + pseudo)

        // The user may use createPseudo to indicate that
        // arguments are needed to create the filter function
        // just as Sizzle does
        if (fn[expando]) {
          return fn(argument)
        }

        // But maintain support for old signatures
        if (fn.length > 1) {
          args = [pseudo, pseudo, '', argument]
          return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())
            ? markFunction(function (seed, matches) {
              let idx
              const matched = fn(seed, argument)
              let i = matched.length
              while (i--) {
                idx = indexOf(seed, matched[i])
                seed[idx] = !(matches[idx] = matched[i])
              }
            })
            : function (elem) {
              return fn(elem, 0, args)
            }
        }

        return fn
      }
    },

    pseudos: {

      // Potentially complex pseudos
      not: markFunction(function (selector) {
        // Trim the selector passed to compile
        // to avoid treating leading and trailing
        // spaces as combinators
        const input = []
        const results = []
        const matcher = compile(selector.replace(rtrim, '$1'))

        return matcher[expando]
          ? markFunction(function (seed, matches, _context, xml) {
            let elem
            const unmatched = matcher(seed, null, xml, [])
            let i = seed.length

            // Match elements unmatched by \`matcher\`
            while (i--) {
              if ((elem = unmatched[i])) {
                seed[i] = !(matches[i] = elem)
              }
            }
          })
          : function (elem, _context, xml) {
            input[0] = elem
            matcher(input, null, xml, results)

            // Don't keep the element (issue #299)
            input[0] = null
            return !results.pop()
          }
      }),

      has: markFunction(function (selector) {
        return function (elem) {
          return Sizzle(selector, elem).length > 0
        }
      }),

      contains: markFunction(function (text) {
        text = text.replace(runescape, funescape)
        return function (elem) {
          return (elem.textContent || getText(elem)).indexOf(text) > -1
        }
      }),

      // "Whether an element is represented by a :lang() selector
      // is based solely on the element's language value
      // being equal to the identifier C,
      // or beginning with the identifier C immediately followed by "-".
      // The matching of C against the element's language value is performed case-insensitively.
      // The identifier C does not have to be a valid language name."
      // http://www.w3.org/TR/selectors/#lang-pseudo
      lang: markFunction(function (lang) {
        // lang value must be a valid identifier
        if (!ridentifier.test(lang || '')) {
          Sizzle.error('unsupported lang: ' + lang)
        }
        lang = lang.replace(runescape, funescape).toLowerCase()
        return function (elem) {
          let elemLang
          do {
            if ((elemLang = documentIsHTML
              ? elem.lang
              : elem.getAttribute('xml:lang') || elem.getAttribute('lang'))) {
              elemLang = elemLang.toLowerCase()
              return elemLang === lang || elemLang.indexOf(lang + '-') === 0
            }
          } while ((elem = elem.parentNode) && elem.nodeType === 1)
          return false
        }
      }),

      // Miscellaneous
      target: function (elem) {
        const hash = window.location && window.location.hash
        return hash && hash.slice(1) === elem.id
      },

      root: function (elem) {
        return elem === docElem
      },

      focus: function (elem) {
        return elem === document.activeElement &&
				(!document.hasFocus || document.hasFocus()) &&
				!!(elem.type || elem.href || ~elem.tabIndex)
      },

      // Boolean properties
      enabled: createDisabledPseudo(false),
      disabled: createDisabledPseudo(true),

      checked: function (elem) {
        // In CSS3, :checked should return both checked and selected elements
        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
        const nodeName = elem.nodeName.toLowerCase()
        return (nodeName === 'input' && !!elem.checked) ||
				(nodeName === 'option' && !!elem.selected)
      },

      selected: function (elem) {
        // Accessing this property makes selected-by-default
        // options in Safari work properly
        if (elem.parentNode) {
          // eslint-disable-next-line no-unused-expressions
          elem.parentNode.selectedIndex
        }

        return elem.selected === true
      },

      // Contents
      empty: function (elem) {
        // http://www.w3.org/TR/selectors/#empty-pseudo
        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
        //   but not by others (comment: 8; processing instruction: 7; etc.)
        // nodeType < 6 works because attributes (2) do not appear as children
        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
          if (elem.nodeType < 6) {
            return false
          }
        }
        return true
      },

      parent: function (elem) {
        return !Expr.pseudos.empty(elem)
      },

      // Element/input types
      header: function (elem) {
        return rheader.test(elem.nodeName)
      },

      input: function (elem) {
        return rinputs.test(elem.nodeName)
      },

      button: function (elem) {
        const name = elem.nodeName.toLowerCase()
        return name === 'input' && elem.type === 'button' || name === 'button'
      },

      text: function (elem) {
        let attr
        return elem.nodeName.toLowerCase() === 'input' &&
				elem.type === 'text' &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				((attr = elem.getAttribute('type')) == null ||
					attr.toLowerCase() === 'text')
      },

      // Position-in-collection
      first: createPositionalPseudo(function () {
        return [0]
      }),

      last: createPositionalPseudo(function (_matchIndexes, length) {
        return [length - 1]
      }),

      eq: createPositionalPseudo(function (_matchIndexes, length, argument) {
        return [argument < 0 ? argument + length : argument]
      }),

      even: createPositionalPseudo(function (matchIndexes, length) {
        let i = 0
        for (; i < length; i += 2) {
          matchIndexes.push(i)
        }
        return matchIndexes
      }),

      odd: createPositionalPseudo(function (matchIndexes, length) {
        let i = 1
        for (; i < length; i += 2) {
          matchIndexes.push(i)
        }
        return matchIndexes
      }),

      lt: createPositionalPseudo(function (matchIndexes, length, argument) {
        let i = argument < 0
          ? argument + length
          : argument > length
            ? length
            : argument
        for (; --i >= 0;) {
          matchIndexes.push(i)
        }
        return matchIndexes
      }),

      gt: createPositionalPseudo(function (matchIndexes, length, argument) {
        let i = argument < 0 ? argument + length : argument
        for (; ++i < length;) {
          matchIndexes.push(i)
        }
        return matchIndexes
      })
    }
  }

  Expr.pseudos.nth = Expr.pseudos.eq

  // Add button/input type pseudos
  for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
    Expr.pseudos[i] = createInputPseudo(i)
  }
  for (i in { submit: true, reset: true }) {
    Expr.pseudos[i] = createButtonPseudo(i)
  }

  // Easy API for creating new setFilters
  function setFilters () {}
  setFilters.prototype = Expr.filters = Expr.pseudos
  Expr.setFilters = new setFilters()

  tokenize = Sizzle.tokenize = function (selector, parseOnly) {
    let matched; let match; let tokens; let type
    let soFar; let groups; let preFilters
    const cached = tokenCache[selector + ' ']

    if (cached) {
      return parseOnly ? 0 : cached.slice(0)
    }

    soFar = selector
    groups = []
    preFilters = Expr.preFilter

    while (soFar) {
      // Comma and first run
      if (!matched || (match = rcomma.exec(soFar))) {
        if (match) {
          // Don't consume trailing commas as valid
          soFar = soFar.slice(match[0].length) || soFar
        }
        groups.push((tokens = []))
      }

      matched = false

      // Combinators
      if ((match = rcombinators.exec(soFar))) {
        matched = match.shift()
        tokens.push({
          value: matched,

          // Cast descendant combinators to space
          type: match[0].replace(rtrim, ' ')
        })
        soFar = soFar.slice(matched.length)
      }

      // Filters
      for (type in Expr.filter) {
        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
				(match = preFilters[type](match)))) {
          matched = match.shift()
          tokens.push({
            value: matched,
            type: type,
            matches: match
          })
          soFar = soFar.slice(matched.length)
        }
      }

      if (!matched) {
        break
      }
    }

    // Return the length of the invalid excess
    // if we're just parsing
    // Otherwise, throw an error or return tokens
    return parseOnly
      ? soFar.length
      : soFar
        ? Sizzle.error(selector)

      // Cache the tokens
        : tokenCache(selector, groups).slice(0)
  }

  function toSelector (tokens) {
    let i = 0
    const len = tokens.length
    let selector = ''
    for (; i < len; i++) {
      selector += tokens[i].value
    }
    return selector
  }

  function addCombinator (matcher, combinator, base) {
    const dir = combinator.dir
    const skip = combinator.next
    const key = skip || dir
    const checkNonElements = base && key === 'parentNode'
    const doneName = done++

    return combinator.first

    // Check against closest ancestor/preceding element
      ? function (elem, context, xml) {
        while ((elem = elem[dir])) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml)
          }
        }
        return false
      }

    // Check against all ancestor/preceding elements
      : function (elem, context, xml) {
        let oldCache; let uniqueCache; let outerCache
        const newCache = [dirruns, doneName]

        // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
        if (xml) {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true
              }
            }
          }
        } else {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {})

              // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)
              uniqueCache = outerCache[elem.uniqueID] ||
							(outerCache[elem.uniqueID] = {})

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem
              } else if ((oldCache = uniqueCache[key]) &&
							oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return (newCache[2] = oldCache[2])
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache

                // A match means we're done; a fail means we have to keep checking
                if ((newCache[2] = matcher(elem, context, xml))) {
                  return true
                }
              }
            }
          }
        }
        return false
      }
  }

  function elementMatcher (matchers) {
    return matchers.length > 1
      ? function (elem, context, xml) {
        let i = matchers.length
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false
          }
        }
        return true
      }
      : matchers[0]
  }

  function multipleContexts (selector, contexts, results) {
    let i = 0
    const len = contexts.length
    for (; i < len; i++) {
      Sizzle(selector, contexts[i], results)
    }
    return results
  }

  function condense (unmatched, map, filter, context, xml) {
    let elem
    const newUnmatched = []
    let i = 0
    const len = unmatched.length
    const mapped = map != null

    for (; i < len; i++) {
      if ((elem = unmatched[i])) {
        if (!filter || filter(elem, context, xml)) {
          newUnmatched.push(elem)
          if (mapped) {
            map.push(i)
          }
        }
      }
    }

    return newUnmatched
  }

  function setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
    if (postFilter && !postFilter[expando]) {
      postFilter = setMatcher(postFilter)
    }
    if (postFinder && !postFinder[expando]) {
      postFinder = setMatcher(postFinder, postSelector)
    }
    return markFunction(function (seed, results, context, xml) {
      let temp; let i; let elem
      const preMap = []
      const postMap = []
      const preexisting = results.length

      // Get initial elements from seed or context
      const elems = seed || multipleContexts(
        selector || '*',
        context.nodeType ? [context] : context,
        []
      )

      // Prefilter to get matcher input, preserving a map for seed-results synchronization
      const matcherIn = preFilter && (seed || !selector)
        ? condense(elems, preMap, preFilter, context, xml)
        : elems

      let matcherOut = matcher

      // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        ? postFinder || (seed ? preFilter : preexisting || postFilter)

        // ...intermediate processing is necessary
          ? []

        // ...otherwise use results directly
          : results
        : matcherIn

      // Find primary matches
      if (matcher) {
        matcher(matcherIn, matcherOut, context, xml)
      }

      // Apply postFilter
      if (postFilter) {
        temp = condense(matcherOut, postMap)
        postFilter(temp, [], context, xml)

        // Un-match failing elements by moving them back to matcherIn
        i = temp.length
        while (i--) {
          if ((elem = temp[i])) {
            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)
          }
        }
      }

      if (seed) {
        if (postFinder || preFilter) {
          if (postFinder) {
            // Get the final matcherOut by condensing this intermediate into postFinder contexts
            temp = []
            i = matcherOut.length
            while (i--) {
              if ((elem = matcherOut[i])) {
                // Restore matcherIn since elem is not yet a final match
                temp.push((matcherIn[i] = elem))
              }
            }
            postFinder(null, (matcherOut = []), temp, xml)
          }

          // Move matched elements from seed to results to keep them synchronized
          i = matcherOut.length
          while (i--) {
            if ((elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
              seed[temp] = !(results[temp] = elem)
            }
          }
        }

        // Add elements to results, through postFinder if defined
      } else {
        matcherOut = condense(
          matcherOut === results
            ? matcherOut.splice(preexisting, matcherOut.length)
            : matcherOut
        )
        if (postFinder) {
          postFinder(null, results, matcherOut, xml)
        } else {
          push.apply(results, matcherOut)
        }
      }
    })
  }

  function matcherFromTokens (tokens) {
    let checkContext; let matcher; let j
    const len = tokens.length
    const leadingRelative = Expr.relative[tokens[0].type]
    const implicitRelative = leadingRelative || Expr.relative[' ']
    let i = leadingRelative ? 1 : 0

    // The foundational matcher ensures that elements are reachable from top-level context(s)
    const matchContext = addCombinator(function (elem) {
      return elem === checkContext
    }, implicitRelative, true)
    const matchAnyContext = addCombinator(function (elem) {
      return indexOf(checkContext, elem) > -1
    }, implicitRelative, true)
    let matchers = [function (elem, context, xml) {
      const ret = (!leadingRelative && (xml || context !== outermostContext)) || (
        (checkContext = context).nodeType
          ? matchContext(elem, context, xml)
          : matchAnyContext(elem, context, xml))

      // Avoid hanging onto element (issue #299)
      checkContext = null
      return ret
    }]

    for (; i < len; i++) {
      if ((matcher = Expr.relative[tokens[i].type])) {
        matchers = [addCombinator(elementMatcher(matchers), matcher)]
      } else {
        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches)

        // Return special upon seeing a positional matcher
        if (matcher[expando]) {
          // Find the next relative operator (if any) for proper handling
          j = ++i
          for (; j < len; j++) {
            if (Expr.relative[tokens[j].type]) {
              break
            }
          }
          return setMatcher(
            i > 1 && elementMatcher(matchers),
            i > 1 && toSelector(

              // If the preceding token was a descendant combinator, insert an implicit any-element \`*\`
              tokens
                .slice(0, i - 1)
                .concat({ value: tokens[i - 2].type === ' ' ? '*' : '' })
            ).replace(rtrim, '$1'),
            matcher,
            i < j && matcherFromTokens(tokens.slice(i, j)),
            j < len && matcherFromTokens((tokens = tokens.slice(j))),
            j < len && toSelector(tokens)
          )
        }
        matchers.push(matcher)
      }
    }

    return elementMatcher(matchers)
  }

  function matcherFromGroupMatchers (elementMatchers, setMatchers) {
    const bySet = setMatchers.length > 0
    const byElement = elementMatchers.length > 0
    const superMatcher = function (seed, context, xml, results, outermost) {
      let elem; let j; let matcher
      let matchedCount = 0
      let i = '0'
      const unmatched = seed && []
      let setMatched = []
      const contextBackup = outermostContext

      // We must always have either seed elements or outermost context
      const elems = seed || byElement && Expr.find.TAG('*', outermost)

      // Use integer dirruns iff this is the outermost matcher
      const dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1)
      const len = elems.length

      if (outermost) {
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        outermostContext = context == document || context || outermost
      }

      // Add elements passing elementMatchers directly to results
      // Support: IE<9, Safari
      // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
      for (; i !== len && (elem = elems[i]) != null; i++) {
        if (byElement && elem) {
          j = 0

          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (!context && elem.ownerDocument != document) {
            setDocument(elem)
            xml = !documentIsHTML
          }
          while ((matcher = elementMatchers[j++])) {
            if (matcher(elem, context || document, xml)) {
              results.push(elem)
              break
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique
          }
        }

        // Track unmatched elements for set filters
        if (bySet) {
          // They will have gone through all possible matchers
          if ((elem = !matcher && elem)) {
            matchedCount--
          }

          // Lengthen the array for every element, matched or not
          if (seed) {
            unmatched.push(elem)
          }
        }
      }

      // \`i\` is now the count of elements visited above, and adding it to \`matchedCount\`
      // makes the latter nonnegative.
      matchedCount += i

      // Apply set filters to unmatched elements
      // NOTE: This can be skipped if there are no unmatched elements (i.e., \`matchedCount\`
      // equals \`i\`), unless we didn't visit _any_ elements in the above loop because we have
      // no element matchers and no seed.
      // Incrementing an initially-string "0" \`i\` allows \`i\` to remain a string only in that
      // case, which will result in a "00" \`matchedCount\` that differs from \`i\` but is also
      // numerically zero.
      if (bySet && i !== matchedCount) {
        j = 0
        while ((matcher = setMatchers[j++])) {
          matcher(unmatched, setMatched, context, xml)
        }

        if (seed) {
          // Reintegrate element matches to eliminate the need for sorting
          if (matchedCount > 0) {
            while (i--) {
              if (!(unmatched[i] || setMatched[i])) {
                setMatched[i] = pop.call(results)
              }
            }
          }

          // Discard index placeholder values to get only actual matches
          setMatched = condense(setMatched)
        }

        // Add matches to results
        push.apply(results, setMatched)

        // Seedless set matches succeeding multiple successful matchers stipulate sorting
        if (outermost && !seed && setMatched.length > 0 &&
					(matchedCount + setMatchers.length) > 1) {
          Sizzle.uniqueSort(results)
        }
      }

      // Override manipulation of globals by nested matchers
      if (outermost) {
        dirruns = dirrunsUnique
        outermostContext = contextBackup
      }

      return unmatched
    }

    return bySet
      ? markFunction(superMatcher)
      : superMatcher
  }

  compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
    let i
    const setMatchers = []
    const elementMatchers = []
    let cached = compilerCache[selector + ' ']

    if (!cached) {
      // Generate a function of recursive functions that can be used to check each element
      if (!match) {
        match = tokenize(selector)
      }
      i = match.length
      while (i--) {
        cached = matcherFromTokens(match[i])
        if (cached[expando]) {
          setMatchers.push(cached)
        } else {
          elementMatchers.push(cached)
        }
      }

      // Cache the compiled function
      cached = compilerCache(
        selector,
        matcherFromGroupMatchers(elementMatchers, setMatchers)
      )

      // Save selector and tokenization
      cached.selector = selector
    }
    return cached
  }

  /**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
  select = Sizzle.select = function (selector, context, results, seed) {
    let i; let tokens; let token; let type; let find
    const compiled = typeof selector === 'function' && selector
    const match = !seed && tokenize((selector = compiled.selector || selector))

    results = results || []

    // Try to minimize operations if there is only one selector in the list and no seed
    // (the latter of which guarantees us context)
    if (match.length === 1) {
      // Reduce context if the leading compound selector is an ID
      tokens = match[0] = match[0].slice(0)
      if (tokens.length > 2 && (token = tokens[0]).type === 'ID' &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
        context = (Expr.find.ID(token.matches[0]
          .replace(runescape, funescape), context) || [])[0]
        if (!context) {
          return results

          // Precompiled matchers will still verify ancestry, so step up a level
        } else if (compiled) {
          context = context.parentNode
        }

        selector = selector.slice(tokens.shift().value.length)
      }

      // Fetch a seed set for right-to-left matching
      i = matchExpr.needsContext.test(selector) ? 0 : tokens.length
      while (i--) {
        token = tokens[i]

        // Abort if we hit a combinator
        if (Expr.relative[(type = token.type)]) {
          break
        }
        if ((find = Expr.find[type])) {
          // Search, expanding context for leading sibling combinators
          if ((seed = find(
            token.matches[0].replace(runescape, funescape),
            rsibling.test(tokens[0].type) && testContext(context.parentNode) ||
						context
          ))) {
            // If seed is empty or no tokens remain, we can return early
            tokens.splice(i, 1)
            selector = seed.length && toSelector(tokens)
            if (!selector) {
              push.apply(results, seed)
              return results
            }

            break
          }
        }
      }
    }

    // Compile and execute a filtering function if one is not provided
    // Provide \`match\` to avoid retokenization if we modified the selector above
    (compiled || compile(selector, match))(
      seed,
      context,
      !documentIsHTML,
      results,
      !context || rsibling.test(selector) && testContext(context.parentNode) || context
    )
    return results
  }

  // One-time assignments

  // Sort stability
  support.sortStable = expando.split('').sort(sortOrder).join('') === expando

  // Support: Chrome 14-35+
  // Always assume duplicates if they aren't passed to the comparison function
  support.detectDuplicates = !!hasDuplicate

  // Initialize against the default document
  setDocument()

  // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
  // Detached nodes confoundingly follow *each other*
  support.sortDetached = assert(function (el) {
    // Should return 1, but returns 4 (following)
    return el.compareDocumentPosition(document.createElement('fieldset')) & 1
  })

  // Support: IE<8
  // Prevent attribute/property "interpolation"
  // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
  if (!assert(function (el) {
    el.innerHTML = "<a href='#'></a>"
    return el.firstChild.getAttribute('href') === '#'
  })) {
    addHandle('type|href|height|width', function (elem, name, isXML) {
      if (!isXML) {
        return elem.getAttribute(name, name.toLowerCase() === 'type' ? 1 : 2)
      }
    })
  }

  // Support: IE<9
  // Use defaultValue in place of getAttribute("value")
  if (!support.attributes || !assert(function (el) {
    el.innerHTML = '<input/>'
    el.firstChild.setAttribute('value', '')
    return el.firstChild.getAttribute('value') === ''
  })) {
    addHandle('value', function (elem, _name, isXML) {
      if (!isXML && elem.nodeName.toLowerCase() === 'input') {
        return elem.defaultValue
      }
    })
  }

  // Support: IE<9
  // Use getAttributeNode to fetch booleans when getAttribute lies
  if (!assert(function (el) {
    return el.getAttribute('disabled') == null
  })) {
    addHandle(booleans, function (elem, name, isXML) {
      let val
      if (!isXML) {
        return elem[name] === true ? name.toLowerCase()
          : (val = elem.getAttributeNode(name)) && val.specified
            ? val.value
            : null
      }
    })
  }

  return Sizzle
})(window)

  jQuery.find = Sizzle
  jQuery.expr = Sizzle.selectors

  // Deprecated
  jQuery.expr[':'] = jQuery.expr.pseudos
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort
  jQuery.text = Sizzle.getText
  jQuery.isXMLDoc = Sizzle.isXML
  jQuery.contains = Sizzle.contains
  jQuery.escapeSelector = Sizzle.escape

  const dir = function (elem, dir, until) {
    const matched = []
    const truncate = until !== undefined

    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break
        }
        matched.push(elem)
      }
    }
    return matched
  }

  const siblings = function (n, elem) {
    const matched = []

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n)
      }
    }

    return matched
  }

  const rneedsContext = jQuery.expr.match.needsContext

  function nodeName (elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
  }
  const rsingleTag = (/^<([a-z][^\\/\\0>:\\x20\\t\\r\\n\\f]*)[\\x20\\t\\r\\n\\f]*\\/?>(?:<\\/\\1>|)$/i)

  // Implement the identical functionality for filter and not
  function winnow (elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not
      })
    }

    // Single element
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return (elem === qualifier) !== not
      })
    }

    // Arraylike of elements (jQuery, arguments, Array)
    if (typeof qualifier !== 'string') {
      return jQuery.grep(elements, function (elem) {
        return (indexOf.call(qualifier, elem) > -1) !== not
      })
    }

    // Filtered directly for both simple and complex selectors
    return jQuery.filter(qualifier, elements, not)
  }

  jQuery.filter = function (expr, elems, not) {
    const elem = elems[0]

    if (not) {
      expr = ':not(' + expr + ')'
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : []
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1
    }))
  }

  jQuery.fn.extend({
    find: function (selector) {
      let i; let ret
      const len = this.length
      const self = this

      if (typeof selector !== 'string') {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true
            }
          }
        }))
      }

      ret = this.pushStack([])

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret)
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret
    },
    filter: function (selector) {
      return this.pushStack(winnow(this, selector || [], false))
    },
    not: function (selector) {
      return this.pushStack(winnow(this, selector || [], true))
    },
    is: function (selector) {
      return !!winnow(
        this,

        // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        typeof selector === 'string' && rneedsContext.test(selector)
          ? jQuery(selector)
          : selector || [],
        false
      ).length
    }
  })

  // Initialize a jQuery object

  // A central reference to the root jQuery(document)
  let rootjQuery

  // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  const rquickExpr = /^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]+))$/

  const init = jQuery.fn.init = function (selector, context, root) {
    let match, elem

    // HANDLE: $(""), $(null), $(undefined), $(false)
    if (!selector) {
      return this
    }

    // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)
    root = root || rootjQuery

    // Handle HTML strings
    if (typeof selector === 'string') {
      if (selector[0] === '<' &&
				selector[selector.length - 1] === '>' &&
				selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null]
      } else {
        match = rquickExpr.exec(selector)
      }

      // Match html or make sure no context is specified for #id
      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context

          // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present
          jQuery.merge(this, jQuery.parseHTML(
            match[1],
            context && context.nodeType ? context.ownerDocument || context : document,
            true
          ))

          // HANDLE: $(html, props)
          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match])

                // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match])
              }
            }
          }

          return this

          // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2])

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem
            this.length = 1
          }
          return this
        }

        // HANDLE: $(expr, $(...))
      } else if (!context || context.jquery) {
        return (context || root).find(selector)

        // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector)
      }

      // HANDLE: $(DOMElement)
    } else if (selector.nodeType) {
      this[0] = selector
      this.length = 1
      return this

      // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined
        ? root.ready(selector)

      // Execute immediately if ready is not present
        : selector(jQuery)
    }

    return jQuery.makeArray(selector, this)
  }

  // Give the init function the jQuery prototype for later instantiation
  init.prototype = jQuery.fn

  // Initialize central reference
  rootjQuery = jQuery(document)

  const rparentsprev = /^(?:parents|prev(?:Until|All))/

  // Methods guaranteed to produce a unique set when starting from a unique set
  const guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  }

  jQuery.fn.extend({
    has: function (target) {
      const targets = jQuery(target, this)
      const l = targets.length

      return this.filter(function () {
        let i = 0
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true
          }
        }
      })
    },

    closest: function (selectors, context) {
      let cur
      let i = 0
      const l = this.length
      const matched = []
      const targets = typeof selectors !== 'string' && jQuery(selectors)

      // Positional selectors never match, since there's no _selection_ context
      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets
              ? targets.index(cur) > -1

            // Don't pass non-elements to Sizzle
              : cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur)
              break
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched)
    },

    // Determine the position of an element within the set
    index: function (elem) {
      // No argument, return index in parent
      if (!elem) {
        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
      }

      // Index in selector
      if (typeof elem === 'string') {
        return indexOf.call(jQuery(elem), this[0])
      }

      // Locate the position of the desired element
      return indexOf.call(this,

        // If it receives a jQuery object, the first element is used
        elem.jquery ? elem[0] : elem
      )
    },

    add: function (selector, context) {
      return this.pushStack(
        jQuery.uniqueSort(
          jQuery.merge(this.get(), jQuery(selector, context))
        )
      )
    },

    addBack: function (selector) {
      return this.add(selector == null
        ? this.prevObject : this.prevObject.filter(selector)
      )
    }
  })

  function sibling (cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}
    return cur
  }

  jQuery.each({
    parent: function (elem) {
      const parent = elem.parentNode
      return parent && parent.nodeType !== 11 ? parent : null
    },
    parents: function (elem) {
      return dir(elem, 'parentNode')
    },
    parentsUntil: function (elem, _i, until) {
      return dir(elem, 'parentNode', until)
    },
    next: function (elem) {
      return sibling(elem, 'nextSibling')
    },
    prev: function (elem) {
      return sibling(elem, 'previousSibling')
    },
    nextAll: function (elem) {
      return dir(elem, 'nextSibling')
    },
    prevAll: function (elem) {
      return dir(elem, 'previousSibling')
    },
    nextUntil: function (elem, _i, until) {
      return dir(elem, 'nextSibling', until)
    },
    prevUntil: function (elem, _i, until) {
      return dir(elem, 'previousSibling', until)
    },
    siblings: function (elem) {
      return siblings((elem.parentNode || {}).firstChild, elem)
    },
    children: function (elem) {
      return siblings(elem.firstChild)
    },
    contents: function (elem) {
      if (elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no \`data\` attribute has an object
			// \`contentDocument\` with a \`null\` prototype.
			getProto(elem.contentDocument)) {
        return elem.contentDocument
      }

      // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.
      if (nodeName(elem, 'template')) {
        elem = elem.content || elem
      }

      return jQuery.merge([], elem.childNodes)
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      let matched = jQuery.map(this, fn, until)

      if (name.slice(-5) !== 'Until') {
        selector = until
      }

      if (selector && typeof selector === 'string') {
        matched = jQuery.filter(selector, matched)
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched)
        }

        // Reverse order for parents* and prev-derivatives
        if (rparentsprev.test(name)) {
          matched.reverse()
        }
      }

      return this.pushStack(matched)
    }
  })
  const rnothtmlwhite = (/[^\\x20\\t\\r\\n\\f]+/g)

  // Convert String-formatted options into Object-formatted ones
  function createOptions (options) {
    const object = {}
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true
    })
    return object
  }

  /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === 'string'
      ? createOptions(options)
      : jQuery.extend({}, options)

    let // Flag to know if list is currently firing
      firing

    // Last fire value for non-forgettable lists
    let memory

    // Flag to know if list was already fired
    let fired

    // Flag to prevent firing
    let locked

    // Actual callback list
    let list = []

    // Queue of execution data for repeatable lists
    let queue = []

    // Index of currently firing callback (modified by add/remove as needed)
    let firingIndex = -1

    // Fire callbacks
    const fire = function () {
      // Enforce single-firing
      locked = locked || options.once

      // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes
      fired = firing = true
      for (; queue.length; firingIndex = -1) {
        memory = queue.shift()
        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false &&
						options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length
            memory = false
          }
        }
      }

      // Forget the data if we're done with it
      if (!options.memory) {
        memory = false
      }

      firing = false

      // Clean up if we're done firing for good
      if (locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []

          // Otherwise, this object is spent
        } else {
          list = ''
        }
      }
    }

    // Actual Callbacks object
    var self = {

      // Add a callback or a collection of callbacks to the list
      add: function () {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1
            queue.push(memory)
          }

          (function add (args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg)
                }
              } else if (arg && arg.length && toType(arg) !== 'string') {
                // Inspect recursively
                add(arg)
              }
            })
          })(arguments)

          if (memory && !firing) {
            fire()
          }
        }
        return this
      },

      // Remove a callback from the list
      remove: function () {
        jQuery.each(arguments, function (_, arg) {
          let index
          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1)

            // Handle firing indexes
            if (index <= firingIndex) {
              firingIndex--
            }
          }
        })
        return this
      },

      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function (fn) {
        return fn
          ? jQuery.inArray(fn, list) > -1
          : list.length > 0
      },

      // Remove all callbacks from the list
      empty: function () {
        if (list) {
          list = []
        }
        return this
      },

      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function () {
        locked = queue = []
        list = memory = ''
        return this
      },
      disabled: function () {
        return !list
      },

      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function () {
        locked = queue = []
        if (!memory && !firing) {
          list = memory = ''
        }
        return this
      },
      locked: function () {
        return !!locked
      },

      // Call all callbacks with the given context and arguments
      fireWith: function (context, args) {
        if (!locked) {
          args = args || []
          args = [context, args.slice ? args.slice() : args]
          queue.push(args)
          if (!firing) {
            fire()
          }
        }
        return this
      },

      // Call all the callbacks with the given arguments
      fire: function () {
        self.fireWith(this, arguments)
        return this
      },

      // To know if the callbacks have already been called at least once
      fired: function () {
        return !!fired
      }
    }

    return self
  }

  function Identity (v) {
    return v
  }
  function Thrower (ex) {
    throw ex
  }

  function adoptValue (value, resolve, reject, noValue) {
    let method

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction((method = value.promise))) {
        method.call(value).done(resolve).fail(reject)

        // Other thenables
      } else if (value && isFunction((method = value.then))) {
        method.call(value, resolve, reject)

        // Other non-thenables
      } else {
        // Control \`resolve\` arguments by letting Array#slice cast boolean \`noValue\` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue))
      }

      // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.
    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value])
    }
  }

  jQuery.extend({

    Deferred: function (func) {
      const tuples = [

        // action, add listener, callbacks,
        // ... .then handlers, argument index, [final state]
        ['notify', 'progress', jQuery.Callbacks('memory'),
          jQuery.Callbacks('memory'), 2],
        ['resolve', 'done', jQuery.Callbacks('once memory'),
          jQuery.Callbacks('once memory'), 0, 'resolved'],
        ['reject', 'fail', jQuery.Callbacks('once memory'),
          jQuery.Callbacks('once memory'), 1, 'rejected']
      ]
      let state = 'pending'
      var promise = {
        state: function () {
          return state
        },
        always: function () {
          deferred.done(arguments).fail(arguments)
          return this
        },
        catch: function (fn) {
          return promise.then(null, fn)
        },

        // Keep pipe for back-compat
        pipe: function (/* fnDone, fnFail, fnProgress */) {
          let fns = arguments

          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (_i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              const fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]

              // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })
              deferred[tuple[1]](function () {
                const returned = fn && fn.apply(this, arguments)
                if (returned && isFunction(returned.promise)) {
                  returned.promise()
                    .progress(newDefer.notify)
                    .done(newDefer.resolve)
                    .fail(newDefer.reject)
                } else {
                  newDefer[tuple[0] + 'With'](
                    this,
                    fn ? [returned] : arguments
                  )
                }
              })
            })
            fns = null
          }).promise()
        },
        then: function (onFulfilled, onRejected, onProgress) {
          let maxDepth = 0
          function resolve (depth, deferred, handler, special) {
            return function () {
              let that = this
              let args = arguments
              const mightThrow = function () {
                let returned, then

                // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts
                if (depth < maxDepth) {
                  return
                }

                returned = handler.apply(that, args)

                // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48
                if (returned === deferred.promise()) {
                  throw new TypeError('Thenable self-resolution')
                }

                // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve \`then\` only once
                then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										(typeof returned === 'object' ||
											typeof returned === 'function') &&
										returned.then

                // Handle a returned thenable
                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(
                      returned,
                      resolve(maxDepth, deferred, Identity, special),
                      resolve(maxDepth, deferred, Thrower, special)
                    )

                    // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++

                    then.call(
                      returned,
                      resolve(maxDepth, deferred, Identity, special),
                      resolve(maxDepth, deferred, Thrower, special),
                      resolve(maxDepth, deferred, Identity,
                        deferred.notifyWith)
                    )
                  }

                  // Handle all other returned values
                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined
                    args = [returned]
                  }

                  // Process the value(s)
                  // Default process is resolve
                  (special || deferred.resolveWith)(that, args)
                }
              }

              // Only normal processors (resolve) catch and reject exceptions
              var process = special
                ? mightThrow
                : function () {
                  try {
                    mightThrow()
                  } catch (e) {
                    if (jQuery.Deferred.exceptionHook) {
                      jQuery.Deferred.exceptionHook(e,
                        process.stackTrace)
                    }

                    // Support: Promises/A+ section 2.3.3.3.4.1
                    // https://promisesaplus.com/#point-61
                    // Ignore post-resolution exceptions
                    if (depth + 1 >= maxDepth) {
                      // Only substitute handlers pass on context
                      // and multiple values (non-spec behavior)
                      if (handler !== Thrower) {
                        that = undefined
                        args = [e]
                      }

                      deferred.rejectWith(that, args)
                    }
                  }
                }

              // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors
              if (depth) {
                process()
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook()
                }
                window.setTimeout(process)
              }
            }
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(
              resolve(
                0,
                newDefer,
                isFunction(onProgress)
                  ? onProgress
                  : Identity,
                newDefer.notifyWith
              )
            )

            // fulfilled_handlers.add( ... )
            tuples[1][3].add(
              resolve(
                0,
                newDefer,
                isFunction(onFulfilled)
                  ? onFulfilled
                  : Identity
              )
            )

            // rejected_handlers.add( ... )
            tuples[2][3].add(
              resolve(
                0,
                newDefer,
                isFunction(onRejected)
                  ? onRejected
                  : Thrower
              )
            )
          }).promise()
        },

        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function (obj) {
          return obj != null ? jQuery.extend(obj, promise) : promise
        }
      }
      var deferred = {}

      // Add list-specific methods
      jQuery.each(tuples, function (i, tuple) {
        const list = tuple[2]
        const stateString = tuple[5]

        // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add
        promise[tuple[1]] = list.add

        // Handle state
        if (stateString) {
          list.add(
            function () {
              // state = "resolved" (i.e., fulfilled)
              // state = "rejected"
              state = stateString
            },

            // rejected_callbacks.disable
            // fulfilled_callbacks.disable
            tuples[3 - i][2].disable,

            // rejected_handlers.disable
            // fulfilled_handlers.disable
            tuples[3 - i][3].disable,

            // progress_callbacks.lock
            tuples[0][2].lock,

            // progress_handlers.lock
            tuples[0][3].lock
          )
        }

        // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire
        list.add(tuple[3].fire)

        // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }
        deferred[tuple[0]] = function () {
          deferred[tuple[0] + 'With'](this === deferred ? undefined : this, arguments)
          return this
        }

        // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith
        deferred[tuple[0] + 'With'] = list.fireWith
      })

      // Make the deferred a promise
      promise.promise(deferred)

      // Call given func if any
      if (func) {
        func.call(deferred, deferred)
      }

      // All done!
      return deferred
    },

    // Deferred helper
    when: function (singleValue) {
      let

        // count of uncompleted subordinates
        remaining = arguments.length

      // count of unprocessed arguments
      let i = remaining

      // subordinate fulfillment data
      const resolveContexts = Array(i)
      const resolveValues = slice.call(arguments)

      // the primary Deferred
      const primary = jQuery.Deferred()

      // subordinate callback factory
      const updateFunc = function (i) {
        return function (value) {
          resolveContexts[i] = this
          resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value
          if (!(--remaining)) {
            primary.resolveWith(resolveContexts, resolveValues)
          }
        }
      }

      // Single- and empty arguments are adopted like Promise.resolve
      if (remaining <= 1) {
        adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject,
          !remaining)

        // Use .then() to unwrap secondary thenables (cf. gh-3000)
        if (primary.state() === 'pending' ||
				isFunction(resolveValues[i] && resolveValues[i].then)) {
          return primary.then()
        }
      }

      // Multiple arguments are aggregated like Promise.all array elements
      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), primary.reject)
      }

      return primary.promise()
    }
  })

  // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.
  const rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn('jQuery.Deferred exception: ' + error.message, error.stack, stack)
    }
  }

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error
    })
  }

  // The deferred used on DOM ready
  const readyList = jQuery.Deferred()

  jQuery.fn.ready = function (fn) {
    readyList
      .then(fn)

    // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
      .catch(function (error) {
        jQuery.readyException(error)
      })

    return this
  }

  jQuery.extend({

    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,

    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,

    // Handle when the DOM is ready
    ready: function (wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return
      }

      // Remember that the DOM is ready
      jQuery.isReady = true

      // If a normal DOM Ready event fired, decrement, and wait if need be
      if (wait !== true && --jQuery.readyWait > 0) {
        return
      }

      // If there are functions bound, to execute
      readyList.resolveWith(document, [jQuery])
    }
  })

  jQuery.ready.then = readyList.then

  // The ready event handler and self cleanup method
  function completed () {
    document.removeEventListener('DOMContentLoaded', completed)
    window.removeEventListener('load', completed)
    jQuery.ready()
  }

  // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon
  if (document.readyState === 'complete' ||
	(document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready)
  } else {
    // Use the handy event callback
    document.addEventListener('DOMContentLoaded', completed)

    // A fallback to window.onload, that will always work
    window.addEventListener('load', completed)
  }

  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
    let i = 0
    const len = elems.length
    let bulk = key == null

    // Sets many values
    if (toType(key) === 'object') {
      chainable = true
      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw)
      }

      // Sets one value
    } else if (value !== undefined) {
      chainable = true

      if (!isFunction(value)) {
        raw = true
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value)
          fn = null

          // ...except when executing function values
        } else {
          bulk = fn
          fn = function (elem, _key, value) {
            return bulk.call(jQuery(elem), value)
          }
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(
            elems[i], key, raw
              ? value
              : value.call(elems[i], i, fn(elems[i], key))
          )
        }
      }
    }

    if (chainable) {
      return elems
    }

    // Gets
    if (bulk) {
      return fn.call(elems)
    }

    return len ? fn(elems[0], key) : emptyGet
  }

  // Matches dashed string for camelizing
  const rmsPrefix = /^-ms-/
  const rdashAlpha = /-([a-z])/g

  // Used by camelCase as callback to replace()
  function fcamelCase (_all, letter) {
    return letter.toUpperCase()
  }

  // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)
  function camelCase (string) {
    return string.replace(rmsPrefix, 'ms-').replace(rdashAlpha, fcamelCase)
  }
  const acceptData = function (owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType)
  }

  function Data () {
    this.expando = jQuery.expando + Data.uid++
  }

  Data.uid = 1

  Data.prototype = {

    cache: function (owner) {
      // Check if the owner object already has a cache
      let value = owner[this.expando]

      // If not, create one
      if (!value) {
        value = {}

        // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.
        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value

            // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            })
          }
        }
      }

      return value
    },
    set: function (owner, data, value) {
      let prop
      const cache = this.cache(owner)

      // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)
      if (typeof data === 'string') {
        cache[camelCase(data)] = value

        // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop]
        }
      }
      return cache
    },
    get: function (owner, key) {
      return key === undefined
        ? this.cache(owner)

      // Always use camelCase key (gh-2257)
        : owner[this.expando] && owner[this.expando][camelCase(key)]
    },
    access: function (owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined ||
				((key && typeof key === 'string') && value === undefined)) {
        return this.get(owner, key)
      }

      // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //
      this.set(owner, key, value)

      // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]
      return value !== undefined ? value : key
    },
    remove: function (owner, key) {
      let i
      const cache = owner[this.expando]

      if (cache === undefined) {
        return
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase)
        } else {
          key = camelCase(key)

          // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace
          key = key in cache
            ? [key]
            : (key.match(rnothtmlwhite) || [])
        }

        i = key.length

        while (i--) {
          delete cache[key[i]]
        }
      }

      // Remove the expando if there's no more data
      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined
        } else {
          delete owner[this.expando]
        }
      }
    },
    hasData: function (owner) {
      const cache = owner[this.expando]
      return cache !== undefined && !jQuery.isEmptyObject(cache)
    }
  }
  const dataPriv = new Data()

  const dataUser = new Data()

  //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  const rbrace = /^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/
  const rmultiDash = /[A-Z]/g

  function getData (data) {
    if (data === 'true') {
      return true
    }

    if (data === 'false') {
      return false
    }

    if (data === 'null') {
      return null
    }

    // Only convert to a number if it doesn't change the string
    if (data === +data + '') {
      return +data
    }

    if (rbrace.test(data)) {
      return JSON.parse(data)
    }

    return data
  }

  function dataAttr (elem, key, data) {
    let name

    // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute
    if (data === undefined && elem.nodeType === 1) {
      name = 'data-' + key.replace(rmultiDash, '-$&').toLowerCase()
      data = elem.getAttribute(name)

      if (typeof data === 'string') {
        try {
          data = getData(data)
        } catch (e) {}

        // Make sure we set the data so it isn't changed later
        dataUser.set(elem, key, data)
      } else {
        data = undefined
      }
    }
    return data
  }

  jQuery.extend({
    hasData: function (elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem)
    },

    data: function (elem, name, data) {
      return dataUser.access(elem, name, data)
    },

    removeData: function (elem, name) {
      dataUser.remove(elem, name)
    },

    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function (elem, name, data) {
      return dataPriv.access(elem, name, data)
    },

    _removeData: function (elem, name) {
      dataPriv.remove(elem, name)
    }
  })

  jQuery.fn.extend({
    data: function (key, value) {
      let i; let name; let data
      const elem = this[0]
      const attrs = elem && elem.attributes

      // Gets all values
      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem)

          if (elem.nodeType === 1 && !dataPriv.get(elem, 'hasDataAttrs')) {
            i = attrs.length
            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name
                if (name.indexOf('data-') === 0) {
                  name = camelCase(name.slice(5))
                  dataAttr(elem, name, data[name])
                }
              }
            }
            dataPriv.set(elem, 'hasDataAttrs', true)
          }
        }

        return data
      }

      // Sets multiple values
      if (typeof key === 'object') {
        return this.each(function () {
          dataUser.set(this, key)
        })
      }

      return access(this, function (value) {
        let data

        // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // \`value\` parameter was not undefined. An empty jQuery object
        // will result in \`undefined\` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.
        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key)
          if (data !== undefined) {
            return data
          }

          // Attempt to "discover" the data in
          // HTML5 custom data-* attrs
          data = dataAttr(elem, key)
          if (data !== undefined) {
            return data
          }

          // We tried really hard, but the data doesn't exist.
          return
        }

        // Set the data...
        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value)
        })
      }, null, value, arguments.length > 1, null, true)
    },

    removeData: function (key) {
      return this.each(function () {
        dataUser.remove(this, key)
      })
    }
  })

  jQuery.extend({
    queue: function (elem, type, data) {
      let queue

      if (elem) {
        type = (type || 'fx') + 'queue'
        queue = dataPriv.get(elem, type)

        // Speed up dequeue by getting out quickly if this is just a lookup
        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data))
          } else {
            queue.push(data)
          }
        }
        return queue || []
      }
    },

    dequeue: function (elem, type) {
      type = type || 'fx'

      const queue = jQuery.queue(elem, type)
      let startLength = queue.length
      let fn = queue.shift()
      const hooks = jQuery._queueHooks(elem, type)
      const next = function () {
        jQuery.dequeue(elem, type)
      }

      // If the fx queue is dequeued, always remove the progress sentinel
      if (fn === 'inprogress') {
        fn = queue.shift()
        startLength--
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === 'fx') {
          queue.unshift('inprogress')
        }

        // Clear up the last queue stop function
        delete hooks.stop
        fn.call(elem, next, hooks)
      }

      if (!startLength && hooks) {
        hooks.empty.fire()
      }
    },

    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function (elem, type) {
      const key = type + 'queueHooks'
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks('once memory').add(function () {
          dataPriv.remove(elem, [type + 'queue', key])
        })
      })
    }
  })

  jQuery.fn.extend({
    queue: function (type, data) {
      let setter = 2

      if (typeof type !== 'string') {
        data = type
        type = 'fx'
        setter--
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type)
      }

      return data === undefined
        ? this
        : this.each(function () {
          const queue = jQuery.queue(this, type, data)

          // Ensure a hooks for this queue
          jQuery._queueHooks(this, type)

          if (type === 'fx' && queue[0] !== 'inprogress') {
            jQuery.dequeue(this, type)
          }
        })
    },
    dequeue: function (type) {
      return this.each(function () {
        jQuery.dequeue(this, type)
      })
    },
    clearQueue: function (type) {
      return this.queue(type || 'fx', [])
    },

    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function (type, obj) {
      let tmp
      let count = 1
      const defer = jQuery.Deferred()
      const elements = this
      let i = this.length
      const resolve = function () {
        if (!(--count)) {
          defer.resolveWith(elements, [elements])
        }
      }

      if (typeof type !== 'string') {
        obj = type
        type = undefined
      }
      type = type || 'fx'

      while (i--) {
        tmp = dataPriv.get(elements[i], type + 'queueHooks')
        if (tmp && tmp.empty) {
          count++
          tmp.empty.add(resolve)
        }
      }
      resolve()
      return defer.promise(obj)
    }
  })
  const pnum = (/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/).source

  const rcssNum = new RegExp('^(?:([+-])=|)(' + pnum + ')([a-z%]*)$', 'i')

  const cssExpand = ['Top', 'Right', 'Bottom', 'Left']

  const documentElement = document.documentElement

  let isAttached = function (elem) {
    return jQuery.contains(elem.ownerDocument, elem)
  }
  const composed = { composed: true }

  // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support \`attachShadow\` but not \`getRootNode\`,
  // leading to errors. We need to check for \`getRootNode\`.
  if (documentElement.getRootNode) {
    isAttached = function (elem) {
      return jQuery.contains(elem.ownerDocument, elem) ||
				elem.getRootNode(composed) === elem.ownerDocument
    }
  }
  const isHiddenWithinTree = function (elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem

    // Inline style trumps all
    return elem.style.display === 'none' ||
			elem.style.display === '' &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached(elem) &&

			jQuery.css(elem, 'display') === 'none'
  }

  function adjustCSS (elem, prop, valueParts, tween) {
    let adjusted; let scale
    let maxIterations = 20
    const currentValue = tween
      ? function () {
        return tween.cur()
      }
      : function () {
        return jQuery.css(elem, prop, '')
      }
    let initial = currentValue()
    let unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? '' : 'px')

    // Starting value computation is required for potential unit mismatches
    let initialInUnit = elem.nodeType &&
			(jQuery.cssNumber[prop] || unit !== 'px' && +initial) &&
			rcssNum.exec(jQuery.css(elem, prop))

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2

      // Trust units reported by jQuery.css
      unit = unit || initialInUnit[3]

      // Iteratively approximate from a nonzero starting point
      initialInUnit = +initial || 1

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit)
        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0
        }
        initialInUnit = initialInUnit / scale
      }

      initialInUnit = initialInUnit * 2
      jQuery.style(elem, prop, initialInUnit + unit)

      // Make sure we update the tween properties later on
      valueParts = valueParts || []
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0

      // Apply relative offset (+=/-=) if specified
      adjusted = valueParts[1]
        ? initialInUnit + (valueParts[1] + 1) * valueParts[2]
        : +valueParts[2]
      if (tween) {
        tween.unit = unit
        tween.start = initialInUnit
        tween.end = adjusted
      }
    }
    return adjusted
  }

  const defaultDisplayMap = {}

  function getDefaultDisplay (elem) {
    let temp
    const doc = elem.ownerDocument
    const nodeName = elem.nodeName
    let display = defaultDisplayMap[nodeName]

    if (display) {
      return display
    }

    temp = doc.body.appendChild(doc.createElement(nodeName))
    display = jQuery.css(temp, 'display')

    temp.parentNode.removeChild(temp)

    if (display === 'none') {
      display = 'block'
    }
    defaultDisplayMap[nodeName] = display

    return display
  }

  function showHide (elements, show) {
    let display; let elem
    const values = []
    let index = 0
    const length = elements.length

    // Determine new display value for elements that need to change
    for (; index < length; index++) {
      elem = elements[index]
      if (!elem.style) {
        continue
      }

      display = elem.style.display
      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === 'none') {
          values[index] = dataPriv.get(elem, 'display') || null
          if (!values[index]) {
            elem.style.display = ''
          }
        }
        if (elem.style.display === '' && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem)
        }
      } else {
        if (display !== 'none') {
          values[index] = 'none'

          // Remember what we're overwriting
          dataPriv.set(elem, 'display', display)
        }
      }
    }

    // Set the display of the elements in a second loop to avoid constant reflow
    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index]
      }
    }

    return elements
  }

  jQuery.fn.extend({
    show: function () {
      return showHide(this, true)
    },
    hide: function () {
      return showHide(this)
    },
    toggle: function (state) {
      if (typeof state === 'boolean') {
        return state ? this.show() : this.hide()
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show()
        } else {
          jQuery(this).hide()
        }
      })
    }
  })
  const rcheckableType = (/^(?:checkbox|radio)$/i)

  const rtagName = (/<([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]*)/i)

  const rscriptType = (/^$|^module$|\\/(?:java|ecma)script/i);

  (function () {
    const fragment = document.createDocumentFragment()
    const div = fragment.appendChild(document.createElement('div'))
    const input = document.createElement('input')

    // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // \`name\` and \`type\` must use .setAttribute for WWA (#14901)
    input.setAttribute('type', 'radio')
    input.setAttribute('checked', 'checked')
    input.setAttribute('name', 't')

    div.appendChild(input)

    // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked

    // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned
    div.innerHTML = '<textarea>x</textarea>'
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue

    // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.
    div.innerHTML = '<option></option>'
    support.option = !!div.lastChild
  })()

  // We have to close these tags to support XHTML (#13200)
  const wrapMap = {

    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],

    _default: [0, '', '']
  }

  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead
  wrapMap.th = wrapMap.td

  // Support: IE <=9 only
  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", '</select>']
  }

  function getAll (context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    let ret

    if (typeof context.getElementsByTagName !== 'undefined') {
      ret = context.getElementsByTagName(tag || '*')
    } else if (typeof context.querySelectorAll !== 'undefined') {
      ret = context.querySelectorAll(tag || '*')
    } else {
      ret = []
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret)
    }

    return ret
  }

  // Mark scripts as having already been evaluated
  function setGlobalEval (elems, refElements) {
    let i = 0
    const l = elems.length

    for (; i < l; i++) {
      dataPriv.set(
        elems[i],
        'globalEval',
        !refElements || dataPriv.get(refElements[i], 'globalEval')
      )
    }
  }

  const rhtml = /<|&#?\\w+;/

  function buildFragment (elems, context, scripts, selection, ignored) {
    let elem; let tmp; let tag; let wrap; let attached; let j
    const fragment = context.createDocumentFragment()
    const nodes = []
    let i = 0
    const l = elems.length

    for (; i < l; i++) {
      elem = elems[i]

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === 'object') {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem)

          // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem))

          // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement('div'))

          // Deserialize a standard representation
          tag = (rtagName.exec(elem) || ['', ''])[1].toLowerCase()
          wrap = wrapMap[tag] || wrapMap._default
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]

          // Descend through wrappers to the right content
          j = wrap[0]
          while (j--) {
            tmp = tmp.lastChild
          }

          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, tmp.childNodes)

          // Remember the top-level container
          tmp = fragment.firstChild

          // Ensure the created nodes are orphaned (#12392)
          tmp.textContent = ''
        }
      }
    }

    // Remove wrapper from fragment
    fragment.textContent = ''

    i = 0
    while ((elem = nodes[i++])) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem)
        }
        continue
      }

      attached = isAttached(elem)

      // Append to fragment
      tmp = getAll(fragment.appendChild(elem), 'script')

      // Preserve script evaluation history
      if (attached) {
        setGlobalEval(tmp)
      }

      // Capture executables
      if (scripts) {
        j = 0
        while ((elem = tmp[j++])) {
          if (rscriptType.test(elem.type || '')) {
            scripts.push(elem)
          }
        }
      }
    }

    return fragment
  }

  const rtypenamespace = /^([^.]*)(?:\\.(.+)|)/

  function returnTrue () {
    return true
  }

  function returnFalse () {
    return false
  }

  // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).
  function expectSync (elem, type) {
    return (elem === safeActiveElement()) === (type === 'focus')
  }

  // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393
  function safeActiveElement () {
    try {
      return document.activeElement
    } catch (err) { }
  }

  function on (elem, types, selector, data, fn, one) {
    let origFn, type

    // Types can be a map of types/handlers
    if (typeof types === 'object') {
      // ( types-Object, selector, data )
      if (typeof selector !== 'string') {
        // ( types-Object, data )
        data = data || selector
        selector = undefined
      }
      for (type in types) {
        on(elem, type, selector, data, types[type], one)
      }
      return elem
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector
      data = selector = undefined
    } else if (fn == null) {
      if (typeof selector === 'string') {
        // ( types, selector, fn )
        fn = data
        data = undefined
      } else {
        // ( types, data, fn )
        fn = data
        data = selector
        selector = undefined
      }
    }
    if (fn === false) {
      fn = returnFalse
    } else if (!fn) {
      return elem
    }

    if (one === 1) {
      origFn = fn
      fn = function (event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event)
        return origFn.apply(this, arguments)
      }

      // Use same guid so caller can remove using origFn
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)
    }
    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector)
    })
  }

  /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
  jQuery.event = {

    global: {},

    add: function (elem, types, handler, data, selector) {
      let handleObjIn; let eventHandle; let tmp
      let events; let t; let handleObj
      let special; let handlers; let type; let namespaces; let origType
      const elemData = dataPriv.get(elem)

      // Only attach events to objects that accept data
      if (!acceptData(elem)) {
        return
      }

      // Caller can pass in an object of custom data in lieu of the handler
      if (handler.handler) {
        handleObjIn = handler
        handler = handleObjIn.handler
        selector = handleObjIn.selector
      }

      // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)
      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector)
      }

      // Make sure that the handler has a unique ID, used to find/remove it later
      if (!handler.guid) {
        handler.guid = jQuery.guid++
      }

      // Init the element's event structure and main handler, if this is the first
      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null)
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== 'undefined' && jQuery.event.triggered !== e.type
            ? jQuery.event.dispatch.apply(elem, arguments) : undefined
        }
      }

      // Handle multiple events separated by a space
      types = (types || '').match(rnothtmlwhite) || ['']
      t = types.length
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || []
        type = origType = tmp[1]
        namespaces = (tmp[2] || '').split('.').sort()

        // There *must* be a type, no attaching namespace-only handlers
        if (!type) {
          continue
        }

        // If event changes its type, use the special event handlers for the changed type
        special = jQuery.event.special[type] || {}

        // If selector defined, determine special event api type, otherwise given type
        type = (selector ? special.delegateType : special.bindType) || type

        // Update special based on newly reset type
        special = jQuery.event.special[type] || {}

        // handleObj is passed to all event handlers
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join('.')
        }, handleObjIn)

        // Init the event handler queue if we're the first
        if (!(handlers = events[type])) {
          handlers = events[type] = []
          handlers.delegateCount = 0

          // Only use addEventListener if the special events handler returns false
          if (!special.setup ||
					special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle)
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj)

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid
          }
        }

        // Add to the element's handler list, delegates in front
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj)
        } else {
          handlers.push(handleObj)
        }

        // Keep track of which events have ever been used, for event optimization
        jQuery.event.global[type] = true
      }
    },

    // Detach an event or set of events from an element
    remove: function (elem, types, handler, selector, mappedTypes) {
      let j; let origCount; let tmp
      let events; let t; let handleObj
      let special; let handlers; let type; let namespaces; let origType
      const elemData = dataPriv.hasData(elem) && dataPriv.get(elem)

      if (!elemData || !(events = elemData.events)) {
        return
      }

      // Once for each type.namespace in types; type may be omitted
      types = (types || '').match(rnothtmlwhite) || ['']
      t = types.length
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || []
        type = origType = tmp[1]
        namespaces = (tmp[2] || '').split('.').sort()

        // Unbind all events (on this namespace, if provided) for the element
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true)
          }
          continue
        }

        special = jQuery.event.special[type] || {}
        type = (selector ? special.delegateType : special.bindType) || type
        handlers = events[type] || []
        tmp = tmp[2] &&
				new RegExp('(^|\\\\.)' + namespaces.join('\\\\.(?:.*\\\\.|)') + '(\\\\.|$)')

        // Remove matching events
        origCount = j = handlers.length
        while (j--) {
          handleObj = handlers[j]

          if ((mappedTypes || origType === handleObj.origType) &&
					(!handler || handler.guid === handleObj.guid) &&
					(!tmp || tmp.test(handleObj.namespace)) &&
					(!selector || selector === handleObj.selector ||
						selector === '**' && handleObj.selector)) {
            handlers.splice(j, 1)

            if (handleObj.selector) {
              handlers.delegateCount--
            }
            if (special.remove) {
              special.remove.call(elem, handleObj)
            }
          }
        }

        // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)
        if (origCount && !handlers.length) {
          if (!special.teardown ||
					special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle)
          }

          delete events[type]
        }
      }

      // Remove data and the expando if it's no longer used
      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, 'handle events')
      }
    },

    dispatch: function (nativeEvent) {
      let i; let j; let ret; let matched; let handleObj; let handlerQueue
      const args = new Array(arguments.length)

      // Make a writable jQuery.Event from the native event object
      const event = jQuery.event.fix(nativeEvent)

      const handlers = (
        dataPriv.get(this, 'events') || Object.create(null)
      )[event.type] || []
      const special = jQuery.event.special[event.type] || {}

      // Use the fix-ed jQuery.Event rather than the (read-only) native event
      args[0] = event

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i]
      }

      event.delegateTarget = this

      // Call the preDispatch hook for the mapped type, and let it bail if desired
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return
      }

      // Determine handlers
      handlerQueue = jQuery.event.handlers.call(this, event, handlers)

      // Run delegates first; they may want to stop propagation beneath us
      i = 0
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem

        j = 0
        while ((handleObj = matched.handlers[j++]) &&
				!event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj
            event.data = handleObj.data

            ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||
						handleObj.handler).apply(matched.elem, args)

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault()
                event.stopPropagation()
              }
            }
          }
        }
      }

      // Call the postDispatch hook for the mapped type
      if (special.postDispatch) {
        special.postDispatch.call(this, event)
      }

      return event.result
    },

    handlers: function (event, handlers) {
      let i; let handleObj; let sel; let matchedHandlers; let matchedSelectors
      const handlerQueue = []
      const delegateCount = handlers.delegateCount
      let cur = event.target

      // Find delegate handlers
      if (delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have \`button\` -1 (gh-2343)
			!(event.type === 'click' && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === 'click' && cur.disabled === true)) {
            matchedHandlers = []
            matchedSelectors = {}
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i]

              // Don't conflict with Object.prototype properties (#13203)
              sel = handleObj.selector + ' '

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext
                  ? jQuery(sel, this).index(cur) > -1
                  : jQuery.find(sel, this, null, [cur]).length
              }
              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj)
              }
            }
            if (matchedHandlers.length) {
              handlerQueue.push({ elem: cur, handlers: matchedHandlers })
            }
          }
        }
      }

      // Add the remaining (directly-bound) handlers
      cur = this
      if (delegateCount < handlers.length) {
        handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) })
      }

      return handlerQueue
    },

    addProp: function (name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,

        get: isFunction(hook)
          ? function () {
            if (this.originalEvent) {
              return hook(this.originalEvent)
            }
          }
          : function () {
            if (this.originalEvent) {
              return this.originalEvent[name]
            }
          },

        set: function (value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          })
        }
      })
    },

    fix: function (originalEvent) {
      return originalEvent[jQuery.expando]
        ? originalEvent
        : new jQuery.Event(originalEvent)
    },

    special: {
      load: {

        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {

        // Utilize native event to ensure correct state for checkable inputs
        setup: function (data) {
          // For mutual compressibility with _default, replace \`this\` access with a local var.
          // \`|| data\` is dead code meant only to preserve the variable through minification.
          const el = this || data

          // Claim the first handler
          if (rcheckableType.test(el.type) &&
					el.click && nodeName(el, 'input')) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, 'click', returnTrue)
          }

          // Return false to allow normal processing in the caller
          return false
        },
        trigger: function (data) {
          // For mutual compressibility with _default, replace \`this\` access with a local var.
          // \`|| data\` is dead code meant only to preserve the variable through minification.
          const el = this || data

          // Force setup before triggering a click
          if (rcheckableType.test(el.type) &&
					el.click && nodeName(el, 'input')) {
            leverageNative(el, 'click')
          }

          // Return non-false to allow normal event-path propagation
          return true
        },

        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function (event) {
          const target = event.target
          return rcheckableType.test(target.type) &&
					target.click && nodeName(target, 'input') &&
					dataPriv.get(target, 'click') ||
					nodeName(target, 'a')
        }
      },

      beforeunload: {
        postDispatch: function (event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result
          }
        }
      }
    }
  }

  // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.
  function leverageNative (el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue)
      }
      return
    }

    // Register the controller as a special universal handler for all event namespaces
    dataPriv.set(el, type, false)
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function (event) {
        let notAsync; let result
        let saved = dataPriv.get(this, type)

        if ((event.isTrigger & 1) && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = slice.call(arguments)
            dataPriv.set(this, type, saved)

            // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous
            notAsync = expectSync(this, type)
            this[type]()
            result = dataPriv.get(this, type)
            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false)
            } else {
              result = {}
            }
            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation()
              event.preventDefault()

              // Support: Chrome 86+
              // In Chrome, if an element having a focusout handler is blurred by
              // clicking outside of it, it invokes the handler synchronously. If
              // that handler calls \`.remove()\` on the element, the data is cleared,
              // leaving \`result\` undefined. We need to guard against this.
              return result && result.value
            }

            // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to \`.trigger()\` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.
          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation()
          }

          // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments
        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger(

              // Support: IE <=9 - 11+
              // Extend with the prototype to reset the above stopImmediatePropagation()
              jQuery.extend(saved[0], jQuery.Event.prototype),
              saved.slice(1),
              this
            )
          })

          // Abort handling of the native event
          event.stopImmediatePropagation()
        }
      }
    })
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle)
    }
  }

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props)
    }

    // Event object
    if (src && src.type) {
      this.originalEvent = src
      this.type = src.type

      // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.
      this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false
        ? returnTrue
        : returnFalse

      // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)
      this.target = (src.target && src.target.nodeType === 3)
        ? src.target.parentNode
        : src.target

      this.currentTarget = src.currentTarget
      this.relatedTarget = src.relatedTarget

      // Event type
    } else {
      this.type = src
    }

    // Put explicitly provided properties onto the event object
    if (props) {
      jQuery.extend(this, props)
    }

    // Create a timestamp if incoming event doesn't have one
    this.timeStamp = src && src.timeStamp || Date.now()

    // Mark it as fixed
    this[jQuery.expando] = true
  }

  // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,

    preventDefault: function () {
      const e = this.originalEvent

      this.isDefaultPrevented = returnTrue

      if (e && !this.isSimulated) {
        e.preventDefault()
      }
    },
    stopPropagation: function () {
      const e = this.originalEvent

      this.isPropagationStopped = returnTrue

      if (e && !this.isSimulated) {
        e.stopPropagation()
      }
    },
    stopImmediatePropagation: function () {
      const e = this.originalEvent

      this.isImmediatePropagationStopped = returnTrue

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation()
      }

      this.stopPropagation()
    }
  }

  // Includes all common event props including KeyEvent and MouseEvent specific props
  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    char: true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: true
  }, jQuery.event.addProp)

  jQuery.each({ focus: 'focusin', blur: 'focusout' }, function (type, delegateType) {
    jQuery.event.special[type] = {

      // Utilize native event if possible so blur/focus sequence is correct
      setup: function () {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync)

        // Return false to allow normal processing in the caller
        return false
      },
      trigger: function () {
        // Force setup before trigger
        leverageNative(this, type)

        // Return non-false to allow normal event-path propagation
        return true
      },

      // Suppress native focus or blur as it's already being fired
      // in leverageNative.
      _default: function () {
        return true
      },

      delegateType: delegateType
    }
  })

  // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).
  jQuery.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,

      handle: function (event) {
        let ret
        const target = this
        const related = event.relatedTarget
        const handleObj = event.handleObj

        // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window
        if (!related || (related !== target && !jQuery.contains(target, related))) {
          event.type = handleObj.origType
          ret = handleObj.handler.apply(this, arguments)
          event.type = fix
        }
        return ret
      }
    }
  })

  jQuery.fn.extend({

    on: function (types, selector, data, fn) {
      return on(this, types, selector, data, fn)
    },
    one: function (types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1)
    },
    off: function (types, selector, fn) {
      let handleObj, type
      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj
        jQuery(types.delegateTarget).off(
          handleObj.namespace
            ? handleObj.origType + '.' + handleObj.namespace
            : handleObj.origType,
          handleObj.selector,
          handleObj.handler
        )
        return this
      }
      if (typeof types === 'object') {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type])
        }
        return this
      }
      if (selector === false || typeof selector === 'function') {
        // ( types [, fn] )
        fn = selector
        selector = undefined
      }
      if (fn === false) {
        fn = returnFalse
      }
      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector)
      })
    }
  })

  const

    // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i

  // checked="checked" or checked
  const rchecked = /checked\\s*(?:[^=]|=\\s*.checked.)/i
  const rcleanScript = /^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g

  // Prefer a tbody over its parent table for containing new rows
  function manipulationTarget (elem, content) {
    if (nodeName(elem, 'table') &&
		nodeName(content.nodeType !== 11 ? content : content.firstChild, 'tr')) {
      return jQuery(elem).children('tbody')[0] || elem
    }

    return elem
  }

  // Replace/restore the type attribute of script elements for safe DOM manipulation
  function disableScript (elem) {
    elem.type = (elem.getAttribute('type') !== null) + '/' + elem.type
    return elem
  }
  function restoreScript (elem) {
    if ((elem.type || '').slice(0, 5) === 'true/') {
      elem.type = elem.type.slice(5)
    } else {
      elem.removeAttribute('type')
    }

    return elem
  }

  function cloneCopyEvent (src, dest) {
    let i, l, type, pdataOld, udataOld, udataCur, events

    if (dest.nodeType !== 1) {
      return
    }

    // 1. Copy private data: events, handlers, etc.
    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src)
      events = pdataOld.events

      if (events) {
        dataPriv.remove(dest, 'handle events')

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i])
          }
        }
      }
    }

    // 2. Copy user data
    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src)
      udataCur = jQuery.extend({}, udataOld)

      dataUser.set(dest, udataCur)
    }
  }

  // Fix IE bugs, see support tests
  function fixInput (src, dest) {
    const nodeName = dest.nodeName.toLowerCase()

    // Fails to persist the checked state of a cloned checkbox or radio button.
    if (nodeName === 'input' && rcheckableType.test(src.type)) {
      dest.checked = src.checked

      // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === 'input' || nodeName === 'textarea') {
      dest.defaultValue = src.defaultValue
    }
  }

  function domManip (collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args)

    let fragment; let first; let scripts; let hasScripts; let node; let doc
    let i = 0
    const l = collection.length
    const iNoClone = l - 1
    const value = args[0]
    const valueIsFunction = isFunction(value)

    // We can't cloneNode fragments that contain checked, in WebKit
    if (valueIsFunction ||
			(l > 1 && typeof value === 'string' &&
				!support.checkClone && rchecked.test(value))) {
      return collection.each(function (index) {
        const self = collection.eq(index)
        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html())
        }
        domManip(self, args, callback, ignored)
      })
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored)
      first = fragment.firstChild

      if (fragment.childNodes.length === 1) {
        fragment = first
      }

      // Require either new content or an interest in ignored elements to invoke the callback
      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, 'script'), disableScript)
        hasScripts = scripts.length

        // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).
        for (; i < l; i++) {
          node = fragment

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true)

            // Keep references to cloned scripts for later restoration
            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, 'script'))
            }
          }

          callback.call(collection[i], node, i)
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument

          // Reenable scripts
          jQuery.map(scripts, restoreScript)

          // Evaluate executable scripts on first document insertion
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i]
            if (rscriptType.test(node.type || '') &&
						!dataPriv.access(node, 'globalEval') &&
						jQuery.contains(doc, node)) {
              if (node.src && (node.type || '').toLowerCase() !== 'module') {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute('nonce')
                  }, doc)
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ''), node, doc)
              }
            }
          }
        }
      }
    }

    return collection
  }

  function remove (elem, selector, keepData) {
    let node
    const nodes = selector ? jQuery.filter(selector, elem) : elem
    let i = 0

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node))
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, 'script'))
        }
        node.parentNode.removeChild(node)
      }
    }

    return elem
  }

  jQuery.extend({
    htmlPrefilter: function (html) {
      return html
    },

    clone: function (elem, dataAndEvents, deepDataAndEvents) {
      let i; let l; let srcElements; let destElements
      const clone = elem.cloneNode(true)
      const inPage = isAttached(elem)

      // Fix IE cloning issues
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
				!jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone)
        srcElements = getAll(elem)

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i])
        }
      }

      // Copy the events from the original to the clone
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem)
          destElements = destElements || getAll(clone)

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i])
          }
        } else {
          cloneCopyEvent(elem, clone)
        }
      }

      // Preserve script evaluation history
      destElements = getAll(clone, 'script')
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, 'script'))
      }

      // Return the cloned set
      return clone
    },

    cleanData: function (elems) {
      let data; let elem; let type
      const special = jQuery.event.special
      let i = 0

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if ((data = elem[dataPriv.expando])) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type)

                  // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle)
                }
              }
            }

            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataPriv.expando] = undefined
          }
          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined
          }
        }
      }
    }
  })

  jQuery.fn.extend({
    detach: function (selector) {
      return remove(this, selector, true)
    },

    remove: function (selector) {
      return remove(this, selector)
    },

    text: function (value) {
      return access(this, function (value) {
        return value === undefined
          ? jQuery.text(this)
          : this.empty().each(function () {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              this.textContent = value
            }
          })
      }, null, value, arguments.length)
    },

    append: function () {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          const target = manipulationTarget(this, elem)
          target.appendChild(elem)
        }
      })
    },

    prepend: function () {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          const target = manipulationTarget(this, elem)
          target.insertBefore(elem, target.firstChild)
        }
      })
    },

    before: function () {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this)
        }
      })
    },

    after: function () {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling)
        }
      })
    },

    empty: function () {
      let elem
      let i = 0

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false))

          // Remove any remaining nodes
          elem.textContent = ''
        }
      }

      return this
    },

    clone: function (dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents

      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
      })
    },

    html: function (value) {
      return access(this, function (value) {
        let elem = this[0] || {}
        let i = 0
        const l = this.length

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML
        }

        // See if we can take a shortcut and just use innerHTML
        if (typeof value === 'string' && !rnoInnerhtml.test(value) &&
				!wrapMap[(rtagName.exec(value) || ['', ''])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value)

          try {
            for (; i < l; i++) {
              elem = this[i] || {}

              // Remove element nodes and prevent memory leaks
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false))
                elem.innerHTML = value
              }
            }

            elem = 0

            // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value)
        }
      }, null, value, arguments.length)
    },

    replaceWith: function () {
      const ignored = []

      // Make the changes, replacing each non-ignored context element with the new content
      return domManip(this, arguments, function (elem) {
        const parent = this.parentNode

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this))
          if (parent) {
            parent.replaceChild(elem, this)
          }
        }

        // Force callback invocation
      }, ignored)
    }
  })

  jQuery.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      let elems
      const ret = []
      const insert = jQuery(selector)
      const last = insert.length - 1
      let i = 0

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true)
        jQuery(insert[i])[original](elems)

        // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit
        push.apply(ret, elems.get())
      }

      return this.pushStack(ret)
    }
  })
  const rnumnonpx = new RegExp('^(' + pnum + ')(?!px)[a-z%]+$', 'i')

  const getStyles = function (elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    let view = elem.ownerDocument.defaultView

    if (!view || !view.opener) {
      view = window
    }

    return view.getComputedStyle(elem)
  }

  const swap = function (elem, options, callback) {
    let ret; let name
    const old = {}

    // Remember the old values, and insert the new ones
    for (name in options) {
      old[name] = elem.style[name]
      elem.style[name] = options[name]
    }

    ret = callback.call(elem)

    // Revert the old values
    for (name in options) {
      elem.style[name] = old[name]
    }

    return ret
  }

  const rboxStyle = new RegExp(cssExpand.join('|'), 'i');

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests () {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return
      }

      container.style.cssText = 'position:absolute;left:-11111px;width:60px;' +
			'margin-top:1px;padding:0;border:0'
      div.style.cssText =
			'position:relative;display:block;box-sizing:border-box;overflow:scroll;' +
			'margin:auto;border:1px;padding:1px;' +
			'width:60%;top:1%'
      documentElement.appendChild(container).appendChild(div)

      const divStyle = window.getComputedStyle(div)
      pixelPositionVal = divStyle.top !== '1%'

      // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12

      // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't
      div.style.right = '60%'
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36

      // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements
      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36

      // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)
      div.style.position = 'absolute'
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12

      documentElement.removeChild(container)

      // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed
      div = null
    }

    function roundPixelMeasures (measure) {
      return Math.round(parseFloat(measure))
    }

    let pixelPositionVal; let boxSizingReliableVal; let scrollboxSizeVal; let pixelBoxStylesVal
    let reliableTrDimensionsVal; let reliableMarginLeftVal
    var container = document.createElement('div')
    var div = document.createElement('div')

    // Finish early in limited (non-browser) environments
    if (!div.style) {
      return
    }

    // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)
    div.style.backgroundClip = 'content-box'
    div.cloneNode(true).style.backgroundClip = ''
    support.clearCloneStyle = div.style.backgroundClip === 'content-box'

    jQuery.extend(support, {
      boxSizingReliable: function () {
        computeStyleTests()
        return boxSizingReliableVal
      },
      pixelBoxStyles: function () {
        computeStyleTests()
        return pixelBoxStylesVal
      },
      pixelPosition: function () {
        computeStyleTests()
        return pixelPositionVal
      },
      reliableMarginLeft: function () {
        computeStyleTests()
        return reliableMarginLeftVal
      },
      scrollboxSize: function () {
        computeStyleTests()
        return scrollboxSizeVal
      },

      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport \`getComputedStyle\` of table rows with width/height
      // set in CSS while \`offset*\` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      //
      // Support: Firefox 70+
      // Only Firefox includes border widths
      // in computed dimensions. (gh-4529)
      reliableTrDimensions: function () {
        let table, tr, trChild, trStyle
        if (reliableTrDimensionsVal == null) {
          table = document.createElement('table')
          tr = document.createElement('tr')
          trChild = document.createElement('div')

          table.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate'
          tr.style.cssText = 'border:1px solid'

          // Support: Chrome 86+
          // Height set through cssText does not get applied.
          // Computed height then comes back as 0.
          tr.style.height = '1px'
          trChild.style.height = '9px'

          // Support: Android 8 Chrome 86+
          // In our bodyBackground.html iframe,
          // display for all div elements is set to "inline",
          // which causes a problem only in Android 8 Chrome 86.
          // Ensuring the div is display: block
          // gets around this issue.
          trChild.style.display = 'block'

          documentElement
            .appendChild(table)
            .appendChild(tr)
            .appendChild(trChild)

          trStyle = window.getComputedStyle(tr)
          reliableTrDimensionsVal = (parseInt(trStyle.height, 10) +
					parseInt(trStyle.borderTopWidth, 10) +
					parseInt(trStyle.borderBottomWidth, 10)) === tr.offsetHeight

          documentElement.removeChild(table)
        }
        return reliableTrDimensionsVal
      }
    })
  })()

  function curCSS (elem, name, computed) {
    let width; let minWidth; let maxWidth; let ret

    // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    const style = elem.style

    computed = computed || getStyles(elem)

    // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name]

      if (ret === '' && !isAttached(elem)) {
        ret = jQuery.style(elem, name)
      }

      // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values
      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width
        minWidth = style.minWidth
        maxWidth = style.maxWidth

        // Put in the new values to get a computed value out
        style.minWidth = style.maxWidth = style.width = ret
        ret = computed.width

        // Revert the changed values
        style.width = width
        style.minWidth = minWidth
        style.maxWidth = maxWidth
      }
    }

    return ret !== undefined

    // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
      ? ret + ''
      : ret
  }

  function addGetHookIf (conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function () {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get
          return
        }

        // Hook needed; redefine it so that the support test is not executed again.
        return (this.get = hookFn).apply(this, arguments)
      }
    }
  }

  const cssPrefixes = ['Webkit', 'Moz', 'ms']
  const emptyStyle = document.createElement('div').style
  const vendorProps = {}

  // Return a vendor-prefixed property or undefined
  function vendorPropName (name) {
    // Check for vendor prefixed names
    const capName = name[0].toUpperCase() + name.slice(1)
    let i = cssPrefixes.length

    while (i--) {
      name = cssPrefixes[i] + capName
      if (name in emptyStyle) {
        return name
      }
    }
  }

  // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
  function finalPropName (name) {
    const final = jQuery.cssProps[name] || vendorProps[name]

    if (final) {
      return final
    }
    if (name in emptyStyle) {
      return name
    }
    return vendorProps[name] = vendorPropName(name) || name
  }

  const

    // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/
  const rcustomProp = /^--/
  const cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' }
  const cssNormalTransform = {
    letterSpacing: '0',
    fontWeight: '400'
  }

  function setPositiveNumber (_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    const matches = rcssNum.exec(value)
    return matches

    // Guard against undefined "subtract", e.g., when used as in cssHooks
      ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || 'px')
      : value
  }

  function boxModelAdjustment (elem, dimension, box, isBorderBox, styles, computedVal) {
    let i = dimension === 'width' ? 1 : 0
    let extra = 0
    let delta = 0

    // Adjustment may not be necessary
    if (box === (isBorderBox ? 'border' : 'content')) {
      return 0
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === 'margin') {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles)
      }

      // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, 'padding' + cssExpand[i], true, styles)

        // For "border" or "margin", add border
        if (box !== 'padding') {
          delta += jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles)

          // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles)
        }

        // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"
      } else {
        // For "content", subtract padding
        if (box === 'content') {
          delta -= jQuery.css(elem, 'padding' + cssExpand[i], true, styles)
        }

        // For "content" or "padding", subtract border
        if (box !== 'margin') {
          delta -= jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles)
        }
      }
    }

    // Account for positive content-box scroll gutter when requested by providing computedVal
    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(
        elem['offset' + dimension[0].toUpperCase() + dimension.slice(1)] -
			computedVal -
			delta -
			extra -
			0.5

        // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
        // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0
    }

    return delta
  }

  function getWidthOrHeight (elem, dimension, extra) {
    // Start with computed style
    const styles = getStyles(elem)

    // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    const boxSizingNeeded = !support.boxSizingReliable() || extra
    let isBorderBox = boxSizingNeeded &&
			jQuery.css(elem, 'boxSizing', false, styles) === 'border-box'
    let valueIsBorderBox = isBorderBox

    let val = curCSS(elem, dimension, styles)
    const offsetProp = 'offset' + dimension[0].toUpperCase() + dimension.slice(1)

    // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.
    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val
      }
      val = 'auto'
    }

    // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.
    if ((!support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport \`getComputedStyle\` of table rows with width/height
		// set in CSS while \`offset*\` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName(elem, 'tr') ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === 'auto' ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat(val) && jQuery.css(elem, 'display', false, styles) === 'inline') &&

		// Make sure the element is visible & connected
		elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, 'boxSizing', false, styles) === 'border-box'

      // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.
      valueIsBorderBox = offsetProp in elem
      if (valueIsBorderBox) {
        val = elem[offsetProp]
      }
    }

    // Normalize "" and auto
    val = parseFloat(val) || 0

    // Adjust for the element's box model
    return (val +
		boxModelAdjustment(
		  elem,
		  dimension,
		  extra || (isBorderBox ? 'border' : 'content'),
		  valueIsBorderBox,
		  styles,

		  // Provide the current computed size to request scroll gutter calculation (gh-3589)
		  val
		)
    ) + 'px'
  }

  jQuery.extend({

    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function (elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            const ret = curCSS(elem, 'opacity')
            return ret === '' ? '1' : ret
          }
        }
      }
    },

    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      animationIterationCount: true,
      columnCount: true,
      fillOpacity: true,
      flexGrow: true,
      flexShrink: true,
      fontWeight: true,
      gridArea: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnStart: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowStart: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      widows: true,
      zIndex: true,
      zoom: true
    },

    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},

    // Get and set the style property on a DOM Node
    style: function (elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return
      }

      // Make sure that we're working with the right name
      let ret; let type; let hooks
      const origName = camelCase(name)
      const isCustomProp = rcustomProp.test(name)
      const style = elem.style

      // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.
      if (!isCustomProp) {
        name = finalPropName(origName)
      }

      // Gets hook for the prefixed version, then unprefixed version
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]

      // Check if we're setting a value
      if (value !== undefined) {
        type = typeof value

        // Convert "+=" or "-=" to relative numbers (#7345)
        if (type === 'string' && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret)

          // Fixes bug #9237
          type = 'number'
        }

        // Make sure that null and NaN values aren't set (#7116)
        if (value == null || value !== value) {
          return
        }

        // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.
        if (type === 'number' && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? '' : 'px')
        }

        // background-* props affect original clone's values
        if (!support.clearCloneStyle && value === '' && name.indexOf('background') === 0) {
          style[name] = 'inherit'
        }

        // If a hook was provided, use that value, otherwise just set the specified value
        if (!hooks || !('set' in hooks) ||
				(value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value)
          } else {
            style[name] = value
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && 'get' in hooks &&
				(ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret
        }

        // Otherwise just get the value from the style object
        return style[name]
      }
    },

    css: function (elem, name, extra, styles) {
      let val; let num; let hooks
      const origName = camelCase(name)
      const isCustomProp = rcustomProp.test(name)

      // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.
      if (!isCustomProp) {
        name = finalPropName(origName)
      }

      // Try prefixed name followed by the unprefixed name
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]

      // If a hook was provided get the computed value from there
      if (hooks && 'get' in hooks) {
        val = hooks.get(elem, true, extra)
      }

      // Otherwise, if a way to get the computed value exists, use that
      if (val === undefined) {
        val = curCSS(elem, name, styles)
      }

      // Convert "normal" to computed value
      if (val === 'normal' && name in cssNormalTransform) {
        val = cssNormalTransform[name]
      }

      // Make numeric if forced or a qualifier was provided and val looks numeric
      if (extra === '' || extra) {
        num = parseFloat(val)
        return extra === true || isFinite(num) ? num || 0 : val
      }

      return val
    }
  })

  jQuery.each(['height', 'width'], function (_i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function (elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, 'display')) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					(!elem.getClientRects().length || !elem.getBoundingClientRect().width)
            ? swap(elem, cssShow, function () {
              return getWidthOrHeight(elem, dimension, extra)
            })
            : getWidthOrHeight(elem, dimension, extra)
        }
      },

      set: function (elem, value, extra) {
        let matches
        const styles = getStyles(elem)

        // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        const scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === 'absolute'

        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        const boxSizingNeeded = scrollboxSizeBuggy || extra
        const isBorderBox = boxSizingNeeded &&
					jQuery.css(elem, 'boxSizing', false, styles) === 'border-box'
        let subtract = extra
          ? boxModelAdjustment(
            elem,
            dimension,
            extra,
            isBorderBox,
            styles
          )
          : 0

        // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)
        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(
            elem['offset' + dimension[0].toUpperCase() + dimension.slice(1)] -
					parseFloat(styles[dimension]) -
					boxModelAdjustment(elem, dimension, 'border', false, styles) -
					0.5
          )
        }

        // Convert to pixels if value adjustment is needed
        if (subtract && (matches = rcssNum.exec(value)) &&
				(matches[3] || 'px') !== 'px') {
          elem.style[dimension] = value
          value = jQuery.css(elem, dimension)
        }

        return setPositiveNumber(elem, value, subtract)
      }
    }
  })

  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,
    function (elem, computed) {
      if (computed) {
        return (parseFloat(curCSS(elem, 'marginLeft')) ||
				elem.getBoundingClientRect().left -
					swap(elem, { marginLeft: 0 }, function () {
					  return elem.getBoundingClientRect().left
					})
        ) + 'px'
      }
    }
  )

  // These hooks are used by animate to expand properties
  jQuery.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function (value) {
        let i = 0
        const expanded = {}

        // Assumes a single number if not a string
        const parts = typeof value === 'string' ? value.split(' ') : [value]

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] =
					parts[i] || parts[i - 2] || parts[0]
        }

        return expanded
      }
    }

    if (prefix !== 'margin') {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber
    }
  })

  jQuery.fn.extend({
    css: function (name, value) {
      return access(this, function (elem, name, value) {
        let styles; let len
        const map = {}
        let i = 0

        if (Array.isArray(name)) {
          styles = getStyles(elem)
          len = name.length

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles)
          }

          return map
        }

        return value !== undefined
          ? jQuery.style(elem, name, value)
          : jQuery.css(elem, name)
      }, name, value, arguments.length > 1)
    }
  })

  function Tween (elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing)
  }
  jQuery.Tween = Tween

  Tween.prototype = {
    constructor: Tween,
    init: function (elem, options, prop, end, easing, unit) {
      this.elem = elem
      this.prop = prop
      this.easing = easing || jQuery.easing._default
      this.options = options
      this.start = this.now = this.cur()
      this.end = end
      this.unit = unit || (jQuery.cssNumber[prop] ? '' : 'px')
    },
    cur: function () {
      const hooks = Tween.propHooks[this.prop]

      return hooks && hooks.get
        ? hooks.get(this)
        : Tween.propHooks._default.get(this)
    },
    run: function (percent) {
      let eased
      const hooks = Tween.propHooks[this.prop]

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](
          percent, this.options.duration * percent, 0, 1, this.options.duration
        )
      } else {
        this.pos = eased = percent
      }
      this.now = (this.end - this.start) * eased + this.start

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this)
      }

      if (hooks && hooks.set) {
        hooks.set(this)
      } else {
        Tween.propHooks._default.set(this)
      }
      return this
    }
  }

  Tween.prototype.init.prototype = Tween.prototype

  Tween.propHooks = {
    _default: {
      get: function (tween) {
        let result

        // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.
        if (tween.elem.nodeType !== 1 ||
				tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop]
        }

        // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.
        result = jQuery.css(tween.elem, tween.prop, '')

        // Empty strings, null, undefined and "auto" are converted to 0.
        return !result || result === 'auto' ? 0 : result
      },
      set: function (tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween)
        } else if (tween.elem.nodeType === 1 && (
          jQuery.cssHooks[tween.prop] ||
					tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
        } else {
          tween.elem[tween.prop] = tween.now
        }
      }
    }
  }

  // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now
      }
    }
  }

  jQuery.easing = {
    linear: function (p) {
      return p
    },
    swing: function (p) {
      return 0.5 - Math.cos(p * Math.PI) / 2
    },
    _default: 'swing'
  }

  jQuery.fx = Tween.prototype.init

  // Back compat <1.8 extension point
  jQuery.fx.step = {}

  let
    fxNow; let inProgress
  const rfxtypes = /^(?:toggle|show|hide)$/
  const rrun = /queueHooks$/

  function schedule () {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule)
      } else {
        window.setTimeout(schedule, jQuery.fx.interval)
      }

      jQuery.fx.tick()
    }
  }

  // Animations created synchronously will run synchronously
  function createFxNow () {
    window.setTimeout(function () {
      fxNow = undefined
    })
    return (fxNow = Date.now())
  }

  // Generate parameters to create a standard animation
  function genFx (type, includeWidth) {
    let which
    let i = 0
    const attrs = { height: type }

    // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right
    includeWidth = includeWidth ? 1 : 0
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i]
      attrs['margin' + which] = attrs['padding' + which] = type
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type
    }

    return attrs
  }

  function createTween (value, prop, animation) {
    let tween
    const collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners['*'])
    let index = 0
    const length = collection.length
    for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {
        // We're done with this property
        return tween
      }
    }
  }

  function defaultPrefilter (elem, props, opts) {
    let prop; let value; let toggle; let hooks; let oldfire; let propTween; let restoreDisplay; let display
    const isBox = 'width' in props || 'height' in props
    const anim = this
    const orig = {}
    const style = elem.style
    let hidden = elem.nodeType && isHiddenWithinTree(elem)
    let dataShow = dataPriv.get(elem, 'fxshow')

    // Queue-skipping animations hijack the fx hooks
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, 'fx')
      if (hooks.unqueued == null) {
        hooks.unqueued = 0
        oldfire = hooks.empty.fire
        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire()
          }
        }
      }
      hooks.unqueued++

      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--
          if (!jQuery.queue(elem, 'fx').length) {
            hooks.empty.fire()
          }
        })
      })
    }

    // Detect show/hide animations
    for (prop in props) {
      value = props[prop]
      if (rfxtypes.test(value)) {
        delete props[prop]
        toggle = toggle || value === 'toggle'
        if (value === (hidden ? 'hide' : 'show')) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === 'show' && dataShow && dataShow[prop] !== undefined) {
            hidden = true

            // Ignore all other no-op show/hide data
          } else {
            continue
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
      }
    }

    // Bail out if this is a no-op like .hide().hide()
    propTween = !jQuery.isEmptyObject(props)
    if (!propTween && jQuery.isEmptyObject(orig)) {
      return
    }

    // Restrict "overflow" and "display" styles during box animations
    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]

      // Identify a display type, preferring old show/hide data over the CSS cascade
      restoreDisplay = dataShow && dataShow.display
      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, 'display')
      }
      display = jQuery.css(elem, 'display')
      if (display === 'none') {
        if (restoreDisplay) {
          display = restoreDisplay
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true)
          restoreDisplay = elem.style.display || restoreDisplay
          display = jQuery.css(elem, 'display')
          showHide([elem])
        }
      }

      // Animate inline elements as inline-block
      if (display === 'inline' || display === 'inline-block' && restoreDisplay != null) {
        if (jQuery.css(elem, 'float') === 'none') {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay
            })
            if (restoreDisplay == null) {
              display = style.display
              restoreDisplay = display === 'none' ? '' : display
            }
          }
          style.display = 'inline-block'
        }
      }
    }

    if (opts.overflow) {
      style.overflow = 'hidden'
      anim.always(function () {
        style.overflow = opts.overflow[0]
        style.overflowX = opts.overflow[1]
        style.overflowY = opts.overflow[2]
      })
    }

    // Implement show/hide animations
    propTween = false
    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ('hidden' in dataShow) {
            hidden = dataShow.hidden
          }
        } else {
          dataShow = dataPriv.access(elem, 'fxshow', { display: restoreDisplay })
        }

        // Store hidden/visible for toggle so \`.stop().toggle()\` "reverses"
        if (toggle) {
          dataShow.hidden = !hidden
        }

        // Show elements before animating them
        if (hidden) {
          showHide([elem], true)
        }

        /* eslint-disable no-loop-func */

        anim.done(function () {
          /* eslint-enable no-loop-func */

          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem])
          }
          dataPriv.remove(elem, 'fxshow')
          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop])
          }
        })
      }

      // Per-property setup
      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim)
      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start
        if (hidden) {
          propTween.end = propTween.start
          propTween.start = 0
        }
      }
    }
  }

  function propFilter (props, specialEasing) {
    let index, name, easing, value, hooks

    // camelCase, specialEasing and expand cssHook pass
    for (index in props) {
      name = camelCase(index)
      easing = specialEasing[name]
      value = props[index]
      if (Array.isArray(value)) {
        easing = value[1]
        value = props[index] = value[0]
      }

      if (index !== name) {
        props[name] = value
        delete props[index]
      }

      hooks = jQuery.cssHooks[name]
      if (hooks && 'expand' in hooks) {
        value = hooks.expand(value)
        delete props[name]

        // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index]
            specialEasing[index] = easing
          }
        }
      } else {
        specialEasing[name] = easing
      }
    }
  }

  function Animation (elem, properties, options) {
    let result
    let stopped
    let index = 0
    const length = Animation.prefilters.length
    const deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem
    })
    var tick = function () {
      if (stopped) {
        return false
      }
      const currentTime = fxNow || createFxNow()
      const remaining = Math.max(0, animation.startTime + animation.duration - currentTime)

      // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use \`1 - ( 0.5 || 0 )\` (#12497)
      const temp = remaining / animation.duration || 0
      const percent = 1 - temp
      let index = 0
      const length = animation.tweens.length

      for (; index < length; index++) {
        animation.tweens[index].run(percent)
      }

      deferred.notifyWith(elem, [animation, percent, remaining])

      // If there's more to do, yield
      if (percent < 1 && length) {
        return remaining
      }

      // If this was an empty animation, synthesize a final progress notification
      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0])
      }

      // Resolve the animation and report its conclusion
      deferred.resolveWith(elem, [animation])
      return false
    }
    var animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function (prop, end) {
        const tween = jQuery.Tween(elem, animation.opts, prop, end,
          animation.opts.specialEasing[prop] || animation.opts.easing)
        animation.tweens.push(tween)
        return tween
      },
      stop: function (gotoEnd) {
        let index = 0

        // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        const length = gotoEnd ? animation.tweens.length : 0
        if (stopped) {
          return this
        }
        stopped = true
        for (; index < length; index++) {
          animation.tweens[index].run(1)
        }

        // Resolve when we played the last frame; otherwise, reject
        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0])
          deferred.resolveWith(elem, [animation, gotoEnd])
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd])
        }
        return this
      }
    })
    const props = animation.props

    propFilter(props, animation.opts.specialEasing)

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts)
      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
					result.stop.bind(result)
        }
        return result
      }
    }

    jQuery.map(props, createTween, animation)

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation)
    }

    // Attach callbacks from options
    animation
      .progress(animation.opts.progress)
      .done(animation.opts.done, animation.opts.complete)
      .fail(animation.opts.fail)
      .always(animation.opts.always)

    jQuery.fx.timer(
      jQuery.extend(tick, {
        elem: elem,
        anim: animation,
        queue: animation.opts.queue
      })
    )

    return animation
  }

  jQuery.Animation = jQuery.extend(Animation, {

    tweeners: {
      '*': [function (prop, value) {
        const tween = this.createTween(prop, value)
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween)
        return tween
      }]
    },

    tweener: function (props, callback) {
      if (isFunction(props)) {
        callback = props
        props = ['*']
      } else {
        props = props.match(rnothtmlwhite)
      }

      let prop
      let index = 0
      const length = props.length

      for (; index < length; index++) {
        prop = props[index]
        Animation.tweeners[prop] = Animation.tweeners[prop] || []
        Animation.tweeners[prop].unshift(callback)
      }
    },

    prefilters: [defaultPrefilter],

    prefilter: function (callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback)
      } else {
        Animation.prefilters.push(callback)
      }
    }
  })

  jQuery.speed = function (speed, easing, fn) {
    const opt = speed && typeof speed === 'object' ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing ||
			isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }

    // Go to the end state if fx are off
    if (jQuery.fx.off) {
      opt.duration = 0
    } else {
      if (typeof opt.duration !== 'number') {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration]
        } else {
          opt.duration = jQuery.fx.speeds._default
        }
      }
    }

    // Normalize opt.queue - true/undefined/null -> "fx"
    if (opt.queue == null || opt.queue === true) {
      opt.queue = 'fx'
    }

    // Queueing
    opt.old = opt.complete

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this)
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue)
      }
    }

    return opt
  }

  jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css('opacity', 0).show()

      // Animate to the value specified
        .end().animate({ opacity: to }, speed, easing, callback)
    },
    animate: function (prop, speed, easing, callback) {
      const empty = jQuery.isEmptyObject(prop)
      const optall = jQuery.speed(speed, easing, callback)
      const doAnimation = function () {
        // Operate on a copy of prop so per-property easing won't be lost
        const anim = Animation(this, jQuery.extend({}, prop), optall)

        // Empty animations, or finishing resolves immediately
        if (empty || dataPriv.get(this, 'finish')) {
          anim.stop(true)
        }
      }

      doAnimation.finish = doAnimation

      return empty || optall.queue === false
        ? this.each(doAnimation)
        : this.queue(optall.queue, doAnimation)
    },
    stop: function (type, clearQueue, gotoEnd) {
      const stopQueue = function (hooks) {
        const stop = hooks.stop
        delete hooks.stop
        stop(gotoEnd)
      }

      if (typeof type !== 'string') {
        gotoEnd = clearQueue
        clearQueue = type
        type = undefined
      }
      if (clearQueue) {
        this.queue(type || 'fx', [])
      }

      return this.each(function () {
        let dequeue = true
        let index = type != null && type + 'queueHooks'
        const timers = jQuery.timers
        const data = dataPriv.get(this)

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index])
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index])
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this &&
					(type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd)
            dequeue = false
            timers.splice(index, 1)
          }
        }

        // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type)
        }
      })
    },
    finish: function (type) {
      if (type !== false) {
        type = type || 'fx'
      }
      return this.each(function () {
        let index
        const data = dataPriv.get(this)
        const queue = data[type + 'queue']
        const hooks = data[type + 'queueHooks']
        const timers = jQuery.timers
        const length = queue ? queue.length : 0

        // Enable finishing flag on private data
        data.finish = true

        // Empty the queue first
        jQuery.queue(this, type, [])

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true)
        }

        // Look for any active animations, and finish them
        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true)
            timers.splice(index, 1)
          }
        }

        // Look for any animations in the old queue and finish them
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this)
          }
        }

        // Turn off finishing flag
        delete data.finish
      })
    }
  })

  jQuery.each(['toggle', 'show', 'hide'], function (_i, name) {
    const cssFn = jQuery.fn[name]
    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === 'boolean'
        ? cssFn.apply(this, arguments)
        : this.animate(genFx(name, true), speed, easing, callback)
    }
  })

  // Generate shortcuts for custom animations
  jQuery.each({
    slideDown: genFx('show'),
    slideUp: genFx('hide'),
    slideToggle: genFx('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback)
    }
  })

  jQuery.timers = []
  jQuery.fx.tick = function () {
    let timer
    let i = 0
    const timers = jQuery.timers

    fxNow = Date.now()

    for (; i < timers.length; i++) {
      timer = timers[i]

      // Run the timer and safely remove it when done (allowing for external removal)
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1)
      }
    }

    if (!timers.length) {
      jQuery.fx.stop()
    }
    fxNow = undefined
  }

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer)
    jQuery.fx.start()
  }

  jQuery.fx.interval = 13
  jQuery.fx.start = function () {
    if (inProgress) {
      return
    }

    inProgress = true
    schedule()
  }

  jQuery.fx.stop = function () {
    inProgress = null
  }

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,

    // Default speed
    _default: 400
  }

  // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time
    type = type || 'fx'

    return this.queue(type, function (next, hooks) {
      const timeout = window.setTimeout(next, time)
      hooks.stop = function () {
        window.clearTimeout(timeout)
      }
    })
  };

  (function () {
    let input = document.createElement('input')
    const select = document.createElement('select')
    const opt = select.appendChild(document.createElement('option'))

    input.type = 'checkbox'

    // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"
    support.checkOn = input.value !== ''

    // Support: IE <=11 only
    // Must access selectedIndex to make default options select
    support.optSelected = opt.selected

    // Support: IE <=11 only
    // An input loses its value after becoming a radio
    input = document.createElement('input')
    input.value = 't'
    input.type = 'radio'
    support.radioValue = input.value === 't'
  })()

  let boolHook
  const attrHandle = jQuery.expr.attrHandle

  jQuery.fn.extend({
    attr: function (name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1)
    },

    removeAttr: function (name) {
      return this.each(function () {
        jQuery.removeAttr(this, name)
      })
    }
  })

  jQuery.extend({
    attr: function (elem, name, value) {
      let ret; let hooks
      const nType = elem.nodeType

      // Don't get/set attributes on text, comment and attribute nodes
      if (nType === 3 || nType === 8 || nType === 2) {
        return
      }

      // Fallback to prop when attributes are not supported
      if (typeof elem.getAttribute === 'undefined') {
        return jQuery.prop(elem, name, value)
      }

      // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] ||
				(jQuery.expr.match.bool.test(name) ? boolHook : undefined)
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name)
          return
        }

        if (hooks && 'set' in hooks &&
				(ret = hooks.set(elem, value, name)) !== undefined) {
          return ret
        }

        elem.setAttribute(name, value + '')
        return value
      }

      if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret
      }

      ret = jQuery.find.attr(elem, name)

      // Non-existent attributes return null, we normalize to undefined
      return ret == null ? undefined : ret
    },

    attrHooks: {
      type: {
        set: function (elem, value) {
          if (!support.radioValue && value === 'radio' &&
					nodeName(elem, 'input')) {
            const val = elem.value
            elem.setAttribute('type', value)
            if (val) {
              elem.value = val
            }
            return value
          }
        }
      }
    },

    removeAttr: function (elem, value) {
      let name
      let i = 0

      // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      const attrNames = value && value.match(rnothtmlwhite)

      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          elem.removeAttribute(name)
        }
      }
    }
  })

  // Hooks for boolean attributes
  boolHook = {
    set: function (elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name)
      } else {
        elem.setAttribute(name, name)
      }
      return name
    }
  }

  jQuery.each(jQuery.expr.match.bool.source.match(/\\w+/g), function (_i, name) {
    const getter = attrHandle[name] || jQuery.find.attr

    attrHandle[name] = function (elem, name, isXML) {
      let ret; let handle
      const lowercaseName = name.toLowerCase()

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName]
        attrHandle[lowercaseName] = ret
        ret = getter(elem, name, isXML) != null
          ? lowercaseName
          : null
        attrHandle[lowercaseName] = handle
      }
      return ret
    }
  })

  const rfocusable = /^(?:input|select|textarea|button)$/i
  const rclickable = /^(?:a|area)$/i

  jQuery.fn.extend({
    prop: function (name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1)
    },

    removeProp: function (name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name]
      })
    }
  })

  jQuery.extend({
    prop: function (elem, name, value) {
      let ret; let hooks
      const nType = elem.nodeType

      // Don't get/set properties on text, comment and attribute nodes
      if (nType === 3 || nType === 8 || nType === 2) {
        return
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name
        hooks = jQuery.propHooks[name]
      }

      if (value !== undefined) {
        if (hooks && 'set' in hooks &&
				(ret = hooks.set(elem, value, name)) !== undefined) {
          return ret
        }

        return (elem[name] = value)
      }

      if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret
      }

      return elem[name]
    },

    propHooks: {
      tabIndex: {
        get: function (elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          const tabindex = jQuery.find.attr(elem, 'tabindex')

          if (tabindex) {
            return parseInt(tabindex, 10)
          }

          if (
            rfocusable.test(elem.nodeName) ||
					rclickable.test(elem.nodeName) &&
					elem.href
          ) {
            return 0
          }

          return -1
        }
      }
    },

    propFix: {
      for: 'htmlFor',
      class: 'className'
    }
  })

  // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function (elem) {
        /* eslint no-unused-expressions: "off" */

        const parent = elem.parentNode
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex
        }
        return null
      },
      set: function (elem) {
        /* eslint no-unused-expressions: "off" */

        const parent = elem.parentNode
        if (parent) {
          parent.selectedIndex

          if (parent.parentNode) {
            parent.parentNode.selectedIndex
          }
        }
      }
    }
  }

  jQuery.each([
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'
  ], function () {
    jQuery.propFix[this.toLowerCase()] = this
  })

  // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
  function stripAndCollapse (value) {
    const tokens = value.match(rnothtmlwhite) || []
    return tokens.join(' ')
  }

  function getClass (elem) {
    return elem.getAttribute && elem.getAttribute('class') || ''
  }

  function classesToArray (value) {
    if (Array.isArray(value)) {
      return value
    }
    if (typeof value === 'string') {
      return value.match(rnothtmlwhite) || []
    }
    return []
  }

  jQuery.fn.extend({
    addClass: function (value) {
      let classes; let elem; let cur; let curValue; let clazz; let j; let finalValue
      let i = 0

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)))
        })
      }

      classes = classesToArray(value)

      if (classes.length) {
        while ((elem = this[i++])) {
          curValue = getClass(elem)
          cur = elem.nodeType === 1 && (' ' + stripAndCollapse(curValue) + ' ')

          if (cur) {
            j = 0
            while ((clazz = classes[j++])) {
              if (cur.indexOf(' ' + clazz + ' ') < 0) {
                cur += clazz + ' '
              }
            }

            // Only assign if different to avoid unneeded rendering.
            finalValue = stripAndCollapse(cur)
            if (curValue !== finalValue) {
              elem.setAttribute('class', finalValue)
            }
          }
        }
      }

      return this
    },

    removeClass: function (value) {
      let classes; let elem; let cur; let curValue; let clazz; let j; let finalValue
      let i = 0

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)))
        })
      }

      if (!arguments.length) {
        return this.attr('class', '')
      }

      classes = classesToArray(value)

      if (classes.length) {
        while ((elem = this[i++])) {
          curValue = getClass(elem)

          // This expression is here for better compressibility (see addClass)
          cur = elem.nodeType === 1 && (' ' + stripAndCollapse(curValue) + ' ')

          if (cur) {
            j = 0
            while ((clazz = classes[j++])) {
              // Remove *all* instances
              while (cur.indexOf(' ' + clazz + ' ') > -1) {
                cur = cur.replace(' ' + clazz + ' ', ' ')
              }
            }

            // Only assign if different to avoid unneeded rendering.
            finalValue = stripAndCollapse(cur)
            if (curValue !== finalValue) {
              elem.setAttribute('class', finalValue)
            }
          }
        }
      }

      return this
    },

    toggleClass: function (value, stateVal) {
      const type = typeof value
      const isValidValue = type === 'string' || Array.isArray(value)

      if (typeof stateVal === 'boolean' && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value)
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(
            value.call(this, i, getClass(this), stateVal),
            stateVal
          )
        })
      }

      return this.each(function () {
        let className, i, self, classNames

        if (isValidValue) {
          // Toggle individual class names
          i = 0
          self = jQuery(this)
          classNames = classesToArray(value)

          while ((className = classNames[i++])) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className)
            } else {
              self.addClass(className)
            }
          }

          // Toggle whole class name
        } else if (value === undefined || type === 'boolean') {
          className = getClass(this)
          if (className) {
            // Store className if set
            dataPriv.set(this, '__className__', className)
          }

          // If the element has a class name or if we're passed \`false\`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.
          if (this.setAttribute) {
            this.setAttribute('class',
              className || value === false
                ? ''
                : dataPriv.get(this, '__className__') || ''
            )
          }
        }
      })
    },

    hasClass: function (selector) {
      let className; let elem
      let i = 0

      className = ' ' + selector + ' '
      while ((elem = this[i++])) {
        if (elem.nodeType === 1 &&
				(' ' + stripAndCollapse(getClass(elem)) + ' ').indexOf(className) > -1) {
          return true
        }
      }

      return false
    }
  })

  const rreturn = /\\r/g

  jQuery.fn.extend({
    val: function (value) {
      let hooks; let ret; let valueIsFunction
      const elem = this[0]

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] ||
					jQuery.valHooks[elem.nodeName.toLowerCase()]

          if (hooks &&
					'get' in hooks &&
					(ret = hooks.get(elem, 'value')) !== undefined
          ) {
            return ret
          }

          ret = elem.value

          // Handle most common string cases
          if (typeof ret === 'string') {
            return ret.replace(rreturn, '')
          }

          // Handle cases where value is null/undef or number
          return ret == null ? '' : ret
        }

        return
      }

      valueIsFunction = isFunction(value)

      return this.each(function (i) {
        let val

        if (this.nodeType !== 1) {
          return
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val())
        } else {
          val = value
        }

        // Treat null/undefined as ""; convert numbers to string
        if (val == null) {
          val = ''
        } else if (typeof val === 'number') {
          val += ''
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? '' : value + ''
          })
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]

        // If set returns undefined, fall back to normal setting
        if (!hooks || !('set' in hooks) || hooks.set(this, val, 'value') === undefined) {
          this.value = val
        }
      })
    }
  })

  jQuery.extend({
    valHooks: {
      option: {
        get: function (elem) {
          const val = jQuery.find.attr(elem, 'value')
          return val != null
            ? val

          // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
            : stripAndCollapse(jQuery.text(elem))
        }
      },
      select: {
        get: function (elem) {
          let value; let option; let i
          const options = elem.options
          const index = elem.selectedIndex
          const one = elem.type === 'select-one'
          const values = one ? null : []
          const max = one ? index + 1 : options.length

          if (index < 0) {
            i = max
          } else {
            i = one ? index : 0
          }

          // Loop through all the selected options
          for (; i < max; i++) {
            option = options[i]

            // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)
            if ((option.selected || i === index) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							(!option.parentNode.disabled ||
								!nodeName(option.parentNode, 'optgroup'))) {
              // Get the specific value for the option
              value = jQuery(option).val()

              // We don't need an array for one selects
              if (one) {
                return value
              }

              // Multi-Selects return an array
              values.push(value)
            }
          }

          return values
        },

        set: function (elem, value) {
          let optionSet; let option
          const options = elem.options
          const values = jQuery.makeArray(value)
          let i = options.length

          while (i--) {
            option = options[i]

            /* eslint-disable no-cond-assign */

            if (option.selected =
						jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1
            ) {
              optionSet = true
            }

            /* eslint-enable no-cond-assign */
          }

          // Force browsers to behave consistently when non-matching value is set
          if (!optionSet) {
            elem.selectedIndex = -1
          }
          return values
        }
      }
    }
  })

  // Radios and checkboxes getter/setter
  jQuery.each(['radio', 'checkbox'], function () {
    jQuery.valHooks[this] = {
      set: function (elem, value) {
        if (Array.isArray(value)) {
          return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1)
        }
      }
    }
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute('value') === null ? 'on' : elem.value
      }
    }
  })

  // Return jQuery for attributes-only inclusion

  support.focusin = 'onfocusin' in window

  const rfocusMorph = /^(?:focusinfocus|focusoutblur)$/
  const stopPropagationCallback = function (e) {
    e.stopPropagation()
  }

  jQuery.extend(jQuery.event, {

    trigger: function (event, data, elem, onlyHandlers) {
      let i; let cur; let tmp; let bubbleType; let ontype; let handle; let special; let lastElement
      const eventPath = [elem || document]
      let type = hasOwn.call(event, 'type') ? event.type : event
      let namespaces = hasOwn.call(event, 'namespace') ? event.namespace.split('.') : []

      cur = lastElement = tmp = elem = elem || document

      // Don't do events on text and comment nodes
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return
      }

      // focus/blur morphs to focusin/out; ensure we're not firing them right now
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return
      }

      if (type.indexOf('.') > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split('.')
        type = namespaces.shift()
        namespaces.sort()
      }
      ontype = type.indexOf(':') < 0 && 'on' + type

      // Caller can pass in a jQuery.Event object, Object, or just an event type string
      event = event[jQuery.expando]
        ? event
        : new jQuery.Event(type, typeof event === 'object' && event)

      // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
      event.isTrigger = onlyHandlers ? 2 : 3
      event.namespace = namespaces.join('.')
      event.rnamespace = event.namespace
        ? new RegExp('(^|\\\\.)' + namespaces.join('\\\\.(?:.*\\\\.|)') + '(\\\\.|$)')
        : null

      // Clean up the event in case it is being reused
      event.result = undefined
      if (!event.target) {
        event.target = elem
      }

      // Clone any incoming data and prepend the event, creating the handler arg list
      data = data == null
        ? [event]
        : jQuery.makeArray(data, [event])

      // Allow special events to draw outside the lines
      special = jQuery.event.special[type] || {}
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return
      }

      // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur)
          tmp = cur
        }

        // Only add window if we got to document (e.g., not plain obj or detached DOM)
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window)
        }
      }

      // Fire handlers on the event path
      i = 0
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur
        event.type = i > 1
          ? bubbleType
          : special.bindType || type

        // jQuery handler
        handle = (dataPriv.get(cur, 'events') || Object.create(null))[event.type] &&
				dataPriv.get(cur, 'handle')
        if (handle) {
          handle.apply(cur, data)
        }

        // Native handler
        handle = ontype && cur[ontype]
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data)
          if (event.result === false) {
            event.preventDefault()
          }
        }
      }
      event.type = type

      // If nobody prevented the default action, do it now
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default ||
				special._default.apply(eventPath.pop(), data) === false) &&
				acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype]

            if (tmp) {
              elem[ontype] = null
            }

            // Prevent re-triggering of the same event, since we already bubbled it above
            jQuery.event.triggered = type

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback)
            }

            elem[type]()

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback)
            }

            jQuery.event.triggered = undefined

            if (tmp) {
              elem[ontype] = tmp
            }
          }
        }
      }

      return event.result
    },

    // Piggyback on a donor event to simulate a different one
    // Used only for \`focus(in | out)\` events
    simulate: function (type, elem, event) {
      const e = jQuery.extend(
        new jQuery.Event(),
        event,
        {
          type: type,
          isSimulated: true
        }
      )

      jQuery.event.trigger(e, null, elem)
    }

  })

  jQuery.fn.extend({

    trigger: function (type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this)
      })
    },
    triggerHandler: function (type, data) {
      const elem = this[0]
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true)
      }
    }
  })

  // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
  if (!support.focusin) {
    jQuery.each({ focus: 'focusin', blur: 'focusout' }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      const handler = function (event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event))
      }

      jQuery.event.special[fix] = {
        setup: function () {
          // Handle: regular nodes (via \`this.ownerDocument\`), window
          // (via \`this.document\`) & document (via \`this\`).
          const doc = this.ownerDocument || this.document || this
          const attaches = dataPriv.access(doc, fix)

          if (!attaches) {
            doc.addEventListener(orig, handler, true)
          }
          dataPriv.access(doc, fix, (attaches || 0) + 1)
        },
        teardown: function () {
          const doc = this.ownerDocument || this.document || this
          const attaches = dataPriv.access(doc, fix) - 1

          if (!attaches) {
            doc.removeEventListener(orig, handler, true)
            dataPriv.remove(doc, fix)
          } else {
            dataPriv.access(doc, fix, attaches)
          }
        }
      }
    })
  }
  const location = window.location

  const nonce = { guid: Date.now() }

  const rquery = (/\\?/)

  // Cross-browser xml parsing
  jQuery.parseXML = function (data) {
    let xml, parserErrorElem
    if (!data || typeof data !== 'string') {
      return null
    }

    // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.
    try {
      xml = (new window.DOMParser()).parseFromString(data, 'text/xml')
    } catch (e) {}

    parserErrorElem = xml && xml.getElementsByTagName('parsererror')[0]
    if (!xml || parserErrorElem) {
      jQuery.error('Invalid XML: ' + (
        parserErrorElem
          ? jQuery.map(parserErrorElem.childNodes, function (el) {
            return el.textContent
          }).join('\\n')
          : data
      ))
    }
    return xml
  }

  const
    rbracket = /\\[\\]$/
  const rCRLF = /\\r?\\n/g
  const rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i
  const rsubmittable = /^(?:input|select|textarea|keygen)/i

  function buildParams (prefix, obj, traditional, add) {
    let name

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v)
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(
            prefix + '[' + (typeof v === 'object' && v != null ? i : '') + ']',
            v,
            traditional,
            add
          )
        }
      })
    } else if (!traditional && toType(obj) === 'object') {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj)
    }
  }

  // Serialize an array of form elements or a set of
  // key/values into a query string
  jQuery.param = function (a, traditional) {
    let prefix
    const s = []
    const add = function (key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      const value = isFunction(valueOrFunction)
        ? valueOrFunction()
        : valueOrFunction

      s[s.length] = encodeURIComponent(key) + '=' +
				encodeURIComponent(value == null ? '' : value)
    }

    if (a == null) {
      return ''
    }

    // If an array was passed in, assume that it is an array of form elements.
    if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value)
      })
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add)
      }
    }

    // Return the resulting serialization
    return s.join('&')
  }

  jQuery.fn.extend({
    serialize: function () {
      return jQuery.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        const elements = jQuery.prop(this, 'elements')
        return elements ? jQuery.makeArray(elements) : this
      }).filter(function () {
        const type = this.type

        // Use .is( ":disabled" ) so that fieldset[disabled] works
        return this.name && !jQuery(this).is(':disabled') &&
				rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
				(this.checked || !rcheckableType.test(type))
      }).map(function (_i, elem) {
        const val = jQuery(this).val()

        if (val == null) {
          return null
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return { name: elem.name, value: val.replace(rCRLF, '\\r\\n') }
          })
        }

        return { name: elem.name, value: val.replace(rCRLF, '\\r\\n') }
      }).get()
    }
  })

  const
    r20 = /%20/g
  const rhash = /#.*$/
  const rantiCache = /([?&])_=[^&]*/
  const rheaders = /^(.*?):[ \\t]*([^\\r\\n]*)$/mg

  // #7653, #8125, #8152: local protocol detection
  const rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
  const rnoContent = /^(?:GET|HEAD)$/
  const rprotocol = /^\\/\\//

  /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
  const prefilters = {}

  /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
  const transports = {}

  // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  const allTypes = '*/'.concat('*')

  // Anchor tag for parsing the document origin
  const originAnchor = document.createElement('a')

  originAnchor.href = location.href

  // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
  function addToPrefiltersOrTransports (structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== 'string') {
        func = dataTypeExpression
        dataTypeExpression = '*'
      }

      let dataType
      let i = 0
      const dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || []

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while ((dataType = dataTypes[i++])) {
          // Prepend if requested
          if (dataType[0] === '+') {
            dataType = dataType.slice(1) || '*';
            (structure[dataType] = structure[dataType] || []).unshift(func)

            // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func)
          }
        }
      }
    }
  }

  // Base inspection function for prefilters and transports
  function inspectPrefiltersOrTransports (structure, options, originalOptions, jqXHR) {
    const inspected = {}
    const seekingTransport = (structure === transports)

    function inspect (dataType) {
      let selected
      inspected[dataType] = true
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        const dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR)
        if (typeof dataTypeOrTransport === 'string' &&
				!seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport)
          inspect(dataTypeOrTransport)
          return false
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport)
        }
      })
      return selected
    }

    return inspect(options.dataTypes[0]) || !inspected['*'] && inspect('*')
  }

  // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887
  function ajaxExtend (target, src) {
    let key; let deep
    const flatOptions = jQuery.ajaxSettings.flatOptions || {}

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key]
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep)
    }

    return target
  }

  /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
  function ajaxHandleResponses (s, jqXHR, responses) {
    let ct; let type; let finalDataType; let firstDataType
    const contents = s.contents
    const dataTypes = s.dataTypes

    // Remove auto dataType and get content-type in the process
    while (dataTypes[0] === '*') {
      dataTypes.shift()
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader('Content-Type')
      }
    }

    // Check if we're dealing with a known content-type
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type)
          break
        }
      }
    }

    // Check to see if we have a response for the expected dataType
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0]
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + ' ' + dataTypes[0]]) {
          finalDataType = type
          break
        }
        if (!firstDataType) {
          firstDataType = type
        }
      }

      // Or just use first one
      finalDataType = finalDataType || firstDataType
    }

    // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType)
      }
      return responses[finalDataType]
    }
  }

  /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
  function ajaxConvert (s, response, jqXHR, isSuccess) {
    let conv2; let current; let conv; let tmp; let prev
    const converters = {}

    // Work with a copy of dataTypes in case we need to modify it for conversion
    const dataTypes = s.dataTypes.slice()

    // Create converters map with lowercased keys
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv]
      }
    }

    current = dataTypes.shift()

    // Convert to each sequential dataType
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response
      }

      // Apply the dataFilter if provided
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType)
      }

      prev = current
      current = dataTypes.shift()

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === '*') {
          current = prev

          // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== '*' && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + ' ' + current] || converters['* ' + current]

          // If none found, seek a pair
          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(' ')
              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + ' ' + tmp[0]] ||
								converters['* ' + tmp[0]]
                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]

                    // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0]
                    dataTypes.unshift(tmp[1])
                  }
                  break
                }
              }
            }
          }

          // Apply converter (if not an equivalence)
          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s.throws) {
              response = conv(response)
            } else {
              try {
                response = conv(response)
              } catch (e) {
                return {
                  state: 'parsererror',
                  error: conv ? e : 'No conversion from ' + prev + ' to ' + current
                }
              }
            }
          }
        }
      }
    }

    return { state: 'success', data: response }
  }

  jQuery.extend({

    // Counter for holding the number of active queries
    active: 0,

    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},

    ajaxSettings: {
      url: location.href,
      type: 'GET',
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

      /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

      accepts: {
        '*': allTypes,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },

      contents: {
        xml: /\\bxml\\b/,
        html: /\\bhtml/,
        json: /\\bjson\\b/
      },

      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },

      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {

        // Convert anything to text
        '* text': String,

        // Text to html (true = no transformation)
        'text html': true,

        // Evaluate text as a json expression
        'text json': JSON.parse,

        // Parse text as xml
        'text xml': jQuery.parseXML
      },

      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },

    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function (target, settings) {
      return settings

      // Building a settings object
        ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)

      // Extending ajaxSettings
        : ajaxExtend(jQuery.ajaxSettings, target)
    },

    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),

    // Main method
    ajax: function (url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (typeof url === 'object') {
        options = url
        url = undefined
      }

      // Force options to be an object
      options = options || {}

      let transport

      // URL without anti-cache param
      let cacheURL

      // Response headers
      let responseHeadersString
      let responseHeaders

      // timeout handle
      let timeoutTimer

      // Url cleanup var
      let urlAnchor

      // Request state (becomes false upon send and true upon completion)
      let completed

      // To know if global events are to be dispatched
      let fireGlobals

      // Loop variable
      let i

      // uncached part of the url
      let uncached

      // Create the final options object
      const s = jQuery.ajaxSetup({}, options)

      // Callbacks context
      const callbackContext = s.context || s

      // Context for global events is callbackContext if it is a DOM node or jQuery collection
      const globalEventContext = s.context &&
				(callbackContext.nodeType || callbackContext.jquery)
        ? jQuery(callbackContext)
        : jQuery.event

      // Deferreds
      const deferred = jQuery.Deferred()
      const completeDeferred = jQuery.Callbacks('once memory')

      // Status-dependent callbacks
      let statusCode = s.statusCode || {}

      // Headers (they are sent all at once)
      const requestHeaders = {}
      const requestHeadersNames = {}

      // Default abort message
      let strAbort = 'canceled'

      // Fake xhr
      var jqXHR = {
        readyState: 0,

        // Builds headers hashtable if needed
        getResponseHeader: function (key) {
          let match
          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {}
              while ((match = rheaders.exec(responseHeadersString))) {
                responseHeaders[match[1].toLowerCase() + ' '] =
									(responseHeaders[match[1].toLowerCase() + ' '] || [])
									  .concat(match[2])
              }
            }
            match = responseHeaders[key.toLowerCase() + ' ']
          }
          return match == null ? null : match.join(', ')
        },

        // Raw string
        getAllResponseHeaders: function () {
          return completed ? responseHeadersString : null
        },

        // Caches the header
        setRequestHeader: function (name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] =
							requestHeadersNames[name.toLowerCase()] || name
            requestHeaders[name] = value
          }
          return this
        },

        // Overrides response content-type header
        overrideMimeType: function (type) {
          if (completed == null) {
            s.mimeType = type
          }
          return this
        },

        // Status-dependent callbacks
        statusCode: function (map) {
          let code
          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status])
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                statusCode[code] = [statusCode[code], map[code]]
              }
            }
          }
          return this
        },

        // Cancel the request
        abort: function (statusText) {
          const finalText = statusText || strAbort
          if (transport) {
            transport.abort(finalText)
          }
          done(0, finalText)
          return this
        }
      }

      // Attach deferreds
      deferred.promise(jqXHR)

      // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available
      s.url = ((url || s.url || location.href) + '')
        .replace(rprotocol, location.protocol + '//')

      // Alias method option to type as per ticket #12004
      s.type = options.method || options.type || s.method || s.type

      // Extract dataTypes list
      s.dataTypes = (s.dataType || '*').toLowerCase().match(rnothtmlwhite) || ['']

      // A cross-domain request is in order when the origin doesn't match the current origin.
      if (s.crossDomain == null) {
        urlAnchor = document.createElement('a')

        // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/
        try {
          urlAnchor.href = s.url

          // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative
          urlAnchor.href = urlAnchor.href
          s.crossDomain = originAnchor.protocol + '//' + originAnchor.host !==
					urlAnchor.protocol + '//' + urlAnchor.host
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true
        }
      }

      // Convert data if not already a string
      if (s.data && s.processData && typeof s.data !== 'string') {
        s.data = jQuery.param(s.data, s.traditional)
      }

      // Apply prefilters
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR)

      // If request was aborted inside a prefilter, stop there
      if (completed) {
        return jqXHR
      }

      // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
      fireGlobals = jQuery.event && s.global

      // Watch for a new set of requests
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger('ajaxStart')
      }

      // Uppercase the type
      s.type = s.type.toUpperCase()

      // Determine if request has content
      s.hasContent = !rnoContent.test(s.type)

      // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation
      cacheURL = s.url.replace(rhash, '')

      // More options handling for requests with no content
      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length)

        // If data is available and should be processed, append data to url
        if (s.data && (s.processData || typeof s.data === 'string')) {
          cacheURL += (rquery.test(cacheURL) ? '&' : '?') + s.data

          // #9682: remove data so that it's not used in an eventual retry
          delete s.data
        }

        // Add or update anti-cache param if needed
        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, '$1')
          uncached = (rquery.test(cacheURL) ? '&' : '?') + '_=' + (nonce.guid++) +
					uncached
        }

        // Put hash and anti-cache on the URL that will be requested (gh-1732)
        s.url = cacheURL + uncached

        // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData &&
			(s.contentType || '').indexOf('application/x-www-form-urlencoded') === 0) {
        s.data = s.data.replace(r20, '+')
      }

      // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader('If-Modified-Since', jQuery.lastModified[cacheURL])
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader('If-None-Match', jQuery.etag[cacheURL])
        }
      }

      // Set the correct header, if data is being sent
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader('Content-Type', s.contentType)
      }

      // Set the Accepts header for the server, depending on the dataType
      jqXHR.setRequestHeader(
        'Accept',
        s.dataTypes[0] && s.accepts[s.dataTypes[0]]
          ? s.accepts[s.dataTypes[0]] +
					(s.dataTypes[0] !== '*' ? ', ' + allTypes + '; q=0.01' : '')
          : s.accepts['*']
      )

      // Check for headers option
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i])
      }

      // Allow custom headers/mimetypes and early abort
      if (s.beforeSend &&
			(s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort()
      }

      // Aborting is no longer a cancellation
      strAbort = 'abort'

      // Install callbacks on deferreds
      completeDeferred.add(s.complete)
      jqXHR.done(s.success)
      jqXHR.fail(s.error)

      // Get transport
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)

      // If no transport, we auto-abort
      if (!transport) {
        done(-1, 'No Transport')
      } else {
        jqXHR.readyState = 1

        // Send global event
        if (fireGlobals) {
          globalEventContext.trigger('ajaxSend', [jqXHR, s])
        }

        // If request was aborted inside ajaxSend, stop there
        if (completed) {
          return jqXHR
        }

        // Timeout
        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort('timeout')
          }, s.timeout)
        }

        try {
          completed = false
          transport.send(requestHeaders, done)
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e
          }

          // Propagate others as results
          done(-1, e)
        }
      }

      // Callback for when everything is done
      function done (status, nativeStatusText, responses, headers) {
        let isSuccess; let success; let error; let response; let modified
        let statusText = nativeStatusText

        // Ignore repeat invocations
        if (completed) {
          return
        }

        completed = true

        // Clear timeout if it exists
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer)
        }

        // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)
        transport = undefined

        // Cache response headers
        responseHeadersString = headers || ''

        // Set readyState
        jqXHR.readyState = status > 0 ? 4 : 0

        // Determine if successful
        isSuccess = status >= 200 && status < 300 || status === 304

        // Get response data
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses)
        }

        // Use a noop converter for missing script but not if jsonp
        if (!isSuccess &&
				jQuery.inArray('script', s.dataTypes) > -1 &&
				jQuery.inArray('json', s.dataTypes) < 0) {
          s.converters['text script'] = function () {}
        }

        // Convert no matter what (that way responseXXX fields are always set)
        response = ajaxConvert(s, response, jqXHR, isSuccess)

        // If successful, handle type chaining
        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader('Last-Modified')
            if (modified) {
              jQuery.lastModified[cacheURL] = modified
            }
            modified = jqXHR.getResponseHeader('etag')
            if (modified) {
              jQuery.etag[cacheURL] = modified
            }
          }

          // if no content
          if (status === 204 || s.type === 'HEAD') {
            statusText = 'nocontent'

            // if not modified
          } else if (status === 304) {
            statusText = 'notmodified'

            // If we have data, let's convert it
          } else {
            statusText = response.state
            success = response.data
            error = response.error
            isSuccess = !error
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText
          if (status || !statusText) {
            statusText = 'error'
            if (status < 0) {
              status = 0
            }
          }
        }

        // Set data for the fake xhr object
        jqXHR.status = status
        jqXHR.statusText = (nativeStatusText || statusText) + ''

        // Success/Error
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR])
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error])
        }

        // Status-dependent callbacks
        jqXHR.statusCode(statusCode)
        statusCode = undefined

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? 'ajaxSuccess' : 'ajaxError',
            [jqXHR, s, isSuccess ? success : error])
        }

        // Complete
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText])

        if (fireGlobals) {
          globalEventContext.trigger('ajaxComplete', [jqXHR, s])

          // Handle the global AJAX counter
          if (!(--jQuery.active)) {
            jQuery.event.trigger('ajaxStop')
          }
        }
      }

      return jqXHR
    },

    getJSON: function (url, data, callback) {
      return jQuery.get(url, data, callback, 'json')
    },

    getScript: function (url, callback) {
      return jQuery.get(url, undefined, callback, 'script')
    }
  })

  jQuery.each(['get', 'post'], function (_i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback
        callback = data
        data = undefined
      }

      // The url can be an options object (which then must have .url)
      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url))
    }
  })

  jQuery.ajaxPrefilter(function (s) {
    let i
    for (i in s.headers) {
      if (i.toLowerCase() === 'content-type') {
        s.contentType = s.headers[i] || ''
      }
    }
  })

  jQuery._evalUrl = function (url, options, doc) {
    return jQuery.ajax({
      url: url,

      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: 'GET',
      dataType: 'script',
      cache: true,
      async: false,
      global: false,

      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        'text script': function () {}
      },
      dataFilter: function (response) {
        jQuery.globalEval(response, options, doc)
      }
    })
  }

  jQuery.fn.extend({
    wrapAll: function (html) {
      let wrap

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0])
        }

        // The elements to wrap the target around
        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true)

        if (this[0].parentNode) {
          wrap.insertBefore(this[0])
        }

        wrap.map(function () {
          let elem = this

          while (elem.firstElementChild) {
            elem = elem.firstElementChild
          }

          return elem
        }).append(this)
      }

      return this
    },

    wrapInner: function (html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i))
        })
      }

      return this.each(function () {
        const self = jQuery(this)
        const contents = self.contents()

        if (contents.length) {
          contents.wrapAll(html)
        } else {
          self.append(html)
        }
      })
    },

    wrap: function (html) {
      const htmlIsFunction = isFunction(html)

      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html)
      })
    },

    unwrap: function (selector) {
      this.parent(selector).not('body').each(function () {
        jQuery(this).replaceWith(this.childNodes)
      })
      return this
    }
  })

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem)
  }
  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
  }

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest()
    } catch (e) {}
  }

  const xhrSuccessStatus = {

    // File protocol always yields status code 0, assume 200
    0: 200,

    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  }
  let xhrSupported = jQuery.ajaxSettings.xhr()

  support.cors = !!xhrSupported && ('withCredentials' in xhrSupported)
  support.ajax = xhrSupported = !!xhrSupported

  jQuery.ajaxTransport(function (options) {
    let callback, errorCallback

    // Cross domain only allowed if supported through XMLHttpRequest
    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function (headers, complete) {
          let i
          const xhr = options.xhr()

          xhr.open(
            options.type,
            options.url,
            options.async,
            options.username,
            options.password
          )

          // Apply custom fields if provided
          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i]
            }
          }

          // Override mime type if needed
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType)
          }

          // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.
          if (!options.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest'
          }

          // Set headers
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i])
          }

          // Callback
          callback = function (type) {
            return function () {
              if (callback) {
                callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null

                if (type === 'abort') {
                  xhr.abort()
                } else if (type === 'error') {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== 'number') {
                    complete(0, 'error')
                  } else {
                    complete(

                      // File: protocol always yields status 0; see #8605, #14207
                      xhr.status,
                      xhr.statusText
                    )
                  }
                } else {
                  complete(
                    xhrSuccessStatus[xhr.status] || xhr.status,
                    xhr.statusText,

                    // Support: IE <=9 only
                    // IE9 has no XHR2 but throws on binary (trac-11426)
                    // For XHR2 non-text, let the caller handle it (gh-2498)
                    (xhr.responseType || 'text') !== 'text' ||
									typeof xhr.responseText !== 'string'
                      ? { binary: xhr.response }
                      : { text: xhr.responseText },
                    xhr.getAllResponseHeaders()
                  )
                }
              }
            }
          }

          // Listen to events
          xhr.onload = callback()
          errorCallback = xhr.onerror = xhr.ontimeout = callback('error')

          // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts
          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (callback) {
                    errorCallback()
                  }
                })
              }
            }
          }

          // Create the abort callback
          callback = callback('abort')

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null)
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (callback) {
              throw e
            }
          }
        },

        abort: function () {
          if (callback) {
            callback()
          }
        }
      }
    }
  })

  // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false
    }
  })

  // Install script dataType
  jQuery.ajaxSetup({
    accepts: {
      script: 'text/javascript, application/javascript, ' +
			'application/ecmascript, application/x-ecmascript'
    },
    contents: {
      script: /\\b(?:java|ecma)script\\b/
    },
    converters: {
      'text script': function (text) {
        jQuery.globalEval(text)
        return text
      }
    }
  })

  // Handle cache's special case and crossDomain
  jQuery.ajaxPrefilter('script', function (s) {
    if (s.cache === undefined) {
      s.cache = false
    }
    if (s.crossDomain) {
      s.type = 'GET'
    }
  })

  // Bind script tag hack transport
  jQuery.ajaxTransport('script', function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      let script, callback
      return {
        send: function (_, complete) {
          script = jQuery('<script>')
            .attr(s.scriptAttrs || {})
            .prop({ charset: s.scriptCharset, src: s.url })
            .on('load error', callback = function (evt) {
              script.remove()
              callback = null
              if (evt) {
                complete(evt.type === 'error' ? 404 : 200, evt.type)
              }
            })

          // Use native DOM manipulation to avoid our domManip AJAX trickery
          document.head.appendChild(script[0])
        },
        abort: function () {
          if (callback) {
            callback()
          }
        }
      }
    }
  })

  const oldCallbacks = []
  const rjsonp = /(=)\\?(?=&|$)|\\?\\?/

  // Default jsonp settings
  jQuery.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      const callback = oldCallbacks.pop() || (jQuery.expando + '_' + (nonce.guid++))
      this[callback] = true
      return callback
    }
  })

  // Detect, normalize options and install callbacks for jsonp requests
  jQuery.ajaxPrefilter('json jsonp', function (s, originalSettings, jqXHR) {
    let callbackName; let overwritten; let responseContainer
    const jsonProp = s.jsonp !== false && (rjsonp.test(s.url)
      ? 'url'
      : typeof s.data === 'string' &&
				(s.contentType || '')
				  .indexOf('application/x-www-form-urlencoded') === 0 &&
				rjsonp.test(s.data) && 'data'
    )

    // Handle iff the expected data type is "jsonp" or we have a parameter to set
    if (jsonProp || s.dataTypes[0] === 'jsonp') {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback)
        ? s.jsonpCallback()
        : s.jsonpCallback

      // Insert callback into url or form data
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, '$1' + callbackName)
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? '&' : '?') + s.jsonp + '=' + callbackName
      }

      // Use data converter to retrieve json after script execution
      s.converters['script json'] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + ' was not called')
        }
        return responseContainer[0]
      }

      // Force json dataType
      s.dataTypes[0] = 'json'

      // Install callback
      overwritten = window[callbackName]
      window[callbackName] = function () {
        responseContainer = arguments
      }

      // Clean-up function (fires after converters)
      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName)

          // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten
        }

        // Save back as free
        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback

          // Save the callback name for future use
          oldCallbacks.push(callbackName)
        }

        // Call if it was a function and we have a response
        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0])
        }

        responseContainer = overwritten = undefined
      })

      // Delegate to script
      return 'script'
    }
  })

  // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337
  support.createHTMLDocument = (function () {
    const body = document.implementation.createHTMLDocument('').body
    body.innerHTML = '<form></form><form></form>'
    return body.childNodes.length === 2
  })()

  // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string
  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== 'string') {
      return []
    }
    if (typeof context === 'boolean') {
      keepScripts = context
      context = false
    }

    let base, parsed, scripts

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument('')

        // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)
        base = context.createElement('base')
        base.href = document.location.href
        context.head.appendChild(base)
      } else {
        context = document
      }
    }

    parsed = rsingleTag.exec(data)
    scripts = !keepScripts && []

    // Single tag
    if (parsed) {
      return [context.createElement(parsed[1])]
    }

    parsed = buildFragment([data], context, scripts)

    if (scripts && scripts.length) {
      jQuery(scripts).remove()
    }

    return jQuery.merge([], parsed.childNodes)
  }

  /**
 * Load a url into a page
 */
  jQuery.fn.load = function (url, params, callback) {
    let selector; let type; let response
    const self = this
    const off = url.indexOf(' ')

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off))
      url = url.slice(0, off)
    }

    // If it's a function
    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params
      params = undefined

      // Otherwise, build a param string
    } else if (params && typeof params === 'object') {
      type = 'POST'
    }

    // If we have elements to modify, make the request
    if (self.length > 0) {
      jQuery.ajax({
        url: url,

        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || 'GET',
        dataType: 'html',
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments

        self.html(selector

        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
          ? jQuery('<div>').append(jQuery.parseHTML(responseText)).find(selector)

        // Otherwise use the full result
          : responseText)

        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR])
        })
      })
    }

    return this
  }

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem
    }).length
  }

  jQuery.offset = {
    setOffset: function (elem, options, i) {
      let curPosition; let curLeft; let curCSSTop; let curTop; let curOffset; let curCSSLeft; let calculatePosition
      const position = jQuery.css(elem, 'position')
      const curElem = jQuery(elem)
      const props = {}

      // Set position first, in-case top/left are set even on static elem
      if (position === 'static') {
        elem.style.position = 'relative'
      }

      curOffset = curElem.offset()
      curCSSTop = jQuery.css(elem, 'top')
      curCSSLeft = jQuery.css(elem, 'left')
      calculatePosition = (position === 'absolute' || position === 'fixed') &&
			(curCSSTop + curCSSLeft).indexOf('auto') > -1

      // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed
      if (calculatePosition) {
        curPosition = curElem.position()
        curTop = curPosition.top
        curLeft = curPosition.left
      } else {
        curTop = parseFloat(curCSSTop) || 0
        curLeft = parseFloat(curCSSLeft) || 0
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset))
      }

      if (options.top != null) {
        props.top = (options.top - curOffset.top) + curTop
      }
      if (options.left != null) {
        props.left = (options.left - curOffset.left) + curLeft
      }

      if ('using' in options) {
        options.using.call(elem, props)
      } else {
        curElem.css(props)
      }
    }
  }

  jQuery.fn.extend({

    // offset() relates an element's border box to the document origin
    offset: function (options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined
          ? this
          : this.each(function (i) {
            jQuery.offset.setOffset(this, options, i)
          })
      }

      let rect; let win
      const elem = this[0]

      if (!elem) {
        return
      }

      // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error
      if (!elem.getClientRects().length) {
        return { top: 0, left: 0 }
      }

      // Get document-relative position by adding viewport scroll to viewport-relative gBCR
      rect = elem.getBoundingClientRect()
      win = elem.ownerDocument.defaultView
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      }
    },

    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function () {
      if (!this[0]) {
        return
      }

      let offsetParent; let offset; let doc
      const elem = this[0]
      let parentOffset = { top: 0, left: 0 }

      // position:fixed elements are offset from the viewport, which itself always has zero offset
      if (jQuery.css(elem, 'position') === 'fixed') {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect()
      } else {
        offset = this.offset()

        // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified
        doc = elem.ownerDocument
        offsetParent = elem.offsetParent || doc.documentElement
        while (offsetParent &&
				(offsetParent === doc.body || offsetParent === doc.documentElement) &&
				jQuery.css(offsetParent, 'position') === 'static') {
          offsetParent = offsetParent.parentNode
        }
        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset()
          parentOffset.top += jQuery.css(offsetParent, 'borderTopWidth', true)
          parentOffset.left += jQuery.css(offsetParent, 'borderLeftWidth', true)
        }
      }

      // Subtract parent offsets and element margins
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, 'marginTop', true),
        left: offset.left - parentOffset.left - jQuery.css(elem, 'marginLeft', true)
      }
    },

    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function () {
      return this.map(function () {
        let offsetParent = this.offsetParent

        while (offsetParent && jQuery.css(offsetParent, 'position') === 'static') {
          offsetParent = offsetParent.offsetParent
        }

        return offsetParent || documentElement
      })
    }
  })

  // Create scrollLeft and scrollTop methods
  jQuery.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (method, prop) {
    const top = prop === 'pageYOffset'

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        let win
        if (isWindow(elem)) {
          win = elem
        } else if (elem.nodeType === 9) {
          win = elem.defaultView
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method]
        }

        if (win) {
          win.scrollTo(
            !top ? val : win.pageXOffset,
            top ? val : win.pageYOffset
          )
        } else {
          elem[method] = val
        }
      }, method, val, arguments.length)
    }
  })

  // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here
  jQuery.each(['top', 'left'], function (_i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
      function (elem, computed) {
        if (computed) {
          computed = curCSS(elem, prop)

          // If curCSS returns percentage, fallback to offset
          return rnumnonpx.test(computed)
            ? jQuery(elem).position()[prop] + 'px'
            : computed
        }
      }
    )
  })

  // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
  jQuery.each({ Height: 'height', Width: 'width' }, function (name, type) {
    jQuery.each({
      padding: 'inner' + name,
      content: type,
      '': 'outer' + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        const chainable = arguments.length && (defaultExtra || typeof margin !== 'boolean')
        const extra = defaultExtra || (margin === true || value === true ? 'margin' : 'border')

        return access(this, function (elem, type, value) {
          let doc

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf('outer') === 0
              ? elem['inner' + name]
              : elem.document.documentElement['client' + name]
          }

          // Get document width or height
          if (elem.nodeType === 9) {
            doc = elem.documentElement

            // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest
            return Math.max(
              elem.body['scroll' + name], doc['scroll' + name],
              elem.body['offset' + name], doc['offset' + name],
              doc['client' + name]
            )
          }

          return value === undefined

          // Get width or height on the element, requesting but not forcing parseFloat
            ? jQuery.css(elem, type, extra)

          // Set width or height on the element
            : jQuery.style(elem, type, value, extra)
        }, type, chainable ? margin : undefined, chainable)
      }
    })
  })

  jQuery.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'
  ], function (_i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn)
    }
  })

  jQuery.fn.extend({

    bind: function (types, data, fn) {
      return this.on(types, null, data, fn)
    },
    unbind: function (types, fn) {
      return this.off(types, null, fn)
    },

    delegate: function (selector, types, data, fn) {
      return this.on(types, selector, data, fn)
    },
    undelegate: function (selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1
        ? this.off(selector, '**')
        : this.off(types, selector || '**', fn)
    },

    hover: function (fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
    }
  })

  jQuery.each(
    ('blur focus focusin focusout resize scroll click dblclick ' +
	'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' +
	'change select submit keydown keypress keyup contextmenu').split(' '),
    function (_i, name) {
      // Handle event binding
      jQuery.fn[name] = function (data, fn) {
        return arguments.length > 0
          ? this.on(name, null, data, fn)
          : this.trigger(name)
      }
    }
  )

  // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  const rtrim = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g

  // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon
  jQuery.proxy = function (fn, context) {
    let tmp, args, proxy

    if (typeof context === 'string') {
      tmp = fn[context]
      context = fn
      fn = tmp
    }

    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if (!isFunction(fn)) {
      return undefined
    }

    // Simulated bind
    args = slice.call(arguments, 2)
    proxy = function () {
      return fn.apply(context || this, args.concat(slice.call(arguments)))
    }

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || jQuery.guid++

    return proxy
  }

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++
    } else {
      jQuery.ready(true)
    }
  }
  jQuery.isArray = Array.isArray
  jQuery.parseJSON = JSON.parse
  jQuery.nodeName = nodeName
  jQuery.isFunction = isFunction
  jQuery.isWindow = isWindow
  jQuery.camelCase = camelCase
  jQuery.type = toType

  jQuery.now = Date.now

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    const type = jQuery.type(obj)
    return (type === 'number' || type === 'string') &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN(obj - parseFloat(obj))
  }

  jQuery.trim = function (text) {
    return text == null
      ? ''
      : (text + '').replace(rtrim, '')
  }

  // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.

  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

  if (typeof define === 'function' && define.amd) {
    define('jquery', [], function () {
      return jQuery
    })
  }

  const

    // Map over jQuery in case of overwrite
    _jQuery = window.jQuery

  // Map over the $ in case of overwrite
  const _$ = window.$

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery
    }

    return jQuery
  }

  // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)
  if (typeof noGlobal === 'undefined') {
    window.jQuery = window.$ = jQuery
  }

  return jQuery
})
`;const Fl=`var a1 = {
  "name": "vue-diff",
  "version": "0.0.0",
  "description": "Vue diff viewer",
  "private": true,
  "peerDependencies": {
    "vue": "^3.0.0"
  }
}`,Ll=`const b2 = {
  "name": "vue-diff",
  "version": "1.0.0",
  "description": "Vue diff viewer",
  "scripts": {
    "test": "vue-cli-service test:unit"
    "lint": "vue-cli-service lint"
  },
  "peerDependencies": {
    "vue": "^3.0.0"
  }
}`,ql=`<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Diff</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/dev/main.ts"><\/script>
</body>
</html>`,Hl=`<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Diff</title>
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-900">
  <div id="app"></div>
  <script type="module" src="/dev/main.ts"><\/script>
  <script async defer src="https://buttons.github.io/buttons.js"><\/script>
</body>
</html>`,zl=`.vue-diff-wrapper {
  width: 100%;
}

.vue-diff-theme-dark {
  @import 'highlight.js/scss/vs2015.scss';
  background-color: #000;
}

.vue-diff-theme-light {
  @import 'highlight.js/scss/vs.scss';
  background-color: #fff;
}`,Bl=`.vue-diff-wrapper {
  overflow: hidden;
  width: 100%;
  border-radius: 0.3em;
}

.vue-diff-theme-dark {
  @import 'highlight.js/scss/monokai.scss';
  background-color: #272822;
}

.vue-diff-theme-light {
  @import 'highlight.js/scss/vs.scss';
  background-color: #fff;
}`,Ul=`name: Release

on:
  push:
    branches:
      - alpha

jobs:
  # job`,Wl=`name: Release

on:
  push:
    branches:
      - master

jobs:`;var wo={javascript1:Fl,javascript2:Ll,html1:ql,html2:Hl,css1:zl,css2:Bl,yaml1:Ul,yaml2:Wl,jquery1:Pl,jquery2:Rl};var Mt=(e,n)=>{const t=e.__vccOpts||e;for(const[s,a]of n)t[s]=a;return t};const $l=Dt({setup(){const e=we(["split","unified"]),n=we("split"),t=we(null),s=we(["dark","light","custom"]),a=we("dark"),r=we(!1),o=we([{key:"javascript",title:"javascript",language:"javascript",inputDelay:0,virtualScroll:!1},{key:"html",title:"html",language:"html",inputDelay:0,virtualScroll:!1},{key:"css",title:"css",language:"css",inputDelay:0,virtualScroll:!1},{key:"yaml",title:"yaml",language:"yaml",inputDelay:0,virtualScroll:!1},{key:"jquery",title:"large text",language:"javascript",inputDelay:100,virtualScroll:{height:500,lineMinHeight:24,delay:100}}]),i=we(""),l=we("");return t.value=o.value[0],Ue(()=>t.value,()=>{i.value=wo[`${t==null?void 0:t.value.key}1`],l.value=wo[`${t==null?void 0:t.value.key}2`]},{immediate:!0}),{modes:e,mode:n,themes:s,theme:a,folding:r,list:o,selected:t,prev:i,current:l}}}),Xl={class:"form text-gray-100 mt-8"},Vl=G("label",{for:"language",class:"mr-2"},"Type:",-1),Gl=["value"],Kl=G("label",{for:"mode",class:"mr-2"},"Mode:",-1),Jl=G("label",{for:"theme",class:"mr-2"},"Theme:",-1),Zl=G("label",{for:"folding",class:"mr-2"},"Folding:",-1),Yl={class:"editor text-gray-100 mt-8"},ec=G("h2",{class:"text-2xl font-bold mb-4"},"Editor",-1),nc=G("h3",{class:"text-xl mb-4"},"Prev",-1),tc=G("h3",{class:"text-xl mb-4"},"Current",-1),rc={class:"viewer"},oc={class:"mt-8"},sc=G("h2",{class:"text-2xl font-bold text-gray-100 mb-4"},"Diff",-1),ic=G("p",{class:"text-gray-100 mb-4"}," inputDelay and virtualScroll option are set for large text diff. ",-1);function ac(e,n,t,s,a,r){const o=Sr("Diff");return le(),ue(ae,null,[G("div",Xl,[Vl,yn(G("select",{"onUpdate:modelValue":n[0]||(n[0]=i=>e.selected=i),id:"language",class:"bg-gray-900 w-40 py-1 px-3 mr-4 rounded border border-gray-500 text-gray-300"},[(le(!0),ue(ae,null,zn(e.list,i=>(le(),ue("option",{key:i.title,value:i},Fn(i.title),9,Gl))),128))],512),[[zt,e.selected]]),Kl,yn(G("select",{"onUpdate:modelValue":n[1]||(n[1]=i=>e.mode=i),id:"mode",class:"bg-gray-900 w-40 py-1 px-3 mr-4 rounded border border-gray-500 text-gray-300"},[(le(!0),ue(ae,null,zn(e.modes,i=>(le(),ue("option",{key:i},Fn(i),1))),128))],512),[[zt,e.mode]]),Jl,yn(G("select",{"onUpdate:modelValue":n[2]||(n[2]=i=>e.theme=i),id:"theme",class:"bg-gray-900 w-40 py-1 px-3 mr-4 rounded border border-gray-500 text-gray-300"},[(le(!0),ue(ae,null,zn(e.themes,i=>(le(),ue("option",{key:i},Fn(i),1))),128))],512),[[zt,e.theme]]),Zl,yn(G("input",{"onUpdate:modelValue":n[3]||(n[3]=i=>e.folding=i),type:"checkbox",id:"folding",class:"form-checkbox"},null,512),[[Dl,e.folding]])]),G("div",Yl,[G("section",null,[ec,G("div",null,[nc,yn(G("textarea",{"onUpdate:modelValue":n[4]||(n[4]=i=>e.prev=i),class:"bg-gray-900 p-4 rounded-lg border-2 border-gray-500 text-gray-300"},null,512),[[go,e.prev]])]),G("div",null,[tc,yn(G("textarea",{"onUpdate:modelValue":n[5]||(n[5]=i=>e.current=i),class:"bg-gray-900 p-4 rounded-lg border-2 border-gray-500 text-gray-300"},null,512),[[go,e.current]])])])]),G("div",rc,[G("section",oc,[sc,ic,Ae(o,{mode:e.mode,theme:e.theme,language:e.selected.language,prev:e.prev,current:e.current,folding:e.folding,"input-delay":e.selected.inputDelay,"virtual-scroll":e.selected.virtualScroll},null,8,["mode","theme","language","prev","current","folding","input-delay","virtual-scroll"])])])],64)}var lc=Mt($l,[["render",ac]]);function cc(e){return Ti()?(Ci(e),!0):!1}const Os=typeof window!="undefined";function Ns(e,n){function t(...s){e(()=>n.apply(this,s),{fn:n,thisArg:this,args:s})}return t}const uc=e=>e();function dc(e,n={}){let t,s;return r=>{const o=$n(e),i=$n(n.maxWait);if(t&&clearTimeout(t),o<=0||i!==void 0&&i<=0)return s&&(clearTimeout(s),s=null),r();i&&!s&&(s=setTimeout(()=>{t&&clearTimeout(t),s=null,r()},i)),t=setTimeout(()=>{s&&clearTimeout(s),s=null,r()},o)}}function pc(e,n=!0,t=!0){let s=0,a,r=!t;const o=()=>{a&&(clearTimeout(a),a=void 0)};return l=>{const c=$n(e),u=Date.now()-s;if(o(),c<=0)return s=Date.now(),l();u>c&&(s=Date.now(),r?r=!1:l()),n&&(a=setTimeout(()=>{s=Date.now(),t||(r=!0),o(),l()},c)),!t&&!a&&(a=setTimeout(()=>r=!0,c))}}function Rn(e,n=200,t=!0,s=!0){return Ns(pc(n,t,s),e)}var xo=Object.getOwnPropertySymbols,fc=Object.prototype.hasOwnProperty,hc=Object.prototype.propertyIsEnumerable,mc=(e,n)=>{var t={};for(var s in e)fc.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&xo)for(var s of xo(e))n.indexOf(s)<0&&hc.call(e,s)&&(t[s]=e[s]);return t};function gc(e,n,t={}){const s=t,{eventFilter:a=uc}=s,r=mc(s,["eventFilter"]);return Ue(e,Ns(a,n),r)}var yc=Object.defineProperty,bc=Object.defineProperties,vc=Object.getOwnPropertyDescriptors,xt=Object.getOwnPropertySymbols,_s=Object.prototype.hasOwnProperty,Ms=Object.prototype.propertyIsEnumerable,jo=(e,n,t)=>n in e?yc(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,wc=(e,n)=>{for(var t in n||(n={}))_s.call(n,t)&&jo(e,t,n[t]);if(xt)for(var t of xt(n))Ms.call(n,t)&&jo(e,t,n[t]);return e},xc=(e,n)=>bc(e,vc(n)),jc=(e,n)=>{var t={};for(var s in e)_s.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&xt)for(var s of xt(e))n.indexOf(s)<0&&Ms.call(e,s)&&(t[s]=e[s]);return t};function Ps(e,n,t={}){const s=t,{debounce:a=0}=s,r=jc(s,["debounce"]);return gc(e,n,xc(wc({},r),{eventFilter:dc(a)}))}function kc(e){var n;const t=$n(e);return(n=t==null?void 0:t.$el)!=null?n:t}const Ec=Os?window:void 0,or=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},sr="__vueuse_ssr_handlers__";or[sr]=or[sr]||{};or[sr];var ko=Object.getOwnPropertySymbols,Sc=Object.prototype.hasOwnProperty,Tc=Object.prototype.propertyIsEnumerable,Cc=(e,n)=>{var t={};for(var s in e)Sc.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&ko)for(var s of ko(e))n.indexOf(s)<0&&Tc.call(e,s)&&(t[s]=e[s]);return t};function Ac(e,n,t={}){const s=t,{window:a=Ec}=s,r=Cc(s,["window"]);let o;const i=a&&"ResizeObserver"in a,l=()=>{o&&(o.disconnect(),o=void 0)},c=Ue(()=>kc(e),d=>{l(),i&&a&&d&&(o=new ResizeObserver(n),o.observe(d,r))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return cc(u),{isSupported:i,stop:u}}var Eo,So;Os&&(window==null?void 0:window.navigator)&&((Eo=window==null?void 0:window.navigator)==null?void 0:Eo.platform)&&/iP(ad|hone|od)/.test((So=window==null?void 0:window.navigator)==null?void 0:So.platform);var Ar={exports:{}};(function(e){var n=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},t=-1,s=1,a=0;n.Diff=function(r,o){return[r,o]},n.prototype.diff_main=function(r,o,i,l){typeof l=="undefined"&&(this.Diff_Timeout<=0?l=Number.MAX_VALUE:l=new Date().getTime()+this.Diff_Timeout*1e3);var c=l;if(r==null||o==null)throw new Error("Null input. (diff_main)");if(r==o)return r?[new n.Diff(a,r)]:[];typeof i=="undefined"&&(i=!0);var u=i,d=this.diff_commonPrefix(r,o),f=r.substring(0,d);r=r.substring(d),o=o.substring(d),d=this.diff_commonSuffix(r,o);var m=r.substring(r.length-d);r=r.substring(0,r.length-d),o=o.substring(0,o.length-d);var y=this.diff_compute_(r,o,u,c);return f&&y.unshift(new n.Diff(a,f)),m&&y.push(new n.Diff(a,m)),this.diff_cleanupMerge(y),y},n.prototype.diff_compute_=function(r,o,i,l){var c;if(!r)return[new n.Diff(s,o)];if(!o)return[new n.Diff(t,r)];var u=r.length>o.length?r:o,d=r.length>o.length?o:r,f=u.indexOf(d);if(f!=-1)return c=[new n.Diff(s,u.substring(0,f)),new n.Diff(a,d),new n.Diff(s,u.substring(f+d.length))],r.length>o.length&&(c[0][0]=c[2][0]=t),c;if(d.length==1)return[new n.Diff(t,r),new n.Diff(s,o)];var m=this.diff_halfMatch_(r,o);if(m){var y=m[0],w=m[1],j=m[2],I=m[3],M=m[4],P=this.diff_main(y,j,i,l),R=this.diff_main(w,I,i,l);return P.concat([new n.Diff(a,M)],R)}return i&&r.length>100&&o.length>100?this.diff_lineMode_(r,o,l):this.diff_bisect_(r,o,l)},n.prototype.diff_lineMode_=function(r,o,i){var l=this.diff_linesToChars_(r,o);r=l.chars1,o=l.chars2;var c=l.lineArray,u=this.diff_main(r,o,!1,i);this.diff_charsToLines_(u,c),this.diff_cleanupSemantic(u),u.push(new n.Diff(a,""));for(var d=0,f=0,m=0,y="",w="";d<u.length;){switch(u[d][0]){case s:m++,w+=u[d][1];break;case t:f++,y+=u[d][1];break;case a:if(f>=1&&m>=1){u.splice(d-f-m,f+m),d=d-f-m;for(var j=this.diff_main(y,w,!1,i),I=j.length-1;I>=0;I--)u.splice(d,0,j[I]);d=d+j.length}m=0,f=0,y="",w="";break}d++}return u.pop(),u},n.prototype.diff_bisect_=function(r,o,i){for(var l=r.length,c=o.length,u=Math.ceil((l+c)/2),d=u,f=2*u,m=new Array(f),y=new Array(f),w=0;w<f;w++)m[w]=-1,y[w]=-1;m[d+1]=0,y[d+1]=0;for(var j=l-c,I=j%2!=0,M=0,P=0,R=0,U=0,$=0;$<u&&!(new Date().getTime()>i);$++){for(var X=-$+M;X<=$-P;X+=2){var K=d+X,z;X==-$||X!=$&&m[K-1]<m[K+1]?z=m[K+1]:z=m[K-1]+1;for(var te=z-X;z<l&&te<c&&r.charAt(z)==o.charAt(te);)z++,te++;if(m[K]=z,z>l)P+=2;else if(te>c)M+=2;else if(I){var Z=d+j-X;if(Z>=0&&Z<f&&y[Z]!=-1){var Y=l-y[Z];if(z>=Y)return this.diff_bisectSplit_(r,o,z,te,i)}}}for(var oe=-$+R;oe<=$-U;oe+=2){var Z=d+oe,Y;oe==-$||oe!=$&&y[Z-1]<y[Z+1]?Y=y[Z+1]:Y=y[Z-1]+1;for(var ie=Y-oe;Y<l&&ie<c&&r.charAt(l-Y-1)==o.charAt(c-ie-1);)Y++,ie++;if(y[Z]=Y,Y>l)U+=2;else if(ie>c)R+=2;else if(!I){var K=d+j-oe;if(K>=0&&K<f&&m[K]!=-1){var z=m[K],te=d+z-K;if(Y=l-Y,z>=Y)return this.diff_bisectSplit_(r,o,z,te,i)}}}}return[new n.Diff(t,r),new n.Diff(s,o)]},n.prototype.diff_bisectSplit_=function(r,o,i,l,c){var u=r.substring(0,i),d=o.substring(0,l),f=r.substring(i),m=o.substring(l),y=this.diff_main(u,d,!1,c),w=this.diff_main(f,m,!1,c);return y.concat(w)},n.prototype.diff_linesToChars_=function(r,o){var i=[],l={};i[0]="";function c(m){for(var y="",w=0,j=-1,I=i.length;j<m.length-1;){j=m.indexOf(`
`,w),j==-1&&(j=m.length-1);var M=m.substring(w,j+1);(l.hasOwnProperty?l.hasOwnProperty(M):l[M]!==void 0)?y+=String.fromCharCode(l[M]):(I==u&&(M=m.substring(w),j=m.length),y+=String.fromCharCode(I),l[M]=I,i[I++]=M),w=j+1}return y}var u=4e4,d=c(r);u=65535;var f=c(o);return{chars1:d,chars2:f,lineArray:i}},n.prototype.diff_charsToLines_=function(r,o){for(var i=0;i<r.length;i++){for(var l=r[i][1],c=[],u=0;u<l.length;u++)c[u]=o[l.charCodeAt(u)];r[i][1]=c.join("")}},n.prototype.diff_commonPrefix=function(r,o){if(!r||!o||r.charAt(0)!=o.charAt(0))return 0;for(var i=0,l=Math.min(r.length,o.length),c=l,u=0;i<c;)r.substring(u,c)==o.substring(u,c)?(i=c,u=i):l=c,c=Math.floor((l-i)/2+i);return c},n.prototype.diff_commonSuffix=function(r,o){if(!r||!o||r.charAt(r.length-1)!=o.charAt(o.length-1))return 0;for(var i=0,l=Math.min(r.length,o.length),c=l,u=0;i<c;)r.substring(r.length-c,r.length-u)==o.substring(o.length-c,o.length-u)?(i=c,u=i):l=c,c=Math.floor((l-i)/2+i);return c},n.prototype.diff_commonOverlap_=function(r,o){var i=r.length,l=o.length;if(i==0||l==0)return 0;i>l?r=r.substring(i-l):i<l&&(o=o.substring(0,i));var c=Math.min(i,l);if(r==o)return c;for(var u=0,d=1;;){var f=r.substring(c-d),m=o.indexOf(f);if(m==-1)return u;d+=m,(m==0||r.substring(c-d)==o.substring(0,d))&&(u=d,d++)}},n.prototype.diff_halfMatch_=function(r,o){if(this.Diff_Timeout<=0)return null;var i=r.length>o.length?r:o,l=r.length>o.length?o:r;if(i.length<4||l.length*2<i.length)return null;var c=this;function u(P,R,U){for(var $=P.substring(U,U+Math.floor(P.length/4)),X=-1,K="",z,te,Z,Y;(X=R.indexOf($,X+1))!=-1;){var oe=c.diff_commonPrefix(P.substring(U),R.substring(X)),ie=c.diff_commonSuffix(P.substring(0,U),R.substring(0,X));K.length<ie+oe&&(K=R.substring(X-ie,X)+R.substring(X,X+oe),z=P.substring(0,U-ie),te=P.substring(U+oe),Z=R.substring(0,X-ie),Y=R.substring(X+oe))}return K.length*2>=P.length?[z,te,Z,Y,K]:null}var d=u(i,l,Math.ceil(i.length/4)),f=u(i,l,Math.ceil(i.length/2)),m;if(!d&&!f)return null;f?d?m=d[4].length>f[4].length?d:f:m=f:m=d;var y,w,j,I;r.length>o.length?(y=m[0],w=m[1],j=m[2],I=m[3]):(j=m[0],I=m[1],y=m[2],w=m[3]);var M=m[4];return[y,w,j,I,M]},n.prototype.diff_cleanupSemantic=function(r){for(var o=!1,i=[],l=0,c=null,u=0,d=0,f=0,m=0,y=0;u<r.length;)r[u][0]==a?(i[l++]=u,d=m,f=y,m=0,y=0,c=r[u][1]):(r[u][0]==s?m+=r[u][1].length:y+=r[u][1].length,c&&c.length<=Math.max(d,f)&&c.length<=Math.max(m,y)&&(r.splice(i[l-1],0,new n.Diff(t,c)),r[i[l-1]+1][0]=s,l--,l--,u=l>0?i[l-1]:-1,d=0,f=0,m=0,y=0,c=null,o=!0)),u++;for(o&&this.diff_cleanupMerge(r),this.diff_cleanupSemanticLossless(r),u=1;u<r.length;){if(r[u-1][0]==t&&r[u][0]==s){var w=r[u-1][1],j=r[u][1],I=this.diff_commonOverlap_(w,j),M=this.diff_commonOverlap_(j,w);I>=M?(I>=w.length/2||I>=j.length/2)&&(r.splice(u,0,new n.Diff(a,j.substring(0,I))),r[u-1][1]=w.substring(0,w.length-I),r[u+1][1]=j.substring(I),u++):(M>=w.length/2||M>=j.length/2)&&(r.splice(u,0,new n.Diff(a,w.substring(0,M))),r[u-1][0]=s,r[u-1][1]=j.substring(0,j.length-M),r[u+1][0]=t,r[u+1][1]=w.substring(M),u++),u++}u++}},n.prototype.diff_cleanupSemanticLossless=function(r){function o(M,P){if(!M||!P)return 6;var R=M.charAt(M.length-1),U=P.charAt(0),$=R.match(n.nonAlphaNumericRegex_),X=U.match(n.nonAlphaNumericRegex_),K=$&&R.match(n.whitespaceRegex_),z=X&&U.match(n.whitespaceRegex_),te=K&&R.match(n.linebreakRegex_),Z=z&&U.match(n.linebreakRegex_),Y=te&&M.match(n.blanklineEndRegex_),oe=Z&&P.match(n.blanklineStartRegex_);return Y||oe?5:te||Z?4:$&&!K&&z?3:K||z?2:$||X?1:0}for(var i=1;i<r.length-1;){if(r[i-1][0]==a&&r[i+1][0]==a){var l=r[i-1][1],c=r[i][1],u=r[i+1][1],d=this.diff_commonSuffix(l,c);if(d){var f=c.substring(c.length-d);l=l.substring(0,l.length-d),c=f+c.substring(0,c.length-d),u=f+u}for(var m=l,y=c,w=u,j=o(l,c)+o(c,u);c.charAt(0)===u.charAt(0);){l+=c.charAt(0),c=c.substring(1)+u.charAt(0),u=u.substring(1);var I=o(l,c)+o(c,u);I>=j&&(j=I,m=l,y=c,w=u)}r[i-1][1]!=m&&(m?r[i-1][1]=m:(r.splice(i-1,1),i--),r[i][1]=y,w?r[i+1][1]=w:(r.splice(i+1,1),i--))}i++}},n.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,n.whitespaceRegex_=/\s/,n.linebreakRegex_=/[\r\n]/,n.blanklineEndRegex_=/\n\r?\n$/,n.blanklineStartRegex_=/^\r?\n\r?\n/,n.prototype.diff_cleanupEfficiency=function(r){for(var o=!1,i=[],l=0,c=null,u=0,d=!1,f=!1,m=!1,y=!1;u<r.length;)r[u][0]==a?(r[u][1].length<this.Diff_EditCost&&(m||y)?(i[l++]=u,d=m,f=y,c=r[u][1]):(l=0,c=null),m=y=!1):(r[u][0]==t?y=!0:m=!0,c&&(d&&f&&m&&y||c.length<this.Diff_EditCost/2&&d+f+m+y==3)&&(r.splice(i[l-1],0,new n.Diff(t,c)),r[i[l-1]+1][0]=s,l--,c=null,d&&f?(m=y=!0,l=0):(l--,u=l>0?i[l-1]:-1,m=y=!1),o=!0)),u++;o&&this.diff_cleanupMerge(r)},n.prototype.diff_cleanupMerge=function(r){r.push(new n.Diff(a,""));for(var o=0,i=0,l=0,c="",u="",d;o<r.length;)switch(r[o][0]){case s:l++,u+=r[o][1],o++;break;case t:i++,c+=r[o][1],o++;break;case a:i+l>1?(i!==0&&l!==0&&(d=this.diff_commonPrefix(u,c),d!==0&&(o-i-l>0&&r[o-i-l-1][0]==a?r[o-i-l-1][1]+=u.substring(0,d):(r.splice(0,0,new n.Diff(a,u.substring(0,d))),o++),u=u.substring(d),c=c.substring(d)),d=this.diff_commonSuffix(u,c),d!==0&&(r[o][1]=u.substring(u.length-d)+r[o][1],u=u.substring(0,u.length-d),c=c.substring(0,c.length-d))),o-=i+l,r.splice(o,i+l),c.length&&(r.splice(o,0,new n.Diff(t,c)),o++),u.length&&(r.splice(o,0,new n.Diff(s,u)),o++),o++):o!==0&&r[o-1][0]==a?(r[o-1][1]+=r[o][1],r.splice(o,1)):o++,l=0,i=0,c="",u="";break}r[r.length-1][1]===""&&r.pop();var f=!1;for(o=1;o<r.length-1;)r[o-1][0]==a&&r[o+1][0]==a&&(r[o][1].substring(r[o][1].length-r[o-1][1].length)==r[o-1][1]?(r[o][1]=r[o-1][1]+r[o][1].substring(0,r[o][1].length-r[o-1][1].length),r[o+1][1]=r[o-1][1]+r[o+1][1],r.splice(o-1,1),f=!0):r[o][1].substring(0,r[o+1][1].length)==r[o+1][1]&&(r[o-1][1]+=r[o+1][1],r[o][1]=r[o][1].substring(r[o+1][1].length)+r[o+1][1],r.splice(o+1,1),f=!0)),o++;f&&this.diff_cleanupMerge(r)},n.prototype.diff_xIndex=function(r,o){var i=0,l=0,c=0,u=0,d;for(d=0;d<r.length&&(r[d][0]!==s&&(i+=r[d][1].length),r[d][0]!==t&&(l+=r[d][1].length),!(i>o));d++)c=i,u=l;return r.length!=d&&r[d][0]===t?u:u+(o-c)},n.prototype.diff_prettyHtml=function(r){for(var o=[],i=/&/g,l=/</g,c=/>/g,u=/\n/g,d=0;d<r.length;d++){var f=r[d][0],m=r[d][1],y=m.replace(i,"&amp;").replace(l,"&lt;").replace(c,"&gt;").replace(u,"&para;<br>");switch(f){case s:o[d]='<ins style="background:#e6ffe6;">'+y+"</ins>";break;case t:o[d]='<del style="background:#ffe6e6;">'+y+"</del>";break;case a:o[d]="<span>"+y+"</span>";break}}return o.join("")},n.prototype.diff_text1=function(r){for(var o=[],i=0;i<r.length;i++)r[i][0]!==s&&(o[i]=r[i][1]);return o.join("")},n.prototype.diff_text2=function(r){for(var o=[],i=0;i<r.length;i++)r[i][0]!==t&&(o[i]=r[i][1]);return o.join("")},n.prototype.diff_levenshtein=function(r){for(var o=0,i=0,l=0,c=0;c<r.length;c++){var u=r[c][0],d=r[c][1];switch(u){case s:i+=d.length;break;case t:l+=d.length;break;case a:o+=Math.max(i,l),i=0,l=0;break}}return o+=Math.max(i,l),o},n.prototype.diff_toDelta=function(r){for(var o=[],i=0;i<r.length;i++)switch(r[i][0]){case s:o[i]="+"+encodeURI(r[i][1]);break;case t:o[i]="-"+r[i][1].length;break;case a:o[i]="="+r[i][1].length;break}return o.join("	").replace(/%20/g," ")},n.prototype.diff_fromDelta=function(r,o){for(var i=[],l=0,c=0,u=o.split(/\t/g),d=0;d<u.length;d++){var f=u[d].substring(1);switch(u[d].charAt(0)){case"+":try{i[l++]=new n.Diff(s,decodeURI(f))}catch{throw new Error("Illegal escape in diff_fromDelta: "+f)}break;case"-":case"=":var m=parseInt(f,10);if(isNaN(m)||m<0)throw new Error("Invalid number in diff_fromDelta: "+f);var y=r.substring(c,c+=m);u[d].charAt(0)=="="?i[l++]=new n.Diff(a,y):i[l++]=new n.Diff(t,y);break;default:if(u[d])throw new Error("Invalid diff operation in diff_fromDelta: "+u[d])}}if(c!=r.length)throw new Error("Delta length ("+c+") does not equal source text length ("+r.length+").");return i},n.prototype.match_main=function(r,o,i){if(r==null||o==null||i==null)throw new Error("Null input. (match_main)");return i=Math.max(0,Math.min(i,r.length)),r==o?0:r.length?r.substring(i,i+o.length)==o?i:this.match_bitap_(r,o,i):-1},n.prototype.match_bitap_=function(r,o,i){if(o.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var l=this.match_alphabet_(o),c=this;function u(z,te){var Z=z/o.length,Y=Math.abs(i-te);return c.Match_Distance?Z+Y/c.Match_Distance:Y?1:Z}var d=this.Match_Threshold,f=r.indexOf(o,i);f!=-1&&(d=Math.min(u(0,f),d),f=r.lastIndexOf(o,i+o.length),f!=-1&&(d=Math.min(u(0,f),d)));var m=1<<o.length-1;f=-1;for(var y,w,j=o.length+r.length,I,M=0;M<o.length;M++){for(y=0,w=j;y<w;)u(M,i+w)<=d?y=w:j=w,w=Math.floor((j-y)/2+y);j=w;var P=Math.max(1,i-w+1),R=Math.min(i+w,r.length)+o.length,U=Array(R+2);U[R+1]=(1<<M)-1;for(var $=R;$>=P;$--){var X=l[r.charAt($-1)];if(M===0?U[$]=(U[$+1]<<1|1)&X:U[$]=(U[$+1]<<1|1)&X|((I[$+1]|I[$])<<1|1)|I[$+1],U[$]&m){var K=u(M,$-1);if(K<=d)if(d=K,f=$-1,f>i)P=Math.max(1,2*i-f);else break}}if(u(M+1,i)>d)break;I=U}return f},n.prototype.match_alphabet_=function(r){for(var o={},i=0;i<r.length;i++)o[r.charAt(i)]=0;for(var i=0;i<r.length;i++)o[r.charAt(i)]|=1<<r.length-i-1;return o},n.prototype.patch_addContext_=function(r,o){if(o.length!=0){if(r.start2===null)throw Error("patch not initialized");for(var i=o.substring(r.start2,r.start2+r.length1),l=0;o.indexOf(i)!=o.lastIndexOf(i)&&i.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)l+=this.Patch_Margin,i=o.substring(r.start2-l,r.start2+r.length1+l);l+=this.Patch_Margin;var c=o.substring(r.start2-l,r.start2);c&&r.diffs.unshift(new n.Diff(a,c));var u=o.substring(r.start2+r.length1,r.start2+r.length1+l);u&&r.diffs.push(new n.Diff(a,u)),r.start1-=c.length,r.start2-=c.length,r.length1+=c.length+u.length,r.length2+=c.length+u.length}},n.prototype.patch_make=function(r,o,i){var l,c;if(typeof r=="string"&&typeof o=="string"&&typeof i=="undefined")l=r,c=this.diff_main(l,o,!0),c.length>2&&(this.diff_cleanupSemantic(c),this.diff_cleanupEfficiency(c));else if(r&&typeof r=="object"&&typeof o=="undefined"&&typeof i=="undefined")c=r,l=this.diff_text1(c);else if(typeof r=="string"&&o&&typeof o=="object"&&typeof i=="undefined")l=r,c=o;else if(typeof r=="string"&&typeof o=="string"&&i&&typeof i=="object")l=r,c=i;else throw new Error("Unknown call format to patch_make.");if(c.length===0)return[];for(var u=[],d=new n.patch_obj,f=0,m=0,y=0,w=l,j=l,I=0;I<c.length;I++){var M=c[I][0],P=c[I][1];switch(!f&&M!==a&&(d.start1=m,d.start2=y),M){case s:d.diffs[f++]=c[I],d.length2+=P.length,j=j.substring(0,y)+P+j.substring(y);break;case t:d.length1+=P.length,d.diffs[f++]=c[I],j=j.substring(0,y)+j.substring(y+P.length);break;case a:P.length<=2*this.Patch_Margin&&f&&c.length!=I+1?(d.diffs[f++]=c[I],d.length1+=P.length,d.length2+=P.length):P.length>=2*this.Patch_Margin&&f&&(this.patch_addContext_(d,w),u.push(d),d=new n.patch_obj,f=0,w=j,m=y);break}M!==s&&(m+=P.length),M!==t&&(y+=P.length)}return f&&(this.patch_addContext_(d,w),u.push(d)),u},n.prototype.patch_deepCopy=function(r){for(var o=[],i=0;i<r.length;i++){var l=r[i],c=new n.patch_obj;c.diffs=[];for(var u=0;u<l.diffs.length;u++)c.diffs[u]=new n.Diff(l.diffs[u][0],l.diffs[u][1]);c.start1=l.start1,c.start2=l.start2,c.length1=l.length1,c.length2=l.length2,o[i]=c}return o},n.prototype.patch_apply=function(r,o){if(r.length==0)return[o,[]];r=this.patch_deepCopy(r);var i=this.patch_addPadding(r);o=i+o+i,this.patch_splitMax(r);for(var l=0,c=[],u=0;u<r.length;u++){var d=r[u].start2+l,f=this.diff_text1(r[u].diffs),m,y=-1;if(f.length>this.Match_MaxBits?(m=this.match_main(o,f.substring(0,this.Match_MaxBits),d),m!=-1&&(y=this.match_main(o,f.substring(f.length-this.Match_MaxBits),d+f.length-this.Match_MaxBits),(y==-1||m>=y)&&(m=-1))):m=this.match_main(o,f,d),m==-1)c[u]=!1,l-=r[u].length2-r[u].length1;else{c[u]=!0,l=m-d;var w;if(y==-1?w=o.substring(m,m+f.length):w=o.substring(m,y+this.Match_MaxBits),f==w)o=o.substring(0,m)+this.diff_text2(r[u].diffs)+o.substring(m+f.length);else{var j=this.diff_main(f,w,!1);if(f.length>this.Match_MaxBits&&this.diff_levenshtein(j)/f.length>this.Patch_DeleteThreshold)c[u]=!1;else{this.diff_cleanupSemanticLossless(j);for(var I=0,M,P=0;P<r[u].diffs.length;P++){var R=r[u].diffs[P];R[0]!==a&&(M=this.diff_xIndex(j,I)),R[0]===s?o=o.substring(0,m+M)+R[1]+o.substring(m+M):R[0]===t&&(o=o.substring(0,m+M)+o.substring(m+this.diff_xIndex(j,I+R[1].length))),R[0]!==t&&(I+=R[1].length)}}}}}return o=o.substring(i.length,o.length-i.length),[o,c]},n.prototype.patch_addPadding=function(r){for(var o=this.Patch_Margin,i="",l=1;l<=o;l++)i+=String.fromCharCode(l);for(var l=0;l<r.length;l++)r[l].start1+=o,r[l].start2+=o;var c=r[0],u=c.diffs;if(u.length==0||u[0][0]!=a)u.unshift(new n.Diff(a,i)),c.start1-=o,c.start2-=o,c.length1+=o,c.length2+=o;else if(o>u[0][1].length){var d=o-u[0][1].length;u[0][1]=i.substring(u[0][1].length)+u[0][1],c.start1-=d,c.start2-=d,c.length1+=d,c.length2+=d}if(c=r[r.length-1],u=c.diffs,u.length==0||u[u.length-1][0]!=a)u.push(new n.Diff(a,i)),c.length1+=o,c.length2+=o;else if(o>u[u.length-1][1].length){var d=o-u[u.length-1][1].length;u[u.length-1][1]+=i.substring(0,d),c.length1+=d,c.length2+=d}return i},n.prototype.patch_splitMax=function(r){for(var o=this.Match_MaxBits,i=0;i<r.length;i++)if(!(r[i].length1<=o)){var l=r[i];r.splice(i--,1);for(var c=l.start1,u=l.start2,d="";l.diffs.length!==0;){var f=new n.patch_obj,m=!0;for(f.start1=c-d.length,f.start2=u-d.length,d!==""&&(f.length1=f.length2=d.length,f.diffs.push(new n.Diff(a,d)));l.diffs.length!==0&&f.length1<o-this.Patch_Margin;){var y=l.diffs[0][0],w=l.diffs[0][1];y===s?(f.length2+=w.length,u+=w.length,f.diffs.push(l.diffs.shift()),m=!1):y===t&&f.diffs.length==1&&f.diffs[0][0]==a&&w.length>2*o?(f.length1+=w.length,c+=w.length,m=!1,f.diffs.push(new n.Diff(y,w)),l.diffs.shift()):(w=w.substring(0,o-f.length1-this.Patch_Margin),f.length1+=w.length,c+=w.length,y===a?(f.length2+=w.length,u+=w.length):m=!1,f.diffs.push(new n.Diff(y,w)),w==l.diffs[0][1]?l.diffs.shift():l.diffs[0][1]=l.diffs[0][1].substring(w.length))}d=this.diff_text2(f.diffs),d=d.substring(d.length-this.Patch_Margin);var j=this.diff_text1(l.diffs).substring(0,this.Patch_Margin);j!==""&&(f.length1+=j.length,f.length2+=j.length,f.diffs.length!==0&&f.diffs[f.diffs.length-1][0]===a?f.diffs[f.diffs.length-1][1]+=j:f.diffs.push(new n.Diff(a,j))),m||r.splice(++i,0,f)}}},n.prototype.patch_toText=function(r){for(var o=[],i=0;i<r.length;i++)o[i]=r[i];return o.join("")},n.prototype.patch_fromText=function(r){var o=[];if(!r)return o;for(var i=r.split(`
`),l=0,c=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;l<i.length;){var u=i[l].match(c);if(!u)throw new Error("Invalid patch string: "+i[l]);var d=new n.patch_obj;for(o.push(d),d.start1=parseInt(u[1],10),u[2]===""?(d.start1--,d.length1=1):u[2]=="0"?d.length1=0:(d.start1--,d.length1=parseInt(u[2],10)),d.start2=parseInt(u[3],10),u[4]===""?(d.start2--,d.length2=1):u[4]=="0"?d.length2=0:(d.start2--,d.length2=parseInt(u[4],10)),l++;l<i.length;){var f=i[l].charAt(0);try{var m=decodeURI(i[l].substring(1))}catch{throw new Error("Illegal escape in patch_fromText: "+m)}if(f=="-")d.diffs.push(new n.Diff(t,m));else if(f=="+")d.diffs.push(new n.Diff(s,m));else if(f==" ")d.diffs.push(new n.Diff(a,m));else{if(f=="@")break;if(f!=="")throw new Error('Invalid patch mode "'+f+'" in: '+m)}l++}}return o},n.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},n.patch_obj.prototype.toString=function(){var r,o;this.length1===0?r=this.start1+",0":this.length1==1?r=this.start1+1:r=this.start1+1+","+this.length1,this.length2===0?o=this.start2+",0":this.length2==1?o=this.start2+1:o=this.start2+1+","+this.length2;for(var i=["@@ -"+r+" +"+o+` @@
`],l,c=0;c<this.diffs.length;c++){switch(this.diffs[c][0]){case s:l="+";break;case t:l="-";break;case a:l=" ";break}i[c+1]=l+encodeURI(this.diffs[c][1])+`
`}return i.join("").replace(/%20/g," ")},e.exports=n,e.exports.diff_match_patch=n,e.exports.DIFF_DELETE=t,e.exports.DIFF_INSERT=s,e.exports.DIFF_EQUAL=a})(Ar);var Ir={exports:{}};function Qr(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];typeof t=="object"&&!Object.isFrozen(t)&&Qr(t)}),e}Ir.exports=Qr;Ir.exports.default=Qr;var Ic=Ir.exports;class To{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Rs(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function en(e,...n){const t=Object.create(null);for(const s in e)t[s]=e[s];return n.forEach(function(s){for(const a in s)t[a]=s[a]}),t}const Qc="</span>",Co=e=>!!e.kind,Dc=(e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((s,a)=>`${s}${"_".repeat(a+1)}`)].join(" ")}return`${n}${e}`};class Oc{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Rs(n)}openNode(n){if(!Co(n))return;let t=n.kind;n.sublanguage?t=`language-${t}`:t=Dc(t,{prefix:this.classPrefix}),this.span(t)}closeNode(n){!Co(n)||(this.buffer+=Qc)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}class Dr{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t={kind:n,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(s=>this._walk(n,s)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&(!n.children||(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{Dr._collapse(t)})))}}class Nc extends Dr{constructor(n){super(),this.options=n}addKeyword(n,t){n!==""&&(this.openNode(t),this.addText(n),this.closeNode())}addText(n){n!==""&&this.add(n)}addSublanguage(n,t){const s=n.root;s.kind=t,s.sublanguage=!0,this.add(s)}toHTML(){return new Oc(this,this.options).value()}finalize(){return!0}}function Jn(e){return e?typeof e=="string"?e:e.source:null}function Fs(e){return mn("(?=",e,")")}function _c(e){return mn("(?:",e,")*")}function Mc(e){return mn("(?:",e,")?")}function mn(...e){return e.map(t=>Jn(t)).join("")}function Pc(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function Or(...e){const n=Pc(e);return"("+(n.capture?"":"?:")+e.map(s=>Jn(s)).join("|")+")"}function Ls(e){return new RegExp(e.toString()+"|").exec("").length-1}function Rc(e,n){const t=e&&e.exec(n);return t&&t.index===0}const Fc=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Nr(e,{joinWith:n}){let t=0;return e.map(s=>{t+=1;const a=t;let r=Jn(s),o="";for(;r.length>0;){const i=Fc.exec(r);if(!i){o+=r;break}o+=r.substring(0,i.index),r=r.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?o+="\\"+String(Number(i[1])+a):(o+=i[0],i[0]==="("&&t++)}return o}).map(s=>`(${s})`).join(n)}const Lc=/\b\B/,qs="[a-zA-Z]\\w*",_r="[a-zA-Z_]\\w*",Hs="\\b\\d+(\\.\\d+)?",zs="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Bs="\\b(0b[01]+)",qc="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Hc=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=mn(n,/.*\b/,e.binary,/\b.*/)),en({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,s)=>{t.index!==0&&s.ignoreMatch()}},e)},Zn={begin:"\\\\[\\s\\S]",relevance:0},zc={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Zn]},Bc={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Zn]},Uc={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Pt=function(e,n,t={}){const s=en({scope:"comment",begin:e,end:n,contains:[]},t);s.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const a=Or("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return s.contains.push({begin:mn(/[ ]+/,"(",a,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s},Wc=Pt("//","$"),$c=Pt("/\\*","\\*/"),Xc=Pt("#","$"),Vc={scope:"number",begin:Hs,relevance:0},Gc={scope:"number",begin:zs,relevance:0},Kc={scope:"number",begin:Bs,relevance:0},Jc={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Zn,{begin:/\[/,end:/\]/,relevance:0,contains:[Zn]}]}]},Zc={scope:"title",begin:qs,relevance:0},Yc={scope:"title",begin:_r,relevance:0},eu={begin:"\\.\\s*"+_r,relevance:0},nu=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var ct=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Lc,IDENT_RE:qs,UNDERSCORE_IDENT_RE:_r,NUMBER_RE:Hs,C_NUMBER_RE:zs,BINARY_NUMBER_RE:Bs,RE_STARTERS_RE:qc,SHEBANG:Hc,BACKSLASH_ESCAPE:Zn,APOS_STRING_MODE:zc,QUOTE_STRING_MODE:Bc,PHRASAL_WORDS_MODE:Uc,COMMENT:Pt,C_LINE_COMMENT_MODE:Wc,C_BLOCK_COMMENT_MODE:$c,HASH_COMMENT_MODE:Xc,NUMBER_MODE:Vc,C_NUMBER_MODE:Gc,BINARY_NUMBER_MODE:Kc,REGEXP_MODE:Jc,TITLE_MODE:Zc,UNDERSCORE_TITLE_MODE:Yc,METHOD_GUARD:eu,END_SAME_AS_BEGIN:nu});function tu(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function ru(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function ou(e,n){!n||!e.beginKeywords||(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=tu,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function su(e,n){!Array.isArray(e.illegal)||(e.illegal=Or(...e.illegal))}function iu(e,n){if(!!e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function au(e,n){e.relevance===void 0&&(e.relevance=1)}const lu=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(s=>{delete e[s]}),e.keywords=t.keywords,e.begin=mn(t.beforeMatch,Fs(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},cu=["of","and","for","in","not","or","if","then","parent","list","value"],uu="keyword";function Us(e,n,t=uu){const s=Object.create(null);return typeof e=="string"?a(t,e.split(" ")):Array.isArray(e)?a(t,e):Object.keys(e).forEach(function(r){Object.assign(s,Us(e[r],n,r))}),s;function a(r,o){n&&(o=o.map(i=>i.toLowerCase())),o.forEach(function(i){const l=i.split("|");s[l[0]]=[r,du(l[0],l[1])]})}}function du(e,n){return n?Number(n):pu(e)?0:1}function pu(e){return cu.includes(e.toLowerCase())}const Ao={},fn=e=>{console.error(e)},Io=(e,...n)=>{console.log(`WARN: ${e}`,...n)},bn=(e,n)=>{Ao[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),Ao[`${e}/${n}`]=!0)},jt=new Error;function Ws(e,n,{key:t}){let s=0;const a=e[t],r={},o={};for(let i=1;i<=n.length;i++)o[i+s]=a[i],r[i+s]=!0,s+=Ls(n[i-1]);e[t]=o,e[t]._emit=r,e[t]._multi=!0}function fu(e){if(!!Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw fn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),jt;if(typeof e.beginScope!="object"||e.beginScope===null)throw fn("beginScope must be object"),jt;Ws(e,e.begin,{key:"beginScope"}),e.begin=Nr(e.begin,{joinWith:""})}}function hu(e){if(!!Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw fn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),jt;if(typeof e.endScope!="object"||e.endScope===null)throw fn("endScope must be object"),jt;Ws(e,e.end,{key:"endScope"}),e.end=Nr(e.end,{joinWith:""})}}function mu(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function gu(e){mu(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),fu(e),hu(e)}function yu(e){function n(o,i){return new RegExp(Jn(o),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,i]),this.matchAt+=Ls(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(l=>l[1]);this.matcherRe=n(Nr(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(i);if(!l)return null;const c=l.findIndex((d,f)=>f>0&&d!==void 0),u=this.matchIndexes[c];return l.splice(0,c),Object.assign(l,u)}}class s{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const l=new t;return this.rules.slice(i).forEach(([c,u])=>l.addRule(c,u)),l.compile(),this.multiRegexes[i]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,l){this.rules.push([i,l]),l.type==="begin"&&this.count++}exec(i){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let c=l.exec(i);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(i)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function a(o){const i=new s;return o.contains.forEach(l=>i.addRule(l.begin,{rule:l,type:"begin"})),o.terminatorEnd&&i.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&i.addRule(o.illegal,{type:"illegal"}),i}function r(o,i){const l=o;if(o.isCompiled)return l;[ru,iu,gu,lu].forEach(u=>u(o,i)),e.compilerExtensions.forEach(u=>u(o,i)),o.__beforeBegin=null,[ou,su,au].forEach(u=>u(o,i)),o.isCompiled=!0;let c=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),c=o.keywords.$pattern,delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=Us(o.keywords,e.case_insensitive)),l.keywordPatternRe=n(c,!0),i&&(o.begin||(o.begin=/\B|\b/),l.beginRe=n(l.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(l.endRe=n(l.end)),l.terminatorEnd=Jn(l.end)||"",o.endsWithParent&&i.terminatorEnd&&(l.terminatorEnd+=(o.end?"|":"")+i.terminatorEnd)),o.illegal&&(l.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(u){return bu(u==="self"?o:u)})),o.contains.forEach(function(u){r(u,l)}),o.starts&&r(o.starts,i),l.matcher=a(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=en(e.classNameAliases||{}),r(e)}function $s(e){return e?e.endsWithParent||$s(e.starts):!1}function bu(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return en(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:$s(e)?en(e,{starts:e.starts?en(e.starts):null}):Object.isFrozen(e)?en(e):e}var vu="11.5.1";class wu extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const Bt=Rs,Qo=en,Do=Symbol("nomatch"),xu=7,ju=function(e){const n=Object.create(null),t=Object.create(null),s=[];let a=!0;const r="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Nc};function l(S){return i.noHighlightRe.test(S)}function c(S){let C=S.className+" ";C+=S.parentNode?S.parentNode.className:"";const O=i.languageDetectRe.exec(C);if(O){const q=z(O[1]);return q||(Io(r.replace("{}",O[1])),Io("Falling back to no-highlight mode for this block.",S)),q?O[1]:"no-highlight"}return C.split(/\s+/).find(q=>l(q)||z(q))}function u(S,C,O){let q="",ee="";typeof C=="object"?(q=S,O=C.ignoreIllegals,ee=C.language):(bn("10.7.0","highlight(lang, code, ...args) has been deprecated."),bn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ee=S,q=C),O===void 0&&(O=!0);const se={code:q,language:ee};ie("before:highlight",se);const pe=se.result?se.result:d(se.language,se.code,O);return pe.code=se.code,ie("after:highlight",pe),pe}function d(S,C,O,q){const ee=Object.create(null);function se(v,T){return v.keywords[T]}function pe(){if(!g.keywords){A.addText(x);return}let v=0;g.keywordPatternRe.lastIndex=0;let T=g.keywordPatternRe.exec(x),N="";for(;T;){N+=x.substring(v,T.index);const L=h.case_insensitive?T[0].toLowerCase():T[0],B=se(g,L);if(B){const[V,je]=B;if(A.addText(N),N="",ee[L]=(ee[L]||0)+1,ee[L]<=xu&&(D+=je),V.startsWith("_"))N+=T[0];else{const Ge=h.classNameAliases[V]||V;A.addKeyword(T[0],Ge)}}else N+=T[0];v=g.keywordPatternRe.lastIndex,T=g.keywordPatternRe.exec(x)}N+=x.substr(v),A.addText(N)}function xe(){if(x==="")return;let v=null;if(typeof g.subLanguage=="string"){if(!n[g.subLanguage]){A.addText(x);return}v=d(g.subLanguage,x,!0,Q[g.subLanguage]),Q[g.subLanguage]=v._top}else v=m(x,g.subLanguage.length?g.subLanguage:null);g.relevance>0&&(D+=v.relevance),A.addSublanguage(v._emitter,v.language)}function me(){g.subLanguage!=null?xe():pe(),x=""}function _e(v,T){let N=1;const L=T.length-1;for(;N<=L;){if(!v._emit[N]){N++;continue}const B=h.classNameAliases[v[N]]||v[N],V=T[N];B?A.addKeyword(V,B):(x=V,pe(),x=""),N++}}function nt(v,T){return v.scope&&typeof v.scope=="string"&&A.openNode(h.classNameAliases[v.scope]||v.scope),v.beginScope&&(v.beginScope._wrap?(A.addKeyword(x,h.classNameAliases[v.beginScope._wrap]||v.beginScope._wrap),x=""):v.beginScope._multi&&(_e(v.beginScope,T),x="")),g=Object.create(v,{parent:{value:g}}),g}function Ce(v,T,N){let L=Rc(v.endRe,N);if(L){if(v["on:end"]){const B=new To(v);v["on:end"](T,B),B.isMatchIgnored&&(L=!1)}if(L){for(;v.endsParent&&v.parent;)v=v.parent;return v}}if(v.endsWithParent)return Ce(v.parent,T,N)}function gn(v){return g.matcher.regexIndex===0?(x+=v[0],1):(_=!0,0)}function tt(v){const T=v[0],N=v.rule,L=new To(N),B=[N.__beforeBegin,N["on:begin"]];for(const V of B)if(!!V&&(V(v,L),L.isMatchIgnored))return gn(T);return N.skip?x+=T:(N.excludeBegin&&(x+=T),me(),!N.returnBegin&&!N.excludeBegin&&(x=T)),nt(N,v),N.returnBegin?0:T.length}function Xe(v){const T=v[0],N=C.substr(v.index),L=Ce(g,v,N);if(!L)return Do;const B=g;g.endScope&&g.endScope._wrap?(me(),A.addKeyword(T,g.endScope._wrap)):g.endScope&&g.endScope._multi?(me(),_e(g.endScope,v)):B.skip?x+=T:(B.returnEnd||B.excludeEnd||(x+=T),me(),B.excludeEnd&&(x=T));do g.scope&&A.closeNode(),!g.skip&&!g.subLanguage&&(D+=g.relevance),g=g.parent;while(g!==L.parent);return L.starts&&nt(L.starts,v),B.returnEnd?0:T.length}function On(){const v=[];for(let T=g;T!==h;T=T.parent)T.scope&&v.unshift(T.scope);v.forEach(T=>A.openNode(T))}let Ve={};function p(v,T){const N=T&&T[0];if(x+=v,N==null)return me(),0;if(Ve.type==="begin"&&T.type==="end"&&Ve.index===T.index&&N===""){if(x+=C.slice(T.index,T.index+1),!a){const L=new Error(`0 width match regex (${S})`);throw L.languageName=S,L.badRule=Ve.rule,L}return 1}if(Ve=T,T.type==="begin")return tt(T);if(T.type==="illegal"&&!O){const L=new Error('Illegal lexeme "'+N+'" for mode "'+(g.scope||"<unnamed>")+'"');throw L.mode=g,L}else if(T.type==="end"){const L=Xe(T);if(L!==Do)return L}if(T.type==="illegal"&&N==="")return 1;if(F>1e5&&F>T.index*3)throw new Error("potential infinite loop, way more iterations than matches");return x+=N,N.length}const h=z(S);if(!h)throw fn(r.replace("{}",S)),new Error('Unknown language: "'+S+'"');const b=yu(h);let k="",g=q||b;const Q={},A=new i.__emitter(i);On();let x="",D=0,E=0,F=0,_=!1;try{for(g.matcher.considerAll();;){F++,_?_=!1:g.matcher.considerAll(),g.matcher.lastIndex=E;const v=g.matcher.exec(C);if(!v)break;const T=C.substring(E,v.index),N=p(T,v);E=v.index+N}return p(C.substr(E)),A.closeAllNodes(),A.finalize(),k=A.toHTML(),{language:S,value:k,relevance:D,illegal:!1,_emitter:A,_top:g}}catch(v){if(v.message&&v.message.includes("Illegal"))return{language:S,value:Bt(C),illegal:!0,relevance:0,_illegalBy:{message:v.message,index:E,context:C.slice(E-100,E+100),mode:v.mode,resultSoFar:k},_emitter:A};if(a)return{language:S,value:Bt(C),illegal:!1,relevance:0,errorRaised:v,_emitter:A,_top:g};throw v}}function f(S){const C={value:Bt(S),illegal:!1,relevance:0,_top:o,_emitter:new i.__emitter(i)};return C._emitter.addText(S),C}function m(S,C){C=C||i.languages||Object.keys(n);const O=f(S),q=C.filter(z).filter(Z).map(me=>d(me,S,!1));q.unshift(O);const ee=q.sort((me,_e)=>{if(me.relevance!==_e.relevance)return _e.relevance-me.relevance;if(me.language&&_e.language){if(z(me.language).supersetOf===_e.language)return 1;if(z(_e.language).supersetOf===me.language)return-1}return 0}),[se,pe]=ee,xe=se;return xe.secondBest=pe,xe}function y(S,C,O){const q=C&&t[C]||O;S.classList.add("hljs"),S.classList.add(`language-${q}`)}function w(S){let C=null;const O=c(S);if(l(O))return;if(ie("before:highlightElement",{el:S,language:O}),S.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(S)),i.throwUnescapedHTML))throw new wu("One of your code blocks includes unescaped HTML.",S.innerHTML);C=S;const q=C.textContent,ee=O?u(q,{language:O,ignoreIllegals:!0}):m(q);S.innerHTML=ee.value,y(S,O,ee.language),S.result={language:ee.language,re:ee.relevance,relevance:ee.relevance},ee.secondBest&&(S.secondBest={language:ee.secondBest.language,relevance:ee.secondBest.relevance}),ie("after:highlightElement",{el:S,result:ee,text:q})}function j(S){i=Qo(i,S)}const I=()=>{R(),bn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function M(){R(),bn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let P=!1;function R(){if(document.readyState==="loading"){P=!0;return}document.querySelectorAll(i.cssSelector).forEach(w)}function U(){P&&R()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",U,!1);function $(S,C){let O=null;try{O=C(e)}catch(q){if(fn("Language definition for '{}' could not be registered.".replace("{}",S)),a)fn(q);else throw q;O=o}O.name||(O.name=S),n[S]=O,O.rawDefinition=C.bind(null,e),O.aliases&&te(O.aliases,{languageName:S})}function X(S){delete n[S];for(const C of Object.keys(t))t[C]===S&&delete t[C]}function K(){return Object.keys(n)}function z(S){return S=(S||"").toLowerCase(),n[S]||n[t[S]]}function te(S,{languageName:C}){typeof S=="string"&&(S=[S]),S.forEach(O=>{t[O.toLowerCase()]=C})}function Z(S){const C=z(S);return C&&!C.disableAutodetect}function Y(S){S["before:highlightBlock"]&&!S["before:highlightElement"]&&(S["before:highlightElement"]=C=>{S["before:highlightBlock"](Object.assign({block:C.el},C))}),S["after:highlightBlock"]&&!S["after:highlightElement"]&&(S["after:highlightElement"]=C=>{S["after:highlightBlock"](Object.assign({block:C.el},C))})}function oe(S){Y(S),s.push(S)}function ie(S,C){const O=S;s.forEach(function(q){q[O]&&q[O](C)})}function Ie(S){return bn("10.7.0","highlightBlock will be removed entirely in v12.0"),bn("10.7.0","Please use highlightElement now."),w(S)}Object.assign(e,{highlight:u,highlightAuto:m,highlightAll:R,highlightElement:w,highlightBlock:Ie,configure:j,initHighlighting:I,initHighlightingOnLoad:M,registerLanguage:$,unregisterLanguage:X,listLanguages:K,getLanguage:z,registerAliases:te,autoDetection:Z,inherit:Qo,addPlugin:oe}),e.debugMode=function(){a=!1},e.safeMode=function(){a=!0},e.versionString=vu,e.regex={concat:mn,lookahead:Fs,either:Or,optional:Mc,anyNumberOfTimes:_c};for(const S in ct)typeof ct[S]=="object"&&Ic(ct[S]);return Object.assign(e,ct),e};var Yn=ju({}),ku=Yn;Yn.HighlightJS=Yn;Yn.default=Yn;var Le=ku;const Eu=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),Su=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Tu=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],Cu=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],Au=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],Iu=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function Qu(e){const n=e.regex,t=Eu(e),s={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},a="and or not only",r=/@-?\w[\w]*(-\w+)*/,o="[a-zA-Z-][a-zA-Z0-9_-]*",i=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,s,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+o,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Cu.join("|")+")"},{begin:":(:)?("+Au.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Iu.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...i,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:n.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:r},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:a,attribute:Tu.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...i,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Su.join("|")+")\\b"}]}}function Du(e){const n=e.regex,t=n.concat(/[A-Z_]/,n.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),s=/[A-Za-z0-9._:-]+/,a={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=e.inherit(r,{begin:/\(/,end:/\)/}),i=e.inherit(e.APOS_STRING_MODE,{className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:s,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[a]},{begin:/'/,end:/'/,contains:[a]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,l,i,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,o,l,i]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},a,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function Ou(e){const n=e.regex,t={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},s={begin:"^[-\\*]{3,}",end:"$"},a={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},r={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},o={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},i=/[A-Za-z][A-Za-z0-9+.-]*/,l={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:n.concat(/\[.+?\]\(/,i,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},c={className:"strong",contains:[],variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},u={className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,relevance:0}]},d=e.inherit(c,{contains:[]}),f=e.inherit(u,{contains:[]});c.contains.push(f),u.contains.push(d);let m=[t,l];return[c,u,d,f].forEach(j=>{j.contains=j.contains.concat(m)}),m=m.concat(c,u),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:m},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:m}]}]},t,r,c,u,{className:"quote",begin:"^>\\s+",contains:m,end:"$"},a,s,l,o]}}const Oo="[A-Za-z$_][0-9A-Za-z$_]*",Nu=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],_u=["true","false","null","undefined","NaN","Infinity"],Xs=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Vs=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Gs=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Mu=["arguments","this","super","console","window","document","localStorage","module","global"],Pu=[].concat(Gs,Xs,Vs);function Ru(e){const n=e.regex,t=(C,{after:O})=>{const q="</"+C[0].slice(1);return C.input.indexOf(q,O)!==-1},s=Oo,a={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(C,O)=>{const q=C[0].length+C.index,ee=C.input[q];if(ee==="<"||ee===","){O.ignoreMatch();return}ee===">"&&(t(C,{after:q})||O.ignoreMatch());let se;if((se=C.input.substr(q).match(/^\s+extends\s+/))&&se.index===0){O.ignoreMatch();return}}},i={$pattern:Oo,keyword:Nu,literal:_u,built_in:Pu,"variable.language":Mu},l="[0-9](_?[0-9])*",c=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},f={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},m={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"xml"}},y={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"css"}},w={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},j=e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),I={className:"comment",variants:[j,e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},M=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,y,w,d];f.contains=M.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(M)});const P=[].concat(I,f.contains),R=P.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(P)}]),U={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R},$={variants:[{match:[/class/,/\s+/,s,/\s+/,/extends/,/\s+/,n.concat(s,"(",n.concat(/\./,s),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,s],scope:{1:"keyword",3:"title.class"}}]},X={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Xs,...Vs]}},K={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},z={variants:[{match:[/function/,/\s+/,s,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[U],illegal:/%/},te={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Z(C){return n.concat("(?!",C.join("|"),")")}const Y={match:n.concat(/\b/,Z([...Gs,"super"]),s,n.lookahead(/\(/)),className:"title.function",relevance:0},oe={begin:n.concat(/\./,n.lookahead(n.concat(s,/(?![0-9A-Za-z$_(])/))),end:s,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ie={match:[/get|set/,/\s+/,s,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},U]},Ie="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",S={match:[/const|var|let/,/\s+/,s,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(Ie)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[U]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:X},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),K,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,y,w,I,d,X,{className:"attr",begin:s+n.lookahead(":"),relevance:0},S,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[I,e.REGEXP_MODE,{className:"function",begin:Ie,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:a.begin,end:a.end},{match:r},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},z,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[U,e.inherit(e.TITLE_MODE,{begin:s,className:"title.function"})]},{match:/\.\.\./,relevance:0},oe,{match:"\\$"+s,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[U]},Y,te,$,ie,{match:/\$[(.]/}]}}function Fu(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},s={beginKeywords:["true","false","null"].join(" ")};return{name:"JSON",contains:[n,t,e.QUOTE_STRING_MODE,s,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Lu(e){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const kt="[A-Za-z$_][0-9A-Za-z$_]*",Ks=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Js=["true","false","null","undefined","NaN","Infinity"],Zs=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Ys=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],ei=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ni=["arguments","this","super","console","window","document","localStorage","module","global"],ti=[].concat(ei,Zs,Ys);function qu(e){const n=e.regex,t=(C,{after:O})=>{const q="</"+C[0].slice(1);return C.input.indexOf(q,O)!==-1},s=kt,a={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(C,O)=>{const q=C[0].length+C.index,ee=C.input[q];if(ee==="<"||ee===","){O.ignoreMatch();return}ee===">"&&(t(C,{after:q})||O.ignoreMatch());let se;if((se=C.input.substr(q).match(/^\s+extends\s+/))&&se.index===0){O.ignoreMatch();return}}},i={$pattern:kt,keyword:Ks,literal:Js,built_in:ti,"variable.language":ni},l="[0-9](_?[0-9])*",c=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},f={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},m={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"xml"}},y={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"css"}},w={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},j=e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),I={className:"comment",variants:[j,e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},M=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,y,w,d];f.contains=M.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(M)});const P=[].concat(I,f.contains),R=P.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(P)}]),U={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R},$={variants:[{match:[/class/,/\s+/,s,/\s+/,/extends/,/\s+/,n.concat(s,"(",n.concat(/\./,s),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,s],scope:{1:"keyword",3:"title.class"}}]},X={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Zs,...Ys]}},K={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},z={variants:[{match:[/function/,/\s+/,s,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[U],illegal:/%/},te={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Z(C){return n.concat("(?!",C.join("|"),")")}const Y={match:n.concat(/\b/,Z([...ei,"super"]),s,n.lookahead(/\(/)),className:"title.function",relevance:0},oe={begin:n.concat(/\./,n.lookahead(n.concat(s,/(?![0-9A-Za-z$_(])/))),end:s,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ie={match:[/get|set/,/\s+/,s,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},U]},Ie="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",S={match:[/const|var|let/,/\s+/,s,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(Ie)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[U]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:X},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),K,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,y,w,I,d,X,{className:"attr",begin:s+n.lookahead(":"),relevance:0},S,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[I,e.REGEXP_MODE,{className:"function",begin:Ie,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:a.begin,end:a.end},{match:r},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},z,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[U,e.inherit(e.TITLE_MODE,{begin:s,className:"title.function"})]},{match:/\.\.\./,relevance:0},oe,{match:"\\$"+s,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[U]},Y,te,$,ie,{match:/\$[(.]/}]}}function Hu(e){const n=qu(e),t=kt,s=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],a={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},r={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:s},contains:[n.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},i=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],l={$pattern:kt,keyword:Ks.concat(i),literal:Js,built_in:ti.concat(s),"variable.language":ni},c={className:"meta",begin:"@"+t},u=(f,m,y)=>{const w=f.contains.findIndex(j=>j.label===m);if(w===-1)throw new Error("can not find mode to replace");f.contains.splice(w,1,y)};Object.assign(n.keywords,l),n.exports.PARAMS_CONTAINS.push(c),n.contains=n.contains.concat([c,a,r]),u(n,"shebang",e.SHEBANG()),u(n,"use_strict",o);const d=n.contains.find(f=>f.label==="func.def");return d.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx"]}),n}Le.registerLanguage("css",Qu);Le.registerLanguage("xml",Du);Le.registerLanguage("markdown",Ou);Le.registerLanguage("javascript",Ru);Le.registerLanguage("json",Fu);Le.registerLanguage("plaintext",Lu);Le.registerLanguage("typescript",Hu);const qe="<vue-diff-modified>",He="</vue-diff-modified>";var ir=(e=>(e[e.removed=-1]="removed",e[e.equal=0]="equal",e[e.added=1]="added",e[e.disabled=2]="disabled",e))(ir||{});const ye=e=>ir[e]?ir[e]:"disabled",zu=e=>{const n=[],t={prev:0,current:0};return e.map(s=>{const a=s[0][1].replace(/\n$/,"").split(`
`),r=s[1][1].replace(/\n$/,"").split(`
`),o=Math.max(a.length,r.length);for(let i=0;i<o;i++){const l=ye(s[0][0])!=="disabled"&&typeof a[i]!="undefined",c=ye(s[1][0])!=="disabled"&&typeof r[i]!="undefined";l&&(t.prev=t.prev+1),c&&(t.current=t.current+1);const u=Boolean(ye(s[0][0]).match(/added|removed/)&&ye(s[1][0]).match(/added|removed/));n.push([{type:l?ye(s[0][0]):"disabled",lineNum:l?t.prev:void 0,value:l?a[i]:void 0,chkWords:u},{type:c?ye(s[1][0]):"disabled",lineNum:c?t.current:void 0,value:c?r[i]:void 0,chkWords:u}])}}),n},Bu=e=>{const n=[];let t=0;return e.map(s=>{const a=s[0][1].replace(/\n$/,"").split(`
`),r=s[1][1].replace(/\n$/,"").split(`
`);a.map(o=>{ye(s[0][0])==="removed"&&n.push([{type:ye(s[0][0]),lineNum:void 0,value:o}])}),r.map(o=>{ye(s[1][0])!=="disabled"&&(t=t+1,n.push([{type:ye(s[1][0]),lineNum:t,value:o}]))})}),n},Uu=(e,n,t)=>{function s(r,o){const i=new Ar.exports.diff_match_patch,l=i.diff_linesToChars_(r,o),c=l.chars1,u=l.chars2,d=l.lineArray,f=i.diff_main(c,u,!1);return i.diff_charsToLines_(f,d),f}const a=s(n,t).reduce((r,o)=>{const i=ye(o[0]);if(i==="equal"&&r.push([o]),i==="removed"&&r.push([o]),i==="added"){const l=r.length&&r[r.length-1][0]?r[r.length-1][0]:null;l&&ye(l[0])==="removed"?r[r.length-1].push(o):r.push([o])}return r},[]);return a.map(r=>{if(r.length>1)return;const o=ye(r[0][0]);o==="added"?r.unshift([2,""]):o==="removed"?r.push([2,""]):o==="equal"&&r.push([...r[0]])}),e==="split"?zu(a):e==="unified"?Bu(a):[]},Wu=(e,n)=>{const t=new Ar.exports.diff_match_patch,s=t.diff_main(e,n);return t.diff_cleanupSemantic(s),s.filter(a=>ye(a[0])!=="removed").map(a=>ye(a[0])==="added"?`${qe}${a[1]}${He}`:a[1]).join("")},$u=({highlightCode:e,language:n,code:t})=>{if(!t.match(new RegExp(`(${qe}|${He})`,"g"))){e.value=Le.highlight(t,{language:n}).value;return}let a=t;const r=t.replace(new RegExp(`(${qe}|${He})`,"g"),"");let o=document.createElement("div");o.innerHTML=Le.highlight(r,{language:n}).value;let i=!1;const l=d=>{d.childNodes.forEach(f=>{if(f.nodeType===1&&l(f),f.nodeType===3){if(!f.textContent)return;let m=f.textContent,y="";for(i&&(y=y+qe);m.length;){if(a.startsWith(qe)){a=a.slice(qe.length),y=y+qe,i=!0;continue}if(a.startsWith(He)){a=a.slice(He.length),y=y+He,i=!1;continue}const w=a.match(new RegExp(`(${qe}|${He})`)),j=w&&w.index?w.index:a.length,I=Math.min(j,m.length);y=y+a.substring(0,I),a=a.slice(I),m=m.slice(I)}i&&(y=y+He),f.textContent=y}})};l(o);const c=qe.replace("<","&lt;").replace(">","&gt;"),u=He.replace("<","&lt;").replace(">","&gt;");e.value=o.innerHTML.replace(new RegExp(c,"g"),'<span class="modified">').replace(new RegExp(u,"g"),"</span>"),o=null},Xu=(e,n,t)=>{const s=we([]),a=we([]),r=Tn(()=>a.value.filter(i=>e.folding?!i.foldable&&i.visible:i.visible));return Ps([()=>e.mode,()=>e.prev,()=>e.current,()=>e.folding],()=>{const i=Uu(e.mode,e.prev,e.current);s.value=i,a.value.splice(s.value.length),s.value.map((l,c)=>{var m;const u=a.value[c],d=e.folding&&l[0].type==="equal"&&((m=s.value[c-1])==null?void 0:m[0].type)==="equal",f={index:c,foldable:d,visible:!0};t.value?a.value[c]=qr(rt({},f),{visible:(u==null?void 0:u.visible)||!1,top:(u==null?void 0:u.top)||void 0,height:(u==null?void 0:u.height)||t.value.lineMinHeight}):a.value[c]=rt({},f)})},{debounce:e.inputDelay,immediate:!0}),{meta:a,render:s,list:r}},Vu=(e,n,t,s)=>{const a=Tn(()=>t.value?s.value.reduce((i,l)=>(l.top=i,l.foldable?i:i+l.height),0)+"px":void 0),r=()=>{if(!n.value||!t.value)return;const o=n.value.scrollTop,i=t.value.height,l=o-i*1.5,c=o+i+i*1.5;s.value.reduce((u,d)=>(u>=l&&u<=c?d.visible=!0:d.visible=!1,d.top=u,d.foldable?u:u+d.height),0)};return Ps([()=>e.mode,()=>e.prev,()=>e.current,()=>e.folding],()=>gt(r),{debounce:e.inputDelay,immediate:!0}),kr(()=>{var o;!t.value||(o=n.value)==null||o.addEventListener("scroll",Rn(r,t.value.delay))}),fs(()=>{var o;!t.value||(o=n.value)==null||o.removeEventListener("scroll",Rn(r,t.value.delay))}),Ue(t,(o,i)=>{var l,c;!i&&o&&((l=n.value)==null||l.addEventListener("scroll",Rn(r,o.delay))),i&&!o&&((c=n.value)==null||c.removeEventListener("scroll",Rn(r,i.delay)))}),{minHeight:a}},Gu=Dt({props:{language:{type:String,required:!0},code:{type:String,required:!0},scrollOptions:{type:[Boolean,Object],default:!1}},emits:["rendered"],setup(e,{emit:n}){const t=we("");return kr(()=>{Ue([()=>e.language,()=>e.code],()=>{$u({highlightCode:t,language:e.language,code:e.code}),gt(()=>n("rendered"))},{immediate:!0}),Ue([()=>e.scrollOptions],()=>{gt(()=>n("rendered"))},{deep:!0})}),{highlightCode:t}}}),Ku=["innerHTML"];function Ju(e,n,t,s,a,r){return le(),ue("pre",null,[G("code",{class:"hljs",innerHTML:e.highlightCode},null,8,Ku)])}var Zu=Mt(Gu,[["render",Ju]]);const Yu=Dt({components:{Code:Zu},props:{mode:{type:String,required:!0},folding:{type:Boolean,default:!1},language:{type:String,required:!0},meta:{type:Object,required:!0},render:{type:Object,required:!0},scrollOptions:{type:[Boolean,Object],default:!1}},setup(e,{emit:n}){const t=we(null),s=Tn(()=>{if(!!e.scrollOptions)return{position:"absolute",left:0,top:0,transform:`translate3d(0, ${e.meta.top}px, 0)`,minHeight:e.scrollOptions.lineMinHeight+"px"}}),a=Tn(()=>e.folding&&e.render[0].type==="equal"),r=(i,l,c)=>{if(!i.value)return`
`;if(typeof l=="undefined"||typeof c=="undefined"||!i.chkWords)return i.value;const u=l[c===0?1:0];return u.value?Wu(u.value,i.value):i.value},o=()=>{!t.value||e.meta.height===t.value.offsetHeight||n("setLineHeight",e.meta.index,t.value.offsetHeight)};return e.scrollOptions&&Ac(t,Rn(()=>{!t.value||e.meta.height===t.value.offsetHeight||n("setLineHeight",e.meta.index,t.value.offsetHeight)},e.scrollOptions.delay)),{line:t,isFoldLine:a,rendered:o,rowStyle:s,setCode:r}}}),ed=G("div",{class:"lineNum vue-diff-cell-fold"},null,-1),nd=G("div",{class:"code vue-diff-cell-fold"},null,-1),td=G("div",{class:"lineNum vue-diff-cell-fold"},null,-1),rd=G("div",{class:"code vue-diff-cell-fold"},null,-1);function od(e,n,t,s,a,r){const o=Sr("Code");return le(),ue("div",{ref:"line",class:ze(["vue-diff-row",`vue-diff-row-${e.mode}`]),style:En(e.rowStyle)},[e.mode==="split"?(le(!0),ue(ae,{key:0},zn(e.render,(i,l)=>(le(),ue(ae,{key:l},[e.isFoldLine?(le(),ue(ae,{key:0},[ed,nd],64)):(le(),ue(ae,{key:1},[G("div",{class:ze(["lineNum",`vue-diff-cell-${i.type}`])},Fn(i.lineNum),3),G("div",{class:ze(["code",`vue-diff-cell-${i.type}`])},[Ae(o,{language:e.language,code:e.setCode(i,e.render,l),scrollOptions:e.scrollOptions,onRendered:e.rendered},null,8,["language","code","scrollOptions","onRendered"])],2)],64))],64))),128)):so("",!0),e.mode==="unified"?(le(),ue(ae,{key:1},[e.isFoldLine?(le(),ue(ae,{key:0},[td,rd],64)):(le(),ue(ae,{key:1},[G("div",{class:ze(["lineNum",`vue-diff-cell-${e.render[0].type}`])},Fn(e.render[0].lineNum),3),G("div",{class:ze(["code",`vue-diff-cell-${e.render[0].type}`])},[Ae(o,{language:e.language,code:e.setCode(e.render[0]),scrollOptions:e.scrollOptions,onRendered:e.rendered},null,8,["language","code","scrollOptions","onRendered"])],2)],64))],64)):so("",!0)],6)}var sd=Mt(Yu,[["render",od]]);const id=Dt({components:{Line:sd},props:{mode:{type:String,default:"split"},theme:{type:String,default:"dark"},language:{type:String,default:"plaintext"},prev:{type:String,default:""},current:{type:String,default:""},folding:{type:Boolean,default:!1},inputDelay:{type:Number,default:0},virtualScroll:{type:[Boolean,Object],default:!1}},setup(e){const n=we(null),t=Tn(()=>e.virtualScroll?rt({height:500,lineMinHeight:24,delay:100},typeof e.virtualScroll=="object"?ne(e.virtualScroll):{}):!1),{meta:s,render:a,list:r}=Xu(e,n,t),{minHeight:o}=Vu(e,n,t,s);return{list:r,meta:s,minHeight:o,render:a,scrollOptions:t,setLineHeight:(l,c)=>{s.value[l]&&s.value[l].height!==c&&(s.value[l].height=c)},viewer:n}}});function ad(e,n,t,s,a,r){const o=Sr("Line");return le(),ue("div",{class:ze(["vue-diff-wrapper",`vue-diff-mode-${e.mode} vue-diff-theme-${e.theme}`])},[G("div",{ref:"viewer",class:"vue-diff-viewer",style:En({height:e.scrollOptions?e.scrollOptions.height+"px":void 0})},[G("div",{class:"vue-diff-viewer-inner",style:En({minHeight:e.minHeight})},[(le(!0),ue(ae,null,zn(e.list,(i,l)=>(le(),Ts(o,{key:l,mode:e.mode,folding:e.folding,language:e.language,meta:e.meta[i.index],render:e.render[i.index],scrollOptions:e.scrollOptions,onSetLineHeight:e.setLineHeight},null,8,["mode","folding","language","meta","render","scrollOptions","onSetLineHeight"]))),128))],4)],4)],2)}var ld=Mt(id,[["render",ad]]);var ri={install:(e,n={})=>{const{componentName:t="Diff"}=n;e.component(t,ld)},hljs:Le};function cd(e){const n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",s={className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ 	]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ 	]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ 	]|$)"}]},a={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},r={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,a]},o=e.inherit(r,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),i="[0-9]{4}(-[0-9][0-9]){0,2}",l="([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",c="(\\.[0-9]*)?",u="([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",d={className:"number",begin:"\\b"+i+l+c+u+"\\b"},f={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},m={begin:/\{/,end:/\}/,contains:[f],illegal:"\\n",relevance:0},y={begin:"\\[",end:"\\]",contains:[f],illegal:"\\n",relevance:0},w=[s,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},d,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},m,y,r],j=[...w];return j.pop(),j.push(o),f.contains=j,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:w}}ri.hljs.registerLanguage("yaml",cd);const oi=_l(lc);oi.use(ri);oi.mount("#app");
