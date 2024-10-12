
function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}
// sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2)
// }

function addTwoNumber(num1,num2){
    // let result = num1 + num2
    // console.log("AMAN");
    return num1+num2
    

} 
// addTwoNumber(3,"4")

let result = addTwoNumber(3,8)
// console.log("Result:",result);


function loginUserMessage(username = "User"){
    if(!username){
        return `Please enter the proper username`
    }
    else{
        return `Hello ${username},you logged in successfully.`
    }
}

let message = loginUserMessage("aman")
console.log(message);
