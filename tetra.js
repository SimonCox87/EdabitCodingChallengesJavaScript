// A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.

// Create a function that takes an integer n and returns the nth tetrahedral number.

// Alternative Text
// Examples

// tetra(2) ➞ 4

// tetra(5) ➞ 35

// tetra(6) ➞ 56

const tetra = (n) => (n*(n+1)*(n+2)) /6

console.log(tetra(2)) // ➞ 4
console.log(tetra(5)) // ➞ 35
console.log(tetra(6)) // ➞ 56

// function tetra(n) {
// 	if(n<=1){
// 		return 1;
// 	}
// 	let baseTriangle = 0;
// 	for(let index=1; index<=n; index++){
// 		baseTriangle += index;
// 	}
// 	return baseTriangle+tetra(n-1);
// }

