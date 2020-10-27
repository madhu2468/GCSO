var car;
var wall;
var speed;
var weight;




function setup() {
  createCanvas(1600,400);

car = createSprite(50,200,50,50);


wall = createSprite(1500,200,60,height/2);

speed = random(55,90);

weight = random(400,1500);

}

function draw() {
  background(255,255,255);  

  car.velocityX = speed;
  
  console.log(wall.x - car.x);

if (wall.x - car.x <(car.width + wall.width/2)){

car.velocityX = 0;
 var deformation = 0.5 * width*speed*speed/2;

if(deformation < 100 ){
car.shapeColor = "green";
}

if(deformation > 180 ){
  car.shapeColor = "red";
  }

  if(deformation < 100 && deformation > 180 ){
    car.shapeColor = "yellow";
    }


}



  drawSprites();
}



















