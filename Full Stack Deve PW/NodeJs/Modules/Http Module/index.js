// Creating 1st Server

const http = require('http')

// http callback leta hai , server par koi bhi path ho sakta hai 
// hum alag alag path like http.about par click kare toh kya dena hai wo bhi likh sakte hai

const server = http.createServer ((req , res) => {
   if(req.url == '/')           // kon se url par request aayi hai
    {
        res.write(' <h1> Hello Node.js!</h1> ');
    }
    else if(req.url == '/about'){
        res.write( '<h1> About Page !</h1>')
    }
    res.end();
})


// kis port par chalana chate port/ domain/ sub-domain
server.listen(5002);
console.log('The http server is running on port 5002');
 
// As it is server par load hotahai (jo html code pass hua hai)