var bullet,wall,speed,thikness;



function setup() {
  createCanvas(1600,800);
  bullet = createSprite(100,400,25,10)
  thikness = random(22,83)
  wall = createSprite(1200,400,thikness,400)
  speed = random(223,321)
  weight = random(30,52)
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  if( hasCollided(bullet,wall)){
   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed/(thikness * thikness * thikness);
   console.log(damage);
   if(damage>10){
     wall.shapeColor = color(255,0,0)
   }
   else if(damage<10){
     wall.shapeColor = color(0,255,0)
   }
  }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
  }