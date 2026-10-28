//in past XMLHttpRequest : iske ander koi bhi url dalte the aur data fetch hokar mil jata tha
//  Now we fetch("URL") promise based syntex  so ye promise based hai so jab ye hoga toh kya karna hai ye bhi decide kar sakte hai using then

// If promise
fetch("http://type.fit/api/quotes")
.then( function f(response){ 
    return response.json();
})// Return promise and us peomise ke baad kya hona chihiye
.then(function g(value){
    console.log(value);   
})