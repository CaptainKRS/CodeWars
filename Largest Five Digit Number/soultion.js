function solution(digits) {
  let largest = 0;
  digits = digits.toString().split('');
  for (var i = 0; i < digits.length; i++) {
    if (digits.slice(i, i + 5).join('') > largest) {
      largest = digits.slice(i, i + 5).join('');
    }
  }
  return +largest;
}
