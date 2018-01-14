function setup() {
  var width = 600, height = 600;
  createCanvas(width,height);
  background(200);
  
  //draw grid (challenge2)
  line(0,height*.333, width,height*.333);
  line(0,height*.667, width,height*.667);
  line(width*.333,0,width*.333,height);
  line(width*.667,0,width*.667,height);

  //draw mini X (challenge3)
  line(width*.333,height*.333,width*.667,height*.667);
  line(width*.667,height*.33,width*.333,height*.667);
  
  //extend ends (challenge4)
  line(width*.333,height*.333,width*.667,0);
  line(width*.667,height*.333,width,height*.667);
  line(width*.667,height*.667,width*.333,height);
  line(width*.333,height*.667,0,height*.333);
}

function draw() {
  // put drawing code here
}