var runner, runner_running;
var path;
var pathImage;

function preload()
{
  //pre-load images
runner_running = loadAnimation("Runner-1.png","Runner-2.png");
pathImage = loadImage("path.png");
}

function setup()
{
  createCanvas(300,400);
  //create sprites here

  //creating path
  path = createSprite(150,150,200,200);
  path.addImage("path moving", pathImage);
  path.velocityY=2;

  //creating jaxon
  runner = createSprite(200,320,20,100);
  runner.addAnimation("running", runner_running);
  runner.scale=0.07;

  //creating invisible boundries
  invibound = createSprite(300,200,2,400);
  invibound.shapeColor="red";
  //invibound.visibile=false;

    //creating invisible boundries
    inviboundtwo = createSprite(20,200,2,400);
    inviboundtwo.shapeColor="red";
    //invibound.visibile=false;

}

function draw() 
{

runner.x=mouseX;

  if (path.y > 400) 
  { 
       path.y = 0;
  }

  runner.bounceOff(invibound);
  runner.bounceOff(inviboundtwo);

 // background("red");
  drawSprites();
}
