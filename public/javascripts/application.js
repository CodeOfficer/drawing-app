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
	
	log.debug( 'this is a debug message' );
	log.info( 'this is an info message' );
	log.warn( 'this is a warning message' );
	log.error( 'this is an error message' );

	$('div').css({ backgroundColor: '#DDD' });

	log.profile( 'timing' );

});