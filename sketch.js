var points;
var font;
var amt;
var multiplier = 0.2;
var r = [];
var g = [];
var b = [];
var img;
//above code for the name...........
var PLAY = 1;
var END = 0;
var bjump;
var bslide;
var bstart,
blifeline,breset;
var babout
var slidemotion
var motion = slidemotion
var  bprevious
var bnext
var SERVE ;
var Horse;
var gameState=SERVE
var loading
var image1;
var ground2;
var groundImage;
var ABOUT = 5;
var page =1;
var groundImage2;
 var InvisibleGround;
var score;
var background;
var realGround;
var newscreen
var newscreen2
var JumpButton
  var score ;
  score = 0
var gameOver;
var restart
var screen;
var lineofalert
var yes = -1
var no =-2
var lifelineused = no;

 
function preload(){
 font = loadFont('Calistoga-Regular.ttf');
  groundImage = loadImage("1.png")

  groundImage3 = loadImage("3.png")
  groundImage2 =loadImage  ("6.png")
  BackGroundImage = loadAnimation("bak.png")
  BackGroundImage2 = loadAnimation("BG.png")
  BackGroundImage3 = loadAnimation("bak2.png")
  BackGroundImage4 = loadAnimation("bak3.png")
  groundImage4 = loadImage("4.png")
  riverImage= loadImage("17.png")
  IumpButtonImage = loadImage("Jump (9).png")
  riverdownImage = loadImage("18.png")
  realGround = loadImage("14.png")
  realground2 = loadImage("15.png")
  realground3 = loadImage("16.png")
  ObstacleImage = loadImage("Stone.png")
  screenimage= loadImage("images (2).jpg")
  RunningHorse = loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png")
  JumpHorse = loadAnimation("Jump (1).png","Jump (2).png","Jump (3).png","Jump (4).png","Jump (5).png","Jump (6).png","Jump (7).png","Jump (8).png","Jump (9).png","Jump (10).png","Jump (11).png","Jump (12).png"
                          )
  DeadHorse = loadAnimation("Dead (1).png","Dead (2).png","Dead (3).png","Dead (4).png","Dead (5).png","Dead (6).png","Dead (7).png","Dead (8).png","Dead (9).png"
)
  TreeImage =loadImage("Tree_1.png")
  ObstacleImage2 = loadImage("Crystal.png")
  jumpsound = loadSound("146726__leszek-szary__jumping.wav")
  Sinkinriver=loadSound("119146__esperri__sink-drain.wav")
  Deadsound=loadSound ("21914__halleck__neck-crack.wav");
  TheMusic =loadSound("bensound-creativeminds.mp3")
  Themusic = loadSound("rise-and-shine.mp3")
  Themusic2 = loadSound("makai-symphony-dragon-slayer.mp3")
  Themusic3 = loadSound("John_Bartmann_-_04_-_Earning_Happiness.mp3")
  Themusic4 = loadSound("6-Happy-Commercial-Piano.mp3")
  newscreeimage = loadImage("game-start-neon-signs-style-text_118419-703.jpg")
   gameOverImg = loadImage("gameOver-1.png");
  restartImg = loadImage("restart-1.png");
  slide= loadAnimation("Slide (1).png");
  ground2Image=loadImage("Cliff_2D_Game_Platformer_Ground_Game_Asset_Angle_2.png")
  exgroundImage=loadImage("ground4.png")
  lifelineImage=loadImage("cartoon-red-heart-symbol-vector-23572106.jpg")
  aboutImage1 = loadAnimation("about1.png")
  aboutImage2 = loadAnimation("about2.png")
  aboutImage3 = loadAnimation("about3.png")
 
  
  aboutIcon = loadImage("about.png");
  
  nextIcon = loadImage("next.png")
  previousIcon = loadImage("previous.png")
  
  
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  // Retrieve text 
  //code for name
    points = font.textToPoints('Runners ',width/2-200,height/2-50,width/height+100, {
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });
    points2 = font.textToPoints("landscape",width/2-150,height/2+80,width/height+100,{
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });
    points3 = font.textToPoints("Vishnu ",width/2-290,height/2-140,width/height+80,{
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });
    points4 = font.textToPoints("presents  :-",width/2-9,height/2-140,width/height+80,{
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });
    points5 = font.textToPoints("The Endless Spirit",width/2-280,height-50,width/height+60,{
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });
  //end

  TheMusic.play();
  
  background = createSprite(0,0,600,600);
 background.addAnimation("running2",BackGroundImage2)
  background.addAnimation("running3",BackGroundImage3)
  background.addAnimation("running4",BackGroundImage4)
  background.addAnimation("running",BackGroundImage)
  background.scale = 2
lineofalert = createSprite(width/2,height/2+190,width,20)
  lineofalert.visible = false
  aboutScreen = createSprite(width/2,height/2,width*2,height*2)
  aboutScreen.visible = false
   aboutScreen.addAnimation("about1",aboutImage1);
  aboutScreen.addAnimation("about2",aboutImage2);
  aboutScreen.addAnimation("about3",aboutImage3)
  
  
  
  Horse = createSprite(50,0,20,50);
 

 
  
 GroundGroup = createGroup();
  GroundGroup2 = createGroup();
  SmallGround = createGroup();
  Frground=createGroup();
  GroupRR = createGroup();
  ObstacleGroup = createGroup();
  Treegroup = createGroup()

 about = createSprite(width-60,height/16,20,20)
  about.visible = false
 
   

  newgr1 = createGroup();
   GroundGroup.visible = false
  jumpButton = createSprite(50,height-100,100,100);
  jumpButton.visible = false;
 jumpButton.addImage(IumpButtonImage)
  jumpButton.scale =0.25
  jumpButton.depth=669
 
    
  Horse.scale= 0.25
  Horse.x = 50
  Horse.y = 0
  Horse.addAnimation("Jumping",JumpHorse);
  Horse.addAnimation("running", RunningHorse);
  Horse.addAnimation("dead",DeadHorse);
  Horse.addAnimation("slide",slide)
  
  
  Horse.scale = 0.15;
   
  Horse.setCollider("rectangle",50,0,280,380);
  // = createGroup()
  slidebutton = createSprite(width-150,height-100) 
  slidebutton.addAnimation("slide",slide)
  slidebutton.scale = 0.25
  slidebutton.visible = false
  slidebutton.depth = 669
 
 
  
    newscreen=createSprite(width/2,height/2,width*2,height*2)
newscreen.addImage(newscreeimage)
  /*buttons*/ {newscreen.scale =windowWidth/windowHeight
   newscreen2 =createSprite(width/2+30,height-90,180,80)
  newscreen.visible = false
  bstart = createButton("START");
  bstart.size (180,50)
  //bstart.visible = false
  bstart.position(width/2+30,height-90)
  bstart.hide()
  bjump = createButton("Jump button")
  bjump.position(50,height-100)   
  bjump.hide()
  babout = createButton("about")   
  babout.position(width-90,height/13) 
    babout.mousePressed(gsabout)             
  babout.hide()    
               
               let col = color("red"); //use color instead of fill
          
  bcancel  = createButton("cancel")
   bcancel.position(width-100,height/8)
   bcancel.hide()
 bcancel.style('background-color', col);           
  bnext = createButton("next")
  bnext.position(width/2+240,height/2)         
  bnext.hide()            
   bprevious = createButton("previous")
   bprevious.position(width/2-280,height/2)
    bprevious.hide()           
    bslide = createButton("slide")           
     bslide.position(width-150,height-100)      
    bslide.hide()    
   blifeline = createButton("lifeline");
   blifeline.position(width-2-200,height/+20)            
   blifeline.hide()            
   blifeline2 = createButton("lifeline") 
    blifeline2.position(width-2-200,height/+20)   
       blifeline2.hide()        
               
               
               
   }
  
  
  
  
  newscreen2.visible = false
    cancel = createSprite(width-100,height/8,20,20)
  cancel.visible = false
   
  
  
    screen = createSprite(width/2,height/2,200,200);
    screen.addImage(screenimage)

  
   gameOver = createSprite(width/2,height/2- 50);
 gameOver.addImage(gameOverImg)
  restart=createSprite(width/2,height/2);
  restart.addImage(restartImg);
    restart.scale = 0.05
  //(canvas.width)
    screen.scale=windowWidth/windowHeight+2
  screen.depth = 10
    gameOver.visible = false
  screen.visible = false
  restart.visible = false
  //(Horse.x)
  CollideGroup = createGroup() 
  ground02 = createSprite(50,height/2-160)
  ground02.addImage(ground2Image)
  ground02.scale = 0.9
  ground02.visible = false
 CollideGroup.add(ground02)
  next = createSprite(width/2+280,height/2)
  next.addImage(nextIcon)
  //(about.x)
  next.scale = 0.25
  next.visible = false
  
  
  previous = createSprite(width/2-280,height/2)
  previous.addImage(previousIcon)
  previous.scale = 0.25
  previous.visible = false
  
  
  
  exground=createSprite(1200,120,20,20)
  exground.addImage(exgroundImage)
  exground.scale = 0.5
//  exground.lifetime = 1500
  exground.visible = false
  
    exground2=createSprite(1200,120,20,20)
  exground2.addImage(exgroundImage)
  exground2.scale = 0.5
//  exground2.lifetime = 1500
  exground2.visible = false
  
  lifeline = createSprite(width-2-200,height/+20,10,10)
  lifeline.addImage(lifelineImage)
  lifeline.scale=0.025
  lifeline.visible = false
  //ground02.debug = true
  ground02.setCollider("rectangle",0,0,100,40);
  
   ground03= createSprite(150,height/2-120)
  ground03.addImage(ground2Image)
  ground03.scale = 0.9
  ground03.visible = false
 CollideGroup.add(ground03)
  //ground03.debug = true
  ground03.setCollider("rectangle",0,0,100,40);
  
  ground04= createSprite(250,height/2-90)
  ground04.addImage(ground2Image)
  ground04.scale = 0.9
  ground04.visible = false
 CollideGroup.add(ground04)
  //ground03.debug = true
  ground04.setCollider("rectangle",0,0,100,40);
  
   HorseImage11 = createSprite(width/2,height/2+150)
   HorseImage11.addAnimation("dead",DeadHorse)
    HorseImage11.scale  =0.25
   ground05= createSprite(width/2+20,height/2-60)
  ground05.addImage(ground2Image)
  ground05.scale = 0.9
  ground05.visible = false
 CollideGroup.add(ground05)
  //ground03.debug = true
  ground05.setCollider("rectangle",0,0,100,40);
  
}

