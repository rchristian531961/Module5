//tells app we need this package
const express=require('express');
//extracts functions from package
const app=express();

//import a route here?
const feedRoute=require('./routes/feedroute');

//tells app what port here
const port=3000;

app.use(express.json());

app.use(feedRoute)
app.use(express.static('public'));

//define endpoints here where traffic go?


app.listen(port, ()=>{
    console.log(`Social Media App listening at http://localhost:${port}`);
})