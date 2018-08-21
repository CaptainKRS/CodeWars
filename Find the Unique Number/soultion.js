function findUniq(arr) {
  for(var i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i+1] && arr[i+1] === arr[i+2]){
    return arr[i]
    }else if(arr[i] !== arr[i+1] && arr[i+1] !== arr[i+2]){
      return arr[i+1];
    }
  }
}
