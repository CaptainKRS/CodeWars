function recycleMe(recycle){
  let plastics = 0;
  let glass = 0;
  let card = 0
    for(var i = 0; i  < recycle.length; i++){
      if(recycle[i] > 0){
        plastics++
      }else if(recycle[i] < 0){
        glass++
      }else{
        card++
        }
    }
    return [plastics,glass,card]
  }
