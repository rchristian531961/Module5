/*This route is created for calculator example in Module5 */

//--------------------------Examples in Module 5---------------
//this creates the express route
// var express=require('express');
// var router=express();

// //this will create the response and link in url
// router.get('/add',(req,res)=>{

//     /*
//     req.query will read the data from URL and display it screen
//     http://localhost:3000/calculator/add?num1=4&num2=10
//     ? symbol indicates the beginning of query parameters.
//     */
//     // console.log(req.query);
//     // res.send(req.query);

//     /*
//     Pass Data:Referring to above we see how. Now below we will use that knowledge from the URL
//     to perform what we need from the data
//     we access GET data using (get). Now we can use that data to achieve our goal. 
    
//     Always paresInt by default are strings
//     res.status: we use this to set value to 200. Extra info for developers
//     res.json: instead of send, we used this to send data in json format instead of just strings. 
//     */
//    let number1=parseInt(req.query.num1);
//    let number2=parseInt(req.query.num2);
//    let sum=number1+number2;
//    console.log(sum)
//    res.status(200); // check the status codes what they mean?
//    res.json({result:sum});

//     // res.send('Add');
// })

// //------------------Exercise 2 & 3-------------------------------------
// router.get('/sub',(req,res)=>{
//     let number1=parseInt(req.query.num1);
//    let number2=parseInt(req.query.num2);
//    let sub=number1-number2;
//    console.log(sub)
//    res.status(200); // check the status codes what they mean?
//    res.json({result:sub});
// })

// router.get('/div',(req,res)=>{
//     let number1=parseInt(req.query.num1);
//    let number2=parseInt(req.query.num2);
//    let div=number1/number2;
//    console.log(div)
//    res.status(200); // check the status codes what they mean?
//    res.json({result:div});
// })

// router.get('/multiply',(req,res)=>{
//     let number1=parseInt(req.query.num1);
//    let number2=parseInt(req.query.num2);
//    let mult=number1*number2;
//    console.log(mult)
//    res.status(200); // check the status codes what they mean?
//    res.json({result:mult});
// })

// module.exports=router;

//-----------------------Exercise 2 & 3---------------------------------------


/*
Basic Controller Example
*/

var express=require('express');
var calculatorController=require('../controllers/calculatorController');
var router=express.Router();

router.get('/add',(req,res)=>{
    calculatorController.add(req,res);
})

router.get('/div',(req,res)=>{
    calculatorController.div(req,res);
})

router.get('/multiply',(req,res)=>{
    calculatorController.multiply(req,res);
})

router.get('/sub',(req,res)=>{
    calculatorController.sub(req,res);
})

//add route for AC,CE

module.exports=router;