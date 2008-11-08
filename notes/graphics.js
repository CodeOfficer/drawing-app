//<script type="text/javascript">

function Graphics(canvas)
{
	this.canvas = canvas;
	this.cache = new Array;
	this.shapes = new Object;
	this.nObject = 0;

	// defaults
	this.penColor = "black";
	this.zIndex = 0;
}

Graphics.prototype.createPlotElement = function(x,y,w,h) 
{
	// detect canvas
	if ( !this.oCanvas )
	{
		if ( this.canvas == undefined ) {
			this.oCanvas = document.body;
		} else if ( typeof(this.canvas) == 'string' ) {
			this.oCanvas = document.getElementById(this.canvas);
		} else {
			this.oCanvas = this.canvas;
		}
	}

	// retrieve DIV
	var oDiv;
	if ( this.cache.length )
		oDiv = this.cache.pop();
	else 
	{
		oDiv = document.createElement('div');
		this.oCanvas.appendChild(oDiv);

		oDiv.style.position = "absolute";
		oDiv.style.margin = "0px";
		oDiv.style.padding = "0px";
		oDiv.style.overflow = "hidden";
		oDiv.style.border = "0px";
	}

	// set attributes
	oDiv.style.zIndex = this.zIndex;
	oDiv.style.backgroundColor = this.penColor;
	
	oDiv.style.left = x;
	oDiv.style.top = y;
	oDiv.style.width = w + "px";
	oDiv.style.height = h + "px";

	oDiv.style.visibility = "visible";
	
	return oDiv;
}

Graphics.prototype.releasePlotElement = function(oDiv)
{
	oDiv.style.visibility = "hidden";
	this.cache.push(oDiv);
}

Graphics.prototype.addShape = function(shape)
{
	shape.oGraphics = this;
	shape.graphicsID = this.nObject;
	this.shapes[this.nObject] = shape;
	this.nObject++;
	shape.draw();
	return shape;
}

Graphics.prototype.removeShape = function(shape)
{
	if ( (shape instanceof Object) && 
		(shape.oGraphics == this) && 
		(this.shapes[shape.graphicsID] == shape) )
	{
		shape.undraw();
		delete this.shapes[shape.graphicsID];
		delete shape.oGraphics;
	}
}
Graphics.prototype.clear = function()
{
	for ( var i in this.shapes )
		this.removeShape(this.shapes[i]);
}


//=============================================================================
// Point
Graphics.prototype.drawPoint = function(x,y)
{
	return this.addShape(new Point(x,y))
}

function Point(x,y)
{
	this.x = x;
	this.y = y;
}
Point.prototype.draw = function()
{
	this.oDiv = this.oGraphics.createPlotElement(this.x,this.y,1,1);
}
Point.prototype.undraw = function()
{
	this.oGraphics.releasePlotElement(this.oDiv);
	delete this.oDiv;
}

//=============================================================================
// Line
Graphics.prototype.drawLine = function(x1,y1,x2,y2)
{
	return this.addShape(new Line(x1,y1,x2,y2))
}

function Line(x1,y1,x2,y2)
{
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
}

Line.prototype.draw = function()
{
	this.plots = new Array;

	var dx = this.x2 - this.x1;
	var dy = this.y2 - this.y1;
	var x = this.x1;
	var y = this.y1;

	var n = Math.max(Math.abs(dx),Math.abs(dy));
	dx = dx / n;
	dy = dy / n;
	for ( i = 0; i <= n; i++ )
	{
		this.plots.push(this.oGraphics.createPlotElement(Math.round(x),Math.round(y),1,1));

		x += dx;
		y += dy;
	}
}
Line.prototype.undraw = function()
{
	while ( this.plots.length )
		this.oGraphics.releasePlotElement(this.plots.pop());
	delete this.plots;
}

//=============================================================================
// Circle
Graphics.prototype.drawCircle = function(x,y,r)
{
	return this.addShape(new Circle(x,y,r))
}

function Circle(x,y,r)
{
	this.x = x;
	this.y = y;
	this.radius = r;
}

Circle.prototype.draw = function()
{
	this.plots = new Array;

	var r2 = this.radius * this.radius;
	var x = 0;
	var y = this.radius;

	while ( x <= y )
	{
		this.plots.push(this.oGraphics.createPlotElement(Math.round(this.x + x), Math.round(this.y + y), 1, 1));
		this.plots.push(this.oGraphics.createPlotElement(Math.round(this.x - x), Math.round(this.y + y), 1, 1));
		this.plots.push(this.oGraphics.createPlotElement(Math.round(this.x + x), Math.round(this.y - y), 1, 1));
		this.plots.push(this.oGraphics.createPlotElement(Math.round(this.x - x), Math.round(this.y - y), 1, 1));
		this.plots.push(this.oGraphics.createPlotElement(Math.round(this.x + y), Math.round(this.y + x), 1, 1));
		this.plots.push(this.oGraphics.createPlotElement(Math.round(this.x + y), Math.round(this.y - x), 1, 1));
		this.plots.push(this.oGraphics.createPlotElement(Math.round(this.x - y), Math.round(this.y + x), 1, 1));
		this.plots.push(this.oGraphics.createPlotElement(Math.round(this.x - y), Math.round(this.y - x), 1, 1));

		x++;
		y = Math.round(Math.sqrt(r2 - x*x));
	}
}
Circle.prototype.undraw = Line.prototype.undraw;

//=============================================================================
// FillRectangle
Graphics.prototype.fillRectangle = function(x,y,w,h)
{
	return this.addShape(new FillRectangle(x,y,w,h))
}

function FillRectangle(x,y,w,h)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
}

FillRectangle.prototype.draw = function()
{
	this.oDiv = this.oGraphics.createPlotElement(this.x,this.y,this.w,this.h);
}
FillRectangle.prototype.undraw = Point.prototype.undraw;

//</script>