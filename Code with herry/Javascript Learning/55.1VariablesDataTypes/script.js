let x = " Harry bhai"
let y = 22;
let z = 3.55;
const p = true;
let q  = undefined;
let r  = null;

console.log(x,y,z,p,q,r);
console.log(typeof(x),typeof (y),typeof(z),typeof(p),typeof(q),typeof(r));

//  Object in js is a key value pairs
let o = {
    name: "Satyam", 
    "job code" : 5700   // space hai isiliye double quates hai

}
console.log(o)

//Add
o.salary = "100 Crores"
console.log(o)

//Update
o.salary = "500 Crores"
console.log(o)

// Adding boolean Values
o.ishandsome = true
console.log(o)

// Note Value may be primitive, otherObject, function,etc