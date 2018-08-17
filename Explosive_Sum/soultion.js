function sum(num) {

  return partition(num,num);
}

let aArray = [];

function partition(num, previous){
  // from the Partition number theroy wiki: By convention p(0) = 1, p(n) = 0 for n negative.
  if(num === 0) return 1;
  if(previous === 0) return 0;
  if(num < 0) return 0;

  if(aArray[num] === undefined) aArray[num] = [];

  let result = aArray[num][previous]
  if(typeof result != 'number'){
    result = partition(num - previous, previous) + partition(num, previous-1)
    aArray[num][previous] = result;
  }
  return result;



}
