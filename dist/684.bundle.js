(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[684],{314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},417:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},354:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},879:e=>{!function(t,n){var r=function(e,t,n){"use strict";var r,a;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in a=e.lazySizesConfig||e.lazysizesConfig||{},n)t in a||(a[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var o,i,s,c,l,u,d,f,p,h,v,m,g,y,z,b,C,E,w,A,B,D,I,L,M,_,x,S,N,k,W,P,T,j,O,R,F,$,V,q,H,K,U,J,Q=t.documentElement,G=e.HTMLPictureElement,X="addEventListener",Y="getAttribute",Z=e[X].bind(e),ee=e.setTimeout,te=e.requestAnimationFrame||ee,ne=e.requestIdleCallback,re=/^picture$/i,ae=["load","error","lazyincluded","_lazyloaded"],oe={},ie=Array.prototype.forEach,se=function(e,t){return oe[t]||(oe[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),oe[t].test(e[Y]("class")||"")&&oe[t]},ce=function(e,t){se(e,t)||e.setAttribute("class",(e[Y]("class")||"").trim()+" "+t)},le=function(e,t){var n;(n=se(e,t))&&e.setAttribute("class",(e[Y]("class")||"").replace(n," "))},ue=function(e,t,n){var r=n?X:"removeEventListener";n&&ue(e,t),ae.forEach((function(n){e[r](n,t)}))},de=function(e,n,a,o,i){var s=t.createEvent("Event");return a||(a={}),a.instance=r,s.initEvent(n,!o,!i),s.detail=a,e.dispatchEvent(s),s},fe=function(t,n){var r;!G&&(r=e.picturefill||a.pf)?(n&&n.src&&!t[Y]("srcset")&&t.setAttribute("srcset",n.src),r({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},pe=function(e,t){return(getComputedStyle(e,null)||{})[t]},he=function(e,t,n){for(n=n||e.offsetWidth;n<a.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},ve=(H=[],K=q=[],J=function(e,n){$&&!n?e.apply(this,arguments):(K.push(e),V||(V=!0,(t.hidden?ee:te)(U)))},J._lsFlush=U=function(){var e=K;for(K=q.length?H:q,$=!0,V=!1;e.length;)e.shift()();$=!1},J),me=function(e,t){return t?function(){ve(e)}:function(){var t=this,n=arguments;ve((function(){e.apply(t,n)}))}},ge=function(e){var t,r,a=function(){t=null,e()},o=function(){var e=n.now()-r;e<99?ee(o,99-e):(ne||a)(a)};return function(){r=n.now(),t||(t=ee(o,99))}},ye=(C=/^img$/i,E=/^iframe$/i,w="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),0,A=0,B=0,D=-1,I=function(e){B--,(!e||B<0||!e.target)&&(B=0)},L=function(e){return null==b&&(b="hidden"==pe(t.body,"visibility")),b||!("hidden"==pe(e.parentNode,"visibility")&&"hidden"==pe(e,"visibility"))},M=function(e,n){var r,a=e,o=L(e);for(m-=n,z+=n,g-=n,y+=n;o&&(a=a.offsetParent)&&a!=t.body&&a!=Q;)(o=(pe(a,"opacity")||1)>0)&&"visible"!=pe(a,"overflow")&&(r=a.getBoundingClientRect(),o=y>r.left&&g<r.right&&z>r.top-1&&m<r.bottom+1);return o},x=function(e){var t,r=0,o=a.throttleDelay,i=a.ricTimeout,s=function(){t=!1,r=n.now(),e()},c=ne&&i>49?function(){ne(s,{timeout:i}),i!==a.ricTimeout&&(i=a.ricTimeout)}:me((function(){ee(s)}),!0);return function(e){var a;(e=!0===e)&&(i=33),t||(t=!0,(a=o-(n.now()-r))<0&&(a=0),e||a<9?c():ee(c,a))}}(_=function(){var e,n,o,i,s,c,d,p,C,E,I,_,x=r.elements;if((f=a.loadMode)&&B<8&&(e=x.length)){for(n=0,D++;n<e;n++)if(x[n]&&!x[n]._lazyRace)if(!w||r.prematureUnveil&&r.prematureUnveil(x[n]))j(x[n]);else if((p=x[n][Y]("data-expand"))&&(c=1*p)||(c=A),E||(E=!a.expand||a.expand<1?Q.clientHeight>500&&Q.clientWidth>500?500:370:a.expand,r._defEx=E,I=E*a.expFactor,_=a.hFac,b=null,A<I&&B<1&&D>2&&f>2&&!t.hidden?(A=I,D=0):A=f>1&&D>1&&B<6?E:0),C!==c&&(h=innerWidth+c*_,v=innerHeight+c,d=-1*c,C=c),o=x[n].getBoundingClientRect(),(z=o.bottom)>=d&&(m=o.top)<=v&&(y=o.right)>=d*_&&(g=o.left)<=h&&(z||y||g||m)&&(a.loadHidden||L(x[n]))&&(u&&B<3&&!p&&(f<3||D<4)||M(x[n],c))){if(j(x[n]),s=!0,B>9)break}else!s&&u&&!i&&B<4&&D<4&&f>2&&(l[0]||a.preloadAfterLoad)&&(l[0]||!p&&(z||y||g||m||"auto"!=x[n][Y](a.sizesAttr)))&&(i=l[0]||x[n]);i&&!s&&j(i)}}),N=me(S=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(I(e),ce(t,a.loadedClass),le(t,a.loadingClass),ue(t,k),de(t,"lazyloaded"))}),k=function(e){N({target:e.target})},W=function(e,t){var n=e.getAttribute("data-load-mode")||a.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},P=function(e){var t,n=e[Y](a.srcsetAttr);(t=a.customMedia[e[Y]("data-media")||e[Y]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},T=me((function(e,t,n,r,o){var i,s,c,l,u,f;(u=de(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?ce(e,a.autosizesClass):e.setAttribute("sizes",r)),s=e[Y](a.srcsetAttr),i=e[Y](a.srcAttr),o&&(l=(c=e.parentNode)&&re.test(c.nodeName||"")),f=t.firesLoad||"src"in e&&(s||i||l),u={target:e},ce(e,a.loadingClass),f&&(clearTimeout(d),d=ee(I,2500),ue(e,k,!0)),l&&ie.call(c.getElementsByTagName("source"),P),s?e.setAttribute("srcset",s):i&&!l&&(E.test(e.nodeName)?W(e,i):e.src=i),o&&(s||l)&&fe(e,{src:i})),e._lazyRace&&delete e._lazyRace,le(e,a.lazyClass),ve((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&ce(e,a.fastLoadedClass),S(u),e._lazyCache=!0,ee((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&B--}),!0)})),j=function(e){if(!e._lazyRace){var t,n=C.test(e.nodeName),r=n&&(e[Y](a.sizesAttr)||e[Y]("sizes")),o="auto"==r;(!o&&u||!n||!e[Y]("src")&&!e.srcset||e.complete||se(e,a.errorClass)||!se(e,a.lazyClass))&&(t=de(e,"lazyunveilread").detail,o&&ze.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,B++,T(e,t,o,r,n))}},O=ge((function(){a.loadMode=3,x()})),F=function(){u||(n.now()-p<999?ee(F,999):(u=!0,a.loadMode=3,x(),Z("scroll",R,!0)))},{_:function(){p=n.now(),r.elements=t.getElementsByClassName(a.lazyClass),l=t.getElementsByClassName(a.lazyClass+" "+a.preloadClass),Z("scroll",x,!0),Z("resize",x,!0),Z("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+a.loadingClass);n.length&&n.forEach&&te((function(){n.forEach((function(e){e.complete&&j(e)}))}))}})),e.MutationObserver?new MutationObserver(x).observe(Q,{childList:!0,subtree:!0,attributes:!0}):(Q[X]("DOMNodeInserted",x,!0),Q[X]("DOMAttrModified",x,!0),setInterval(x,999)),Z("hashchange",x,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[X](e,x,!0)})),/d$|^c/.test(t.readyState)?F():(Z("load",F),t[X]("DOMContentLoaded",x),ee(F,2e4)),r.elements.length?(_(),ve._lsFlush()):x()},checkElems:x,unveil:j,_aLSL:R=function(){3==a.loadMode&&(a.loadMode=2),O()}}),ze=(i=me((function(e,t,n,r){var a,o,i;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),re.test(t.nodeName||""))for(o=0,i=(a=t.getElementsByTagName("source")).length;o<i;o++)a[o].setAttribute("sizes",r);n.detail.dataAttr||fe(e,n.detail)})),s=function(e,t,n){var r,a=e.parentNode;a&&(n=he(e,a,n),(r=de(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&i(e,a,r,n))},{_:function(){o=t.getElementsByClassName(a.autosizesClass),Z("resize",c)},checkElems:c=ge((function(){var e,t=o.length;if(t)for(e=0;e<t;e++)s(o[e])})),updateElem:s}),be=function(){!be.i&&t.getElementsByClassName&&(be.i=!0,ze._(),ye._())};return ee((function(){a.init&&be()})),r={cfg:a,autoSizer:ze,loader:ye,init:be,uP:fe,aC:ce,rC:le,hC:se,fire:de,gW:he,rAF:ve}}(t,t.document,Date);t.lazySizes=r,e.exports&&(e.exports=r)}("undefined"!=typeof window?window:{})},602:(e,t,n)=>{"use strict";n.d(t,{P2:()=>h});const r=(e,t)=>t.some((t=>e instanceof t));let a,o;const i=new WeakMap,s=new WeakMap,c=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return i.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function u(e){l=e(l)}function d(e){return"function"==typeof e?(t=e,(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),f(this.request)}:function(...e){return f(t.apply(p(this),e))}):(e instanceof IDBTransaction&&function(e){if(i.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)}));i.set(e,t)}(e),r(e,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,l):e);var t}function f(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{t(f(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",o)}));return c.set(t,e),t}(e);if(s.has(e))return s.get(e);const t=d(e);return t!==e&&(s.set(e,t),c.set(t,e)),t}const p=e=>c.get(e);function h(e,t,{blocked:n,upgrade:r,blocking:a,terminated:o}={}){const i=indexedDB.open(e,t),s=f(i);return r&&i.addEventListener("upgradeneeded",(e=>{r(f(i.result),e.oldVersion,e.newVersion,f(i.transaction),e)})),n&&i.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{o&&e.addEventListener("close",(()=>o())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const v=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],g=new Map;function y(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(g.get(t))return g.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=m.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!v.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,a?"readwrite":"readonly");let i=o.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[n](...t),a&&o.done]))[0]};return g.set(t,o),o}u((e=>({...e,get:(t,n,r)=>y(t,n)||e.get(t,n,r),has:(t,n)=>!!y(t,n)||e.has(t,n)})));const z=["continue","continuePrimaryKey","advance"],b={},C=new WeakMap,E=new WeakMap,w={get(e,t){if(!z.includes(t))return e[t];let n=b[t];return n||(n=b[t]=function(...e){C.set(this,E.get(this)[t](...e))}),n}};async function*A(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;const n=new Proxy(t,w);for(E.set(n,t),c.set(n,p(t));t;)yield n,t=await(C.get(n)||t.continue()),C.delete(n)}function B(e,t){return t===Symbol.asyncIterator&&r(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&r(e,[IDBIndex,IDBObjectStore])}u((e=>({...e,get:(t,n,r)=>B(t,n)?A:e.get(t,n,r),has:(t,n)=>B(t,n)||e.has(t,n)})))}}]);
//# sourceMappingURL=684.bundle.js.map