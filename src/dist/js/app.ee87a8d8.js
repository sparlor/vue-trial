(function(e){function t(t){for(var n,a,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)a=o[d],i[a]&&f.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={app:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("1d50")},"1c7d":function(e,t,r){"use strict";var n=r("6f40"),i=r.n(n);i.a},"1d50":function(e,t,r){"use strict";r.r(t);r("1e97"),r("a6de"),r("b8cb"),r("252f");var n=r("e832"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("navigation"),r("Welcome"),r("Services")],1)},s=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navbar",attrs:{id:"top"}},[r("nav",{staticClass:"logo"},[r("a",{attrs:{href:"/"}},[e._v("Parlor Web Design")])]),r("nav",{staticClass:"main-nav"},[r("a",{attrs:{href:"/"}},[e._v("Home")]),r("a",{attrs:{href:"/"}},[e._v("About")]),r("a",{attrs:{href:"/"}},[e._v("Products")]),r("a",{attrs:{href:"/"}},[e._v("Contact")])])])}],c={name:"navigation",methods:{scrollCheck:function(){var e=document.querySelector(".navbar");window.pageYOffset>100?e.classList.add("scroll"):e.classList.remove("scroll")}},mounted:function(){document.addEventListener("scroll",this.scrollCheck)}},l=c,u=(r("b313"),r("a6c2")),d=Object(u["a"])(l,a,o,!1,null,"f45c017a",null),f=d.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"welcome"},[r("h1",[e._v("Look Better than the Other Guy.")])])}],m={name:"Welcome"},h=m,b=(r("1c7d"),Object(u["a"])(h,v,p,!1,null,"3645a667",null)),y=b.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"services"},[r("h1",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}]},[e._v("Take your Business to the Next Level.")]),r("div",{staticClass:"serv-list"},e._l(e.services,function(t){return r("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],key:t.index,staticClass:"item"},[r("p",{attrs:{id:"one"}},[e._v(e._s(t.title))]),r("p",{attrs:{id:"two"}},[e._v(e._s(t.second))]),r("p",{attrs:{id:"description"}},[e._v(" "+e._s(t.description))])])}),0)])},g=[],w={name:"Services",data:function(){return{services:[{title:"Organic",second:"SEO",description:"Generate traffic to your site with organic search results. Increase traffic, increase revenue."},{title:"Affordable",second:"Hosting",description:"Bring hosting costs down with reliable hosting infrastructure. Reduce Downtime and keep your site up for every eye to see."},{title:"Reliable",second:"Sevice",description:"Call or email us anytime for any need. We actively monitor your site to ensure your customers satisfaction."},{title:"Custom",second:"Design",description:"By using our designers and web developers, beat the competition by having a unique and updated website."},{title:"Mobile",second:"Apps",description:"Progressive Web Applications are an affordable and reliable way to reach your clients on mobile devices."},{title:"Measurable",second:"Results",description:"Measure key performance indicators to optimize your needs. Why pay for things you don't use?"}]}}},O=w,x=(r("2131"),Object(u["a"])(O,_,g,!1,null,"1e494c98",null)),j=x.exports,C={name:"app",components:{navigation:f,Welcome:y,Services:j}},S=C,k=(r("e5cd"),Object(u["a"])(S,i,s,!1,null,null,null)),P=k.exports,E=r("51da"),M=r.n(E);r("b9ec");n["a"].config.productionTip=!1,n["a"].use(M.a,{class:"v-scroll-reveal",duration:2e3,scale:1,distance:"50px",mobile:!1}),new n["a"]({render:function(e){return e(P)}}).$mount("#app")},2131:function(e,t,r){"use strict";var n=r("4c8a"),i=r.n(n);i.a},"4c8a":function(e,t,r){},"6c28":function(e,t,r){},"6f40":function(e,t,r){},b313:function(e,t,r){"use strict";var n=r("6c28"),i=r.n(n);i.a},d672:function(e,t,r){},e5cd:function(e,t,r){"use strict";var n=r("d672"),i=r.n(n);i.a}});
//# sourceMappingURL=app.ee87a8d8.js.map