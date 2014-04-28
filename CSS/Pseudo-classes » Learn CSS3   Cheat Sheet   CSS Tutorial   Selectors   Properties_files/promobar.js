
/**
 * A top-bar for promotions and notifications.
 * @author Paul Annesley <paul@99designs.com>
 */
//
//(function(){
//
//	var COOKIE_NAME = 'promobar-bushfire',
//		COOKIE_DAYS = 28;
//
//	// adapted from http://www.quirksmode.org/js/cookies.html
//	var Cookie = {
//		set: function(name, value, days) {
//			if (days) {
//				var date = new Date();
//				date.setTime(date.getTime()+(days*24*60*60*1000));
//				var expires = "; expires="+date.toGMTString();
//			}
//			else var expires = "";
//			document.cookie = name+"="+value+expires+"; path=/";
//		},
//		get: function(name) {
//			var nameEQ = name + "=";
//			var ca = document.cookie.split(';');
//			for(var i=0;i < ca.length;i++) {
//				var c = ca[i];
//				while (c.charAt(0)==' ') c = c.substring(1,c.length);
//				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//			}
//			return null;
//		}
//	};
//
//	// Temporarily disable cookie checking while we're testing:
//	if (Cookie.get(COOKIE_NAME)) return;
//
//	var url = 'http://www.sitepoint.com/kits/web-design-businseess-kit/';
//	var link = 'Don\'t Take the Plunge Alone';
//	var description = 'Uncover the trade secrets great designers keep to themselves!';
//
//	var promoBar = document.createElement("div");
//	promoBar.setAttribute('id', 'promobar');
//	promoBar.innerHTML =
//		'<div id="inner"><strong>Starting a Web Design Business?</strong> ' +
//		'<a href="' + url + '"><strong>' + link + '</strong></a>' +
//		' &#8212; ' + description + '</div>' +
//		'<div class="actions">' +
//		'<a id="promobarhide" class="hide" href="#hide" title="Hide" rel="nofollow">Hide</a>' +
//		'</div>';
//
//	document.body.insertBefore(promoBar, document.body.firstChild);
//
//	var hideButton = document.getElementById('promobarhide');
//	hideButton.onclick = function(event){
//		document.getElementById('promobar').style.display = 'none';
//		Cookie.set(COOKIE_NAME, '1', COOKIE_DAYS);
//		return false;
//	};
//
//}());



function cookiecutter() {
  var date = new Date();
  date.setTime(date.getTime()+(30*24*60*60*1000));
  var expires = "; expires="+date.toGMTString();
  document.cookie = 'march2011learnablehide'+expires+"; path=/";
}
function hidepromo() {
  var name = 'march2011learnable';
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(name) == 0) return true;
  }
  return false;
}
function toggle_visibility(id)
{
  var e = document.getElementById(id);
  if(e.style.display == 'none')
    e.style.display = 'block';
  else
    e.style.display = 'none';
  cookiecutter();
  return false;
}

// <div id="promobar"><div id="inner"><span id="pitchtitle2">WIN Big &amp; Profitable Web Design Clients.</span><span id="plunger"></span>\n\
// <span id="pitchdesc2"><a href="http://www.sitepoint.com/launch/50f0df">Find Out How Now!</a></span><a href="http://www.sitepoint.com/launch/50f0df">\n\
// <img src="http://www.sitepoint.com/frontpage/images/guidance.png" id="guidance" /></a><a href="#" title="Close" id="close_button" onclick="return toggle_visibility(\'promobar\');return false;">\n\
// <img src="http://sitepointstatic.com/images/courses/x.png" alt="CLOSE" /></a></div></div>

  

if((typeof promobar_noshow === 'undefined' || promobar_noshow == false) && !hidepromo()){
  var reference = "";
  var url = location.href;
  if( url.indexOf("reference.sitepoint.com") != -1) { reference = "margin-bottom:35px;"; }
  
  var pages = new Array("/bookstore/","/books/","/videos/","/about-us/","/sitemap/","/media/","/mediakit/",
                        "/jobs/","/write-for-us/","/terms/","/glossary.php","/glossary/","/contact/",
                        "/help/","/subscribe/","/launch/","/newsletter/","/kits/","/examples/");
    
  var flag = false;
//  for(var x in pages) {
//      if(url.indexOf(pages[x]) > 0) {
//          flag = true;
//      }
//  }
  
  // if statement is for migration message within books/kit/bookstrore
  if(flag) {
  document.write('<div id="promobar" style="background:#00aae2; height:30px; '+reference+'"><div id="inner" style="padding-top:7px;color:#fff">\n\n\
<center><strong>We are upgrading SitePoint. Bear with us as things may look funky for a few moments - <a href="http://www.sitepoint.com/contact">Contact Support</a>.</strong></center></div></div>');
  }
}