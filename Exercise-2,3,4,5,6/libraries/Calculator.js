//Example from Module 5 about Libraries

//Exercise 6 Part 2 and 3-----------------
const logger=require('../libraries/logger.js');
// const myLog=new logger();
//----------------------------------

class Calculator{
    //constructors
    constructor(){
        this.id=Date.now();
        // this.myLog=new logger();
    }

    //value stored in Calculator. private value
    #log=(value)=>{
        console.log(`[Calculator:${this.id}]:${value}`)
        // mylog.log(this.id,value);
    }

    //function called
    add(num1,num2){
        const value=num1+num2;
        this.#log(value);
        return value;
    }

    sub(num1,num2){
        const value=num1-num2;
        this.#log(value);
        return value;
    }

    mult(num1,num2){
        const value=num1*num2;
        this.#log(value);
        return value;
    }

    div(num1,num2){
        if (num2===0){
            const value=undefined;
            this.#log(value);
            return undefined;
        }
        const value=num1/num2;
        this.#log(value);
        return value;
    }

    //notice the movement between test function in this file with controllers/Calculatorcontroller file
    test(param1,param2,para3){}
}

//Always export
module.exports=Calculator;
//Always need to import it to something after exporting