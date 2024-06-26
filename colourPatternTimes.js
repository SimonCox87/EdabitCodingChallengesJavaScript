// When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

// Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

//     It takes 1 second to switch between pencils.
//     It takes 2 seconds to color a square.

// See the example below for clarification.

// color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// // There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// // You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// // 10 + 4 = 14

// Examples

// colorPatternTimes(["Blue"]) ➞ 2

// colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11

// colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13

// Notes

//     Only change coloring pencils if the next color is different to the color before it.
//     Return a number in seconds.

function colorPatternTimes(cols) {
	return cols.reduce((acc,curr,i) => cols[i] != cols[i+1] && i != cols.length - 1 ? acc + 3 : acc + 2,
    0);
}

console.log(colorPatternTimes(["Blue"])); // ➞ 2
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"])); // ➞ 11
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])); // ➞ 13

// function colorPatternTimes(cl) {
// 	return cl.length*2 + cl.slice(1).reduce((a,c,i)=>c===cl[i]?a:a+1,0)
// }

// const colorPatternTimes = x => 
// x.reduce((a,c,i,r) => a + (c != r[i+1] ? 3 : 2), -1);