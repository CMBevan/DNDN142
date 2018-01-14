function setup() {
  var width = 600, height = 600;
  createCanvas(width,height);
  background(200);
  
  var a = 100, b = 400;
  for(var v = 0;v < 4; a +=50,b-=100, v++)
    rect(a,a,b,b);
}

function draw() {
  // put drawing code here
}