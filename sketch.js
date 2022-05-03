var bg
var astronaut
function preload(){
  bg=loadImage("bg.webp");
  standingimg=loadImage("standing.png");
}

function setup() {
  createCanvas(1000,620);
  
  space=createSprite(1000,620);

  astronaut=createSprite(85,200);
  astronaut.addImage(standingimg);
  astronaut.scale=0.5;

  space.addImage(bg);
space.velocityY=1;
}


function draw() {
  background(bg);  
    //infinite bg
if(space.y>400){
  space.y=300;
}
//movements for astronaut
if(keyDown("right_arrow")){
astronaut.x+=3;
}
if(keyDown("left_arrow")){
  astronaut.x-=3;
}

if(keyDown("space")){
  astronaut.y-=5;
}

  drawSprites();
}