const Engine = Matter.Engine; 
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground;

function setup() {

  createCanvas(800,400);

  engine = Engine.create();
  world = engine.World;
  
  ground = Bodies.rectangle(400,390,800,20,{isStatic : true}); 
  World.add(world,ground);

  ball = Bodies.circle(400,390,20,{restitution : 1.0}); 
  World.add(world,ball);

}

function draw() {
  background(0);  

  Engine.update(engine);

circle(300,100,70);

  drawSprites();
}