//
function draw() {
//background(220);
  
 
  if (millis() <20*1000) 
  {
          name()
    //("name");
      }
      else
      {
        
 //("main");
  ObstacleGroup.y = 600
  
  if (gameState === SERVE){
    
    
          
    
    
    
    HorseImage11.visible = false
   newscreen.visible = true
    
   // newscreen2.visible = true
    
    bstart.position(width/2-50,height-100)
  bstart.mousePressed(gsplay)
    bstart.show()
    babout.show()
  //.add(ground02)
  }

  if(gameState===PLAY){
   
    ground02.visible = true
    ground03.visible = true
    Horse.collide(ground02)
    ground02.velocityX = -1
    ground03.velocityX = -1
    ground04.visible = true
    ground04.velocityX  = -1
       ground05.visible = true
    ground05.velocityX  = -1
  
    
    
    
     score = score + Math.round(getFrameRate()/60.5);
    
  if(frameCount%1000=== 0){
  var randback = Math.round(random(1,4));
    switch(randback) {
      case 1:background.changeAnimation("running2",BackGroundImage2)
      background.scale = 6
        Themusic2.play();
       //  Themusic2.//33 ();
        Themusic.stop();
        Themusic3.stop();
         Themusic4.stop();
         TheMusic.stop();

      break;
       
      case 2:background.changeAnimation("running3",BackGroundImage3)
      background.scale = 6
  Themusic3.play()
       // Themusic2.// ();
      //  Themusic3.//33 ()
        Themusic2.stop();
        Themusic.stop();
         Themusic4.stop();
         TheMusic.stop();
       // TheMusic.//();
      break;
      case 3:background.changeAnimation("running4",BackGroundImage4)
      background.scale  = 6
       Themusic4.play()
       //  Themusic2.//3 ();
       // Themusic4.//33()
Themusic.stop();
        Themusic2.stop();
        Themusic3.stop();
        TheMusic.stop();
       // TheMusic.//33();
      break;
      case 4:background.changeAnimation("running",BackGroundImage)
      background.scale =6
       Themusic.play();
       // Themusic.//33 ()
         //Themusic2.//33 ();
        Themusic2.stop();
        Themusic3.stop();
        Themusic4.stop()
        TheMusic.stop();
       // TheMusic.//();
      break;
      
     default : break;}
    
    
  }

    if (background.x < 0){
    background.x = background.width/2;
    } 
    background.velocityX =-(3 + 3*score/100);  
     SpawnEground();
  SpawnGround();
 
groundE();
 groundE2();
 ground3();
 SpawnEground();
  ForeverRiver();
  Startofforeverriver();
    SpawnObstacle();
    if(score>0 && score%150 === 0){
       Backup();
      //("backup")
    }
    
    if(mousePressedOver(/**/)&& Horse.y >= 80&&Horse.y>10&&Horse.collide(CollideGroup)||keyDown("space")&& Horse.y >= 80&&Horse.y>10&&Horse.collide(CollideGroup)){
      jumpsound.play();
    Horse.velocityY = -14;
      Horse.velocityX  = 1
     
      Horse.changeAnimation("Jumping",JumpHorse)
  }
    
   /* if(Horse.velocityY<2){
        Deadsound.play();
    }*/
      

  Horse.velocityY = Horse.velocityY + 0.8;
     if(Horse.collide(ground02)|| Horse.collide(Frground)|| Horse.collide(newgr1)||Horse.collide(SmallGround)|| Horse.collide(GroundGroup2)|| Horse.collide(GroundGroup)||Horse.collide(CollideGroup)){
      Horse.changeAnimation("running", RunningHorse);
       jumpsound.stop()
     }
    
    if(exground.isTouching(CollideGroup)){
      exground.visible = false

     // exground.lifetime  = 1000
     CollideGroup[0].destroy();
      
    }
    
     bslide.show()
    
if(frameCount%800===0||score ===0){
         slidebutton.x=width-150
   slidebutton.visible  =true
  bslide.show()
       }   
    //(frameCount)
jumpButton.visible  = true;

    slidebutton.visible = true
    StartofGround();
    CollideGroup.setLifetimeEach = 500
 // Horse.collide(Frground)
    
 // Horse.collide(SmallGround)
   Horse.collide(newgr1)
  Horse.collide(GroundGroup2);
  Horse.collide(ground02)
  Horse.collide(GroundGroup)
    Horse.collide(CollideGroup)
     if (Horse.x<50){
    Horse.velocityX = 3  
  }
lifeline.visible = true
    blifeline.mousePressed(powerActivate)
    blifeline.show();
    if(mousePressedOver(lifeline)&&lifelineused===no){
      exground.visible = true
      exground.x=   Horse.x
      exground.y = Horse.y+50
      CollideGroup.add(exground)
      lifeline.visible = false
      lifeline.x = 2000
      
      
    }
    blifeline2.mousePressed(powerActivate2)
   
    if(lifelineused===no)
{ exground.visible= true
        exground.x = 1200
          exground.y  =120
}    if(lifelineused===yes)
{
  exground.visible= true
   exground.x=   Horse.x
      //exground.y = Horse.y+50
      CollideGroup.add(exground)
  exground.velocityY = 0
  if(exground.isTouching(CollideGroup)){
        exground.visible = false
      
     // exground.lifetime  = 1000         
     // CollideGroup[0].destroy();
    exground.destroy()
  }
}    
  if(Horse.x>60){
    Horse.x = 50
    Horse.velocityX = 0;
  }
 /* if(mousePressedOver(slidebutton)){
    Horse.changeAnimation("slide",slide)
  }*/
    bslide.mousePressed(slide11)
    
    if(motion===slidemotion&&Horse.isTouching(ObstacleGroup)){
      slidePower()
    }
   // if(Horse.isTouching(ObstacleGroup)&&bslide.mousePressed(slidePower)){}
  
  
 SmallGround.depth = -10
  
  GroupRR.depth = -99
  GroundGroup2.depth = -9
  Frground.depth = -100
 
 /* if(keyDown("up")){
      gameState = END
      //("a")
   }*/
   
     /*buttons functions*/{
    bstart.remove()
       babout.hide()
      bjump.show()
        bjump.position (50,height-100)   
      if( bjump.mousePressed(jump)&&Horse.collide(CollideGroup)){

        }
    about.x = 2000
  about.visible =false }
  
    
    
    
    if(Horse.isTouching(ObstacleGroup)||Horse.y>500||Horse.x<-5){
       Deadsound.play();
      Deadsound.loop=0;
      gameState = END
      Horse.changeAnimation("dead",DeadHorse)
    Deadsound.play();
    
    }  
    
     if(Horse.isTouching(GroupRR)){
     gameState = END
      Horse.changeAnimation("dead",DeadHorse)
      Sinkinriver.play()
       
       
       
      
    }  
    
  
  }
 
  if (gameState===END){
    
    
    about.visible = false
    about.x = 2000
   
    GroupRR.destroyEach();
         GroundGroup2.destroyEach();
              SmallGround.destroyEach()
          Frground.destroyEach()
    gameOver.visible = true
    gameOver.depth = restart.depth+1
      restart.visible = true
      screen.visible = true
     jumpButton.visible = false
    slidebutton.visible = false
    
   background.velocityX = 0 
    GroupRR.setVelocityXEach(0)
    GroundGroup2.setVelocityXEach(0);
    Horse.velocityY = 0
    SmallGround.setVelocityXEach(0)
      Frground.setVelocityXEach(0)
    newgr1.setVelocityXEach(0)
    ObstacleGroup.setVelocityXEach(0)
  
  HorseImage11.visible = false
      
    GroupRR.setLifetimeEach =0
    GroundGroup2.setLifetimeEach= 0
     Deadsound.pause();
    SmallGround.setLifetimeEach=0
      Frground.setLifetimeEach=0
    newgr1.setLifetimeEach=0
    Treegroup.setVelocityXEach (0);
  CollideGroup.setLifetimeEach=0
    CollideGroup.destroyEach()
    GroundGroup2.destroyEach();
      SmallGround.destroyEach()
    Frground.destroyEach();
    newgr1.destroyEach()
 Treegroup.destroyEach()
     ObstacleGroup.destroyEach()
   CollideGroup.destroyEach()
    blifeline.hide()
    lifeline.visible =false

  if(Horse.x>60){
    Horse.x = 50
    Horse.velocityX = 0
  }
   
     Horse.y = 0
    Horse.x  = 50
    HorseImage11.setAnimation("dead",DeadHorse)
    HorseImage11.visible = true
        if(touches.length>0 ||mousePressedOver(restart)) {      
      gameState = PLAY
      gameOver.visible = false
      restart.visible = false
      screen.visible = false
          HorseImage11.visible = false
      touches = []
          score = 0
          frameCount = 0
        
{          lifeline.visible = true
          lifeline.x = width-2-200
 blifeline.show()
}
          
     if(lifelineused===yes){
      blifeline2.show() 
        
  exground2.visible = true
       lifelineused = no
       exground2.x = 1200
          exground2.y  =120
    }
          
    
          
          
          
          
          Horse.changeAnimation("Jumping",JumpHorse)
          GroupRR.destroyEach();
         GroundGroup2.destroyEach();
              SmallGround.destroyEach()
          Frground.destroyEach()
            ground02 = createSprite(50,height/2-160)
  ground02.addImage(ground2Image)
  ground02.scale = 0.9
 // ground02.visible = false
 CollideGroup.add(ground02)
  //ground02.debug = true
  ground02.setCollider("rectangle",0,0,100,40);
  
   ground03= createSprite(150,height/2-120)
  ground03.addImage(ground2Image)
  ground03.scale = 0.9
  ground03.visible = false
 CollideGroup.add(ground03)
  //ground03.debug = true
  ground03.setCollider("rectangle",0,0,100,40);
  
  ground04= createSprite(250,height/2-90)
  ground04.addImage(ground2Image)
  ground04.scale = 0.9
  ground04.visible = false
 CollideGroup.add(ground04)
  //ground03.debug = true
  ground04.setCollider("rectangle",0,0,100,40);
          ground05= createSprite(width/2+20,height/2-60)
  ground05.addImage(ground2Image)
  ground05.scale = 0.9
  ground05.visible = false
 CollideGroup.add(ground05)
  //ground03.debug = true
  ground05.setCollider("rectangle",0,0,100,40);
  
  
    }
    
 
     
  
  }
        
       // console.log(lifelineused)
  about.visible = true
  about.addImage(aboutIcon)
  about.scale =0.05
  
  about.depth = newscreen.depth+1
   if(mousePressedOver(about)){
        
      gameState= ABOUT
    }
  if(gameState===ABOUT){
    aboutScreen.visible = true
    aboutScreen.depth = newscreen2.depth+1
   cancel.visible= true
    bstart.hide()
    bcancel.show()
    babout.hide()
    about.visible = false
  //  aboutScreen.changeImage(aboutImage1);
    bcancel.mousePressed(gsserve)
    aboutScreen.scale = 0.45
   next.visible = true
    bnext.show()
    if(mousePressedOver(cancel)){
       gameState = SERVE
      bnext.hide()
      aboutScreen.visible = false
      bprevious.hide()
      cancel.visible = false
      bcancel.hide()
    next.visible = false
      previous.visible = false
    aboutScreen.changeAnimation("about1",aboutImage1)
    page = 1}
  bnext.mousePressed(pgchange)
      if(mousePressedOver(next)&&page === 1){
         aboutScreen.changeAnimation("about2",aboutImage2);
        previous.visible = true
        page = 2
        //("page1")
      }
   if(page===2&&bnext.mousePressed(pgchange2)){
     
   }
    
    
    
    
    
    
      if(mousePressedOver(next)&&page ===2){
        aboutScreen.changeAnimation("about3",aboutImage3)
        page = 3
        //("page2")
      }
       if(mousePressedOver(previous)&&page ===2){
       aboutScreen.changeAnimation("about1",aboutImage1)
         page=1
         //("page3")
    }
    if(mousePressedOver(previous)&&page ===3){
          aboutScreen.changeAnimation("about2",aboutImage2)
      page = 2
        }
     if(page===2&&bprevious.mousePressed(pgchange01)){
          
        }
        if(page===3&&bprevious.mousePressed(pgchange02)){
          
        }
   
  }
       
      if(page===3){
        next.visible = false
  bnext.hide()
      }

    drawSprites();
       
     
if (gameState ===SERVE){textSize(30);
  fill("White")
  text("Start",width/2,height-80)
                       
                         textSize(20);
  fill("white")
             jumpingtext = text("TAP ANYWHERE TO START",width/2-50,height-400)
           
                        textSize(30)
                        fill("green")
                        stroke("white")
text("꧁༒☬*Vishnu*☬༒꧂",width/2-100,height/2-200)
                        fill("maroon")
                        stroke("white")
                        text("Designed by",width/2-270,height/2-200)
 }
   //
        if(gameState===PLAY){
          
          
          
          textSize(20)
           fill("black")
   text("Press To ",width-170,height-100)
   text("Slide",width-170,height-60)
          
          
        }
          
          
          
          
          
        
        
        
        
        
        
        
        
 
 if(gameState === PLAY){
    textSize(20);
  fill("black")
  text("Score: "+ score,width-100,height/2-200);
    textSize(20);
  fill("black")
   text("Press To ",10,height-120)
   text("Jump",10,height-80)
 }
  if(gameState===END){
     textSize(20);
  fill("black")
  text("Score:       "+ score,width-400,height/2-100);
     fill("green")
    textSize(30)
                        stroke("white")
                       text("꧁༒☬*Vishnu*☬༒꧂",width/2-100,height/2-200)
                        fill("maroon")
                        stroke("white")
                        text("Designed by",width/2-270,height/2-200)
 
  }
   if(Horse.isTouching(lineofalert)){
    textSize(30)
     fill("maroon")
                        stroke("white")
    text("ALERT",width/2,height/2)
    text("PRESS JUMP TO SAVE YOURSELF",width/2,height/2+100)
     

     
     
     
     
     
     
     
     
    
  }  
}}
function SpawnGround(){
 if (frameCount% 60 ===0) {
  var rand = Math.round(random(1,6));
    switch(rand) {
      case 1:  var ground11 = createSprite(width+100,height-240,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height-240,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
        var invisibleground = createSprite(width+164,height-265,200,5)
        invisibleground.velocityX = ground111.velocityX
        invisibleground.visible = false
     ////("123456789")
    
    var ground33= createSprite(width+220,height-240,10,10)
    ground33.addImage(realground3)
    ground33.scale = 0.5
    ground33.velocityX =-(3 + 3*score/100);  
        jumpButton.depth=ground11.depth+1
        slidebutton.depth =ground11.depth+1
        ground11.lifetime = 550
        ground111.lifetime = 550
        ground33.lifetime = 550
        Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground33) 
       
    var Tree =  createSprite(width+220,height-300,0,10)
   Tree.addImage(TreeImage)
    Tree.velocityX =-(3 + 3*score/100);  
  Tree.scale=0.25
        Treegroup.add(Tree);
        //("1")
        var obstacle = createSprite(width+220,height-280,0,10)
        obstacle.addImage(ObstacleImage2)
            obstacle.velocityX =-(3 + 3*score/100);  
        obstacle.scale = 0.5;
         ObstacleGroup.add(obstacle)
        
        
         CollideGroup.add(invisibleground) 
      
        
        
              break;
     case 2:  var ground11 = createSprite(width+100,height-320,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height-320,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
      var invisibleground2 = createSprite(width+164,height-350,200,5)
               invisibleground2.velocityX = ground111.velocityX
              CollideGroup.add(invisibleground2)
         slidebutton.depth =ground11.depth+1
     invisibleground2.visible = false
    var ground33= createSprite(width+220,height-320,10,10)
    ground33.addImage(realground3)
    ground33.scale = 0.5
    ground33.velocityX =-(3 + 3*score/100);  
        ground11.lifetime = 550
        ground111.lifetime = 550
        ground33.lifetime = 550
         Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground33)  
         //.add(ground11) 
        //.add(ground111) 
        //.add(ground33) 
        
             
        //("112233")
              break;
      case 3:  var ground11 = createSprite(width+100,height-120,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height-120,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
     
    var invisibleground3 = createSprite(width+164,height-145,200,5)
     invisibleground3.velocityX = ground111.velocityX
         invisibleground3.visible = false
        jumpButton.depth=ground11.depth+1
        jumpButton.depth=ground11.depth+1
         slidebutton.depth =ground11.depth+1
    var ground333= createSprite(width+220,height-120,10,10)
    ground333.addImage(realground3)
    ground333.scale = 0.5
    ground333.velocityX =-(3 + 3*score/100);  
        ground11.lifetime = 550
        ground111.lifetime = 550
        ground333.lifetime = 550
         Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground333)
        //("2222222222222222")
          Tree =  createSprite(width+164,height-180,0,10)
   Tree.addImage(TreeImage)
    Tree.velocityX =-(3 + 3*score/100);  
  Tree.scale=0.25
        Treegroup.add(Tree);
        Tree.collide(ground333)
         //.add(ground11) 
        //.add(ground111) 
        //.add(ground33) 
        CollideGroup.add(invisibleground3)
       
              break;
      case 4: var ground11 = createSprite(width+100,height/2,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height/2,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
     
    var invisibleground4=createSprite(width+164,height/2-25,200,5)
     invisibleground4.velocityX = ground111.velocityX
         invisibleground4.visible = false
        jumpButton.depth=ground11.depth+1
         slidebutton.depth =ground11.depth+1
    var ground33= createSprite(width+220,height/2,10,10)
    ground33.addImage(realground3)
    ground33.scale = 0.5
    ground33.velocityX =-(3 + 3*score/100);  
        
        ground11.lifetime = 550
        ground111.lifetime = 550
        ground33.lifetime = 550
         Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground33)  
        CollideGroup.add(invisibleground4)
        //.add(ground11) 
        //.add(ground111) 
        //.add(ground33) 
        
              break;
      case 5:  var ground11 = createSprite(width+100,height-110,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height-110,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
     
        var invisibleground5 = createSprite(width+164,height-140,200,5)
     invisibleground5.velocityX = ground111.velocityX
        jumpButton.depth=ground11.depth+1
        //("7894563231213253")
         slidebutton.depth =ground11.depth+1
         invisibleground5.visible = false
    var ground33= createSprite(width+220,height-110,10,10)
    ground33.addImage(realground3)
    ground33.scale = 0.5
    ground33.velocityX =-(3 + 3*score/100);  
        
        ground11.lifetime = 550
        ground111.lifetime = 550
        ground33.lifetime = 550
         Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground33) 
    CollideGroup.add(invisibleground5)
        var Tree =  createSprite(width+164,height-170,0,10)
   Tree.addImage(TreeImage)
    Tree.velocityX =-(3 + 3*score/100);  
  Tree.scale=0.25
        //.add(ground11) 
        //.add(ground111) 
        //.add(ground33) 
        
       
              break;
      case 6:  var ground11 = createSprite(width+100,height-400,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height-400,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
     
    var invisibleground6 = createSprite(width +164,height-425,200,5); invisibleground6.velocityX = ground111.velocityX
     invisibleground6.visible = false
        jumpButton.depth=ground11.depth+1
         slidebutton.depth =ground11.depth+1
    var ground33= createSprite(width+220,height-400,10,10)
    ground33.addImage(realground3)
    ground33.scale = 0.5
    ground33.velocityX =-(3 + 3*score/100);  
        ground11.lifetime = 550
        ground111.lifetime = 550
        ground33.lifetime = 550
         Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground33)  
   //.add(ground11) 
        //.add(ground111) 
        //.add(ground33) 
        CollideGroup.add(invisibleground6)
              break;
      default: break;
       
    }
   
    //assign scale and lifetime to the obstacle           
   
   
 }   
}


