/**
 ANIMATION
 */

( function() {

	window.addEventListener("scroll",function(){
		var backgroundStrip = document.querySelector(".background__bg-overlay");
		var headerMenu = document.querySelector(".header__menu");
		var scrollTop = window.pageYOffset;
		var calc = -5 + (scrollTop / 70);
		var calc2 = (scrollTop / 2);
		var calc3 = -5 + (scrollTop / 90);
		backgroundStrip.style.webkitTransform = "rotate(" + calc3 + "deg)";
		backgroundStrip.style.top = 395 + (calc2 / 2) + "px";
		headerMenu.style.marginTop =  calc2 + "px";
		headerMenu.style.opacity = (1 - (scrollTop / 150));
	});

} )();
