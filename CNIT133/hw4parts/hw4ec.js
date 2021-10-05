function displaySquare() {
	var sides = parseInt(document.forms["user"].elements["sides"].value);
	var display = document.getElementById("display");
	var error = document.getElementById("error");
	display.innerHTML = "";
	error.innerHTML = "";
	
	if(isNaN(sides)) {
		error.innerHTML = "<p>Please enter a number value</p>";
	} else if(sides < 2 || sides > 10) {
		error.innerHTML = "<p>Please enter a number between 2 and 10</p>";
	} else {
		for(let wid = 0; wid < sides; ++wid) {
			for(let len = 0; len < sides; ++len) {
				if(wid == 0 || wid == sides - 1) {
					display.innerHTML += "*&nbsp;";
				} else {
					if(len == 0 || len == sides - 1) {
						display.innerHTML += "*&nbsp;";
					} else {
						display.innerHTML += "&nbsp;&nbsp;";
					}
				}
			}
			display.innerHTML += "<br>";
		}
	}
}