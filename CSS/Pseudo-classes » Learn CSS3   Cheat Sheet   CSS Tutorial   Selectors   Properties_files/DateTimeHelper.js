


//sitepoint datetime helper object
function DateTimeHelper()
{
}


//get all elements of a particular type, within a given context, with a particular microformat classname
//IN# element = string; tag name or "*"
//IN# context = string or null; ID of context element, or null to mean document
//IN# classname = string; className of microformat
//OUT# collection = array; collection of found elements
DateTimeHelper.prototype.get_elements = function(element, context, classname)
{
	//if context is null, use document, otherwise use specified element
	context = context == null ? document : document.getElementById(context);

	//get all elements of specified type within the given context
	var elements = context.getElementsByTagName(element);

	//build a collection of elements containing the given classname
	var collection = [];
	for(var i=0; i<elements.length; i++)
	{
		if(elements[i].className.indexOf(classname) != -1)
		{
			//create an object containing the element reference
			var obj = { 'element' : elements[i] }

			//add data according to the microformat
			switch(true)
			{
				//for datetime, get RFC timestamp from node value
				case (classname.indexOf('sitepoint-datetime') != -1) :
					obj.timestamp = elements[i].firstChild.nodeValue;
					break;
			}

			//add this object to the collection
			collection[collection.length] = obj;
		}
	}

	//return the collection
	return collection;
};


//convert an RFC date string to the same string in local time
//IN# datestring = string; RFC date string
//IN# showseconds = boolean; whether to include seconds in the output
//** could replace this with a resolution argument, eg "minute" means down to minutes, "hour" means down to hours
//IN# compress = boolean; whether to convert very recent dates to word comparison and remove time from older dates
//OUT# local = string; RFC date string in local time
DateTimeHelper.prototype.convert_to_local_string = function(datestring, showseconds, compress)
{
	//convert input date to local string
	var local = new Date(datestring).toString();
	
	//alert('before = ' + datestring + '\nafter = ' + local);
	
	//now see if our locale string ends with the year value
	//(which IE does, while others end with offset)
	var matches = /^.*[ ]([0-9]{4})$/.exec(local);
	//if so, save the year value so we can add it back on
	//because parsing out the offset information will remove it
	if(matches)
	{
		var savedyear = matches[matches.length - 1];
	}

	//parse out the timezone/offset information
	local = local.replace(/(([0-9]{2}:){2}[0-9]{2}).*$/, '$1');

	//now see if the resulting string contains the year
	var hasyear = /[ ]([0-9]{4}[ ])/.test(local);
	//if it doesn't (because of the IE difference just now)
	//then insert it back in the right place
	//in this situation we know that the string will end with the time
	//so we can remove that, add the year, then put it back together again
	if(!hasyear)
	{
		matches = local.match(/[ ]([0-9]{2}:[0-9]{2}:[0-9]{2})$/);
		if(matches)
		{
			var savedtime = matches[matches.length - 1];
			local = local.split(' ');
			local.pop();
			local = local.join(' ') + ' ' + savedyear + ' ' + savedtime;
		}
	}
	
	//parse out the seconds if the showseconds argument is false
	if(!showseconds)
	{
		local = local.replace(/([0-9]{2}:[0-9]{2}):[0-9]{2}/, '$1');
	}
	
	//if the compress argument is true
	if(compress)
	{
		//find out whether the input date is in the future or the past
		var between = this.get_time_difference(datestring);
		var isfuture = between.mindiff >= 0;

		//if the date is in the past get the difference between today at midnight and the input date
		//if it's in the future then get the difference between tomorrow at midnight and the input
		var dateobj = new Date();
		if(isfuture)
		{
			dateobj.setTime(dateobj.getTime() + (1000 * 60 * 60 * 24));
		}
		dateobj.setHours(0, 0, 0, 0);
		between = this.get_time_difference(datestring, dateobj);

		//if the difference between the dates is less than a day
		//(and the total difference is less than 48 hours, so that for eg
		//"Jun 10" is not seen as yesterday on "Sep 11")
		if(between.day < 1 && Math.abs(between.mindiff) < 2880)
		{
			//extract just the time from the local time string
			local = local.replace(/(^.*)( [0-9]{2}.*)$/, '$2');

			//if the input date is in the past
			if(!isfuture)
			{
				//if the mindiff between the input date and today at midnight is positive
				//then the input date occured today
				if(between.mindiff >= 0)
				{
					local = 'Today' + local;
				}

				//or if it's negative then the date occured yesterday
				else
				{
					local = 'Yesterday' + local;
				}
			}

			//or if the input date is in the future
			else
			{
				//if the mindiff between the input date and tomorrow at midnight is negative
				//then in the input date will occur today
				if(between.mindiff < 0)
				{
					local = 'Today' + local;
				}

				//or if it's positive then the date will occur tomorrow
				else
				{
					local = 'Tomorrow' + local;
				}
			}
		}

		//otherwise just remove the time
		else
		{
			local = local.replace(/(^.*)( [0-9]{2}.*)$/, '$1');
		}
	}

	//return the result
	return local;
};


