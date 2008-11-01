// Blackbird.js
// 
// log.debug( 'this is a debug message' );
// log.info( 'this is an info message' );
// log.warn( 'this is a warning message' );
// log.error( 'this is an error message' );
// 
// uncomment below to trap blackbirdjs logging
// 
// var log = {
//   toggle: function() {},
//   move: function() {},
//   resize: function() {},
//   clear: function() {},
//   debug: function() {},
//   info: function() {},
//   warn: function() {},
//   error: function() {},
//   profile: function() {}
// };

$(function() {
	log.profile( 'timing' ); // begin profiler
	
	// external links open in a new window
	$('a[href^="http"]').attr({ target: "_blank", title: "Opens in a new window"});
	
	// inject the toggling behavior for togglers
	$('.toggler').click(function() {
		log.debug( 'click toggler!' );
		$(this).toggleClass('closed').next('.togglee').toggleClass('closed');
	});

	// trapping .button clicks so they dont go anywhere
	$('.button').click(function() { log.debug( 'click trapped!' ); return false; });

	$.ajaxSetup({ 'beforeSend': function(xhr) { xhr.setRequestHeader("Accept", "text/javascript"); } });

	log.profile( 'timing' ); // end profiler
});


$(function() {
	log.profile( 'canvas' ); // begin profiler
	
		var my_canvas = new Canvas('canvas');
				my_canvas.drawGradients();	
				my_canvas.drawRandomImages();
	
	log.profile( 'canvas' ); // end profiler
});

