
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope;


function preload() {

}

function setup() {
	createCanvas(1100, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(460, 100, 20);
	bobObject2 = new Bob(500, 100, 20);
	bobObject3 = new Bob(540, 100, 20);
	bobObject4 = new Bob(580, 100, 20);
	bobObject5 = new Bob(620, 100, 20);
	roof = new ceiling(550, 100, 250, 20);
	rope = new hangOn(bobObject1.body, roof.body, -	130, 0);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(100);

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope.display();
	roof.display();






	drawSprites();

}



