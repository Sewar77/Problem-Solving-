/*
Problem:
Write a function sumNumbers that takes an array of numbers and returns the sum of all the numbers.
Example Input & Output:

js
Copy
Edit
console.log(sumNumbers([1, 2, 3, 4])); // 10
*/


sumNumbers = function (array){
    return array.reduce((a,b) => a+b);
}
console.log(sumNumbers([1, 2, 3, 4])); // 10


var myarray = [1, 2, 3, 4];
const summation  = myarray.reduce((a,b) => a+b);
console.log(summation)