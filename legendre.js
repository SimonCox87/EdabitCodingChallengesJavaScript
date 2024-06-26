// Legendre's formula finds the exponent of the largest power of some prime p that divides (is a factor of) the factorial of some number n.

// Legendre's formula example (p = 2 and n = 27):

// Legendre's Formula

// So 2^23 is the largest power of 2 that divides 27!.

// The formula returns the sum of many fractions (rounded down) with n as the numerator and a steadily increasing power of p as the denominator, stopping when it exceeds the numerator.

// To illustrate:

// p = 5
// n = 100

// int(100/5) + int(100/25)
// // No 100/125 because 125 > 100.

// p = 2
// n = 128

// int(128/2) + int(128/4) + int(128/8) + ... + int(128/128)

// Given p and n, return the result of Legendre's formula (see Resources).
// Examples

// legendre(5, 100) ➞ 24

// legendre(2, 128) ➞ 127

// legendre(3, 50) ➞ 22

// Notes

//     p and n will be positive integers.
//     When p exceeds n, the result should be 0.

function legendre(p, n) {
    let exp = 1;
    let sumExp = 0;
    while (p ** exp <= n) {
        sumExp += parseInt(n / (p ** exp));
        exp++;
    }
    return sumExp;
}

// function prod(n) {
//     return n ? n + prod(n-1) : n; 
// }

// function fact(n) {
//     return n > 1 ? n * fact(n-1) : n;
// }

console.log(legendre(5, 100)); // ➞ 24
// console.log(legendre(2, 128)); // ➞ 127
// console.log(legendre(3, 50)); // ➞ 22


