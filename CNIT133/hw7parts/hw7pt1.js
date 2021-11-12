function changeTheme(theme) {
	var bod = document.getElementsByClassName("theme");
	for(const elem of bod) {
		if(theme.value === "light") {
			elem.classList.add("light");
			elem.classList.remove("dark");
		} else {
			elem.classList.add("dark");
			elem.classList.remove("light");
		}
	}
}

function changeText() {
	var boxes = document.forms["pg-layout"].elements["txt"];
	var txt = document.getElementsByClassName("text");
	for(const elem of txt) {
		if(boxes[0].checked) {
			elem.classList.add("bold");
		} else {
			elem.classList.remove("bold");
		}
		if(boxes[1].checked) {
			elem.classList.add("italics");
		} else {
			elem.classList.remove("italics");
		}
	}
}

function changeZoom(selector) {
	var selected = selector[selector.selectedIndex]; // get pulldown option index
	var zoom = parseFloat(selected.value);
	var txt = document.getElementsByClassName("text");
	for(const elem of txt) {
		elem.style.transform = "scale(" + zoom + ")"; // transform: scale(x) adjusts both x and y dimensions, effectively creating a 'zoom' effect
	}
}