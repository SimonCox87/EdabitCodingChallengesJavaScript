// Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price 
// after the discount.

// Alternative Text
// Examples

// dis(1500, 50) ➞ 750

// dis(89, 20) ➞ 71.2

// dis(100, 75) ➞ 25

// Notes

// Your answer should be rounded to two decimal places.

// function dis(price, discount) {
//     return price - (price * (discount/100));
// }

const dis = (price, discount) => parseFloat((price-(price*(discount/100))).toFixed(2));

// console.log(dis(1500, 50)) // ➞ 750
// console.log(dis(89, 20)) // ➞ 71.2
// console.log(dis(100, 75)) // ➞ 25

console.log(dis(100, 75)) //, 25)
console.log(dis(211, 50)) //, 105.5)
console.log(dis(593, 61)) //, 231.27)
console.log(dis(1693, 80)) //, 338.6)
console.log(dis(700, 10)) //, 630)