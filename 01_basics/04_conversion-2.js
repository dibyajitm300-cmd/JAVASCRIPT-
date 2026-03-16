//console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// Note on null comparisons in JavaScript:
// - null > 0   → false (null is converted to 0, so 0 > 0 is false)
// - null == 0  → false (null is only loosely equal to undefined, not 0)
// - null >= 0  → true  (null is converted to 0, so 0 >= 0 is true)
// Relational operators convert null to 0, but equality does not.


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);//tight comparision also compare datatype