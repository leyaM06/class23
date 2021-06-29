const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2 ;
var ground;
var rectangle;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(300,300,50,50);
    ground=new Ground(200,390,400,20);
    rectangle=new Box (250,300,200,50);

}

function draw(){
    background("purple");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    rectangle.display();
    
}