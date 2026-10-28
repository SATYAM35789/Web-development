function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("timer done");
            // resolve(10)
            reject(10)
        }, 3000);
    });
}

// Return in this person is always promise Object
async function consume(){
   try{
     console.log(" Inside Function");
    const response = await createPromise();       // awiat: asynchronous fn ke bahar fekh deta hai         
    console.log(" reponse is" , response);
   } catch(err){
    console.log("Handled" , err);
    
   }
    
}

console.log(" Start");
 consume()
console.log("End");

