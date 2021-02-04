var db;
var dog, dogImg, happyDog;
var foodS = 20;
var lastFed = 0;
var foodObj = null;
var feedButton, addButton,nameButton;
var game,player,form
var gameState=0;

function preload()
{
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happy dog.png");
}


function setup() {

  createCanvas(900, 500);
 
  db=firebase.database()
  
  game=new Game()
game.getstate()
game.start()



  feedButton = createButton("Feed your dog");
  feedButton.position(400, 95);
  feedButton.mousePressed(feedDog)
  


  addButton = createButton("Add Food");
  addButton.position(400, 120);
  addButton.mousePressed(addFood);

  

  foodObj = new Food();

  dog = createSprite(650, 280);
  dog.scale = 0.3;
  dog.addImage(dogImg);
 
}

function draw() {  

  background("lightBlue");
  fill("white")
  textSize(30)
text("FEED YOUR DOG ",620,30)

  fill("white");
  textSize(20);
  if(lastFed>=12){
    text("Last Fed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Fed : 12 AM",350,30);
   }else{
     text("Last Fed : "+ lastFed + " AM", 350,30);
   }

   
  drawSprites();

  foodObj.display();

}

function addFood(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}

function feedDog(){
  if(foodS > 0){
    dog.addImage(happyDog);
    foodS--;
    foodObj.updateFoodStock(foodS);
    lastFed = hour();
  
    foodObj.updateLastFed(lastFed);
  }

}

function mousePressed(){
  if(mousePressed(feedButton))
  {time = new Date();
    time_text = time.toLocaleDateString()+"\t"+time.toLocaleTimeString()}
  }



