//Create variables here
var dog =createSptite();
var happyDog=createSptite();
var database=createSptite();
var foodS=createSptite();
var foodStock=createSptite();

function preload()
{


}
if(keyWentDown(UP_ARROW)){
 wrtieStock(foodS);
 dog.addImage(dogHapppy);
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  

  drawSprites();
  //add styles here
}

function readStock(data){
foodS-data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  databar.ref("/").update({
    Food.x
  })
}