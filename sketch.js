const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var monster,monsterImage,monaterImage2;
var supperhero,superheroImage,superheroImage2;
var backgroundImage

function preload() {
//preload the images here
monsterImage2=loadImage("Monster-02.png")
superheroImage2=loadImage("Superhero-02.png")
backgroundImage=loadImage("GamingBackground.png")
}

function setup() {
  // create sprites here
  var canvas = createCanvas(1400,650);
  engine = Engine.create();
  world = engine.world;

ground=new Ground(500,600,1200,20)
hero=new Hero(800,400,50)
fly=new Fly(hero.body,{x:800,y:400})
monster=new Monster(400,400,50)

}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

ground.display();
hero.display();
fly.display();
monster.display();
}

function mouseDragged(){
  Matter.body.setPosition(hero.body,{x:mouseX,y:mouseY})
}