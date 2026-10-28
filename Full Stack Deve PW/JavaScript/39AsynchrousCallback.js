// Asynchronous callback : Is example mai hum samjh sakte hai ki start enf print hone ke baad timerdone print hua 
// Js apneaapko roka nahi . 
// setTimeOut() :- because of run time environment (search engine or brawser )iske hone se js mai extra feature aa jati hai 
console.log("Start");

setTimeout(function f(){
    console.log("timer done");  
},3000)     // 3000 milsec = 3sec

console.log("End"); 
