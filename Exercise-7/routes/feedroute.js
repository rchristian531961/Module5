const router=require('express').Router()
const feedController=require('../controller/feedController');


router.get('/feeds',feedController.getAllPosts)

router.post('/posts',feedController.addPost);

module.exports=router;