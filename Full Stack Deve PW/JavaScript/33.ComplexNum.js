class ComplexNumber{
    #real
    #imag
    constructor(r,i){
        this.#real = r
        this.#imag = i
    }
    diplay(){
        console.log(this.#real, "+i" , this.#imag);    
    }

    get Real(){
        return this.#real
    }
    get Imag(){
        return this.#imag
    }

    addComplexNumber(c){
        this.#real+= c.Real
        this.#imag += c.Imag
    }
}
const c1 = new ComplexNumber(2,3) 
c1.diplay()
const c2 = new ComplexNumber(4,5)
c1.addComplexNumber(c2)
c1.diplay()