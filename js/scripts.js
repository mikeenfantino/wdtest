$(function() {

  /* Match Height
  -------------------------------------------------------------- */

  $('.js-match-height').matchHeight();

	/* Accordion
  -------------------------------------------------------------- */

	$(".accordion > .accordion-item").click(function() {
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});

	/* Mobile Nav
  -------------------------------------------------------------- */

	$('#js-nav-toggle').on("click", function() {
		$('.nav-wrapper').toggleClass("nav-active");
	});

	$(window).on("resize", function() {
		$(".nav-wrapper").removeClass("nav-active");
	});

}); // End doc ready
