

//sitepoint XMLHttpRequest Helper object
function XHRHelper()
{
}


//create a request object
//OUT# request = object|null; XHR object or null
XHRHelper.prototype.createRequestObject = function()
{
	//we should test for the window object first
	//because mac/ie5 returns a [useless] object for activeXobject
	var request = null;
	if(typeof window.XMLHttpRequest != 'undefined')
	{
		try { request = new XMLHttpRequest(); }
		catch(err) { request = null; }
	}
	else if(typeof window.ActiveXObject != 'undefined')
	{
		try { request = new ActiveXObject('Microsoft.XMLHTTP'); }
		catch(err) { request = null; }
	}

	//return the request object / null
	return request;
};


//test for support
//OUT# true|false = boolean; whether XHR is supported
XHRHelper.prototype.isSupported = function()
{
	//try to create a request object
	var request = this.createRequestObject();

	//if that was successful return true, otherwise false
	return request ? true : false;
};


//make an xmlhttp request
//IN# method = string; HTTP request method
//IN# uri = string; HTTP request URI
//IN# postdata = string|null; HTTP POST data
//IN# callback = object fn; callback function reference
//OUT# object = XHR request object
XHRHelper.prototype.doRequest = function(method, uri, postdata, callback)
{
	//try to create a request object
	var request = this.createRequestObject();

	//if that was successful
	if(request)
	{
		//open the request, including a timestamp to prevent caching
		request.open(method, uri + '?n=' + new Date().getTime(), true);

		//if the method is POST
		if(method == 'POST')
		{
			//set request header accordingly
			request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		}

		//if we have a callback function defined
		if(typeof callback == 'function')
		{
			//bind readystatechange handler
			//to call the callback function on readyState 4
			request.onreadystatechange = function()
			{
				if(request.readyState == 4)
				{
					callback();
				}
			}
		}

		//make the request
		request.send(postdata);
	}

	//return the request object
	return request;
};

