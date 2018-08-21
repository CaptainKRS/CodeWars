function pigIt(str) {
  let value = '';
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    value = str[i].slice(1);
    str[i] = value + str[i][0] + 'ay';
  }
  return str.join(' ');
}
