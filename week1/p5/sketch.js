

function setup(){
   createCanvas(500, 500);
   background(225);
   fill('yellow');
   ellipse(width/2, height/2, 400);
   fill('black')
   strokeWeight(10);
   //top sunglasses line
   line(80, 150, 420, 150);
   //lip
   line(150, 350, width- 150, 350);
   //Rectangles
   rect(150, 150, 80, 40);
   rect(width -150, 150, 80, 40);
}

function mousePressed(){
    
}