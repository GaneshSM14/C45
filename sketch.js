var brakepedal,brakepedal_img;
var brakedisc,brakedisc_img;
var brakedisc2,brakedisc2_img;
var temperature,temperature_img;
function preload(){
  brakepedal_img=loadImage("Brake pedal.JPG");
  brakedisc_img=loadImage("Brake disc normal.JPG");
  brakedisc2_img=loadImage("Hot brake disc.JPG");
}
function setup() {
  createCanvas(1200,1200);
  brakepedal=createSprite(200,500,50,50);
  brakepedal.addImage(brakepedal_img);
  brakepedal.scale=0.5;
  //brakedisc=createSprite(600,600,50,50);
 // brakedisc.addImage(brakedisc_img);
  //brakedisc.scale=0.5;
  brakedisc2=createSprite(600,600,50,50);
  brakedisc2.addImage(brakedisc_img);
  brakedisc2.scale=0.5;
  temperature=createSprite(100,1000,50,50);

}

function draw() {
  background(0,0,0);  
  if(keyDown("space")){
    brakedisc2.addImage(brakedisc2_img);
  }
  drawSprites();
}