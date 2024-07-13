/*! For licenses information, see /assets/js/LICENSES.txt */
"use strict";(()=>{Object.fromEntries||Object.defineProperty(Object,"fromEntries",{configurable:!0,enumerable:!1,value(n){let r={};for(let o of n){if(Object(o)!==o)throw new TypeError("iterable for fromEntries should yield objects");let{"0":a,"1":l}=o;Object.defineProperty(r,a,{configurable:!0,enumerable:!0,writable:!0,value:l})}return r}});(function(){"use strict";if(typeof window!="object")return;if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});return}function n(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch{return null}}var r=function(t){for(var e=t,i=n(e);i;)e=i.ownerDocument,i=n(e);return e}(window.document),o=[],a=null,l=null;function d(t){this.time=t.time,this.target=t.target,this.rootBounds=y(t.rootBounds),this.boundingClientRect=y(t.boundingClientRect),this.intersectionRect=y(t.intersectionRect||m()),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,i=e.width*e.height,s=this.intersectionRect,u=s.width*s.height;i?this.intersectionRatio=Number((u/i).toFixed(4)):this.intersectionRatio=this.isIntersecting?1:0}function c(t,e){var i=e||{};if(typeof t!="function")throw new Error("callback must be a function");if(i.root&&i.root.nodeType!=1&&i.root.nodeType!=9)throw new Error("root must be a Document or Element");this._checkForIntersections=w(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map(function(s){return s.value+s.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}c.prototype.THROTTLE_TIMEOUT=100,c.prototype.POLL_INTERVAL=null,c.prototype.USE_MUTATION_OBSERVER=!0,c._setupCrossOriginUpdater=function(){return a||(a=function(t,e){!t||!e?l=m():l=k(t,e),o.forEach(function(i){i._checkForIntersections()})}),a},c._resetCrossOriginUpdater=function(){a=null,l=null},c.prototype.observe=function(t){var e=this._observationTargets.some(function(i){return i.element==t});if(!e){if(!(t&&t.nodeType==1))throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},c.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._unmonitorIntersections(t.ownerDocument),this._observationTargets.length==0&&this._unregisterInstance()},c.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},c.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},c.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(i,s,u){if(typeof i!="number"||isNaN(i)||i<0||i>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return i!==u[s-1]})},c.prototype._parseRootMargin=function(t){var e=t||"0px",i=e.split(/\s+/).map(function(s){var u=/^(-?\d*\.?\d+)(px|%)$/.exec(s);if(!u)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(u[1]),unit:u[2]}});return i[1]=i[1]||i[0],i[2]=i[2]||i[0],i[3]=i[3]||i[1],i},c.prototype._monitorIntersections=function(t){var e=t.defaultView;if(e&&this._monitoringDocuments.indexOf(t)==-1){var i=this._checkForIntersections,s=null,u=null;this.POLL_INTERVAL?s=e.setInterval(i,this.POLL_INTERVAL):(h(e,"resize",i,!0),h(t,"scroll",i,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in e&&(u=new e.MutationObserver(i),u.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))),this._monitoringDocuments.push(t),this._monitoringUnsubscribes.push(function(){var v=t.defaultView;v&&(s&&v.clearInterval(s),g(v,"resize",i,!0)),g(t,"scroll",i,!0),u&&u.disconnect()});var p=this.root&&(this.root.ownerDocument||this.root)||r;if(t!=p){var f=n(t);f&&this._monitorIntersections(f.ownerDocument)}}},c.prototype._unmonitorIntersections=function(t){var e=this._monitoringDocuments.indexOf(t);if(e!=-1){var i=this.root&&(this.root.ownerDocument||this.root)||r,s=this._observationTargets.some(function(f){var v=f.element.ownerDocument;if(v==t)return!0;for(;v&&v!=i;){var _=n(v);if(v=_&&_.ownerDocument,v==t)return!0}return!1});if(!s){var u=this._monitoringUnsubscribes[e];if(this._monitoringDocuments.splice(e,1),this._monitoringUnsubscribes.splice(e,1),u(),t!=i){var p=n(t);p&&this._unmonitorIntersections(p.ownerDocument)}}}},c.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},c.prototype._checkForIntersections=function(){if(!(!this.root&&a&&!l)){var t=this._rootIsInDom(),e=t?this._getRootRect():m();this._observationTargets.forEach(function(i){var s=i.element,u=b(s),p=this._rootContainsTarget(s),f=i.entry,v=t&&p&&this._computeTargetAndRootIntersection(s,u,e),_=null;this._rootContainsTarget(s)?(!a||this.root)&&(_=e):_=m();var I=i.entry=new d({time:T(),target:s,boundingClientRect:u,rootBounds:_,intersectionRect:v});f?t&&p?this._hasCrossedThreshold(f,I)&&this._queuedEntries.push(I):f&&f.isIntersecting&&this._queuedEntries.push(I):this._queuedEntries.push(I)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},c.prototype._computeTargetAndRootIntersection=function(t,e,i){if(window.getComputedStyle(t).display!="none"){for(var s=e,u=R(t),p=!1;!p&&u;){var f=null,v=u.nodeType==1?window.getComputedStyle(u):{};if(v.display=="none")return null;if(u==this.root||u.nodeType==9)if(p=!0,u==this.root||u==r)a&&!this.root?!l||l.width==0&&l.height==0?(u=null,f=null,s=null):f=l:f=i;else{var _=R(u),I=_&&b(_),C=_&&this._computeTargetAndRootIntersection(_,I,i);I&&C?(u=_,f=k(I,C)):(u=null,s=null)}else{var F=u.ownerDocument;u!=F.body&&u!=F.documentElement&&v.overflow!="visible"&&(f=b(u))}if(f&&(s=E(f,s)),!s)break;u=u&&R(u)}return s}},c.prototype._getRootRect=function(){var t;if(this.root&&!N(this.root))t=b(this.root);else{var e=N(this.root)?this.root:r,i=e.documentElement,s=e.body;t={top:0,left:0,right:i.clientWidth||s.clientWidth,width:i.clientWidth||s.clientWidth,bottom:i.clientHeight||s.clientHeight,height:i.clientHeight||s.clientHeight}}return this._expandRectByRootMargin(t)},c.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(s,u){return s.unit=="px"?s.value:s.value*(u%2?t.width:t.height)/100}),i={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return i.width=i.right-i.left,i.height=i.bottom-i.top,i},c.prototype._hasCrossedThreshold=function(t,e){var i=t&&t.isIntersecting?t.intersectionRatio||0:-1,s=e.isIntersecting?e.intersectionRatio||0:-1;if(i!==s)for(var u=0;u<this.thresholds.length;u++){var p=this.thresholds[u];if(p==i||p==s||p<i!=p<s)return!0}},c.prototype._rootIsInDom=function(){return!this.root||H(r,this.root)},c.prototype._rootContainsTarget=function(t){var e=this.root&&(this.root.ownerDocument||this.root)||r;return H(e,t)&&(!this.root||e==t.ownerDocument)},c.prototype._registerInstance=function(){o.indexOf(this)<0&&o.push(this)},c.prototype._unregisterInstance=function(){var t=o.indexOf(this);t!=-1&&o.splice(t,1)};function T(){return window.performance&&performance.now&&performance.now()}function w(t,e){var i=null;return function(){i||(i=setTimeout(function(){t(),i=null},e))}}function h(t,e,i,s){typeof t.addEventListener=="function"?t.addEventListener(e,i,s||!1):typeof t.attachEvent=="function"&&t.attachEvent("on"+e,i)}function g(t,e,i,s){typeof t.removeEventListener=="function"?t.removeEventListener(e,i,s||!1):typeof t.detachEvent=="function"&&t.detachEvent("on"+e,i)}function E(t,e){var i=Math.max(t.top,e.top),s=Math.min(t.bottom,e.bottom),u=Math.max(t.left,e.left),p=Math.min(t.right,e.right),f=p-u,v=s-i;return f>=0&&v>=0&&{top:i,bottom:s,left:u,right:p,width:f,height:v}||null}function b(t){var e;try{e=t.getBoundingClientRect()}catch{}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):m()}function m(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function y(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function k(t,e){var i=e.top-t.top,s=e.left-t.left;return{top:i,left:s,height:e.height,width:e.width,bottom:i+e.height,right:s+e.width}}function H(t,e){for(var i=e;i;){if(i==t)return!0;i=R(i)}return!1}function R(t){var e=t.parentNode;return t.nodeType==9&&t!=r?n(t):(e&&e.assignedSlot&&(e=e.assignedSlot.parentNode),e&&e.nodeType==11&&e.host?e.host:e)}function N(t){return t&&t.nodeType===9}window.IntersectionObserver=c,window.IntersectionObserverEntry=d})();var A={};try{A.EventTarget=new EventTarget().constructor}catch{(function(r,o){var a=r.create,l=r.defineProperty,d=c.prototype;T(d,"addEventListener",function(h,g,E){for(var b=o.get(this),m=b[h]||(b[h]=[]),y=0,k=m.length;y<k;y++)if(m[y].listener===g)return;m.push({target:this,listener:g,options:E})}),T(d,"dispatchEvent",function(h){var g=o.get(this),E=g[h.type];return E&&(T(h,"target",this),T(h,"currentTarget",this),E.slice(0).some(w,h),delete h.currentTarget,delete h.target),!0}),T(d,"removeEventListener",function(h,g){for(var E=o.get(this),b=E[h]||(E[h]=[]),m=0,y=b.length;m<y;m++)if(b[m].listener===g){b.splice(m,1);return}}),A.EventTarget=c;function c(){"use strict";o.set(this,a(null))}function T(h,g,E){l(h,g,{configurable:!0,writable:!0,value:E})}function w(h){var g=h.options;return g&&g.once&&h.target.removeEventListener(this.type,h.listener),typeof h.listener=="function"?h.listener.call(h.target,this):h.listener.handleEvent(this),this._stopImmediatePropagationFlag}})(Object,new WeakMap)}var q=A.EventTarget;window.EventTarget=q;window.globalThis=window.globalThis||window;try{window.queueMicrotask=queueMicrotask}catch{let n=Promise.resolve();window.queueMicrotask=n.then.bind(n)}var P=(n,r)=>{let o=n.length,a,l=1;for(;!a;)if(o%l===1)l++;else{a=!0;for(let d=0,c=0;d*l<o;d++)if(c+=Math.max(...n.slice(d*l,(d+1)*l)),c>r){a=!1,l++;break}}return l};var M=class extends HTMLElement{constructor(){super(),this.wrapper=document.createElement("div"),this.wrapper.append(document.createElement("slot")),this.attachShadow({mode:"open"}),this.shadowRoot.append(this.wrapper),this.observer=new MutationObserver(()=>this.throttledFit())}connectedCallback(){this.observer.observe(this,{subtree:!0,characterData:!0}),this.throttledFit()}static get observedAttributes(){return["behavior"]}get behavior(){return this.getAttribute("behavior")||""}set behavior(r){this.setAttribute("behavior",r||"")}attributeChangedCallback(){this.throttledFit()}throttledFit(){requestAnimationFrame(()=>this.fit())}fit(){let r=Number.parseFloat(getComputedStyle(this).getPropertyValue("font-size"));if(Number.isNaN(r))return;let{clientWidth:o}=this,a=this.behavior==="grow"?r:9,l=this.behavior==="shrink"?r:100;for(l++;l-a>1;){let d=Math.floor((a+l)/2);this.wrapper.style.fontSize=`${d}px`,this.scrollWidth>o?l=d:a=d}this.wrapper.style.fontSize=`${a}px`}};var D=n=>{if(!d2Env.isApp)return n;let r=n.indexOf("base64");return r===-1?n:n.slice(r+7)};window.xImgLoaded=window.xImgLoaded||new Set;var B="loading"in HTMLImageElement.prototype,x,j=n=>{x||(x=new IntersectionObserver(r=>{for(let o of r)if(o.isIntersecting){let a=o.target;x.unobserve(a),a.load()}},{rootMargin:"200px 0px"})),x.observe(n)},O=class extends HTMLElement{connectedCallback(){if(this.img=this.querySelector("img"),this.img)this.init();else{let r=new MutationObserver(()=>{this.img=this.querySelector("img"),this.img&&(r.disconnect(),this.init())});r.observe(this,{childList:!0})}}static get observedAttributes(){return["src"]}get color(){return this.style.getPropertyValue("--color").trim()}get preview(){return this.getAttribute("preview")||this.src||""}get data(){let r=this.preview;return{element:this.img,url:D(this.src||this.img.src),width:Number(this.getAttribute("width")),height:Number(this.getAttribute("height")),...r&&(!d2Env.isApp||r.startsWith("data:image/png"))&&{inline:D(r)},color:this.color}}get src(){return this.getAttribute("src")||""}set src(r){this.setAttribute("src",r)}attributeChangedCallback(r,o,a){this.hasAttribute("defined")&&r==="src"&&a&&this.img&&(this.img.src=a)}load(){this.img.offsetWidth,this.img.style.transition="opacity 0.3s ease-in",this.img.addEventListener("load",this,{once:!0,passive:!0}),this.img.addEventListener("error",this,{once:!0,passive:!0}),this.img.addEventListener("abort",this,{once:!0,passive:!0}),this.img.src=this.src}handleEvent(r){r.type==="transitionend"?this.cleanup():(xImgLoaded.add(this.img.src),r.type!=="error"&&r.type!=="abort"&&(this.img.addEventListener("transitionend",this,{once:!0}),this.img.style.opacity="1",setTimeout(()=>this.cleanup(),340)))}init(){if(this.hasAttribute("defined")&&this.cleanup(),!this.src)this.src=this.img.src;else if(this.src!==this.img.src){this.setAttribute("preview",this.img.src);let r=this.querySelector("div");r||(r=document.createElement("div"),this.prepend(r)),r.style.backgroundImage=`url(${this.img.src})`,this.img.style.opacity="0",B?this.load():j(this)}this.setAttribute("defined","")}cleanup(){var r;this.img.removeAttribute("style"),(r=this.querySelector("div"))==null||r.remove()}};var W=/android/i.test(navigator.userAgent);var S=n=>document.documentElement.classList.add(n),V=()=>{let n=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),r=n?Number.parseInt(n[1],10):0;r&&r<=12&&S("ios12-"),d2Env.isApp&&(window.screen.width/window.screen.height).toPrecision(3)==="0.462"&&S("bottom-inset"),W&&S("android")};var L=[],z=n=>{let r=n;do if(r.nextSibling)return!0;while(r=r.parentNode);return!1},U=new MutationObserver(n=>{for(let{addedNodes:r}of n)for(let o of r)if(o.nodeType===1){for(let a of L)if(o.matches(a[0]))if(!a[2]||z(o))a[1](o);else{let l=new MutationObserver(()=>{z(o)&&(l.disconnect(),a[1](o))});l.observe(o.parentNode,{childList:!0,subtree:!0})}o.tagName==="FOOTER"&&U.disconnect()}});U.observe(document.documentElement,{childList:!0,subtree:!0});window.__run=n=>typeof n=="function"?__run.q.push(n):(...r)=>{__run.q.push([n,r])};window.__run.q=[];window.d2=window.d2||{};window.d2.brandingRender=n=>__run("d2.brandingInternal")(n);if(d2Env.isDesktop){let n=localStorage.getItem("mainNavPreferences");if(n){let r=n.split(",");L.push(['.c-nav-list[data-id^="section-"]',o=>{let a=o.closest('[data-slot~="nav.section"]');if(a){let l=r.includes(o.dataset.id.replace("section-",""));a.classList.toggle("is-active",l),o.style.display=l?"":"none"}},!1])}}L.push(['[data-role~="makeslist"]',n=>{if(n.classList.contains("is-parked")){let r=[...n.children],o=n.classList.contains("is-open");n.classList.add("is-open");let a=n.offsetWidth,l=r[0].offsetHeight,d=r.map(h=>h.offsetWidth),c=r.map(h=>o||h.classList.contains("is-important")),T=d.filter((h,g)=>c[g]),w=P(T,a);n.style.maxHeight=`${w*l}px`,n.classList.toggle("is-open",o),n.classList.remove("is-parked")}},!0]);customElements.define("x-img",O);customElements.define("fit-text",M);V();L.push(['[data-role~="dv"]',n=>{let r=()=>{n.getBoundingClientRect().height>0&&(o.disconnect(),n.classList.remove("is-off"))},o=window.ResizeObserver?new ResizeObserver(r):new MutationObserver(r);o.observe(n,window.ResizeObserver?{}:{childList:!0,subtree:!0,attributes:!0}),r()},!1]);if(d2Env.themes){let n="theme",r=window.matchMedia("(prefers-color-scheme:dark)"),o,a,l=()=>{d2Env.isApp||(a==="system"?localStorage.removeItem(n):localStorage.setItem(n,a))},d=()=>{o&&(o.classList.toggle("dark",a==="dark"),o.classList.toggle("light",a==="light"),o.classList.toggle("system",a==="system"));let w=a==="system"?r.matches?"dark":"light":a;document.documentElement.classList.toggle("dark",w==="dark"),document.documentElement.classList.toggle("light",w==="light")},c=()=>{var w;a=d2Env.isApp?"system":(w=localStorage.getItem(n))!=null?w:"system",l(),d()},T=w=>{var E;if(o)return;let h=((E=document.documentElement.getAttribute("lang"))!=null?E:"ru").startsWith("ru"),g=[["light","Светлая тема","Light theme"],["dark","Тёмная тема","Dark theme"],["system","Как в системе","System theme"]];o=document.createElement("details"),d2Env.userId||(o.open=!0),o.className="c-theme-switch",o.innerHTML=`<summary class="${d2Env.isMobile?"c-nav-block__item":"c-top-dropdown__link"}">${w.textContent}</summary>`;for(let b of g){let m=document.createElement("button");Object.assign(m,{type:"button",className:`r-button-unstyled ${d2Env.isMobile?"c-nav-block__item":"c-top-dropdown__link"} c-theme-switch__item`,value:b[0],textContent:h?b[1]:b[2]}),o.append(m)}w.replaceWith(o),o.addEventListener("click",b=>{let m=b.target;if(m.value){a=m.value,l(),d();let y=document.querySelector('[data-slot~="top-menu.button"]')||document.querySelector('[data-role~="top-menu"]');y&&y.click(),d2Env.userId&&(o.open=!1)}}),d()};c(),r.addEventListener?r.addEventListener("change",c):r.addListener(c),d2Env.isApp||(window.addEventListener("storage",w=>{w.key===n&&c()}),L.push(['a[href="drive://themes/"]',T,!1]))}if(d2Env.isMobile){let n=window.location.hash;n.startsWith("#a")&&L.push([n,()=>{setTimeout(()=>{var r;(r=document.querySelector(n))==null||r.scrollIntoView({behavior:"smooth",block:"start"})},50)},!1])}})();
