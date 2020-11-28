var fixedRect, movingRect;
var rect1 , rect2

function setup() {
  createCanvas(800,400);
  fixedRect =  createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow"
  movingRect =  createSprite(400, 200, 60, 50);
  movingRect.shapeColor = "blue"
   rect1 =  createSprite(400, 100, 50, 50);
   rect1.shapeColor = "black"
   rect2 =  createSprite(100, 100, 50, 50);
   rect2.shapeColor = "yellow"
  rect2.velocityX = 3
  
}

function draw() {
  background(220,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

 console.log("Distance " + (movingRect.x - fixedRect.x) )
 console.log("Width/2 " + (movingRect.width + fixedRect.width)/2 )

 if(isTouching(movingRect,fixedRect))
 {
  fixedRect.shapeColor= "red"
 }
 else{
  fixedRect.shapeColor= "yellow"
 }
 if(isTouching(movingRect,rect1)){
   rect1.x +=10
 }
bounceOff(movingRect , rect2)
 

  drawSprites();
}



