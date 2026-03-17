const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_Heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_Heros)//here it is treating the array dc_Heros as a single unit
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][2]);


let allHeros =  marvel_heros.concat(dc_Heros)//concat doesnot change the original array
// console.log(allHeros);
//-->>[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]



//WE can do this by using spread operator
let AllHeros = [...marvel_heros, ...dc_Heros];
console.log(AllHeros);
//-->>[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


//----------Something Intresting-----------
const Array11 = [1,2,3,4,[4,65,7,8],7,8,[2,3,[67,89]]]
let usableArray = Array11.flat(Infinity)
console.log(usableArray);
// output-->>> [
//    1,  2, 3, 4, 4, 65,
//    7,  8, 7, 8, 2,  3,
//   67, 89
// ]



//Converting into array
console.log(Array.isArray("DIBYAJIT"));//false
console.log(Array.from("DIBYAJIT MOHANTY"));
//output-->>>>
// [
//   'D', 'I', 'B', 'Y',
//   'A', 'J', 'I', 'T',
//   ' ', 'M', 'O', 'H',
//   'A', 'N', 'T', 'Y'
// ]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
