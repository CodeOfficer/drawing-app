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

 var Canvas = new JS.Class({
	  initialize: function(dom_id) {
	    this.dom_id = dom_id;
	  },

	  speak: function() {
	    return 'My DOM ID is ' + this.dom_id + '!';
	  }
	});


$(function() {
	
	log.profile( 'timing' );
		
	// behviors for togglers
	$('.toggler').click(function() {
		log.debug( 'click toggler!' );
		$(this).toggleClass('closed');
		$(this).next('.togglee').toggleClass('closed');
	});

	// trapping .button clicks	
	$('.button').click(function() {
		log.debug( 'click trapped!' );
		return false;
	});

	var canvas = new Canvas('canvas');
	// alert(canvas.speak())
	
	log.profile( 'timing' );

});