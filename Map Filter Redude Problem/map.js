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
