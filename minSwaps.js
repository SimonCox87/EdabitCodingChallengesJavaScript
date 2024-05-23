// Write a function that returns the minimum number of swaps to convert the first binary string into the second.
// Examples

// minSwaps("1100", "1001") ➞ 1

// minSwaps("110011", "010111") ➞ 1

// minSwaps("10011001", "01100110") ➞ 4

// Notes

//     Both binary strings will be of equal length.
//     Both binary strings will have an equal number of zeroes and ones.
//     A swap is switching two elements in a string (swaps do not have to be adjacent).

function minSwaps(s1, s2) {
	return [...s1].filter((i,ind) => s1[ind] != s2[ind] ? i : 0).length / 2;
}

// const minSwaps = (s1,s2) => [...s1].filter((i,ind) => s1[ind] != s2[ind] ? i : 0).length / 2;

// console.log(minSwaps("1100", "1001")); // ➞ 1      12 , 9
// console.log(minSwaps("110011", "010111")); // ➞ 1      51 , 23
// console.log(minSwaps("10011001", "01100110")); // ➞ 4

console.log(minSwaps("1001", "1001")) //, 0)
console.log(minSwaps("1100", "1001")) //, 1)
console.log(minSwaps("110011", "010111")) //, 1)
console.log(minSwaps("1100", "0011")) //, 2)
console.log(minSwaps("110011", "001111"))//, 2)
console.log(minSwaps("10011001", "01100101"))//, 3)
console.log(minSwaps("11111000001100", "10110010100110"))//, 3)
console.log(minSwaps("01100100100111", "10110010100110")) //, 3)
console.log(minSwaps("11110011001", "01100110111")) //, 3)
console.log(minSwaps("100110001", "010100110")) //, 3)
console.log(minSwaps("100101011", "011001101")) //, 3)
console.log(minSwaps("10011001", "01100110")) //, 4)

// function minSwaps(s1, s2) {
// 	return s1 .split('').filter((char,i) => char !=s2[i]).length/2;
// }

// const minSwaps = (a,b) => [...a].filter((e,i) => e!==b[i]).length/2

// const minSwaps = (s1, s2) =>
//   ((parseInt(s1, 2) ^ parseInt(s2, 2)).toString(2).match(/1/g) || []).length / 2;
