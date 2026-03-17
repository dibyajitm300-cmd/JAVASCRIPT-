const score = 400
// console.log(score)


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 3123.988698
// console.log(otherNumber.toPrecision(3));
//22.90948-->>22.9
// 123.988698-->>124
// 3123.988698-->>3.12e+3

const Number2 = 1000000000000
// console.log(Number2.toLocaleString());//1,000,000,000,000
// console.log(Number2.toLocaleString('en-IN'));//10,00,00,00,00,000


//$$$$$$$$$$$$$$$$$-->>MATHS<<--$$$$$$$$$$$$$$$$$$$
// console.log(Math)//Object [Math] {}
// console.log(Math.abs(-7));//7
// console.log(Math.round(7.9));//8
// console.log(Math.ceil(7.1));//8
// console.log(Math.floor(7.9));//7
// console.log(Math.max(5,3,4,22,556,7,0));//556
// console.log(Math.min(5,3,4,22,556,7,0));//0


// console.log(Math.random());//defaultly gives number between 0 n 1
// console.log((Math.random()*10)+1);//greater than one always
// console.log(Math.floor(Math.random()*10)+1);



//##########IMPORTANT############
const min =20
const max =50

console.log(Math.floor(Math.random()*(max-min+1)) + min);
