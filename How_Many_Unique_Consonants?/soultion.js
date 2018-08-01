function countConsonants(str) {
  str = str.toLowerCase();
  let newArr = [];
  for(var i = 0; i < str.length; i++){
    if(!str[i].match(/[aeiou\d\s\W]/gi) && newArr.indexOf(str[i]) === -1){
      newArr.push(str[i]);
    }
  }
  return newArr.length
}
