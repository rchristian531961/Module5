var myPB="";

//Adds value of button to string
function addValue(value){
    myPB+=value;
}

//Displays the myPB string in html file
function displayPb(){
    document.getElementById("myProblem").innerHTML=myPB;
}

//General Function when buttons are pressed:
//Will store value in (myPB) and Display
function myFunction(myValue){
    addValue(myValue);
    displayPb();
}

//Clears (myPB) and displays to html
function AC(){
    myPB="";
    displayPb();
}

//Deletes the last entry in string and displays in html
function CE(){
    myPB=myPB.substring(0,myPB.length-1);
    displayPb();
}

//returns the operation in string
function findOp(myString){
    if (myString.includes("+")){
        return "+";
    }
    else if(myString.includes("/")){
        return "/";
    }
    else if(myString.includes("*")){
        return "*";
    }
    else{
        return "-";
    }
}

function mySolution(first,operation,second){
    var num1=Number(first);
    var num2=Number(second);
    switch (operation){
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*":
            return num1*num2;
        default:
            if(num2===0){
                return undefined;
            }
            return num1/num2;
    }
}

function myArrayEqn(myString){
    var myArray=[];
    var i=1; 
    var mylength=myString.length;
    var opArray=["+","-","*","/"];

    function verify(OP){
        if (opArray.includes(OP)){
            return true;
        }
        return false;
    }

    while (i<mylength){
        if(verify(myString[i])){
            myArray.push(myString.substring(0,i));
            myArray.push(myString[i]);
            myArray.push(myString.substring(i+1,myString.length));
            return myArray;
        }
        i++;
    }
    return myArray;
}

function equals(){
    var myArray=myArrayEqn(myPB);//naming? & const?
    var solution=mySolution(myArray[0],myArray[1],myArray[2]);
    // myPB=solution;
    // displayPb();

    const num1=myArray[0];
    const operator=myArray[1];
    const num2=myArray[2];

    const functionCall=(operator)=>{
        switch (operator){
            case "+":
                return "add";
            case "-":
                return "sub";
            case "*":
                return "multiply";
            default:
                return "div";
        }
    }

    const op=functionCall(operator);

    fetch(`http://localhost:3000/calculator/${op}?num1=${num1}&num2=${num2}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        document.getElementById("myProblem").innerHTML=data.result;}
    )
}

