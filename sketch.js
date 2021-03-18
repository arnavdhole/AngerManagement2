var ground, player1, bob, npc1, npc2, npc3, truck;
var gameState = 0;
var keyPressed =0;

function setup() {
  createCanvas(1200,600);
  
text1 = createSprite(50,320,10,10);
text1.visible = false;
  ground = createSprite(600, 600, 1200, 400);
  ground.shapeColor = "green";
  player1 = createSprite(50, 360, 75, 75);
  player1.shapeColor = "yellow";
  bob = createSprite(190, 360, 75, 75);
  bob.shapeColor = "red";
  npc1 = createSprite(1300, 360, 75, 75);
  npc1.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
bob.velocityX =0;
npc1.velocityX=0;

 // if(gameState === 0){
 
    console.log(gameState);
    if(keyDown("space") && keyPressed ===0){
      text("Let's get ice-cream", 50, 320);
      keyPressed =1;
      if(keyDown("space") && keyPressed ===1){
        /* text1.visible = true;
         text1.lifetime = 20;*/
         text("Yes", 180, 300);
        
         keyPressed = 2;
         if(keyDown("space") && keyPressed ===2){
          /* text1.visible = true;
           text1.lifetime = 20;*/
           
           gameState = 1;
         }
       }
       
    }
    
  
   
     
    
 // }

  if(gameState === 1){
   
  
    player1.velocityX = 4;
    bob.velocityX = 4;

    npc1.velocityX = -4;

    
    if(bob.isTouching(npc1)){
      console.log(bob.x);
      console.log(npc1.x);
   /*   bob.velocityX = -4;
      npc1.velocityX = 4;*/
      player1.velocityX = 0;
    /*  bob.velocityX =0;
       npc1.velocityX=0*/
       bob.x = bob.x -30;
       npc1.x = npc1.x + 30;
     
      
      gameState =2;
      
    }
   
  }
  if(gameState ===2){
    text("Watch where you are going!",660,300);
    console.log(gameState)
  }
  drawSprites();
}