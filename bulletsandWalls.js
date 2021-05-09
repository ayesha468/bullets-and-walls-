var bullet,wall;
var speed, weight

function setup() {
  createCanvas(1600,400);
  Canvas.rgb(0)
  speed=random(55,90)
  weight=random(40,1500)
 
  bullet=createSprite(50,200,50,50)
  bullet. velocityx=speed;
 wall=createSprite(1500,200,60,200)
 wall.shapecolor("red")

}

function draw() {
  background(0); 
  if (wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityx=0
    var deformation=0.5*weight*speed*weight/22509;
    if (deformation>180)
    {
      bullet.shapecolor=color(255,0,0)
  
    }
    if (deformation<80 && deformmation>100);
    {
      bullet.shapecolor=color(230,230,0)
    }
    if(deformation<100) 
    {
      bullet.shapecolor=color(0,255,0)
    }
  
  }
  drawSprites();
}