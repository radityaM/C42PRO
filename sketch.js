var bg,issImg,iss,scImg1,scImg2,scImg3,scImg4,sc;

var xC,yC;

var gameState=0;

var pos=[];

xC=360;
yC=262;

function preload(){
  bg=loadImage("spacebg.jpg");
  issImg=loadImage("iss.png");
  scImg1=loadImage("spacecraft1.png");
  scImg2=loadImage("spacecraft2.png");
  scImg3=loadImage("spacecraft3.png");
  scImg4=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(420, 170, 50, 50);
  iss.addImage(issImg);
  iss.scale=0.83;

  sc=createSprite(300,330,50,50);
  sc.addImage(scImg1);
  sc.scale=0.2;

  pos.push(sc.x);
  pos.push(sc.y);
}

function draw() {
  background(bg);

  pos.pop();
  pos.pop();
  pos.push(sc.x);
  pos.push(sc.y);

  if(sc.x===360&&sc.y===262){
    gameState=1;
    textSize(40);
    fill("white");
    text("Docking Successful!",360,350);
    sc.addImage(scImg1);
  }

  if(gameState===0){
  
    if(keyDown(RIGHT_ARROW)){
      sc.x=sc.x+1;
      sc.addImage(scImg3);
    }else if(keyDown(LEFT_ARROW)||keyDown(UP_ARROW)===false){
      sc.addImage(scImg1);
    }

    if(keyDown(LEFT_ARROW)){
      sc.x=sc.x-1;
      sc.addImage(scImg4);
    }

    if(keyDown(DOWN_ARROW)){
      sc.y=sc.y+1;
    }
  
    if(keyDown(UP_ARROW)){
      sc.y=sc.y-1;
      sc.addImage(scImg2);
    }
  }

  //console.log(pos);

  sc.depth=iss.depth;
  sc.depth=sc.depth-1;
  drawSprites();

  textSize(20);
  fill("white");
  text("Position: "+pos,10,30);
  text("Set your position at "+xC+","+yC,10,60);
}