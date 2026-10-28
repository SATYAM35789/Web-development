function Product (n,p,r){
    this.name = n
    this.price = p
    this.rating = r
}
const p =  new Product("MacBook",1500000, 5)
console.log(p);

let x = {
   p: Product
}

x.p("Airburds" ,500, 4)
console.log(p);


/**
 * 1. this keyword in js is diff than the other language
 * 2. this keyword refers to the context from where we called
 * 
 * in the function constructor also 
 * - if you return primitive it is ignored and we return the reffered object
 * - if you return the custom object , then the custom object will return
 * - if you don't return anything then object reffered by this will be returned. 
 */