function SpawnEground(){
  if (frameCount%290===0){
      var newgr = createSprite(width+180,height-145,10,10)
  newgr.addImage(groundImage)
  var newgr2 = createSprite(width+300,height-145,10,10)
  newgr2.addImage(groundImage3)

   
  var newgr3 = createSprite(width+180,height-25,10,10)
  newgr3.addImage(groundImage4)
 
var newgr4 = createSprite(width+300,height-25,10,10)
newgr4.addImage(groundImage2)

 var newgr5 = createSprite(width+400,height-25,10,10)   
 newgr5.addImage(groundImage)
 var newgr6 = createSprite(width+450,height-25,10,10)
    newgr6.addImage(groundImage3)                         
 
    //.add(newgr)
     //.add(newgr2)
     //.add(newgr5)
     //.add(newgr6)
    
 
 

 //river.visible = false                             
// river2.visible = false                             
 //riverdown.visible = false                             
 //riverdown2.visible = false                             
 newgr.visible = true                             
 // newgr2.visible = false                            
 // newgr3.visible = false                            
  //newgr4.visible = false                            
   //newgr5.visible = false                           
    // newgr6.visible= false   
                           
 newgr.velocityX = -(3 + 3*score/100);                           
 newgr2.velocityX = -(3 + 3*score/100);       
 newgr3.velocityX =-(3 + 3*score/100);                  
 newgr4.velocityX =-(3 + 3*score/100);                     
 newgr5.velocityX =-(3 + 3*score/100);                     
newgr6.velocityX = -(3 + 3*score/100);                               
                             
                             
                             

 newgr.lifetime = 550                          
    newgr2.lifetime = 550                          
    newgr3.lifetime = 550                        
    newgr4.lifetime = 550                          
     newgr5.lifetime = 550
    newgr6.lifetime = 550
 
                                                                                           
                             
GroundGroup.add(newgr)    
GroundGroup.add(newgr3)
GroundGroup.add(newgr2)                             
GroundGroup.add(newgr4)       
GroundGroup.add(newgr5)  
GroundGroup.add(newgr6)    
   
   
    
                             }
  
}
function groundE(){
  if (frameCount%480===0){
        var newgr = createSprite(width+180,height-145,10,10)
  newgr.addImage(groundImage)
   newgr.velocityX =-(3 + 3*score/100);  
  var newgr2 = createSprite(width+300,height-145,10,10)
  newgr2.addImage(groundImage3)
   newgr2.velocityX =-(3 + 3*score/100);  
    //newgr2.debug = true

   
  var newgr3 = createSprite(width+180,height-25,10,10)
  newgr3.addImage(groundImage4)
   newgr3.velocityX =-(3 + 3*score/100);  
 
var newgr4 = createSprite(width+300,height-25,10,10)
newgr4.addImage(groundImage2)
newgr4.velocityX =-(3 + 3*score/100);  
    newgr.lifetime = 550
    newgr2.lifetime = 550
    newgr3.lifetime = 550
    newgr4.lifetime = 550
    SmallGround.add(newgr)
    SmallGround.add(newgr2)
    SmallGround.add(newgr3)
    SmallGround.add(newgr4)
     //.add(newgr)
       //.add(newgr2)
    //.add(newgr3)
    //.add(newgr4)
 }
}
function groundE2(){
  if (frameCount%225===0){
    var ground11 = createSprite(width+100,height/2,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height/2,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
     var invisibleground = createSprite(width+164,height/2-28,200,10)
    invisibleground.velocityX  = ground111.velocityX
    invisibleground.visible = false
    jumpButton.depth=ground11.depth+1
     slidebutton.depth =ground11.depth+1
    var ground33= createSprite(width+220,height/2,10,10)
    ground33.addImage(realground3)
    ground33.scale = 0.5
    ground33.velocityX =-(3 + 3*score/100);  
     Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground33)
     CollideGroup.add(ground11)
        CollideGroup.add(ground33)
        CollideGroup.add(ground111)
    CollideGroup.add(invisibleground)
    ground11.lifetime = 550
        ground111.lifetime = 550
        ground33.lifetime = 550
    
  }
}
 function ground3(){
  if(frameCount%480===0){
  
    
    var ground = createSprite(515,550,10,10)
    ground.addImage(realGround)
    ground.scale = 0.5
   
    
    var ground1 = createSprite(579,550,10,10)
    ground1.addImage(realground2)
    ground1.scale = 0.5
  
    jumpButton.depth=ground1.depth+1
    var ground3 = createSprite(639,550,10,10)
    ground3.addImage(realground3)
    ground3.scale = 0.5
     
 
    ground3.velocityX =-(3 + 3*score/100);  
    ground1.velocityX = -(3 + 3*score/100);  
     ground.velocityX =-(3 + 3*score/100);  
   
 Frground.add(ground)  
         Frground.add(ground1)  
         Frground.add(ground3)
     CollideGroup.add(ground1)
        CollideGroup.add(ground3)
        CollideGroup.add(ground)
    ground1.lifetime = 550
        ground.lifetime = 550
        ground3.lifetime = 550
     
    
  }
 }
