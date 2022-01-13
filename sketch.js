var runner
var player


function preload(){
  //imagens pré-carregadas
  runnerImg= loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  player= createSprite(200,300)
  player.addAnimation("runnerAnimation",runnerImg)
  player.scale= 0.1
 
  parede= createSprite(130,100,15,120)
  parede2= createSprite(260,100,15,120)
}

function draw() {
  background(0);

parede.velocityY= 5
parede2.velocityY= 5

player.x= World.mouseX

if(player.x < 62){
  player.x = 62
}
 
if(player.x > 340){
  player.x = 340
}

if(parede.y > 430){
  parede.y= 0
}

if(parede2.y > 430){
  parede2.y= 0
}
parede.depth= player.depth 
parede2.depth= player.depth 
player.depth= player.depth + 1
drawSprites();
}
