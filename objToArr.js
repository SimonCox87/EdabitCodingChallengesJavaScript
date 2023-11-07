// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// Examples

// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

// function toArray(obj) {
//     let objLst = []
// 	for (const i in obj){
//         objLst.push([i, obj[i]]);
//     }
//     return objLst;
// }

// function toArray(obj) {
//     let objLst = []
//     Object.entries(obj).forEach((x) => {
//         objLst.push(x);
//     });
//     return objLst;
// }

const toArray = (obj) =>Object.entries(obj);

console.log(toArray({ a: 1, b: 2 })) // ➞ [["a", 1], ["b", 2]]
console.log(toArray({ shrimp: 15, tots: 12 })) // ➞ [["shrimp", 15], ["tots", 12]]
console.log(toArray({})) // ➞ []

// function toArray(obj) {
// 	return Object.keys(obj).map(x => [x, obj[x]]);
// }

// const toArray = Object.entries;

