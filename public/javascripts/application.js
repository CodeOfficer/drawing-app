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
	
	log.profile( 'timing' );

	// $('div').css({ backgroundColor: '#DDD' });
	
	
	$('.toggler').click(function() {
		$(this).html;
		$(this).next('.toggled').toggle('fade');
	});
	

	log.profile( 'timing' );

});