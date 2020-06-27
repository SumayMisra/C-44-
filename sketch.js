var bg,box,coin,grnd,player;

function preload(){

bg=loadImage("background.webp");
box=loadImage("box.webp");
coin=loadImage("coin.webp");
grnd=loadImage("ground.png")
playerimg=loadImage("super hero.jpg");

}

function setup(){
createCanvas(1000,500);

ground=createSprite(500,490,1000,20);
ground.addImage(grnd);

player=createSprite(50,470,20,20);
player.addImage(playerimg);

box1=createSprite(500,450,50,50);
box1.addImage(box);
box1.scale=0.3;

coin1=createSprite(500,200,50,50);
coin1.addImage(coin);
coin1.scale=0.1;

}

function draw(){
background(bg);

ground.velocityX=-3;
if(ground.x<0){

ground.x=ground.width/2;

}

drawSprites();

}


