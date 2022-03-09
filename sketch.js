
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

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.5,
		density:1.2,
		friction:0
	}
	ball=Bodies.circle(100, 100,20, ball_options)
	World.add(world, ball);

	var groun_options={
		isStatic:true
	}
	ground=Bodies.rectangle(400, height, 800, 10, groun_options);
    World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 10);
  
 // drawSprites();
 
}



