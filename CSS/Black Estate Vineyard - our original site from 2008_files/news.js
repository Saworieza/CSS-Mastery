// news system


var news = (function() {
    var current = 0;
    var WIDTH = 220;
    var newsContainer, scrollbox, liCount;
    
    
    function init() {
    	newsContainer = $("#news");
    	scrollbox = $("#news-scrollbox");
    	liCount = newsContainer.find("ul").eq(0).children().length;
    	//console.log(newsContainer, liCount, scrollbox, WIDTH);
    	
    	newsContainer.find("#news-navbox").css({ display: "block" });
    	
    	goToCurrent();
    };
    
    function goTo(what) {
    	switch (what) {
    		case "previous":
		    	current--;
    		break;
    		case "next":
    			current++;
    		break;
    		case "archive":
    			current = liCount - 1;
    		break;
    		default:
    			if (typeof what === "number") {
    				current = what;
    			}
    		break;
    	}
    	
    	current = Math.max(0, Math.min(liCount - 1, current));
    	
    	goToCurrent();
    };
    
    function goToCurrent() {
//    	console.log(current);
    	var visible = [];
    	if (!current) {
			visible = ['archive-l', 'next'];
    	}
    	else if (current == liCount - 2) {
			visible = ['previous', 'archive-r'];
    	}
    	else if (current >= liCount - 1) {
			visible = ['previous'];
			
    	}
    	else {
			visible = ['previous', 'next'];
    	}
    	$("#news-navbox *").css({ display: "none" });
    	$("#news-navbox ." + visible.join(', #news-navbox .')).css({ display: "" });
    	
    	if (current >= liCount - 1) {
    		newsContainer.find("h3").html("Archived News");
    	}
    	else {
    		newsContainer.find("h3").html("Latest News");
    	}
    	
    	scrollbox.animate({ left: (-WIDTH * current) + "px" });
    };

    return {
    	init: init,
    	goTo: goTo
    }
})();


$(news.init);

