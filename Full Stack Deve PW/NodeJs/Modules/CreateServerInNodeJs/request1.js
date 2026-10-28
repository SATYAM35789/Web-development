
const https = require('https')


    const options = {
        hostname : 'fakestoreapi.com',
        path : '/products/1',  
        method : 'GET'

    }

const apiReq = https.request(options , (apiRes) =>{
    apiRes.on("data", (data)=>{  
        console.log(data.toString());        
    })
})
// Event Listener
apiReq.on("error",(error)=>{
    console.log(error);
    
}) 
apiReq.end();