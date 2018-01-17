var main = function() {

	$('.fadeOnLoad').hide(0).fadeIn(1000);
	$('.fadeOnLoadSlow').hide(0).delay(800).fadeIn(800);

	$(window).scroll(function(){

		$('.hideOnLoad').each(function(i){
			var bottom_of_object = $(this).offset().top/*+$(this).outerHeight()*/;
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			if(bottom_of_window > bottom_of_object){
				$(this).animate({'opacity':'1'},1000);
			}
		});
	});

	/*$('.slideFLOnLoad').animate({'marginLeft': "+=500px" }, 3000 );*/


}

$(document).ready(main);
