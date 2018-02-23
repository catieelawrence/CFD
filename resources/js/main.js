// JavaScript Document

$(document).ready(function () {
	$('.frame').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		fade: true,
		arrows: false
 	});

 	$("button").hover(
   function() {
     $(this).parent().find("ul").addClass("menu-show");
     $(this).parent().find("ul").removeClass("menu-hide");
   	}
 	);

	 $(".all").mouseleave(
	  function() {
	    $(this).find("ul").addClass("menu-hide");
	    $(this).find("ul").removeClass("menu-show");
	  }
	 );
});
