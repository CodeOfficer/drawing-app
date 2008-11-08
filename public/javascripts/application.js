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
	log.profile( 'application.js' ); // begin profiler
	
		// external links open in a new window
		$('a[href^="http"]').attr({ target: "_blank", title: "Opens in a new window"});
	
		// inject the toggling behavior for togglers
		$('.toggler').click(function() {
			log.debug( 'click toggler!' );
			$(this).toggleClass('closed').next('.togglee').toggleClass('closed');
		});

		// trapping .button clicks so they dont go anywhere
		$('.button').click(function() { 
			log.debug( 'button click trapped!' ); 
			return false; 
		});

		$.ajaxSetup({ 'beforeSend': function(xhr) { xhr.setRequestHeader("Accept", "text/javascript"); } });
	
		canvas = null;		
		canvas = new Canvas( $('.drawing-canvas')[0] );
			// setInterval('canvas.drawRandomImages()', 1000);
			canvas.drawGradients();
			canvas.drawImageToCanvasOnMouseOver();
	
	log.profile( 'application.js' ); // end profiler
});