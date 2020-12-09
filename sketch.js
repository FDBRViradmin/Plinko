const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, plinkos

var middleDivider, div1, div2, div4, div5, firstDiv, lastDiv

var middlePlinko1, middlePlinko21, middlePlinko22, middlePlinko3, middlePlinko41, middlePlinko42

var plinko11, plinko12, plinko13, plinko14, plinko16, plinko17, plinko18, plinko19

var plinko21, plinko22, plinko23, plinko24, plinko26, plinko27, plinko28, plinko29

var plinko31, plinko32, plinko33, plinko34, plinko36, plinko37, plinko38, plinko39

var plinko41, plinko42, plinko43, plinko44, plinko46, plinko47, plinko48, plinko49

var particles = [];

function setup() {
  createCanvas(600,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(300, 700, 600, 30);
  middleDivider = new Divider(300, 550, 5, 300);
  div1 = new Divider(100, 550, 5, 300);
  div2 = new Divider(200, 550, 5, 300);
  div4 = new Divider(400, 550, 5, 300);
  div5 = new Divider(500, 550, 5, 300);
  firstDiv = new Divider(0, 550, 5, 300);
  lastDiv = new Divider(600, 550, 5, 300);
  middlePlinko1 = new Plinko(300, 50, 15);
  middlePlinko21 = new Plinko(260, 125, 15);  
  middlePlinko22 = new Plinko(340, 125, 15);
  middlePlinko3 = new Plinko(300, 200, 15);
  middlePlinko41 = new Plinko(260, 275, 15);  
  middlePlinko42 = new Plinko(340, 275, 15);
  plinko11 = new Plinko(60, 50, 15);
  plinko12 = new Plinko(120, 50, 15);  
  plinko13 = new Plinko(180, 50, 15);
  plinko14 = new Plinko(240, 50, 15);
  plinko16 = new Plinko(360, 50, 15);
  plinko17 = new Plinko(420, 50, 15);  
  plinko18 = new Plinko(480, 50, 15);
  plinko19 = new Plinko(540, 50, 15);
  plinko21 = new Plinko(20, 125, 15);
  plinko22 = new Plinko(80, 125, 15);  
  plinko23 = new Plinko(140, 125, 15);
  plinko24 = new Plinko(200, 125, 15);
  plinko26 = new Plinko(400, 125, 15);
  plinko27 = new Plinko(460, 125, 15);  
  plinko28 = new Plinko(520, 125, 15);
  plinko29 = new Plinko(580, 125, 15);
  plinko31 = new Plinko(60, 200, 15);
  plinko32 = new Plinko(120, 200, 15);  
  plinko33 = new Plinko(180, 200, 15);
  plinko34 = new Plinko(240, 200, 15);
  plinko36 = new Plinko(360, 200, 15);
  plinko37 = new Plinko(420, 200, 15);  
  plinko38 = new Plinko(480, 200, 15);
  plinko39 = new Plinko(540, 200, 15);
  plinko41 = new Plinko(20, 275, 15);
  plinko42 = new Plinko(80, 275, 15);  
  plinko43 = new Plinko(140, 275, 15);
  plinko44 = new Plinko(200, 275, 15);
  plinko46 = new Plinko(400, 275, 15);
  plinko47 = new Plinko(460, 275, 15);  
  plinko48 = new Plinko(520, 275, 15);
  plinko49 = new Plinko(580, 275, 15);
}

function draw() {
  background(0);
  Engine.update(engine);  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }
  drawSprites();
  ground.display();
  middleDivider.display();
  div1.display();
  div2.display();
  div4.display();
  div5.display();
  firstDiv.display();
  lastDiv.display();
  middlePlinko1.display();
  middlePlinko21.display();
  middlePlinko22.display();
  middlePlinko3.display();
  middlePlinko41.display();
  middlePlinko42.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko44.display();
  plinko46.display();
  plinko47.display();
  plinko48.display();
  plinko49.display();

  for(var i = 0; i<particles.length; i++){
    particles[i].display();
  }


}