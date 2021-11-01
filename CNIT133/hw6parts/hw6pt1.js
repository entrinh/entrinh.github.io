function validate() {
	var num = document.forms["math"].elements["num"].value;
	var err = document.getElementById("error");
	var txt = document.getElementById("results");
	
	if(isNaN(parseFloat(num))) {
		txt.value = "Please enter a decimal value";
	} else {
		const format = /^\d{0,}.\d{4,}$/;
		var result = format.test(num);
		
		if(!result) {
			txt.value = "Please enter a decimal value with at least four decimal positions";
		} else {
			num = parseFloat(num);
			txt.value = "Original inputted number: " + num;
			txt.value += "\nRounded to the nearest integer: " + Math.round(num);
			txt.value += "\nSquare root then rounded to the nearest integer: " + Math.round(Math.sqrt(num));
			txt.value += "\nRounded to the nearest tenths position: " + (Math.floor(num * 10 + 0.5) / 10).toFixed(1);
			txt.value += "\nRounded to the nearest hundredths position: " + (Math.floor(num * 100 + 0.5) / 100).toFixed(2);
			txt.value += "\nRounded to the nearest thousandths position: " + (Math.floor(num * 1000 + 0.5) / 1000).toFixed(3);
		}
	}
}