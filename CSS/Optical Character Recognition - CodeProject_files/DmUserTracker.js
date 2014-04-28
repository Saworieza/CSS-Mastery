//var DmGlobalUserIdUrl = window.location.protocol + "//localhost:28557/Ads/GlobalUserIdentification/GetDmGlobalUserId"; //DEBUG
//var DmGlobalUserIdUrl = window.location.protocol +   "//cp-dev-sql2/Ads/GlobalUserIdentification/GetDmGlobalUserId"; //DEBUG

//var SetSegmentsUrl = window.location.protocol + "//localhost:28557/Ads/GlobalUserIdentification/SetDmGlobalUserTags"; //DEBUG
//var SetSegmentsUrl = window.location.protocol +   "//cp-dev-sql2/Ads/GlobalUserIdentification/SetDmGlobalUserTags"; //DEBUG

var DmGlobalUserIdUrl = window.location.protocol + "//apps.developermedia.com/Ads/GlobalUserIdentification/GetDmGlobalUserId"; //LIVE
//var SetSegmentsUrl = window.location.protocol +   "//apps.developermedia.com/Ads/GlobalUserIdentification/SetDmGlobalUserTags"; //LIVE

//When ready to go live just load a.js to avoid maintaining 2 versions of same functions
//but smaller script could be loaded faster... which is better?
var DMAds =
{
    //Cookies
    //-----------------------------------------------------------------------------------------

    GetDomain: function () {
        var hostname = document.location.hostname;
        var domain = /([^.]+\.[^.]{3,})$/i.exec(hostname);
        return domain != null ? domain[1] : (domain = /([^.]+\.[^.]+\.[^.]{2})$/i.exec(hostname), domain != null ? domain[1] : hostname);
    },

    SetCookie: function (name, value, days, path, domain, secure) {
        var cookie = "", expiryDate;

        cookie = name + "=" + value;
        if (days > 0 && (expiryDate = new Date(), expiryDate.setTime(expiryDate.getTime() + days * 864E5)))
            cookie += "; expires=" + expiryDate.toGMTString();

        path && (cookie += "; path=" + path);
        domain && domain.indexOf(".") != -1 && (cookie += "; domain=" + domain);
        secure && (cookie += "; secure");
        document.cookie = cookie;
    },

    GetCookieValue: function (name) {
        var cookieString = document.cookie;
        var value = null;

        if (cookieString != "") {
            var cookies = cookieString.split(";");

            for (index = 0; index < cookies.length; index++) {
                var cookie = cookies[index].replace(/^\s+/, "");
                if (cookie.substring(0, name.length + 1) == name + "=") {
                    value = cookie.substring(name.length + 1);
                    break;
                }
            }
        }

        return value;
    },

    CookiesEnabled: function () {
        if (navigator.cookieEnabled != void 0) {
            return navigator.cookieEnabled;
        }
        document.cookie = "testcookie=test; max-age=10000";
        return document.cookie.indexOf("testcookie=test") >= 0;
    }

    //End of cookies
    //-----------------------------------------------------------------------------------------
};

if (window.addEventListener) {
    window.addEventListener("message", receiveMessage, false);
}
else {
    try { window.attachEvent("message", receiveMessage); } catch (e) { }
}

function receiveMessage(event) {

    //we dont send a message unless we know the browser has JSON parser
    var receivedMessage = JSON.parse(event.data);
    var DmGlobalUserId = DMAds.GetCookieValue("DmGlobalUserId");

    var sentMessage = new Object();
    sentMessage.Id = receivedMessage.Id;

    var sendDmGlobalUserId = function (response) {

        if (response) {
            DmGlobalUserId = JSON.parse(response).DmGlobalUserId;
            sentMessage.DmGlobalUserId = DmGlobalUserId;
            //expire in 50 years
            DMAds.SetCookie("DmGlobalUserId", DmGlobalUserId, 365 * 50, "/", DMAds.GetDomain(), false);
        }

        event.source.postMessage(JSON.stringify(sentMessage), receivedMessage.sender); //arg 2 is requesting domain name

        //SetUserTags(DmGlobalUserId, receivedMessage.segments, SetSegmentsUrl);
    };

    if (!DmGlobalUserId && receivedMessage && receivedMessage.sender) {
        GetDmGlobalUserId(DmGlobalUserIdUrl, sendDmGlobalUserId);
    }
    else if (receivedMessage && receivedMessage.sender) {
        sentMessage.DmGlobalUserId = DmGlobalUserId;
        event.source.postMessage(JSON.stringify(sentMessage), receivedMessage.sender); //arg 2 is requesting domain name

        //SetUserTags(DmGlobalUserId, receivedMessage.segments, SetSegmentsUrl);
    }
}

function GetDmGlobalUserId(endPointURL, responseCallbackFuntion) {
    var http = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP");

    //****** HOW TO TEST HTTP response statuses ***************************************
    //to trigger timeout set breakpoint in the .cs code file
    //to trigger request failed set target_url to an invalid URL
    server_write_timeout = setTimeout(function () {
        http.abort(); //calling abort will trigger http.status != 200                
    }, 1000);

    http.onreadystatechange = function () {
        try {
            if (http.readyState == 4) {
                clearTimeout(server_write_timeout);
                if (http.status == 200) {
                    responseCallbackFuntion(http.responseText);
                }
                else {
                    responseCallbackFuntion(null);
                }
            }
        }
        catch (e) {
            clearTimeout(server_write_timeout);
            responseCallbackFuntion(null);
        }
    }

    http.open("POST", endPointURL, true); //async send
    http.setRequestHeader("Content-Type", "application/json");
    http.send(null);
}

//optimistically send tags to the server
function SetUserTags(DmGlobalUserId, segments, endPointURL) {
    /*var http = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP");

    var data = new Object();
    data.DmGlobalUserId = DmGlobalUserId;
    data.segments = JSON.stringify(segments);

    http.open("POST", endPointURL, true); //async send
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(data));*/
}

//debug
//GetDmGlobalUserId(window.location.protocol + "//localhost:28557/Ads/GlobalUserIdentification/GetDmGlobalUserId", function (response) { alert(response); });