function scramble(str1, str2) {
  // First make both strings an array and sort each one
  str1 = str1.split('').sort('');
  str2 = str2.split('').sort('');
  //create a counter variable
  let x = 0;
  for (let i = 0; i < str1.length; i++){
     if(str2[x] === str1[i]){
       x++
     }
   }
  return x === str2.length;
}
