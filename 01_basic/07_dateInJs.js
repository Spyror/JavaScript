// *********************date***********************


let myDate = new Date()
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2003,9,11)
// let myCreatedDate = new Date(2003,9,11,5,3)
// let myCreatedDate = new Date("13-13-2004")
let myCreatedDate = new Date("2003-10-11")
// console.log(myCreatedDate.toLocaleString());


// **********************time***********************

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(myTimeStamp/1000))

let newDate = new Date()
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getMinutes());

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    hourCycle:"h23"
}))
