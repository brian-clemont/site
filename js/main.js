smoothScroll.init({
    speed    : 1000,
    easing   : 'easeInOutQuint',
    updateURL: false
});

$(document).ready(function() {
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});
});