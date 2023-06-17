const posts=require('../data/database')

function getAllPosts(req,res){
    res.json(posts);
}

function addPost(req,res){
    const name=req.body.name;
    const title=req.body.title;
    const text=req.body.text;
    const id=Date.now();

    const newPost={
        name,title,text,id
    }

    posts.push(newPost);

    //Use 201 for successful
    res.status(201).json("Success Addition");
}
// module.exports={
//     getAllPosts(){}
// };

module.exports={getAllPosts, addPost}