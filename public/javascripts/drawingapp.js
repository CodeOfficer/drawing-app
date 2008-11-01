var Toolbar = new JS.Class({
	
	  initialize: function(id) {
	    this.id = id;		
			this.tools = [1,2,3];
			this.color = '#000';
	  }

	}); // Toolbar

var Tool = new JS.Class({
	
	  initialize: function(id) {
	    this.id = id;		
			this.tools = [1,2,3];
			this.color = '#000';
	  }

	}); // Tool

var Pen = new JS.Class({
	
	  initialize: function(id) {
	    this.id = id;		
			this.lineWidth = 1;
			this.color = '#000';
	  }

	}); // Pen

var Canvas = new JS.Class({
	
		include: JS.Observable,
	
	  initialize: function(id) {
	    this.id = id;
			this.dom = $('#'+this.id)[0];
			this.width = this.dom.width;
			this.height = this.dom.height;
			this.context = this.dom.getContext('2d');
			this.commandStack = new JS.Command.Stack();
	  },

		drawGradients: function() {
			this.notifyObservers(this.id);

			lingrad = this.context.createLinearGradient(0,0,0,this.height);
		  lingrad.addColorStop(0, '#00ABEB');
		  lingrad.addColorStop(0.5, '#fff');
		  lingrad.addColorStop(0.5, '#26C000');
		  lingrad.addColorStop(1, '#fff');

		  lingrad2 = this.context.createLinearGradient(0,50,0,95);
		  lingrad2.addColorStop(0.5, '#000');
		  lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

		  // assign gradients to fill and stroke styles
		  this.context.fillStyle = lingrad;
		  this.context.strokeStyle = lingrad2;
  
		  // draw shapes
		  this.context.fillRect(0,0,this.width,this.height);
		  this.context.strokeRect(10,10,this.width-20,this.height-20);
		},
	
		drawRandomImages: function() {

			function draw(){			
				for (i=0;i<document.images.length;i++){
					// random coordinates
						var r_width = Math.floor(Math.random()*this.width);
						var r_height = Math.floor(Math.random()*this.height);
					// Draw image to canvas
						log.debug('drawing to dom: ' + this.context);
						this.context.drawImage(document.images[i],r_width,r_height);
				}
			};
			
			setInterval(draw, 1000);
			
		}
	}); // Canvas




$(function() {
	log.profile( 'canvas' ); // begin profiler
	
		var canvas = new Canvas('canvas');
		var toolbar = new Toolbar('toolbar');
		var tool = new Tool('tool');

			// canvas.drawGradients();	
			canvas.drawRandomImages();
	
	log.profile( 'canvas' ); // end profiler
});

