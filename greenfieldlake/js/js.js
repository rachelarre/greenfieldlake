jQuery(document).ready(function ($) {

	//-----------------------------------HOME PAGE ----------------------------------------------------//
						// These functions run on page load //
	
	//variables for home page
	var 	intro_fade = $('.text-information');
	

//animate and fade the tagline and enter button
	intro_fade.animate({
		opacity: 1}, {
			
			duration: 2000,
			easing: 'swing'
		});
		
});// JavaScript Document