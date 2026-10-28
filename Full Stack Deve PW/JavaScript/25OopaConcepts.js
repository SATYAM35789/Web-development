class Product {
    
    // Sirf Ek he constructor ho sakta hai
    constructor( n,p,r) {
        console.log(" Caling a Constructor");
        this.name = n;
        this.price =  p
        this.rating = r;
        // return 10; if returning primitive then it will be avoided in constructor. string , boolean, intger,etc
        // return { x:0 , y:20} // Non primitive return hoga , ab ye by default return nahi hoga. 
    }

  display(){
    console.log("This refers to :", this);
    console.log(" Displaying the prodect Name:" , this.name );
    console.log(" Displaying the prodect Price: " , this.price);
    
  }
}
 // new : creates an empty new object , 
const p = new Product("Iphone", 200000 , 4);
console.log(p.name);
// p.display();
