// is case this calling context ko point nahi kar rahe hote hai. 
let obj = {
    x : 10,
    fun() {
        y = {
            gun : () => {
                console.log(this.x);
                
            }
        }
        y.gun()
    }
}
obj.fun()