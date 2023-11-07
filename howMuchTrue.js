// Create a function which returns the number of true values there are in an array.
// Examples

// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// function countTrue(arr) {
// 	return arr.filter((x) => x==true).length
// }

const countTrue = (arr) => arr.filter((x)=>x==true).length

console.log(countTrue([true, false, false, true, false])) // ➞ 2
console.log(countTrue([false, false, false, false])) // ➞ 0
console.log(countTrue([])) // ➞ 0

// const countTrue = r => r.filter(Boolean).length
