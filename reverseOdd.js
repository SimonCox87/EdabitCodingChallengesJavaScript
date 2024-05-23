// Given a string, reverse all the words which have odd length. The even length words are not changed.
// Examples

// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"

// Notes

// There is exactly one space between each word and no punctuation is used.

function reverseOdd(str) {
	return str.split(" ").map((i) => i.length % 2 ? i.split("").reverse().join("") : i).join(" ");    
}
        


console.log(reverseOdd("Bananas")); // ➞ "sananaB"

console.log(reverseOdd("One two three four")); // ➞ "enO owt eerht four"

console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
// ➞ "Make sure you only reverse words of odd length"

// function reverseOdd(str) {
//     return str.split(" ").map(w => w.length%2 ? [...w].reverse().join("") : w).join(" ");
//   }