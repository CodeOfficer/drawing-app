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

	var Canvas = new JS.Class({
	  initialize: function(dom_id) {
	    this.dom_id = dom_id;
	  },

	  speak: function() {
	    return 'My DOM ID is ' + this.dom_id + '!';
	  }
	});

$(function() {
	
	log.profile( 'canvas' ); // begin profiler

	// initializing my canvas
		var canvas = new Canvas('canvas');
	
	var ctx = document.getElementById('canvas').getContext('2d');
	var width = document.getElementById('canvas').width;
	var height = document.getElementById('canvas').height;
	
	// gradients
		var lingrad = ctx.createLinearGradient(0,0,0,height);
	  lingrad.addColorStop(0, '#00ABEB');
	  lingrad.addColorStop(0.5, '#fff');
	  //lingrad.addColorStop(0.5, '#26C000');
	  //lingrad.addColorStop(1, '#fff');

	  var lingrad2 = ctx.createLinearGradient(0,50,0,95);
	  lingrad2.addColorStop(0.5, '#000');
	  lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

	  // assign gradients to fill and stroke styles
	  ctx.fillStyle = lingrad;
	  ctx.strokeStyle = lingrad2;
  
	  // draw shapes
	  ctx.fillRect(0,0,width,height);
	  ctx.strokeRect(10,10,width-20,height-20);
	
	// random images
		for (i=0;i<document.images.length;i++){
			// random coordinates
				var r_width = Math.floor(Math.random()*width);
				var r_height = Math.floor(Math.random()*height);
			// Draw image to canvas
				log.debug('drawing an image from the dom');
				ctx.drawImage(document.images[i],r_width,r_height);
		}


		// animation
			var sun = document.images[0];
			var moon = document.images[1];
			var earth = document.images[2];
			setInterval(draw,150);

			function draw() {
				ctx.globalCompositeOperation = 'destination-over';
				ctx.clearRect(0,0,300,300); // clear canvas

				ctx.fillStyle = 'rgba(0,0,0,0.4)';
				ctx.strokeStyle = 'rgba(0,153,255,0.4)';
				ctx.save();
				ctx.translate(150,150);

				// Earth
				var time = new Date();
				ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
				ctx.translate(105,0);
				ctx.fillRect(0,-12,50,24); // Shadow
				ctx.drawImage(earth,-12,-12);

				// Moon
				ctx.save();
				ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
				ctx.translate(0,28.5);
				ctx.drawImage(moon,-3.5,-3.5);
				ctx.restore();

				ctx.restore();

				ctx.beginPath();
				ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
				ctx.stroke();

				ctx.drawImage(sun,0,0,300,300);
				log.info('animate: ' + time.getMilliseconds());
			}
	
	
	
	log.profile( 'canvas' ); // end profiler

});

