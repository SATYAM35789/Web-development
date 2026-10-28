import { compose } from "redux"

function removeSpaces(string){
    //  string split kar denge space ke basis par, to ek array mil jeyegi. and us array ko loin kar denge empty array ke basis par. 
    return string.split(" ").join("")
}
//  console.log( removeSpaces("Hello I am shyam"));

function repeatString(string){
    // return string + string
    return string.repeat(2)
}
// console.log( repeatString("Hello I am shyam"));

function convertToUpper(string){
    return string.toUpperCase("abcd")
}
// console.log( convertToUpper("Hello I am shyam"));
const input = " Hello i am satyam"
// const output = convertToUpper(repeatString(removeSpaces(input)))
// console.log(output);

const composeFunction = compose(removeSpaces, repeatString, convertToUpper)
console.log(composeFunction(input))

