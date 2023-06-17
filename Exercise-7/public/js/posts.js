function getAllPosts(){
    fetch('/feeds')
    .then((res)=>res.json())//recieves response from server parse json
    .then((data)=>{
        // console.log(data);
        const postList=document.querySelector('#post-list')
        let postsHTML="";
        for (let post of data){
            let postHTML=`
            <div id="post-template">
            <div class="post">
                <div class="post-body">
                    <div class="post-name">${post.name}</div>
                    <div class="post-title">${post.title}</div>
                    <div class="post-text">${post.text}</div>
                </div>
            </div>
        </div>
        `

        postsHTML+=postHTML;
        }
    postList.innerHTML=postsHTML;
    })
}


function createPost(event){
    event.preventDefault();

    const name=document.querySelector("#name").value
    const title=document.querySelector("#title").value
    const text=document.querySelector('#text').value 

    fetch('/posts',{
        method:"post",
        body:JSON.stringify({name, title, text}),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }

    })
    .then((res)=>res.json())//recieves response from server parse json
    .then((data)=>{
        alert(data)
        window.location.reload();
    })
    .catch((error)=>{
        alert("Error occured try again")
    })

}

document.querySelector("#new-post-form").addEventListener('submit',(event)=>{
    createPost(event);
});

window.onload=getAllPosts;//Produces data on load
