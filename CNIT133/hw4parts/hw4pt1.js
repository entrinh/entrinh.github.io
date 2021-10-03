function fourSumProduct() {
	var sum = 0, product = 1;
	for(let i = 5; i <= 21; i += 4) {
		sum += i;
		product *= i;
	}
	document.getElementById("four-sum").innerHTML = "5 + 9 + 13 + 17 + 21 = " + sum;
	document.getElementById("four-prod").innerHTML = "5 * 9 * 13 * 17 * 21 = " + product.toLocaleString();
	
}

function threeSumProduct() {
	var sum = 0, product = 1, i = 3;
	do {
		sum += i;
		product *= i;
		i += 3;
	} while(i <= 21);
	document.getElementById("three-sum").innerHTML = "3 + 6 + 9 + 12 + 15 + 18 + 21 = " + sum;
	document.getElementById("three-prod").innerHTML = "3 * 6 * 9 * 12 * 15 * 18 * 21 = " + product.toLocaleString();
}

$(document).ready(function() {
	$("p").draggable();
});