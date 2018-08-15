function findOdd(A) {
  let newObj = {}
    A.forEach(item => {
    if(newObj[item]) newObj[item]++
    else newObj[item] = 1;
    });
    for(var key in newObj) {
      if(newObj[key] % 2 === 1) return +key
    }
  return 0;
  }
