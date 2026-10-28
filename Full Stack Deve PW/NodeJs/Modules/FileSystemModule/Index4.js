// Appending in the file : Sync and Async
const fs = require('fs')
//utfu(encoding) : format using
fs.appendFile('input.txt', ' --AMIT! Yes I know you.', 'utf8',function(err){
    if(err){
        console.log('Error in appending a file');        
    }
    console.log('Success in appending a file. ');
    
})