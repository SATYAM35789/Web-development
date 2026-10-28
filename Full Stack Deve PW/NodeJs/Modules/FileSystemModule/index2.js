// Reading a file

const fs = require('fs')

// Low level, internally : Read = open + read
//fd is object used to read the file
fs.open('input.txt' , 'r+' , function(err, fd){
    if(err){
        console.log('Errpr in Opening filr' , err);        
    }
    console.log('Fileopen successfully');
    
    //fd: kon si file read , buf: read karne ke baad store karne ke liye , offfset: kis position se buf mai rakhna hai
    // buf.lenght : rakh kar return karna hai , 0 : kon si position se read
    const buf = new Buffer(1024)
    fs.read(fd, buf, 0 ,buf.length, 0 , function(er,data){
       if(er){
        console.log('Error in reading' );
       
       }
       console.log('Data', data);  // bytes mai data milta hai
       console.log('Data', data.toString());
       
       // Converting it to string 
       // O se jitna data hai means utne btyes 38 tak
       console.log('Data', buf.slice(0,data).toString());
       
       // Closing File
       fs.close(fd, function(err){
        if (err){
            console.log('Error in closing a file.');
        }
        else {
          console.log(" Success in closing a file")
        }   
        })
    })
})

// Closing is important for memory leaking na ho.