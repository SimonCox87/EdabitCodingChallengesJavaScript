// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
// Examples

// insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

// insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

// insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

// Notes

// Each word in the phrase will be at least two characters long.

// function insertWhitespace(s) {
// 	return s.match(/[A-Z][a-z]+/g).join(" ");
// }

const insertWhitespace = (s) => s.match(/[A-Z][a-z]+/g).join(" ");

console.log(insertWhitespace("SheWalksToTheBeach")); // ➞ "She Walks To The Beach"
console.log(insertWhitespace("MarvinTalksTooMuch")); // ➞ "Marvin Talks Too Much"
console.log(insertWhitespace("TheGreatestUpsetInHistory")); // ➞ "The Greatest Upset In History"
