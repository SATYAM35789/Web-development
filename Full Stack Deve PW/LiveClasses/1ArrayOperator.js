let twoArray = [5,6,7,8]
console.log(typeof twoArray)

const oneArray = [1,2,3,4]

// combining array 
const threeArray = oneArray.concat(twoArray)
console.log(threeArray);

const threeArray2 = [oneArray,twoArray]   // kaam ho gaya lakin access karna easy nahi hai, so we have two method
console.log(threeArray);

//rest operator and spreas operator , which one is based on the used case
const threeArray3 = [...oneArray, ...twoArray]  // spread :=   // ...oneArray = 1,2,3,4     Note . JS mai kisi chej ko karne 4-5 tarike hote hai





