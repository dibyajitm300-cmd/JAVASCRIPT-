//Primitive Datatypes
//7 types of primitive :- String,Number,Booleam,null,undefined,Symbol
const score = 100
const scoreValue = 100.45
const isLoggedIn = false
const outsideTemp = null
let userEmail;
//no need to declare which  type of data we r going to put in

const id = Symbol('777')
const anotherId = Symbol('777')
console.log(id === anotherId);//false because symbola are always unique
 
const bigNumber = 3446545759867464n


//Reference(Non-primitive Datatype)
//Array,Object,Functions

const heros = ["Shaktiman","Ironman","Spiderman"]//Array

let myObject = {
    name:"Dibyajit",
    age:"21",
}//object declarat/ion

// const myFunction = functionss(){
//     console.log("Hello World")
    
// }



// *****************************************************

//Stack( use in primitive),--->>>Operration done in the copy of the stored information
 let myYoutubename = "jdbuwy.com"
 let anotherName = myYoutubename//jdbuwy.com
 anotherName = "jsbvuibkicnj.com"

 console.log(myYoutubename);//jdbuwy.com
 console.log(anotherName);//jsbvuibkicnj.com
 


//Heap(use in non-primitive)---->>>perration done in the copy of the actual memory location information

 let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "Dibyajit@gmailcom"
 console.log(userOne.email);//"Dibyajit@gmailcom"
 console.log(userTwo.email);//"Dibyajit@gmailcom"
 
 