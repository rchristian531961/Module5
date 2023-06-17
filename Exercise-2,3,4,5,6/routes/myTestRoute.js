/*
Made the route folder for example in module 5
made the js file for example of route
We will move the test route here
*/

var express=require('express');
var router=express.Router();

router.get('/test',(req,res)=>{
    res.send('Hello World!');
})

router.get('/test2', (req,res)=>{
    res.send('Second test');
})

module.exports=router;

/*
We must always export the module as above. 
After exporting we must always import the route. 
This must be done for each route we create. 
*/
