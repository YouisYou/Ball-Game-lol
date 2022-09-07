var ball;
var groundObj, leftSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(475,600,20,120);
	rightSide = new Ground(675,600,20,120);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);



	rectMode(CENTER);
	ellipseMode(RADIUS);

	//Create the Bodies Here.
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();

 groundObj.show();
 leftSide.show();
 rightSide.show();

 Engine.run(engine);

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:9,y:-10},{x:17,y:-12});
	}
}
