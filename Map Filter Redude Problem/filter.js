/*
Problem:
Write a function filterEvenNumbers that takes an array of numbers
and returns a new array containing only even numbers.
Example Input & Output:

js
Copy
Edit
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
*/
//solution 1
function filterEvenNumbers(array){
    return array.filter(element => element % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
//solution 2 
var nyarrr = [1, 2, 3, 4, 5, 6];
const evens = nyarrr.filter(e => e % 2 === 0);
console.log(evens);