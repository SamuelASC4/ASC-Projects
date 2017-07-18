function setup(){
    createCanvas(500, 500);
   background(200);
 }
function mouseDragged(){
    fill(random(255) ,random(255), random(255));
    quad(mouseX, mouseY, random(50,100), random(50,100), random(50,100),
     random(50,100), random(50,100), random(50,100), random(50,100), random(50,100))
}