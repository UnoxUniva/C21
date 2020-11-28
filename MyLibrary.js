function isTouching(MovObject, MyRect)
{
  if((MovObject.x - MyRect.x) <= (MovObject.width + MyRect.width)/2 
  && (MyRect.x - MovObject.x) <= (MovObject.width + MyRect.width)/2
  && (MyRect.y - MovObject.y) <= (MovObject.height/2 + MyRect.height/2)
  && (MovObject.y - MyRect.y) <= (MovObject.height/2 + MyRect.height/2))
  {
    return true;
  }
  else{
    return false;
  }

  
}

function bounceOff(MovObject , RECT){
   if((RECT.x - MovObject.x) <= (MovObject.width + RECT.width)/2 
    && (MovObject.x - RECT.x) <= (MovObject.width + RECT.width)/2)
 {
  // MovObject.velocityX=-1*MovObject.velocityX
  RECT.velocityX = -1*RECT.velocityX

 }
}