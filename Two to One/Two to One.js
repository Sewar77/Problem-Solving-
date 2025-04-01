/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
                  abcdefklmopqwxy

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  var comined = s1.concat(s2);
  comined = comined.split("").sort().join("");
  comined = new Set(comined);
  comined = Array.from(comined).join("");
  return comined;
}

let a = "loopingisfunbutdangerous";
let b = "lessdangerousthancoding";
console.log(longest(a, b));
