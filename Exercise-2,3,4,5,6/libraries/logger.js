//export. Get Id of caller and result
class logger{

    constructor(){
        this.id=this.#randomNumber();
    }
    
    #randomNumber=(value)=>{
        const random=Math.floor(Math.random()*50);
        return random;
    }

    #log=(value)=>{
        console.log(`test:${this.id}: ${value}`)
    }

    expo(num1,num2){
        const value=num1**num2;
        this.#log(value);
        return value;
    }
}

module.export=logger;