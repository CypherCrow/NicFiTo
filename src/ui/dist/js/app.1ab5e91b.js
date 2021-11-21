(function(t){function e(e){for(var o,i,u=e[0],a=e[1],l=e[2],s=0,b=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);d&&d(e);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,u=1;u<n.length;u++){var a=n[u];0!==r[a]&&(o=!1)}o&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},c=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0faa":function(t,e,n){"use strict";n("b152")},"48dd":function(t,e,n){},5063:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("6c02");function c(t,e,n,r,c,i){var u=Object(o["v"])("Header");return Object(o["p"])(),Object(o["c"])("div",null,[Object(o["g"])(u),Object(o["d"])("p",null,Object(o["x"])(c.msg),1)])}n("d3b7");var i=function(t){return Object(o["s"])("data-v-41fdc480"),t=t(),Object(o["q"])(),t},u={id:"header"},a=i((function(){return Object(o["d"])("div",{id:"logo"},[Object(o["d"])("p",null,"NicFiTo")],-1)})),l={id:"nav"},d=Object(o["f"])("Home"),s=Object(o["f"])("Books"),b=i((function(){return Object(o["d"])("li",null,"Comics",-1)})),p=i((function(){return Object(o["d"])("li",null,"TV Series",-1)})),f=i((function(){return Object(o["d"])("li",null,"Movies",-1)}));function O(t,e,n,r,c,i){var O=Object(o["v"])("router-link");return Object(o["p"])(),Object(o["c"])("div",u,[a,Object(o["d"])("div",l,[Object(o["d"])("ul",null,[Object(o["d"])("li",null,[Object(o["g"])(O,{to:"/"},{default:Object(o["B"])((function(){return[d]})),_:1})]),Object(o["d"])("li",null,[Object(o["g"])(O,{to:"/books"},{default:Object(o["B"])((function(){return[s]})),_:1})]),b,p,f])])])}var j={name:"Header"},v=(n("79a5"),n("6b0d")),m=n.n(v);const h=m()(j,[["render",O],["__scopeId","data-v-41fdc480"]]);var y=h,g={name:"Home",components:{Header:y},data:function(){return{msg:""}},mounted:function(){var t=this;fetch("/api/messages/hello").then((function(t){return t.text()})).then((function(e){t.msg=e}))}};const P=m()(g,[["render",c]]);var S=P,w={id:"booksContent"},k={id:"productsSection"},x={id:"sidebar"};function _(t,e,n,r,c,i){var u=Object(o["v"])("Header"),a=Object(o["v"])("ProductCard");return Object(o["p"])(),Object(o["c"])("div",null,[Object(o["g"])(u),Object(o["d"])("div",w,[Object(o["d"])("div",k,[Object(o["g"])(a,{title:"Something",text:"something something",price:"273.12 Theta"})]),Object(o["d"])("div",x,[Object(o["d"])("button",{onClick:e[0]||(e[0]=function(){return i.create&&i.create.apply(i,arguments)})},"New Book")])])])}var C={id:"productCard"},H={id:"cardTitle"},B={id:"cardContent"};function N(t,e,n,r,c,i){return Object(o["p"])(),Object(o["c"])("div",C,[Object(o["d"])("div",H,[Object(o["d"])("p",null,Object(o["x"])(n.title),1)]),Object(o["d"])("div",B,[Object(o["d"])("p",null,Object(o["x"])(n.text),1),Object(o["d"])("p",null,Object(o["x"])(n.price),1)])])}var T={name:"ProductCard",props:{title:String,text:String,price:String}};n("0faa");const M=m()(T,[["render",N],["__scopeId","data-v-274a37b6"]]);var U=M,V={name:"Books",components:{Header:y,ProductCard:U},methods:{create:function(){this.$router.push({path:"/books/new"})}}};n("686a");const z=m()(V,[["render",_],["__scopeId","data-v-4465fb0a"]]);var F=z,I=Object(o["d"])("header",null,"New Book/Story",-1),J=Object(o["d"])("label",{for:"title"},"Title",-1),q=Object(o["d"])("label",{for:"synopsis"},"Synopsis (a short summary)",-1),A={id:"lastTwoFields"},D=Object(o["e"])('<label for="type">Type</label><select id="type" name="type"><option value="novel">Novel</option><option value="novella">Novella</option><option value="novellette">Novellette</option><option value="poem">Poem</option><option value="short_story">Short Story</option></select><label for="startPrice">Starting Price</label>',3),E=Object(o["d"])("input",{type:"submit"},null,-1);function $(t,e,n,r,c,i){var u=Object(o["v"])("Header");return Object(o["p"])(),Object(o["c"])("div",null,[Object(o["g"])(u),I,Object(o["d"])("form",{id:"newProductForm",onSubmit:e[3]||(e[3]=function(){return i.submit&&i.submit.apply(i,arguments)})},[J,Object(o["C"])(Object(o["d"])("input",{type:"text",id:"title",name:"title","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.title=t})},null,512),[[o["z"],c.title]]),q,Object(o["C"])(Object(o["d"])("input",{type:"textarea",id:"synopsis",name:"synopsis","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.synopsis=t})},null,512),[[o["z"],c.synopsis]]),Object(o["d"])("div",A,[D,Object(o["C"])(Object(o["d"])("input",{type:"number",id:"startPrice",name:"startPrice",min:"0","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.startingPrice=t})},null,512),[[o["z"],c.startingPrice]])]),E],32),Object(o["d"])("div",null,Object(o["x"])(c.result),1)])}var G={name:"NewBook",components:{Header:y},data:function(){return{title:"",synopsis:"",startingPrice:0,result:"Nothing yet :("}},methods:{submit:function(t){t.preventDefault(),this.title&&this.synopsis&&this.startingPrice&&(this.result="SUCCESS! :)")}}};const K=m()(G,[["render",$]]);var L=K,Q=[{path:"/",name:"Home",component:S},{path:"/books",name:"Books",component:F},{path:"/books/new",name:"New Book",component:L}],R=Object(r["a"])({history:Object(r["b"])(),routes:Q}),W=R,X={id:"app"};function Y(t,e,n,r,c,i){var u=Object(o["v"])("router-view");return Object(o["p"])(),Object(o["c"])("div",X,[Object(o["g"])(u)])}var Z={name:"App"};n("9acf");const tt=m()(Z,[["render",Y]]);var et=tt;Object(o["b"])(et).use(W).mount("#app")},"686a":function(t,e,n){"use strict";n("d8e7")},"79a5":function(t,e,n){"use strict";n("5063")},"9acf":function(t,e,n){"use strict";n("48dd")},b152:function(t,e,n){},d8e7:function(t,e,n){}});
//# sourceMappingURL=app.1ab5e91b.js.map