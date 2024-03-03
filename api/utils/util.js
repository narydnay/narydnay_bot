
export function regExpName(name) {
  let newName = name.replace(/[аяоуюеєиії]/g, '.').replace('?','');
  console.log({newName})
  return newName;
}


export function matchNamesSpecifics (name, listNames) {
let resQueryName = listNames.filter( el => {
  let newName = name.toLowerCase().trim();
  if(newName.length>2){
    newName = regExpName(newName)
  }
    if(new RegExp(newName).test(el.toLowerCase().trim())){
      return el;
    }  
  });
  return resQueryName;
}
export function matchNames (name, listNames) {
let resQueryName = listNames.filter( el => {
  let newName = name.toLowerCase().trim();
  // console.log('if ' + el ,el.includes(name), ' includ ' + name)
    if(new RegExp(newName).test(el.toLowerCase().trim())){
      return el;
    }  
  });
  return resQueryName;
}