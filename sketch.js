
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
 

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,400,10);
    
	ground = new Ground(20,680,800,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
  
  bin.display();
  paper.display();
  ground.display();





  drawSprites();
 
}



