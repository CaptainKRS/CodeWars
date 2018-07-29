const solution = (roman) => {
  let result = 0;
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNum = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (let i = 0;i<=decimal.length;i++) {
    while (roman.indexOf(romanNum[i]) === 0){
      result += decimal[i];
      roman = roman.replace(romanNum[i],'');
    }
  }
  return result;
}
