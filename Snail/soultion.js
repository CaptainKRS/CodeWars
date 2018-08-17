function snail(arr){
  let newArray = [];

    while(arr.length > 1){

      for(let i = 0; i< arr.length; i++){
        newArray.push(arr[0][i]);
      }

      arr = arr.slice(1,arr.length);

      for(let j = 0; j< arr.length; j++){
        newArray.push(arr[j].pop());
        }

      for(let k = arr.length-1; k >= 0; k--){
        newArray.push(arr[arr.length-1][k]);
      }
        arr = arr.slice(0, arr.length-1);

      for(let l = arr.length-1; l>= 0; l--){
        newArray.push(arr[l].shift());
      }

      }
      console.log(typeof arr[0])
      if(typeof arr[0] !== 'undefined'){

        return newArray.concat(arr[0])
        }else{
          return newArray
        }
  }