//get the time difference between two dates
//IN# datestring = string; RFC date string
//IN# dateobj = object; object comparison date
//OUT# between = object; object of difference values
DateTimeHelper.prototype.get_time_difference = function(datestring, dateobj)
{
	//create a date object from the date string,
	var date = new Date(datestring);

	//and a date object that represents now
	//unless we have an input date argument, in which case use that
	var now = typeof dateobj == 'undefined' ? new Date() : dateobj;

	//create an object of differences, beginning with a mindiff value
	//which is the total difference in minutes
	//we can use this to work out if a future time has been reached, or a past time is not in the past
	//and to modify behavior when something has just started or is about to end
	var between = { 'mindiff' : (date.getTime() - now.getTime()) / 60000 };

	//the current assumption is that now is earlier than the input date
	//to give the difference from now to the later date
	//but if that's not the case, invert the values
	//so that you'll get the difference from the earlier date to now
	if (now >= date)
	{
		var tmp = date;
		date = now;
		now = tmp;
	}

	//add individual differences to the between object
	between.year = date.getFullYear() - now.getFullYear();
	between.month = date.getMonth() - now.getMonth();
	between.day = date.getDate() - now.getDate();
	between.hour = date.getHours() - now.getHours();
	between.minute = date.getMinutes() - now.getMinutes();
	between.second = date.getSeconds() - now.getSeconds();

	//convert negative second difference to minute difference
	if (between.second < 0)
	{
		between.minute--;
		between.second += 60;
	}

	//convert negative minute difference to hour difference
	if (between.minute < 0)
	{
		between.hour--;
		between.minute += 60;
	}

	//convert negative hour difference to day difference
	if (between.hour < 0)
	{
		between.day--;
		between.hour += 24;
	}

	//convert negative day difference to month difference
	//this one is more complicated because months aren't all the same length
	if (between.day < 0)
	{
		between.month--;
		var ynum = date.getFullYear();

		var mlengths = [
			31,
			(ynum % 4 == 0 && ynum % 100 != 0 || ynum % 400 == 0) ? 29 : 28,
			31, 30, 31, 30, 31, 31, 30, 31, 30, 31
			];

		var mnum = date.getMonth() - 1;
		if (mnum < 0) { mnum += 12; }

		between.day += mlengths[mnum];
	}

	//convert negative month difference to year difference
	if (between.month < 0)
	{
		between.year--;
		between.month += 12;
	}

	//return the between object
	return between;
};


