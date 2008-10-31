var Canvas = new JS.Class({
  initialize: function(id) {
    this.id = id;
		// this.dom = document.getElementById(this.id);
		this.dom = $('#'+this.id)[0];
		this.width = this.dom.width;
		this.height = this.dom.height;
		this.context = this.dom.getContext('2d');

  },
  speak: function() {
    return 'My DOM ID is ' + this.dom_id + '!';
  },
	drawGradients: function() {
		var lingrad = this.context.createLinearGradient(0,0,0,this.height);
	  lingrad.addColorStop(0, '#00ABEB');
	  lingrad.addColorStop(0.5, '#fff');
	  //lingrad.addColorStop(0.5, '#26C000');
	  //lingrad.addColorStop(1, '#fff');

	  var lingrad2 = this.context.createLinearGradient(0,50,0,95);
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
		for (i=0;i<document.images.length;i++){
			// random coordinates
				var r_width = Math.floor(Math.random()*this.width);
				var r_height = Math.floor(Math.random()*this.height);
			// Draw image to canvas
				log.debug('drawing to dom');
				this.context.drawImage(document.images[i],r_width,r_height);
		}
	}
});