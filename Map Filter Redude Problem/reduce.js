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


/*
Count Characters (reduce)
Problem:
Write a function countCharacters that takes a string
and returns an object where keys are characters and values are the number of times they appear.
Example Input & Output:

console.log(countCharacters("hello")); 
// { h: 1, e: 1, l: 2, o: 1 }
*/

let obj = {};
countCharacters = function(word){
    return word.reduce((a,b) => )
}

console.log(countCharacters("hello")); 

