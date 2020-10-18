var fixedrect,fixedrect1,fixedrect2,fixedrect3,fixedrect4;
var movingrect;
function setup() {
  createCanvas(800,400);
 fixedrect=createSprite(200,200,100,20);
 fixedrect.shapeColor="pink";

 fixedrect1=createSprite(500,100,20,100);
 fixedrect1.shapeColor="pink";

 fixedrect2=createSprite(400,200,20,200);
 fixedrect2.shapeColor="pink";

 fixedrect3=createSprite(100,100,20,150);
 fixedrect3.shapeColor="pink";

 fixedrect4=createSprite(300,400,20,100);
 fixedrect4.shapeColor="pink";

 movingrect=createSprite(500,400,151,20);
 movingrect.shapeColor="pink";
 
}

function draw() {
  background("black");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(isTouching(movingrect,fixedrect)){
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";
  }
  else{
    movingrect.shapeColor="pink";
    fixedrect.shapeColor="pink";
  }

  if(isTouching(movingrect,fixedrect1)){
    movingrect.shapeColor="green";
    fixedrect1.shapeColor="green";
    }
    else{
      movingrect.shapeColor="pink";
      fixedrect1.shapeColor="pink";
    }

    if(isTouching(movingrect,fixedrect2)){
      movingrect.shapeColor="white";
      fixedrect2.shapeColor="white";
      }
      else{
        movingrect.shapeColor="pink";
        fixedrect2.shapeColor="pink";
      }

      if(isTouching(movingrect,fixedrect3)){
        movingrect.shapeColor="yellow";
        fixedrect3.shapeColor="yellow";
        }
        else{
          movingrect.shapeColor="pink";
          fixedrect3.shapeColor="pink";
        }

        if(isTouching(movingrect,fixedrect4)){
          movingrect.shapeColor="red";
          fixedrect4.shapeColor="red";
          }
          else{
            movingrect.shapeColor="pink";
            fixedrect4.shapeColor="pink";
          }

  drawSprites();
}
function isTouching(object1,object2){
if(object1.x-object2.x<object2.width/2+object1.width/2 && object2.x-object1.x<object2.width/2+object1.width/2&&object1.y-object2.y<object2.width/2+object1.width/2 &&object2.y-object1.y<object2.width/2+object1.width/2){
return true;
}
else{
  return false;
}
}