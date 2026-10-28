//Writing in a existing file
// Two ways as Read : Syn  Asyn
const fs = require('fs')
fs.writeFile('input.txt', 'Hello Amit I satyam', function(err){
    if(err){
        console.log('Error in writing a file');
        
    }
    console.log('Success in writing a file');
    
})