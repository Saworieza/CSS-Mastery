

//open encapsulation wrapper
(function(){


	//instantiate the DateTimeHelper object
	var datetime = new DateTimeHelper();

	//define context element by looking for different elements
	//this is so we can use the same script in contests and marketplace
	//if no context is found (so contextID remains null)
	//the DateTime::get_elements function will default to document
	var contextID = null, IDs = [
		'contestlist',
		'contestview',
		'upgradecontest',
		'marketplacelist',
		'auctionview',
		'htmllistingview',
		'upgradelisting',
		'mymarketplace',
		'mycontests',
		'marketplaceprofile',
		'contestsprofile',
		'userlist',
		'mainpanel'
		];
	for(var i=0; i<IDs.length; i++)
	{
		if(document.getElementById(IDs[i]))
		{
			contextID = IDs[i];
			break;
		}
	}

	//get a collection of contest times, which are span elements within the contestlist
	//that have the sitepoint-datetime microformat classname
	//this will return an array of objects with .element and .timestamp properties
	var times = datetime.get_elements('span', contextID, 'sitepoint-datetime');

	//iterate through the collection
	for(var i=0; i<times.length; i++)
	{
		//if the item is a starttime
		if(times[i].element.className.indexOf('starttime') != -1)
		{
			//convert the time to a local datetime string without seconds
			//and if it doesn't contain the showtime class,
			//also compress dates to summary versions
			var time = datetime.convert_to_local_string(
					times[i].timestamp,
					false,
					(times[i].element.className.indexOf('showtime') == -1)
					);

			//write the local datetime string back to the source element
			times[i].element.firstChild.nodeValue = time;
		}
	}

	//wrapper function to convert endtime to time difference countdown
	function convert_endtime()
	{
		//iterate through the collection
		for(var i=0; i<times.length; i++)
		{
			//if the item is an endtime and doesn't have the disabled class
			if(times[i].element.className.indexOf('endtime') != -1 && times[i].element.className.indexOf('disabled') == -1)
			{
				//convert the time to a local datetime string without seconds
				//also compressing dates to summary versions
				var time = datetime.convert_to_local_string(times[i].timestamp, false, true);

				//get the difference between now and the endtime
				var between = datetime.get_time_difference(times[i].timestamp);

				//format this difference as a sentence, without seconds and abbreviated
				//and compressing the difference down to 2 significant factors
				var sentence = datetime.format_time_difference(between, 'endtime', false, true, true);
				
				var myContextID = contextID;
				
				// `check if the parent class already has a class of `'won', indicating a `bin bid
				if('undefined' != (typeof times[i].element.parentNode.className)
					&& times[i].element.parentNode.className.indexOf('won') != -1)
				{
					sentence = '';
					myContextID = 'binbid';
				}

				//if the sentence value is empty, the time has expired
				if(sentence == '')
				{
					//define the appropriate expired message
					switch(myContextID)
					{
						case 'contestlist' :
							var msg = 'Contest Ended';
							break;

						case 'contestview' :
							msg = 'This contest has ended already';
							break;

						case 'upgradecontest' :
							msg = 'This contest has ended already';
							break;

						case 'marketplacelist' :
							msg = 'Listing Ended';
							break;

						case 'auctionview' :
							msg = 'This auction has ended already';
							break;

						case 'htmllistingview' :
							msg = 'This listing has ended';
							break;

						case 'upgradelisting' :
							msg = 'This listing has ended already';
							break;

						case 'mymarketplace' :
							msg = 'Listing Expired';
							break;

						case 'mycontests' :
							msg = 'Contest Ended';
							break;

						case 'marketplaceprofile' :
							msg = 'Listing Expired';
							break;

						case 'contestsprofile' :
							msg = 'Contest Ended';
							break;
							
						case 'binbid':
							msg = 'Won';
							break;

						default :
							msg = 'Listing Ended';
					}
					
					//msg = 'Listing Ended';
					
					//write the contest expired message back to the source element
					times[i].element.firstChild.nodeValue = msg;

					//add the disabled className
					times[i].element.className += ' disabled';

					//write the time string and expired message to the title attribute
					times[i].element.setAttribute('title', time + ' (' + msg + ')');

					//iterate upwards looking for the containing row
					//and break if we don't ever find one (if we get to body)
					var node = times[i].element;
					while(node.nodeName.toLowerCase() != 'tr')
					{
						if(!node.parentNode) { break; }
						else if(node.nodeName.toLowerCase() == 'body') { break; }
						else { node = node.parentNode; }
					}

					//if we have a row
					if(node.nodeName.toLowerCase() == 'tr')
					{
						//add the disabled className
						node.className += ' disabled';

						//now get the cells within this row
						//iterate through them to look for one that has
						//"-status" in its headers attribute, indicating that
						//the cell shows the status of a listing
						var cells = node.getElementsByTagName('td');
						for(var c=0; c<cells.length; c++)
						{
							//if we find one
							if(cells[c].getAttribute('headers') && cells[c].getAttribute('headers').indexOf('-status') != -1)
							{
								//extract the content parsed of whitespace
								//to get the current status
								var currentstatus = cells[c].innerHTML.replace(/\s/g, '');

								//only if the current status is "Open"
								//remove its child nodes, then add a new text node
								//that says "Closed"; and we're done
								if(currentstatus == 'Open')
								{
									while(cells[c].childNodes.length > 0)
									{
										cells[c].removeChild(cells[c].firstChild);
									}
									cells[c].appendChild(document.createTextNode('Completed'));
									break;
								}
							}
						}
					}
				}

				//otherwise we're still going
				else
				{
					//write the difference sentence back to the source element
					times[i].element.firstChild.nodeValue = sentence;

					//add the .difference className
					times[i].element.className += ' difference';

					//if there's 2 hours or less to go add the .imminent className
					//(using 121 because it might be 2 hours and 59 seconds, which displays as 2 hours)
					if(between.mindiff < 121)
					{
						times[i].element.className += ' imminent';
					}

					//write the time string and the difference to the title attribute
					times[i].element.setAttribute('title', time + ' (' + sentence + ')');
				}
			}
		}
	}

	//do it straight away
	convert_endtime();

	//then repeat roughly every 30 seconds
	//even though the output resolution is only to the minute
	//"1 min" could mean anything from 1:01 to 1:59
	//so this improves the overall accuracy of the data for a given view
	window.setInterval(function() { convert_endtime(); }, 30000);


//close encapsulation wrapper
})();
