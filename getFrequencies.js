// Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique 
// elements and the values are the frequency in which those elements occur.

// Examples

// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

// getFrequencies([]) ➞ {}

// Notes

//     If given an empty array, return an empty object (see example #4).
//     The object should be in the same order as in the input array.

function getFrequencies(arr) {   

    return Object.fromEntries(
        arr.map((k,v) => [k, arr.filter(((i) => i == k)).length])
    
    );
	
}

console.log(getFrequencies(["A", "B", "A", "A", "A"])) // ➞ { A: 4, B: 1 }
console.log(getFrequencies([1, 2, 3, 3, 2])) // ➞ { "1": 1, "2": 2, "3": 2 }
console.log(getFrequencies([true, false, true, false, false])) // ➞ { true: 2, false: 3 }
console.log(getFrequencies([])) // ➞ {}

// Using reduce method to count the number of occurences of an element.  Where the parameters of the function are the actual array to be searched
// and the element to be searched for.

// Syntax of arr.reduce

// array.reduce( function(total, currentValue, 
//     currentIndex, arr), initialValue )

// const arr = [1, 2, 3, 2, 3, 4, 5, 
//     5, 6, 1, 1, 4, 5, 7, 8, 8];

// function count(arr, element) {
// return arr.reduce((ele, arrayEle) =>
// (arrayEle == element ? ele + 1 : ele), 0);
// };

// console.log(count(arr, 1));

// const getFrequencies = arr =>
//   arr.reduce((map, item) => {
//     map[item] = map[item] + 1 || 1;
//     return map;
//   }, {});

