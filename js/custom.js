

$(function() {
		    $('a.page-scroll').bind('click', function(event) {
		        var $anchor = $(this);
		        $('html, body').stop().animate({
		            scrollTop: $($anchor.attr('href')).offset().top
		        }, 1500, 'easeInOutExpo');
		        event.preventDefault();
		    });
		});



$(window).scroll(function(i){
		var scrollVar = $(window).scrollTop();
		//side-logo
		$('.scroll-top').css({'opacity':(scrollVar -300 )/100});
	});