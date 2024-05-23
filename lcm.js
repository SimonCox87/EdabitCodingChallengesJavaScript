// Write a function that returns the least common multiple (LCM) of two integers.
// Examples

// lcm(9, 18) ➞ 18

// lcm(8, 5) ➞ 40

// lcm(17, 11) ➞ 187

// Notes

//     Both values will be positive.
//     The LCM is the smallest integer that is divisible by both numbers such that the remainder is zero.

function lcm(n1, n2) {
    max = Math.max(...arguments);
	for (let i = max; i < (n1*n2) + 1; i+=max) {
        if (!(i%n1) && !(i%n2)){
            return i;
        }
        
    }

}

// console.log(lcm(9, 18)); // ➞ 18
// console.log(lcm(8, 5)); // ➞ 40
// console.log(lcm(17, 11)); // ➞ 187

console.log(lcm(9, 18)); //, 18)
console.log(lcm(8, 5)); //, 40)
console.log(lcm(17, 11)); //, 187)
console.log(lcm(17, 5)); //, 85)
console.log(lcm(3, 12)); //, 12)
console.log(lcm(9, 9)); //, 9)