function ForeverRiver(){
  if (frameCount%20===0){
   var river = createSprite(width+80,height-15,10,0);                        river.addImage(riverImage)
river.scale = 0.5
  var river2 = createSprite(width+140,height-15,10,10)
  river2.addImage(riverImage)
river2.scale = 0.5
var riverdown = createSprite(width+80,height+20,10,10)
 riverdown.addImage(riverdownImage)
riverdown.scale = 0.5;
 
var riverdown2 =createSprite(width+140,height+20,10,10)
riverdown2.addImage(riverdownImage)
riverdown2.scale= 0.5
  if(gameState===PLAY){river.velocityX =-3                             
 river2.velocityX =-3  
  riverdown.velocityX =-3                               
riverdown2.velocityX =-3  
  river.lifetime = 550 
  river2.lifetime = 550 
 riverdown.lifetime = 550 
 riverdown2.lifetime = 550 }
    GroupRR.add(river)
    GroupRR.add(river2)
    GroupRR.add(riverdown2)
    GroupRR.add(riverdown)
    if(gameState===END){
       river.setvelocityX = 0;                            
 river2.setVelocityX = 0;                             
  riverdown.setVelocityX = 0;                             
riverdown2.setVelocityX = 0;
    }
  }
  
}
function Startofforeverriver(){
if (frameCount===5){
   var river = createSprite(width+80,height-15,10,0);                        river.addImage(riverImage)
river.scale = 0.5
  var river2 = createSprite(width+140,height-15,10,10)
  river2.addImage(riverImage)
river2.scale = 0.5
var riverdown = createSprite(width+80,height+20,10,10)
 riverdown.addImage(riverdownImage)
riverdown.scale = 0.5;
 
var riverdown2 =createSprite(width+140,height+20,10,10)
riverdown2.addImage(riverdownImage)
riverdown2.scale= 0.5
  river.velocityX =-(3 + 3*score/100);                               
 river2.velocityX =-(3 + 3*score/100);                               
  riverdown.velocityX =-(3 + 3*score/100);                               
riverdown2.velocityX =-(3+ 3*score/100);  
  river.lifetime = 550 
  river2.lifetime = 550 
 riverdown.lifetime = 550 
 riverdown2.lifetime = 550
 var river1 = createSprite(width+80+100,height-15,10,0);                        river1.addImage(riverImage)
river1.scale = 0.5
   var river3 = createSprite(width+140,height-15,10,10)
  river3.addImage(riverImage)
river3.scale = 0.5
var riverdown1 = createSprite(width+80,height+20,10,10)
 riverdown1.addImage(riverdownImage)
riverdown1.scale = 0.5;
 
 var riverdown3 =createSprite(width+140,height+20,10,10)
riverdown3.addImage(riverdownImage)
riverdown3.scale= 0.5
  river1.velocityX =-(3 + 3*score/100);                               
 river3.velocityX =-(3 + 3*score/100);                               
  riverdown1.velocityX =-(3 + 3*score/100);                               
riverdown3.velocityX =-(3 + 3*score/100);  
  river.lifetime = 550 
  river2.lifetime = 550 
 riverdown.lifetime = 550 
 riverdown2.lifetime = 550 
  GroupRR.add(river)
   GroupRR.add(river2)
   GroupRR.add(riverdown)
   GroupRR.add(riverdown2)
   GroupRR.add(river1)
   GroupRR.add(river3)
   GroupRR.add(riverdown1)
   GroupRR.add(riverdown3)
  
  }
  
}
function StartofGround(){
  if(frameCount ===1){
  
  var newgr = createSprite(width+180,height-145,10,10)
  newgr.addImage(groundImage)
   newgr.velocityX =-(3 + 3*score/100);  
  var newgr2 = createSprite(width+300,height-145,10,10)
  newgr2.addImage(groundImage3)
   newgr2.velocityX =-(3 + 3*score/100);  

   
  var newgr3 = createSprite(width+180,height-25,10,10)
  newgr3.addImage(groundImage4)
   newgr3.velocityX =-(3 + 3*score/100);  
 
var newgr4 = createSprite(width+300,height-25,10,10)
newgr4.addImage(groundImage2)
newgr4.velocityX =-(3 + 3*score/100);  
   SmallGround.add(newgr)
    SmallGround.add(newgr2)
    SmallGround.add(newgr3)
    SmallGround.add(newgr4)
    newgr.dept = -1
    newgr2.dept = -1
    newgr3.dept = -1
  CollideGroup.add(newgr2)
  CollideGroup.add(newgr)
  CollideGroup.add(newgr3)
  CollideGroup.add(newgr4)
 }
  
}
  function SpawnObstacle(){
  if (frameCount%480===0)  {
    var obstacle  =  createSprite(width+300,height-225,10,10)
    obstacle.addImage(ObstacleImage)
    obstacle.velocityX =-(3 + 3*score/100);  
    obstacle.scale=0.5
    ObstacleGroup.add(obstacle)
    
    
                           }
    
    
  }
  
