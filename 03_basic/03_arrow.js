const user = {
    username:"Aman",
    price : 199,

    welcomeMessage: function (){
        console.log(`welcome ${this.username}`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Harshita"
// user.welcomeMessage()

// console.log(this)

// function choco(){
//     let username = "AMAN"
//     console.log(this)
// }
// choco()

// const choco1 = function (){
//     let username = "AMAN"
//     console.log(this)
// }

// choco1()

// const chai = () => {
//     let username = "AMAN"
//     console.log(this)
// }

// chai()

// ++++++++++++++arrow function decleartion+++++++++++++
// () => {}

// const addTwo = (num1,num2) => {   //explicite return
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2 // implicite return 
// const addTwo = (num1,num2) => (num1+num2)

// const addTwo = (num1,num2) => ({username: "Aman"})
// console.log(addTwo(3,4))