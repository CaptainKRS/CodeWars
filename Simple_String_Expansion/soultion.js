function solve(str){
  let newArr = [];
  let newStr = "";
    str = str.split('').filter( item => {
      if(item === "(" || item === ')') return '';
      else return item;
    }).join('');
    for(var i = str.length-1; i >= 0; i--){
      if(!Number(str[i])) newArr.unshift(str[i]);
      else{
        newStr = newArr.join('') + newStr
        newArr = [];
        newStr = newStr.repeat(+str[i]);
        console.log(str[i], newStr)
        }
      }
      newStr = newArr.join('') + newStr
      return newStr
  }