function Backup(){
  
 if (frameCount% 60 ===0) {
  var rand = Math.round(random(1,6));
    switch(rand) {
      case 1:  var ground11 = createSprite(width+100,height-240,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height-240,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
        var invisibleground = createSprite(width+164,height-265,200,5)
        invisibleground.velocityX = ground111.velocityX
        invisibleground.visible = false
     ////("123456789")
    
    var ground33= createSprite(width+220,height-240,10,10)
    ground33.addImage(realground3)
    ground33.scale = 0.5
    ground33.velocityX =-(3 + 3*score/100);  
        jumpButton.depth=ground11.depth+1
        slidebutton.depth =ground11.depth+1
        ground11.lifetime = 550
        ground111.lifetime = 550
        ground33.lifetime = 550
        Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground33) 
       
    var Tree =  createSprite(width+220,height-300,0,10)
   Tree.addImage(TreeImage)
    Tree.velocityX =-(3 + 3*score/100);  
  Tree.scale=0.25
        Treegroup.add(Tree);
        //("1")
        var obstacle = createSprite(width+220,height-280,0,10)
        obstacle.addImage(ObstacleImage2)
            obstacle.velocityX =-(3 + 3*score/100);  
        obstacle.scale = 0.5;
         ObstacleGroup.add(obstacle)
        
        
         CollideGroup.add(invisibleground) 
      
        
        
              break;
     case 2:  var ground11 = createSprite(width+100,height-320,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height-320,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
      var invisibleground2 = createSprite(width+164,height-350,200,5)
               invisibleground2.velocityX = ground111.velocityX
              CollideGroup.add(invisibleground2)
         slidebutton.depth =ground11.depth+1
     invisibleground2.visible = false
    var ground33= createSprite(width+220,height-320,10,10)
    ground33.addImage(realground3)
    ground33.scale = 0.5
    ground33.velocityX =-(3 + 3*score/100);  
        ground11.lifetime = 550
        ground111.lifetime = 550
        ground33.lifetime = 550
         Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground33)  
         //.add(ground11) 
        //.add(ground111) 
        //.add(ground33) 
        
             
        //("112233")
              break;
      case 3:  var ground11 = createSprite(width+100,height-120,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height-120,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
     
    var invisibleground3 = createSprite(width+164,height-145,200,5)
     invisibleground3.velocityX = ground111.velocityX
         invisibleground3.visible = false
        jumpButton.depth=ground11.depth+1
        jumpButton.depth=ground11.depth+1
         slidebutton.depth =ground11.depth+1
    var ground333= createSprite(width+220,height-120,10,10)
    ground333.addImage(realground3)
    ground333.scale = 0.5
    ground333.velocityX =-(3 + 3*score/100);  
        ground11.lifetime = 550
        ground111.lifetime = 550
        ground333.lifetime = 550
         Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground333)
        //("2222222222222222")
          Tree =  createSprite(width+164,height-180,0,10)
   Tree.addImage(TreeImage)
    Tree.velocityX =-(3 + 3*score/100);  
  Tree.scale=0.25
        Treegroup.add(Tree);
        Tree.collide(ground333)
         //.add(ground11) 
        //.add(ground111) 
        //.add(ground33) 
        CollideGroup.add(invisibleground3)
       
              break;
      case 4: var ground11 = createSprite(width+100,height/2,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height/2,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
     
    var invisibleground4=createSprite(width+164,height/2-25,200,5)
     invisibleground4.velocityX = ground111.velocityX
         invisibleground4.visible = false
        jumpButton.depth=ground11.depth+1
         slidebutton.depth =ground11.depth+1
    var ground33= createSprite(width+220,height/2,10,10)
    ground33.addImage(realground3)
    ground33.scale = 0.5
    ground33.velocityX =-(3 + 3*score/100);  
        
        ground11.lifetime = 550
        ground111.lifetime = 550
        ground33.lifetime = 550
         Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground33)  
        CollideGroup.add(invisibleground4)
        //.add(ground11) 
        //.add(ground111) 
        //.add(ground33) 
        
              break;
      case 5:  var ground11 = createSprite(width+100,height-110,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height-110,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
     
        var invisibleground5 = createSprite(width+164,height-140,200,5)
     invisibleground5.velocityX = ground111.velocityX
        jumpButton.depth=ground11.depth+1
        //("7894563231213253")
         slidebutton.depth =ground11.depth+1
         invisibleground5.visible = false
    var ground33= createSprite(width+220,height-110,10,10)
    ground33.addImage(realground3)
    ground33.scale = 0.5
    ground33.velocityX =-(3 + 3*score/100);  
        
        ground11.lifetime = 550
        ground111.lifetime = 550
        ground33.lifetime = 550
         Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground33) 
    CollideGroup.add(invisibleground5)
        var Tree =  createSprite(width+164,height-170,0,10)
   Tree.addImage(TreeImage)
    Tree.velocityX =-(3 + 3*score/100);  
  Tree.scale=0.25
        //.add(ground11) 
        //.add(ground111) 
        //.add(ground33) 
        
       
              break;
      case 6:  var ground11 = createSprite(width+100,height-400,10,10)
    ground11.addImage(realGround)
    ground11.scale = 0.5
    ground11.velocityX =-(3 + 3*score/100);  
   
    
    var ground111 = createSprite(width+164,height-400,10,10)
    ground111.addImage(realground2)
    ground111.scale = 0.5
    ground111.velocityX =-(3 + 3*score/100);  
     
    var invisibleground6 = createSprite(width +164,height-425,200,5); invisibleground6.velocityX = ground111.velocityX
     invisibleground6.visible = false
        jumpButton.depth=ground11.depth+1
         slidebutton.depth =ground11.depth+1
    var ground33= createSprite(width+220,height-400,10,10)
    ground33.addImage(realground3)
    ground33.scale = 0.5
    ground33.velocityX =-(3 + 3*score/100);  
        ground11.lifetime = 550
        ground111.lifetime = 550
        ground33.lifetime = 550
         Frground.add(ground11)  
         Frground.add(ground111)  
         Frground.add(ground33)  
   //.add(ground11) 
        //.add(ground111) 
        //.add(ground33) 
        CollideGroup.add(invisibleground6)
              break;
      default: break;
       
    }
   
    //assign scale and lifetime to the obstacle           
   
   
 }   
}



