var x = 650
var y = 650


function setup(){
    createCanvas(700, 700);
    background("gray");  
}

function draw(){
    background("grey");
    ellipse(x, y, 100, 100);
    x = x - 1;
    y = y - 1;
} 