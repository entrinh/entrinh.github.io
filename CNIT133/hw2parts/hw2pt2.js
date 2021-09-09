function calculate() {
	var int1, int2, int3, sum, average, product, min, max, display;
	int1 = parseInt(document.forms["num-form"].elements["int1"].value);
	int2 = parseInt(document.forms["num-form"].elements["int2"].value);
	int3 = parseInt(document.forms["num-form"].elements["int3"].value);
	
	if(isNaN(int1) || isNaN(int2) || isNaN(int3)) {
		document.getElementById("fadeResultsBtn").style.display = "none";
		document.getElementById("results").innerHTML = "<p>Please enter a number in each of the fields!</p>";
	} else {
		document.getElementById("fadeResultsBtn").style.display = "inline-block";
		
		sum = int1 + int2 + int3;
		average = sum / 3;
		product = int1 * int2 * int3;
		min = Math.min(int1, int2, int3);
		max = Math.max(int1, int2, int3);
		
		display = "<p><strong>Results:</strong></p>";
		display += "<p>Sum: " + sum + "<br>";
		display += "Average: " + average + "<br>";
		display += "Product: " + product + "<br>";
		display += "Smallest integer: " + min + "<br>";
		display += "Largest integer: " + max + "</p>";
		document.getElementById("results").innerHTML = display;
	}
}

$(document).ready(function() {
	$("#fadeResultsBtn").click(function() {
		$("#results").fadeTo("slow", 0.15);
	});
});