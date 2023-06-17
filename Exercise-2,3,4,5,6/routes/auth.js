const express=require('express');
const router=express.Router();

router.get('/login',(req,res)=>{
    res.send('Check the username and password');
})

router.get('/authorize',(req,res)=>{
    res.send('Check to see if they have token');
})

module.exports=router;