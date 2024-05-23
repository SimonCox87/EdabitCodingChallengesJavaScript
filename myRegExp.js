// Create a RegExp myRegExp to test if a string is a valid pin or not.

// A valid pin has:

//     Exactly 4 or 6 characters.
//     Only numerical characters (0-9).
//     No whitespace.

// Examples

// myRegExp.test("1234") ➞ true

// myRegExp.test("45135") ➞ false

// myRegExp.test("89abc1") ➞ false

// myRegExp.test("900876") ➞ true

// myRegExp.test(" 4983") ➞ false

// Notes

//     Empty strings should return false when tested.

const myRegExp = new RegExp(/^\d{4}$|^\d{6}$/);

console.log(myRegExp.test("1234")); // ➞ true
console.log(myRegExp.test("45135")); // ➞ false
console.log(myRegExp.test("89abc1")); // ➞ false
console.log(myRegExp.test("900876")); // ➞ true
console.log(myRegExp.test(" 4983")); // ➞ false

// const myRegExp = /^\d{4}(?:\d\d)?$/;
// const myRegExp = new RegExp( /^(\d{4}|\d{6})$/ );
// const myRegExp = /^(?:\d\d){2,3}$/;
// const myRegExp = /^(?:\d\d){2,3}$/;
// const myRegExp = /^(\d{4}|\d{6})$/