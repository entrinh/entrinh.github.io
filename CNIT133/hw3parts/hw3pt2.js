function calcEarn() {
	if($("#sales").valid()) {
		var item1, item2, item3, item4, tot1, tot2, tot3, tot4, tot_amo, tot_ear;
		item1 = parseInt(document.forms["sales"].elements["item1"].value);
		item2 = parseInt(document.forms["sales"].elements["item2"].value);
		item3 = parseInt(document.forms["sales"].elements["item3"].value);
		item4 = parseInt(document.forms["sales"].elements["item4"].value);
		tot1 = Math.round(item1 * 239.99 * 100) / 100; // round to 2 decimal places
		tot2 = Math.round(item2 * 129.75 * 100) / 100;
		tot3 = Math.round(item3 * 99.95 * 100) / 100;
		tot4 = Math.round(item4 * 350.89 * 100) / 100;
		tot_amo = tot1 + tot2 + tot3 + tot4;
		tot_ear = Math.round((200 + 0.09 * tot_amo) * 100) / 100;
		
		document.getElementById("sold1").value = item1;
		document.getElementById("total1").value = "$" + tot1.toFixed(2);
		document.getElementById("sold2").value = item2;
		document.getElementById("total2").value = "$" + tot2.toFixed(2);
		document.getElementById("sold3").value = item3;
		document.getElementById("total3").value = "$" + tot3.toFixed(2);
		document.getElementById("sold4").value = item4;
		document.getElementById("total4").value = "$" + tot4.toFixed(2);
		document.getElementById("total-sold").value = "$" + tot_amo.toFixed(2);
		document.getElementById("total-earnings").value = "$" + tot_ear.toFixed(2);
	}
}

$(document).ready(function() {
	$("#person").tooltip();
	$("#sales").validate({
		rules: {
			item1: {
				required: true,
				number: true,
				min: 0
			},
			item2: {
				required: true,
				number: true,
				min: 0
			},
			item3: {
				required: true,
				number: true,
				min: 0
			},
			item4: {
				required: true,
				number: true,
				min: 0
			}
		}
	});
});