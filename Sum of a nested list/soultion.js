let sumNested = arr => {
  let sum = 0;
  for(var i =0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      arr = [].concat.apply([],arr);
      return sumNested(arr)
    }else{
      sum += +arr[i];
    }
  }
  return sum
}
