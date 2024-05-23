// If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their average speed traveled was 30mph.

// Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate as an integer (mph).
// No rounding is necessary.

// Examples

// aveSpd(18, 20, 60) ➞ 30

// aveSpd(30, 10, 30) ➞ 15

// aveSpd(30, 8, 24) ➞ 12

function aveSpd(upTime, upSpd, downSpd) {
    const distance = upSpd * (upTime / 60) * 2;
    return distance / (((distance / 2) / downSpd) + (upTime / 60));
}

// console.log(aveSpd(18, 20, 60)) // ➞ 30
// console.log(aveSpd(30, 10, 30)) // ➞ 15
// console.log(aveSpd(30, 8, 24)) // ➞ 12

console.log(aveSpd(18, 10, 30)) //, 15)
console.log(aveSpd(18, 20, 60)) //, 30)
console.log(aveSpd(30, 10, 30)) //, 15)
console.log(aveSpd(30, 8, 24)) //, 12)

// speed = distance / time

// 1 Find the distance using the information for how long it took to travel up the hill, so speed x time = 20mph x 18 mins.  (Maybe need to use 18 minutes as a decimal of an hour).
    // in this case it is six miles
// 2 Calculate time taken to get down the hill - so distance / speed.  Need to convert it into mph (So 6 miles / 60mph = 0.1 hours.  60 * 0.1 = 6 minutes).
    // 6 minutes
// 3 Add the time to up hill time so new time  + 18 mins in case of the first example
    // 18 mins (up the hill) + 6 mins (down the hill) = 24 mins
// 4 Then find the average time double the distance worked out in step 1 divided by new time which is 18 mins plus the new downhill time worked out in step three. (Need to convert minuts back to mph)
    // 12 miles / 24 mins * 60