//format the difference between two dates
//IN# between = object; between object returned by get_time_between
//IN# direction = string; "endtime" or "startime" to control the syntax
//IN# seconds = boolean; whether to include seconds in the output
//** could replace this with a resolution argument, eg "minute" means down to minutes, "hour" means down to hours
//IN# abbreviate = boolean; whether to abbreviate time value names in the output, eg. "minute" to "min"
//IN# compress = boolean; whether to compress output differences to 2 significant factors
//OUT# sentence = string; formatted sentence for time since / remaining
DateTimeHelper.prototype.format_time_difference = function(between, direction, seconds, abbreviate, compress)
{
	//begin to define the output sentence
	var sentence = '';

	//if the direction is endtime and mindiff is less than 1
	if(direction == 'endtime' && between.mindiff < 1)
	{
		//if it's less than zero this is in an endtime in the past
		//so just return and empty string and we're done
		if(between.mindiff < 0)
		{
			return '';
		}

		//otherwise if we're not including seconds
		//add "less than 1 minute" to the string
		else if(!seconds)
		{
			sentence += 'Less than 1 minute';
		}
	}

	//if the direction is starttime and mindiff is greater than -1
	if(direction == 'starttime' && between.mindiff > -1)
	{
		//if it's greater than zero this is a starttime in the future
		//so just return and empty string and we're done
		if(between.mindiff > 0)
		{
			return '';
		}

		//otherwise if we're not including seconds
		//add "Less than 1 minute" to the string
		else if(!seconds)
		{
			sentence += 'Less than 1 minute';
		}
	}

	//iterate through the between object and compile the object
	for(var i in between)
	{
		//don't include mindiff, or seconds if the seconds argument is false
		if(i == 'mindiff' || (i == 'second' && !seconds)) { continue; }

		//add this value if it's not zero
		if(between[i] > 0)
		{
			sentence += between[i] + ' ' + i + (between[i] > 1 ? 's' : '') + ', ';
		}
	}

	//if the compress argument is true, split the resulting sentence
	//then re-compile including only the first two factors
	if(compress)
	{
		sentence = sentence.split(', ');
		if(sentence.length > 2)
		{
			sentence.length = 2;
		}
		sentence = sentence.join(', ');
	}

	//cut off any trailing comma-space
	if(sentence.charAt(sentence.length - 2) == ',')
	{
		sentence = sentence.substring(0, sentence.length - 2);
	}

	//convert the final comma to " and", if there is one
	if(sentence.indexOf(',') != -1)
	{
		var index = sentence.lastIndexOf(',');
		sentence = sentence.substring(0, index) + sentence.substr(index).replace(',', ' and')
	}

	//if the direction is startime, add the final sentence fragment
	if(direction == 'starttime') { sentence += ' ago'; }

	//if the abbreviate argument is true, abbreviate time value names
	if(abbreviate)
	{
		//define the abbreviations
		var abbr = { 'year' : 'yr', 'month' : 'mth', 'hour' : 'hr', 'minute' : 'min', 'second' : 'sec' }

		//iterate through the abbreviations
		//and do string replacements on the sentence
		for(var a in abbr)
		{
			sentence = sentence.replace(a, abbr[a]);
		}
	}

	//return the formatted sentence
	return sentence;
};


//get the user's timezone offset in RFC format (eg. "+1000")
//OUT# rfc = string; formated version of timezone offset
DateTimeHelper.prototype.get_rfc_timezoneoffset = function()
{
	//get the offset (between GMT and locale) and divide into hours
	var offset = new Date().getTimezoneOffset() / 60;

	//begin compiling the output string
	var rfc = '';

	//if we're not at GTM
	if(offset != 0)
	{
		//a positive offset is behind GMT
		if(offset > 0)
		{
			rfc += '-';
		}
		//a negative offset is ahead of GMT
		else
		{
			offset = Math.abs(offset);
			rfc += '+';
		}

		//add trailing zero if necessary
		if(offset < 10) { rfc += '0'; }

		//add fractional offset, converted into minutes if necessary
		if(parseInt(offset, 10) != offset)
		{
			rfc += '' + parseInt(offset, 10) + ((offset - parseInt(offset, 10)) * 60);
		}

		//otherwise just add trailing zeros
		else
		{
			rfc += offset + '00';
		}
	}

	//otherwise we're GMT
	else
	{
		rfc += '+0000';
	}

	//return the result
	return rfc;
};
