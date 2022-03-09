(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function t(a,b){if(b)a:{for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.G=b.prototype}
function pa(){this.o=!1;this.i=null;this.m=void 0;this.h=1;this.C=this.l=0;this.j=null}
function qa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
pa.prototype.u=function(a){this.m=a};
function ra(a,b){a.j={wa:b,Ua:!0};a.h=a.l||a.C}
pa.prototype["return"]=function(a){this.j={"return":a};this.h=this.C};
function sa(a,b,c){a.h=c;return{value:b}}
function ta(a){a.l=0;var b=a.j.wa;a.j=null;return b}
function ua(a){this.h=new pa;this.i=a}
function va(a,b){qa(a.h);var c=a.h.i;if(c)return wa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h["return"]);
a.h["return"](b);return ya(a)}
function wa(a,b,c,d){try{var e=b.call(a.h.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.i=null,ra(a.h,g),ya(a)}a.h.i=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.m=void 0,ra(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ua)throw b.wa;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){qa(a.h);a.h.i?b=wa(a,a.h.i.next,b,a.h.u):(a.h.u(b),b=ya(a));return b};
this["throw"]=function(b){qa(a.h);a.h.i?b=wa(a,a.h.i["throw"],b,a.h.u):(ra(a.h,b),b=ya(a));return b};
this["return"]=function(b){return va(a,b)};
this[Symbol.iterator]=function(){return this}}
function Aa(a,b){var c=new za(new ua(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
function Ca(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ca(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Da});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.I),reject:g(this.m)}};
b.prototype.I=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.H(g):this.o(g)}};
b.prototype.H=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.S(h,g):this.o(g)};
b.prototype.m=function(g){this.C(2,g)};
b.prototype.o=function(g){this.C(1,g)};
b.prototype.C=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.J();this.B()};
b.prototype.J=function(){var g=this;e(function(){if(g.F()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.R=function(g){var h=this.l();g.fa(h.resolve,h.reject)};
b.prototype.S=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(w){try{l(q(w))}catch(y){n(y)}}:r}
var l,n,p=new b(function(q,r){l=q;n=r});
this.fa(k(g,l),k(h,n));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.fa=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).fa(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(w){return function(y){q[w]=y;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).fa(p(q.length-1),n),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push([d,b[d]]);return c}});
function Ea(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ea(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ea(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ea(this,function(b,c){return c})}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ca(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ca(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Ca(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)};
b.prototype["delete"]=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.i[l];if(n&&Ca(h.i,l))for(var p=0;p<n.length;p++){var q=n[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:p,D:q}}return{id:l,list:n,index:-1,D:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.D?l.D.value=k:(l.D={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.D),this.h.previous.next=l.D,this.h.previous=l.D,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.D&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.D.previous.next=h.D.next,h.D.next.previous=h.D.previous,h.D.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).D};
e.prototype.get=function(h){return(h=d(this,h).D)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype["delete"]=function(c){c=this.h["delete"](c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push(b[d]);return c}});
var x=this||self;function z(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Fa(a){if(a&&a!=x)return Ga(a.document);null===Ha&&(Ha=Ga(x.document));return Ha}
var Ia=/^[\w+/_-]+[=]{0,2}$/,Ha=null;function Ga(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ia.test(a)?a:""}
function A(a,b){for(var c=a.split("."),d=b||x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ja(){}
function Ka(a){a.oa=void 0;a.getInstance=function(){return a.oa?a.oa:a.oa=new a}}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function B(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Qa:C=Ra;return C.apply(null,arguments)}
function Sa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function E(){return Date.now()}
function Ta(a,b){z(a,b,void 0)}
function F(a,b){function c(){}
c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.tk=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ua(a){return a}
;function Va(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Va);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(Va,Error);Va.prototype.name="CustomError";function Wa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Xa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},$a=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ab=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function bb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function cb(a,b){var c=Ya(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function fb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function gb(a,b){var c=Ma(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a){for(var b in a)return!1;return!0}
function kb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){if(void 0===qb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ua,createScript:Ua,createScriptURL:Ua})}catch(c){x.console&&x.console.error(c.message)}qb=a}else qb=a}return qb}
;function sb(a,b){this.h=b===tb?a:""}
m=sb.prototype;m.U=!0;m.T=function(){return this.h.toString()};
m.na=!0;m.ka=function(){return 1};
m.toString=function(){return this.h+""};
function ub(a){if(a instanceof sb&&a.constructor===sb)return a.h;La(a);return"type_error:TrustedResourceUrl"}
var tb={};var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function wb(a,b){if(b)a=a.replace(xb,"&amp;").replace(yb,"&lt;").replace(zb,"&gt;").replace(Ab,"&quot;").replace(Bb,"&#39;").replace(Cb,"&#0;");else{if(!Db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(yb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(zb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ab,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Cb,"&#0;"))}return a}
var xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;function Eb(a,b){return a<b?-1:a>b?1:0}
;function H(a,b){this.h=b===Fb?a:""}
m=H.prototype;m.U=!0;m.T=function(){return this.h.toString()};
m.na=!0;m.ka=function(){return 1};
m.toString=function(){return this.h.toString()};
function Gb(a){if(a instanceof H&&a.constructor===H)return a.h;La(a);return"type_error:SafeUrl"}
var Hb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Ib=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Jb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Kb(a){if(a instanceof H)return a;a="object"==typeof a&&a.U?a.T():String(a);Jb.test(a)||(a="about:invalid#zClosurez");return new H(a,Fb)}
var Fb={},Lb=new H("about:invalid#zClosurez",Fb);var Mb;a:{var Nb=x.navigator;if(Nb){var Ob=Nb.userAgent;if(Ob){Mb=Ob;break a}}Mb=""}function I(a){return-1!=Mb.indexOf(a)}
;function Pb(a,b,c){this.h=c===Qb?a:"";this.i=b}
m=Pb.prototype;m.na=!0;m.ka=function(){return this.i};
m.U=!0;m.T=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Qb={};function Rb(a,b){var c=rb();c=c?c.createHTML(a):a;return new Pb(c,b,Qb)}
;function Sb(a,b){var c=b instanceof H?b:Kb(b);a.href=Gb(c)}
function Tb(a,b){a.src=ub(b);var c=Fa(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Ub(a){return a=wb(a,void 0)}
function Vb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Wb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xb(a){return a?decodeURI(a):a}
function Yb(a){return Xb(a.match(Wb)[3]||null)}
function Zb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Zb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function $b(a){var b=[],c;for(c in a)Zb(c,a[c],b);return b.join("&")}
function ac(a,b){var c=$b(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var bc=/#|$/;function cc(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function dc(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function ec(a){ec[" "](a);return a}
ec[" "]=Ja;var fc=I("Opera"),gc=I("Trident")||I("MSIE"),hc=I("Edge"),ic=I("Gecko")&&!(-1!=Mb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),jc=-1!=Mb.toLowerCase().indexOf("webkit")&&!I("Edge");function kc(){var a=x.document;return a?a.documentMode:void 0}
var lc;a:{var mc="",nc=function(){var a=Mb;if(ic)return/rv:([^\);]+)(\)|;)/.exec(a);if(hc)return/Edge\/([\d\.]+)/.exec(a);if(gc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jc)return/WebKit\/(\S+)/.exec(a);if(fc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nc&&(mc=nc?nc[1]:"");if(gc){var pc=kc();if(null!=pc&&pc>parseFloat(mc)){lc=String(pc);break a}}lc=mc}var qc=lc,rc={},sc;if(x.document&&gc){var tc=kc();sc=tc?tc:parseInt(qc,10)||void 0}else sc=void 0;var uc=sc;var vc=I("Firefox")||I("FxiOS"),wc=dc()||I("iPod"),xc=I("iPad"),yc=I("Safari")&&!((I("Chrome")||I("CriOS"))&&!I("Edge")||I("Coast")||I("Opera")||I("Edge")||I("Edg/")||I("OPR")||I("Firefox")||I("FxiOS")||I("Silk")||I("Android"))&&!(dc()||I("iPad")||I("iPod"));var zc={},Ac=null;
function Bc(a){var b=3;Ma(a);void 0===b&&(b=0);if(!Ac){Ac={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));zc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Ac[h]&&(Ac[h]=g)}}}b=zc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var J=window;var Cc=!gc||9<=Number(uc);function Dc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Dc.prototype;m.clone=function(){return new Dc(this.x,this.y)};
m.equals=function(a){return a instanceof Dc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ec(a,b){this.width=a;this.height=b}
m=Ec.prototype;m.clone=function(){return new Ec(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Fc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Gc(a,b){fb(b,function(c,d){c&&"object"==typeof c&&c.U&&(c=c.T());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Hc.hasOwnProperty(d)?a.setAttribute(Hc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Hc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Ic(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Cc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ub(g.name),'"');if(g.type){f.push(' type="',Ub(g.type),'"');var h={};pb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Jc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Gc(f,g));2<d.length&&Kc(e,f,d);return f}
function Kc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ma(f)||B(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(B(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}G(g?db(f):f,d)}}}
function Jc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Lc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Mc(a){var b=Nc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Oc(){var a=[];Mc(function(b){a.push(b)});
return a}
var Nc={Bb:"allow-forms",Cb:"allow-modals",Db:"allow-orientation-lock",Eb:"allow-pointer-lock",Fb:"allow-popups",Gb:"allow-popups-to-escape-sandbox",Hb:"allow-presentation",Ib:"allow-same-origin",Jb:"allow-scripts",Kb:"allow-top-navigation",Lb:"allow-top-navigation-by-user-activation"},Pc=Xa(function(){return Oc()});
function Qc(){var a=Jc(document,"IFRAME"),b={};G(Pc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Rc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Sc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?Sc.apply(null,d):Rc(d)}}
;function K(){this.i=this.i;this.C=this.C}
K.prototype.i=!1;K.prototype.dispose=function(){this.i||(this.i=!0,this.A())};
function Tc(a,b){a.i?b():(a.C||(a.C=[]),a.C.push(b))}
K.prototype.A=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var Uc={};function Vc(a){if(a!==Uc)throw Error("Bad secret");}
;function Wc(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var Xc;function Yc(){}
function Zc(a,b){Vc(b);this.h=a}
v(Zc,Yc);Zc.prototype.toString=function(){return this.h.toString()};
var $c=null===(Xc=Wc())||void 0===Xc?void 0:Xc.emptyHTML;new Zc(null!==$c&&void 0!==$c?$c:"",Uc);var ad;function bd(){}
function cd(a,b){Vc(b);this.h=a}
v(cd,bd);cd.prototype.toString=function(){return this.h.toString()};
var dd=null===(ad=Wc())||void 0===ad?void 0:ad.emptyScript;new cd(null!==dd&&void 0!==dd?dd:"",Uc);function ed(){}
function fd(a,b){Vc(b);this.h=a}
v(fd,ed);fd.prototype.toString=function(){return this.h};
new fd("about:blank",Uc);new fd("about:invalid#zTSz",Uc);function gd(a){hd();var b=rb();a=b?b.createScriptURL(a):a;return new sb(a,tb)}
var hd=Ja;function id(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;function jd(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=kd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ld[c])c=ld[c];else{c=String(c);if(!ld[c]){var f=/function\s+([^\(]+)/m.exec(c);ld[c]=f?f[1]:"[Anonymous]"}c=ld[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function kd(a,b){b||(b={});b[md(a)]=!0;var c=a.stack||"",d=a.uk;d&&!b[md(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=kd(d,b));return c}
function md(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ld={};function nd(a){this.h=a||{cookie:""}}
m=nd.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Bk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.xa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{xa:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var od=new nd("undefined"==typeof document?null:document);var pd=(new Date).getTime();function qd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function rd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var q=g,r=0;64>r;r+=4)q[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(p<<1|p>>>31)&4294967295;p=e[0];var w=e[1],y=e[2],D=e[3],da=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var xa=D^w&(y^D);var oc=1518500249}else xa=w^y^D,oc=1859775393;else 60>r?(xa=w&y|D&(w|y),oc=2400959708):(xa=w^y^D,oc=3395469782);xa=((p<<5|p>>>27)&4294967295)+xa+da+oc+q[r]&4294967295;da=D;D=y;y=(w<<30|w>>>2)&4294967295;w=p;p=xa}e[0]=e[0]+p&4294967295;e[1]=e[1]+
w&4294967295;e[2]=e[2]+y&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+da&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],w=0,y=p.length;w<y;++w)r.push(p.charCodeAt(w));p=r}q||(q=p.length);r=0;if(0==l)for(;r+64<q;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<q;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<q;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],q=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var w=24;0<=w;w-=8)p[q++]=e[r]>>w&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ga:function(){for(var p=d(),q="",r=0;r<p.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return q}}}
;function sd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),td(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=td(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function td(a){var b=rd();b.update(a);return b.Ga().toLowerCase()}
;function ud(a){var b=qd(String(x.location.href)),c;(c=x.__SAPISID||x.__APISID||x.__OVERRIDE_SID)?c=!0:(c=new nd(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?x.__SAPISID:x.__APISID,c||(c=new nd(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(x.location.href);return d&&c&&b?[b,sd(qd(d),
c,a||null)].join(" "):null}return null}
;function vd(){this.i=[];this.h=-1}
vd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.i[a]!=b&&(this.i[a]=b,this.h=-1)};
vd.prototype.get=function(a){return!!this.i[a]};
function wd(a){-1==a.h&&(a.h=ab(a.i,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function xd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
xd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function yd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var zd;
function Ad(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Jc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.sa;c.sa=null;e()}};
return function(e){d.next={sa:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Bd(a){x.setTimeout(function(){throw a;},0)}
;function Cd(){this.i=this.h=null}
Cd.prototype.add=function(a,b){var c=Dd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Cd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Dd=new xd(function(){return new Ed},function(a){return a.reset()});
function Ed(){this.next=this.scope=this.h=null}
Ed.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Ed.prototype.reset=function(){this.next=this.scope=this.h=null};function Fd(a,b){Gd||Hd();Id||(Gd(),Id=!0);Jd.add(a,b)}
var Gd;function Hd(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);Gd=function(){a.then(Kd)}}else Gd=function(){var b=Kd;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!I("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(zd||(zd=Ad()),zd(b)):x.setImmediate(b)}}
var Id=!1,Jd=new Cd;function Kd(){for(var a;a=Jd.remove();){try{a.h.call(a.scope)}catch(b){Bd(b)}yd(Dd,a)}Id=!1}
;function Ld(){this.i=-1}
;function Md(){this.i=64;this.h=[];this.o=[];this.u=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
F(Md,Ld);Md.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Nd(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Md.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Nd(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Nd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Nd(this,e);f=0;break}}this.j=f;this.m+=b}};
Md.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;Nd(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Od(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Pd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Qd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Od(a).match(/\S+/g)||[],c=0<=Ya(c,b);return c}
function Rd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Qd(a,"inverted-hdpi")&&Pd(a,Za(a.classList?a.classList:Od(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Sd="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function Td(){}
Td.prototype.next=function(){throw Sd;};
Td.prototype.K=function(){return this};
function Ud(a){if(a instanceof Td)return a;if("function"==typeof a.K)return a.K(!1);if(Ma(a)){var b=0,c=new Td;c.next=function(){for(;;){if(b>=a.length)throw Sd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Vd(a,b){if(Ma(a))try{G(a,b,void 0)}catch(c){if(c!==Sd)throw c;}else{a=Ud(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Sd)throw c;}}}
function Wd(a){if(Ma(a))return db(a);a=Ud(a);var b=[];Vd(a,function(c){b.push(c)});
return b}
;function Xd(a,b){this.j={};this.h=[];this.N=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Xd)for(c=Yd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Yd(a){Zd(a);return a.h.concat()}
m=Xd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||$d;Zd(this);for(var d,e=0;d=this.h[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function $d(a,b){return a===b}
m.isEmpty=function(){return 0==this.i};
m.clear=function(){this.j={};this.N=this.i=this.h.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.j,a)?(delete this.j[a],this.i--,this.N++,this.h.length>2*this.i&&Zd(this),!0):!1};
function Zd(a){if(a.i!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.j,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.i!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.j,a)?this.j[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.j,a)||(this.i++,this.h.push(a),this.N++);this.j[a]=b};
m.forEach=function(a,b){for(var c=Yd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Xd(this)};
m.K=function(a){Zd(this);var b=0,c=this.N,d=this,e=new Td;e.next=function(){if(c!=d.N)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Sd;var f=d.h[b++];return a?f:d.j[f]};
return e};var ae=!gc||9<=Number(uc),be;
if(be=gc){var ce;if(Object.prototype.hasOwnProperty.call(rc,"9"))ce=rc["9"];else{for(var de=0,ee=vb(String(qc)).split("."),fe=vb("9").split("."),ge=Math.max(ee.length,fe.length),he=0;0==de&&he<ge;he++){var ie=ee[he]||"",je=fe[he]||"";do{var ke=/(\d*)(\D*)(.*)/.exec(ie)||["","","",""],le=/(\d*)(\D*)(.*)/.exec(je)||["","","",""];if(0==ke[0].length&&0==le[0].length)break;de=Eb(0==ke[1].length?0:parseInt(ke[1],10),0==le[1].length?0:parseInt(le[1],10))||Eb(0==ke[2].length,0==le[2].length)||Eb(ke[2],le[2]);
ie=ke[3];je=le[3]}while(0==de)}ce=rc["9"]=0<=de}be=!ce}var me=be,ne=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{x.addEventListener("test",Ja,b),x.removeEventListener("test",Ja,b)}catch(c){}return a}();function oe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.i=!1}
oe.prototype.stopPropagation=function(){this.i=!0};
oe.prototype.preventDefault=function(){this.defaultPrevented=!0};function pe(a,b){oe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
F(pe,oe);var qe={2:"touch",3:"pen",4:"mouse"};
pe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;var e=a.relatedTarget;if(e){if(ic){a:{try{ec(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:qe[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&pe.G.preventDefault.call(this)};
pe.prototype.stopPropagation=function(){pe.G.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
pe.prototype.preventDefault=function(){pe.G.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,me)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var re="closure_listenable_"+(1E6*Math.random()|0);var se=0;function te(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ga=e;this.key=++se;this.V=this.ea=!1}
function ue(a){a.V=!0;a.listener=null;a.h=null;a.src=null;a.ga=null}
;function ve(a){this.src=a;this.listeners={};this.h=0}
ve.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=we(a,b,d,e);-1<g?(b=a[g],c||(b.ea=!1)):(b=new te(b,this.src,f,!!d,e),b.ea=c,a.push(b));return b};
ve.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=we(e,b,c,d);return-1<b?(ue(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function xe(a,b){var c=b.type;c in a.listeners&&cb(a.listeners[c],b)&&(ue(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function we(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.V&&f.listener==b&&f.capture==!!c&&f.ga==d)return e}return-1}
;var ye="closure_lm_"+(1E6*Math.random()|0),ze={},Ae=0;function Be(a,b,c,d,e){if(d&&d.once)Ce(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Be(a,b[f],c,d,e);else c=De(c),a&&a[re]?Ee(a,b,c,B(d)?!!d.capture:!!d,e):Fe(a,b,c,!1,d,e)}
function Fe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=B(e)?!!e.capture:!!e,h=Ge(a);h||(a[ye]=h=new ve(a));c=h.add(b,c,d,g,f);if(!c.h){d=He();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)ne||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ie(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ae++}}
function He(){var a=Je,b=ae?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Ce(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ce(a,b[f],c,d,e);else c=De(c),a&&a[re]?a.h.add(String(b),c,!0,B(d)?!!d.capture:!!d,e):Fe(a,b,c,!0,d,e)}
function Ke(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else(d=B(d)?!!d.capture:!!d,c=De(c),a&&a[re])?a.h.remove(String(b),c,d,e):a&&(a=Ge(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=we(b,c,d,e)),(c=-1<a?b[a]:null)&&Le(c))}
function Le(a){if("number"!==typeof a&&a&&!a.V){var b=a.src;if(b&&b[re])xe(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ie(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ae--;(c=Ge(b))?(xe(c,a),0==c.h&&(c.src=null,b[ye]=null)):ue(a)}}}
function Ie(a){return a in ze?ze[a]:ze[a]="on"+a}
function Me(a,b,c,d){var e=!0;if(a=Ge(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.V&&(f=Ne(f,d),e=e&&!1!==f)}return e}
function Ne(a,b){var c=a.listener,d=a.ga||a.src;a.ea&&Le(a);return c.call(d,b)}
function Je(a,b){if(a.V)return!0;if(!ae){var c=b||A("window.event"),d=new pe(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.h;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.h=c[g];var h=Me(c[g],f,!0,d);e=e&&h}for(g=0;!d.i&&g<c.length;g++)d.h=c[g],h=Me(c[g],f,!1,d),e=e&&h}return e}return Ne(a,new pe(b,this))}
function Ge(a){a=a[ye];return a instanceof ve?a:null}
var Oe="__closure_events_fn_"+(1E9*Math.random()>>>0);function De(a){if("function"===typeof a)return a;a[Oe]||(a[Oe]=function(b){return a.handleEvent(b)});
return a[Oe]}
;function Pe(){K.call(this);this.h=new ve(this);this.B=this;this.m=null}
F(Pe,K);Pe.prototype[re]=!0;Pe.prototype.addEventListener=function(a,b,c,d){Be(this,a,b,c,d)};
Pe.prototype.removeEventListener=function(a,b,c,d){Ke(this,a,b,c,d)};
function Qe(a,b){var c=a.m;if(c){var d=[];for(var e=1;c;c=c.m)d.push(c),++e}c=a.B;e=b;var f=e.type||e;if("string"===typeof e)e=new oe(e,c);else if(e instanceof oe)e.target=e.target||c;else{var g=e;e=new oe(f,c);pb(e,g)}g=!0;if(d)for(var h=d.length-1;!e.i&&0<=h;h--){var k=e.h=d[h];g=Re(k,f,!0,e)&&g}e.i||(k=e.h=c,g=Re(k,f,!0,e)&&g,e.i||(g=Re(k,f,!1,e)&&g));if(d)for(h=0;!e.i&&h<d.length;h++)k=e.h=d[h],g=Re(k,f,!1,e)&&g}
Pe.prototype.A=function(){Pe.G.A.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ue(d[e]);delete a.listeners[c];a.h--}}this.m=null};
function Ee(a,b,c,d,e){a.h.add(String(b),c,!1,d,e)}
function Re(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.V&&g.capture==c){var h=g.listener,k=g.ga||g.src;g.ea&&xe(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Se(a){var b=[];Te(new Ue,a,b);return b.join("")}
function Ue(){}
function Te(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Te(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ve(d,c),c.push(":"),Te(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ve(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var We={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Xe=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ve(a,b){b.push('"',a.replace(Xe,function(c){var d=We[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),We[c]=d);return d}),'"')}
;function Ye(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Ze(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=Ja)try{var b=this;a.call(void 0,function(c){$e(b,2,c)},function(c){$e(b,3,c)})}catch(c){$e(this,3,c)}}
function af(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
af.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var bf=new xd(function(){return new af},function(a){a.reset()});
function cf(a,b,c){var d=bf.get();d.i=a;d.onRejected=b;d.context=c;return d}
function df(a){return new Ze(function(b,c){c(a)})}
Ze.prototype.then=function(a,b,c){return ef(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ze.prototype.$goog_Thenable=!0;function ff(a,b){return ef(a,null,b,void 0)}
Ze.prototype.cancel=function(a){if(0==this.h){var b=new gf(a);Fd(function(){hf(this,b)},this)}};
function hf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?hf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):jf(c),kf(c,e,3,b)))}a.j=null}else $e(a,3,b)}
function lf(a,b){a.i||2!=a.h&&3!=a.h||mf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function ef(a,b,c,d){var e=cf(null,null,null);e.h=new Ze(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof gf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;lf(a,e);return e.h}
Ze.prototype.B=function(a){this.h=0;$e(this,2,a)};
Ze.prototype.F=function(a){this.h=0;$e(this,3,a)};
function $e(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.B,f=a.F;if(d instanceof Ze){lf(d,cf(e||Ja,f||null,a));var g=!0}else if(Ye(d))d.then(e,f,a),g=!0;else{if(B(d))try{var h=d.then;if("function"===typeof h){nf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,mf(a),3!=b||c instanceof gf||of(a,c))}}
function nf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function mf(a){a.o||(a.o=!0,Fd(a.C,a))}
function jf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Ze.prototype.C=function(){for(var a;a=jf(this);)kf(this,a,this.h,this.u);this.o=!1};
function kf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,pf(b,c,d);else try{b.j?b.i.call(b.context):pf(b,c,d)}catch(e){qf.call(null,e)}yd(bf,b)}
function pf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function of(a,b){a.m=!0;Fd(function(){a.m&&qf.call(null,b)})}
var qf=Bd;function gf(a){Va.call(this,a)}
F(gf,Va);gf.prototype.name="cancel";function L(a){K.call(this);this.o=1;this.l=[];this.m=0;this.h=[];this.j={};this.u=!!a}
F(L,K);m=L.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
function rf(a,b,c,d){if(b=a.j[b]){var e=a.h;(b=bb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.W(b)}}
m.W=function(a){var b=this.h[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.h[a+1]=Ja):(c&&cb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.O=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];sf(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.W(c)}}return 0!=e}return!1};
function sf(a,b,c){Fd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(G(b,this.W,this),delete this.j[a])}else this.h.length=0,this.j={}};
m.A=function(){L.G.A.call(this);this.clear();this.l.length=0};function tf(a){this.h=a}
tf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Se(b))};
tf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
tf.prototype.remove=function(a){this.h.remove(a)};function uf(a){this.h=a}
F(uf,tf);function vf(a){this.data=a}
function wf(a){return void 0===a||a instanceof vf?a:new vf(a)}
uf.prototype.set=function(a,b){uf.G.set.call(this,a,wf(b))};
uf.prototype.i=function(a){a=uf.G.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
uf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function xf(a){this.h=a}
F(xf,uf);xf.prototype.set=function(a,b,c){if(b=wf(b)){if(c){if(c<E()){xf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=E()}xf.G.set.call(this,a,b)};
xf.prototype.i=function(a){var b=xf.G.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<E()||c&&c>E())xf.prototype.remove.call(this,a);else return b}};function yf(){}
;function zf(){}
F(zf,yf);zf.prototype.clear=function(){var a=Wd(this.K(!0)),b=this;G(a,function(c){b.remove(c)})};function Af(a){this.h=a}
F(Af,zf);m=Af.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.K=function(a){var b=0,c=this.h,d=new Td;d.next=function(){if(b>=c.length)throw Sd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Bf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
F(Bf,Af);function Cf(a,b){this.i=a;this.h=null;if(gc&&!(9<=Number(uc))){Df||(Df=new Xd);this.h=Df.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Df.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
F(Cf,zf);var Ef={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Df=null;function Ff(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ef[b]})}
m=Cf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Ff(a),b);Gf(this)};
m.get=function(a){a=this.h.getAttribute(Ff(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Ff(a));Gf(this)};
m.K=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Td;d.next=function(){if(b>=c.length)throw Sd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Gf(this)};
function Gf(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Hf(a,b){this.i=a;this.h=b+"::"}
F(Hf,zf);Hf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Hf.prototype.get=function(a){return this.i.get(this.h+a)};
Hf.prototype.remove=function(a){this.i.remove(this.h+a)};
Hf.prototype.K=function(a){var b=this.i.K(!0),c=this,d=new Td;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function If(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Jf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",Jf,void 0);function M(a){If(Jf,arguments)}
function N(a,b){return a in Jf?Jf[a]:b}
function Kf(){return N("PLAYER_CONFIG",{})}
;var Lf=[];function Mf(a){Lf.forEach(function(b){return b(a)})}
function Nf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Of(b),Mf(b)}}:a}
function Of(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),M("ERRORS",b))}
function Pf(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),M("ERRORS",b))}
;var Qf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Qf,void 0);function Rf(a){If(Qf,arguments)}
;function O(a){a=Sf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Tf(a,b){var c=Sf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Sf(a){var b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
;var Uf=0;z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++Uf},void 0);var Vf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Wf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Vf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Xf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Wf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Wf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Wf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=x.ytEventsEventsListeners||{};z("ytEventsEventsListeners",ib,void 0);var Yf=x.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",Yf,void 0);
function Zf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=B(e[4])&&B(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var $f=Xa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ag(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Zf(a,b,c,d);if(e)return e;e=++Yf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Wf(h);if(!Lc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Wf(h);
h.currentTarget=a;return c.call(a,h)};
g=Nf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),$f()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d];return e}
function bg(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?$f()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
;var cg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function P(a,b){"function"===typeof a&&(a=Nf(a));return window.setTimeout(a,b)}
function dg(a){window.clearTimeout(a)}
;function eg(a){this.B=a;this.h=null;this.m=0;this.u=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.H=ag(window,"mousemove",C(this.I,this));a=C(this.F,this);"function"===typeof a&&(a=Nf(a));this.J=window.setInterval(a,25)}
F(eg,K);eg.prototype.I=function(a){void 0===a.h&&Xf(a);var b=a.h;void 0===a.i&&Xf(a);this.h=new Dc(b,a.i)};
eg.prototype.F=function(){if(this.h){var a=cg();if(0!=this.m){var b=this.u,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.B();this.o=d}this.m=a;this.u=this.h;this.l=(this.l+1)%4}};
eg.prototype.A=function(){window.clearInterval(this.J);bg(this.H)};function fg(){}
function gg(a,b){return hg(a,1,b)}
;function ig(){fg.apply(this,arguments)}
v(ig,fg);function hg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):P(a,c||0)}
function jg(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):dg(a)}}
ig.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
ig.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};
Ka(ig);ig.getInstance();var kg={};
function lg(a){var b=void 0===a?{}:a;a=void 0===b.Ma?!0:b.Ma;b=void 0===b.cb?!1:b.cb;if(null==A("_lact",window)){var c=parseInt(N("LACT"),10);c=isFinite(c)?E()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&mg();ag(document,"keydown",mg);ag(document,"keyup",mg);ag(document,"mousedown",mg);ag(document,"mouseup",mg);a&&(b?ag(window,"touchmove",function(){ng("touchmove",200)},{passive:!0}):(ag(window,"resize",function(){ng("resize",200)}),ag(window,"scroll",function(){ng("scroll",200)})));
new eg(function(){ng("mouse",100)});
ag(document,"touchstart",mg,{passive:!0});ag(document,"touchend",mg,{passive:!0})}}
function ng(a,b){kg[a]||(kg[a]=!0,gg(function(){mg();kg[a]=!1},b))}
function mg(){null==A("_lact",window)&&lg();var a=E();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function og(){var a=A("_lact",window);return null==a?-1:Math.max(E()-a,0)}
;var pg=x.ytPubsubPubsubInstance||new L,qg=x.ytPubsubPubsubSubscribedKeys||{},rg=x.ytPubsubPubsubTopicToKeys||{},sg=x.ytPubsubPubsubIsSynchronous||{};function tg(a,b){var c=ug();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){qg[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{sg[a]?f():P(f,0)}catch(g){Of(g)}},void 0);
qg[d]=!0;rg[a]||(rg[a]=[]);rg[a].push(d);return d}return 0}
function vg(a){var b=ug();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete qg[c]}))}
function wg(a,b){var c=ug();c&&c.publish.apply(c,arguments)}
function xg(a){var b=ug();if(b)if(b.clear(a),a)yg(a);else for(var c in rg)yg(c)}
function ug(){return x.ytPubsubPubsubInstance}
function yg(a){rg[a]&&(a=rg[a],G(a,function(b){qg[b]&&delete qg[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.W;L.prototype.publish=L.prototype.O;L.prototype.clear=L.prototype.clear;z("ytPubsubPubsubInstance",pg,void 0);z("ytPubsubPubsubTopicToKeys",rg,void 0);z("ytPubsubPubsubIsSynchronous",sg,void 0);z("ytPubsubPubsubSubscribedKeys",qg,void 0);var zg=window,Q=zg.ytcsi&&zg.ytcsi.now?zg.ytcsi.now:zg.performance&&zg.performance.timing&&zg.performance.now&&zg.performance.timing.navigationStart?function(){return zg.performance.timing.navigationStart+zg.performance.now()}:function(){return(new Date).getTime()};var Ag=Tf("initial_gel_batch_timeout",1E3),Bg=Math.pow(2,16)-1,Cg=null,Dg=0,Eg=void 0,Fg=0,Gg=0,Hg=0,Ig=!0,Jg=x.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Jg,void 0);var Kg=x.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Kg,void 0);function Lg(a){a=void 0===a?!1:a;return new Ze(function(b){dg(Fg);dg(Gg);Gg=0;Eg&&Eg.isReady()?(Mg(b,a),Jg.clear()):(Ng(),b())})}
function Ng(){O("web_gel_timeout_cap")&&!Gg&&(Gg=P(Lg,6E4));dg(Fg);var a=N("LOGGING_BATCH_TIMEOUT",Tf("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&Ig&&(a=Ag);Fg=P(Lg,a)}
function Mg(a,b){var c=Eg;b=void 0===b?!1:b;for(var d=Math.round(Q()),e=Jg.size,f=u(Jg),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=nb({context:Og(c.h||Pg())});h.events=k;(k=Kg[g])&&Qg(h,g,k);delete Kg[g];Rg(h,d);Sg(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Dg=Math.round(Q()-d)},
onError:function(){e--;e||a()},
pb:b});Ig=!1}}
function Rg(a,b){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=N("EVENT_ID",void 0);if(c){var d=N("BATCH_CLIENT_COUNTER",void 0)||0;!d&&O("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Bg/2));d++;d>Bg&&(d=1);M("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Cg&&Dg&&O("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Cg,roundtripMs:String(Dg)});Cg=c;Dg=0}}
function Qg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Tg=x.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Tg,void 0);
function Ug(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||Q());e[a]=b;a=og();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&d.M&&(a=e.context,b=d.M,Tg[b]=b in Tg?Tg[b]+1:0,a.sequence={index:Tg[b],groupKey:b},d.Ha&&delete Tg[d.M]);d=d.L;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Kg[d.token]=a,a=d.token);d=Jg.get(a)||[];Jg.set(a,d);d.push(e);c&&(Eg=new c);c=Tf("web_logging_max_batch")||
100;e=Q();d.length>=c?Lg(!0):10<=e-Hg&&(Ng(),Hg=e)}
;function Vg(){var a=Wg;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function Xg(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var Yg=/^[\w.]*$/,Zg={q:!0,search_query:!0};function $g(a,b){for(var c=a.split(b),d={},e=0,f=c.length;e<f;e++){var g=c[e].split("=");if(1==g.length&&g[0]||2==g.length)try{var h=ah(g[0]||""),k=ah(g[1]||"");h in d?Array.isArray(d[h])?eb(d[h],k):d[h]=[d[h],k]:d[h]=k}catch(q){var l=q,n=g[0],p=String($g);l.args=[{key:n,value:g[1],query:a,method:bh==p?"unchanged":p}];Zg.hasOwnProperty(n)||("ReferenceError"===l.name?Pf(l):Of(l))}}return d}
var bh=String($g);function ch(a){var b=[];fb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function dh(a){"?"==a.charAt(0)&&(a=a.substr(1));return $g(a,"&")}
function eh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=dh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ac(a,e)+d}
function ah(a){return a&&a.match(Yg)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function fh(a){var b=gh;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=pd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(da){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?J:g;try{var h=g.history.length}catch(da){h=0}e.u_his=h;e.u_java=!!J.navigator&&"unknown"!==typeof J.navigator.javaEnabled&&!!J.navigator.javaEnabled&&J.navigator.javaEnabled();J.screen&&(e.u_h=J.screen.height,e.u_w=J.screen.width,
e.u_ah=J.screen.availHeight,e.u_aw=J.screen.availWidth,e.u_cd=J.screen.colorDepth);J.navigator&&J.navigator.plugins&&(e.u_nplug=J.navigator.plugins.length);J.navigator&&J.navigator.mimeTypes&&(e.u_nmime=J.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(da){}try{var n=h.outerWidth;var p=h.outerHeight}catch(da){}try{var q=h.innerWidth;var r=h.innerHeight}catch(da){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,n,p,q,
r];l=b.h.top;try{var w=(l||window).document,y="CSS1Compat"==w.compatMode?w.documentElement:w.body;var D=(new Ec(y.clientWidth,y.clientHeight)).round()}catch(da){D=new Ec(-12245933,-12245933)}w=D;D={};y=new vd;x.SVGElement&&x.document.createElementNS&&y.set(0);l=Qc();l["allow-top-navigation-by-user-activation"]&&y.set(1);l["allow-popups-to-escape-sandbox"]&&y.set(2);x.crypto&&x.crypto.subtle&&y.set(3);x.TextDecoder&&x.TextEncoder&&y.set(4);y=wd(y);D.bc=y;D.bih=w.height;D.biw=w.width;D.brdim=k.join();
b=b.i;b=(D.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,D.wgl=!!J.WebGLRenderingContext,D);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var gh=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return ch(fh(a))},void 0);var hh="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function ih(){if(!hh)return null;var a=hh();return"open"in a?a:null}
function jh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var kh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
lh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),mh=!1;
function nh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Wb)[1]||null,e=Yb(a);d&&e?(d=c,c=a.match(Wb),d=d.match(Wb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Yb(c)==e&&(Number(c.match(Wb)[4]||null)||null)==(Number(a.match(Wb)[4]||null)||null):!0;d=O("web_ajax_ignore_global_headers_if_set");for(var f in kh)e=N(kh[f]),!e||!c&&Yb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Yb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Yb(a))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Yb(a))b["X-YouTube-Ad-Signals"]=ch(fh(void 0));return b}
function oh(a){var b=window.location.search,c=Yb(a),d=Xb(a.match(Wb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=dh(b),f={};G(lh,function(g){e[g]&&(f[g]=e[g])});
return eh(a,f||{},!1)}
function ph(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=qh(a,b);var d=rh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&dg(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||x;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.onFinish&&b.onFinish.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.onFetchTimeout&&0<b.timeout&&(f=P(function(){e||(e=!0,dg(f),b.onFetchTimeout.call(b.context||x))},b.timeout))}else sh(a,b)}
function sh(a,b){var c=b.format||"JSON";a=qh(a,b);var d=rh(a,b),e=!1,f=th(a,function(k){if(!e){e=!0;h&&dg(h);var l=jh(k),n=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)n=uh(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||x;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=P(function(){e||(e=!0,f.abort(),dg(h),g.call(b.context||x,f))},b.timeout)}return f}
function qh(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=N("XSRF_FIELD_NAME",void 0),d=b.urlParams;d&&(d[c]&&delete d[c],a=eh(a,d||{},!0));return a}
function rh(a,b){var c=N("XSRF_FIELD_NAME",void 0),d=N("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=N("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Yb(a)&&!b.withCredentials&&Yb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=dh(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):$b(e));f=e||f&&!jb(f);!mh&&f&&
"POST"!=b.method&&(mh=!0,Of(Error("AJAX request with postData should use POST")));return e}
function uh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Pf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?vh(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=wh(g)})}d&&xh(e);
return e}
function xh(a){if(B(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Rb(a[b],null);a[c]=d}else xh(a[b])}}
function vh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function wh(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function th(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Nf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ih();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=oh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=nh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function yh(){return"INNERTUBE_API_KEY"in Jf&&"INNERTUBE_API_VERSION"in Jf}
function Pg(){return{innertubeApiKey:N("INNERTUBE_API_KEY",void 0),innertubeApiVersion:N("INNERTUBE_API_VERSION",void 0),Na:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Oa:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Qa:N("INNERTUBE_CONTEXT_HL",void 0),Pa:N("INNERTUBE_CONTEXT_GL",void 0),Ra:N("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ta:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Sa:!!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:N("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Og(a){var b={client:{hl:a.Qa,gl:a.Pa,clientName:a.Oa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Na}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=N("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=N("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=N("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&O("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);N("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=u(Object.entries(dh(N("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function zh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.sk||N("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().rk:b=ud([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
;function Ah(a){a=Object.assign({},a);delete a.Authorization;var b=ud();if(b){var c=new Md;c.update(N("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Bc(c.digest())}return a}
;function Bh(a,b,c,d){od.set(""+a,b,{xa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Ch(a){var b=new Bf;(b=b.isAvailable()?a?new Hf(b,a):b:null)||(a=new Cf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new xf(a):null;this.i=document.domain||window.location.hostname}
Ch.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,E()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Se(b))}catch(f){return}else e=escape(b);Bh(a,e,c,this.i)};
Ch.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=od.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ch.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;od.remove(""+a,"/",void 0===b?"youtube.com":b)};var Dh;function Eh(){Dh||(Dh=new Ch("yt.innertube"));return Dh}
function Fh(a,b,c,d){if(d)return null;d=Eh().get("nextId",!0)||1;var e=Eh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ah(c),requestTime:Math.round(Q())};Eh().set("nextId",d+1,86400,!0);Eh().set("requests",e,86400,!0);return d}
function Gh(a){var b=Eh().get("requests",!0)||{};delete b[a];Eh().set("requests",b,86400,!0)}
function Hh(a){var b=Eh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=Ah(zh(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),Sg(a,d.method,e,{}));delete b[c]}}Eh().set("requests",b,86400,!0)}}
;function Ih(a,b){this.version=a;this.args=b}
;function Jh(a,b){this.topic=a;this.h=b}
Jh.prototype.toString=function(){return this.topic};var Kh=A("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.W;L.prototype.publish=L.prototype.O;L.prototype.clear=L.prototype.clear;z("ytPubsub2Pubsub2Instance",Kh,void 0);var Lh=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Lh,void 0);var Mh=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Mh,void 0);var Nh=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Nh,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Oh(a,b){var c=Ph();c&&c.publish.call(c,a.toString(),a,b)}
function Qh(a){var b=Rh,c=Ph();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Lh[d])try{if(f&&b instanceof Jh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.N){var l=new h;h.N=l.version}var n=h.N}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
db(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){Of(p)}},Nh[b.toString()]?A("yt.scheduler.instance")?gg(g):P(g,0):g())});
Lh[d]=!0;Mh[b.toString()]||(Mh[b.toString()]=[]);Mh[b.toString()].push(d);return d}
function Sh(){var a=Th,b=Qh(function(c){a.apply(void 0,arguments);Uh(b)});
return b}
function Uh(a){var b=Ph();b&&("number"===typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete Lh[c]}))}
function Ph(){return A("ytPubsub2Pubsub2Instance")}
;var Vh=wc||xc;function Wh(a){var b=Mb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Xh=[],Yh=!1;function Zh(a,b){Yh||(Xh.push({type:"EVENT",eventType:a,payload:b}),10<Xh.length&&Xh.shift())}
;function R(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
v(R,Error);var $h={},ai=($h.AUTH_INVALID="No user identifier specified.",$h.EXPLICIT_ABORT="Transaction was explicitly aborted.",$h.IDB_NOT_SUPPORTED="IndexedDB is not supported.",$h.MISSING_OBJECT_STORE="Object store not created.",$h.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",$h.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",$h.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",$h.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",$h);function S(a,b,c){b=void 0===b?{}:b;c=void 0===c?ai[a]:c;R.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,S.prototype);Yh||(Xh.push({type:"ERROR",payload:this}),10<Xh.length&&Xh.shift())}
v(S,R);function bi(a){S.call(this,"MISSING_OBJECT_STORE",{xk:a},ai.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,bi.prototype)}
v(bi,S);var ci=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function di(a,b,c){if(a instanceof S||a instanceof R)return a;if("QuotaExceededError"===a.name)return new S("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(yc&&"UnknownError"===a.name)return new S("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===a.name&&ci.some(function(d){return a.message.includes(d)}))return new S("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});Object.setPrototypeOf(a,R.prototype);a.args=[{name:"IdbError",yk:a.name,dbName:b,objectStoreNames:c}];return a}
;function ei(a){if(!a)throw Error();throw a;}
function fi(a){return a}
function T(a){var b=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];this.i(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.h);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
T.all=function(a){return new T(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={P:0};f.P<a.length;f={P:f.P},++f.P)gi(T.resolve(a[f.P]).then(function(g){return function(h){d[g.P]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
T.resolve=function(a){return new T(function(b,c){a instanceof T?a.then(b,c):b(a)})};
T.reject=function(a){return new T(function(b,c){c(a)})};
T.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:fi,e=null!==b&&void 0!==b?b:ei;return new T(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){hi(c,c,d,f,g)}),c.onRejected.push(function(){ii(c,c,e,f,g)})):"FULFILLED"===c.state.status?hi(c,c,d,f,g):"REJECTED"===c.state.status&&ii(c,c,e,f,g)})};
function gi(a,b){a.then(void 0,b)}
function hi(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof T?ji(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ii(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof T?ji(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ji(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof T?ji(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ki(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function li(a){return new Promise(function(b,c){ki(a,b,c)})}
function U(a){return new T(function(b,c){ki(a,b,c)})}
;function mi(a,b){return new T(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function ni(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Q());this.i=!1}
m=ni.prototype;m.add=function(a,b,c){return oi(this,[a],"readwrite",function(d){return pi(d,a).add(b,c)})};
m.clear=function(a){return oi(this,[a],"readwrite",function(b){return pi(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return oi(this,[a],"readonly",function(c){return pi(c,a).count(b)})};
m["delete"]=function(a,b){return oi(this,[a],"readwrite",function(c){return pi(c,a)["delete"](b)})};
m.get=function(a,b){return oi(this,[a],"readwrite",function(c){return pi(c,a).get(b)})};
function oi(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;try{var e=a.h.transaction(b,c);var f=qi(e,d)["catch"](function(g){throw di(g,a.h.name,b.join());})}catch(g){f=g instanceof Error?Promise.reject(di(g,a.h.name,b.join())):Promise.reject(di(Error("unexpected transaction error: "+g),a.h.name,b.join()))}ri(a,f,b.join(),c);
return f}
function ri(a,b,c,d){cc(a,function f(){var g,h,k=this,l,n,p;return Aa(f,function(q){if(1==q.h)return g=Math.round(Q()),q.l=2,sa(q,b,4);2!=q.h?(h=Math.round(Q()),si(k,!0,c,h-g),q.h=0,q.l=0):(l=ta(q),n=Math.round(Q()),p=n-g,l instanceof S&&("QUOTA_EXCEEDED"===l.type||"QUOTA_MAYBE_EXCEEDED"===l.type)&&Zh("QUOTA_EXCEEDED",{dbName:k.h.name,objectStoreNames:c,transactionCount:k.transactionCount,transactionMode:d}),l instanceof S&&"UNKNOWN_ABORT"===l.type&&(Zh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,
transactionDuration:p,transactionCount:k.transactionCount,dbDuration:n-k.j}),k.i=!0),si(k,!1,c,p),q.h=0)})})}
function si(a,b,c,d){Zh("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function ti(a){this.h=a}
m=ti.prototype;m.add=function(a,b){return U(this.h.add(a,b))};
m.clear=function(){return U(this.h.clear()).then(function(){})};
m.count=function(a){return U(this.h.count(a))};
function ui(a,b){return vi(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
m["delete"]=function(a){return a instanceof IDBKeyRange?ui(this,a):U(this.h["delete"](a))};
m.get=function(a){return U(this.h.get(a))};
m.index=function(a){return new wi(this.h.index(a))};
m.getName=function(){return this.h.name};
function vi(a,b,c){a=a.h.openCursor(b.query,b.direction);return xi(a).then(function(d){return mi(d,c)})}
function yi(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=S;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function qi(a,b){var c=new yi(a);return zi(c,b)}
function zi(a,b){var c=new Promise(function(d,e){gi(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
yi.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new S("EXPLICIT_ABORT");};
yi.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function pi(a,b){var c=a.h.objectStore(b),d=a.i.get(c);d||(d=new ti(c),a.i.set(c,d));return d}
function wi(a){this.h=a}
wi.prototype.count=function(a){return U(this.h.count(a))};
wi.prototype["delete"]=function(a){return Ai(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
wi.prototype.get=function(a){return U(this.h.get(a))};
wi.prototype.getKey=function(a){return U(this.h.getKey(a))};
function Ai(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return xi(a).then(function(d){return mi(d,c)})}
function Bi(a,b){this.request=a;this.cursor=b}
function xi(a){return U(a).then(function(b){return null===b?null:new Bi(a,b)})}
m=Bi.prototype;m.advance=function(a){this.cursor.advance(a);return xi(this.request)};
m["continue"]=function(a){this.cursor["continue"](a);return xi(this.request)};
m["delete"]=function(){return U(this.cursor["delete"]()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return U(this.cursor.update(a))};function Ci(a,b,c){return cc(this,function e(){var f,g,h,k,l,n,p,q,r,w;return Aa(e,function(y){if(1==y.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.ob,n=g.upgrade,p=g.closed,r=function(){q||(q=new ni(f.result,{closed:p}));return q},f.addEventListener("upgradeneeded",function(D){if(null===D.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");D.dataLoss&&"none"!==D.dataLoss&&Zh("IDB_DATA_CORRUPTED",{reason:D.dataLossMessage||"unknown reason",dbName:a});var da=r(),xa=new yi(f.transaction);n&&n(da,D.oldVersion,D.newVersion,xa)}),h&&f.addEventListener("blocked",function(){h()}),sa(y,li(f),2);
w=y.m;k&&w.addEventListener("versionchange",function(){k(r())});
w.addEventListener("close",function(){Zh("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:w.version});l&&l()});
return y["return"](r())})})}
function Di(a,b){b=void 0===b?{}:b;return cc(this,function d(){var e,f,g;return Aa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return sa(h,li(e),0)})})}
;function Ei(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function Fi(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Ci(a,b,c)}
Ei.prototype["delete"]=function(a){a=void 0===a?{}:a;return Di(this.name,a)};
function Gi(){var a=Hi;if(!a.h){var b=function(){a.h===e&&(a.h=void 0)},c={blocking:function(f){f.close()},
closed:b,ob:b,upgrade:a.options.upgrade},d=function(){return cc(a,function g(){var h=this,k,l,n;return Aa(g,function(p){switch(p.h){case 1:return p.l=2,sa(p,Fi(h.name,h.options.version,c),4);case 4:k=p.m;if(!vc){p.h=5;break}a:{var q=u(Object.keys(h.options.Xa));for(var r=q.next();!r.done;r=q.next())if(r=r.value,!k.h.objectStoreNames.contains(r)){q=r;break a}q=void 0}l=q;if(void 0===l){p.h=5;break}if(!vc||h.i){p.h=7;break}h.i=!0;return sa(p,h["delete"](),8);case 8:return p["return"](d());case 7:throw new bi(l);
case 5:return p["return"](k);case 2:n=ta(p);if(n instanceof DOMException?"VersionError"===n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"===n.name:n instanceof Object&&"message"in n&&"An attempt was made to open a database using a lower version than the existing version."===n.message)return p["return"](Fi(h.name,void 0,Object.assign(Object.assign({},c),{upgrade:void 0})));b();throw n;}})})};
var e=d();a.h=e}return a.h}
;var Hi=new Ei({Xa:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function Ii(a){return cc(this,function c(){var d;return Aa(c,function(e){if(1==e.h)return sa(e,Gi(),2);d=e.m;return e["return"](oi(d,["databases"],"readwrite",function(f){var g=pi(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return U(g.h.put(a,void 0)).then(function(){})})}))})})}
function Ji(){return cc(this,function b(){var c;return Aa(b,function(d){if(1==d.h)return sa(d,Gi(),2);c=d.m;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;var Ki;
function Li(){return cc(this,function b(){var c,d;return Aa(b,function(e){switch(e.h){case 1:var f;if(f=Vh)f=/WebKit\/([0-9]+)/.exec(Mb),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb),f=!(f&&602<=parseInt(f[1],10)));if(f&&!O("ytidb_allow_on_ios_safari_v8_and_v9")||hc)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.l=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return sa(e,Ii(d),4);case 4:return sa(e,Ji(),5);case 5:return e["return"](!0);case 2:return ta(e),e["return"](!1)}})})}
function Mi(){if(void 0!==Ki)return Ki;Yh=!0;return Ki=Li().then(function(a){Yh=!1;return a})}
;var Ni;function Oi(){Ni||(Ni=new Ch("yt.offline"));return Ni}
;function Pi(){Pe.call(this);this.o=this.u=this.j=!1;this.l=Qi();Ri(this);Si(this)}
v(Pi,Pe);function Qi(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Si(a){window.addEventListener("online",function(){a.l=!0;a.j&&Qe(a,"ytnetworkstatus-online");Ti(a);if(a.o&&O("offline_error_handling")){var b=Oi().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new R(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;Of(d)}Oi().set("errors",{},2592E3,!0)}}})}
function Ri(a){window.addEventListener("offline",function(){a.l=!1;a.j&&Qe(a,"ytnetworkstatus-offline");Ti(a)})}
function Ti(a){a.u&&(Pf(new R("NetworkStatusManager state did not match poll",Q()-0)),a.u=!1)}
;function Ui(a){a=void 0===a?{}:a;Pe.call(this);var b=this;this.l=this.u=0;Pi.h||(Pi.h=new Pi);this.j=Pi.h;this.j.j=!0;a.Va&&(this.j.o=!0);a.ha?(this.ha=a.ha,Ee(this.j,"ytnetworkstatus-online",function(){Vi(b,"publicytnetworkstatus-online")}),Ee(this.j,"ytnetworkstatus-offline",function(){Vi(b,"publicytnetworkstatus-offline")})):(Ee(this.j,"ytnetworkstatus-online",function(){Qe(b,"publicytnetworkstatus-online")}),Ee(this.j,"ytnetworkstatus-offline",function(){Qe(b,"publicytnetworkstatus-offline")}))}
v(Ui,Pe);function Vi(a,b){a.ha?a.l?(jg(a.u),a.u=gg(function(){a.o!==b&&(Qe(a,b),a.o=b,a.l=Q())},a.ha-(Q()-a.l))):(Qe(a,b),a.o=b,a.l=Q()):Qe(a,b)}
;var Wi;function Xi(a,b){b=void 0===b?{}:b;Mi().then(function(){Wi||(Wi=new Ui({Va:!0}));Wi.j.l!==Qi()&&Pf(new R("NetworkStatusManager isOnline does not match window status"));sh(a,b)})}
function Yi(a,b){b=void 0===b?{}:b;Mi().then(function(){sh(a,b)})}
;function Zi(a){var b=this;this.h=null;a?this.h=a:yh()&&(this.h=Pg());hg(function(){Hh(b)},0,5E3)}
Zi.prototype.isReady=function(){!this.h&&yh()&&(this.h=Pg());return!!this.h};
function Sg(a,b,c,d){!N("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Pf(new R("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new R("innertube xhrclient not ready",b,c,d);Of(e);throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
onFetchError:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.h.Ra)&&(g=e);var h=a.h.Ta||!1,k=zh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var l={alt:"json"};a.h.Sa&&f.headers.Authorization||(l.key=a.h.innertubeApiKey);var n=eh(""+g+e,l||{},!0);Mi().then(function(p){if(d.retry&&O("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(O("networkless_gel")&&!p||!O("networkless_gel"))var q=Fh(b,
c,k,h);if(q){var r=f.onSuccess,w=f.onFetchSuccess;f.onSuccess=function(y,D){Gh(q);r(y,D)};
c.onFetchSuccess=function(y,D){Gh(q);w(y,D)}}}try{O("use_fetch_for_op_xhr")?ph(n,f):O("networkless_gel")&&d.retry?(f.method="POST",!d.pb&&O("nwl_send_fast_on_unload")?Yi(n,f):Xi(n,f)):(f.method="POST",f.postParams||(f.postParams={}),sh(n,f))}catch(y){if("InvalidAccessError"==y.name)q&&(Gh(q),q=0),Pf(Error("An extension is blocking network request."));
else throw y;}q&&hg(function(){Hh(a)},0,5E3)})}
;function V(a,b,c){c=void 0===c?{}:c;var d=Zi;N("ytLoggingEventsDefaultDisabled",!1)&&Zi==Zi&&(d=null);Ug(a,b,d,c)}
;var $i=[{ya:function(a){return"Cannot read property '"+a.key+"'"},
qa:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ya:function(a){return"Cannot call '"+a.key+"'"},
qa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function aj(){this.h=[];this.i=[]}
var bj;function cj(){bj||(bj=new aj);return bj}
;var dj=new L;function ej(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=fj(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=fj(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=fj(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function fj(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function gj(a,b,c,d){c+="."+a;a=hj(b);d[c]=a;return c.length+a.length}
function hj(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var ij=new Set,jj=0,kj=0,lj=0,mj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function nj(a){oj(a,"WARNING")}
function oj(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||N("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||N("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(O("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=jj))){var g=jd(a);
d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.h||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var n=a.args[l],p="params."+l;k+=p.length;if(n)if(Array.isArray(n)){var q=c,r=k;for(k=0;k<n.length&&!(n[k]&&(r+=gj(k,n[k],p,q),500<r));k++);k=r}else if("object"===typeof n)for(q in q=void 0,r=c,
n){if(n[q]){var w=q;var y=n[q],D=r;w="string"!==typeof y||"clickTrackingParams"!==w&&"trackingParams"!==w?0:(y=ej(atob(y.replace(/-/g,"+").replace(/_/g,"/"))))?gj(w+".ve",y,p,D):0;k+=w;k+=gj(q,n[q],p,r);if(500<k)break}}else c[p]=hj(n),k+=c[p].length;else c[p]=hj(n),k+=c[p].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(n=a.params,"object"===typeof a.params)for(l in p=0,n){if(n[l]&&(q="params."+l,r=hj(n[l]),c[q]=r,p+=q.length+r.length,500<p))break}else c.params=hj(n);navigator.vendor&&
!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);c={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};d=Number(a.columnNumber);isNaN(d)||(c.lineNumber=c.lineNumber+":"+d);if(void 0!==a.sampleWeight)a=a.sampleWeight;else a:{a=cj();d=u(a.i);for(e=d.next();!e.done;e=d.next())if(e=e.value,c.message&&c.message.match(e.wk)){a=e.weight;break a}a=u(a.h);for(d=a.next();!d.done;d=a.next())if(d=d.value,d.Fa(c)){a=d.weight;break a}a=1}c.sampleWeight=a;a=u($i);for(d=a.next();!d.done;d=
a.next())if(d=d.value,d.qa[c.name])for(f=u(d.qa[c.name]),e=f.next();!e.done;e=f.next())if(g=e.value,e=c.message.match(g.regexp)){c.params["params.error.original"]=e[0];f=g.groups;g={};for(h=0;h<f.length;h++)g[f[h]]=e[h+1],c.params["params.error."+f[h]]=e[h+1];c.message=d.ya(g);break}c.params||(c.params={});a=cj();c.params["params.errorServiceSignature"]="msg="+a.i.length+"&cb="+a.h.length;c.params["params.serviceWorker"]="false";c.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length);
window.yterr&&"function"===typeof window.yterr&&window.yterr(c);a=0===c.sampleWeight;if(!ij.has(c.message)&&!a){"ERROR"===b?(dj.O("handleError",c),O("record_app_crashed_web")&&0===lj&&1===c.sampleWeight&&(lj++,V("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),kj++):"WARNING"===b&&dj.O("handleWarning",c);if(O("kevlar_gel_error_routing")){d=b;a:{a=u(mj);for(e=a.next();!e.done;e=a.next())if(Wh(e.value.toLowerCase())){a=!0;break a}a=!1}if(!a){e={stackTrace:c.stack};c.fileName&&(e.filename=c.fileName);
a=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(e.lineNumber=Number(a[0]),e.columnNumber=Number(a[1])):e.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:c.message,errorClassName:c.name,sampleWeight:c.sampleWeight};"ERROR"===d?a.level="ERROR_LEVEL_ERROR":"WARNING"===d&&(a.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:e};e={pageUrl:window.location.href,
kvPairs:[]};N("FEXP_EXPERIMENTS")&&(e.experimentIds=N("FEXP_EXPERIMENTS"));if(f=c.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});f=N("SERVER_NAME",void 0);g=N("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));V("clientError",{errorMetadata:e,stackTrace:d,logMessage:a});Lg()}}if(!O("suppress_error_204_logging")){a=c.params||{};b={urlParams:{a:"logerror",
t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},postParams:{url:N("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){c.stack&&(b.postParams.stack=c.stack);d=u(Object.keys(a));for(e=d.next();!e.done;e=d.next())e=e.value,b.postParams["client."+e]=a[e];if(a=N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=u(Object.keys(a)),e=d.next();!e.done;e=d.next())e=e.value,b.postParams[e]=
a[e];a=N("SERVER_NAME",void 0);d=N("SERVER_VERSION",void 0);a&&d&&(b.postParams["server.name"]=a,b.postParams["server.version"]=d)}sh(N("ECATCHER_REPORT_HOST","")+"/error_204",b)}ij.add(c.message);jj++}}}
function pj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:ha(u(c)))}
;function qj(a){a&&(a.dataset?a.dataset[rj("loaded")]="true":a.setAttribute("data-loaded","true"))}
function sj(a,b){return a?a.dataset?a.dataset[rj(b)]:a.getAttribute("data-"+b):null}
var tj={};function rj(a){return tj[a]||(tj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var uj=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,vj=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function wj(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(uj,""),c=c.replace(vj,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else xj(a,b,c)}
function xj(a,b,c){c=void 0===c?null:c;var d=yj(a),e=document.getElementById(d),f=e&&sj(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=tg(d,b),b=""+Na(b),zj[b]=f),g||(e=Aj(a,d,function(){sj(e,"loaded")||(qj(e),wg(d),P(Sa(xg,d),0))},c)))}
function Aj(a,b,c,d){d=void 0===d?null:d;var e=Jc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Tb(e,gd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Bj(a){a=yj(a);var b=document.getElementById(a);b&&(xg(a),b.parentNode.removeChild(b))}
function Cj(a,b){if(a&&b){var c=""+Na(b);(c=zj[c])&&vg(c)}}
function yj(a){var b=document.createElement("a");Sb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Vb(a)}
var zj={};var Dj=[],Ej=!1;function Fj(){if(!O("disable_ad_status_on_html5_clients")&&(!O("condition_ad_status_fetch_on_consent_cookie_html5_clients")||od.get("CONSENT","").startsWith("YES+"))&&"1"!=gb(Kf(),"args","privembed")){var a=function(){Ej=!0;"google_ad_status"in window?M("DCLKSTAT",1):M("DCLKSTAT",2)};
try{wj("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Dj.push(gg(function(){if(!(Ej||"google_ad_status"in window)){try{Cj("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Ej=!0;M("DCLKSTAT",3)}},5E3))}}
function Gj(){return parseInt(N("DCLKSTAT",0),10)}
;function Hj(){this.i=!1;this.h=null}
Hj.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.i=!0,wj(b,function(){g.i=!1;var h=0<=b.indexOf("/th/");(h?window.trayride:window.botguard)?Ij(g,c,d,f,h):(Bj(b),nj(new R("Unable to load Botguard","from "+b)))},e)):a&&(e=Jc(document,"SCRIPT"),e.textContent=a,e.nonce=Fa(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?Ij(this,c,d,f,a):nj(Error("Unable to load Botguard from JS")))};
function Ij(a,b,c,d,e){e=e?window.trayride.ad:window.botguard.bg;if(d)try{a.h=new e(b,c?function(){return c(b)}:Ja)}catch(f){nj(f)}else{try{a.h=new e(b)}catch(f){nj(f)}c&&c(b)}}
Hj.prototype.dispose=function(){this.h=null};var Jj=new Hj;function Kj(){return!!Jj.h}
function Lj(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Jj.h?Jj.h.hot?Jj.h.hot(void 0,void 0,a):Jj.h.invoke(void 0,void 0,a):null}
;var Mj=E().toString();
function Nj(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=E();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Mj)for(a=1,b=0;b<Mj.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Mj.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Oj=x.ytLoggingDocDocumentNonce_||Nj();z("ytLoggingDocDocumentNonce_",Oj,void 0);var Pj={Wd:0,Yb:1,ic:2,Yg:3,Xd:4,Xj:5,Lh:6,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS"};var Qj=1;function Rj(a){this.h=a}
function Sj(a){return new Rj({trackingParams:a})}
Rj.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Rj.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Rj.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Tj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Uj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Vj(a){return N(Uj(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Vj,void 0);function Wj(a){return(a=Vj(void 0===a?0:a))?new Rj({veType:a,youtubeData:void 0}):null}
function Xj(){var a=N("csn-to-ctt-auth-info");a||(a={},M("csn-to-ctt-auth-info",a));return a}
function W(a){a=void 0===a?0:a;var b=N(Tj(a));if(!b&&!N("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",W,void 0);function Yj(a,b,c){var d=Xj();(c=W(c))&&delete d[c];b&&(d[a]=b)}
function Zj(a){return Xj()[a]}
z("yt_logging_screen.getCttAuthInfo",Zj,void 0);function ak(a,b,c,d){c=void 0===c?0:c;if(a!==N(Tj(c))||b!==N(Uj(c)))if(Yj(a,d,c),M(Tj(c),a),M(Uj(c),b),0==c||O("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&Ug("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Oj,clientScreenNonce:a},Zi)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",ak,void 0);function bk(a){Ih.call(this,1,arguments);this.csn=a}
v(bk,Ih);var Rh=new Jh("screen-created",bk),ck=[],ek=dk,fk=0;function gk(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:$a(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(jb(e)||!e.trackingParams&&!e.veType)&&nj(Error("Child VE logged with no data"));d={L:Zj(b),M:b};"UNDEFINED_CSN"==b?hk("visualElementAttached",c,d):a?Ug("visualElementAttached",c,a,d):V("visualElementAttached",c,d)}
function ik(a,b){var c=O("use_default_events_client")?void 0:Zi,d={csn:a,ve:b.getAsJson(),eventType:1},e={L:Zj(a),M:a};"UNDEFINED_CSN"==a?hk("visualElementShown",d,e):c?Ug("visualElementShown",d,c,e):V("visualElementShown",d,e)}
function jk(a,b,c){var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={L:Zj(b),M:b};"UNDEFINED_CSN"==b?hk("visualElementGestured",c,d):a?Ug("visualElementGestured",c,a,d):V("visualElementGestured",c,d)}
function dk(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Bc(b)}
function hk(a,b,c){ck.push({payloadName:a,payload:b,options:c});fk||(fk=Sh())}
function Th(a){if(ck){for(var b=u(ck),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Ug(c.payloadName,c.payload,null,c.options));ck.length=0}fk=0}
;function kk(a,b,c){gk(O("use_default_events_client")?void 0:Zi,a,b,[c])}
;var lk={Vb:29434,Xb:3611,Ie:3854,Yf:42993,Gi:4724,nj:96370,qb:27686,rb:85013,sb:23462,ub:42016,vb:62407,wb:26926,tb:43781,xb:51236,yb:79148,zb:50160,Ab:77504,Mb:87907,Nb:18630,Ob:54445,Pb:80935,Qb:105675,Rb:37521,Sb:47786,Tb:98349,Ub:6827,Wb:7282,ac:32276,Zb:76278,cc:93911,dc:106531,ec:27259,fc:27262,hc:27263,jc:21759,kc:27107,lc:62936,mc:49568,nc:38408,oc:80637,pc:68727,qc:68728,sc:80353,tc:80356,uc:74610,wc:45707,xc:83962,yc:83970,zc:46713,Ac:89711,Bc:74612,Cc:93265,Dc:74611,Fc:113533,Gc:93252,
Hc:99357,Jc:94521,Kc:114252,Lc:113532,Mc:94522,Ic:94583,Nc:88E3,Oc:93253,Pc:93254,Qc:94387,Rc:94388,Sc:93255,Tc:97424,Ec:72502,Uc:110111,Vc:76019,Xc:117092,Yc:117093,Wc:89431,Zc:110466,bd:77240,cd:60508,dd:105350,ed:73393,fd:113534,gd:92098,hd:84517,jd:83759,kd:80357,ld:86113,md:72598,nd:72733,od:107349,pd:118203,qd:117431,rd:117429,sd:117430,td:117432,ud:117259,vd:97615,wd:31402,xd:84774,yd:95117,zd:98930,Ad:98931,Bd:98932,Cd:43347,Dd:45474,Ed:100352,Fd:84758,Gd:98443,Hd:117985,Id:74613,Jd:74614,
Kd:64502,Ld:74615,Md:74616,Nd:74617,Od:77820,Pd:74618,Qd:93278,Rd:93274,Sd:93275,Td:93276,Ud:22110,Vd:29433,Yd:82047,Zd:113550,ae:75836,be:75837,ce:42352,de:84512,ee:76065,ge:75989,he:16623,ie:32594,je:27240,ke:32633,le:74858,ne:3945,me:16989,oe:45520,pe:25488,qe:25492,re:25494,se:55760,te:14057,ue:18451,we:57204,xe:57203,ye:17897,ze:57205,Ae:18198,Be:17898,Ce:17909,De:43980,Ee:46220,Fe:11721,Ge:49954,He:96369,Je:56251,Ke:25624,Le:16906,Me:99999,Ne:68172,Oe:27068,Pe:47973,Qe:72773,Re:26970,Se:26971,
Te:96805,Ue:17752,Ve:73233,We:109512,Xe:22256,Ye:14115,Ze:22696,af:89278,bf:89277,cf:109513,df:43278,ef:43459,ff:43464,gf:89279,hf:43717,jf:55764,kf:22255,lf:89281,mf:40963,nf:43277,pf:43442,qf:91824,rf:96367,sf:36850,tf:72694,uf:37414,vf:36851,wf:73491,xf:54473,yf:43375,zf:46674,Af:32473,Bf:72901,Cf:72906,Df:50947,Ef:50612,Ff:50613,Gf:50942,Hf:84938,If:84943,Jf:84939,Kf:84941,Lf:84944,Mf:84940,Nf:84942,Of:35585,Pf:51926,Qf:79983,Rf:63238,Sf:18921,Tf:63241,Uf:57893,Vf:41182,Wf:33424,Xf:22207,Zf:36229,
ag:22206,cg:22205,dg:18993,eg:19001,fg:18990,gg:18991,hg:18997,jg:18725,kg:19003,lg:36874,mg:44763,ng:33427,og:67793,pg:22182,qg:37091,rg:34650,sg:50617,tg:47261,ug:22287,vg:25144,wg:97917,xg:62397,yg:36961,zg:108035,Ag:27426,Bg:27857,Cg:27846,Dg:27854,Eg:69692,Fg:61411,Gg:39299,Hg:38696,Ig:62520,Jg:36382,Kg:108701,Lg:50663,Mg:36387,Ng:14908,Og:37533,Pg:105443,Qg:61635,Rg:62274,Sg:65702,Tg:65703,Ug:65701,Vg:76256,Wg:37671,Xg:49953,Zg:36216,ah:28237,bh:39553,dh:29222,eh:26107,fh:38050,gh:26108,hh:26109,
ih:26110,jh:66881,kh:28236,lh:14586,mh:57929,nh:74723,oh:44098,ph:44099,qh:23528,rh:61699,sh:59149,uh:101951,vh:97346,wh:118051,xh:95102,yh:64882,zh:63595,Ah:63349,Bh:95101,Ch:75240,Dh:27039,Eh:68823,Fh:21537,Gh:83464,Hh:75707,Ih:83113,Jh:101952,Kh:101953,Mh:79610,Nh:24402,Oh:24400,Ph:32925,Qh:57173,Rh:64423,Sh:64424,Th:33986,Uh:100828,Vh:21409,Wh:11070,Xh:11074,Yh:17880,Zh:14001,bi:30709,ci:30707,di:30711,fi:30710,gi:30708,ai:26984,hi:63648,ii:63649,ji:51879,ki:111059,li:5754,mi:20445,ni:110386,
oi:113746,ri:66557,si:17310,ti:28631,vi:21589,wi:68012,xi:60480,yi:31571,zi:76980,Ai:41577,Bi:45469,Ci:38669,Di:13768,Ei:13777,Fi:62985,Hi:59369,Ii:43927,Ji:43928,Ki:12924,Li:100355,Ni:56219,Oi:27669,Pi:10337,Mi:47896,Qi:107598,Ri:96639,Si:107536,Ti:96661,Ui:96658,Vi:116646,Wi:96660,Xi:104443,Yi:96659,Zi:106442,aj:63667,bj:63668,cj:63669,dj:78314,ej:55761,fj:96368,gj:67374,hj:48992,ij:49956,jj:31961,kj:26388,lj:23811,mj:5E4,oj:47355,pj:47356,qj:37935,rj:45521,sj:21760,tj:83769,uj:49977,vj:49974,wj:93497,
xj:93498,yj:34325,zj:115803,Aj:100081,Bj:35309,Cj:68314,Dj:25602,Ej:100339,Fj:59018,Gj:18248,Hj:50625,Ij:9729,Jj:37168,Kj:37169,Lj:21667,Mj:16749,Nj:18635,Oj:39305,Pj:18046,Qj:53969,Rj:8213,Sj:93926,Tj:102852,Uj:110099,Vj:22678,Wj:69076,Yj:100856,Zj:17736,ak:3832,bk:55759,ck:64031,dk:93044,ek:93045,fk:34388,gk:17657,hk:17655,ik:39579,jk:39578,kk:77448,lk:8196,mk:11357,nk:69877,pk:8197,qk:82039};function mk(){K.call(this);this.h=[]}
v(mk,K);mk.prototype.A=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.Fa)}K.prototype.A.call(this)};function nk(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||mb(b);this.assets=a.assets||{};this.attrs=a.attrs||mb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
nk.prototype.clone=function(){var a=new nk,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==La(c)?a[b]=mb(c):a[b]=c}return a};var ok=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function pk(a){a=a||"";if(window.spf){var b=a.match(ok);spf.style.load(a,b?b[1]:"",void 0)}else qk(a)}
function qk(a){var b=rk(a),c=document.getElementById(b),d=c&&sj(c,"loaded");d||c&&!d||(c=sk(a,b,function(){sj(c,"loaded")||(qj(c),wg(b),P(Sa(xg,b),0))}))}
function sk(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=gd(a);d.rel="stylesheet";d.href=ub(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function rk(a){var b=Jc(document,"A");Sb(b,new H(a,Fb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Vb(a)}
;function tk(a,b,c,d){K.call(this);var e=this;this.u=this.ba=a;this.I=b;this.B=!1;this.api={};this.Z=this.H=null;this.J=new L;Tc(this,Sa(Rc,this.J));this.m={};this.S=this.aa=this.l=this.ja=this.h=null;this.R=!1;this.o=this.F=null;this.ca={};this.Ca=["onReady"];this.ia=null;this.ra=NaN;this.X={};this.j=d;uk(this);this.da("WATCH_LATER_VIDEO_ADDED",this.Ya.bind(this));this.da("WATCH_LATER_VIDEO_REMOVED",this.Za.bind(this));this.da("onAdAnnounce",this.Ea.bind(this));this.Da=new mk(this);Tc(this,Sa(Rc,
this.Da));this.Y=0;c?this.Y=P(function(){e.loadNewVideoConfig(c)},0):d&&(vk(this),wk(this))}
v(tk,K);m=tk.prototype;m.getId=function(){return this.I};
m.loadNewVideoConfig=function(a){if(!this.i){this.Y&&(dg(this.Y),this.Y=0);a instanceof nk||(a=new nk(a));this.ja=a;this.h=a.clone();vk(this);this.aa||(this.aa=xk(this,this.h.args.jsapicallback||"onYouTubePlayerReady"));this.h.args.jsapicallback=null;if(a=this.h.attrs.width)this.u.style.width=id(Number(a)||String(a));if(a=this.h.attrs.height)this.u.style.height=id(Number(a)||String(a));wk(this);this.B&&yk(this)}};
function vk(a){var b;a.j?b=a.j.rootElementId:b=a.h.attrs.id;a.l=b||a.l;"video-player"==a.l&&(a.l=a.I,a.j?a.j.rootElementId=a.I:a.h.attrs.id=a.I);a.u.id==a.l&&(a.l+="-player",a.j?a.j.rootElementId=a.l:a.h.attrs.id=a.l)}
m.Ja=function(){return this.ja};
function yk(a){a.h&&!a.h.loaded&&(a.h.loaded=!0,"0"!=a.h.args.autoplay?a.api.loadVideoByPlayerVars(a.h.args):a.api.cueVideoByPlayerVars(a.h.args))}
function zk(a){var b=!0,c=Ak(a);c&&a.h&&(a=Bk(a),b=sj(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function wk(a){if(!a.i&&!a.R){var b=zk(a);if(b&&"html5"==(Ak(a)?"html5":null))a.S="html5",a.B||Ck(a);else if(Dk(a),a.S="html5",b&&a.o)a.ba.appendChild(a.o),Ck(a);else{a.h&&(a.h.loaded=!0);var c=!1;a.F=function(){c=!0;var d=Ek(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.h?a.h.clone():void 0;d(a.ba,e,a.j);Ck(a)};
a.R=!0;b?a.F():(wj(Bk(a),a.F),(b=a.j?a.j.cssUrl:a.h.assets.css)&&pk(b),Fk(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function Ak(a){var b=Fc(a.l);!b&&a.u&&a.u.querySelector&&(b=a.u.querySelector("#"+a.l));return b}
function Ck(a){if(!a.i){var b=Ak(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.R=!1,!Ek(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.h&&b.isNotServable(a.h.args.video_id)||Gk(a)):a.ra=P(function(){Ck(a)},50)}}
function Gk(a){uk(a);a.B=!0;var b=Ak(a);b.addEventListener&&(a.H=Hk(a,b,"addEventListener"));b.removeEventListener&&(a.Z=Hk(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Hk(a,b,e))}for(var f in a.m)a.H(f,a.m[f]);yk(a);a.aa&&a.aa(a.api);a.J.O("onReady",a.api)}
function Hk(a,b,c){var d=b[c];return function(){try{return a.ia=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ia=e,Pf(e))}}}
function uk(a){a.B=!1;if(a.Z)for(var b in a.m)a.Z(b,a.m[b]);for(var c in a.X)dg(parseInt(c,10));a.X={};a.H=null;a.Z=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.da.bind(a);a.api.removeEventListener=a.fb.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ka.bind(a);a.api.getPlayerType=a.La.bind(a);a.api.getCurrentVideoConfig=a.Ja.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Wa.bind(a)}
m.Wa=function(){return this.B};
m.da=function(a,b){var c=this,d=xk(this,b);if(d){if(!(0<=Ya(this.Ca,a)||this.m[a])){var e=Ik(this,a);this.H&&this.H(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.B&&P(function(){d(c.api)},0)}};
m.fb=function(a,b){if(!this.i){var c=xk(this,b);c&&rf(this.J,a,c)}};
function xk(a,b){var c=b;if("string"==typeof b){if(a.ca[b])return a.ca[b];c=function(){var d=A(b);d&&d.apply(x,arguments)};
a.ca[b]=c}return c?c:null}
function Ik(a,b){var c="ytPlayer"+b+a.I;a.m[b]=c;x[c]=function(d){var e=P(function(){if(!a.i){a.J.O(b,d);var f=a.X,g=String(e);g in f&&delete f[g]}},0);
kb(a.X,String(e))};
return c}
m.Ea=function(a){wg("a11y-announce",a)};
m.Ya=function(a){wg("WATCH_LATER_VIDEO_ADDED",a)};
m.Za=function(a){wg("WATCH_LATER_VIDEO_REMOVED",a)};
m.La=function(){return this.S||(Ak(this)?"html5":null)};
m.Ka=function(){return this.ia};
function Dk(a){a.cancel();uk(a);a.S=null;a.h&&(a.h.loaded=!1);var b=Ak(a);b&&(zk(a)||!Fk(a)?a.o=b:(b&&b.destroy&&b.destroy(),a.o=null));for(a=a.ba;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.F&&Cj(Bk(this),this.F);dg(this.ra);this.R=!1};
m.A=function(){Dk(this);if(this.o&&this.h&&this.o.destroy)try{this.o.destroy()}catch(b){Of(b)}this.ca=null;for(var a in this.m)x[this.m[a]]=null;this.ja=this.h=this.api=null;delete this.ba;delete this.u;K.prototype.A.call(this)};
function Fk(a){return a.h&&a.h.args&&a.h.args.fflags?-1!=a.h.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Bk(a){return a.j?a.j.jsUrl:a.h.assets.js}
function Ek(a,b){if(a.j)var c=a.j.serializedExperimentFlags;else a.h&&a.h.args&&(c=a.h.args.fflags);return"true"==$g(c||"","&")[b]}
;var Jk={},Kk="player_uid_"+(1E9*Math.random()>>>0);function Lk(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Fc(d):d;var e=Kk+"_"+Na(d),f=Jk[e];if(f&&c)return Mk(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new tk(d,e,a,b);Jk[e]=f;wg("player-added",f.api);Tc(f,function(){delete Jk[f.getId()]});
return f.api}
function Mk(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;function Nk(a){a=void 0===a?!1:a;K.call(this);this.h=new L(a);Tc(this,Sa(Rc,this.h))}
F(Nk,K);Nk.prototype.subscribe=function(a,b,c){return this.i?0:this.h.subscribe(a,b,c)};
Nk.prototype.m=function(a,b){this.i||this.h.O.apply(this.h,arguments)};function Ok(a,b,c){Nk.call(this);this.j=a;this.l=b;this.o=c}
v(Ok,Nk);function Pk(a,b,c){if(!a.i){var d=a.j;d.i||a.l!=d.h||(a={id:a.o,command:b},c&&(a.data=c),d.h.postMessage(Se(a),d.l))}}
Ok.prototype.A=function(){this.l=this.j=null;Nk.prototype.A.call(this)};function Qk(a){K.call(this);this.h=a;this.h.subscribe("command",this.Aa,this);this.j={};this.m=!1}
v(Qk,K);m=Qk.prototype;m.start=function(){this.m||this.i||(this.m=!0,Pk(this.h,"RECEIVING"))};
m.Aa=function(a,b,c){if(this.m&&!this.i){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.j||(c=C(this.hb,this,a),this.j[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&Rk(this,d.event);break;default:this.l.isReady()&&this.l.isExternalMethodAvailable(a,c||null)&&(b=Sk(a,b||{}),c=this.l.handleExternalCall(a,b,c||null),(c=Tk(a,c))&&this.m&&!this.i&&Pk(this.h,a,c))}}};
m.hb=function(a,b){this.m&&!this.i&&Pk(this.h,a,this.la(a,b))};
m.la=function(a,b){if(null!=b)return{value:b}};
function Rk(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
m.A=function(){var a=this.h;a.i||rf(a.h,"command",this.Aa,this);this.h=null;for(var b in this.j)Rk(this,b);K.prototype.A.call(this)};function Uk(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Vk(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Wk(a)}
function Wk(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Xk(a,b,c,d){if(B(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Yk(a,b){Qk.call(this,b);this.l=a;this.start()}
v(Yk,Qk);Yk.prototype.addEventListener=function(a,b){this.l.addEventListener(a,b)};
Yk.prototype.removeEventListener=function(a,b){this.l.removeEventListener(a,b)};
function Sk(a,b){switch(a){case "loadVideoById":return b=Wk(b),[b];case "cueVideoById":return b=Wk(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Xk(b),[b];case "cuePlaylist":return b=Xk(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Tk(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Yk.prototype.la=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Qk.prototype.la.call(this,a,b)};
Yk.prototype.A=function(){Qk.prototype.A.call(this);delete this.l};function Zk(a,b,c){K.call(this);var d=this;c=c||N("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.B="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.u=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.B=e.origin);d.j=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.m&&(!d.o||0<=Ya(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.h=this.m=null;window.addEventListener("message",this.u)}
v(Zk,K);Zk.prototype.sendMessage=function(a,b){var c=b||this.j;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.B)}catch(e){Pf(e)}}};
Zk.prototype.A=function(){window.removeEventListener("message",this.u);K.prototype.A.call(this)};function $k(){var a=this.i=new Zk(!!N("WIDGET_ID_ENFORCE")),b=C(this.eb,this);a.m=b;a.o=null;this.i.channel="widget";if(a=N("WIDGET_ID"))this.i.sessionId=a;this.l=[];this.o=!1;this.m={}}
m=$k.prototype;m.eb=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.m[a]||"onReady"==a||(this.addEventListener(a,al(this,a)),this.m[a]=!0)):this.za(a,b,c)};
m.za=function(){};
function al(a,b){return C(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.Ia=function(){this.o=!0;this.sendMessage("initialDelivery",this.ma());this.sendMessage("onReady");G(this.l,this.Ba,this);this.l=[]};
m.ma=function(){return null};
function bl(a,b){a.sendMessage("infoDelivery",b)}
m.Ba=function(a){this.o?this.i.sendMessage(a):this.l.push(a)};
m.sendMessage=function(a,b){this.Ba({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.i=null};function cl(a){$k.call(this);this.h=a;this.j=[];this.addEventListener("onReady",C(this.ab,this));this.addEventListener("onVideoProgress",C(this.lb,this));this.addEventListener("onVolumeChange",C(this.mb,this));this.addEventListener("onApiChange",C(this.gb,this));this.addEventListener("onPlaybackQualityChange",C(this.ib,this));this.addEventListener("onPlaybackRateChange",C(this.jb,this));this.addEventListener("onStateChange",C(this.kb,this));this.addEventListener("onWebglSettingsChanged",C(this.nb,
this))}
v(cl,$k);m=cl.prototype;m.za=function(a,b,c){if(this.h.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Uk(a)){var d=b;if(B(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Wk.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Vk.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Xk.apply(window,d)}d=e}b.length=1;b[0]=d}this.h.handleExternalCall(a,b,c);Uk(a)&&bl(this,this.ma())}};
m.ab=function(){var a=C(this.Ia,this);this.i.h=a};
m.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.h.addEventListener(a,b)};
m.ma=function(){if(!this.h)return null;var a=this.h.getApiInterface();cb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.h[e]();b[f]=g}catch(h){}}}b.videoData=this.h.getVideoData();b.currentTimeLastUpdated_=E()/1E3;return b};
m.kb=function(a){a={playerState:a,currentTime:this.h.getCurrentTime(),duration:this.h.getDuration(),videoData:this.h.getVideoData(),videoStartBytes:0,videoBytesTotal:this.h.getVideoBytesTotal(),videoLoadedFraction:this.h.getVideoLoadedFraction(),playbackQuality:this.h.getPlaybackQuality(),availableQualityLevels:this.h.getAvailableQualityLevels(),currentTimeLastUpdated_:E()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getVideoUrl&&(a.videoUrl=
this.h.getVideoUrl());this.h.getVideoContentRect&&(a.videoContentRect=this.h.getVideoContentRect());this.h.getProgressState&&(a.progressState=this.h.getProgressState());this.h.getPlaylist&&(a.playlist=this.h.getPlaylist());this.h.getPlaylistIndex&&(a.playlistIndex=this.h.getPlaylistIndex());this.h.getStoryboardFormat&&(a.storyboardFormat=this.h.getStoryboardFormat());bl(this,a)};
m.ib=function(a){bl(this,{playbackQuality:a})};
m.jb=function(a){bl(this,{playbackRate:a})};
m.gb=function(){for(var a=this.h.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.h.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.h.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.mb=function(){bl(this,{muted:this.h.isMuted(),volume:this.h.getVolume()})};
m.lb=function(a){a={currentTime:a,videoBytesLoaded:this.h.getVideoBytesLoaded(),videoLoadedFraction:this.h.getVideoLoadedFraction(),currentTimeLastUpdated_:E()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getProgressState&&(a.progressState=this.h.getProgressState());bl(this,a)};
m.nb=function(){var a={sphericalProperties:this.h.getSphericalProperties()};bl(this,a)};
m.dispose=function(){$k.prototype.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.h.removeEventListener(b.eventType,b.listener)}this.j=[]};function dl(a,b,c){K.call(this);this.h=a;this.l=c;this.m=ag(window,"message",C(this.o,this));this.j=new Ok(this,a,b);Tc(this,Sa(Rc,this.j))}
v(dl,K);dl.prototype.o=function(a){var b;if(b=!this.i)if(b=a.origin==this.l)a:{b=this.h;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.j,c.i||c.m("command",b.command,b.data,a.origin))}};
dl.prototype.A=function(){bg(this.m);this.h=null;K.prototype.A.call(this)};function el(){var a=mb(fl),b;return ff(new Ze(function(c,d){a.onSuccess=function(e){jh(e)?c(e):d(new gl("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new gl("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new gl("Request timed out","net.timeout",e))};
b=sh("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof gf&&b.abort();
return df(c)})}
function gl(a,b,c){Va.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(gl,Va);function hl(){this.i=0;this.h=null}
hl.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Ye(a)?a:il(a)):2===this.i&&b?(a=b.call(c,this.h),Ye(a)?a:jl(a)):this};
hl.prototype.getValue=function(){return this.h};
hl.prototype.$goog_Thenable=!0;function jl(a){var b=new hl;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function il(a){var b=new hl;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function kl(a){Va.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ll;this.isTimeout=a instanceof gl&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof gf}
v(kl,Va);kl.prototype.name="BiscottiError";function ll(){Va.call(this,"Biscotti ID is missing from server")}
v(ll,Va);ll.prototype.name="BiscottiMissingError";var fl={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ml=null;
function Wg(){if(O("disable_biscotti_fetch_on_html5_clients"))return df(Error("Fetching biscotti ID is disabled."));if(O("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!od.get("CONSENT","").startsWith("YES+"))return df(Error("User has not consented - not fetching biscotti id."));if("1"===gb(Kf(),"args","privembed"))return df(Error("Biscotti ID is not available in private embed mode"));ml||(ml=ff(el().then(nl),function(a){return ol(2,a)}));
return ml}
function nl(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ll;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ll;a=a.id;Xg(a);ml=il(a);pl(18E5,2);return a}
function ol(a,b){var c=new kl(b);Xg("");ml=jl(c);0<a&&pl(12E4,a-1);throw c;}
function pl(a,b){P(function(){ff(el().then(nl,function(c){return ol(b,c)}),Ja)},a)}
function ql(){try{var a=A("yt.ads.biscotti.getId_");return a?a():Wg()}catch(b){return df(b)}}
;function rl(a){if("1"!==gb(Kf(),"args","privembed")){a&&Vg();try{ql().then(function(){},function(){}),P(rl,18E5)}catch(b){Of(b)}}}
;var X=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",X,void 0);function sl(){this.h=N("ALT_PREF_COOKIE_NAME","PREF");this.i=N("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=od.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(X[d]=c.toString())}}}
m=sl.prototype;m.get=function(a,b){tl(a);ul(a);var c=void 0!==X[a]?X[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){tl(a);ul(a);if(null==b)throw Error("ExpectedNotNull");X[a]=b.toString()};
m.remove=function(a){tl(a);ul(a);delete X[a]};
m.save=function(){var a=this.h,b=[],c;for(c in X)b.push(c+"="+encodeURIComponent(String(X[c])));Bh(a,b.join("&"),63072E3,this.i)};
m.clear=function(){for(var a in X)delete X[a]};
function ul(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function tl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function vl(a){a=void 0!==X[a]?X[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ka(sl);function wl(){this.i=new Set;this.h=new Set;this.j=new Map}
wl.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ka(wl);function xl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!yl(a)||c.some(function(e){return!yl(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())zl(a,d.value);return a}
function zl(a,b){for(var c in b)if(yl(b[c])){if(c in a&&!yl(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});zl(a[c],b[c])}else if(Al(b[c])){if(c in a&&!Al(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Bl(a[c],b[c])}else a[c]=b[c];return a}
function Bl(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,yl(d)?a.push(zl({},d)):Al(d)?a.push(Bl([],d)):a.push(d);return a}
function yl(a){return"object"===typeof a&&!Array.isArray(a)}
function Al(a){return"object"===typeof a&&Array.isArray(a)}
;var Cl={},Dl=0;
function El(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Wh("cobalt")){if(a){a instanceof H||(a="object"==typeof a&&a.U?a.T():String(a),Jb.test(a)?a=new H(a,Fb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Ib))&&Hb.test(b[1])?new H(a,Fb):null));a=Gb(a||Lb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Pb)){b="object"==typeof a;var f=null;b&&a.na&&(f=a.ka());a=Rb(wb(b&&a.U?a.T():String(a)),f)}a instanceof Pb&&a.constructor===Pb?a=a.h:(La(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Se(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Ic("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)th(a,b,"POST",e,d);else if(N("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)th(a,b,"GET","",d);else{b:{try{var g=new Wa({url:a});if(g.j&&g.i||g.l){var h=Xb(a.match(Wb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(bc);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var q=c;break d}}c+=3}q=-1}if(0>q)var r=null;else{var w=a.indexOf("&",q);if(0>w||w>l)w=l;q+=3;r=decodeURIComponent(a.substr(q,w-q).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(y){}f=!1}f?Fl(a)?(b&&b(),f=!0):f=!1:f=!1;f||Gl(a,b)}}
function Fl(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Gl(a,b){var c=new Image,d=""+Dl++;Cl[d]=c;c.onload=c.onerror=function(){b&&Cl[d]&&b();delete Cl[d]};
c.src=a}
;function Hl(a,b){Ih.call(this,1,arguments)}
v(Hl,Ih);function Il(a,b){Ih.call(this,1,arguments)}
v(Il,Ih);var Jl=new Jh("aft-recorded",Hl),Kl=new Jh("timing-sent",Il);var Ll=window;function Ml(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Nl=Ll.performance||Ll.mozPerformance||Ll.msPerformance||Ll.webkitPerformance||new Ml;var Ol=!1;C(Nl.clearResourceTimings||Nl.webkitClearResourceTimings||Nl.mozClearResourceTimings||Nl.msClearResourceTimings||Nl.oClearResourceTimings||Ja,Nl);function Pl(a){var b=Ql(a);if(b.aft)return b.aft;a=N((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Rl(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ta("ytcsi."+(a||"")+"data_",b));return b}
function Sl(a){a=Rl(a);a.info||(a.info={});return a.info}
function Ql(a){a=Rl(a);a.tick||(a.tick={});return a.tick}
function Tl(a){var b=Rl(a).nonce;b||(b=Nj(),Rl(a).nonce=b);return b}
function Ul(a){var b=Ql(a||""),c=Pl(a);c&&!Ol&&(Oh(Jl,new Hl(Math.round(c-b._start),a)),Ol=!0)}
;function Vl(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function Wl(a){a=a||"";var b=A("ytcsi.reference");b||(Vl(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=Vl(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Xl=x.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",Xl,void 0);function Yl(){this.h=0}
function Zl(){Yl.h||(Yl.h=new Yl);return Yl.h}
Yl.prototype.tick=function(a,b,c){$l(this,"tick_"+a+"_"+b)||V("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Yl.prototype.info=function(a,b){var c=Object.keys(a).join("");$l(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,V("latencyActionInfo",c))};
Yl.prototype.span=function(a,b){var c=Object.keys(a).join("");$l(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,V("latencyActionSpan",a))};
function $l(a,b){Xl[b]=Xl[b]||{count:0};var c=Xl[b];c.count++;c.time=Q();a.h||(a.h=hg(function(){var d=Q(),e;for(e in Xl)Xl[e]&&6E4<d-Xl[e].time&&delete Xl[e];a&&(a.h=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new R("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||nj(c)),!0):!1}
;var Y={},am=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid=
"requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",
Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid=
"requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),bm="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),cm={},dm=(cm.ccs="CANARY_STATE_",cm.mver="MEASUREMENT_VERSION_",
cm.pis="PLAYER_INITIALIZED_STATE_",cm.yt_pt="LATENCY_PLAYER_",cm.pa="LATENCY_ACTION_",cm.yt_vst="VIDEO_STREAM_TYPE_",cm),em="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function fm(a){return!!N("FORCE_CSI_ON_GEL",!1)||O("csi_on_gel")||!!Rl(a).useGel}
function gm(a){a=Rl(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
;function hm(a,b,c){if(null!==b)if(Sl(c)[a]=b,fm(c)){var d=b;b=gm(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in am){b=am[a];0<=Ya(bm,b)&&(d=!!d);a in dm&&"string"===typeof d&&(d=dm[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=xl({},e)}else 0<=Ya(em,a)||nj(new R("Unknown label logged with GEL CSI",
a)),f=void 0;f&&fm(c)&&(b=Wl(c||""),xl(b.info,f),b=gm(c),b.gelInfos||(b.gelInfos={}),xl(b.gelInfos,f),c=Tl(c),Zl().info(f,c))}else Wl(c||"").info[a]=b}
function im(a,b,c){var d=Ql(c);if(O("use_first_tick")&&jm(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Nl.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Nl.mark(e))}e=b||Q();d[a]=e;e=gm(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||Q();if(fm(c)){Wl(c||"").tick[a]=b||Q();e=Tl(c);if("_start"===a){var f=Zl();$l(f,"baseline_"+e)||V("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Zl().tick(a,e,b);Ul(c);e=!0}else e=!1;if(!e){if(!A("yt.timing."+(c||"")+"pingSent_")&&
(f=N((c||"")+"TIMING_ACTION",void 0),e=Ql(c),A("ytglobal.timing"+(c||"")+"ready_")&&f&&jm("_start")&&Pl(c)))if(Ul(c),c)km(c);else{f=!0;var g=N("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&km(c)}Wl(c||"").tick[a]=b||Q()}return d[a]}
function jm(a,b){var c=Ql(b);return a in c}
function km(a){if(!fm(a)){var b=Ql(a),c=Sl(a),d=b._start,e=N("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:N((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Pl(a);var h=Ql(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Sl(a).yt_pvis&&"youtube"===e&&(hm("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=Q();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),n[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;O("debug_csi_data")&&(c=A("yt.timing.csiData"),c||(c=[],Ta("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&(b||O("always_send_csi_204_with_beacon"))){var r=void 0===r?"":r;Fl(f,r)||El(f,void 0,void 0,void 0,r)}else El(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);Oh(Kl,new Il(n.aft+(Number(g)||0),a))}}
var lm=window;lm.ytcsi&&(lm.ytcsi.info=hm,lm.ytcsi.tick=im);function mm(){this.l=[];this.m=[];this.h=[];this.i=new Set;this.o=new Map}
function nm(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=W(c),h=Wj(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&gk(a.client,g,h,[Sj(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&gk(a.client,g,h,[Sj(d.playerResponse.trackingParams)]))})}
function om(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=W(d);c=c||Wj(d);e&&c&&gk(a.client,e,c,[b])}}
mm.prototype.clickCommand=function(a){var b=W();if(!a.clickTrackingParams||!b)return!1;jk(this.client,b,Sj(a.clickTrackingParams));return!0};
function pm(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){qm(a,b,c);var f=Wj(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,om(a,h[0],h[1]||f,c.layer);f=u(a.m);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=W(g);var l=k[0]||Wj(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={L:Zj(h),M:h},"UNDEFINED_CSN"==h?hk("visualElementStateChanged",k,l):g?Ug("visualElementStateChanged",k,g,l):V("visualElementStateChanged",
k,l))}}};
W(c.layer)||a.j();if(c.va)for(var d=u(c.va),e=d.next();!e.done;e=d.next())nm(a,e.value,c.layer);else oj(Error("Delayed screen needs a data promise."))}
function qm(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.bb?c.bb:c.layer;var e=W(d);d=Wj(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var g=a.client,h=f,k=c.ta,l=c.L,n=ek(),p={csn:n,pageVe:(new Rj({veType:b,youtubeData:void 0})).getAsJson()};h&&h.visualElement?p.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&nj(new R("newScreen() parent element does not have a VE - rootVe",
b));k&&(p.cloneCsn=k);k={L:l,M:n};g?Ug("screenCreated",p,g,k):V("screenCreated",p,k);Oh(Rh,new bk(n));var q=n}catch(r){pj(r,{Ak:b,rootVe:d,parentVisualElement:void 0,vk:e,zk:f,ta:c.ta});oj(r);return}ak(q,b,c.layer,c.L);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=O("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(Pj));for(f=b.next();!f.done;f=b.next())if(W(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,g=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:g},f={L:Zj(e),M:e,
Ha:f},"UNDEFINED_CSN"==e?hk("visualElementHidden",d,f):b?Ug("visualElementHidden",d,b,f):V("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");hm("csn",q);wl.getInstance().clear();d=Wj(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(O("web_mark_root_visible")||O("music_web_mark_root_visible"))&&ik(q,d);a.i["delete"](c.layer||0);a.j=void 0;e=u(a.o);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value===c.layer&&d&&om(a,b,d,c.layer)}
;var Z=null,rm=null,sm=null,tm={};function um(a){var b=a.id;a=a.ve_type;var c=Qj++;a=new Rj({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});tm[b]=a;b=W();c=Wj();b&&c&&kk(b,c,a)}
function vm(){var a=Z.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function wm(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(ak(b,a),a=Wj()))for(var c in tm)if(tm.hasOwnProperty(c)){var d=tm[c];d&&kk(b,a,d)}}
function xm(a){tm[a.id]=Sj(a.tracking_params)}
function ym(a){var b=W();a=tm[a.id];b&&a&&jk(O("use_default_events_client")?void 0:Zi,b,a)}
function zm(a){a=a.ids;var b=W();if(b)for(var c=0;c<a.length;c++){var d=tm[a[c]];d&&ik(b,d)}}
;function Am(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=N("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=N("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Yb(window.location.href);g&&f.push(g);g=Yb(d);if(0<=Ya(f,g)||!g&&0==d.lastIndexOf("/",0))if(O("autoescape_tempdata_url")&&(f=document.createElement("a"),Sb(f,d),d=f.href),d){g=d.match(Wb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:W()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Vb(d).toString(36),e=e?$b(e):"",Bh(b,e,k||5))}else k=b,e="ST-"+Vb(d).toString(36),k=k?$b(k):"",Bh(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=ac(a,l)+n;a=a instanceof H?a:Kb(a);c.href=Gb(a)}return!0}
;z("yt.setConfig",M,void 0);z("yt.config.set",M,void 0);z("yt.setMsg",Rf,void 0);z("yt.msgs.set",Rf,void 0);z("yt.logging.errors.log",oj,void 0);
z("writeEmbed",function(){var a=N("PLAYER_CONFIG",void 0);if(!a){var b=N("PLAYER_VARS",void 0);b&&(a={args:b})}rl(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=N("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);if((c=N("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){var d=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
if(!d.serializedForcedExperimentIds){var e=window.location.href;-1!=e.indexOf("?")?(e=(e||"").split("#")[0],e=e.split("?",2),e=dh(1<e.length?e[1]:e[0])):e={};e.forced_experiments&&(d.serializedForcedExperimentIds=e.forced_experiments)}Z=Lk(a,c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1)}else Z=Lk(a);Z.addEventListener("onScreenChanged",wm);Z.addEventListener("onLogClientVeCreated",um);Z.addEventListener("onLogServerVeCreated",xm);Z.addEventListener("onLogVeClicked",ym);Z.addEventListener("onLogVesShown",
zm);Z.addEventListener("onVideoDataChange",vm);a=N("POST_MESSAGE_ID","player");N("ENABLE_JS_API")?sm=new cl(Z):N("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(rm=new dl(window.parent,a,b),sm=new Yk(Z,rm.j));Fj()},void 0);
var Bm=Nf(function(){im("ol");var a=sl.getInstance(),b=!!((vl("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Qd(document.body,"exp-invert-logo"))if(c&&!Qd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Qd(d,"inverted-hdpi")){var e=Od(d);Pd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Qd(document.body,"inverted-hdpi")&&Rd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=vl(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete X[b]:(c=d.toString(16),X[b]=c.toString()),a.save());mm.h||(mm.h=new mm);a=mm.h;c=16623;var f=void 0===f?{}:f;Object.values(lk).includes(c)||(nj(new R("createClientScreen() called with a non-page VE",c)),c=83769);f.isHistoryNavigation||a.h.push({rootVe:c,key:f.key||""});a.l=[];a.m=[];f.va?pm(a,c,f):qm(a,c,f)}),Cm=Nf(function(){Z&&Z.sendAbandonmentPing&&Z.sendAbandonmentPing();
N("PL_ATT")&&Jj.dispose();for(var a=0,b=Dj.length;a<b;a++)jg(Dj[a]);Dj.length=0;Bj("//static.doubleclick.net/instream/ad_status.js");Ej=!1;M("DCLKSTAT",0);Sc(sm,rm);Z&&(Z.removeEventListener("onScreenChanged",wm),Z.removeEventListener("onLogClientVeCreated",um),Z.removeEventListener("onLogServerVeCreated",xm),Z.removeEventListener("onLogVeClicked",ym),Z.removeEventListener("onLogVesShown",zm),Z.removeEventListener("onVideoDataChange",vm),Z.destroy());tm={}});
window.addEventListener?(window.addEventListener("load",Bm),window.addEventListener("unload",Cm)):window.attachEvent&&(window.attachEvent("onload",Bm),window.attachEvent("onunload",Cm));Ta("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||Kj);Ta("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||Lj);Ta("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||Gj);
Ta("yt.player.exports.navigate",A("yt.player.exports.navigate")||Am);Ta("yt.util.activity.init",A("yt.util.activity.init")||lg);Ta("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||og);Ta("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||mg);}).call(this);
