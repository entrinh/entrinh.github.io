function getInfo() {
	var info = document.getElementById("info");
	info.innerHTML = "";
	var states = [["AL", "Alabama", "Montgomery", 4887871], ["AK", "Alaska", "Juneau", 737438], ["AZ", "Arizona", "Phoenix", 7171646], ["AR", "Arkansas", "Little Rock", 3010825], ["CA", "California", "Sacramento", 39557045], ["CO", "Colorado", "Denver", 5694564]];
	var state = document.forms["info"].elements["state"].value.toLowerCase();
	var found = false;
	for(let i = 0; !found && i < states.length; ++i) {
		for(let j = 0; j < 2; ++j) {
			if(state === states[i][j].toLowerCase()) {
				found = true;
				info.innerHTML += "<p><strong>Thanks for your inquiry, here is the information you requested:</strong></p>";
				info.innerHTML += "<p><span class='result'>State Abbreviation: </span>" + states[i][0] + "</p>";
				info.innerHTML += "<p><span class='result'>State Name: </span>" + states[i][1] + "</p>";
				info.innerHTML += "<p><span class='result'>Capital: </span>" + states[i][2] + "</p>";
				info.innerHTML += "<p><span class='result'>Population: </span>" + states[i][3].toLocaleString() + "</p>";
			}
		}
	}
	if(!found) {
		info.innerHTML = "<span id='err'>Please enter the full name or abbreviation for one of the six states listed above</span>"
	}
}