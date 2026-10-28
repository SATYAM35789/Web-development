const http = require('http')

const PORT = 3022
const HOSTNAME = 'localhost'



const server = http.createServer((req, res)=> {
    // by default, is server par request aati hai, koi bhi endpoint or url heat karo
    res.statusCode = 200;
    res.setHeader('Content-type','application/json')
    res.end(JSON.stringify({error : "server Error !"}))
})

 //port par chalana: kahi se access karna hoga, server up/chalega toh ye chalega
 server.listen(PORT,()=>{
      console.log(`Server running at ${HOSTNAME}:${PORT} `);
      
 })





 // statusCode : Checking jo response bhej raha hu wo sahi hai ya nahi , 200 = 2xx succesfully done , 500= 5xx found error
 // setHeader : 
 //Respose -> Content type->  rendering ke waqt ex html 
 // Jab bhi hum server se data return karte client aur server ke bich jo data pass hota hai,  sizlized  data
 // means binary or string form mai jayega. Reponse mai application/json aur brawser samjh jaye