var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine, world;

var rect1, rect2, rect3, rect4, rect5;

var circ1, circ2, circ3, circ4, circ5;

var topRect1, topRect2, topRect3, topRect4, topRect5;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  rect1 = new Rectangle(60, 250, 60, 300);
  rect2 = new Rectangle(125, 300, 60, 300);
  rect3 = new Rectangle(200, 325, 80, 300);
  rect4 = new Rectangle(275, 300, 60, 300);
  rect5 = new Rectangle(340, 250, 60, 300);

  circ1 = new Circle(60, 75, 50);
  circ2 = new Circle(125, 125, 50);
  circ3 = new Circle(200, 150, 50);
  circ4 = new Circle(275, 125, 50);
  circ5 = new Circle(340, 75, 50);

  topRect1 = new Rectangle(60, 35, 30, 30);
  topRect2 = new Rectangle(125, 85, 30, 30);
  topRect3 = new Rectangle(200, 110, 30, 30);
  topRect4 = new Rectangle(275, 85, 30, 30);
  topRect5 = new Rectangle(340, 35, 30, 30);
}

function draw() {
  background(255);
  Engine.update(engine);
  
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();

  circ1.display();
  circ2.display();
  circ3.display();
  circ4.display();
  circ5.display();

  topRect1.display();
  topRect2.display();
  topRect3.display();
  topRect4.display();
  topRect5.display();
}