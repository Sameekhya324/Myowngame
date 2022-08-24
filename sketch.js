var car;
var enemy1,enemy2,enemy3;
var road;
var distance = 0;
var restart
var PLAY;
var END;
var gameState = 1;
var gameOver



function preload(){
carImage = loadImage("car.png");
enemy1Image = loadImage("enemy1.png");
enemy2Image = loadImage("enemy2.png");
enemy3Image = loadImage("enemy3.png");
roadImage = loadImage("Road.png");
restartImage = loadImage("Restart.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);
road = createSprite(width/2,height-120);
road.addImage(roadImage);
road.scale= 1;
road.velocityY = 6;

car = createSprite(width-300,height-50,10,10);
car.addImage(carImage);
car.scale = 0.2;

restart = createSprite(width/2,height-200,10,10);
restart.addImage(restartImage);
restart.scale = 0.2;

Enemy1 = createGroup();
Enemy2 = createGroup();
Enemy3 = createGroup();
}

function draw() {
if (gameState === PLAY) {
    background(200);
    gameOver.visible = false;
    restart.visible = false;
   road.velocityY=(8+3* distance/100);
   distance =  distance+ Math.round(getFrameRate()/60);

   if (road.y > height){
    road.y = height/2;
   }
   if (keyDown("right")){
    road.velocityX = 2;
 }
  if (keyDown("left")){
    hero.velocityX = -2;
  }
} 
  
  car.setCollider("rectangle",0,0,10,10);
  car.debug = false;
  if  (Enemy1.isTouching(car)){
    enemy1.setVelocityEach();
    gameState = END;
    
   }
   else if (Enemy2.isTouching(car)){
    enemy2.setVelocityEach();
    gameState = END;
  
   }
   else if (Enemy3.isTouching(car)){
    enemy3.setVelocityEach();
    gameState = END;
    
   
   }
   createenemy1();
   createenemy2();
   createenemy3();
   
   if (gameState === END){
    hero.velocityX = 0;
    path.velocityY = 0;
  Enemy1.setLifetimeEach(-1);
  Enemy2.setLifetimeEach(-1);
  Enemy3.setLifetimeEach(-1);
  gameOver.visible = true;
  restart.visible = true;
  }
  if (mousePressedOver(restart)){
    reset();
  }
drawSprites();
textSize(25);
text("Distance:"+distance,width-150,height-50);
}


function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false; 
    car.addImage(heroImg);
    Enemy1.destroyEach();
    Enemy2.destroyEach();
    Enemy3.destroyEach();
    distance = 0;
  }

  function enemy1(){
    if (World.frameCount % 200 == 0){
      var enemy1 = createSprite(Math.round(random(width-50,height-350),40,10,10));
      enemy1.addImage(enemy1Image);
      enemy1.scale = 0.1;
      enemy1.velocityY = 4;
      enemy1.lifetime = 200;
      Enemy1.add(enemy1);
    }
   }
  
   function enemy2(){
    if (World.frameCount % 200 == 0){
      var enemy2 = createSprite(Math.round(random(width-50,height-350),40,10,10));
      enemy2.addImage(enemy1Image);
      enemy2.scale = 0.1;
      enemy2.velocityY = 4;
      enemy2.lifetime = 200;
      Enemy2.add(enemy1);
    }
   }
     
   function enemy1(){
    if (World.frameCount % 200 == 0){
      var enemy1 = createSprite(Math.round(random(width-50,height-350),40,10,10));
      enemy3.addImage(enemy1Image);
      enemy3.scale = 0.1;
      enemy3.velocityY = 4;
      enemy3.lifetime = 200;
      Enemy3.add(enemy1);
    }
   }
  
  
  





  
