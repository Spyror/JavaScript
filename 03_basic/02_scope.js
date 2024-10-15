let a = 1000;
// var b = 200;
// const c = 30;

if (true){
    let a = 10;
    // var b = 20;
    const c = 30;
    // console.log("INNER:-",a)
}

// console.log(a)
// console.log(b)
// console.log(c);

function one(){
    username = "Aman"
    function two(){
        website = "github"
        console.log(username)
    }
    // console.log(website)
    // two()
}
// one()

if (true) {
    const username = "aman"
    if (username === "aman") {
        const website = " github"
        // console.log(...username,...website);
    }
    // console.log(website)
}
// console.log(username)


// +++++++++++interesting++++++++++++++++++
console.log(addone(5)) 

function addone(num){
    return num + 1; 
}

// console.log(addTwo(5))
const addTwo = function(num){
    return num+2
}
