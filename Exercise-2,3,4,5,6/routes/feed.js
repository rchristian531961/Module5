const express=require('express');
const router=express.Router();

router.get('/feed',(req,res)=>{
    res.send('List other users main feed');
})

router.get('/group',(req,res)=>{
    res.send('This points to a group');
})

module.exports=router;