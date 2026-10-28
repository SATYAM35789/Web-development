// Problem : jitne bhi argument fun mai pass ho , unko array mai dalo print kardo
// Obhect se array? Array.from()

function manyArguments(){
   let args =  Array.from(arguments)   
   FinalArr = args.map(e => e)    // agar array ke element ka doble chahiye toh e => e*2
   console.log(FinalArr)
}

manyArguments(1,2,3)
manyArguments(1,2,3,4,5,6,7)

