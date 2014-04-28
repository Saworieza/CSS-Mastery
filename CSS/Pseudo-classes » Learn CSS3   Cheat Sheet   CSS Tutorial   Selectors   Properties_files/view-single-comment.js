

//open encapsulation wrapper
(function(){

	//instantiate the XHRHelper object
	var requester = new XHRHelper();

	//don't continue if XHR is not supported
	if(!requester.isSupported()) { return; }

	//bind a click handler to the discussion div, if present
	var discuss = document.getElementById('usernotes');
	if(!discuss) { return; }

	//using a DOM0 handler so we can cancel the default action in safari
	discuss.onclick = function(e)
	{
		//ignore button presses that aren't left button in Firefox
		if(typeof e != 'undefined' && typeof e.which != 'undefined' && e.which != 1) { return true; }

		//get event node node reference
		var node = e ? e.target : window.event.srcElement;

		//iterate upwards from event node until we find a link
		//but abandon iteration and return true on the link
		//if we run out of nodes (because we're already at the body) or reach the body
		while(node.nodeName.toLowerCase() != 'a')
		{
			if(!node.parentNode) { return true; }
			else if(node.nodeName.toLowerCase() == 'body') { return true; }
			else { node = node.parentNode; }
		}

		//if we got this far we have a link reference
		//so look for a class value of "view-single-inline", "view-single-loading" or "hide-single-inline"
		if(node.className && /((view|hide)\-single\-(inline|loading))/.test(node.className))
		{
			//iterate upwards until we reach the comment <div>
			var div = node;
			while(div.nodeName.toLowerCase() != 'div')
			{
				div = div.parentNode;
			}

			//if it's a view link
			if(node.className == 'view-single-inline')
			{
				//change the link class and title to indicate loading
				node.firstChild.nodeValue = 'Loading';
				node.className = 'view-single-loading';
				node.title = node.title.replace('View Note', 'Loading Note');

				//make an XHR request for the post, and when it completes
				var request = requester.doRequest('GET', node.href, null, function()
				{
					//if the status is okay or not modified
					if(/(200|304)/.test(request.status.toString()))
					{
						//parse the return HTML
						var html = request.responseText;
						html = html.split('<div class="single-comment">');
						html = html[1].split('</div><!--end-single-comment-->');
						html = html[0];

						//add it to the comments view using a hybrid DOM/innerHTML technique
						//(DOM so it's in the DOM, and innerHTML for speed)
						var newpost = document.createElement('div');
						newpost.innerHTML = html;
						div.parentNode.replaceChild(newpost, div);
					}

					//for any other status
					else
					{
						//change the link back to default
						node.firstChild.nodeValue = 'View';
						node.title = node.title.replace('View Note', 'View Note');
						node.className = 'view-single-inline';

						//follow the link as normal
						document.location = node.href;
					}
				});
			}

			//don't follow the link
			return false;
		}

		//if we got this far we don't have the right link
		//so just follow the link as normal
		return true;
	};





//close encapsulation wrapper
})();
