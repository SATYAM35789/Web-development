// Lexical scoping : outer fun havnot the acess of inner fun data variable/fun
function outerFunc(){
    let outerVar = " I am at scope level 1." 
    function innerFunc(){
        let innerVal = "I am at scope level 2"
        console.log(outerVar); 
    }
    innerFunc()
}
// outerFunc()

const myGlobalValue = 0
function func(){
    const val1 =1
    console.log(myGlobalValue)

    function innerOfFunc(){
        const val2 = 2
        console.log(val2 , val1 , myGlobalValue);
        
        function innerOfInnerFun(){
            const val3 = 3
            console.log(val3,val2,val1,myGlobalValue);
            
        }
        innerOfInnerFun()
    }
    innerOfFunc()
}

func()
