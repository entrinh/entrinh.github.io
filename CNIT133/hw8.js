// regular JavaScript version
/*function showNames(name) {
	if(name.length == 0) {
		document.getElementById("names").innerHTML = "";
	} else {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200) {
				document.getElementById("names").innerHTML = this.responseText;
			}
		};
		xmlhttp.open("GET", "getNames.php?request=" + name, true);
		xmlhttp.send();
	}
}*/

// jQuery version
$(document).ready(function() {
	$("#name").keyup(function() {
		if($("#name").val().length === 0) {
			$("#names").html("");
		} else {
			$.get("getNames.php", {request: $("#name").val()}, function(response) {
				$("#names").html(response);
			});
		}
	});
});

function getInput(input, event) {
	if(event.which === 13) {
		var sub = input.value;
		var listing = document.querySelector("input[type='radio']:checked").value;
		if(sub !== "") {
			accessRedditApi(sub, listing);
		}
	}
}

function accessRedditApi(sub, listing) {
	var url = "https://old.reddit.com/r/" + sub + "/" + listing + ".json"; // turn off tracking protection if it doesn't work initially
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true); // asynchronous request
	xmlhttp.send();
	xmlhttp.onload = function() {   // performs processing once information is retrieved
		if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
			var json = xmlhttp.responseText;
			var data = JSON.parse(json);
			displayData(data);
		} else {
			document.getElementById("posts").innerHTML = "Error code: " + xmlhttp.status;
		}
	}
}

// newer fetch version for asynchronous requests
/*
function accessRedditApi(sub, listing) {
	var url = "https://old.reddit.com/r/" + sub + "/" + listing + ".json";
	var xmlhttp = new XMLHttpRequest();
	fetch(url).then(function(response) {
		return response.json(); // gets json component of response
	}).then(function(json) {
		var data = JSON.stringify(json); // changes that to a string
		data = JSON.parse(data); // now we parse as normal
		displayData(data);
	});
}*/

function displayData(data) {
	document.getElementById("posts").innerHTML = "";
	var listings = data.data.children;
	var listData, listTitle, listAuthor, listRating, listThumbnail, listUrl;
	var listingHtml = "<ol>\n";
	for(const listing of listings) {
		listingHtml += "<li><ul>\n";
		listData = listing.data;
		listTitle = listData.title;
		listAuthor = listData.author;
		listScore = listData.score;
		listUrl = "https://old.reddit.com" + listData.permalink;
		
		listingHtml += "<li><a class='title' href='" + listUrl + "' target='_blank' rel='noopener noreferrer'>" + listTitle + "</a></li>\n";
		listingHtml += "<li>Author: u/" + listAuthor + "</li>\n";
		listingHtml += "<li>Score: " + listScore + "</li>\n";
		listingHtml += "</ul></li>\n";
	}
	listingHtml += "</ol>";
	document.getElementById("posts").innerHTML += listingHtml;
}