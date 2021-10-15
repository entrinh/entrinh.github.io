function changeURL(pd_sel) {
	var url = pd_sel.options[pd_sel.selectedIndex].value;
	var win = window.open(url, "_blank", "noopener noreferrer");
}