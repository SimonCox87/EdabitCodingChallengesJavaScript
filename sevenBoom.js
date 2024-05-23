// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 
// in the array".

// Examples

// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.

function sevenBoom(arr) {
    const sevArr = arr.filter((i) => String(i).includes("7")).toString();

    if (sevArr) {
        return "Boom!";
    }

    return "there is no 7 in the array";

}

// function sevenBoom(arr) {
//     sevStr = ""
//     arr.toString().split(",").forEach(i => {
//         if (i.includes("7")){
//             sevStr += i;
//         }        
//     });

//     if (sevStr){
//         return 'Boom!';
//     }
    
//     return 'there is no 7 in the array.';
	
// }

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])) // ➞ "Boom!"
// // 7 contains the number seven.

console.log(sevenBoom([8, 6, 33, 100])) // ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

console.log(sevenBoom([2, 55, 60, 97, 86])) // ➞ "Boom!"
// // 97 contains the number seven.

// const sevenBoom = function(arr) {
// 	return (arr.join().includes('7') ? "Boom!" : "there is no 7 in the array");
// }