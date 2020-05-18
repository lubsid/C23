// NameSpacing, shorter names

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Box1,Box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();// Starting our engine, laws of physics
    world = engine.world;// 
    Box1= new Box(300,100,10,10);
    Box2= new Box(200,100,50,50);
    
}

function draw(){
    background(0);
    Engine.update(engine);// moving bodies update x,y,coordinates
   Box1.display();
   Box2.display();
}