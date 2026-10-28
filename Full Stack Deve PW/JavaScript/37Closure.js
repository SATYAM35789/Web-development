// Closure : data access of inner function from outer fun is called closure. And it have power of remembering . 
function superFunc(){
    let outervalue = "I am outer"
    function minorFunc(){
        console.log(outervalue);
        
    }
    minorFunc()
}
// superFunc()

const errorMessage = "File not found "
setTimeout(function callback(){
    console.log(errorMessage);
    
},1000)

// Closure : pagecount update ho pa raha hai means ki wo remember kar pa raha 
let pageCount = 0
const items = [1,2,3,46,7,]
items.forEach(function iterator(num){
    pageCount++
    console.log(num)
})
console.log("PageCount :", pageCount);



