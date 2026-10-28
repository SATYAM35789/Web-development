class Product {
     
    #rating                // noe it become the private attribute
    // Sirf Ek he constructor ho sakta hai
    constructor( n,p,r) {
        console.log(" Caling a Constructor");
        this.name = n;
        this.price =  p
        this.rating = r; 
    }
  
     // Attached with class 
     static custom(){
        console.log("Calling static method");
        
     }

  display(){
    console.log("This refers to :", this.name, this.price, this.rating);
    
  }
}
const p = new Product("Iphone", 200000 , 4);
p.name = "SamSung s23"
console.log(p.name);
Product.custom()
p.display()

