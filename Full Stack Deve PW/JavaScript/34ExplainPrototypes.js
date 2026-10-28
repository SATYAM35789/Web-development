//Array
let myHeros = [ "Heros","Spiderman"]
let dcHeros = ["Batman", "Flash", "Superman"]

//Object
let HeroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderman : function(){
        console.log("Spidy power is ${this.spiderman}");
        
    }
}

Object.prototype.Satyam = function(){
    console.log("Satyam is present in all object");
    
}
// Hum yah dekh sakte hai ki kaise array my heros ka paas satyam() fun aa gaya 
console.log(myHeros.Satyam());
console.log(HeroPower.Satyam());

// Array ko koi property de rahe hai {Sabhi array ke pass ye property hogi}
Array.prototype.heySatyam = function(){
    console.log(" Satyam Says Hi");
}
console.log(myHeros.heySatyam());
// console.log(HeroPower.heySatyam());  Object ke sath error dega kyuki hamne isko Array ke liye banaya hai


// Inheritance 

const User = {
    name : "Top Name" ,
    email : " top@gmail.com"
}

const Teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable : false
}
const TeamAssignment = {
    makeAssignment : "JS Assignment" , 
    fulltime : true,
    __proto__: TeachingSupport
}
console.log(TeamAssignment.isAvailable);
// Inheriting outside 
Teacher.__user__ = User

// Another Method
Object.setPrototypeOf(TeachingSupport , Teacher)

String.prototype.trueLength = function(){
    // Same object ke data ko acces karne ke this ka use karte hai
    console.log('True length is: ${this.trim().length}'); 
}
"satyam        ".trueLength()
"    satyam    ".trueLength()
