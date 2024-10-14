
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
// console.log(message);

function calculateCartPrize (...number1){
    return number1
}
// console.log(calculateCartPrize(500,600,4755,210));

const user ={
    username:"aman",
    prize:199
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and prize is ${anyobject.prize}`)
}
// handleObject(user)

// handleObject({
//     username:"hello",
//     prize:288
// })

const myNewArray = [200,410,5220]

function returnSecondValue (array){
    return array[1]
}
console.log(returnSecondValue(myNewArray))