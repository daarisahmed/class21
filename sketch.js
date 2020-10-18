var fixedRect, movingRect;

var o1, o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  o1 = createSprite(200, 100, 50, 80);
  o1.shapeColor = "green";
  o1.debug = true;
  o2 = createSprite(800, 600, 50, 80);
  o2.shapeColor = "green";
  o2.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect, o1)){
  movingRect.shapeColor = "red";
  o1.shapeColor = "red";
   } else {
  movingRect.shapeColor = "green";
  o1.shapeColor = "green";
   }
  drawSprites();
}

function isTouching(o1, o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
 
 return true;
}
else {
  return false;
}


}