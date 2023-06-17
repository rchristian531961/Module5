// console.log("Hello World");
//We never pass modules to clients. Only package.json files which knows what to download

//-------Require all below to run a complete we server---------

//------------------------------For practice Route notes in module 5--------------
//This imports the route, but not bound yet. We need to go through middle ware for bounding
var testRoute=require('./routes/myTestRoute');
//-----------------------------For practice Route notes in Module 5-------------------

//----------------------------For calculator example in Module 5----------------------
//This imports the route, but not bound yet. We need to go through middle ware for bounding
var calculatorRoute=require('./routes/calculatorRoute');
//-----------------------------For calculator example in Module 5-------------------

//--------------------------For calculator class (libraries) example---------------------------
const Calculator=require('./libraries/Calculator');
let myCalc1=new Calculator();
let myCalc2=new Calculator();
myCalc1.add(3,4);
myCalc2.add(4,2);
//---------------------------------------------------------------------------



//require the express package
const express=require('express');

//create an app using the express package
const app=express();

//second port practice
// const app2=express();

//set the port to 3000
const port=3000;

//example in class for auth route and feed route
// const authRoute=require('./routes/auth');
// const feedRoute=require('./routes/feed');

// app.use('/mytest',authRoute);
// app.use('/mytest2',feedRoute);

//------------------------------For practice Route notes in module 5--------------
//Bounding the route now to middleware below
app.use('/mytest',testRoute);
//------------------------------For practice Route notes in module 5--------------


//-----------------------------For calculator example in Module 5-------------------
app.use('/calculator',calculatorRoute);
//-----------------------------For calculator example in Module 5-------------------



//second port practice
// const port2=3001;

//get method links the address after port for what to do after recieived a request
app.get('/testing', (req,res)=>{
    res.send('Hello World Asshole');
})//change the /testing to '/' for exercise 1. 

//second port practice
// app2.get('/',(req,res)=>{
//     res.send("My Second port is used")
// })

app.get('/test',(req,res)=>{
     res.send("This is a test")
 })


/*
Finally, this function activates the web })
server, until now, it has not been. This
reads “Let the webserver listen on the
provided port (3000), once the server
starts, if successful (hidden test) send
out this message to the console */
app.listen(port, ()=>{console.log(`Example app listening at http://localhost:${port}`)})

//second port practice
// app2.listen(port2, ()=>{console.log(`Example app listening at http://localhost:${port2}`)})
//---------------------------------------------------

//---------Exercise 1---------
//Ports 3001,3002,3003
const myPorts=[3001,3002,3003];
//servers array and fill each with with an express function for server use
const servers=[]
myPorts.forEach(//for each method calls a function to perform on each element in array called
    myPort=>{
        var myApp=express();
        servers.push(myApp);
    })

/*
called servers array filled with express functions
Created a function that uses the ports and sends a message for each new
server created.
*/
servers.forEach(
    //using for each the server function will take the element in array as parameter
    //server name acts as the current element in array
    server=>{
        let tempPort=myPorts.pop();

        //this sends what you want for each server
        server.get('/',(req,res)=>{
            res.send("This is a test for server")
        })

        // server.use('/',express.static('public'))
        server.listen(tempPort,()=>{
            console.log(`Example app listening at http://localhost:${tempPort}`)
        })
    }
)
//----------------------------------------------------------

//Our first middleware. Now the initial '/' is the public folder
//If index.html is special does not have to be called
//If not index.html then must use specific URL (/users)ex
app.use('/',express.static('public'));
