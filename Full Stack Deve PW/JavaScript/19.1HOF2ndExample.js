const higherOrder = n => {
    const oneFun = m =>{
        const twoFun = p => {
            return m+p+n
        }
        return twoFun
    }
    return oneFun
}

// Syntex to call this type of fun 
console.log(higherOrder(2)(3)(4))


// useCase
const myNums = [2,3,4,5]

const sumArray = arr =>{
    let total = 0 
    // jo bhi array pass hogi us par hum foreach loop try kar rahe hai
    arr.forEach(function(element){
        total += element
    });
    return total
}
console.log(sumArray(myNums));

// Use case of this in bellow javaScript Property
function oneMoreHello(){
    console.log(" Hello Satyam!");
    
}
setInterval(oneMoreHello, 100)    // syntex: setInterval(FunctionName, NoOfTimesYouWantThisFunctionToRunInEverySecond)

setTimeout(oneMoreHello, 2000)
