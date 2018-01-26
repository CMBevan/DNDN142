
function setup() {
  createCanvas(1600,1600);
  noLoop();
}

function draw() {
  angleMode(DEGREES);
  var v = 2;
  var x = 10;
  var xPos = sin(x) * v +1;
  ellipse(400,400,xPos);

}