// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
// Examples

// add_ly = add_suffix("ly")

// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"

// add_less = add_suffix("less")

// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"

// function add_suffix(suffix) {
// 	return function(x){
//         return x + suffix;
//     }
// }

const add_suffix = suffix=>x=>x+suffix;

const add_ly = add_suffix("ly");
console.log(add_ly("hopeless"));
console.log(add_ly("total"));

const add_less = add_suffix("less");
console.log(add_less("fear"));
console.log(add_less("ruth"));
