//Map: store value in key-value pair and remember the original insertion order
let map = new Map()
console.log(map.size);

let arr = [
    [1 ,"Hi"],
    [2, "Hey"],
    [3,"So"],
    [4,"fine"],
    [5,"le"]
]
arr.Map((arrayItem) => map.Set(arrayItem[0],arrayItem[1]))    //set(key,value) 