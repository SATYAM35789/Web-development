let obj = { id:101 , name:"Satyam", Salary:1000};
console.log(obj);

let emp = new Object()
console.log("It's gives empty object" , emp);  // means koi bhi key:Value pair exist nahi karte honge. 

// Asigning value to Object
emp.id = 102;   // Checks id naam ka koi key hai ya nahi , if yes Bana do otherwise chod do
emp.Name = " Amit "
console.log(emp);

// Creating Object through Constructor function
function Emp(i,n,s){
    this.id = i;
    this.name = n;
    this.Salary = 5;
}

// Passing Value
const e = new Emp(103,"Vishal",120000);
console.log(e);


// Accesing the value of an object
// 1st way
console.log(emp.id);

// 2nd way
console.log(emp['Name']);

// Updating the Value 
emp.Name = "Amit Dengi "
console.log(emp);

// Delete attribute of an Object
delete emp.id
console.log(emp);
