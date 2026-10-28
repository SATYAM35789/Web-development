// Set 
let myArray = [1,2,3,4,3,2] 
let newSet = new Set([...myArray])
console.log(newSet);

newSet.add(8)
newSet.clear()
console.log(newSet);
console.log(newSet.has(8));

// Set Difference 
function setDifference(setA,SetB){
  return new Set([...setA].filter(el => !SetB.has(el)))
}




