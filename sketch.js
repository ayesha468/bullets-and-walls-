var bullet,wall;
var speed, weight

function setup() {
  createCanvas(1600,400);
 
  speed=random(55,90)
  weight=random(40,1500)
 
  bullet=createSprite(50,200,50,50)
  bullet.velocityX = speed;
 wall=createSprite(1500,200,60,200)


}

function draw() {
   background(0);
    if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
      bullet.velocityX=0;
        var deformation=0.5 * weight * speed* speed/22500; 
        if(deformation>180) { 
          bullet.shapeColor=color(255,0,0);
         } 
          if(deformation<180 && deformation>100) {
            bullet.shapeColor=color(230,230,0); 
            } 
            if(deformation<100) { 
              bullet.shapeColor=color(0,255,0);
             } 
            }
             drawSprites();
           }
