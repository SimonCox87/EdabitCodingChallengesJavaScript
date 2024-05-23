// You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.

// Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".
// Examples

// mostExpensive ({
//   "Diamond Earrings": 980,
//   "Gold Watch": 250,
//   "Pearl Necklace": 4650
// }) ➞  "The most expensive one is the Pearl Necklace"

// mostExpensive({
//   "Silver Bracelet": 280,
//   "Gemstone Earrings": 180,
//   "Diamond Ring": 3500
// }) ➞ "The most expensive one is the Diamond Ring"

// Notes

//     There will always be at least one item in the object.
//     There will always be only one highest priced item (i.e. there will not be two items with the joint highest value).

function mostExpensive(obj) {
  // for (const key in obj) { // Solution using for in loop over object
  //   if (obj[key] == Math.max(...Object.values(obj))) { 
  //     return `The most expensive one is the ${key}`
  //   }
  // }

  return `The most expensive one is the ${Object.keys(obj).find(i => // Solution using find
    obj[i] == Math.max(...Object.values(obj)))}`;

  // return Object.keys(obj).filter(key => obj[key] == Math.max(...Object.values(obj))); // Solution using filter

}


console.log(mostExpensive({
  "Diamond Earrings": 50000,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
})); // ➞  "The most expensive one is the Pearl Necklace"

console.log(mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
})) // ➞ "The most expensive one is the Diamond Ring"


// const mostExpensive = obj => {
// 	const pricey = Object.entries(obj).sort(([, a], [, b]) => b - a)[0][0];
// 	return `The most expensive one is the ${pricey}`;

// function mostExpensive(obj) {
// 	let index = Object.values(obj).indexOf(Math.max(...Object.values(obj)));
// 	return `The most expensive one is the ${Object.keys(obj)[index]}`
// }

// const mostExpensive = obj => (
//   max = Math.max(...Object.values(obj)),
//   maxItem = Object.keys(obj).filter(x => obj[x] === max),
//   `The most expensive one is the ${maxItem}`
// );

// function mostExpensive(obj) {
//   const bling = Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
//   return `The most expensive one is the ${bling}`

// const mostExpensive = obj =>
// 	`The most expensive one is the ${Object.keys(obj).reduce((a, c) => obj[a] > obj[c] ? a : c)}`