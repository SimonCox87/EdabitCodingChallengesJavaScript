// Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The 
// function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.

// Examples

// combinations(2, 3) ➞ 6

// combinations(3, 7, 4) ➞ 84

// combinations(2, 3, 4, 5) ➞ 120

function combinations(items) {
	return [...arguments].reduce((acc,cur) => cur ? acc * cur: acc + cur);
}

console.log(combinations(2, 3)); // ➞ 6
console.log(combinations(3, 7, 4)); // ➞ 84
console.log(combinations(2, 3, 4, 5)); // ➞ 120
console.log(combinations(6, 7, 0)) //, 42)