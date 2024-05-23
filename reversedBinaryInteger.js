// Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.
// Examples

// reversedBinaryInteger(10) ➞ 5
// // 10 = 1010 -> 0101 = 5

// reversedBinaryInteger(12) ➞ 3
// // 12 = 1100 -> 0011 = 3

// reversedBinaryInteger(25) ➞ 19
// // 25 = 11001 -> 10011 = 19

// reversedBinaryInteger(45) ➞ 45
// // 45 = 101101 -> 101101 = 45

function reversedBinaryInteger(num) {
    return parseInt([...num.toString(2)].reverse().join(""),2);
	
}

// function reversedBinaryInteger(num) {
//     let bin = "";
//     while (num) {
//         if(num%2){
//             bin += "1"
//         }else { 
//             bin += "0"
//         }
//         num = Math.floor(num / 2); 
//     }
    
//     bin = [...bin].reverse().join("")

//     let binReverse = 0
//     for (let i = 0; i < bin.length; i++){
//         if(bin[i] == "1"){
//             binReverse += 2 ** i;
//         }
//     }

//     return binReverse;
// }

console.log(reversedBinaryInteger(10)); // ➞ 5
// // 10 = 1010 -> 0101 = 5

console.log(reversedBinaryInteger(12)); // ➞ 3
// // 12 = 1100 -> 0011 = 3

console.log(reversedBinaryInteger(25)); // ➞ 19
// // 25 = 11001 -> 10011 = 19

console.log(reversedBinaryInteger(45)); // ➞ 45
// // 45 = 101101 -> 101101 = 45

