const Product =  (n,p,r)  => {
    this.name = n
    this.price = p
    this.rating = r
}

 const p = new Product("Iphone" , 1000000, 4);
 console.log(p);
 
 // Arrow function ko hum constructor ke jaise use nahi kar sakte. 
 // The theory of this keyword pointing to calling context is not applicable with arrow function.