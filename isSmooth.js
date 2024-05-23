// Carlos is a huge fan of something he calls smooth sentences.

// A smooth sentence is one where the last letter of each word is identical to the first letter the following word (and not case sensitive, so "A" would be the same as "a").

// The following would be a smooth sentence "Carlos swam masterfully" because "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins 
// with an "m".

// Create a function that determines whether the input sentence is a smooth sentence, returning a boolean value true if it is, false if it is not.
// Examples

// isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true

// isSmooth("Someone is outside the doorway") ➞ false

// isSmooth("She eats super righteously") ➞ true

// Notes

//     The last and first letters are case insensitive.
//     There will be no punctuation in each sentence.

// function isSmooth(sentence) {
// 	return sentence.toLowerCase().split(" ").map((e,i,a) => 
//         [e[e.length-1],String(a[i+1])[0]]).slice(0,-1).every((e) => e[0] == e[1]);
// }

function isSmooth(sentence) {
    matches = sentence.match(/([a-z]) \1/ig);
    // if (matches == null) {
    //     return false
    // }
    return matches == null ? false : matches.length == sentence.split(" ").length - 1;
    // return matches.length == sentence.split(" ").length - 1;
    
}

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids")); // ➞ true
console.log(isSmooth("Someone is outside the doorway")); // ➞ false
console.log(isSmooth("She eats super righteously")); // ➞ true

// function isSmooth(sentence) {
// 	let arr = sentence.toLowerCase().split(' ');

// 	return arr.slice(1).every((word, i) => arr[i].endsWith(word[0]));       // very nice
// }

// const isSmooth = sentence => !/(\w) (?!\1)/i.test(sentence); // Not sure if this works

// function isSmooth(sentence) {
//     let words = sentence.toLowerCase().split(' ');
  
//     for (let i = 1; i < words.length; i++) {     // possibly most efficient solution as it terminates as soon as match not found
//       if (!words[i - 1].endsWith(words[i][0])) {
//         return false;
//       }
//     }
  
//     return true;
//   }

//   const isSmooth = sentence =>
//   sentence
//     .match(/\w \w/g)
//     .every(pair => new Set(pair.toLowerCase()).size === 2);