//Exception handling: Errors and exception that occur during the excecution of the program. Try and Catch statement are used to handle exceptions. used in pairs.
// Two main types of errors :- 1. Syntex Error : code syntex is not proper 2.Runtime Error : occur while code is executing.
// Only run-time errors can handled during using exception handling.                                                

try{
    let x = undefined
    console.log(x[0]);
      
} catch(err){
    console.log("Error handling in catch" ,err);

} finally{
    console.log("Finally always gets executed "); 
}