// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length 
// reaches length.
// Examples

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// function arrayOfMultiples (num, length) {
//     mult = []
// 	for (let i = 1; i<length+1; i++){
//         mult.push(i*num);
//     }
//     return mult
// }

function arrayOfMultiples (num, length) {
    return Array.from({length:length+1},(_,x) => x * num).slice(1,);
}

console.log(arrayOfMultiples(7, 5)) // ➞ [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)) // ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)) // ➞ [17, 34, 51, 68, 85, 102]

// const arrayOfMultiples = (num, length) =>
//   Array.from({ length }, (_, i) => num * (i + 1));

// function arrayOfMultiples (num, length) {
// 	return [...Array(length).keys()].map((e,i)=>(e + 1)*num);
// }

