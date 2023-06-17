//Index.js is the main server

const express=require('express');//tells app we need this package
const app=express();//extracts functions from package
const port=3000;//defin our port number here

//For Exercise 1
const ports=[3001,3002,3003];
const servers=[];

ports.forEach(port=>{
    let app=express();
    servers.push(app);
})

//run server function 
//use route "/"
//https://home.com/
//https://home.com/account
//app.get('/',(req,res)=>{res.send("Hello World!")})

//add route to test
//app.get('/test',9req,res)=>{res.send("This is a test")}

app.use('/',express.static('public'))

app.listen(port,()=>{console.log(`example app listening at http://localhost:${port}`)})

servers.forEach(server=>{
    let tempPort=ports.pop()

    //server.use('/',(req,res)=>{res.send('Hello from $tempPort')})
    server.use('/', express.static('public'))
    server.listen(tempPort,()=>{
        console.log(`Example app listening at http://localhost:${tempPort}`)
    })
})