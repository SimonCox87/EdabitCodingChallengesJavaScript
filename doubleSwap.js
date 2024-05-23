// Write a function to replace all instances of character c1 with character c2 and vice versa.
// Examples

// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&")
// ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9")
// ➞ "129 985 556 799 888"

function doubleSwap(str, c1, c2) {
	return [...str].map((x) => x==c1 ? x=c2 : x==c2 ? x=c1 : x).join("");
}

console.log(doubleSwap( "aabbccc", "a", "b")); // ➞ "bbaaccc"

console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"));
// ➞ "random w&rds writt#n h#r#"

console.log(doubleSwap("128 895 556 788 999", "8", "9"));
// ➞ "129 985 556 799 888"

// const doubleSwap = (str, a, b) =>
//   str.replace(RegExp(`[${a + b}]`, 'g'), m => (m === a ? b : a)) 

// - replace method takes two arguments.  In this case the regex expression, which consists of the RegExp constructor and a function that compares each element in str with pararameters
//   a/b and swaps them accordingly.
// - RegExp function takes two parameters in this instance the actual regex expression and the global flag.  The first parameter is the regex pattern which uses string intepolation
//   as denoted usingthe "$" symbol and including the variables "a" and "b" in curly braces as per the convention when using a variable in string intepolation.  The "+" operator is used
//   to separate the variables.
