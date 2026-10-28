console.log("Start");
//  Non-native
setTimeout(function f(){
    console.log("timer done  1");  
},100)   
setTimeout(function f(){
    console.log("timer done 2");  
},0) 
console.log("End");
//  Native  
for(let i = 0; i<100000000; i++){

}
// Agar aise he char-pach(non-native and native) lage denge toh pata he nahi chalega kon pahle aaya kon baad mai
// Event lop and callback queue or macro task queue 
// :- setTimeOut(non native fun)->runTimeEnvironment(timer on and analysis)->next task will execute-> now the timer analysis is done on 
// runTimeEnvironment(it come back to js execution)-> now js will asked for wait in callback queue now kab tak wait karega?

//  ab event lop working mai aata hai, aur lagatar check karta rahta hai, isCallStackEmpty or isGlobalPeaceOfCodeEmpty 
// dono condition ke complete hone ke baad callStackqueue ko execute karega.

// Disadvantage of using callback 1 inversion of controll: execution power kisi aur fun ko de dena   2. callback hell: readable difficult ho jata hai