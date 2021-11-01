function extract() {
	var phone = document.forms["phone-num"].elements["phone"].value;
	var err = document.getElementById("err");
	var p1 = document.getElementById("p1"),
		p2 = document.getElementById("p2"),
		p3 = document.getElementById("p3");
	if(phone.length != 14) {
		err.innerHTML = "Please enter a complete phone number";
		p1.value = p2.value = p3.value = "";
	} else {
		err.innerHTML = "";
		var split1 = phone.split(" ");
		var split2 = split1[1].split("-");
		p1.value = split1[0].substr(1, 3); // extract area code
		p2.value = split2[0]; // second set of digits
		p3.value = split2[1]; // third set of digits
	}
}

//jQuery mask for formatting phone number field automatically
$(document).ready(function() {
	$("input[name='phone']").mask("(000) 000-0000");
});