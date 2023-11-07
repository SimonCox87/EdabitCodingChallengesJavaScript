// You can test for empty string like this:

// "".length === 0 ➞ true

// Use a regular expression to test for an empty string.

// const REGEXP = /your solution/
// REGEXP.test("") ➞ true

const REGEXP = /^$/;

function blank(str){
    return str.match(REGEXP);
}

console.log(blank("hello"));
console.log(blank(""));
