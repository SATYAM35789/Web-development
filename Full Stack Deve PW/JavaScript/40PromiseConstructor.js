-// Promise Constructor : readablity enhancer . Special Object. 
function createPromise(){
    return new Promise( function exec(resolve , reject){
        // Asynchronous Peace of code (you can use synchronous also) 
        setTimeout( function f(){
              console.log(" Timer Done");   
              resolve(" Done")        
        } , 3000);
    })
}

console.log("Start");
let x = createPromise()
console.log(" got a new promise ");
// Registration :- jab bhi promise constructor complete goga tab kya karna hai  , Multiple then  can be there
x.then(function f(value){
    console.log(" Promise done " , value);   // Valau : resolve(" argu") argu iski value mai aa jata hai    
}).catch(function g(value){
    console.log("Handled",value);
    
}).finally( function fn(){
    console.log("finally");
    
})
console.log("End ");

// Blocking peace of code
for(let i=0; i<10000000; i++){
    // some code
}


//  resolve(" Any para"): this fun is binded with promise object x. promise constructor complete ho jane ke baad , x lo pata chal jeyega 
// tab x.then() ka execution start ho jayega

//  Promise ki teen state hoti hai :- jab tak resolve ya reject call nahi hota tab tak pending state hoti hai. resolve()call hone ke badd
// state pending to fellfilled ho jati hain. state are irrevseable . If errpr kam then rejected state mai chala jayega. 


// PromiseConstructor-> microtaskQueue
/**
 * Flow of program:
 * createPromise()-> object(new Promise)-> exec()->runTimeEniviro-> timmerstart-> 3sec -> exceutionof f() -> done than PromiseconstructorComplete
 * -> newobject promiseStatePending and haveValuePairUndefined-> promiseObjectAssigned to the x(placeholder: abhi timer task complete nahi hua hai)
 * -> gotNewPromisePrintHoga->RegistrationOfFunDone->BlockingPeaceOfCode 10sec -> 3sec TaskIsDone and it waitInMacroTaskQueue-> Eventlop(check) goto microTaskQueue1st then Macrotask
 * -> microTaskExecution->f()Execute->Timerdone->resolved()->statechangePendingToFullfilled->eventlop checks f()done globalPeaceDone then thenf()microstackQueue done . Complete. 
 */

