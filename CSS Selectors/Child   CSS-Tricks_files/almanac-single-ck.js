var browserNames=[];$(".browser-support-table").last().find("th").each(function(){browserNames.push($(this).text())});$(".browser-support-table").last().find("td").each(function(e,t){$(t).attr("data-browser-name",browserNames[e])});