$(window).scroll(function() {
	var height = $(window).scrollTop();
	if(height > 100){
		$('header').addClass('active');
		$('.nav__contact').addClass('nav__contact--show');
	} else{
		$('header').removeClass('active');
		$('.nav__contact').removeClass('nav__contact--show');
	}
	if(height > 2000){
		$('.dark-here').addClass('dark-theme');
		$('.dark-here-color').addClass('dark-theme-color');
	} else{
		$('.dark-here').removeClass('dark-theme');
		$('.dark-here-color').removeClass('dark-theme-color');
	}
});

var $page = $('html, body');
$('a[href*="#"]').click(function() {
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 900);
	return false;
});