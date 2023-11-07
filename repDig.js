// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's 
// a repdigit or not.

// Examples

// isRepdigit(66) ➞ true

// isRepdigit(0) ➞ true

// isRepdigit(-11) ➞ false

// Notes

//     The number 0 should return true (even though it's not a positive number).
//     Check the Resources tab for more info on repdigits.

// function isRepdigit(num) {
//     return new Set(`${num}`).size==1;
// }

const isRepdigit = (num) => new Set(`${num}`).size==1;

// console.log(isRepdigit(66)) // ➞ true
// console.log(isRepdigit(0)) // ➞ true
// console.log(isRepdigit(-11)) // ➞ false

console.log(isRepdigit(6)) //, true)
console.log(isRepdigit(66)) //, true)
console.log(isRepdigit(666)) //, true)
console.log(isRepdigit(6666)) //, true)
console.log(isRepdigit(1001)) // false)
console.log(isRepdigit(-11)) //, false, "The number must be // >= 0")

// function isRepdigit(num) {
// 	return String(num).split('').every((x, i, arr) => x=== arr[0])
// }

