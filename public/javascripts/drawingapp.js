// var Toolbar = new JS.Class({
// 	
// 	  initialize: function(id) {
// 	    this.id = id;
// 	  }
// 
// 	}); // Toolbar
// 
// var Tool = new JS.Class({
// 	
// 	  initialize: function(id) {
// 	    this.id = id;
// 	  }
// 
// 	}); // Tool
// 
// var Pen = new JS.Class({
// 	
// 	  initialize: function(id) {
// 	    this.id = id;		
// 			this.lineWidth = 1;
// 			this.color = '#000';
// 	  }
// 
// 	}); // Pen

var Canvas = new JS.Class({
	
		include: JS.Observable,
	
	  initialize: function(obj) {
	    this.id = obj.id;
			this.dom = obj;
			this.width = obj.width;
			this.height = obj.height;
			this.context = obj.getContext('2d');
			this.commandStack = new JS.Command.Stack();
	  },

		drawGradients: function() {
			this.notifyObservers(this.id);
			
			log.debug(this.width);

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
		  this.context.strokeRect(5,5,this.width-10,this.height-10);
		},
	
		drawRandomImages: function() {
			for (i=0;i<document.images.length;i++){
				// random coordinates
					var r_width = Math.floor(Math.random()*this.width);
					var r_height = Math.floor(Math.random()*this.height);
				// Draw image to canvas
					log.debug('drawing to dom: ' + r_width + ' ' + r_height);
					this.context.drawImage(document.images[i],r_width,r_height);
			}		
		},
	
		drawImageToCanvasOnMouseOver: function() {
			var images = document.images;
			var context = this.context;
			var width = this.width;
			var height = this.height;
			var counter = 0;
			for (i=0;i<images.length;i++){
				images[i].addEventListener("mouseover", function(e)
		    {
		        var image = e.currentTarget;
						var r_width = Math.floor(Math.random()*width);
						var r_height = Math.floor(Math.random()*height);
						context.drawImage(image,r_width,r_height);
						log.debug( 'drew img on canvas! ' + counter); 
						counter ++;
		        // window.setTimeout(function()
		        // {
		        //     element.style.backgroundColor = backgroundColor; 
		        // }, 1500)
		    }, false);
			}		
		}
		
		
	}); // Canvas
