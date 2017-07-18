function setup(){
    createCanvas(700,700);
    background("red");
}
var x = 600; 
var value = 255;
function draw(){
    background("red");
    fill(value);
    rect(x, 0, 90, 700);
    x = x - 1;
}
function keyTyped(){
    if(key === "a"){
    value = random(1,255)   
    } else if (key === "s"){
        value = "blue";
    }

    //uncomment to prevent any default behavior
    return false;
    
}