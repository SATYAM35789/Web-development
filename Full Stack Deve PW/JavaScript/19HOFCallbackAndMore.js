 // Higher order function : using function as a Variable  Part1
 const powerTwo = (n)=> {
    return n ** 2
 }

 function powerCube (powerTwo , n){    // Passing fn as an argument
    return powerTwo(n) * n
 }

console.log(powerCube(powerTwo,3));


// Using fun as a return , which is 2nd part of the definition    Part2
function sayHello(){
   return () => {
      console.log("Hello Hitesh student Satyam Mishra");
      
   }
}
// mere Language function ko ek variable mai store karna 
let guessValue = sayHello()
console.log(guessValue);

// so fir mere Lang mai, jis bhi varible mai hum fun store karte hai wo wo variable bhi ek function ban jata hai
guessValue()