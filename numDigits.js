// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
// Examples

// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10

// num_of_digits(0) ➞ 1

function num_of_digits(num) {
    return num ? Math.floor(Math.log10(Math.abs(num)))+1:1;
}

// console.log(num_of_digits(1000)) // ➞ 4
// console.log(num_of_digits(12)) // ➞ 2
// console.log(num_of_digits(1305981031)) // ➞ 10
// console.log(num_of_digits(0)) // ➞ 1

console.log(num_of_digits(13124)) //, 5)
console.log(num_of_digits(0)) //, 1)
console.log(num_of_digits(-12381428)) //, 8)
console.log(num_of_digits(12)) //, 2)
console.log(num_of_digits(42)) //, 2)
console.log(num_of_digits(1000)) //, 4)
console.log(num_of_digits(136)) //, 3)
console.log(num_of_digits(1000000000)) //, 10)
console.log(num_of_digits(2147483647)) //, 10)
console.log(num_of_digits(-2147483647)) //, 10)