//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
/*
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"
*/

function replace(s) {
  var str = s.split("");
  for (var v = 0; v < str.length; v++) {
    if (
      str[v] === "a" ||
      str[v] === "e" ||
      str[v] === "i" ||
      str[v] === "o" ||
      str[v] === "u" ||
      str[v] === "A" ||
      str[v] === "E" ||
      str[v] === "I" ||
      str[v] === "O" ||
      str[v] === "U"
    ) {
      str[v] = "!";
    }
  }
  return str.join("");
}
console.log(replace("ABCDE"));
