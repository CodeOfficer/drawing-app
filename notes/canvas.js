//<script type="text/javascript">

function Canvas(oCanvas) {
	this.oCanvas = oCanvas;
	this.gr = new Graphics(oCanvas);

	// set up mouse handlers
	this.oCanvas.onmousedown = this.onMouseDown.bindEvent(this);
	this.oCanvas.onmousemove = this.onMouseMove.bindEvent(this);
	this.oCanvas.onmouseup = this.onMouseUp.bindEvent(this);
	
	// canvas properties
	this.bMouseDown = false;
	
	// other properties
	this.gr.penColor = "black";
}

Canvas.prototype.getMousePos = function(evt) {
	var pos = dhtml.getElementPosition(this.oCanvas);
	var scroll = dhtml.getScrollPos();
	var x = evt.clientX - (pos.left - scroll.left);
	var y = evt.clientY - (pos.top - scroll.top);
		
	return {x:x, y:y};
}

Canvas.prototype.onMouseDown = function(evt) {
	var p = this.getMousePos(evt);
	this.gr.drawPoint(p.x, p.y);
	this.bMouseDown = true;
}
Canvas.prototype.onMouseMove = function(evt) {
	if ( this.bMouseDown ) {
		var p = this.getMousePos(evt);
		this.gr.drawPoint(p.x, p.y);
	}
}
Canvas.prototype.onMouseUp = function(evt) {
	this.bMouseDown = false;
}

//</script>