$(document).ready(function() {
 
	positionFB();

});

$(window).resize(function() {

	positionFB();
	      		
});

function positionFB() {

	$nav_containter_margin = $('.navbar .container:first').css('margin-right');
	$nav_containter_width = $('.navbar .container').css('width');
	console.log($nav_containter_margin);
	console.log($nav_containter_width);



	$facebook_right_val = parseInt($nav_containter_margin.replace('px', '')) + parseInt($nav_containter_width.replace('px', ''));
	console.log($facebook_right_val);
	$facebook_right_val = $facebook_right_val + 30;

	$('.fb-like-desktop').css('right', $facebook_right_val + "px");
}