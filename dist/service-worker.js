if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}})).then(e=>{const r=n(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-ec4d79a7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./index.html",revision:"c0df355504a007d6581da4ea6e223e55"},{url:"01fd274f24383af2c36af118a36bd4b4.png",revision:"01fd274f24383af2c36af118a36bd4b4"},{url:"images/.DS_Store",revision:"194577a7e20bdcc7afbb718f502c134c"},{url:"images/Travel_Planner_logo.jpg",revision:"9d193a29276eb359e9e525084c7fa8cd"},{url:"main.css",revision:"5ae79fa42186123b88c7e3f27f409392"},{url:"main.js",revision:"4669c830bda5a43ffa418f5a36d82b8e"}],{})}));