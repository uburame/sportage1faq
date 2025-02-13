/*! For licenses information, see /assets/js/LICENSES.txt */
"use strict";(()=>{var w={};try{w.EventTarget=new EventTarget().constructor}catch{(function(t,s){var i=t.create,n=t.defineProperty,o=d.prototype;u(o,"addEventListener",function(r,a,h){for(var m=s.get(this),c=m[r]||(m[r]=[]),g=0,_=c.length;g<_;g++)if(c[g].listener===a)return;c.push({target:this,listener:a,options:h})}),u(o,"dispatchEvent",function(r){var a=s.get(this),h=a[r.type];return h&&(u(r,"target",this),u(r,"currentTarget",this),h.slice(0).some(l,r),delete r.currentTarget,delete r.target),!0}),u(o,"removeEventListener",function(r,a){for(var h=s.get(this),m=h[r]||(h[r]=[]),c=0,g=m.length;c<g;c++)if(m[c].listener===a){m.splice(c,1);return}}),w.EventTarget=d;function d(){"use strict";s.set(this,i(null))}function u(r,a,h){n(r,a,{configurable:!0,writable:!0,value:h})}function l(r){var a=r.options;return a&&a.once&&r.target.removeEventListener(this.type,r.listener),typeof r.listener=="function"?r.listener.call(r.target,this):r.listener.handleEvent(this),this._stopImmediatePropagationFlag}})(Object,new WeakMap)}var L=w.EventTarget;window.EventTarget=L;window.globalThis=window.globalThis||window;var M=(e,t)=>{let s=e.length,i,n=1;for(;!i;)if(s%n===1)n++;else{i=!0;for(let o=0,d=0;o*n<s;o++)if(d+=Math.max(...e.slice(o*n,(o+1)*n)),d>t){i=!1,n++;break}}return n};var f=class extends HTMLElement{constructor(){super(),this.wrapper=document.createElement("div"),this.wrapper.append(document.createElement("slot")),this.attachShadow({mode:"open"}),this.shadowRoot.append(this.wrapper),this.observer=new MutationObserver(()=>this.throttledFit())}connectedCallback(){this.observer.observe(this,{subtree:!0,characterData:!0}),this.throttledFit()}static get observedAttributes(){return["behavior"]}get behavior(){return this.getAttribute("behavior")||""}set behavior(t){this.setAttribute("behavior",t||"")}attributeChangedCallback(){this.throttledFit()}throttledFit(){requestAnimationFrame(()=>this.fit())}fit(){let t=Number.parseFloat(getComputedStyle(this).getPropertyValue("font-size"));if(Number.isNaN(t))return;let{clientWidth:s}=this,i=this.behavior==="grow"?t:9,n=this.behavior==="shrink"?t:100;for(n++;n-i>1;){let o=Math.floor((i+n)/2);this.wrapper.style.fontSize=`${o}px`,this.scrollWidth>s?n=o:i=o}this.wrapper.style.fontSize=`${i}px`}};var S="loading"in HTMLImageElement.prototype,T=new Set,b,A=e=>{b||(b=new IntersectionObserver(t=>{for(let s of t)if(s.isIntersecting){let i=s.target;b.unobserve(i),i.load()}},{rootMargin:"200px 0px"})),b.observe(e)},v=class extends HTMLElement{connectedCallback(){if(this.img=this.querySelector("img"),this.img)this.init();else{let t=new MutationObserver(()=>{this.img=this.querySelector("img"),this.img&&(t.disconnect(),this.init())});t.observe(this,{childList:!0})}}static get observedAttributes(){return["src"]}get color(){return this.style.getPropertyValue("--color").trim()}get preview(){return this.src||""}get data(){return{element:this.img,url:this.src||this.img.src,width:Number(this.getAttribute("width")),height:Number(this.getAttribute("height")),color:this.color}}get src(){return this.getAttribute("src")||""}set src(t){this.setAttribute("src",t)}attributeChangedCallback(t,s,i){this.hasAttribute("defined")&&t==="src"&&i&&this.img&&(this.img.src=i)}load(){this.img.offsetWidth,this.img.style.transition="opacity 0.3s ease-in",this.img.addEventListener("load",this,{once:!0,passive:!0}),this.img.addEventListener("error",this,{once:!0,passive:!0}),this.img.addEventListener("abort",this,{once:!0,passive:!0}),this.img.src=this.src}handleEvent(t){t.type==="transitionend"?this.cleanup():(T.add(this.img.src),t.type!=="error"&&t.type!=="abort"&&(this.img.addEventListener("transitionend",this,{once:!0}),this.img.style.opacity="1",setTimeout(()=>this.cleanup(),340)))}init(){this.cleanup(),this.src||(this.src=this.img.src),(d2Env.isMobile||this.src!==this.img.src)&&(this.img.style.opacity=T.has(this.src)?"1":"0",S?this.load():A(this)),this.setAttribute("defined","")}cleanup(){this.img.removeAttribute("style")}};var k=/android/i.test(navigator.userAgent);var y=e=>document.documentElement.classList.add(e),H=()=>{let e=/OS (\d+)_(\d+)_?(\d+)?/.exec(navigator.appVersion),t=e?Number.parseInt(e[1],10):0;t&&t<=12&&y("ios12-"),d2Env.isApp&&(window.screen.width/window.screen.height).toPrecision(3)==="0.462"&&y("bottom-inset"),k&&y("android")};var p=[],x=e=>{let t=e;do if(t.nextSibling)return!0;while(t=t.parentNode);return!1},I=new MutationObserver(e=>{for(let{addedNodes:t}of e)for(let s of t)if(s.nodeType===1){for(let i of p)if(s.matches(i[0]))if(!i[2]||x(s))i[1](s);else{let n=new MutationObserver(()=>{x(s)&&(n.disconnect(),i[1](s))});n.observe(s.parentNode,{childList:!0,subtree:!0})}s.tagName==="FOOTER"&&I.disconnect()}});I.observe(document.documentElement,{childList:!0,subtree:!0});window.__run=e=>typeof e=="function"?__run.q.push(e):(...t)=>{__run.q.push([e,t])};window.__run.q=[];window.d2=window.d2||{};window.d2.brandingRender=e=>__run("d2.brandingInternal")(e);if(d2Env.isDesktop){let e=localStorage.getItem("mainNavPreferences");if(e){let t=e.split(",");p.push(['.c-nav-list[data-id^="section-"]',s=>{let i=s.closest('[data-slot~="nav.section"]');if(i){let n=t.includes(s.dataset.id.replace("section-",""));i.classList.toggle("is-active",n),s.style.display=n?"":"none"}},!1])}}p.push(['[data-role~="makeslist"]',e=>{if(e.classList.contains("is-parked")){let t=[...e.children],s=e.classList.contains("is-open");e.classList.add("is-open");let i=e.offsetWidth,n=t[0].offsetHeight,o=t.map(r=>r.offsetWidth),d=t.map(r=>s||r.classList.contains("is-important")),u=o.filter((r,a)=>d[a]),l=M(u,i);e.style.maxHeight=`${l*n}px`,e.classList.toggle("is-open",s),e.classList.remove("is-parked")}},!0]);customElements.define("x-img",v);customElements.define("fit-text",f);H();p.push(['[data-role~="dv"]',e=>{let t=()=>{e.getBoundingClientRect().height>0&&(s.disconnect(),e.classList.remove("is-off"))},s=window.ResizeObserver?new ResizeObserver(t):new MutationObserver(t);s.observe(e,window.ResizeObserver?{}:{childList:!0,subtree:!0,attributes:!0}),t()},!1]);if(d2Env.themes){let e="theme",t=window.matchMedia("(prefers-color-scheme:dark)"),s,i,n=()=>{d2Env.isApp||(i==="system"?localStorage.removeItem(e):localStorage.setItem(e,i))},o=()=>{s&&(s.classList.toggle("dark",i==="dark"),s.classList.toggle("light",i==="light"),s.classList.toggle("system",i==="system"));let l=i==="system"?t.matches?"dark":"light":i;document.documentElement.classList.toggle("dark",l==="dark"),document.documentElement.classList.toggle("light",l==="light")},d=()=>{var l;i=d2Env.isApp?"system":(l=localStorage.getItem(e))!=null?l:"system",n(),o()},u=l=>{var h;if(s)return;let r=((h=document.documentElement.getAttribute("lang"))!=null?h:"ru").startsWith("ru"),a=[["light","Светлая тема","Light theme"],["dark","Тёмная тема","Dark theme"],["system","Как в системе","System theme"]];s=document.createElement("details"),d2Env.userId||(s.open=!0),s.className="c-theme-switch",s.innerHTML=`<summary class="${d2Env.isMobile?"c-nav-block__item":"c-top-dropdown__link"}">${l.textContent}</summary>`;for(let m of a){let c=document.createElement("button");Object.assign(c,{type:"button",className:`r-button-unstyled ${d2Env.isMobile?"c-nav-block__item":"c-top-dropdown__link"} c-theme-switch__item`,value:m[0],textContent:r?m[1]:m[2]}),s.append(c)}l.replaceWith(s),s.addEventListener("click",m=>{let c=m.target;if(c.value){i=c.value,n(),o();let g=document.querySelector('[data-slot~="top-menu.button"]')||document.querySelector('[data-role~="top-menu"]');g&&g.click(),d2Env.userId&&(s.open=!1)}}),o()};d(),t.addEventListener?t.addEventListener("change",d):t.addListener(d),d2Env.isApp||(window.addEventListener("storage",l=>{l.key===e&&d()}),p.push(['a[href="drive://themes/"]',u,!1]))}if(d2Env.isMobile){let e=window.location.hash;e.startsWith("#a")&&p.push([e,()=>{setTimeout(()=>{var t;(t=document.querySelector(e))==null||t.scrollIntoView({behavior:"smooth",block:"start"})},50)},!1])}var E,O=()=>(E||(E=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting&&(E.unobserve(t.target),delete t.target.dataset.role,"YaHeaderBiddingSettings"in window)){let s=t.target.nextElementSibling;s.removeAttribute("type"),s.replaceWith(s)}},{rootMargin:"800px 0px"})),E);p.push(['[data-role="dv-extra"]',e=>{O().observe(e)},!1]);})();
