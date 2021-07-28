var path,path_Image;

var boy,boy_running

var invisibleBoundary1,invisibleBoundary2;


function preload(){
  
  //pre-load images
  path_Image = loadImage("path.png");
  
  boy_running = 
loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");

}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  path = createSprite(200,200,360,400);
  path.addImage("path",path_Image);
  
  boy = createSprite(200,320,20,20);
  boy.addAnimation("boy",boy_running);

  invisibleBoundary1 = createSprite(60,200,20,400);
  invisibleBoundary2 = createSprite(340,200,20,400);

}


function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2;
    
  }
 
  path.velocityY = 5;
  
  boy.x = mouseX;
  
  
  boy.collide(invisibleBoundary1);
  boy.collide(invisibleBoundary2);
  
  invisibleBoundary1.visible = false;
  invisibleBoundary2.visible = false; 
  
  
  drawSprites();

}
