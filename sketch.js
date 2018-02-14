function setup() {
  createCanvas(800,400);
}

function draw() {
  if (mouseX > 0 && mouseX < 100){
   background(0,200,102);
	fill(235);
	stroke(230);
	rect(5,5, 790,390);
  strokeWeight(10);
  stroke(54,60,113);
  line(20,15,20,385);
	strokeWeight(10);
  stroke(54,60,113);
  line(40,15,40,385);

}
  else if( mouseX > 100 && mouseX < 200) {
 background(200,0,200);
	fill(102,0,0);
	stroke(230);
	rect(5,5, 790,390);
  strokeWeight(10);
  stroke(39,25,24);
  line(300,15,300,385);
	strokeWeight(10);
  stroke(198,140,67);
  line(500,15,500,385);
}
  else if( mouseX > 200 && mouseX < 300) {
 background(200,200,200);
	fill(185,43,19);
	stroke(230);
	rect(5,5, 790,390);
  strokeWeight(25);
  stroke(32,40,63);
  strokeCap(SQUARE);
  line(5,17,5,383);

}

  else if( mouseX > 300 && mouseX < 400) {
  frameRate(3);
  var newmanline = random(7, 12);
  background(200,200,200);
 	fill(8,27,104);
 	stroke(230);
 	rect(5,5, 790,390);
   strokeWeight(newmanline);
   stroke(172,209,193);
   strokeCap(SQUARE);
   line(395,10,395,390);
}
else  {
frameRate(3);
var newmanline = random(7, 12);
var newmanrectx = random(395,398);
background(200,200,200);
fill(8,27,104);

rect(5,5, 790,390);
// strokeWeight(newmanline);
 //stroke(172,209,193);
 //strokeCap(SQUARE);
 fill(172,209,193);
 rect(newmanrectx,5,newmanline,390);
}
}
