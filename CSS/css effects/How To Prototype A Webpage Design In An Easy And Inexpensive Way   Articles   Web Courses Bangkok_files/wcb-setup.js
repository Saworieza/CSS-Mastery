jQuery(document).ready(function(){
	jQuery('#slide-navigation img').animate({opacity:0.5});
	jQuery('#slide-navigation img:gt(0)').animate({opacity:1});
	var sam=jQuery(this);
		var panelWidth = sam.find(".panel").width();
		var panelCount = sam.find(".panel").size();
		var panelContainerWidth = panelWidth*panelCount;
		var navClicks = 0; 
		jQuery('.panel', sam).wrapAll('<div class="panel-container"></div>');
		jQuery(".panel-container", sam).css({ width: panelContainerWidth });
		if (location.hash && parseInt(location.hash.slice(1)) <= panelCount) {
			var currentPanel = parseInt(location.hash.slice(1));
			var offset = - (panelWidth*(currentPanel - 1));
			jQuery('.panel-container', slider).css({ marginLeft: offset });
		}else { 
			var currentPanel = 1;
		};

	

	
jQuery('.panel-wrapper-all').easySlider({
				auto: true, 
				continuous: true
			});
	

	jQuery(function() {
		jQuery('#tabs').tabs();
       });
    
    jQuery('.scrollPage').click(function() {
	   var elementClicked = jQuery(this).attr("href");
	   var destination = jQuery(elementClicked).offset().top;
	   jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-0}, 1500 );
	   return false;
	});

});	

(function(jQuery) {
	jQuery.fn.easySlider = function(options){
		var defaults = {			
			speed: 			800,
			auto:			false,
			pause:			8000,
			continuous:		true
		}; 
		
		var options = jQuery.extend(defaults, options);  
		var obj = jQuery(this); 				
		var s = jQuery(".panel", obj).length;	
		var w = jQuery(".panel", obj).width(); 
		var h = jQuery(".panel", obj).height(); 	
		var ts = s-1;
		var t = 0;
		var direction = 0;

		jQuery('#slide-navigation img').each(function(z) {
		jQuery(this).bind("click", function() {
		offset = - (w*z);
		currentPanel = z + 1;
		jQuery('#slide-navigation img').stop().animate({opacity:0.1});
		jQuery(this).stop().animate({opacity:1});
		jQuery('.panel-container', obj).stop().animate({ marginLeft: offset }, 1000);
		t=z;

		setTimeout(function(){	animate("click",true);
		},10000);});});
				
		this.each(function() {  
			function animate(dir,clicked){
			var ot = t;
			var_old=t;
			if(direction==0){direction = (ot>=ts)?1:0}
			else{direction = (ot<=0)?0:1}				
			switch(dir){
				case "next":
				t = (direction == 0) ? (t+1) : 0;						
				break; 
				case "prev":
				t = (t<=0) ? (options.continuous ? ts : 0) : t-1;
				break; 
				case "first":
				t = 0;
				break; 
				case "last":
				t = ts;
				break; 
				case "click":
				t = z;
				break; 
				default:
				break; 
				};	
				
				var diff = Math.abs(ot-t);
				var speed = diff*options.speed;						
				
					p = (t*w*-1);
					jQuery(".panel-container",obj).animate(
						{ marginLeft: p }, 
						speed
					);				
				jQuery("#slide-navigation img").stop().animate({opacity:0.1});
				jQuery('#slide-navigation img:eq('+t+')').stop().animate({opacity:1});		
				
				if(clicked) clearTimeout(timeout);
				if(options.auto && dir=="next" && !clicked){;
					timeout = setTimeout(function(){
						animate("next",false);
					},diff*options.speed+options.pause);
				};
				
			};
			
			var timeout;
			if(options.auto){;
				timeout = setTimeout(function(){
					animate("next",false);
				},options.pause);
			};		
		
						
			
		});
	  
	};

})(jQuery);






