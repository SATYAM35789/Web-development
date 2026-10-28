let names = ["Anurag","Satyam", "Amn","Saurabh","Nakul","raman"]
    console.log(names);
    console.log("The length of an array is:" , names.length);
    
    // Finding last value
    console.log(names[names.length - 1]);
    // updating value
    names[1] = " Satyam Mishra"
    console.log(names);

    // if have wrong data but not index value in array
    for(let i= 0 ; i<names.length;i++){
        if(names[i]=="Amn"){
            names[i]= "Aman"
        }
    }
      console.log("Updated :",names);

// declaration of aray using new
let friends = new Array("Sidharth","Mona", "Ashwani" ," Atul")

// Inserting in an array
names.push("Apple")   // adding at last

    