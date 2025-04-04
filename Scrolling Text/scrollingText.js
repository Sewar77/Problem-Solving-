/*
Let's create some scrolling text!

Your task is to complete the function which takes a string, 
and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
*/

function scrollingText(text) {
  let a = [];
  for (let letter = 0; letter < text.length; letter++) {
    a.push((text.slice(letter) + text.slice(0, letter)).toUpperCase());
  }
  return a;
}

console.log(scrollingText("goodluck"));
