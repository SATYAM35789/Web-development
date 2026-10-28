// by default js ek synchronous lang he hai, single thread. (flow of execution)
// native js ke pass jo bhi wo synchronous he hai but what happend in cae of setTimeOut()
// hof fun wo func hai jo kisi dusre func ko as a argument expect karte hai
// Synchronous callback : code line by line chal raha hai
function h(x, fn){
    // h = is a hof
    // fn = is a callback
    console.log(x*x)
    fn(8)
}

function exec(n){
    console.log("squard value is", n);
    
}

h(12, exec)