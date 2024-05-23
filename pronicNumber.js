// A pronic number (or otherwise called as heteromecic) is a number which is a product of two consecutive integers, that is, a number of the form n(n + 1). Create a function that 
// determines whether a number is pronic or not.
// Examples

// isHeteromecic(0) ➞ true
// // 0 * (0 + 1) = 0 * 1 = 0

// isHeteromecic(2) ➞ true
// // 1 * (1 + 1) = 1 * 2 = 2

// isHeteromecic(7) ➞ false

// isHeteromecic(110) ➞ true
// // 10 * (10 + 1) = 10 * 11 = 110

// isHeteromecic(136) ➞ false

// isHeteromecic(156) ➞ true

function isHeteromecic(n) {
	return Math.floor(n ** 0.5) * (Math.floor(n ** 0.5) + 1) == n;
}

// const isHeteromecic = (n) => Math.floor(n ** 0.5) * (Math.floor(n ** 0.5) + 1) == n;

console.log(isHeteromecic(0)) // ➞ true
// // 0 * (0 + 1) = 0 * 1 = 0
console.log(isHeteromecic(2)); // ➞ true
// // 1 * (1 + 1) = 1 * 2 = 2
console.log(isHeteromecic(7)); // ➞ false
console.log(isHeteromecic(110)); // ➞ true
// // 10 * (10 + 1) = 10 * 11 = 110
console.log(isHeteromecic(136)); // ➞ false
console.log(isHeteromecic(156)); // ➞ true