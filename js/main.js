// Действие при скролле
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

// Плавный скролл к якорю
var $page = $('html, body');
$('a[href*="#"]').click(function() {
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 900);
	return false;
});

// Прелоадер
window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
}

// Воспроизвидение звука при наведении на "Контакты"
var myaudio = $("#my-sound")[0];
$("#nav-contact")
	.mouseenter(function() {
		myaudio.play();
	});