/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').on('click', function(event) {
    event.preventDefault();
    var $anchor = $(this);
    var navbarHeight = $('.navbar').outerHeight();
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - navbarHeight
    }, 1500, 'easeInOutExpo');
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});