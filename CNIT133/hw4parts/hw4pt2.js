function calcInterest() {
	var principal = 1000;
	var options = {style: "currency", currency: "USD"};
	
	for(let rate = 5; rate <= 7; rate += 1) {
		var r = rate / 100;
		var table = document.getElementById(rate);
		for(let n = 1; n <= 10; ++n) {
			var accum = principal * (1 + r) ** n;
			table.innerHTML += "<tr><td>" + n + "</td><td>" + accum.toLocaleString("en", options) + "</td><td>" + r + "</td></tr>";
		}
	}
}