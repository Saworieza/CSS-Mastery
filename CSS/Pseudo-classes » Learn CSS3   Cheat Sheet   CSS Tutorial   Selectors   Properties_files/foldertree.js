
//constructor
function Foldertree(navid)
{
	//get a reference to the overall nav structure
	//and don't continue if it's not there
	this.tree = document.getElementById(navid);
	if(!this.tree) { return; }
	
	//store a shortcut reference to the body element
	this.body = document.getElementsByTagName('body').item(0);
	
	//create an idcounter tha will be used
	//to create programatic ID attributes for submenu lists
	this.idcounter = 0;

	//add event handlers to each individual item
	var items = this.tree.getElementsByTagName('li');
	for(var i=0, ilen=items.length; i<ilen; i++)
	{
		this.addItemTrigger(items[i]);
	}
	
	//add event handlers to each group header
	var headings = this.tree.getElementsByTagName('h3');
	for(i=0, ilen=headings.length; i<ilen; i++)
	{
		this.addHeadingTrigger(headings[i]);
	}
}




//add handlers to an individual item
Foldertree.prototype.addItemTrigger = function(li)
{
	//get a reference to this item's submenu, if it has one
	var menu = li.getElementsByTagName('ul').length > 0
		? li.getElementsByTagName('ul')[0] 
		: null;
		
	//add here-indication text to items that are currently active
	if(/active/.test(li.className) && !/containsactive/.test(li.className))
	{
		var here = document.createElement('em');
		here.appendChild(document.createTextNode(' (you are here)'));
		if(menu)
		{
			li.insertBefore(here, menu);
		}
		else
		{
			li.appendChild(here);
		}
	}
		
	//if this item has no submenu, we're done here
	if(!menu) { return; }
	
	//save shortcut references to the link and span inside this item,
	var a = li.getElementsByTagName('a')[0];
	var span = li.getElementsByTagName('span')[0];

	//add expander icon and menu ID
	li.className += (li.className=='' ? '' : ' ') + 'hasmenu';
    var expander = document.createElement('a');
    menu.id = 'navpanel-menu' + this.idcounter++;
    expander.href = '#' + menu.id;
    expander.className = 'twisty';
    expander.setAttribute('title', 'Click to open');
    expander.appendChild(document.createTextNode('...'));
    //insert BEFORE text
    span.insertBefore(expander, a);

	//if this item is active pre-show its subenu
	if(/active/.test(li.className))
	{
		menu.style.display = 'block';
		expander.className += (expander.className=='' ? '' : ' ') + 'open';
		expander.title = 'Click to close';
	}
	
	//create a reference to this for inner funcitons
	var self = this;

	//bind a click handler to the expander icon
	//using a DOM 0 handler for reliability
	expander.onclick = function(e)
	{
		//get the target and convert to list item
		var target = e ? e.target : window.event.srcElement;
		while(target.nodeName.toLowerCase() != 'li')
		{
			target = target.parentNode;
		}

		//if the target is the container of this icon
		if(target == this.parentNode.parentNode)
		{
			//if we have a menu
			if(menu)
			{
				//if it's already open, close it
				if(menu.style.display == 'block')
				{
					menu.style.display = 'none';
					expander.className = expander.className.replace(/ ?open/g, '');
					expander.title = 'Click to open';
				}
				//otherwise open it
				else
				{
					menu.style.display = 'block';
					expander.className += (expander.className=='' ? '' : ' ') + 'open';
					expander.title = 'Click to close';
				}
				
				//force redraw
				self.redraw();
				
				//don't follow the link
				return false;
			}
			
			//if we get here then just allow the default behavior
			//which will jump to the fragment ID of the menu
			return true;
		}
		
		//likewise
		return true;
	};
};





