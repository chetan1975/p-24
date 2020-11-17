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
    paper = new Paper(200,680,40)

  ground = new Ground(600,height,1200,20)
  
  recta1=new Box(620,650,15,120)
  recta3=new Box(490,650,15,120)
  recta4=new Box(550,690,120,15)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  recta1.display();
  recta3.display();
  recta4.display();
  
  
 
}

function keyPressed(){
  if( keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
  }
}



