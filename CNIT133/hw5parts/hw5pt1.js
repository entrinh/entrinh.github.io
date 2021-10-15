function validate(val_form) {
	var valid = true;
	var txt = val_form.elements["txt"].value;
	var rad = val_form.elements["rad"];
	var check = val_form.elements["check"];
	var pull = val_form.elements["sel"].selectedIndex;
	
	if(txt === "") {
		document.getElementById("txt-err").innerHTML = "Please enter a name";
		valid = false;
	} else {
		document.getElementById("txt-err").innerHTML = "";
	}
	if(!rad[0].checked && !rad[1].checked && !rad[2].checked) {
		document.getElementById("rad-err").innerHTML = "Please select your gender";
		valid = false;
	} else {
		document.getElementById("rad-err").innerHTML = "";
	}
	if(!check[0].checked && !check[1].checked && !check[2].checked) {
		document.getElementById("check-err").innerHTML = "Please select one or more of the options below";
		valid = false;
	} else {
		document.getElementById("check-err").innerHTML = "";
	}
	if(pull === 0) {
		document.getElementById("pull-err").innerHTML = "Please pick an option from the pull-down menu";
		valid = false;
	} else {
		document.getElementById("pull-err").innerHTML = "";
	}
	if(valid) {
		alert("Success! Form submitted.");
	}
	return valid;
}