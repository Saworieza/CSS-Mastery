/* Copyright 2013 Google, Inc. All Rights Reserved. */(function(){var h,l=this;function aa(a,b){var c=a.split("."),d=l;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function ba(a){a=a.split(".");for(var b=l,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function p(a){return"array"==m(a)}function q(a){return"string"==typeof a}function ca(a,b,c){return a.call.apply(a.bind,arguments)}function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return r.apply(null,arguments)}var ea=Date.now||function(){return+new Date};function s(a,b){function c(){}c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.ea=function(a,c,f){var g=Array.prototype.slice.call(arguments,2);return b.prototype[c].apply(a,g)}}
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return r.apply(null,c)}return r(this,a)};function t(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}s(t,Error);t.prototype.name="CustomError";function fa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function u(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}function ga(a){if(!ha.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ia,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ja,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ka,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(la,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ma,"&#39;"));return a}
var ia=/&/g,ja=/</g,ka=/>/g,la=/"/g,ma=/'/g,ha=/[&<>"']/;function na(a,b){return a<b?-1:a>b?1:0};function oa(a,b){b.unshift(a);t.call(this,fa.apply(null,b));b.shift()}s(oa,t);oa.prototype.name="AssertionError";function pa(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new oa(""+e,f||[]);}function v(a,b,c){!a&&pa("",null,b,Array.prototype.slice.call(arguments,2))}function qa(a,b){throw new oa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));}
function ra(a,b,c){"number"!=typeof a&&pa("Expected number but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));return a}function sa(a,b,c){!q(a)&&pa("Expected string but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));return a};var w=Array.prototype,ta=w.indexOf?function(a,b,c){v(null!=a.length);return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ua=w.forEach?function(a,b,c){v(null!=a.length);w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function va(a,b){var c=ta(a,b),d;(d=0<=c)&&wa(a,c);return d}
function wa(a,b){v(null!=a.length);w.splice.call(a,b,1)}function xa(a){return w.concat.apply(w,arguments)}function ya(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function x(){}x.prototype.S=!1;x.prototype.ca=function(){this.S||(this.S=!0,this.A())};x.prototype.A=function(){if(this.T)for(;this.T.length;)this.T.shift()()};function y(a,b,c){for(var d in a)b.call(c,a[d],d,a)}var za="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Aa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<za.length;f++)c=za[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}function z(a){var b=arguments.length;if(1==b&&p(arguments[0]))return z.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};function A(a,b){this.type=a;this.a=this.target=b;this.R=!0}A.prototype.ca=function(){};A.prototype.b=function(){this.R=!1};function Ba(a){Ba[" "](a);return a}Ba[" "]=function(){};var B;t:{var Ca=l.navigator;if(Ca){var Da=Ca.userAgent;if(Da){B=Da;break t}}B=""}function C(a){return-1!=B.indexOf(a)};var Ea=C("Opera")||C("OPR"),E=C("Trident")||C("MSIE"),F=C("Gecko")&&-1==B.toLowerCase().indexOf("webkit")&&!(C("Trident")||C("MSIE")),G=-1!=B.toLowerCase().indexOf("webkit"),Fa=G&&C("Mobile");function Ga(){var a=l.document;return a?a.documentMode:void 0}
var Ha=function(){var a="",b;if(Ea&&l.opera)return a=l.opera.version,"function"==m(a)?a():a;F?b=/rv\:([^\);]+)(\)|;)/:E?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:G&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(B))?a[1]:"");return E&&(b=Ga(),b>parseFloat(a))?String(b):a}(),Ia={};
function H(a){var b;if(!(b=Ia[a])){b=0;for(var c=u(String(Ha)).split("."),d=u(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",n=RegExp("(\\d*)(\\D*)","g"),ob=RegExp("(\\d*)(\\D*)","g");do{var N=n.exec(g)||["","",""],D=ob.exec(k)||["","",""];if(0==N[0].length&&0==D[0].length)break;b=na(0==N[1].length?0:parseInt(N[1],10),0==D[1].length?0:parseInt(D[1],10))||na(0==N[2].length,0==D[2].length)||na(N[2],D[2])}while(0==b)}b=Ia[a]=0<=b}return b}
var Ja=l.document,Ka=Ja&&E?Ga()||("CSS1Compat"==Ja.compatMode?parseInt(Ha,10):5):void 0;var La=!E||E&&9<=Ka,Ma=E&&!H("9");!G||H("528");F&&H("1.9b")||E&&H("8")||Ea&&H("9.5")||G&&H("528");F&&!H("8")||E&&H("9");function I(a,b){A.call(this,a?a.type:"");this.a=this.target=null;this.clientY=this.clientX=0;this.c=this.state=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&F)try{Ba(c.nodeName)}catch(d){}this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.state=a.state;this.c=a;a.defaultPrevented&&this.b()}}s(I,A);
I.prototype.b=function(){I.O.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ma)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Na="closure_listenable_"+(1E6*Math.random()|0);function Oa(a){try{return!(!a||!a[Na])}catch(b){return!1}}var Pa=0;function Qa(a,b,c,d,e){this.q=a;this.proxy=null;this.src=b;this.type=c;this.b=!!d;this.c=e;this.key=++Pa;this.a=this.D=!1}function Ra(a){a.a=!0;a.q=null;a.proxy=null;a.src=null;a.c=null};function J(a){this.src=a;this.a={};this.b=0}function Sa(a,b,c,d,e){var f=b.toString();b=a.a[f];b||(b=a.a[f]=[],a.b++);var g=Ta(b,c,d,e);-1<g?(a=b[g],a.D=!1):(a=new Qa(c,a.src,f,!!d,e),a.D=!1,b.push(a));return a}J.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=Ta(e,b,c,d);return-1<b?(Ra(e[b]),wa(e,b),0==e.length&&(delete this.a[a],this.b--),!0):!1};
function Ua(a,b){var c=b.type;if(!(c in a.a))return!1;var d=va(a.a[c],b);d&&(Ra(b),0==a.a[c].length&&(delete a.a[c],a.b--));return d}J.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,Ra(d[e]);delete this.a[c];this.b--}return b};function Va(a,b,c,d,e){a=a.a[b.toString()];b=-1;a&&(b=Ta(a,c,d,e));return-1<b?a[b]:null}
function Ta(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.a&&f.q==b&&f.b==!!c&&f.c==d)return e}return-1};var Wa="closure_lm_"+(1E6*Math.random()|0),Xa={},Ya=0;function Za(a,b,c,d,e){if(p(b)){for(var f=0;f<b.length;f++)Za(a,b[f],c,d,e);return null}c=$a(c);if(Oa(a))a=a.listen(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=K(a);g||(a[Wa]=g=new J(a));c=Sa(g,b,c,d,e);c.proxy||(d=ab(),c.proxy=d,d.src=a,d.q=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(bb(b.toString()),d),Ya++);a=c}return a}
function ab(){var a=cb,b=La?function(c){return a.call(b.src,b.q,c)}:function(c){c=a.call(b.src,b.q,c);if(!c)return c};return b}function db(a,b,c,d,e){if(p(b))for(var f=0;f<b.length;f++)db(a,b[f],c,d,e);else c=$a(c),Oa(a)?a.M(b,c,d,e):a&&(a=K(a))&&(b=Va(a,b,c,!!d,e))&&eb(b)}
function eb(a){if("number"==typeof a||!a||a.a)return!1;var b=a.src;if(Oa(b))return Ua(b.l,a);var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.b):b.detachEvent&&b.detachEvent(bb(c),d);Ya--;(c=K(b))?(Ua(c,a),0==c.b&&(c.src=null,b[Wa]=null)):Ra(a);return!0}function bb(a){return a in Xa?Xa[a]:Xa[a]="on"+a}function fb(a,b,c,d){var e=1;if(a=K(a))if(b=a.a[b.toString()])for(b=ya(b),a=0;a<b.length;a++){var f=b[a];f&&f.b==c&&!f.a&&(e&=!1!==gb(f,d))}return Boolean(e)}
function gb(a,b){var c=a.q,d=a.c||a.src;a.D&&eb(a);return c.call(d,b)}
function cb(a,b){if(a.a)return!0;if(!La){var c=b||ba("window.event"),d=new I(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){t:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break t}catch(g){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.a;f;f=f.parentNode)c.push(f);for(var f=a.type,k=c.length-1;0<=k;k--)d.a=c[k],e&=fb(c[k],f,!0,d);for(k=0;k<c.length;k++)d.a=c[k],e&=fb(c[k],f,!1,d)}return e}return gb(a,new I(b,this))}function K(a){a=a[Wa];return a instanceof J?a:null}
var hb="__closure_events_fn_"+(1E9*Math.random()>>>0);function $a(a){v(a,"Listener can not be null.");if("function"==m(a))return a;v(a.handleEvent,"An object listener must have handleEvent method.");return a[hb]||(a[hb]=function(b){return a.handleEvent(b)})};function L(){this.l=new J(this);this.Y=this}s(L,x);L.prototype[Na]=!0;h=L.prototype;h.N=null;h.removeEventListener=function(a,b,c,d){db(this,a,b,c,d)};
function ib(a,b){jb(a);var c,d=a.N;if(d){c=[];for(var e=1;d;d=d.N)c.push(d),v(1E3>++e,"infinite loop")}var d=a.Y,e=b,f=e.type||e;if(q(e))e=new A(e,d);else if(e instanceof A)e.target=e.target||d;else{var g=e,e=new A(f,d);Aa(e,g)}var g=!0,k;if(c)for(var n=c.length-1;0<=n;n--)k=e.a=c[n],g=kb(k,f,!0,e)&&g;k=e.a=d;g=kb(k,f,!0,e)&&g;g=kb(k,f,!1,e)&&g;if(c)for(n=0;n<c.length;n++)k=e.a=c[n],g=kb(k,f,!1,e)&&g}h.A=function(){L.O.A.call(this);this.l&&this.l.removeAll(void 0);this.N=null};
h.listen=function(a,b,c,d){jb(this);return Sa(this.l,String(a),b,c,d)};h.M=function(a,b,c,d){return this.l.remove(String(a),b,c,d)};function kb(a,b,c,d){b=a.l.a[String(b)];if(!b)return!0;b=ya(b);for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.a&&g.b==c){var k=g.q,n=g.c||g.src;g.D&&Ua(a.l,g);e=!1!==k.call(n,d)&&e}}return e&&!1!=d.R}function jb(a){v(a.l,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var lb="StopIteration"in l?l.StopIteration:Error("StopIteration");function mb(){}mb.prototype.a=function(){throw lb;};mb.prototype.ba=function(){return this};function nb(a,b){this.b={};this.a=[];this.d=this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof nb)e=a.v(),d=a.p();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)this.set(e[c],d[c])}}h=nb.prototype;h.p=function(){pb(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};
h.v=function(){pb(this);return this.a.concat()};h.remove=function(a){return M(this.b,a)?(delete this.b[a],this.c--,this.d++,this.a.length>2*this.c&&pb(this),!0):!1};function pb(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];M(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],M(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}h.get=function(a,b){return M(this.b,a)?this.b[a]:b};
h.set=function(a,b){M(this.b,a)||(this.c++,this.a.push(a),this.d++);this.b[a]=b};h.forEach=function(a,b){for(var c=this.v(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new nb(this)};h.ba=function(a){pb(this);var b=0,c=this.a,d=this.b,e=this.d,f=this,g=new mb;g.a=function(){for(;;){if(e!=f.d)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw lb;var g=c[b++];return a?g:d[g]}};return g};
function M(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var qb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");function rb(a){if(sb){sb=!1;var b=l.location;if(b){var c=b.href;if(c&&(c=(c=rb(c)[3]||null)&&decodeURIComponent(c))&&c!=b.hostname)throw sb=!0,Error();}}return a.match(qb)}var sb=G;function O(a,b){var c;if(a instanceof O)this.t=void 0!==b?b:a.t,tb(this,a.j),this.F=a.F,this.o=a.o,ub(this,a.w),this.s=a.s,vb(this,a.a.clone()),this.r=a.r;else if(a&&(c=rb(String(a)))){this.t=!!b;tb(this,c[1]||"",!0);var d=c[2]||"";this.F=d?decodeURIComponent(d):"";this.o=(d=c[3]||"")?decodeURIComponent(d):"";ub(this,c[4]);this.s=(d=c[5]||"")?decodeURIComponent(d):"";vb(this,c[6]||"",!0);this.r=(c=c[7]||"")?decodeURIComponent(c):""}else this.t=!!b,this.a=new P(null,0,this.t)}h=O.prototype;h.j="";
h.F="";h.o="";h.w=null;h.s="";h.r="";h.t=!1;h.toString=function(){var a=[],b=this.j;b&&a.push(Q(b,wb),":");if(b=this.o){a.push("//");var c=this.F;c&&a.push(Q(c,wb),"@");a.push(encodeURIComponent(String(b)));b=this.w;null!=b&&a.push(":",String(b))}if(b=this.s)this.o&&"/"!=b.charAt(0)&&a.push("/"),a.push(Q(b,"/"==b.charAt(0)?xb:yb));(b=this.a.toString())&&a.push("?",b);(b=this.r)&&a.push("#",Q(b,zb));return a.join("")};h.clone=function(){return new O(this)};
function tb(a,b,c){a.j=c?b?decodeURIComponent(b):"":b;a.j&&(a.j=a.j.replace(/:$/,""))}function ub(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.w=b}else a.w=null}function vb(a,b,c){b instanceof P?(a.a=b,Ab(a.a,a.t)):(c||(b=Q(b,Bb)),a.a=new P(b,0,a.t))}function Q(a,b){return q(a)?encodeURI(a).replace(b,Cb):null}function Cb(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wb=/[#\/\?@]/g,yb=/[\#\?:]/g,xb=/[\#\?]/g,Bb=/[\#\?@]/g,zb=/#/g;
function P(a,b,c){this.a=a||null;this.b=!!c}function R(a){if(!a.e&&(a.e=new nb,a.i=0,a.a))for(var b=a.a.split("&"),c=0;c<b.length;c++){var d=b[c].indexOf("="),e=null,f=null;0<=d?(e=b[c].substring(0,d),f=b[c].substring(d+1)):e=b[c];e=decodeURIComponent(e.replace(/\+/g," "));e=S(a,e);d=a;f=f?decodeURIComponent(f.replace(/\+/g," ")):"";R(d);d.a=null;var e=S(d,e),g=d.e.get(e);g||d.e.set(e,g=[]);g.push(f);d.i++}}h=P.prototype;h.e=null;h.i=null;
h.remove=function(a){R(this);a=S(this,a);return M(this.e.b,a)?(this.a=null,this.i-=this.e.get(a).length,this.e.remove(a)):!1};function Db(a,b){R(a);b=S(a,b);return M(a.e.b,b)}h.v=function(){R(this);for(var a=this.e.p(),b=this.e.v(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};h.p=function(a){R(this);var b=[];if(q(a))Db(this,a)&&(b=xa(b,this.e.get(S(this,a))));else{a=this.e.p();for(var c=0;c<a.length;c++)b=xa(b,a[c])}return b};
h.set=function(a,b){R(this);this.a=null;a=S(this,a);Db(this,a)&&(this.i-=this.e.get(a).length);this.e.set(a,[b]);this.i++;return this};h.get=function(a,b){var c=a?this.p(a):[];return 0<c.length?String(c[0]):b};h.toString=function(){if(this.a)return this.a;if(!this.e)return"";for(var a=[],b=this.e.v(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.p(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.a=a.join("&")};
h.clone=function(){var a=new P;a.a=this.a;this.e&&(a.e=this.e.clone(),a.i=this.i);return a};function S(a,b){var c=String(b);a.b&&(c=c.toLowerCase());return c}function Ab(a,b){b&&!a.b&&(R(a),a.a=null,a.e.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),this.remove(e),0<a.length&&(this.a=null,this.e.set(S(this,e),ya(a)),this.i+=a.length))},a));a.b=b};function Eb(a){a.param||(a.param=[]);return a.param}function Fb(a){return a.param?a.param.length:0};var T={};var Gb=new function(){this.a={}};!F&&!E||E&&E&&9<=Ka||F&&H("1.9.1");E&&H("9");var Hb=/<[^>]*>|&[^;]+;/g;function Ib(a,b){return b?a.replace(Hb,""):a}
var Jb=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),Kb=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),Lb=/^http:\/\/.*/,Mb=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff][^\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*$"),Nb=
RegExp("[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc][^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*$"),Ob=/\s+/,Pb=/\d/;function Qb(a,b){var c=a|0,d;if(void 0===b){d=a+"";var e=d.indexOf(".");d=Math.min(-1==e?0:d.length-e-1,3)}else d=b;return 1==c&&0==d?"one":"other"}var Rb=Qb,Rb=Qb;function Sb(a){this.a=a||{}}function Tb(a){a=a.a.key;return null!=a?a:""}function Ub(a){a=a.a.value;return null!=a?a:""};function Vb(a){this.a=a||{}}function Wb(a){a=a.a.protocol;return null!=a?a:""}function Xb(a){a=a.a.port;return null!=a?a:0}function Yb(a,b){v(Math.floor(b)==b,"port must be an integer, got: "+b);a.a.port=b}function Zb(a,b){return new Sb(Eb(a.a)[b])}function $b(a){var b={};Eb(a.a).push(b);return new Sb(b)};function ac(a,b){this.a="";this.b={};var c;if("string"===typeof a)this.a=a;else{this.a=a.a;var d=a.b;for(c in d)this.b[c]=d[c]}if(b)for(c in b)this.b[c]=b[c]}var bc=/[\'\"\(]/,cc=["border-color","border-style","border-width","margin","padding"],dc=/left/g,ec=/right/g,fc=/\s+/;
function gc(a){if(null!=a.a.original_value){var b=a.a.original_value,b=new O(null!=b?b:"");delete a.a.original_value;b.j&&(a.a.protocol=b.j);b.o&&(a.a.host=b.o);null!=b.w?Yb(a,b.w):b.j&&("http"==b.j?Yb(a,80):"https"==b.j&&Yb(a,443));b.s&&(a.a.path=b.s);b.r&&(a.a.hash=b.r);for(var c=b.a.v(),d=0;d<c.length;++d){var e=c[d],f=$b(a);f.a.key=e;e=b.a.p(e)[0];f.a.value=e}}}var hc=null;var ic={"'":"%27","(":"%28",")":"%29","%5B":"[","%5D":"]","%25":"%"};function jc(a){var b=a.length-1,c=null;switch(a[b]){case "filter_url":c=1;break;case "filter_imgurl":c=2;break;case "filter_urlscheme":c=3;break;case "filter_css_regular":c=5;break;case "filter_css_string":c=6;break;case "filter_css_url":c=7}c&&wa(a,b);return c};var kc=/\s*;\s*/,lc=/&/g,mc=/^[$a-z_]*$/i,nc=/^[\$_a-z][\$_0-9a-z]*$/i,oc=/^\s*$/,pc=RegExp("^((de|en)codeURI(Component)?|is(Finite|NaN)|parse(Float|Int)|document|false|function|jslayout|null|this|true|undefined|window|Array|Boolean|Date|Error|JSON|Math|Number|Object|RegExp|String|__event)$"),qc=RegExp("[\\$_a-z][\\$_0-9a-z]*|'(\\\\\\\\|\\\\'|\\\\?[^'\\\\])*'|\"(\\\\\\\\|\\\\\"|\\\\?[^\"\\\\])*\"|[0-9]*\\.?[0-9]+([e][-+]?[0-9]+)?|0x[0-9a-f]+|\\-|\\+|\\*|\\/|\\%|\\=|\\<|\\>|\\&\\&?|\\|\\|?|\\!|\\^|\\~|\\(|\\)|\\{|\\}|\\[|\\]|\\,|\\;|\\.|\\?|\\:|\\@|#[0-9]+|[\\s]+",
"gi"),rc={},sc={};function U(a){var b=a.match(qc);null==b&&(b=[]);if(b.join("").length!=a.length){for(var c=0,d=0;d<b.length&&a.substr(c,b[d].length)==b[d];d++)c+=b[d].length;throw"Parsing error at position "+c+" of "+a;}return b}
function tc(a,b,c){for(var d=!1,e=[];b<c;b++){var f=a[b];if("{"==f)d=!0,e.push("}");else if("."==f||"new"==f||","==f&&"}"==e[e.length-1])d=!0;else if(oc.test(f))a[b]=" ";else{if(!d&&nc.test(f)&&!pc.test(f)){if(a[b]=(null!=T[f]?"g":"v")+"."+f,"has"==f||"size"==f)b=uc(a,b+1)}else if("("==f)e.push(")");else if("["==f)e.push("]");else if(")"==f||"]"==f||"}"==f){if(0==e.length)throw'Unexpected "'+f+'".';d=e.pop();if(f!=d)throw'Expected "'+d+'" but found "'+f+'".';}d=!1}}if(0!=e.length)throw"Missing bracket(s): "+
e.join();}
function uc(a,b){for(;"("!=a[b]&&b<a.length;)b++;a[b]="(function(){return ";if(b==a.length)throw'"(" missing for has() or size().';b++;for(var c=b,d=0,e=!0;b<a.length;){var f=a[b];if("("==f)d++;else if(")"==f){if(0==d)break;d--}else""!=f.trim()&&'"'!=f.charAt(0)&&"'"!=f.charAt(0)&&"+"!=f&&(e=!1);b++}if(b==a.length)throw'matching ")" missing for has() or size().';a[b]="})";d=a.slice(c,b).join("").trim();if(e)for(e=""+eval(d),e=U(e),tc(e,0,e.length),a[c]=e.join(""),c+=1;c<b;c++)a[c]="";else tc(a,c,
b);return b}function vc(a,b){for(var c=a.length,d=b;d<c;d++){var e=a[d];if(":"==e)return d;if("{"==e||"?"==e||";"==e)break}return-1}function wc(a,b){for(var c=a.length,d=b;d<c;d++)if(";"==a[d])return d;return c}function V(a){a=U(a);return xc(a)}function xc(a){tc(a,0,a.length);a=a.join("");var b=sc[a];b||(b=new Function("g","v","return "+a),sc[a]=b);return b}function W(a){return a}
function yc(a){var b=[];a=U(a);for(var c=0,d=a.length;c<d;){var e=vc(a,c);if(-1==e)break;var f=wc(a,e+1),c=u(a.slice(c,e).join("")),e=xc(a.slice(e+1,f));b.push([c,e]);c=f+1}return b}var zc=[];function Ac(a){for(var b=zc.length=0;b<a.length;++b){var c=a[b];lc.test(c)?zc.push(c.replace(lc,"&&")):zc.push(c)}return zc.join("&")};var Bc={"for":"htmlFor","class":"className"},Cc={},Dc;for(Dc in Bc)Cc[Bc[Dc]]=Dc;z("action","cite","data","formaction","href","icon","manifest","poster","src");for(var Ec=[["jscase",V,"$sc"],["jscasedefault",W,"$sd"],["jsl",null,null],["jsglobals",function(a){var b=[];a=a.split(kc);for(var c=0,d=a?a.length:0;c<d;++c){var e=u(a[c]);if(e){var f=e.indexOf(":");if(-1!=f){var g=u(e.substring(0,f)),e=u(e.substring(f+1)),f=e.indexOf(" ");-1!=f&&(e=e.substring(f+1));b.push([g,e])}}}return b},"$g",!0],["jsfor",function(a){var b=[];a=U(a);for(var c=0,d=a.length;c<d;){var e=[],f=vc(a,c);if(-1==f){if(oc.test(a.slice(c,d).join("")))break;f=c-1}else for(var g=c;g<f;){var k=
ta(a,",",g);if(-1==k||k>f)k=f;e.push(u(a.slice(g,k).join("")));g=k+1}0==e.length&&e.push("$this");1==e.length&&e.push("$index");2==e.length&&e.push("$count");if(3!=e.length)throw"Max 3 vars for jsfor; got "+e.length;c=wc(a,c);e.push(xc(a.slice(f+1,c)));b.push(e);c+=1}return b},"for",!0],["jskey",V,"$k"],["jsdisplay",V,"if"],["jsmatch",null,null],["jsif",V,"if"],["jsvars",yc,"var",!0],[null,W,"$vs"],["jsattrs",function(a){var b=[],c;for(c in rc)delete rc[c];a=U(a);c=0;for(var d=a.length;c<d;){for(var e=
[],f="",g="";c<d;c++){g=a[c];if("?"==g||":"==g){""!=f&&e.push(f);break}oc.test(g)||("."==g?(""!=f&&e.push(f),f=""):f='"'==g.charAt(0)||"'"==g.charAt(0)?f+eval(g):f+g)}if(c>=d)break;var f=wc(a,c+1),k=Ac(e),n=rc[k];"undefined"==typeof n&&(n=rc[k]=b.length,b.push(e),b.push(null),b.push(null),b.push(null),b.push(null));b[n+1]=jc(e);c=xc(a.slice(c+1,f));":"==g?b[n+4]=c:"?"==g&&(b[n+3]=c);c=f+1}return b},"$a"],[null,yc,"$ia",!0],[null,yc,"$ic",!0],[null,W,"$rj"],["jseval",function(a){var b=[];a=U(a);for(var c=
0,d=a.length;c<d;){var e=wc(a,c);b.push(xc(a.slice(c,e)));c=e+1}return b},"$e",!0],["jsskip",V,"$sk"],["jsswitch",V,"$s"],["jscontent",function(a){var b=a.indexOf(":"),c=null;if(-1!=b){var d=u(a.substr(0,b));mc.test(d)&&(c="html_snippet"==d?1:"raw"==d?2:"safe"==d?7:null,a=u(a.substr(b+1)))}return[c,!1,V(a)]},"$c"],["transclude",W,"$u"]],Fc={},Gc=0;Gc<Ec.length;++Gc){var Hc=Ec[Gc];Hc[2]&&(Fc[Hc[2]]=[Hc[1],Hc[3]])}Fc.$t=[W,!1];Fc.$x=[W,!1];Fc.$ue=[V,!1];z("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));z("action","cite","data","formaction","href","manifest","poster","src");z("link","script","style");ga("".ia?"".ga():"");function Ic(a){return null==a?[]:p(a)?a:[a]}T.runtime=function(){return Gb.a};T._a=function(a,b){if(null==a)return[];var c=null!=a.length;if(c&&32!=b)return a;var d=a._jslArrayCache;d||(d=[],a._jslArrayCache=d);var e=a.size();d.length=e;for(var f=0;f<e;f++){var g=c?a[f]:a.get(f);32==b&&null==g&&(g="");d[f]=g}return d};T._f=function(a,b,c){for(var d=2;d<arguments.length;++d){if(null==a)return b;a=a[arguments[d]]}return null==a?b:a};
T._h=function(a,b){for(var c=1;c<arguments.length;++c){if(null==a)return!1;a=a[arguments[c]]}return null!=a};T._s=function(a,b){for(var c=1;c<arguments.length;++c){if(null==a)return 0;a=a[arguments[c]]}return null==a?0:a?a.length:0};T.and=function(a){for(var b=0;b<arguments.length;++b)if(!arguments[b])return!1;return!0};
T.bidiCssFlip=function(a,b){if(bc.test(b))return b;b=0<=b.indexOf("left")?b.replace(dc,"right"):b.replace(ec,"left");if(0<=ta(cc,a)){var c=b.split(fc);4<=c.length&&(b=[c[0],c[3],c[2],c[1]].join(" "))}return b};T.bidiDir=function(a,b,c){var d=0,e=0,f=!1;a=Ib(a,b).split(Ob);for(b=0;b<a.length;b++){var g=a[b];Kb.test(Ib(g,void 0))?(d++,e++):Lb.test(g)?f=!0:Jb.test(Ib(g,void 0))?e++:Pb.test(g)&&(f=!0)}switch(0==e?f?1:0:0.4<d/e?-1:1){case 1:return"ltr";case -1:return"rtl";default:return c}};
T.bidiExitDir=function(a,b,c){return Mb.test(Ib(a,b))?"ltr":Nb.test(Ib(a,b))?"rtl":c};T.bidiLocaleDir=function(){var a=Gb.a.is_rtl;return null!=a&&a?"rtl":"ltr"};T.url=function(a,b){var c;"string"==typeof a?(c=new Vb,c.a.original_value=a):c=new Vb(a);gc(c);if(b)for(var d=0;d<b.length;++d){for(var e=b[d],f=null!=e.key?e.key:e.key,g=null!=e.value?e.value:e.value,e=!1,k=0;k<Fb(c.a);++k)if(Tb(Zb(c,k))==f){e=k;(new Sb(Eb(c.a)[e])).a.value=g;e=!0;break}e||(e=$b(c),e.a.key=f,e.a.value=g)}return c.a};
T.urlToString=function(a){a=new Vb(a);gc(a);var b;if(null!=a.a.path){var c=a.a.path;b=null!=c?c:""}else b=null;var d;null!=a.a.hash?(c=a.a.hash,d=null!=c?c:""):d=null;var e;null!=a.a.host?(c=a.a.host,e=null!=c?c:""):e=null;var c=null!=a.a.protocol?Wb(a):null,f=null!=a.a.port&&(null==a.a.protocol||"http"==Wb(a)&&80!=Xb(a)||"https"==Wb(a)&&443!=Xb(a))?Xb(a):null,g=b;b=new O(null,void 0);c&&tb(b,c);e&&(b.o=e);f&&ub(b,f);g&&(b.s=g);d&&(b.r=d);for(c=0;c<Fb(a.a);++c)d=Zb(a,c),b.a.set(Tb(d),Ub(d));return b.toString()};
T.urlParam=function(a,b){var c=new Vb(a);gc(c);for(var d=0;d<Fb(c.a);++d){var e=Zb(c,d);if(Tb(e)==b)return Ub(e)}return""};T.hasUrlParam=function(a,b){var c=new Vb(a);gc(c);for(var d=0;d<Fb(c.a);++d)if(Tb(Zb(c,d))==b)return!0;return!1};T.bind=function(a,b){return null==a?null:new ac(a,b)};T.debug=function(a,b){window.console&&window.console.log&&!1!==b&&window.console.log(a);return"string"==typeof a?"'"+a.replace(/\'/g,"\\'")+"'":String(a)};T.ge=function(a,b){return a>=b};
T.gt=function(a,b){return a>b};T.le=function(a,b){return a<=b};T.lt=function(a,b){return a<b};T.has=function(a){try{return void 0!==a.call(null)}catch(b){return!1}};T.size=function(a){try{var b=a.call(null);return p(b)?b.length:void 0===b?0:1}catch(c){return 0}};T.range=function(a,b,c){c=~~c;0==c&&(c=1);var d=[];if(0<c)for(a=~~a;a<b;a+=c)d.push(a);else for(a=~~a;a>b;a+=c)d.push(a);return d};T.string=function(a){return""+a};T["int"]=function(a){return 0<=a?Math.floor(a):Math.ceil(a)};
T.icu_plural_category=function(a,b){return 0<b&&a<=b+1?""+a:Rb(a-b)};function Jc(a){var b;b||(b=Kc(a||arguments.callee.caller,[]));return b}
function Kc(a,b){var c=[];if(0<=ta(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(Lc(a)+"(");for(var d=a.arguments,e=0;d&&e<d.length;e++){0<e&&c.push(", ");var f;f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=Lc(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.substr(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(Kc(a.caller,
b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")}function Lc(a){if(Mc[a])return Mc[a];a=String(a);if(!Mc[a]){var b=/function ([^\(]+)/.exec(a);Mc[a]=b?b[1]:"[Anonymous]"}return Mc[a]}var Mc={};function Nc(a,b,c,d,e){"number"==typeof e||Oc++;d||ea();this.c=b;delete this.b;delete this.a}Nc.prototype.b=null;Nc.prototype.a=null;var Oc=0;Nc.prototype.getMessage=function(){return this.c};function X(){this.b=this.c=this.a=null}function Pc(a,b){this.name=a;this.value=b}Pc.prototype.toString=function(){return this.name};var Qc=new Pc("CONFIG",700);X.prototype.getChildren=function(){this.b||(this.b={});return this.b};function Rc(a){if(a.c)return a.c;if(a.a)return Rc(a.a);qa("Root logger has no level set.");return null}
X.prototype.log=function(a,b,c){if(a.value>=Rc(this).value)for("function"==m(b)&&(b=b()),a="log:"+this.d(0,b,c,X.prototype.log).getMessage(),l.console&&(l.console.timeStamp?l.console.timeStamp(a):l.console.markTimeline&&l.console.markTimeline(a)),l.msWriteProfilerMark&&l.msWriteProfilerMark(a),a=this;a;)a=a.a};
X.prototype.d=function(a,b,c,d){a=new Nc(0,String(b));if(c){a.b=c;var e;d=d||X.prototype.d;try{var f;var g=ba("window.location.href");if(q(c))f={message:c,name:"Unknown error",lineNumber:"Not available",fileName:g,stack:"Not available"};else{var k,n;b=!1;try{k=c.lineNumber||c.da||"Not available"}catch(ob){k="Not available",b=!0}try{n=c.fileName||c.filename||c.sourceURL||l.$googDebugFname||g}catch(N){n="Not available",b=!0}f=!b&&c.lineNumber&&c.fileName&&c.stack&&c.message&&c.name?c:{message:c.message||
"Not available",name:c.name||"UnknownError",lineNumber:k,fileName:n,stack:c.stack||"Not available"}}e="Message: "+ga(f.message)+'\nUrl: <a href="view-source:'+f.fileName+'" target="_new">'+f.fileName+"</a>\nLine: "+f.lineNumber+"\n\nBrowser stack:\n"+ga(f.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+ga(Jc(d)+"-> ")}catch(D){e="Exception trying to expose exception! You win, we lose. "+D}a.a=e}return a};var Sc={},Tc=null;
function Uc(a){Tc||(Tc=new X,Sc[""]=Tc,Tc.c=Qc);var b;if(!(b=Sc[a])){b=new X;var c=a.lastIndexOf("."),d=a.substr(c+1),c=Uc(a.substr(0,c));c.getChildren()[d]=b;b.a=c;Sc[a]=b}return b};Uc("jslayout.reactive.ControllerPool");function Vc(a){this.b=a;this.a={}}s(Vc,x);var Wc=[];h=Vc.prototype;h.listen=function(a,b,c,d){p(b)||(b&&(Wc[0]=b.toString()),b=Wc);for(var e=0;e<b.length;e++){var f=Za(a,b[e],c||this.handleEvent,d||!1,this.b||this);if(!f)break;this.a[f.key]=f}return this};h.M=function(a,b,c,d,e){if(p(b))for(var f=0;f<b.length;f++)this.M(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.b||this,c=$a(c),d=!!d,b=Oa(a)?Va(a.l,String(b),c,d,e):a?(a=K(a))?Va(a,b,c,d,e):null:null,b&&(eb(b),delete this.a[b.key]);return this};
h.removeAll=function(){y(this.a,eb);this.a={}};h.A=function(){Vc.O.A.call(this);this.removeAll()};h.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};Uc("goog.net.XhrIo");function Y(a,b){L.call(this);this.g=!1;this.a=a;this.m=this.a.find(".icon-container");this.c=this.a.find(".title");this.d=this.a.find(".hover-target");this.f=0===Z(this)?jQuery(".id-sub-nav-store"):this.a.find(".sub-nav");this.H=this.a.find(".library-link");this.I=this.a.find(".shop-link");this.b=this.a.find(".menu-link");this.k="transparent";this.u=150;this.G=this.J=0;this.h=b;this.B=!0;this.n=!1}s(Y,L);
function Xc(a){a.d.mouseenter(r(Y.prototype.X,a));a.d.mouseleave(r(Y.prototype.W,a));a.H.click(r(Y.prototype.L,a,a.H));a.I.click(r(Y.prototype.L,a,a.I));a.k=""+a.m.css("background-color");a.b.on("click",r(Y.prototype.P,a));a.a.find(".secondary-sub-nav-option").each(r(function(a,c){var d=jQuery(c);d.click(r(Y.prototype.L,this,d))},a));a.a.css("left",-1E3);a.a.show();a.G=ra(a.b.height());a.J=0!==a.f.length?ra(a.f.height()):0;a.a.hide();a.a.css("left",0);a.a.show()}
function Yc(a){jQuery(".chosen").removeClass("chosen");a.I.addClass("chosen")}h=Y.prototype;h.show=function(){this.a.show()};function Zc(a){return 0==Z(a)?a.J+8:a.J}function Z(a){a=a.a.attr("data-backend");return null!=a?parseInt(a,10):null}function $c(a,b){var c=0,d=a.h;b>a.h?c=48:b==a.h&&(d=0);return 48*d+c}h.Q=function(a,b){if(0==a){var c={type:"corpus-in-selected-state"};c.animating=b;ib(this,c);this.n||(this.f.css("opacity",1),this.f.slideDown(300))}};
function ad(a,b){a.n=!1;bd(a);a.f.hide();a.b.removeClass("selected default").addClass("not-selected");b?cd(a):(a.d.css("width",48),a.a.css("left",-48),a.b.css("width",48),a.a.removeClass("visible-item"),a.a.addClass("hidden-item"),a.c.css({color:"#555"}));a.u=250;a.g=!1;a.b.off("click");a.b.on("click",r(Y.prototype.P,a))}
function cd(a){a.a.animate({left:-48},20,r(function(){this.a.removeClass("visible-item");this.a.addClass("hidden-item")},a));a.d.animate({width:48},150);a.c.css({color:"#555"});a.c.hide();a.b.css("background-color","transparent").animate({width:48},150)}function dd(a){ed(a);a.a.removeClass("hidden-item").addClass("visible-item").css("opacity",0).animate({left:0,opacity:1},a.u);a.d.animate({width:200},150);a.b.animate({width:200},150);a.c.css("display","table-cell")}
function fd(a){a.n=!1;a.g?0==a.a.position().top&&a.f.stop(!0,!0).css("color","transparent"):(ed(a),a.a.animate({left:-48,opacity:0},a.u,r(function(){this.a.removeClass("visible-item").addClass("hidden-item").css("opacity",1)},a)),a.b.css({"background-color":"transparent",width:0}),a.d.width(0),a.c.css("color","transparent"))}
function gd(a,b,c){a.n=!1;bd(a);a.g=!0;a.b.removeClass("not-selected default").addClass("selected");a.a.removeClass("hidden-item").addClass("visible-item").css("opacity",1);c&&a.m.css("background-color",a.k);b?(a.b.animate({width:200},150).css("background-color",a.k),a.a.animate({left:0},150),a.m.css("background-color",a.k),a.d.animate({width:200},150),a.c.css("color","#fff").show()):(a.b.width(200).css("background-color",a.k),a.a.css("left",0),a.d.width(200),a.c.css("color","#fff").show(),a.f.slideDown(300));
a.b.off("click")}function ed(a){a.b.finish();a.m.finish();a.a.finish();a.d.finish();a.c.finish();a.f.finish()}function bd(a){a.b.stop(!0,!0);a.m.stop(!0,!0);a.a.stop(!0,!0);a.d.stop(!0,!0);a.c.stop(!0,!0);a.f.stop(!0,!0)}h.L=function(a,b){b.altKey||b.ctrlKey||b.metaKey||b.shiftKey||(jQuery(".chosen").removeClass("chosen"),a.hasClass("id-cannot-set-chosen")||a.addClass("chosen"))};
h.X=function(){!this.g&&this.a.hasClass("visible-item")?(this.b.css("background-color",this.k),this.c.css({color:"#fff"})):ib(this,{type:"hover"})};h.W=function(){!this.g&&this.a.hasClass("visible-item")&&(this.b.css("background-color",this.B?"transparent":"#fff"),this.c.css({color:"#555"}))};
h.P=function(a){a.altKey||a.ctrlKey||a.metaKey||a.shiftKey||0!==jQuery(a.currentTarget).closest(".sub-nav-option").length||0!==jQuery(a.currentTarget).closest(".secondary-sub-nav-option").length||ib(this,{type:"click",menuItemClicked:this})};function $(){this.a=null;this.c=[];this.b=jQuery(".nav-container");this.d=jQuery(".show-all-hover-zone");this.k=this.n=0;this.h=new Vc(this);this.m=sa(this.b.css("background-color"));this.g=this.b.find(".hover-arrow");this.f=0;this.u=!(Fa&&jQuery("body").hasClass("exp-nonsticky-nav"))}
function hd(a){if(0!=a.b.length){jQuery(".nav-list-item").each(r(function(a,b){var e=jQuery(b),f=e.find(".menu-link"),e=new Y(e,a);Xc(e);f.hasClass("selected")&&(this.a=e);this.h.listen(e,"corpus-in-selected-state",this.V);this.h.listen(e,"click",this.U);this.h.listen(e,"hover",this.K);this.f+=e.G;this.c.push(e)},a));ua(a.c,function(a){0==Z(a)&&(null==this.a&&(this.a=a),a.f.css("top",48*this.c.length))},a);id(a);a.a&&jd(a,a.a,!1,!1);var b=jQuery(window);b.scroll(r(function(){this.u&&this.b.toggleClass("sticky",
b.scrollTop()>this.n)},a));a.d.on("mouseenter",r($.prototype.C,a));a.b.on("mouseleave",r($.prototype.K,a))}}function id(a){var b;b=null!=a.a?0==Z(a.a)?a.f+Zc(a.a)+6+6:Math.max(a.f,Zc(a.a)+a.a.G+6+6):a.f;a.b.animate({height:b},a.k);a.d.animate({height:b},a.k);a.b.find(".hover-arrow");b=Math.ceil((b-48)/2)+48-Math.ceil(a.g.height()/2);a.g.css("top",b)}h=$.prototype;
h.V=function(a){a=a.animating;var b=0==Z(this.a);id(this);a||(y(this.c,function(a){b&&(a.B=!0,a.g||dd(a));a.show()},this),this.b.css("visibility","visible"),this.n=this.b.offset().top);b&&(a&&y(this.c,function(a){a.B=!0;a.g||(ed(a),a.a.removeClass("hidden-item").addClass("visible-item").css("opacity",0).css({left:0,opacity:1},a.u),a.d.css({width:200},150),a.b.css({width:200},150),a.c.css("display","table-cell"))},this),this.d.off("mouseenter"),this.d.hide(),this.g.hide())};
h.$=function(a){var b=a.backend;a.isWishlist||null==b||0==b?ua(this.c,function(a){0==Z(a)&&(null!=this.a&&a==this.a?null!=this.a&&a==this.a&&jQuery(".chosen").removeClass("chosen"):jd(this,a,!0,!0))},this):ua(this.c,function(c){if(null!=Z(c)&&b==Z(c))return null!=this.a&&c==this.a||jd(this,c,!0,!0),a.librarySubNavSelected?(c=this.a,jQuery(".chosen").removeClass("chosen"),c.H.addClass("chosen")):Yc(this.a),!1},this);return!1};
h.U=function(a){a.altKey||a.ctrlKey||a.metaKey||a.shiftKey||jd(this,a.menuItemClicked,!0,!1)};
function jd(a,b,c,d){null!=b||ua(a.c,function(a){0==Z(a)&&(this.a&&b==this.a||(b=a))},a);a.b.css("background-color",a.m);a.d.off("mouseenter");if(0!=Z(b))a.d.on("mouseenter",r($.prototype.C,a));a.d.show();a.g.show();a.k=300;null!=a.a&&a.a!=b&&ad(a.a,c);kd(a.a,b);a.a=b;gd(b,c,d);c&&!d&&Yc(b);y(a.c,function(a){a!==b&&ad(a,c);if(c){var d=$c(a,b.h);a.a.animate({top:d},400,r(a.Q,a,d,!0))}else d=$c(a,b.h),a.a.animate({top:d},400,r(a.Q,a,d,!1));a.B=!1},a)}
function kd(a,b){var c=jQuery(".nav-list-item"),d=jQuery(".nav");0<a.h&&a.a.insertAfter(c[a.h]);b.a.prependTo(d)}h.C=function(){null!=this.a&&(this.d.off("mouseenter"),y(this.c,function(a){a.n=!0;a.g?0!=Z(a)&&a.f.finish().css("color","transparent"):(dd(a),a.b.css("background-color","#fff"),a.c.css("color","#555"))},this),this.b.css("background-color","#fff"))};
h.K=function(){this.a&&0!=Z(this.a)&&(this.d.on("mouseenter",r($.prototype.C,this,!0)),y(this.c,function(a){fd(a)},this),this.b.css("background-color",this.m))};h.Z=function(a){jQuery(a.currentTarget).hasClass("visible-item")||(jQuery("body").focusin(r($.prototype.aa,this)),this.C())};h.aa=function(a){a=jQuery(a.target).closest(".nav-list-item");if(a.children(".menu-link").hasClass("selected")||0===a.length)jQuery("body").off("focusin"),this.K()};function ld(){this.a=new $}aa("initializeApp",function(){var a=new ld;hd(a.a);a=r(a.b,a);aa("postLoadInitialize",a)});ld.prototype.b=function(){var a=this.a;window.navAddHandler(r(a.$,a));jQuery(".nav-list-item").focusin(r($.prototype.Z,a))};})();
