// One  Parameter, and single return type 
const square = (x) => x * x;

// Multiple parameter , and a single return expression 
const sumOfTwoNumbers = (x, y) => x + y;

// Multiple statements in function expressions 
const sum = (x, y) => {
    console.log('Adding ${x} and ${y}');
    return x + y;
}

// Returning an object 
const sumAndDifference = (x,y)=> ({ sum : x+y, Difference : x-y})

// Calling a function 
let output1 = square(6)
let output2 = sumOfTwoNumbers(5,9)
let output3 = sum(4,5)
let output4 = sumAndDifference(9,4)

console.log(output1,output2,output3,output4);
