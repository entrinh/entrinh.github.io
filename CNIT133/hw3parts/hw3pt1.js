function calculate() {
	var hwk, mid, fin, part, finAvg, display = document.getElementById("display");
	hwk = parseInt(document.forms["grades"].elements["hwk-avg"].value);
	mid = parseInt(document.forms["grades"].elements["midterm"].value);
	fin = parseInt(document.forms["grades"].elements["final"].value);
	part = parseInt(document.forms["grades"].elements["participation"].value);
	
	if(isNaN(hwk) || isNaN(mid) || isNaN(fin) || isNaN(part)){
		display.innerHTML = "<p class='error'>Please enter a number value into each field.</p>";
	} else if((hwk < 0 || hwk > 100) || (mid < 0 || mid > 100) || (fin < 0 || fin > 100) || (part < 0 || part > 100)){
		display.innerHTML = "<p class='error'>Please enter a number between 0 and 100 into each field.</p>";
	} else {
		finAvg = 0.5 * hwk + 0.2 * mid + 0.2 * fin + 0.1 * part;
		display.innerHTML = "<p id='results'>Final average: " + Math.round(finAvg) + "<br>";
		display.innerHTML += "Grade: ";
		switch(true) {
			case (finAvg >= 90):
				display.innerHTML += "A";
				break;
			case (finAvg >= 80):
				display.innerHTML += "B";
				break;
			case (finAvg >= 70):
				display.innerHTML += "C";
				break;
			case (finAvg >= 60):
				display.innerHTML += "D";
				break;
			default:
				display.innerHTML += "F";
		}
		if(finAvg < 70) {
			display.innerHTML += "<br><span style='color: red'>Student must retake the course</span>";
		}
		display.innerHTML += "</p>";
	}
}