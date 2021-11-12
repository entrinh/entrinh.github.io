$(document).ready(function() {
	$("dd").hide();
	$("dt").click(function() {
		$(this).next("dd").toggle();
	});
});