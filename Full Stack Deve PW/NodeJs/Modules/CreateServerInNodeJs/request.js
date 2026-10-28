// server to server
const { error } = require('console');
const http = require('http')

// options->kuch config :- server hit->Hostname, path: hostname kisi page par jane ke liye, read & write-> method
    const options = {
        hostname : 'fakestoreapi.com',
        path : '/products/1',   //mock api server
        method : 'GET'

    }

const apiReq = http.request(options , (apiRes) =>{
    apiRes.on("data", (data)=>{   // if data found than print data
        console.log(data.toString());        
    })
})
// Event Listener
apiReq.on("error",()=>{
    console.log(error);
    
}) 
apiReq.end();