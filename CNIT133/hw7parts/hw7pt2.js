$(document).ready(function() {
	$(".submenu").hide();
	$("ul.dropdown li").mouseover(function() {
		$("ul:first", this).show();
	});
	$("ul.dropdown li").mouseout(function() {
		$("ul:first", this).hide();
	});
});