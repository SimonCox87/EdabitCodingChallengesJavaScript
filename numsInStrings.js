// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are 
// no strings containing numbers, return an empty array.

// Examples

// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]

function numInStr(arr) {
    numArr = []
    arr.forEach((i) => {    
        for (let j = 0; j < i.length; j++) {
            if (parseInt(i[j],10)){
                numArr.push(i);
                break
            }
        }

    });

    return numArr;
	
}

    // return arr.filter((i) => i.match(/\d/));

console.log(numInStr(["1a", "a", "2b", "b"])) // ➞ ["1a", "2b"]
console.log(numInStr(["abc", "abc10"])) // ➞ ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])) // ➞ ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"])) // ➞ ["test1"]
console.log(numInStr(['this IS','10xYZ', 'xy2K77', 'Z1K2W0', 'xYz'])) //, ['10xYZ', 'xy2K77', 'Z1K2W0'])

// const testSym = item => {
//     return Number(item) ? true : false;
// }

// const numInStr = (arr) => {
//     return arr.filter(item => {
//         return [...item].some(testSym) ? item : null;
//     });
// }
