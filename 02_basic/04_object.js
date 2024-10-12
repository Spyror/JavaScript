const tinderUser = new Object()

tinderUser.id = "123av"
tinderUser.name = "Aman"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"vaman4578@gamil.com",
    fullname : {
        userfullname : {
            firstname : "Aman",
            lastname : "Verma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}

// const obj3 = obj1.concate(obj2)
// const obj3 = Object.assign({} ,obj1,obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);

const user =[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"r@gmail.com"
    },
    {
        id:3,
        email:"h@gmail.com"
    }
]

// console.log(user[1].id)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// De-Structure of Objects

const course ={
    coursename:"JS in hindi",
    courseprize: 999,
    courseinstructure:"Hitesh"
}

// course.courseinstructure

const {courseinstructure: instructure} = course
console.log(instructure);


//*************API**************

// {
//     "name":"aman",
//     "course":"JS in hindi",
//     "prize": 999
// }


[
    {},
    {},
    {}
]