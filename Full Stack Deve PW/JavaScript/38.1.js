function h(x, fn){
    // h = is a hof
    // fn = is a callback
    console.log(x*x)
    fn()
}

h(10 , function(){
    console.log("Done with callback");  
})