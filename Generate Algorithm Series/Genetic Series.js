/*
A genetic algorithm is based in groups of chromosomes, called populations. To start our population of chromosomes we need to generate random binary strings with a specified length.

In this kata you have to implement a function generate that receives a length and has to return a random binary strign with length characters.
*/

const generate = (length) => {
  let binaryString = "";
  for (var i = 0; i < length; i++) {
    binaryString += Math.floor(Math.random() * 2);
  }
  return binaryString;
};
console.log(generate(3)); // Example output: "10101001"
