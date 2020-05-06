const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var barell1, pirates1,pirates3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg2.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  
    barell1 = new Barell(700,320,70,70);
    barell2 = new Barell(920,320,70,70);
    pirates1 = new Pirates(810, 350);
    log1 = new Log(810,260,300, PI/2);

    barell3 = new Barell(700,240,70,70);
    barell4 = new Barell(920,240,70,70);
    pirates3 = new Pirates(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    barell5 = new Barell(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

 
   var stick_options ={
        isStatic: true
    }
    var ball_options ={
        'restitution':1.0,
        'friction':0.0,
        'density':10.0 
    }
    
    stick = Bodies.rectangle(550,30,300,30,stick_options);
    World.add(world,stick);
    
    ball = Bodies.circle(380,200,20,ball_options);
    World.add(world,ball);
    
    attach = new C(stick,ball);
    
}

function draw(){
   
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    barell1.display();
    barell2.display();
    ground.display();
    pirates1.display();
    pirates1.score();
    log1.display();

    barell3.display();
    barell4.display();
    pirates3.display();
    pirates3.score();
    log3.display();

    barell5.display();
    log4.display();
    log5.display();
    
    attach.display();

 fill(0,250,250);
 rectMode(CENTER);
 rect(stick.position.x,stick.position.y,200,30);

 fill(200,50,150);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,40,40);
}

function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}