//add handlers to a group heading
Foldertree.prototype.addHeadingTrigger = function(heading)
{
	//save shortcut references to the link and span inside this item,
	var a = heading.getElementsByTagName('a')[0];
	var span = heading.getElementsByTagName('span')[0];
	
	//get a the menu that comes after it, if there is one
	//and stop if there isn't one
	if(!heading.nextSibling) { return; }
	var menu = heading.nextSibling;
	while(menu.nodeType != 1) 
	{ 
		if(!menu.nextSibling) { return; }
		menu = menu.nextSibling; 
	}
	if(menu.nodeName.toLowerCase() != 'ul') { return; }

	//add expander icon and menu ID
	heading.className += (heading.className=='' ? '' : ' ') + 'hasmenu';
    var expander = document.createElement('a');
    menu.id = 'navpanel-menu' + this.idcounter++;
    expander.href = '#' + menu.id;
    expander.className = 'twisty';
    expander.setAttribute('title', 'Click to open');
    expander.appendChild(document.createTextNode('...'));
    //append AFTER text
    span.appendChild(expander, a);
    
    //positioning hack for IE6
    if(typeof document.uniqueID != 'undefined' && expander.offsetTop > 0)
    {
    	expander.runtimeStyle.top = (span.offsetHeight - expander.offsetHeight) + 'px';
    }
    
	//if this group is active, show its menu
	if(/(contains)?active/.test(heading.className))
	{
		menu.style.display = 'block';
		expander.className += (expander.className=='' ? '' : ' ') + 'open';
		expander.title = 'Click to close';
	}
	
	//save a reference to this for inner functions
	var self = this;

	//bind a click handler to the expander icon
	//using a DOM 0 handler for reliability
	expander.onclick = function(e)
	{
		//get the target and convert to heading
		var target = e ? e.target : window.event.srcElement;
		while(target.nodeName.toLowerCase() != 'h3')
		{
			target = target.parentNode;
		}

		//if the target is the container of this icon
		if(target == this.parentNode.parentNode)
		{
			//if we have a menu
			if(menu)
			{
				//if it's already open, close it
				if(menu.style.display == 'block')
				{
					menu.style.display = 'none';
					expander.className = expander.className.replace(/ ?open/g, '');
					expander.title = 'Click to open';
				}
				//otherwise open it
				else
				{
					//find its current top position, with respect to the whole canvas
					var beforetop = (self.getTopPosition(heading) - self.getTopScrolling(heading));
					
					//close all other menus and open this one
					self.clearSiblingMenus(target.getElementsByTagName('a').item(0));
					
					//if it's now off the page, scroll the window to bring it into view
					//this will move it to the same position that the preiously open menu
					var aftertop = (self.getTopPosition(heading) - self.getTopScrolling(heading));
					if(aftertop < 0)
					{
						window.scrollTo(0, self.getTopPosition(heading) - beforetop);
					}



					menu.style.display = 'block';
					expander.className += (expander.className=='' ? '' : ' ') + 'open';
					expander.title = 'Click to close';
				}
				
				//force redraw
				self.redraw();
				
				//don't follow the link
				return false;
			}
			
			//if we get here then just allow the default behavior
			//which will jump to the fragment ID of the menu
			return true;
		}
		//likewise
		return true;
	};
};






//clear all currently open menus
Foldertree.prototype.clearSiblingMenus = function(trigger)
{
	//get a collection of group headings
	var headings = this.tree.getElementsByTagName('h3');
	for(var i=0; i<headings.length; i++)
	{
		//if the heading corresponds to the menu we want to open next, do nothing
		if(headings[i] == trigger.parentNode.parentNode) { continue; }
		
		//remove its open class name
		headings[i].className = headings[i].className.replace(/ ?open/g, '');
			
		//get a reference to the link inside the heading
		//and remove its open class name
		var a = headings[i].getElementsByTagName('a')[1];
		if(a)
		{
			a.className = a.className.replace(/ ?open/g, '');
		}

		//get a reference to the menu, if there is one
		//if there isn't one just continue to the next iteration
		if(!headings[i].nextSibling) { continue; }
		var menu = headings[i].nextSibling;
		while(menu.nodeType != 1) 
		{ 
			if(!menu.nextSibling) { break; }
			menu = menu.nextSibling; 
		}
		if(!menu || menu.nodeName.toLowerCase() != 'ul') { continue; }

		//hide the menu
		menu.style.display = 'none';
	}
};




//force a page redraw, which avoids rendering issues in Opera and Safari
Foldertree.prototype.redraw = function()
{
	this.body.style.position = 'relative';
	this.body.style.position = 'static';
};






//get the top position of an element with respect to the whole canvas
Foldertree.prototype.getTopPosition = function(ele)
{
	var top = ele.offsetTop, node = ele.offsetParent;
	while(node != null)
	{
		top += node.offsetTop;
		node = node.offsetParent;
	}
	return top;
};





//get the amount of vetical scrolling
Foldertree.prototype.getTopScrolling = function()
{
	var scroll = 0;

	if (typeof window.pageYOffset != 'undefined')
	{
		scroll = window.pageYOffset;
	}

	else if (typeof document.documentElement.scrollTop != 'undefined'
		&& document.documentElement.scrollTop > 0)
	{
		scroll = document.documentElement.scrollTop;
	}

	else if (typeof document.body.scrollTop != 'undefined')
	{
		scroll = document.body.scrollTop;
	}

	return scroll;
};




//get the height ofthe canvas
Foldertree.prototype.getViewportHeight = function()
{
	var height = 0;

	if (typeof window.innerHeight != 'undefined')
	{
		height = window.innerHeight;
	}
	else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth != 'undefined'
		&& document.documentElement.clientWidth != 0)
	{
		height = document.documentElement.clientHeight;
	}
	else
	{
		height = document.getElementsByTagName('body')[0].clientHeight;
	}

	return height;
}









//instantiate immediately
new Foldertree('index');