function primeFactors(n) {
  let newObj = {};
  let newStr = '';
  //start at 2 and 'i' will never exceed the sqrt of n
  //this helps speed up the math your computer needs to do.
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      //once we hit a number start the counter at 0
      var count = 0;
      //then loop until you cannot divide by i w/o a remainder
      while (n % i === 0) {
        n = n / i;
        count++;
        //add the index to the object with the value of the counter to show how many times i is a prime factor
        newObj[i] = count;
      }
    }
  }
  //if n is not = to 1 after the loop it means its another prime number we need to add to the object
  if (n !== 1) {
    newObj[n] = 1;
  }
  //loop through the object to get the correct string printed
  for (var key in newObj) {
    if (newObj[key] > 1) newStr += '(' + key + '**' + newObj[key] + ')';
    else if (newObj[key] == 1) newStr += '(' + key + ')';
  }
  return newStr;
}
