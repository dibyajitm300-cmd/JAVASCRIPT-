const name = "Dibyajit"
const repoCount = 4
console.log(name + repoCount + " done");
//Modern syntax uses String-InterPolation by addding backtex-->>``
// console.log(`Hi my name is ${name} and my repo-count is ${repoCount}`);


const gameName = new String('DIBYA')
//
// const gname = new String('DIBYA')
// undefined
// gname
// String {'DIBYA'}
// 0: "D"
// 1: "I"
// 2: "B"
// 3: "Y"
// 4: "A"
// length: 5
// [[Prototype]]: Stringformat
// : ƒ ()anchor: 
// ƒ anchor()at: 
// ƒ at()big: ƒ big()blink: ƒ blink()bold: ƒ bold()charAt: ƒ charAt()charCodeAt: ƒ charCodeAt()codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: ƒ fixed()fontcolor: ƒ fontcolor()fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()isWellFormed: ƒ isWellFormed()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith: ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: ƒ toUpperCase()toWellFormed: ƒ toWellFormed()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Object[[PrimitiveValue]]: ""[[PrimitiveValue]]: "DIBYA"
// const gn = "DIBHAJJB"
// undefined
// gn
// 'DIBHAJJB'

// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3).toLowerCase().length);//intresting one ,,we can add more n more methods in a single line BUT NOT RECOMMENDED
// console.log(gameName.indexOf("I"));


const newString = gameName.substring(0,2)//here we can also use -ve value but later its ignored
// console.log(newString);//last index's character not included

const anotherString = gameName.slice(-4,3)//can use -ve value and it is operat in it
// console.log(anotherString);

const stringOne = "    Dibya    "
// console.log(stringOne);
// console.log(stringOne.trim());//remove leading and trailing white spaces


const url = "https://dibyajit.com/bhabani%500mohanty"
// console.log(url.replace('%500','___'));
// console.log(url.includes('bhabani'));


const nameString = new String('dibya-jit-mohanty')
console.log(nameString.split('-'))