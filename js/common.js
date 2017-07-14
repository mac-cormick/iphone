$(document).ready(function() {

	$(".descr h1").animated("fadeInDown", "fadeOutUp");
	$(".descr p").animated("fadeInUp", "fadeOutDown");

	$(".section-head h2").animated("fadeInDown", "fadeOutUp");
	$(".section-head p").animated("fadeInUp", "fadeOutDown");

	$(".preim-wrap img").animated("flip", "fadeOutDown");

	$(".usage-wrap img").animated("flipInY", "fadeOutDown");

	$(".client-photo img").animated("fadeInLeft", "fadeInLeft");

	$(".client-text p").animated("fadeInRight", "fadeInRight");

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$(".client-text").not(":first").hide();
	$(".navig .navelem").click(function() {
		$(".navig .navelem").removeClass("active").eq($(this).index()).addClass("active");
		$(".client-text").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".client-photo").not(":first").hide();
	$(".navig .navelem").click(function() {
		$(".navig .navelem").removeClass("active").eq($(this).index()).addClass("active");
		$(".client-photo").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".main-mnu a, .top").mPageScroll2id();
	$(".descr a, .top").mPageScroll2id();

	var $arrow = $(".top");
  	$(window).scroll(function(){
    	if ( $(this).scrollTop() > 100 && $arrow.hasClass("hidden") ){
      	$arrow.removeClass("hidden").addClass("visible");
      } else if($(this).scrollTop() <= 100 && $arrow.hasClass("visible")) {
     $arrow.removeClass("visible").addClass("hidden");
    }
  });



});