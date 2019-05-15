function draw() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var chooseBG = randNum(2, 0);
	if(chooseBG){
		randomBackgroundSolid(ctx);
	}
	else{
		randomBackgroundLinGradient(ctx);
	}
	
    var i;
    for(i=0; i < randNum(12, 3); i++){
    	randLine(canvas.height, canvas.width, ctx);
    }
}

function randLine(height, width, ctx){
	ctx.strokeStyle = getRandomColor();
	ctx.lineWidth = randNum(20, 3);
	ctx.moveTo(randNum(height, 0), randNum(width, 0));	
	var points = [];
	var i;
	for (i = 0; i < 6; i++) {
		points[i] = randNum(width, 0);
	}

	switch (Math.floor(Math.random() * 3)){
		case 0:
			ctx.beginPath();
			ctx.lineTo((Math.floor(Math.random() * height)), (Math.floor(Math.random() * width)));
			ctx.stroke();
			break;
		case 1:
			ctx.beginPath();
			ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
			ctx.stroke();
			break;
		case 2:
			ctx.beginPath();
			ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
			ctx.stroke();
			break;
	}

	
}

function randomBackgroundLinGradient(ctx){
	var my_gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
	my_gradient.addColorStop(0, getRandomColor());
	//	Here I add a random amount of color stops to the gradient
	//	these color stops are added at random points
	var colorStops = Math.floor(Math.random() * 20) + 1;
	var j;
	for(var j = 0; j <= colorStops; j++) {
		my_gradient.addColorStop(Math.random(), getRandomColor());	
	}
	my_gradient.addColorStop(1, getRandomColor());
	ctx.fillStyle = my_gradient;
	ctx.fillRect(0, 0, canvas.height, canvas.width);
}

function randomBackgroundRadGradient(ctx){
	var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
	grd.addColorStop(0, "red");
	grd.addColorStop(1, "white");

	// Fill with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(10, 10, 150, 100);
}

function randomBackgroundSolid(ctx){
	ctx.fillStyle = getRandomColor();
	ctx.fillRect(0, 0, canvas.height, canvas.width);
}

function drawSquare(canvas){
    if (canvas.getContext) {
	    var context = canvas.getContext("2d");

	    context.fillRect(20,20,100,100);
	    context.clearRect(40,40,60,60);
	    context.strokeRect(45,45,50,50);
	}
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[randNum(16, 0)]
  }
  return color;
}

function randNum(upper, lower){
	return Math.floor(Math.random() * upper) + lower;
}
