(function(){var h=document,i=window,b=true,a="tcb-1.0",j=0.66,n=100,c;function k(o,q,d){var p=h.ce(o);p.className=q;if(d){p.id=d;}return p;}function e(){if(!c){_ate.track.apc(a);c=1;}}addthis.box=function(o,d){m(o,d,f);};var m=function(x,q,z){if(!(x instanceof Array)){x=_ate.util.select(x);}for(var w=0;w<x.length;w++){var d=x[w];q=q||{};e();if(!d.getAttribute("atid")||d.getAttribute("atid")!=w){d.setAttribute("atid",w);}d.conf=q;var p=q.pubid||_ate.pub(),E=q.domain||null,B=q.feed_type||"trending",r=q.feed_period||"week",s=q.feed_service||null,D=q.tag||null;var o=d.getAttribute("addthis:pubid")||p,u=d.getAttribute("addthis:domain")||E,t=d.getAttribute("addthis:feed_type")||B,y=d.getAttribute("addthis:feed_period")||r,v=d.getAttribute("addthis:feed_service")||s,A=d.getAttribute("addthis:tag")||D,C={pubid:o,callback:_ate.util.bind(z,d),period:y,type:t};if(u!=null&&u.length){C.domain=u;}if(v!=null&&v.length){C.service=v;}if(A!=null&&A==="false"){C.tag=false;}else{C.pco=a;}if(b&&document.location.href.indexOf("addthis.com")==-1&&((!q.feed_service&&!q.feed_period&&!q.feed_type)||(_ate.pamp>0))){_ate.feeds.ab(false,true);_ate.feeds.recommend(C);}else{_ate.feeds.trend(C);}}};var l=function(o,d){if(!o){return"";}o=o.replace(new RegExp(String.fromCharCode(160),"g")," ");var p=o.indexOf(d);if(p!=-1){if(p==0){o=o.slice(d.length);}else{if(p==(o.length-d.length)){o=o.slice(0,p);}}}return o;};var g=function(v,d,y,s){var p=false;v=(v||"").replace(new RegExp(String.fromCharCode(160),"g")," ");if(y!=null&&y instanceof Array){for(var w in y){var o=d.lastIndexOf("#"),r=y[w].toLowerCase(),q=d.toLowerCase();if(r===q){p=true;break;}else{if(o>0&&r===q.substr(0,o)){p=true;break;}}}}else{if(y!=null&&typeof y==="string"){if(y.toLowerCase()===d.toLowerCase()){p=true;}}}if(s!=null&&s instanceof Array){for(var x in s){if(s[x]===v||x===feedItem.title){p=true;break;}}}else{if(s!=null&&typeof s==="string"){if(s===v||s===feedItem.title){p=true;}}}return p;};var f=function(G){var t=this.conf,E=t.num_links||5,y=t.width||"300",v=t.height||"auto",D=t.remove||null,F="feed_title"in t?t.feed_title:"",x=t.link_target||"_top",B=t.background||null,z=t.border||null,o=t.scroll||"auto",q=t.url_filter||null,r=t.title_filter||null,u=t.transform||function(H){return H;},C=G instanceof Array?G:G.urls||G;E=this.getAttribute("addthis:num_links")||E;y=this.getAttribute("addthis:width")||y;v=this.getAttribute("addthis:height")||v;D=this.getAttribute("addthis:remove")||D;F=this.getAttribute("addthis:feed_title")||F;x=this.getAttribute("addthis:link_target")||x;B=this.getAttribute("addthis:background")||B;z=this.getAttribute("addthis:border")||z;o=this.getAttribute("addthis:scroll")||o;q=this.getAttribute("addthis:url_filter")||q;r=this.getAttribute("addthis:title_filter")||r;u=this.getAttribute("addthis:transform")||u;if(y!="auto"&&isNaN(y)){y="300";}if(v!="auto"&&isNaN(v)){v="auto";}this.className="addthis_trendingcontent";this.innerHTML="";this.style.overflow=o;this.style.backgroundColor=B||"";this.style.border=z!=null?"1px solid "+z:"none";if(y!="auto"){this.style.width=y+"px";}else{this.style.width="";}if(v!="auto"){this.style.height=v+"px";}else{this.style.height="";}if(F&&F!=""){var p=k("P","addthis-content-title");p.innerHTML=F;this.appendChild(p);}var d=0,s=this,A=_ate.feeds.decorator({pco:a,total:(s.conf||{}).num_links||5});_ate.util.each(C,function(N,J){if(d==E){return false;}var O=l(J.title,D),L=J.url;var I=g(O,L,q,r);var H=u({url:L,title:O});if(I===false&&H!==null&&H!==false){L=H.url||L;O=H.title||O;L=A({url:L,pos:N});var K=k("DIV","addthis-content-row"),M=k("A","addthis-content-link");M.href=L;M.title=M.innerHTML=O;M.target=x;if(M.addEventListener){M.addEventListener("click",function(){_ate.ed.fire("addthis.trending.click",M,{url:L});},false);}else{M.attachEvent("onclick",function(){_ate.ed.fire("addthis.trending.click",M,{url:L});});}K.appendChild(M);s.appendChild(K);d++;}});var w=k("DIV","addthis-content-footer");w.innerHTML="Powered by <a class=\"at-whatsthis at-logo at-trending-logo\" target=\"_blank\" href=\"//www.addthis.com/?utm_source=tcb&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main\" id=\"atlogo-sm\">AddThis</a>";this.appendChild(w);if(d>0){_ate.track.apc(a);this.style.display="block";_ate.ed.fire("addthis.trending.render",this,{config:t,container:this});_ate.track.avp(s,a,"ttnl="+E);}else{this.style.display="none";_ate.ed.fire("addthis.trending.empty",this,{});if(typeof console=="object"){console.info("Hiding AddThis Trending Content Box - no trending content returned to display");}}};addthis.box.ost=1;})();