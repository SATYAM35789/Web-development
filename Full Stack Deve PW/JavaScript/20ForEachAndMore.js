// Foundation of backend and Frontend
let arr = [2,3,4]
//forEach(Callback(kya kya milega))
arr.forEach(function(element,index,arr){
    console.log(index,element,arr);
    
})

arr.forEach((element,index,arr) => {
    console.log("Arrow :",index,element,arr);
})

const heros = ["mogliraj","chhotaBheem","motu-patlu","nagraj","doremonraj","mighty-raju"]

heros.forEach((el) => {console.log(el.toLocaleUpperCase())})

// Map 1st Way
arr.map(function(element,index, arr){
    console.log("Map:",element,index, arr);    
})

// 2nd Way :-
heros.map((heroElement) => console.log(heroElement.toLocaleUpperCase()))

//Filter: Value match then return
console.log(heros);
const heroWithRaj = heros.filter((h) => {   //h sabke pass jayega aur check karega 
   return h.endsWith('raj')     // jo is condition ko match karega unko return karega sirf
})
console.log(heroWithRaj);


// Shoping cart : user alag alag object kharifa hai, humk uska bill banna hai
const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce((prev,curr) => prev+curr , 0)   // (prevValue, CurrValue)  currki value 0 
console.log(sumOfCartBill);

const gameScore = [200,300,255,860,456,180]
// Check if all the value are number
const gameScoreCheck = gameScore.every((v) => typeof v === 'number')     // stict check datatype : is data ka hai ya nahi
console.log("Check : " ,gameScoreCheck);

//Find score above 200
const above200 =  gameScore.find((score) => score>200)  // greedy    jo bhi 1st value condition se match hoga usko return kar dega 
console.log(above200)


