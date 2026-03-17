//arrays in discussion

const myArr = [11,22,33,44,55]
const myHeros = ["Shaktiman","Ironman"]

const myarr2 = new Array(10,20,30,40)
// console.log(myarr2[3]);

//Array methhods


// myArr.push(66)
// myArr.push(77)
// console.log(myArr);
// myArr.pop();//remove last value

myArr.unshift(100)//add the nummber at beginning shifting all the elements
// console.log(myArr);

myArr.shift()//remove the 1st elements
// console.log(myArr);

// console.log(myArr.includes(44));
// console.log(myArr.indexOf(22));


const newArr = myArr.join()//converts the array into strings
// console.log(myArr);
// console.log(newArr);

//----------->> Usage of slice and splice

const arrayOne = new Array(99,88,77,66,55,44)
console.log(`Original Array:-> ${arrayOne}`);

//using slice in array
const resultOfSlice = arrayOne.slice(1,3)
console.log(`Applying slice :-> ${resultOfSlice}`);
console.log(`Original Array:-> ${arrayOne}`);
//slice is used to exctract the array element from starting to ending indexed element without  inluding ending indexed element
//And also not affecting the original array


//using splice in array
const resultOfSplice = arrayOne.splice(1,3)
console.log(`Applying splice :-> ${resultOfSplice}`);
console.log(`Original Array:-> ${arrayOne}`);
//splice is used to exctract the array element from starting to ending indexed element including ending indexed element
//And also  affecting the original array through removing that portion

// Original Array:-> 99,88,77,66,55,44
// Applying slice :-> 88,77
// Original Array:-> 99,88,77,66,55,44
// Applying splice :-> 88,77,66
// Original Array:-> 99,55,44
