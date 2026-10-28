// Function Declaration
function sumOfAllParameters(){
    let sum=0;
    for(var i=0; i < arguments.length; i++){
         sum+= arguments[i]
    }
    return sum;
}

// Function call
let result = sumOfAllParameters(4,75,5,52,8,48,9)
console.log(result);
