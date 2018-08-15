function solve(str,idx){
  let count = 0;
  for(var i = idx; i < str.length; i++){
    if(str[idx] !== '(') return -1;
    else if(str[i] === '(') count++;
    else if(str[i] === ')') count--
    if(count === 0) return i;
  }
}
