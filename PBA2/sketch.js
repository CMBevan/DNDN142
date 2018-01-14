function setup() {
  var width = 400, height = 400;
  createCanvas(width,height);

  for(var i = 400,j=0; i >=0;i = i - 4,j= j + 4){
    stroke(173,27,8)
    line(0,i,j,400);
    //line(x,y,x,y)

    line(i,0,400,j);

    line(j,400,400,j);
    line(0,i,i,0);

  }




  

  //black on sides
  for(var i = 0, j = 400,counter = 0; i <400;i++,j++, counter++){ //looks cool
    //fill(255,255,255);
    //line(i,0,j,400);
    stroke(0);
    line(0,i,i,400);
    line(400,i,i,0);
   // line(i,0,0,j); //top left
    

    if(counter == 4){
      stroke(255);
      line(0,i,i,400);
      line(400,i,i,0);
      counter = 0;
    }
  }
  fill(173,27,8);
}

function draw() {
  // put drawing code here
}