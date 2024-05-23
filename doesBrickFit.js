// Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).
// Examples

// doesBrickFit(1, 1, 1, 1, 1) ➞ true

// doesBrickFit(1, 2, 1, 1, 1) ➞ true

// doesBrickFit(1, 2, 2, 1, 1) ➞ false

// Notes

//     You can turn the brick with any side towards the hole.
//     We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strictly less).
//     You can't put a brick in at a non-orthogonal angle.

// (a,b,c) -- dimensions of the brick
// (w,h) -- dimensions of the hole
function doesBrickFit(a,b,c, w,h) {
    return [a*b,a*c,b*c].some((x) => x <= w * h);
	
}

// console.log(doesBrickFit(1, 1, 1, 1, 1)) // ➞ true
// console.log(doesBrickFit(1, 2, 1, 1, 1)) // ➞ true
// console.log(doesBrickFit(1, 2, 2, 1, 1)) // ➞ false

console.log(doesBrickFit(1,1,1, 1,1)); //, true, "cube into square")
console.log(doesBrickFit(1,2,1, 1,1)); //, true)
console.log(doesBrickFit(1,2,2, 1,1)); //, false)
console.log(doesBrickFit(1,2,2, 1,2)); //, true)
console.log(doesBrickFit(1,2,2, 2,1)); //, true)
console.log(doesBrickFit(2,2,2, 1,2)); //, false)

// The best way to solve this is to envisage whether the faces of the 3d shape fit into the dimensions of the hole.  To do this calulate the area of the hole and then calculate 
// the area of each of the faces so a*b, a*c and b*c if there one of these area values is the same or less than the area of the hole then the 3d shape will pass through the hole 
// returning a true value.

