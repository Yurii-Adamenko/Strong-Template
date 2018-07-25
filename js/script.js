(function ($) {  
	
	$(document).ready(function(){
      $("html").niceScroll({
      	cursorwidth: "8px",
      	mousescrollstep: "10",
      });
  });

	$('.header-menu__btn').click(function(){
		$(this).toggleClass('open');
		$('.header-menu__list').toggleClass('active');
	});
})(jQuery);