function count() {
	var int1, int2, int3, int4, int5, negatives = 0, zeros = 0, positives = 0, display;
	int1 = parseInt(document.forms["num-form"].elements["int1"].value);
	int2 = parseInt(document.forms["num-form"].elements["int2"].value);
	int3 = parseInt(document.forms["num-form"].elements["int3"].value);
	int4 = parseInt(document.forms["num-form"].elements["int4"].value);
	int5 = parseInt(document.forms["num-form"].elements["int5"].value);
	
	if(isNaN(int1) || isNaN(int2) || isNaN(int3) || isNaN(int4) || isNaN(int5)) {
		document.getElementById("results").innerHTML = "<p>Please enter a number in each of the fields!</p>";
	} else {
		if(int1 < 0) {
			negatives++;
		} else if(int1 > 0) {
			positives++;
		} else {
			zeros++;
		}
		if(int2 < 0) {
			negatives++;
		} else if(int2 > 0) {
			positives++;
		} else {
			zeros++;
		}
		if(int3 < 0) {
			negatives++;
		} else if(int3 > 0) {
			positives++;
		} else {
			zeros++;
		}
		if(int4 < 0) {
			negatives++;
		} else if(int4 > 0) {
			positives++;
		} else {
			zeros++;
		}
		if(int5 < 0) {
			negatives++;
		} else if(int5 > 0) {
			positives++;
		} else {
			zeros++;
		}
		
		display = "<p><strong>Counts:</strong></p>";
		display += "<p>Positives: " + positives + "<br>";
		display += "Negatives: " + negatives + "<br>";
		display += "Zeros: " + zeros + "<br>";
		document.getElementById("results").innerHTML = display;
	}
}