function SpawnEground(){
  if (frameCount%290===0){
      var newgr = createSprite(width+180,height-145,10,10)
  newgr.addImage(groundImage)
  var newgr2 = createSprite(width+300,height-145,10,10)
  newgr2.addImage(groundImage3)

   
  var newgr3 = createSprite(width+180,height-25,10,10)
  newgr3.addImage(groundImage4)
 
var newgr4 = createSprite(width+300,height-25,10,10)
newgr4.addImage(groundImage2)

 var newgr5 = createSprite(width+400,height-25,10,10)   
 newgr5.addImage(groundImage)
 var newgr6 = createSprite(width+450,height-25,10,10)
    newgr6.addImage(groundImage3)                         
 CollideGroup.add(newgr)
        CollideGroup.add(newgr2)
     CollideGroup.add(newgr3)
      CollideGroup.add(newgr4)
     CollideGroup.add(newgr5)
     CollideGroup.add(newgr6)

 //river.visible = false                             
// river2.visible = false                             
 //riverdown.visible = false                             
 //riverdown2.visible = false                             
 newgr.visible = true                             
 // newgr2.visible = false                            
 // newgr3.visible = false                            
  //newgr4.visible = false                            
   //newgr5.visible = false                           
    // newgr6.visible= false   
                           
 newgr.velocityX = -(3 + 3*score/100);                           
 newgr2.velocityX = -(3 + 3*score/100);       
 newgr3.velocityX =-(3 + 3*score/100);                  
 newgr4.velocityX =-(3 + 3*score/100);                     
 newgr5.velocityX =-(3 + 3*score/100);                     
newgr6.velocityX = -(3 + 3*score/100);                               
                             
                             
                             

 newgr.lifetime = 550                          
    newgr2.lifetime = 550                          
    newgr3.lifetime = 550                        
    newgr4.lifetime = 550                          
     newgr5.lifetime = 550
    newgr6.lifetime = 550
 
                                                                                           
                             
GroundGroup.add(newgr)    
GroundGroup.add(newgr3)
GroundGroup.add(newgr2)                             
GroundGroup.add(newgr4)       
GroundGroup.add(newgr5)  
GroundGroup.add(newgr6)    
    
    
                         
       
    }
   
    //assign scale and lifetime to the obstacle           
   
   
 

    
    
  
}
function name()
{
  var trail = map(mouseY, 0, height, 1, 10);
    fill(0, trail);
    rect(0, 0, width, height);

    noStroke();
    for(let i= 0; i < points.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
    for(let i= 0; i < points2.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points2[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
    for(let i= 0; i < points3.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points3[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
    for(let i= 0; i < points4.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points4[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
    for(let i= 0; i < points5.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points5[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
}
function gsplay(){
  gameState = PLAY
      newscreen.visible= false
      newscreen2.visible = false
   touches = []
      Horse.x = ground02.x
      Horse.changeAnimation("Jumping",JumpHorse)
 
}
function jump(){
//console.log("jumpinghorse")
   jumpsound.play();
    Horse.velocityY = -14;
      Horse.velocityX  = 1
     
      Horse.changeAnimation("Jumping",JumpHorse)
}
function gsabout(){
   gameState= ABOUT
}
function gsserve(){
   gameState = SERVE
      aboutScreen.visible = false
      cancel.visible = false
    next.visible = false
      previous.visible = false
    aboutScreen.changeAnimation("about1",aboutImage1)
    page = 1
  bcancel.hide()
  bnext.hide()
  bprevious.hide()
}
function  pgchange(){
  
   aboutScreen.changeAnimation("about2",aboutImage2);
        previous.visible = true
        page = 2
  bprevious.show()
  
  
}
function pgchange2(){
   aboutScreen.changeAnimation("about3",aboutImage3)
        page = 3
  
}
function pgchange01(){
  aboutScreen.changeAnimation("about1",aboutImage1)
         page=1
  bprevious.hide()
  previous.visible = false
}
function pgchange02(){
   aboutScreen.changeAnimation("about2",aboutImage2);
        previous.visible = true
        page = 2
  bprevious.show()
}
function slide11(){
   Horse.changeAnimation("slide",slide)
  //setTimeout(resetAnimation,1000)
  //console.log("slfd");
  
   
  
}

function resetAnimation(){
  Horse.changeAnimation("running", RunningHorse)
 // console.log("changing")
}
function slidePower(){
  
  
   ObstacleGroup[0].destroy();
    slidebutton.visible = false
    slidebutton.x = width/2-1000
  bslide.hide();
  
}
function powerActivate(){
  
    exground.visible = true
      exground.x=   Horse.x
      exground.y = Horse.y+50
  exground.lifetime = 1500
      CollideGroup.add(exground)
      lifeline.visble = false
      lifeline.x = 2000
  blifeline.remove();
  lifelineused = yes
}
function powerActivate2(){
  
    exground2.visible = true
      exground2.x=   Horse.x
      exground2.y = Horse.y+50

      CollideGroup.add(exground2);
  setTimeout(reuselifeline,20000)
      lifeline.visible = false
      lifeline.x = 2000
  blifeline2.hide();
  lifelineused = yes
 
  
}
function reuselifeline(){
  CollideGroup.remove(exground2)
  exground2.x = 1200
  exground2.y = 120
   lifeline.visible = false
  exground2.visible = false
  
}




