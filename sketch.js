const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball,ground;

function setup() {
    createCanvas(400,400)
    engine=Engine.create()
    world=engine.world;
    var options={
        restitution:1
    }
   ball=Bodies.circle(200,200,50,options)
    World.add(world,ball)
   console.log(ball)
    var ground_options={
        isStatic: true
    }
   ground=Bodies.rectangle(200,400,400,10,ground_options)
   World.add(world,ground)
  
}

function draw() 
{
  background(0)
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,10)
}

