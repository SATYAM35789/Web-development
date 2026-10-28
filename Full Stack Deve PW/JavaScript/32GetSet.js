
class Product {
     
    #rating               
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
  get ratingGetter(){
    console.log(this.#rating);
  }

  set ratingSetter(r){
       if(r<0) return
       this.#rating = r
  }
}
const p = new Product("Iphone", 200000 , 4);
p.ratingSetter = 7
p.ratingGetter

