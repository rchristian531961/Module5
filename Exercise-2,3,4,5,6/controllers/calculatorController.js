/*
Only the logic of operations is placed here.
Nothing Else
Always export all when completed 
*/

//-------Exercise 6--------------
const Calculator=require('../libraries/Calculator')
const myCalc=new Calculator();

//---------------------------------
const add=(req,res)=>{
   let number1=parseInt(req.query.num1);
   let number2=parseInt(req.query.num2);
   // let sum=number1+number2;

   //For Exercise 6--------------------
   let sum=myCalc.add(number1,number2);

   console.log(sum)
   res.status(200); // check the status codes what they mean?
   res.json({result:sum});
}

//testing function with libraries imported
// const testFunction=()=>{
//    myCalc.test
// }

const sub=(req,res)=>{
    let number1=parseInt(req.query.num1);
   let number2=parseInt(req.query.num2);
   // let sub=number1-number2;

   //For Exercise 6--------------------
   let sub=myCalc.sub(number1,number2);

   console.log(sub)
   res.status(200); // check the status codes what they mean?
   res.json({result:sub});
}

const div=(req,res)=>{
    let number1=parseInt(req.query.num1);
   let number2=parseInt(req.query.num2);
   // let div=number1/number2;

   //For Exercise 6--------------------
   let div=myCalc.div(number1,number2);

   console.log(div)
   res.status(200); // check the status codes what they mean?
   res.json({result:div});
}

const multiply=(req,res)=>{
    let number1=parseInt(req.query.num1);
   let number2=parseInt(req.query.num2);
   // let mult=number1*number2;

   //For Exercise 6--------------------
   let mult=myCalc.mult(number1,number2);

   console.log(mult)
   res.status(200); // check the status codes what they mean?
   res.json({result:mult});
}

//Add routes for AC,CE

module.exports={add,multiply,div,sub}