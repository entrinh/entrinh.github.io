function getNumbers() {
	document.getElementById("num1").innerHTML = Math.floor(Math.random() * 10); // random integer between 0 and 9 inclusive
	document.getElementById("num2").innerHTML = Math.floor(Math.random() * 10);
}

function check() {
	var num1 = parseInt(document.getElementById("num1").innerHTML);
	var num2 = parseInt(document.getElementById("num2").innerHTML);
	if($("#response").valid()) {
		var ans = parseInt(document.forms["response"].elements["ans"].value);
		if(ans === num1 * num2) {
			document.forms["response"].style.display = "none";
			document.forms["play-again"].style.display = "block";
		} else {
			document.getElementById("msg").innerHTML = "No. Please try again.";
		}
		document.forms["response"].elements["ans"].value = "";
	}
}

function playAgain(choice) {
	if(choice === 'y') {
		document.getElementById("msg").innerHTML = "";
		getNumbers();
		document.forms["response"].style.display = "block";
		document.forms["play-again"].style.display = "none";
	} else {
		document.getElementById("content").innerHTML = "<p id='end'><strong>Thank you for playing.</strong></p>"
	}
}

$(document).ready(function() {
	$("#response").validate({
		rules: {
			ans: {
				required: true,
				number: true
			}
		},
		messages: {
			ans: {
				required: "Please type in your answer into the box.",
				number: "Only numbers are allowed as your answer."
			}
		}
	});
});