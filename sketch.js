
function preload(){
  //pre-load images
  playerImg=loadAnimation("Runner-1.png", "Runner-2.png")
  pathImg= loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,200,200)
path.addImage(pathImg)
path.velocityY=5
player=createSprite(200, 350, 6, 7)
player.addAnimation("run", playerImg)
player.scale=0.1
leftBoundry=createSprite(50, 200, 10, 400)
rightBoundry=createSprite(350, 200, 10, 400)
leftBoundry.visible=false
rightBoundry.visible=false
}

function draw() {
  background(0);
  player.x=mouseX
  if (path.y>400) {
    path.y=200
  }
  player.collide(leftBoundry)
  player.collide(rightBoundry)
drawSprites()
}
