let emp= {
    id :10,
    name :"Satyam Mishra" ,
    age :22 
}

// Fetching Keys of Object 
let keys = Object.keys(emp)
console.log(keys);  // array form

// Fetching Vlaues 
let values = Object.values(emp)
console.log(values);

// Fetching key:value pair
let entries = Object.entries(emp)
console.log(entries);

// Want TO No update and No Adding further property (key:value pair) no delete
Object.freeze(emp)  

// Want to update only no Add property    check on iternet
Object.seal(emp)
emp.id = 101
console.log(emp);

//Creating a object with the help of old Object or Creating copy of an object
let o = Object.assign({},emp)
console.log(o);

let oo = Object.assign({x :818800},emp)
console.log(oo);




