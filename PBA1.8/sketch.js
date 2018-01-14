function setup() {
  var width = 600, height = 600;
  createCanvas(width,height);
  background(200);
  
  beginShape();
  vertex(width*.5,0);
  vertex(width, height*.5);
  vertex(width *.5,height);
  vertex(0,height*.5);
  endShape(CLOSE);  
}

function draw() {
  // put drawing code here
}