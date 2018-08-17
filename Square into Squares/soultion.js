function helper(sqrt, lastRemovedNum){
  let root = Math.sqrt(sqrt);
  let floor = Math.floor(root);

  if(floor === root){
  return [root]
  }

  for(var i = floor; i >= 1; i--){
    var subSoul = helper(sqrt - i* i, i);
    if(subSoul !== null && subSoul.lenght != 0 && typeof subSoul !== 'undefined'){
      if(subSoul[subSoul.length-1] < i){
        subSoul.push(i);
        return subSoul;
    }
  }
  }
  return null;

  }

  function decompose(n) {
      let nSquare = n * n;
      for(var i = n - 1; i >= 1; i--){
        var soultion = helper(nSquare - i*i, i)
        if(soultion !== null && typeof soultion !== undefined){
        soultion.push(n-1);
        return soultion
        }
      }
      return null
  }
