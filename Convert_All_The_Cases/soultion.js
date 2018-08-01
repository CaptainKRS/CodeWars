function changeCase(identifier, targetCase){
  let newArr;
  let newVal;
  let regex = /[A-Z]/g;
  if(identifier.indexOf('_') !== -1 && identifier.indexOf('-') !== -1) return undefined
  if(identifier.match(regex) && identifier.indexOf('_') !== -1) return undefined
  if(identifier.match(regex) && identifier.indexOf('-') !== -1) return undefined
  if(targetCase === 'snake'){
    newArr = identifier.split('').map( (item,idx) => {
    if(item.match(regex)){
      return identifier[idx] = '_' + item.toLowerCase();
      }else if(item === "-") return identifier[idx] = '_';
      else return item
    });
    return newArr.join('');
  } else if (targetCase === 'camel'){
    if(identifier.indexOf('_') !== -1 && identifier.indexOf('-') !== -1) return undefined
    newArr = identifier.split('').map( (item, idx) => {
      if(item === '-' || item === '_'){
      item = ' ';
      newVal = idx+1;
      }
      else if(idx === newVal){
        item = item.toUpperCase();
        return item;
      }else return item;
      });
    return newArr.join('');
    }else if (targetCase === 'kebab'){
        newArr = identifier.split('').map( (item, idx) => {
          if(item === '_') return item = '-';
          else if(item.match(regex)) return identifier[idx] = '-' + item.toLowerCase();
          else return item
      });
    return newArr.join('');
    }
}
