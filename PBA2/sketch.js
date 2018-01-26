function setup() {
  var width = 400, height = 400;
  createCanvas(width,height);
 // fill(0);
  rect(0,0,400,400);
  for(var i = 400,j=0; i >=0;i = i - 4,j= j + 4){
    stroke(173,27,8)
    /*
    //red lines
    line(0,i,j,400);
    line(x,y,x,y)
    line(i,0,400,j);
    line(j,400,400,j);
    line(0,i,i,0);

    */
  }
  fill(255);
  
  //ellipse(30,40,60, 30);
  //ellipse(240,100,60, 30);
  //ellipse(120,70,60, 30);

  //ellipse(30,40,60, 30);
  //ellipse(240,100,60, 30);
 // ellipse(120,70,60, 30);
  stroke(0);
  for(var i = 0;i<400;i++){
    var number = Math.floor((Math.random() * 400) + 1);
    if(number <200)
      number = number/2;

    line(i,200,i,number + 1);

  }

  //line(0,200,400,200);


  fill(173,27,8);
  for(var x = 0, y= 0;y < 400; x++,y = y + 10){
    textSize(20);
    text("1011 \t \t 1100\t \t 1010 \t \t1011 \t \t1001 \t \t1100 \t \t1010 \t \t1011 1001 1100 1010 1010 1011 1001 1100 \n\n",0,y);
}
  


  //black on sides
  for(var i = 0, j = 400,counter = 0; i <400;i++,j++, counter++){ //looks cool
    //fill(255,255,255);
    //line(i,0,j,400);
   // stroke(0);
  //  line(0,i,i,400);
  //  line(400,i,i,0);
   // line(i,0,0,j); //top left
    

  //  if(counter == 4){
   //   stroke(255);
  //    line(0,i,i,400);
   //   line(400,i,i,0);
   //   counter = 0;
    //}
  }


}

function draw() {
  // put drawing code here
}