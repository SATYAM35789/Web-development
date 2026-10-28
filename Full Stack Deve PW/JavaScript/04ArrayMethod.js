let arr1 = [1,2,3,4,5]
arr1.push(6,7,"Satyam")
console.log(arr1)

arr1.pop()  
console.log(arr1);


// Adding two array
let arr2 = [3,4,4]
let arr3 = arr1.concat(arr2)
console.log(arr3);

// Combining two array
let a4 = arr3.join("")
console.log(a4);

// Reversing the element of an array
arr3.reverse()
console.log(arr3);

// Finding index value
console.log(arr3.indexOf(2));

// Printing the value in range
let saty = [34,45,55,66,4,4,222,22,]
console.log(saty.slice(2,6));

// Adding element at  any where syntex splice(IndexToAdd,NoOfElementWantRemove,ValueOfElement)
saty.splice(3,0,5000)
console.log(saty);
