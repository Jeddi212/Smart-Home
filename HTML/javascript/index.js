//Autoplay Video
$(window).scroll(function(){
	var offsetRange = $(window).height() / 8,
	offsetTop = $(window).scrollTop() + offsetRange + $("#header").outerHeight(true),
	offsetBottom = offsetTop + offsetRange;
	
	$("#exporevideo").each(function () { 
		var y1 = $(this).offset().top;
		var y2 = offsetTop;
		if (y1 + $(this).outerHeight(true) < y2 || y1 > offsetBottom) {
			this.pause(); 
		} else {
			this.play();
		}
	});
});

//Animation on click
$(function(){
	var animationName = 'animated fadeInDown';
	var animationName1 = 'animated zoomInDown';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd oanimationend animationend';
	
	$('#thect').on('click',function(){
		$('#headL').addClass(animationName).one(animationEnd, function(){
			$(this).removeClass(animationName);
		})
	})
});