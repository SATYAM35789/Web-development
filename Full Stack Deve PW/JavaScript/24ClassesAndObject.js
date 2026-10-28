class Product {
    // Properties and Behavier

    // Prpperties -> variables -> data member
    name;
    price;
    rating;
  //  behavier -> functions -> member functions 
  display(){
    console.log(" Displaying the prodect");
    
  }
}

// Creating Object   If you don't pass any attribute name the it take undefined by default. 
const p = new Product();
console.log(p);
p.display();
