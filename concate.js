// // Create a function that concatenates n input arrays, where n is variable.
// // Examples

// // concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// // concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// // concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// // concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

// function concat(...args){
//     return args.concat(...args).slice(args.length);
// }

const concat = (...args) => args.flat()

console.log(concat([1, 2, 3], [4, 5], [6, 7])) // ➞ [1, 2, 3, 4, 5, 6, 7]
console.log(concat([1], [2], [3], [4], [5], [6], [7])) // [1, 2, 3, 4, 5, 6, 7]
console.log(concat([1, 2], [3, 4])) // ➞ [1, 2, 3, 4]
console.log(concat([4, 4, 4, 4, 4])) // ➞ [4, 4, 4, 4, 4]

// function concat(...args) {
// 	return [].concat(...args)
// }

