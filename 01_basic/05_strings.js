const name = "Aman"
const repoCount = 50
// console.log(name + repoCount + "Value");

// console.log(`My name is ${name} and my repo count is ${repoCount}`);

 
// console.log(nameOne)
const gameName = "aman is Good boy"
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// kis index pay kon si string hai check kerna le liye charAt use kerte hai
// console.log(gameName.charAt(8));  


// String kis index pay hai
// console.log(gameName.indexOf('o'))

const newString = gameName.substring(0,9)
// console.log(newString);

const anotherString = gameName.slice(0,8)
// console.log(anotherString);

const newStringOne = "     aman      "
// console.log(newStringOne);
// console.log(newStringOne.trim());
// trim work on white space and next line 

const url = "https://amanVerma.com/aman%20verma"
console.log(url.replace('%20','-'))

// check a particular word is in url
console.log(url.includes('va'))

console.log(gameName.split());

