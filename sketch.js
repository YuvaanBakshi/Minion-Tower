var climberGroup;

var doorGroup;

var ghost, ghost_running;

var tower, tower_image;

var door,door_image;

var climber, climber_image;

function preload(){
  
  tower_image=loadImage("tower.png");
  
  door_image=loadImage("door.png");
  
  climber_image=loadImage("climber.png");
  
  ghost_running=loadImage("The Minionssss.jpg");

}

function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300,600,600);
  tower.addImage(tower_image);
  tower.velocityY=3;
  
  ghost=createSprite(300,300,20,20);
  ghost.addImage(ghost_running);
  ghost.scale=0.4;
  
  climberGroup=new Group();
  
  doorGroup=new Group();
  
}

function draw(){
 
  background=(0);
  
  if(tower.y>=400){
    tower.y=300;
  }
  
  spawnDoor();
  
  if(keyDown("Space")){
    ghost.velocityY=-5;  
  }
  
  ghost.velocityY=ghost.velocityY+0.8;
  
  
  
  
  drawSprites();
  
  if(climberGroup.isTouching(ghost)||ghost.y>=600){
    fill("yellow");
    textSize(40);
    text("GAME OVER",200,200);
    ghost.velocityY=0;
    doorGroup.destroyEach();
    climberGroup.destroyEach();
    tower.velocityY=0;
    ghost.destroy();
    climberGroup.setVelocityYEach(0);
    doorGroup.setVelocityYEach(0);
  }
  
}


  
  
function spawnDoor(){
 if(frameCount%100===0){
   door=createSprite(200,0,20,20);
   door.addImage(door_image);
   door.velocityY=3;
   door.x=Math.round(random(100,500));
   
   climber=createSprite(200,50,20,20);
   climber.x=door.x;
   climber.addImage(climber_image);
   climber.velocityY=3;
   
   climberGroup.add(climber);
   
   doorGroup.add(door);
   
 } 
}