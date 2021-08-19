
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var box1, box2, box3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 150, 1200, 60);
  paper = new Paper(100, 100, 10);
    box1 = new Dustbin(1150, 270, 20, 120);
    box2 = new Dustbin(950, 270, 20, 120);
    box3 = new Dustbin(1050, 320, 220, 20);
    box4 = new Dustbin(1150, 60, 20, 120);
    box5 = new Dustbin(950, 60, 20, 120);
    box6 = new Dustbin(1050, 110, 220, 20);
  ground2 = new Ground(600, 345, 1200, 10);

	Engine.run(engine);
  
}


function draw() {
  background("pink");
  rectMode(CENTER);
  Engine.update(engine);
  //console.log(paper.body.position.y);

  if(paper.body.position.x < 125){
    textSize(35)
    text("Press UP Arrow", 500, 100);
  }

paper.display();
  box1.display();
  box2.display();
  box3.display();
  /*box4.display();
  box5.display();
  box6.display();*/
  ground2.display();

  drawSprites();
}

function keyPressed() {
if(keyCode === UP_ARROW){
  
  Matter.Body.applyForce(paper.body, paper.body.position,{x:3, y:-3});

}
}