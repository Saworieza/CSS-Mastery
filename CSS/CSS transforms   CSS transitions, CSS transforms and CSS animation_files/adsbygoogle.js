(function(){var m=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},n=function(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return n.apply(null,arguments)},da=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};var s=(new Date).getTime();var ea=function(){},u=function(a,b,c){switch(typeof b){case "string":t(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),u(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],"function"!=typeof f&&(c.push(d),t(e,c),c.push(":"),u(a,f,c),d=","));
c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},v={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,t=function(a,b){b.push('"');b.push(a.replace(fa,function(a){if(a in v)return v[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return v[a]=e+b.toString(16)}));b.push('"')};var ha=/&/g,ia=/</g,ja=/>/g,ka=/"/g,la=/'/g,y={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},z={"'":"\\'"};var A=function(a){A[" "](a);return a};A[" "]=function(){};var C=document,D=window;var F=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},G=function(a){return!!a&&"function"==typeof a&&!!a.call},ma=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},H=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var d=new Uint16Array(1);window.crypto.getRandomValues(d);c=d[0]/65536}catch(e){c=Math.random()}return a[Math.floor(c*a.length)]}}return null},na=function(a){a.google_unique_id?
++a.google_unique_id:a.google_unique_id=1},oa=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},I=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},pa=function(a){for(var b=[],c=0;a&&25>c;++c){var d=9!=a.nodeType&&a.id,d=d?"/"+d:"",e;t:{var f=a.parentElement;e=a.nodeName.toLowerCase();if(f)for(var f=f.childNodes,g=0,h=0;h<f.length;++h){var k=f[h];if(k.nodeName&&k.nodeName.toLowerCase()==e){if(a==
k){e="."+g;break t}++g}}e=""}b.push((a.nodeName&&a.nodeName.toLowerCase())+d+e);a=a.parentElement}return b.join()},qa=function(a){var b=[];if(a)try{for(var c=a.parent,d=0;c&&c!=a&&25>d;++d){for(var e=c.frames,f=0;f<e.length;++f)if(a==e[f]){b.push(f);break}a=c;c=a.parent}}catch(g){}return b.join()},ra=function(a,b,c,d){c=[c.google_ad_slot,c.google_ad_format,c.google_ad_type,c.google_ad_width,c.google_ad_height];if(d){a=[];for(d=0;b&&25>d;b=b.parentNode,++d)a.push(9!=b.nodeType&&b.id||"");(b=a.join())&&
c.push(b)}else c.push(pa(b)),c.push(qa(a));return I(c.join(":")).toString()},J=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return!1}};var sa={google_analytics_domain_name:!0,google_analytics_uacct:!0},ta=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];F(a,function(a,d){if(null!=a){var e;try{var f=[];u(new ea,a,f);e=f.join("")}catch(g){}e&&ma(b,d,"=",e,";")}});return b.join("")};var K=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ua=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,va=function(a,b){if(!a)return b;var c=a.match(ua);return c?c[0]:b};var wa=K("0.15"),xa=K("0.001"),ya=K("0.2"),za=K("0.001");var Aa=/^true$/.test("false")?!0:!1;var L=!0,Ba={},Da=function(a,b,c,d){var e,f=L;try{e=c()}catch(g){try{var h,k=g.toString();g.name&&-1==k.indexOf(g.name)&&(k+=": "+g.name);g.message&&-1==k.indexOf(g.message)&&(k+=": "+g.message);if(g.stack){var l=g.stack;c=k;try{-1==l.indexOf(c)&&(l=c+"\n"+l);for(var p;l!=p;)p=l,l=l.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");k=l.replace(/\n */g,"\n")}catch(R){k=c}}h=k;k="";g.fileName&&(k=g.fileName);l=-1;g.lineNumber&&(l=g.lineNumber);var B;t:{try{B=d?d():"";break t}catch(ga){}B=""}f=
b(a,h,k,l,B)}catch(x){Ca({context:"protectAndRun",msg:x.toString()+"\n"+(x.stack||"")})}if(!f)throw g;}return e},Fa=function(a,b,c,d,e,f){a={context:a,msg:b.substring(0,512),eid:e&&e.substring(0,40),file:c,line:d.toString(),url:C.URL.substring(0,512),ref:C.referrer.substring(0,512)};Ea(a);Ca(a,f);return L},Ca=function(a,b){if(Math.random()<(b||0.01)){var c="/pagead/gen_204?id=jserror"+Ga(a),c="http"+("https:"==D.location.protocol?"s":"")+"://pagead2.googlesyndication.com"+c,c=c.substring(0,2E3);D.google_image_requests||
(D.google_image_requests=[]);var d=D.document.createElement("img");d.src=c;D.google_image_requests.push(d)}},Ea=function(a){var b=a||{};F(Ba,function(a,d){b[d]=D[a]})},M=function(a,b){return da(Da,a,Fa,b,void 0)},Ga=function(a){var b="";F(a,function(a,d){if(0===a||a)b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};L=!/^true$/.test("false");Ba={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",zrtm:"google_ad_handling_mode",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment"};var N=/^([0-9.]+)px$/,Ha=/^([0-9.]+)$/,O=[{width:120,height:240,format:"vertical"},{width:120,height:600,format:"vertical"},{width:125,height:125,format:"rectangle"},{width:160,height:600,format:"vertical"},{width:180,height:150,format:"rectangle"},{width:200,height:200,format:"rectangle"},{width:234,height:60,format:"horizontal"},{width:250,height:250,format:"rectangle"},{width:300,height:250,format:"rectangle"},{width:300,height:600,format:"vertical"},{width:320,height:50,format:"horizontal"},{width:336,
height:280,format:"rectangle"},{width:468,height:60,format:"horizontal"},{width:728,height:90,format:"horizontal"},{width:970,height:90,format:"horizontal"}],Ia=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var e="google_ad_"+c[d];if(!b.hasOwnProperty(e)){var f=N.exec(a[c[d]]);f&&(b[e]=Math.round(f[1]))}}},Ka=function(a,b,c){O.sort(function(a,b){return a.width-b.width||a.height-b.height});"auto"==b&&(b=Ja(c),b=Math.min(1200,b),b=0.25>=a/b?"vertical":"horizontal,rectangle");for(c=
O.length;c--;)if(O[c].width<=a&&-1!=b.indexOf(O[c].format))return O[c];return null},Ja=function(a){a=a.document;return a.documentElement.clientWidth||a.body.clientWidth};var La=function(a,b,c){var d=["<iframe"],e;for(e in a)a.hasOwnProperty(e)&&ma(d,e+"="+a[e]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins style="display:inline-table;',b,'"><ins id="',a.id+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var P=null,Ma=function(){if(!P){for(var a=window,b=a,c=0;a!=a.parent;)if(a=a.parent,c++,J(a))b=a;else break;P=b}return P};var Q=function(a,b,c){c||(c=Aa?"https":"http");return[c,"://",a,b].join("")};var S=function(a){this.b=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:n(this.m,this)});this.j=a.google_iframe_oncopy},Na;var T="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[&<>"']/.test(T)&&(-1!=T.indexOf("&")&&(T=T.replace(ha,"&amp;")),-1!=T.indexOf("<")&&(T=T.replace(ia,"&lt;")),-1!=T.indexOf(">")&&(T=T.replace(ja,"&gt;")),-1!=T.indexOf('"')&&(T=T.replace(ka,"&quot;")),-1!=T.indexOf("'")&&(T=T.replace(la,"&#39;")));Na=T;S.prototype.set=function(a,b){this.j.handlers[a]=b;this.b.addEventListener&&this.b.addEventListener("load",n(this.k,this,a),!1)};
S.prototype.k=function(a){a=this.b.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};S.prototype.m=function(a,b){var c=Oa("rx",a),d;t:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break t}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var Oa=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var U;t:{var Pa=m.navigator;if(Pa){var Qa=Pa.userAgent;if(Qa){U=Qa;break t}}U=""}var V=function(a){return-1!=U.indexOf(a)};var Ra=V("Opera")||V("OPR"),Sa=V("Trident")||V("MSIE"),Ta=V("Gecko")&&-1==U.toLowerCase().indexOf("webkit")&&!(V("Trident")||V("MSIE")),Ua=-1!=U.toLowerCase().indexOf("webkit");(function(){var a="",b;if(Ra&&m.opera)return a=m.opera.version,"function"==aa(a)?a():a;Ta?b=/rv\:([^\);]+)(\)|;)/:Sa?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Ua&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(U))?a[1]:"");return Sa&&(b=(b=m.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var W=null,Va=function(a){a=a||D.top;try{var b=a.frames.google_esf;if(b&&J(b))return b}catch(c){}try{for(b=0;b<a.frames.length;b++)try{var d=Va(a.frames[b]);if(d)return d}catch(e){}}catch(f){}return null};var X,Y=function(a){this.c=[];this.b=a||window;this.a=0;this.d=null;this.e=0},Wa=function(a,b){this.l=a;this.i=b};Y.prototype.o=function(a,b){0!=this.a||0!=this.c.length||b&&b!=window?this.h(a,b):(this.a=2,this.g(new Wa(a,window)))};Y.prototype.h=function(a,b){this.c.push(new Wa(a,b||this.b));Z(this)};Y.prototype.p=function(a){this.a=1;if(a){var b=M("sjr::timeout",n(this.f,this,!0));this.d=this.b.setTimeout(b,a)}};
Y.prototype.f=function(a){a&&++this.e;1==this.a&&(null!=this.d&&(this.b.clearTimeout(this.d),this.d=null),this.a=0);Z(this)};Y.prototype.q=function(){return!(!window||!Array)};Y.prototype.r=function(){return this.e};Y.prototype.nq=Y.prototype.o;Y.prototype.nqa=Y.prototype.h;Y.prototype.al=Y.prototype.p;Y.prototype.rl=Y.prototype.f;Y.prototype.sz=Y.prototype.q;Y.prototype.tc=Y.prototype.r;var Z=function(a){var b=M("sjr::tryrun",n(a.n,a));a.b.setTimeout(b,0)};
Y.prototype.n=function(){if(0==this.a&&this.c.length){var a=this.c.shift();this.a=2;var b=M("sjr::run",n(this.g,this,a));a.i.setTimeout(b,0);Z(this)}};Y.prototype.g=function(a){this.a=0;a.l()};
var Xa=function(a){try{return a.sz()}catch(b){return!1}},Ya=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&Xa(a)&&G(a.nq)&&G(a.nqa)&&G(a.al)&&G(a.rl)},$=function(){if(X&&Xa(X))return X;var a=Ma(),b=a.google_jobrunner;return Ya(b)?X=b:a.google_jobrunner=X=new Y(a)},Za=function(a,b){$().nq(a,b)},$a=function(a,b){$().nqa(a,b)};var ab={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0},bb=function(){var a=A("script");return["<",a,' src="',Q(va("","pagead2.googlesyndication.com"),"/pagead/js/r20140408/r20140311/show_ads_impl.js",""),'"></',a,">"].join("")},cb=function(a,b,c,d){return function(){var e=!1;d&&$().al(3E4);var f=a.document.getElementById(b);
f&&!J(f.contentWindow)&&3==a.google_top_js_status&&(a.google_top_js_status=6);try{if(J(a.document.getElementById(b).contentWindow)){var g=a.document.getElementById(b).contentWindow,h=g.document;h.body&&h.body.firstChild||(h.open(),g.google_async_iframe_close=!0,h.write(c))}else{var k=a.document.getElementById(b).contentWindow,l;f=c;f=String(f);if(f.quote)l=f.quote();else{g=['"'];for(h=0;h<f.length;h++){var p=f.charAt(h),R=p.charCodeAt(0),B=g,ga=h+1,x;if(!(x=y[p])){var E;if(31<R&&127>R)E=p;else{var r=
p;if(r in z)E=z[r];else if(r in y)E=z[r]=y[r];else{var q=r,w=r.charCodeAt(0);if(31<w&&127>w)q=r;else{if(256>w){if(q="\\x",16>w||256<w)q+="0"}else q="\\u",4096>w&&(q+="0");q+=w.toString(16).toUpperCase()}E=z[r]=q}}x=E}B[ga]=x}g.push('"');l=g.join("")}k.location.replace("javascript:"+l)}e=!0}catch(qb){k=Ma().google_jobrunner,Ya(k)&&k.rl()}e&&(e=Oa("google_async_rrc",c),(new S(a)).set(b,cb(a,b,e,!1)))}},db=function(a){var b=["<iframe"];F(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");
return b.join("")},eb=function(a,b,c,d){d=d?'"':"";var e=d+"0"+d;a.width=d+b+d;a.height=d+c+d;a.frameborder=e;a.marginwidth=e;a.marginheight=e;a.vspace=e;a.hspace=e;a.allowtransparency=d+"true"+d;a.scrolling=d+"no"+d},gb=function(a,b,c){fb(a,b,c,function(a,b,f){a=a.document;for(var g=b.id,h=0;!g||a.getElementById(g);)g="aswift_"+h++;b.id=g;b.name=g;g=Number(f.google_ad_width);h=Number(f.google_ad_height);16==f.google_reactive_ad_format?(f=a.createElement("div"),f.innerHTML=La(b,g,h),c.appendChild(f.firstChild)):
c.innerHTML=La(b,g,h);return b.id})},fb=function(a,b,c,d){var e=A("script"),f={};eb(f,b.google_ad_width,b.google_ad_height,!0);f.onload='"'+Na+'"';d=d(a,f,b);f=b.google_override_format||!ab[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used?H(["c","e"],ya):null;var g=b.google_ad_output,h=b.google_ad_format;h||"html"!=g&&null!=g||(h=b.google_ad_width+"x"+b.google_ad_height,"e"==f&&(h+="_as"));g=!b.google_ad_slot||b.google_override_format||!ab[b.google_ad_width+"x"+b.google_ad_height]&&
"aa"==b.google_loader_used;h=h&&g?h.toLowerCase():"";b.google_ad_format=h;h=ra(null,c,b,!0);b.google_ad_unit_key=h;h=a.google_adk2_experiment=a.google_adk2_experiment||H(["C","E"],xa)||"N";if("E"==h){b.google_ad_unit_key_2=ra(a,c,b);h=[b.google_ad_slot,b.google_ad_type];b.google_ad_unit_key_var=I(h.join());g=qa(a);h.push(g);b.google_ad_unit_key_win=I(g);g=pa(c);h.push(g);b.google_ad_unit_key_dom=I(g);g=[b.google_ad_width,b.google_ad_height];if(c&&a&&(c=a.getComputedStyle?a.getComputedStyle(c,null):
c.currentStyle)){var k=(c.display||"inline").replace("none","inline"),l=c.position||"static",p=c.cssFloat||c.styleFloat||"none";g.push(l);"static"==l||"relative"==l?(g.push("none"==p?k:""),g.push(p)):(g.push(""),g.push(""));if("static"!=l)for(k=["top","bottom","left","right"],l=0;l<k.length;l++)p=c[k[l]],g.push(p&&"auto"!=p?p:"")}b.google_ad_unit_key_css=I(g.join());b.google_ad_unit_key_3=I(h.join(":"))}else"C"==h&&(b.google_ad_unit_key_2="ctrl");b=ta(b);(c=1!=a.google_unique_id)||(W||(W=Va()),c=
W);c?c=null:(c={},eb(c,0,0,!1),c.style="display:none",c.id="google_esf",c.name="google_esf",c.src=Q(va("","googleads.g.doubleclick.net"),"/pagead/html/r20140408/r20140311/zrt_lookup.html"),c=db(c));h=(new Date).getTime();g=a.google_top_experiment;k=a.google_async_for_oa_experiment;l=a.google_always_use_delayed_impressions_experiment;f=["<!doctype html><html><body>",c,"<",e,">",b,"google_show_ads_impl=true;google_unique_id=",
a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',s,";",g?'google_top_experiment="'+g+'";':"",k?'google_async_for_oa_experiment="'+k+'";':"",l?'google_always_use_delayed_impressions_experiment="'+l+'";':"",f?'google_append_as_for_format_override="'+f+'";':"","google_bpp=",h>s?h-s:1,";google_async_rrc=0;</",e,">",bb(),"</body></html>"].join("");(a.document.getElementById(d)?Za:$a)(cb(a,d,f,!0))},hb=Math.floor(1E6*Math.random()),ib=function(a){for(var b=a.data.split("\n"),c={},
d=0;d<b.length;d++){var e=b[d].indexOf("=");-1!=e&&(c[b[d].substr(0,e)]=b[d].substr(e+1))}b=c[3];if(c[1]==hb&&(window.google_top_js_status=4,a.source==top&&0==b.indexOf(a.origin)&&(window.google_top_values=c,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},jb=function(a,b){var c=navigator;if(a&&b&&c){try{var d=I([b,c.plugins&&c.plugins.length,a.screen&&a.screen.height,
(new Date).getTimezoneOffset(),c.userAgent].join())}catch(e){return}if(d/4294967296<za){var d=a.document,c=d.createElement("script"),f;(f=b)?(f=f.toLowerCase())&&"ca-"!=f.substring(0,3)&&(f="ca-"+f):f="";c.src=Q("www.gstatic.com","/pub-config/"+f+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d);a.google_per_pub_attempted=!0}}};var kb=function(a){return/(^| )adsbygoogle($| )/.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},mb=function(a,b,c){na(c);lb(a,b,c);var d=c.getComputedStyle?c.getComputedStyle(a,null):a.currentStyle;if(!d||"none"!=d.display||"on"==b.google_adtest||0<b.google_reactive_ad_format){1==oa(c)&&jb(c,b.google_ad_client);F(sa,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";if((d=b.google_ad_output)&&"html"!=d)throw Error("No support for google_ad_output="+d);Da("aa::main",Fa,
function(){gb(c,b,a)})}else c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag"))},lb=function(a,b,c){for(var d=a.attributes,e=d.length,f=0;f<e;f++){var g=d[f];if(/data-/.test(g.nodeName)){var h=g.nodeName.replace("data","google").replace(/-/g,"_");b.hasOwnProperty(h)||(g=g.nodeValue,"google_reactive_ad_format"==h&&(g=+g,g=isNaN(g)?null:g),null===g||(b[h]=g))}}if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=
50,a.style.display="none";else if(d=b.google_ad_format,"auto"==d||/^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d)){d=a.offsetWidth;e=b.google_ad_format;c=Ka(d,e,c);if(!c)throw Error("Cannot find a responsive size for a container of width="+d+"px and data-ad-format="+e);b.google_ad_height=c.height;b.google_ad_width=300<d&&300<c.height?c.width:1200<d?1200:Math.round(d);a.style.height=b.google_ad_height+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else!Ha.test(b.google_ad_width)&&
!N.test(a.style.width)||!Ha.test(b.google_ad_height)&&!N.test(a.style.height)?(c=c.getComputedStyle?c.getComputedStyle(a,null):a.currentStyle,a.style.width=c.width,a.style.height=c.height,Ia(c,b),b.google_loader_features_used=256):Ia(a.style,b)},nb=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=b[++c])if(kb(d)&&(!a||d.id==a))return d;return null},ob=function(a){var b=a.element;a=a.params||{};if(b){if(!kb(b)&&(b=b.id&&nb(b.id),!b))throw Error("adsbygoogle: 'element' has already been filled.");
if(!("innerHTML"in b))throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");}else if(b=nb(),!b)throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");var c=window;b.setAttribute("data-adsbygoogle-status","done");mb(b,a,c)},pb=function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:J(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=D.top.frames.google_top_static_frame?
!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=H(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],wa),"jp_c"!==window.google_top_experiment){a=window;a.addEventListener?a.addEventListener("message",ib,!1):a.attachEvent&&a.attachEvent("onmessage",ib);window.google_top_js_status=3;a={0:"google_loc_request",1:hb};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=
20;(a=d.shift())&&0<b--;)try{ob(a)}catch(e){throw window.setTimeout(pb,0),e;}window.adsbygoogle={push:ob}};pb();})();
