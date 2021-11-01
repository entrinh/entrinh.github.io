function findChar() {
	var txt = document.forms["search"].elements["txt"].value.toLowerCase();
	var ch = document.forms["search"].elements["char"].value.toLowerCase();
	var results = document.getElementById("results");
	var format = /^.$/;
	var count = 0;
	if(txt.length < 1) {
		results.value = "Please enter or paste some text into the text box.";
	} else if(!format.test(ch)) {
		results.value = "Please enter a single character to search for in the character search box.";
	}
	else {
		for(let i = 0; i < txt.length; ++i) {
			if(txt.charAt(i) === ch) {
				count++;
			}
		}
		if(count === 0) {
			results.value = "";
			var errWin = window.open("", "error", "width=300,height=100,top=360,left=200");
			errWin.focus();
			errWin.document.write("<!DOCTYPE html>");
			errWin.document.write("<html lang='en'>");
			errWin.document.write("<head>");
			errWin.document.write("<meta charset='utf-8'>");
			errWin.document.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
			errWin.document.write("<link rel='stylesheet' href='../global.css'>");
			errWin.document.write("<link rel='stylesheet' href='hw6pt2.css'>");
			errWin.document.write("</head>");
			errWin.document.write("<body>");
			errWin.document.write("<p>Search character \'" + ch + "\' not found in text string!</p>");
			errWin.document.write("</body>");
		} else {
			results.value = "\'" + ch + "\' count: " + count;
		}
	}
}