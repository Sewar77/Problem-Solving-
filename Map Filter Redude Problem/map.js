/*
 Double the Numbers (map)
Problem:
Write a function doubleNumbers that takes an array of numbers and returns a new array where each number is doubled.
Example Input & Output:


console.log(doubleNumbers([1, 2, 3, 4])); // [2, 4, 6, 8]
*/
// solution # 1
var myarr = [1, 2, 3, 4];
let doubled = myarr.map((element) => element * 2);
console.log(doubled);

// solution # 2
function doubleNumbers(array) {
  return array.map((element) => element * 2);
}
console.log(doubleNumbers([1, 2, 3, 4])); // [2, 4, 6, 8]

/*
Write a function capitalizeWords that takes an array of lowercase words and returns a new array where each word is capitalized.
Example Input & Output:

console.log(capitalizeWords(["hello", "world"]));
*/

capitalizeWords = function (array) {
  return array.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
};

console.log(capitalizeWords(["hello", "world"]));
console.log("--------------------------------------------");

let myarray = ["hello", "world"];
const capital = myarray.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);
console.log(capital);
console.log("--------------------------------------------");

let products = [
  { name: "laptop", price: 120, color: "white" },
  { name: "phone", price: 130, color: "white" },
  { name: "computer", price: 210, color: "white" },
  { name: "laptop computer", price: 650, color: "white" },
  { name: "computer laptop", price: 760, color: "white" },
  { name: "phone laptop", price: 987, color: "white" },
];

const discount = products.map((products) => {
  return {
    ...products,
    price: products.price * 0.5,
  };
});
console.log(discount);
