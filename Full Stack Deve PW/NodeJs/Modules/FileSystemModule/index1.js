// Understanding synchronous

const fs = require('fs')

console.log('Start Read');

//  Synchronous way to read a file. 
var data = fs.readFileSync('input.txt')

console.log('Data > ', data.toString());
console.log('Read End');
console.log('Other Stuff');


