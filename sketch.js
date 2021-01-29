//C28 Mango Plucking

var engine, world;
var tree, ground, boy;
var bgImage, treeImage, boyImage;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;

var thread;

function preload(){
  bgImage = loadImage("sprites/bg.png");
  treeImage = loadImage("sprites/tree.png");
  boyImage = loadImage("sprites/boy.png");
}


function setup() {
  createCanvas(800,400);

  engine = Matter.Engine.create();
  world = engine.world;

  ground = Matter.Bodies.rectangle(400,397,800,5, {isStatic:"true"});
  Matter.World.add(world, ground);

  tree = Matter.Bodies.rectangle(650, 230, 260, 380, {isStatic:"true"});
  Matter.World.add(world, tree);

  stone = new Stone(80,302);

  mango1 = new Mango(600,100);
  mango2 = new Mango(620,109);
  mango3 = new Mango(645,90);
  mango4 = new Mango(650,110);
  mango5 = new Mango(580,145);
  mango6 = new Mango(720,140);
  mango7 = new Mango(560,165);
  mango8 = new Mango(746,190);

  thread = new SlingShot(stone.body, {x:80, y:302});
  //console.log(thread)
  
}

function draw() {
  background(bgImage); 

  imageMode(CENTER)
  //image(bgImage, 400, 200, 800, 400)
  
  Matter.Engine.update(engine);

  rectMode(CENTER)
  fill("green")
  rect(ground.position.x,ground.position.y, 800,5);
  image(treeImage, tree.position.x, tree.position.y, 260,380 );
  image(boyImage, 100, 345, 70, 200 );

  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  thread.display();

//line(thread.bodyA.position.x, thread.bodyA.position.y, thread.pointB.x, thread.pointB.y);
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
thread.fly();
}

function keyPressed(){

  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:80, y:302})
    thread.attach(stone.body);
    //console.log(thread.bodyA)
  }
}