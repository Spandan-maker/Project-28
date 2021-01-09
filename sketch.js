
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree, stone1, ground1, sling1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;
var launchingForce=100;

function preload(){
  boy=loadImage("boy.png");
  tree=loadImage("tree.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone1=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
  mango4=new mango(1000,230,30);
	mango5=new mango(900,230,40);
	mango6=new mango(1140,150,40);
	mango7=new mango(1100,230,40);
	mango8=new mango(1200,200,40);

	ground1=new ground(width/2,600,width,20);
	sling1=new sling(stone1.body,{x:235,y:420});
 	
	Engine.run(engine);

}

function draw() {

  background(230);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy,200,340,200,300);
  image(tree,800,0,500,700);
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
 
  stone1.display();

  ground1.display();
  sling1.display();
  Collision(stone1,mango1);
  Collision(stone1,mango2);
  Collision(stone1,mango3);
  Collision(stone1,mango4);
  Collision(stone1,mango5);
  Collision(stone1,mango6);
  Collision(stone1,mango7);
  Collision(stone1,mango8);
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling1.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  sling1.attach(stone1.body);
	}
  }

  function Collision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
