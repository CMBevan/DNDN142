
function setup() {
  createCanvas(1600,1600);
  noLoop();
}

function draw() {
  var width = 400, height = 400;
  
  // top left
  for(var x = 0;x<width;x = x+20){
    line(x,180, x, 220);
  }


  //top right
  width = 800;
  for(var x = 400, y = 0;x < width;x = x +20, y = y+20){
    ellipse(x, y, 10);
  }


  //bottom left
  width = 400;
  for(var x = 0 ;x<width;x = x +20)
    for(var y = 400;y < 800; y = y+20)  
      ellipse(x,y,10);
 
 
  
  //bottom right
  width = 800;
  height = 800;
  for(var x = 400; x < 800;x = x + 20){
    for(var y = 400; y < 800; y = y+20){
      line(x-5,y-5,x+5,y+5);
      line(x-5,y+5,x+5,y-5);
    }
  }

  width = 400;
  height = 1200;
  ellipse(200,1000,20);
  for(var r = 20; r>=0;r--){
    ellipse(200,1000,19 * r);
  }

}