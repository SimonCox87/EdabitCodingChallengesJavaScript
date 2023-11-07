// Create a function that counts the integer's number of digits.
// Examples

// count(318) ➞ 3
 
// count(-92563) ➞ 5
 
// count(4666) ➞ 4

// count(-314890) ➞ 6

// count(654321) ➞ 6

// count(638476) ➞ 6

function count(n) {
	return !n ? 1:Math.ceil(Math.log10(Math.abs(n)))
}

const count = (n) => !n ? 1:Math.ceil(Math.log10(Math.abs(n)))

console.log(count(318)) // ➞ 3
console.log(count(-92563)) // ➞ 5
console.log(count(4666)) // ➞ 4
console.log(count(-314890)) // ➞ 6
console.log(count(654321)) // ➞ 6
console.log(count(638476)) // ➞ 6

// let [numVector, resVector] = [
//     [0, 318, -92563, 4666, -314890, 654321, 638476, 12345, 1289396, -1232323, 12839393, -231273683],
//     [1, 3, 5, 4, 6, 6, 6, 5, 7, 7, 8, 9]
//   ]


// console.log(numVector.map((x)=> count(x)));


function count(n) {
	return n/10|0?1+count(n/10):1
}