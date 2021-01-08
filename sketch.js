
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bobDiameter;
var roof1,rope1,rope2,rope3,rope4,rope5
var engine, world;

function preload()
{
	
}

function setup() {
  createCanvas(1200, 1200);
  
	engine = Engine.create();
  world = engine.world;

  bobDiameter=40;
  startbobx=width/2;
  startboby=height/4+500;

  
  bob1 = new Bob(startbobx-bobDiameter*2,startboby,bobDiameter);
  bob2 = new Bob(startbobx-bobDiameter,startboby,bobDiameter);
  bob3 = new Bob(startbobx,startboby,bobDiameter);
  bob4 = new Bob(startbobx+bobDiameter,startboby,bobDiameter);
  bob5 = new Bob(startbobx+bobDiameter*2,startboby,bobDiameter);

  roof1 = new Roof(width/2,height/4,width/5,20);

  rope1 = new Rope(bob1.body,roof1.body,-bobDiameter *2,0);
  rope2 = new Rope(bob2.body,roof1.body,-bobDiameter *1,0);
  rope3 = new Rope(bob3.body,roof1.body,0,0);
  rope4 = new Rope(bob4.body,roof1.body,bobDiameter *1,0);
  rope5 = new Rope(bob5.body,roof1.body,bobDiameter *2,0);
                                                     
}


function draw() {
  
  background("yellow");
  Engine.update(engine);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display(); 
  bob5.display();
  
  drawSprites();
 
}

// function keyPressed(){
// 	if(keyCode === UP_ARROW){

// 		Matter.Body.applyForce(bob1.body,bob1.body.position,{x : -100, y : 100});
// 	}
// }

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY}
  )
}