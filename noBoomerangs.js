// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of 
// length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]

// Create a function that returns the total number of boomerangs in an array.

// To illustrate:

// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

// Be aware that boomerangs can overlap, like so:

// [1, 7, 1, 7, 1, 7, 1]
// // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

// Examples

// countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

// countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

// countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

// Notes

// [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.

function countBoomerangs(arr){
    let boom = 0;

    for (let i = 0; i < arr.length - 2; i++){
        if (arr[i] == arr[i+2] && arr[i] != arr[i+1]) {
            boom ++;
        }
            
    }  
    
    return boom
        
}


// [3, 7, 3], [1, -1, 1], [5, 6, 5]

// Create a function that returns the total number of boomerangs in an array.

// To illustrate:

// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

// Be aware that boomerangs can overlap, like so:

// [1, 7, 1, 7, 1, 7, 1]
// // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

// Examples

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])); // ➞ 2

console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])); // ➞ 1

console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])); // ➞ 0

console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

// Be aware that boomerangs can overlap, like so:

console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));
// // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

// function countBoomerangs(arr) {
// 	return arr.reduce((acc , e , index) => acc + (e === arr[index+2] && e!= arr[index+1]) , 0);
// }

// const countBoomerangs = arr => {
// 	let collection = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if ((arr[i] === arr[i+2]) && (arr[i] != arr[i+1])) {
// 			collection++;
// 		}
// 	}
// 	return collection;
// }

// var  countBoomerangs = arr => {let sum=0
// 	arr.forEach((e,i)=> e == arr[i+2]&& e!= arr[i+1]? sum+=1 :sum)
// 	return sum
// }



