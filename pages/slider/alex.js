var slideContainer = document.querySelector('.carousel__slider-container');
var transformValueDefault = 0;
var k = 0;
var slideNumber = document.querySelectorAll(".spacer");
var slideLength = slideNumber.length;
var kTimes = (k*100);

/* MENU CONTROLLERS */

(function menuDropDownHover(){
 	var items = document.querySelectorAll('.nav__menu-item');
 	var dropDownMenu = document.querySelector('.nav__dropdown-menu');
	var main = document.querySelector('main');
	var bagItem = document.querySelector('.nav__menu-item--bag');
 	for(let i=0;i<items.length;i++){
	 	items[i].addEventListener("mouseover",function(){
	 		dropDownMenu.style.display = "flex";
	 	});
 	}
	/* CLOSE MENU DROPDOWN IF USER HOVERS OUT OF NAV-HEADER  AREA */
	 main.addEventListener("mouseout",function(){
	 	dropDownMenu.style.display = "none";
	 });
	/* CLOSE MENU DROPDOWN IF USER HOVERS OVER CARTBAG MENU */
	 bagItem.addEventListener("mouseover",function(){
	 	dropDownMenu.style.display = "none";
	 });
 })();

 (function shoppingCartDropDown(){
	var items = document.querySelector('.nav__menu');
 	var bagItem = document.querySelector('.nav__menu-item--bag');
 	var bagDropDown = document.querySelector('.nav__dropdown-bag');
	var main = document.querySelector('main');
 	bagItem.addEventListener("mouseover",function(){
	 		bagDropDown.style.display = "block";
	 });
	 main.addEventListener("mouseover",function(){
	 	bagDropDown.style.display = "none";
	 });
	 items.addEventListener("mouseover",function(){
	 	bagDropDown.style.display = "none";
	 });
 })();

 /* CAROUSEL CONTROLLERS */
	
(function carouselSlideAlex() {
	var arrows = document.querySelectorAll('.carousel__arrow');
	var x = 0;
	for(let i=0;i<arrows.length;i++){
			arrows[i].addEventListener("click",(function(i){
				return function() {
					var x = i;
					switch (x){
						case 0:
							k -= 1;
							imageSlideRight();
							break;
						case 1:
							k += 1;
							imageSlideLeft();
							break;
						default:
							// DO NOTHING
					}
				}
			})(i),false);
	}
})();

function imageSlideRight() {
	if(k<0){
		var y = (k*100)-100;
		slideContainer.style.webkitTransform = "translate(" + (transformValueDefault += y) + "vw)";
		k = (slideLength-1);
	} else {
		slideContainer.style.webkitTransform = "translate(" + (transformValueDefault += 100) + "vw)";
	}
	
	
	scrollButtons();
}
	
function imageSlideLeft() {

	if(k>=slideLength){
		var y = (k*100) -100;
		slideContainer.style.webkitTransform = "translate(" + (transformValueDefault += y) + "vw)";
		k = 0;
	} else {
		slideContainer.style.webkitTransform = "translate(" + (transformValueDefault -= 100) + "vw)";
	}
	scrollButtons();
		console.log(k);
}
	
function scrollButtons() {
	var buttons = document.querySelectorAll('.carousel__controls--button');

	for(var i=0;i<buttons.length;i++){
		if(k === i){
			buttons[k].classList.add('carousel__controls--button-highlighted');
		}
		for(let j=0;j<buttons.length;j++){
			if(j !== k){
				buttons[j].classList.remove('carousel__controls--button-highlighted');
			}
		}
	}
}
