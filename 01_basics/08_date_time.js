//Learning Dates in depth

let myDate = new Date()
 console.log(myDate);//2026-03-17T10:18:48.060Z
 console.log(myDate.toString());//Tue Mar 17 2026 10:18:48 GMT+0000 (Coordinated Universal Time)
 console.log(myDate.toDateString());//Tue Mar 17 2026
 console.log(myDate.toISOString());//2026-03-17T10:18:48.060Z
 console.log(myDate.toJSON());//2026-03-17T10:18:48.060Z
 console.log(myDate.toLocaleDateString());//3/17/2026
 console.log(myDate.toLocaleString());//3/17/2026, 10:18:48 AM
 console.log(myDate.toLocaleTimeString);
 console.log(myDate.toTimeString());//10:21:26 GMT+0000 (Coordinated Universal Time)



 //let myCreatedDate = new Date(2026,0,17)//observed that month starts with -->>"0" in javascript
// let myCreatedDate = new Date(2026,0,17,5,89,23)//internally calculation happens here
 //let myCreatedDate = new Date("2026-01-17")
let myCreatedDate = new Date("01-17-2026")
 console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

 console.log(myTimeStamp);//1773743471811 in ms from jan 1 1970
 console.log(myCreatedDate.getTime());//converts to ms -->>1768608000000
 console.log(Math.floor(Date.now()/1000));//converts into second


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);

//-------------------IMPORTANT------------------------
console.log( newDate.toLocaleString('default',{
    weekday:"long"
}))