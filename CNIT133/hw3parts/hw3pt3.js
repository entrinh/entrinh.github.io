function convertTemp(unit) {
	var temp = parseInt(document.forms["convert"].elements["temp"].value);
	if(isNaN(temp)) {
		document.getElementById("error").innerHTML = "<p>Please enter a number into the field.</p>";
		document.getElementById("result").value = "";
	} else {
		document.getElementById("error").innerHTML = "";
		if(unit === 'c') {
			document.getElementById("result").value = Math.round((9/5 * temp) + 32) + "°F";
		} else {
			document.getElementById("result").value = Math.round(5/9 * (temp - 32)) + "°C";
		}
	}
}