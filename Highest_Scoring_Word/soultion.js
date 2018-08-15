function high(x){
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let score = 0;
  let bigWord = ""
  x = x.split(" ");
  for(var i = 0; i < x.length ; i++){
    makeScore(x[i])
  }
  function makeScore(word){
    let currentScore = 0;
    for(var j = 0; j< word.length; j++){
      currentScore += alpha.indexOf(word[j]);
    }
    if(currentScore > score){
      score = currentScore;
      bigWord = word;
    }
  }
  return bigWord
}
