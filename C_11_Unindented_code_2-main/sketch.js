var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud 

var cloudimage

function preload() {
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
trex_collided = loadImage("trex_collided.png");
groundImage = loadImage("ground2.png")
cloudimage=   loadImage("cloud.png")
}










function setup() {
createCanvas(600, 200);


//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;



//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;


invisibleGround=createSprite(200,190,400,10)

invisibleGround.visible=false



}










function draw() {
background(220);
//jump when the space button is pressed
if (keyDown("space") &  trex.y>160
) {
trex.velocityY = -10;
}
trex.velocityY = trex.velocityY + 0.8


if (ground.x < 0) {
ground.x = ground.width / 2;
}

trex.collide(invisibleGround);
drawSprites();

spawnClouds();

//var randomnumber =Math.round(random(10,100))
console.log(frameCount)
//console.log(trex.y);
}


function spawnClouds(){
if (frameCount %60 === 0){



    cloud= createSprite(600,60,40,10)
    cloud.velocityX=-4
    cloud.addImage(cloudimage)
    cloud.y=Math.round(random (10,60))
    cloud.scale=0.4
    cloud.depth=trex.depth
    trex.depth=trex.depth+1
}
    
    
}