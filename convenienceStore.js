// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay 
// for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies 
// gives you 6.25 + 2 + .25 + 0 = 8.50.

// Examples

// changeEnough([2, 100, 0, 0], 14.11) ➞ false

// changeEnough([0, 0, 20, 5], 0.75) ➞ true

// changeEnough([30, 40, 20, 5], 12.55) ➞ true

// changeEnough([10, 0, 0, 50], 3.85) ➞ false

// changeEnough([1, 0, 5, 219], 19.99) ➞ false

// Notes

//     quarter: 25 cents / $0.25
//     dime: 10 cents / $0.10
//     nickel: 5 cents / $0.05
//     penny: 1 cent / $0.01

function changeEnough(change, amountDue) {
    return [change[0]*0.25,change[1]*0.10,change[2]*0.05,change[3]*0.01].reduce((a,b)=> a+b) >= amountDue;	
}

console.log(changeEnough([2, 100, 0, 0], 14.11)) // ➞ false
console.log(changeEnough([0, 0, 20, 5], 0.75)) // ➞ true
console.log(changeEnough([30, 40, 20, 5], 12.55)) // ➞ true
console.log(changeEnough([10, 0, 0, 50], 3.85)) // ➞ false
console.log(changeEnough([1, 0, 5, 219], 19.99)) // ➞ false

// function changeEnough(change, amountDue) {
// 	let sum = change[0]*0.25 + change[1]*0.1 + change[2]*0.05 + change[3]*0.01;
// 	return sum >= amountDue;
// }

// changeEnough=(a,b)=>(a[0]/4+a[1]/10+a[2]/20+a[3]/100)>=b

// function changeEnough(change, amountDue) {
// 	let [q,d,n,p] = change;
// 	return (q*.25) + (d*.10) + (n*.05) + (p*.01) >= amountDue;
// }

