function toCamelCase(str){
  while(str.search(/[-_]/) !== -1 && str !== undefined){
    let a = str[str.search(/[-_]/)+1]
    str = str.replace(/[_-]/, "");
    str = str.replace(a,a.toUpperCase())
  }
  return str
}
