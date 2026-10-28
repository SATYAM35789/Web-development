function useDebounce(cb , deley = 2000){
    let timerId; 
    // passing modified callback
    return (...args) =>{
        clearTimeout(timerId)
        //  start new timerId
        timerId = setTimeout(() => {
            // calling callback again with same args
            cb(...args)
        },deley)
    }
} 

export default useDebounce