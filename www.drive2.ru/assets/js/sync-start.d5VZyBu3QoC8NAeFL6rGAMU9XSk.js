"use strict";(()=>{var yt=Object.defineProperty,wt=Object.defineProperties;var Et=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var _t=Object.prototype.hasOwnProperty,Tt=Object.prototype.propertyIsEnumerable;var j=(t,e,n)=>e in t?yt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,W=(t,e)=>{for(var n in e||(e={}))_t.call(e,n)&&j(t,n,e[n]);if(V)for(var n of V(e))Tt.call(e,n)&&j(t,n,e[n]);return t},z=(t,e)=>wt(t,Et(e));Array.prototype.values||(Array.prototype.values=function(){let t=0,e=!1,n={next(){if(!e&&t<this.length){let l=t++;return{value:this[l],done:!1}}return e=!0,{done:!0,value:void 0}}};return n[Symbol.iterator]=()=>n,n});Object.fromEntries||(Object.fromEntries=t=>{let e={};if(!(Symbol.iterator in t))throw new TypeError(`${t} is not iterable`);let l=t[Symbol.iterator].call(t);for(let o=l.next();!o.done;o=l.next()){let h=o.value;if(Object(h)!==h)throw new TypeError("iterable for fromEntries should yield objects");let d=h[0],a=h[1];e[d]=a}return e});var{hasAttribute:X,setAttribute:K,removeAttribute:Q}=Element.prototype;Element.prototype.hasOwnProperty("toggleAttribute")||(Element.prototype.toggleAttribute=function(e,n){return n===void 0?X.call(this,e)?(Q.call(this,e),!1):(K.call(this,e,""),!0):n?(X.call(this,e)||K.call(this,e,""),!0):(Q.call(this,e),!1)});Promise.prototype.finally||(Promise.prototype.finally=function(t){return this.then(e=>Promise.resolve(t()).then(()=>e),e=>Promise.resolve(t()).then(()=>{throw e}))});function I(t,e){if(t.length<e)throw new TypeError(`${e} argument required, but only ${t.length} present.`)}Blob.prototype[Symbol.toStringTag]||(Blob.prototype[Symbol.toStringTag]="Blob");try{new File([],"")}catch(t){self.File=class extends Blob{constructor(n,l,o={}){I(arguments,2),super(n,o),this._name=String(l).replace(/\//g,":"),this._lastModified=o.lastModified||Date.now()}get name(){return this._name}get lastModified(){return this._lastModified}toString(){return"[object FormData1]"}get[Symbol.toStringTag](){return"File"}}}if(typeof FormData=="undefined"||!FormData.prototype.keys){let e=function(d,a,f){return a instanceof Blob?(f=f!==void 0?f+"":typeof a.name=="string"?a.name:"blob",(a.name!==f||Object.prototype.toString.call(a)==="[object Blob]")&&(a=new File([a],f)),[String(d),a]):[String(d),String(a)]},n=function(d){return d.replace(/\r?\n|\r/g,`\r
`)},l=function(d,a){for(let f=0;f<d.length;f++)a(d[f])};Ht=e,Pt=n,Ft=l;let t=XMLHttpRequest.prototype.send,o=d=>d.replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22");class h{constructor(a){this._data=[];let f=this;a&&l(a.elements,c=>{if(!(!c.name||c.disabled||c.type==="submit"||c.type==="button"||c.matches("form fieldset[disabled] *")))if(c.type==="file"){let m=c.files&&c.files.length?c.files:[new File([],"",{type:"application/octet-stream"})];l(m,g=>{f.append(c.name,g)})}else if(c.type==="select-multiple"||c.type==="select-one")l(c.options,m=>{!m.disabled&&m.selected&&f.append(c.name,m.value)});else if(c.type==="checkbox"||c.type==="radio")c.checked&&f.append(c.name,c.value);else{let m=c.type==="textarea"?n(c.value):c.value;f.append(c.name,m)}})}append(a,f,c){I(arguments,2),this._data.push(e(a,f,c))}delete(a){I(arguments,1);let f=[];a=String(a),l(this._data,c=>{c[0]!==a&&f.push(c)}),this._data=f}*entries(){for(var a=0;a<this._data.length;a++)yield this._data[a]}forEach(a,f){I(arguments,1);for(let[c,m]of this)a.call(f,m,c,this)}get(a){I(arguments,1);let f=this._data;a=String(a);for(let c=0;c<f.length;c++)if(f[c][0]===a)return f[c][1];return null}getAll(a){I(arguments,1);let f=[];return a=String(a),l(this._data,c=>{c[0]===a&&f.push(c[1])}),f}has(a){I(arguments,1),a=String(a);for(let f=0;f<this._data.length;f++)if(this._data[f][0]===a)return!0;return!1}*keys(){for(let[a]of this)yield a}set(a,f,c){I(arguments,2),a=String(a);let m=[],g=e(a,f,c),v=!0;l(this._data,b=>{b[0]===a?v&&(v=!m.push(g)):m.push(b)}),v&&m.push(g),this._data=m}*values(){for(let[,a]of this)yield a}_blob(){let a="----formdata-polyfill-"+Math.random(),f=[],c=`--${a}\r
Content-Disposition: form-data; name="`;return this.forEach((m,g)=>typeof m=="string"?f.push(c+o(n(g))+`"\r
\r
${n(m)}\r
`):f.push(c+o(n(g))+`"; filename="${o(m.name)}"\r
Content-Type: ${m.type||"application/octet-stream"}\r
\r
`,m,`\r
`)),f.push(`--${a}--`),new Blob(f,{type:"multipart/form-data; boundary="+a})}[Symbol.iterator](){return this.entries()}get[Symbol.toStringTag](){return"FormData"}}if(t){let d=XMLHttpRequest.prototype.setRequestHeader;XMLHttpRequest.prototype.setRequestHeader=function(a,f){d.call(this,a,f),a.toLowerCase()==="content-type"&&(this._hasContentType=!0)},XMLHttpRequest.prototype.send=function(a){if(a instanceof h){let f=a._blob();this._hasContentType||this.setRequestHeader("Content-Type",f.type),t.call(this,f)}else t.call(this,a)}}self.FormData=h}var Ht,Pt,Ft;var Y=document.createElement("details"),St=typeof HTMLDetailsElement!="undefined"&&Y instanceof HTMLDetailsElement;if(!("open"in Y||St)){document.head.insertAdjacentHTML("afterbegin","<style>details,summary{display:block;}details:not([open])>*:not(summary){display:none;}</style>");let{prototype:t}=document.createElement("details").constructor,{setAttribute:e,removeAttribute:n}=t,l=Object.getOwnPropertyDescriptor(t,"open");Object.defineProperties(t,{open:{get(){if(this.tagName=="DETAILS")return this.hasAttribute("open");if(l&&l.get)return l.get.call(this)},set(o){if(this.tagName=="DETAILS")return o?this.setAttribute("open",""):this.removeAttribute("open");if(l&&l.set)return l.set.call(this,o)}},setAttribute:{value(o,h){let d=()=>e.call(this,o,h);if(o=="open"&&this.tagName=="DETAILS"){let a=this.hasAttribute("open"),f=d();return a||this.dispatchEvent(new Event("toggle")),f}return d()}},removeAttribute:{value(o){let h=()=>n.call(this,o);if(o=="open"&&this.tagName=="DETAILS"){let d=this.hasAttribute("open"),a=h();return d&&this.dispatchEvent(new Event("toggle")),a}return h()}}}),addEventListener("click",o=>{if(!(o.defaultPrevented||o.ctrlKey||o.metaKey||o.shiftKey||o.target.isContentEditable)&&o.which<=1){let h=o.target.closest("SUMMARY");h&&h.parentNode&&h.parentNode.tagName=="DETAILS"&&(h.parentNode.hasAttribute("open")?h.parentNode.removeAttribute("open"):h.parentNode.setAttribute("open",""))}},!1)}var G=(t,e)=>{let n=o=>{for(let h=0,{length:d}=o;h<d;h++)l(o[h])},l=({target:o,attributeName:h,oldValue:d})=>{o.attributeChangedCallback(h,d,o.getAttribute(h))};return(o,h)=>{let{observedAttributes:d}=o.constructor;return d&&t(h).then(()=>{new e(n).observe(o,{attributes:!0,attributeOldValue:!0,attributeFilter:d});for(let a=0,{length:f}=d;a<f;a++)o.hasAttribute(d[a])&&l({target:o,attributeName:d[a],oldValue:null})}),o}};var{keys:xt}=Object,J=t=>{let e=xt(t),n=[],l=new Set,{length:o}=e;for(let h=0;h<o;h++){n[h]=t[e[h]];try{delete t[e[h]]}catch(d){l.add(h)}}return()=>{for(let h=0;h<o;h++)l.has(h)||(t[e[h]]=n[h])}};var Z="querySelectorAll",tt=(t,e=document,n=MutationObserver,l=["*"])=>{let o=(a,f,c,m,g,v)=>{for(let b of a)(v||Z in b)&&(g?c.has(b)||(c.add(b),m.delete(b),t(b,g)):m.has(b)||(m.add(b),c.delete(b),t(b,g)),v||o(b[Z](f),f,c,m,g,!0))},h=new n(a=>{if(l.length){let f=l.join(","),c=new Set,m=new Set;for(let{addedNodes:g,removedNodes:v}of a)o(v,f,c,m,!1,!1),o(g,f,c,m,!0,!1)}}),{observe:d}=h;return(h.observe=a=>d.call(h,a,{subtree:!0,childList:!0}))(e),h};var it="querySelectorAll",{document:Lt,Element:et,MutationObserver:At,Set:It,WeakMap:Mt}=self,rt=t=>it in t,{filter:nt}=[],ot=t=>{let e=new Mt,n=g=>{for(let v=0,{length:b}=g;v<b;v++)e.delete(g[v])},l=()=>{let g=c.takeRecords();for(let v=0,{length:b}=g;v<b;v++)d(nt.call(g[v].removedNodes,rt),!1),d(nt.call(g[v].addedNodes,rt),!0)},o=g=>g.matches||g.webkitMatchesSelector||g.msMatchesSelector,h=(g,v)=>{let b;if(v)for(let E,S=o(g),x=0,{length:L}=a;x<L;x++)S.call(g,E=a[x])&&(e.has(g)||e.set(g,new It),b=e.get(g),b.has(E)||(b.add(E),t.handle(g,v,E)));else e.has(g)&&(b=e.get(g),e.delete(g),b.forEach(E=>{t.handle(g,v,E)}))},d=(g,v=!0)=>{for(let b=0,{length:E}=g;b<E;b++)h(g[b],v)},{query:a}=t,f=t.root||Lt,c=tt(h,f,At,a),{attachShadow:m}=et.prototype;return m&&(et.prototype.attachShadow=function(g){let v=m.call(this,g);return c.observe(v),v}),a.length&&d(f[it](a)),{drop:n,flush:l,observer:c,parse:d}};if(!self.customElements){let s=function(){let{constructor:u}=this;if(!g.has(u))throw new a("Illegal constructor");let p=g.get(u);if(M)return i(M,p);let w=f.call(t,p);return i(m(w,u.prototype),p)},{document:t,HTMLElement:e,Node:n,Map:l,MutationObserver:o,Object:h,Error:d,TypeError:a}=self,{createElement:f}=t,{defineProperty:c,setPrototypeOf:m}=h,g=new l,v=new l,b=new l,E=new l,S=[],x=(u,p,w)=>{let y=b.get(w);if(p&&!y.isPrototypeOf(u)){let T=J(u);M=m(u,y);try{new y.constructor}finally{M=null,T()}}let _=`${p?"":"dis"}connectedCallback`;_ in y&&u[_]()},{parse:L}=ot({query:S,handle:x}),M=null,r=u=>{if(!v.has(u)){let p,w=new Promise(y=>{p=y});v.set(u,{$:w,_:p})}return v.get(u).$},i=G(r,o);self.customElements={define:(u,p)=>{if(E.has(u))throw new d(`the name "${u}" has already been used with this registry`);g.set(p,u),b.set(u,p.prototype),E.set(u,p),S.push(u),r(u).then(()=>{L(t.querySelectorAll(u))}),v.get(u)._(p)},get:u=>E.get(u),whenDefined:r},c(s.prototype=e.prototype,"constructor",{value:s}),self.HTMLElement=s,t.createElement=function(u,p){let w=p&&p.is,y=w?E.get(w):E.get(u);return y?new y:f.call(t,u)},"isConnected"in n.prototype||c(n.prototype,"isConnected",{configurable:!0,get(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(function(){"use strict";if(typeof window!="object")return;if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});return}function t(r){try{return r.defaultView&&r.defaultView.frameElement||null}catch(i){return null}}var e=function(r){for(var i=r,s=t(i);s;)i=s.ownerDocument,s=t(i);return i}(window.document),n=[],l=null,o=null;function h(r){this.time=r.time,this.target=r.target,this.rootBounds=E(r.rootBounds),this.boundingClientRect=E(r.boundingClientRect),this.intersectionRect=E(r.intersectionRect||b()),this.isIntersecting=!!r.intersectionRect;var i=this.boundingClientRect,s=i.width*i.height,u=this.intersectionRect,p=u.width*u.height;s?this.intersectionRatio=Number((p/s).toFixed(4)):this.intersectionRatio=this.isIntersecting?1:0}function d(r,i){var s=i||{};if(typeof r!="function")throw new Error("callback must be a function");if(s.root&&s.root.nodeType!=1&&s.root.nodeType!=9)throw new Error("root must be a Document or Element");this._checkForIntersections=f(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=r,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(s.rootMargin),this.thresholds=this._initThresholds(s.threshold),this.root=s.root||null,this.rootMargin=this._rootMarginValues.map(function(u){return u.value+u.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}d.prototype.THROTTLE_TIMEOUT=100,d.prototype.POLL_INTERVAL=null,d.prototype.USE_MUTATION_OBSERVER=!0,d._setupCrossOriginUpdater=function(){return l||(l=function(r,i){!r||!i?o=b():o=S(r,i),n.forEach(function(s){s._checkForIntersections()})}),l},d._resetCrossOriginUpdater=function(){l=null,o=null},d.prototype.observe=function(r){var i=this._observationTargets.some(function(s){return s.element==r});if(!i){if(!(r&&r.nodeType==1))throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:r,entry:null}),this._monitorIntersections(r.ownerDocument),this._checkForIntersections()}},d.prototype.unobserve=function(r){this._observationTargets=this._observationTargets.filter(function(i){return i.element!=r}),this._unmonitorIntersections(r.ownerDocument),this._observationTargets.length==0&&this._unregisterInstance()},d.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},d.prototype.takeRecords=function(){var r=this._queuedEntries.slice();return this._queuedEntries=[],r},d.prototype._initThresholds=function(r){var i=r||[0];return Array.isArray(i)||(i=[i]),i.sort().filter(function(s,u,p){if(typeof s!="number"||isNaN(s)||s<0||s>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return s!==p[u-1]})},d.prototype._parseRootMargin=function(r){var i=r||"0px",s=i.split(/\s+/).map(function(u){var p=/^(-?\d*\.?\d+)(px|%)$/.exec(u);if(!p)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(p[1]),unit:p[2]}});return s[1]=s[1]||s[0],s[2]=s[2]||s[0],s[3]=s[3]||s[1],s},d.prototype._monitorIntersections=function(r){var i=r.defaultView;if(i&&this._monitoringDocuments.indexOf(r)==-1){var s=this._checkForIntersections,u=null,p=null;this.POLL_INTERVAL?u=i.setInterval(s,this.POLL_INTERVAL):(c(i,"resize",s,!0),c(r,"scroll",s,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in i&&(p=new i.MutationObserver(s),p.observe(r,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))),this._monitoringDocuments.push(r),this._monitoringUnsubscribes.push(function(){var _=r.defaultView;_&&(u&&_.clearInterval(u),m(_,"resize",s,!0)),m(r,"scroll",s,!0),p&&p.disconnect()});var w=this.root&&(this.root.ownerDocument||this.root)||e;if(r!=w){var y=t(r);y&&this._monitorIntersections(y.ownerDocument)}}},d.prototype._unmonitorIntersections=function(r){var i=this._monitoringDocuments.indexOf(r);if(i!=-1){var s=this.root&&(this.root.ownerDocument||this.root)||e,u=this._observationTargets.some(function(y){var _=y.element.ownerDocument;if(_==r)return!0;for(;_&&_!=s;){var T=t(_);if(_=T&&T.ownerDocument,_==r)return!0}return!1});if(!u){var p=this._monitoringUnsubscribes[i];if(this._monitoringDocuments.splice(i,1),this._monitoringUnsubscribes.splice(i,1),p(),r!=s){var w=t(r);w&&this._unmonitorIntersections(w.ownerDocument)}}}},d.prototype._unmonitorAllIntersections=function(){var r=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var i=0;i<r.length;i++)r[i]()},d.prototype._checkForIntersections=function(){if(!(!this.root&&l&&!o)){var r=this._rootIsInDom(),i=r?this._getRootRect():b();this._observationTargets.forEach(function(s){var u=s.element,p=v(u),w=this._rootContainsTarget(u),y=s.entry,_=r&&w&&this._computeTargetAndRootIntersection(u,p,i),T=null;this._rootContainsTarget(u)?(!l||this.root)&&(T=i):T=b();var A=s.entry=new h({time:a(),target:u,boundingClientRect:p,rootBounds:T,intersectionRect:_});y?r&&w?this._hasCrossedThreshold(y,A)&&this._queuedEntries.push(A):y&&y.isIntersecting&&this._queuedEntries.push(A):this._queuedEntries.push(A)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},d.prototype._computeTargetAndRootIntersection=function(r,i,s){if(window.getComputedStyle(r).display!="none"){for(var u=i,p=L(r),w=!1;!w&&p;){var y=null,_=p.nodeType==1?window.getComputedStyle(p):{};if(_.display=="none")return null;if(p==this.root||p.nodeType==9)if(w=!0,p==this.root||p==e)l&&!this.root?!o||o.width==0&&o.height==0?(p=null,y=null,u=null):y=o:y=s;else{var T=L(p),A=T&&v(T),$=T&&this._computeTargetAndRootIntersection(T,A,s);A&&$?(p=T,y=S(A,$)):(p=null,u=null)}else{var B=p.ownerDocument;p!=B.body&&p!=B.documentElement&&_.overflow!="visible"&&(y=v(p))}if(y&&(u=g(y,u)),!u)break;p=p&&L(p)}return u}},d.prototype._getRootRect=function(){var r;if(this.root&&!M(this.root))r=v(this.root);else{var i=M(this.root)?this.root:e,s=i.documentElement,u=i.body;r={top:0,left:0,right:s.clientWidth||u.clientWidth,width:s.clientWidth||u.clientWidth,bottom:s.clientHeight||u.clientHeight,height:s.clientHeight||u.clientHeight}}return this._expandRectByRootMargin(r)},d.prototype._expandRectByRootMargin=function(r){var i=this._rootMarginValues.map(function(u,p){return u.unit=="px"?u.value:u.value*(p%2?r.width:r.height)/100}),s={top:r.top-i[0],right:r.right+i[1],bottom:r.bottom+i[2],left:r.left-i[3]};return s.width=s.right-s.left,s.height=s.bottom-s.top,s},d.prototype._hasCrossedThreshold=function(r,i){var s=r&&r.isIntersecting?r.intersectionRatio||0:-1,u=i.isIntersecting?i.intersectionRatio||0:-1;if(s!==u)for(var p=0;p<this.thresholds.length;p++){var w=this.thresholds[p];if(w==s||w==u||w<s!=w<u)return!0}},d.prototype._rootIsInDom=function(){return!this.root||x(e,this.root)},d.prototype._rootContainsTarget=function(r){var i=this.root&&(this.root.ownerDocument||this.root)||e;return x(i,r)&&(!this.root||i==r.ownerDocument)},d.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},d.prototype._unregisterInstance=function(){var r=n.indexOf(this);r!=-1&&n.splice(r,1)};function a(){return window.performance&&performance.now&&performance.now()}function f(r,i){var s=null;return function(){s||(s=setTimeout(function(){r(),s=null},i))}}function c(r,i,s,u){typeof r.addEventListener=="function"?r.addEventListener(i,s,u||!1):typeof r.attachEvent=="function"&&r.attachEvent("on"+i,s)}function m(r,i,s,u){typeof r.removeEventListener=="function"?r.removeEventListener(i,s,u||!1):typeof r.detachEvent=="function"&&r.detachEvent("on"+i,s)}function g(r,i){var s=Math.max(r.top,i.top),u=Math.min(r.bottom,i.bottom),p=Math.max(r.left,i.left),w=Math.min(r.right,i.right),y=w-p,_=u-s;return y>=0&&_>=0&&{top:s,bottom:u,left:p,right:w,width:y,height:_}||null}function v(r){var i;try{i=r.getBoundingClientRect()}catch(s){}return i?(i.width&&i.height||(i={top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.right-i.left,height:i.bottom-i.top}),i):b()}function b(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function E(r){return!r||"x"in r?r:{top:r.top,y:r.top,bottom:r.bottom,left:r.left,x:r.left,right:r.right,width:r.width,height:r.height}}function S(r,i){var s=i.top-r.top,u=i.left-r.left;return{top:s,left:u,height:i.height,width:i.width,bottom:s+i.height,right:u+i.width}}function x(r,i){for(var s=i;s;){if(s==r)return!0;s=L(s)}return!1}function L(r){var i=r.parentNode;return r.nodeType==9&&r!=e?t(r):(i&&i.assignedSlot&&(i=i.assignedSlot.parentNode),i&&i.nodeType==11&&i.host?i.host:i)}function M(r){return r&&r.nodeType===9}window.IntersectionObserver=d,window.IntersectionObserverEntry=h})();var F={};try{F.EventTarget=new EventTarget().constructor}catch(t){(function(e,n){var l=e.create,o=e.defineProperty,h=d.prototype;a(h,"addEventListener",function(c,m,g){for(var v=n.get(this),b=v[c]||(v[c]=[]),E=0,S=b.length;E<S;E++)if(b[E].listener===m)return;b.push({target:this,listener:m,options:g})}),a(h,"dispatchEvent",function(c){var m=n.get(this),g=m[c.type];return g&&(a(c,"target",this),a(c,"currentTarget",this),g.slice(0).some(f,c),delete c.currentTarget,delete c.target),!0}),a(h,"removeEventListener",function(c,m){for(var g=n.get(this),v=g[c]||(g[c]=[]),b=0,E=v.length;b<E;b++)if(v[b].listener===m){v.splice(b,1);return}}),F.EventTarget=d;function d(){"use strict";n.set(this,l(null))}function a(c,m,g){o(c,m,{configurable:!0,writable:!0,value:g})}function f(c){var m=c.options;return m&&m.once&&c.target.removeEventListener(this.type,c.listener),typeof c.listener=="function"?c.listener.call(c.target,this):c.listener.handleEvent(this),this._stopImmediatePropagationFlag}})(Object,new WeakMap)}var st=F.EventTarget;window.EventTarget=st;window.globalThis=window;Element.prototype.getAttributeNames===void 0&&(Element.prototype.getAttributeNames=function(){let t=this.attributes,e=t.length,n=new Array(e);for(let l=0;l<e;l++)n[l]=t[l].name;return n});try{window.queueMicrotask=queueMicrotask}catch(t){let e=Promise.resolve();window.queueMicrotask=e.then.bind(e)}var at=(t,e)=>{let n=t.length,l,o=1;for(;!l;)if(n%o===1)o++;else{l=!0;for(let h=0,d=0;h*o<n;h++)if(d+=Math.max(...t.slice(h*o,(h+1)*o)),d>e){l=!1,o++;break}}return o};var O=new WeakMap,q=[],ct=t=>{do if(t.nextSibling)return!0;while(t=t.parentNode);return!1},Ot=()=>{q.splice(0).forEach(t=>{O.get(t)!==!0&&(O.set(t,!0),t.parsedCallback())})},lt=(t,e,n,l)=>{e.disconnect(),n.removeEventListener("DOMContentLoaded",l),ut(t)},ut=t=>{q.length||requestAnimationFrame(Ot),q.push(t)},D=class extends HTMLElement{connectedCallback(){if(this.parsedCallback&&!O.has(this)){let e=this,{ownerDocument:n}=e;if(O.set(e,!1),n.readyState==="complete"||ct(e))ut(e);else{let l=()=>lt(e,o,n,l);n.addEventListener("DOMContentLoaded",l);let o=new MutationObserver(()=>{ct(e)&&lt(e,o,n,l)});o.observe(e.parentNode,{childList:!0,subtree:!0})}}}get parsed(){return O.get(this)===!0}};var ht=t=>{let e=!1,n;return()=>(e||(n=t(),e=!0),n)};var Dt=(t,e)=>getComputedStyle(t).getPropertyValue(e),dt=(t,e)=>parseFloat(Dt(t,e))||0;var ae=ht(()=>{let e=document.createElement("a").style;return e.cssText="position:-webkit-sticky;position:sticky;",e.position.includes("sticky")});var k=class extends D{parsedCallback(){this.fontSize=dt(this,"font-size"),this.fit()}static get observedAttributes(){return["behavior"]}get behavior(){return this.getAttribute("behavior")||""}set behavior(n){this.setAttribute("behavior",n||"")}attributeChangedCallback(){this.fit()}fit(){if(!this.fontSize)return;let{clientWidth:n}=this,l=this.behavior==="grow"?this.fontSize:9,o=this.behavior==="shrink"?this.fontSize:100;for(o++;o-l>1;){let h=Math.floor((l+o)/2);this.style.fontSize=`${h}px`,this.scrollWidth>n?o=h:l=h}this.style.fontSize=`${l}px`}};var U=t=>{if(!d2Env.isApp)return t;let e=t.indexOf("base64");return e!==-1?t.substring(e+7):t};window.xImgLoaded=window.xImgLoaded||new Set;var N,kt=t=>{N||(N=new IntersectionObserver(e=>{e.forEach(n=>{if(n.isIntersecting){let l=n.target;N.unobserve(l),l.load()}})},{rootMargin:"200px 0px"})),N.observe(t)},R=class extends HTMLElement{connectedCallback(){if(this.img=this.querySelector("img"),this.img)this.init();else{let n=new MutationObserver(()=>{this.img=this.querySelector("img"),this.img&&(n.disconnect(),this.init())});n.observe(this,{childList:!0})}}static get observedAttributes(){return["src"]}get color(){return this.style.getPropertyValue("--color").trim()}get preview(){return this.getAttribute("preview")||this.src||""}get data(){let n=this.preview;return z(W({element:this.img,url:U(this.src||this.img.src),width:Number(this.getAttribute("width")),height:Number(this.getAttribute("height"))},n&&(!d2Env.isApp||n.indexOf("data:image/png")===0)&&{inline:U(n)}),{color:this.color})}get src(){return this.getAttribute("src")||""}set src(n){this.setAttribute("src",n)}attributeChangedCallback(n,l,o){this.hasAttribute("defined")&&n==="src"&&o&&(this.img.src=o)}load(){this.img.offsetWidth,this.img.style.transition="opacity 0.3s ease-in",this.img.addEventListener("load",this,{once:!0,passive:!0}),this.img.addEventListener("error",this,{once:!0,passive:!0}),this.img.addEventListener("abort",this,{once:!0,passive:!0}),this.img.src=this.src}handleEvent(n){n.type==="transitionend"?this.cleanup():(xImgLoaded.add(this.img.src),n.type!=="error"&&n.type!=="abort"&&(this.img.addEventListener("transitionend",this,{once:!0}),this.img.style.opacity="1",this.classList.add("in-transition")))}init(){if(this.hasAttribute("defined")&&this.cleanup(),!this.src)this.src=this.img.src;else if(this.src!==this.img.src){this.setAttribute("preview",this.img.src);let n=this.querySelector("div");n||(n=document.createElement("div"),this.prepend(n)),n.style.backgroundImage=`url(${this.img.src})`,this.img.style.opacity="0",kt(this)}this.setAttribute("defined","")}cleanup(){this.img.removeAttribute("style"),this.classList.remove("in-transition");let n=this.querySelector("div");n&&n.remove()}};var Rt=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document,ft=!!navigator.userAgent.match(/android/i),pt=Rt();var H=t=>document.documentElement.classList.add(t),gt=()=>{if(pt){let t=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),e=t?parseInt(t[1],10):0;e&&e<=12&&H("ios12-"),d2Env.isApp&&(window.screen.width/window.screen.height).toPrecision(3)==="0.462"&&H("bottom-inset")}ft&&H("android"),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&H("safari")};var mt=(t,e)=>{let n=`${t}=`,l=(document.cookie||"").split(";");for(let o of l){let h=o.trim();if(h.lastIndexOf(n,0)===0)return h.substring(n.length);if(h===t)return""}return e};var C=[],bt=t=>{let e=t;do if(e.nextSibling)return!0;while(e=e.parentNode);return!1},vt=new MutationObserver(t=>{t.forEach(e=>{e.addedNodes.forEach(n=>{n.nodeType===1&&(C.forEach(l=>{if(n.matches(l[0]))if(!l[2]||bt(n))l[1](n);else{let o=new MutationObserver(()=>{bt(n)&&(o.disconnect(),l[1](n))});o.observe(n.parentNode,{childList:!0,subtree:!0})}}),n.tagName==="FOOTER"&&vt.disconnect())})})});vt.observe(document.documentElement,{childList:!0,subtree:!0});window.__run=t=>typeof t=="function"?__run.q.push(t):(...e)=>{__run.q.push([t,e])};window.__run.q=[];window.d2=window.d2||{};window.d2.brandingRender=t=>__run("d2.brandingInternal")(t);if(d2Env.isDesktop){let t=mt("user_preferences_mainnav");if(t){let e=t.split(",");C.push(['ul[data-id^="section-"]',n=>{let l=n.closest('[data-slot~="nav.section"]');if(l){let o=e.includes(n.dataset.id.replace("section-",""));l.classList.toggle("is-active",o),n.style.display=o?"":"none"}},!1])}}C.push(['[data-role~="makeslist"]',t=>{if(t.classList.contains("is-parked")){let e=Array.from(t.children),n=t.classList.contains("is-open");t.classList.add("is-open");let l=t.offsetWidth,o=e[0].offsetHeight,h=e.map(c=>c.offsetWidth),d=e.map(c=>n||c.classList.contains("is-important")),a=h.filter((c,m)=>d[m]),f=at(a,l);t.style.maxHeight=`${f*o}px`,t.classList.toggle("is-open",n),t.classList.remove("is-parked")}},!0]);customElements.define("x-img",R);customElements.define("x-fit-text",k);gt();C.push(['[data-role~="dv"]',t=>{let e=()=>{t.getBoundingClientRect().height>0&&(n.disconnect(),t.classList.remove("is-off"))},n=window.ResizeObserver?new ResizeObserver(e):new MutationObserver(e);n.observe(t,window.ResizeObserver?{}:{childList:!0,subtree:!0,attributes:!0}),e()},!1]);var P=d2Env.themeTestingKey;if(P){let t,e=localStorage.getItem(P)||"light",n=()=>{document.documentElement.classList.toggle("dark",e==="dark"),document.documentElement.classList.toggle("light",e==="light"),t&&(t.classList.toggle("dark",e==="dark"),t.classList.toggle("light",e==="light"))},l=()=>{localStorage.setItem(P,e)};window.addEventListener("storage",o=>{o.key===P&&(e=o.newValue==="dark"?"dark":"light",n())}),C.push(['[data-role~="theme-switch"]',o=>{t=o,o.addEventListener("click",()=>{e=e==="dark"?"light":"dark",n(),l();let h=document.querySelector('[data-role~="top-menu"]');h&&h.removeAttribute("data-open")}),n()},!1]),n()}})();
/*! Bundled license information:

element-notifier/esm/index.js:
  (*! (c) Andrea Giammarchi - ISC *)

@ungap/event-target/esm/index.js:
  (*! (c) Andrea Giammarchi - ISC *)
*/