// Create two functions:

//     The first is isOdd() to check if a given number is odd using bitwise operator.
//     The second is isEven() to check if a given input is even using regular expressions.

// Use of % operator is disallowed.
// Examples

// isOdd(3) ➞ "Yes"
// // Use Bitwise Operator

// isOdd(58) ➞ "No"
// // Use Bitwise Operator

// isEven("0") ➞ "Yes"
// // Use Regular Expression

// isEven("-99") ➞ "No"
// // Use Regular Expression

// Notes

//     Input will only be integers (positive/negative/zero).
//     For the second function, input will be numbers in string.

// Use Bitwise Operator (% operator disallowed)
function isOdd(number) {
	return number & 1 ? "Yes" : "No";
}


// Use Regular Expression (% operator disallowed)
function isEven(number) {
	return number.match('[02468]$') ? "Yes" : "No";
}

console.log(isOdd(3)) // ➞ "Yes"
// // Use Bitwise Operator

console.log(isOdd(58)) // ➞ "No"
// // Use Bitwise Operator

console.log(isEven("0")); // ➞ "Yes"
// // Use Regular Expression

console.log(isEven("-99")); // ➞ "No"
// // Use Regular Expression


