// Understanding Asynchronous

// Aquiring fs module 
const fs = require('fs')

console.log("Read Start");

// Asynchronous way to read file 
fs.readFile('input.txt' ,function(err,data){
    if(err) {
        console.log(" Error" , err);
        return err;
    }
    console.log('data', data);
    console.log('Same in string >', data.toString());
    console.log('Read End');
    
    return data
})
console.log('Other stuff');
