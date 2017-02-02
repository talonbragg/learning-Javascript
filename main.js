$(document).ready(function() {
	'use strict'
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
   
	var c = Shape.Circle(200, 200, 80);
   	c.fillColor = 'black';
	var text = new PointText(200, 200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'Hello World';
	
	function onFrame(event) {
		c.rotate(3);	
	}
	
	paper.view.draw();
});
