// There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. 
// To play the game or learn more about the Tower of Hanoi, check the Resources tab.

// Tower of Hanoi

// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.
// Examples

// towerHanoi(3) ➞ 7

// towerHanoi(5) ➞ 31

// towerHanoi(0) ➞ 0

// Notes

//     The amount of discs is always a positive integer.
//     1 disc can be changed per move.

// function towerHanoi(discs) {
//     return 2 ** discs - 1;
	
// }

const towerHanoi = (discs) => 2 ** discs - 1;

console.log(towerHanoi(3)); // ➞ 7
console.log(towerHanoi(5)); // ➞ 31
console.log(towerHanoi(0)); // ➞ 0