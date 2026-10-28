import { useState } from "react"
import { useEffect } from "react"

function UseEffect(){
    
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    
    useEffect(()=>{
        console.log("effect called")
    },[x])

  

    return (
       <>
            <div>
                 x: {x} <button onClick={()=>{setX(x+1)}}> Inc</button>
            </div>
            <div>
                 y: {y} <button onClick={()=>{setY(x+1)}}> Inc </button>
            </div>
       </>
    )
}
export default UseEffect