function comp(array1, array2){
  console.log(array1, array2);
  if(array1 !== null && array2 !== null){
    array1 = array1.sort(function(a,b){return a-b});
    array2 = array2.sort(function(a,b){return a-b});
    for(var i = 0; i < array1.length; i++){
      if((array1[i]*array1[i]) !== array2[i]){
      return false;
      }
    }
    }else{
    return false;
    }
    return true;
  }
