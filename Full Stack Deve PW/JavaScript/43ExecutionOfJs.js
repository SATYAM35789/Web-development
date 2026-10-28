// Jab Bhi program kisi bhi system par execute hona start hota hai Toh sabse pahele Global Execution Context banta hai
// Execution Context: Two Part:- 1. Code Part :- (Integer)Key:Value pairBantaHai , fun() asItIs  2. Memory :- oneByOneEcecute
// If lineByLine the js is single threaded (for now synchronous too) Programing lunguage.

// # GEC , CallStack and Scope
/**
 * 1. Code part -> variable(Undefined) fun(block) asItIs iss block mai jata hai
 * 2. Memory part -> lineByLine Execution ke waqat jab variable ko value assin hogi tab code part mai bhi(undefindToValue)
 *    -> Fun(call)-> Again anotherEcecutionContext will created andSameProcessAsAvove will proceed.
 * 
 * Callstack:- IskeAnderGlobalExecutionContext Rahta hai 
 */