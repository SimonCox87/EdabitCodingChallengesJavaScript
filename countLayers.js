// Write a function that counts how many concentric layers a rug has.
// Examples

// countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ]) ➞ 2

// countLayers([
//   "AAAAAAAAA",
//   "ABBBBBBBA",
//   "ABBAAABBA",
//   "ABBBBBBBA",
//   "AAAAAAAAA"
// ]) ➞ 3

// countLayers([
//   "AAAAAAAAAAA",
//   "AABBBBBBBAA",
//   "AABCCCCCBAA",
//   "AABCAAACBAA",
//   "AABCADACBAA",
//   "AABCAAACBAA",
//   "AABCCCCCBAA",
//   "AABBBBBBBAA",
//   "AAAAAAAAAAA"
// ]) ➞ 5

// Notes

//     Multiple layers can share the same component so count them separately (example #2).
//     Layers will be horizontally and vertically symmetric.
//     There will be at least one layer for each rug.

// function countLayers(rug) {
// 	return new Set(rug).size;
// }

const countLayers = (rug) => new Set(rug).size;
console.log(countLayers([
  "AAAA",
  "ABBA",
  "AAAA"
])); // ➞ 2

console.log(countLayers([
  "AAAAAAAAA",
  "ABBBBBBBA",
  "ABBAAABBA",
  "ABBBBBBBA",
  "AAAAAAAAA"
])); // ➞ 3

console.log(countLayers([
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"
])); // ➞ 5