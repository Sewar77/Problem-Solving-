/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncode(word) {
  word = word.toLowerCase();
  let newstr = word.split("");
  for (var char = 0; char < newstr.length; char++) {
    if (word.split(newstr[char]).length - 1 > 1) {
      newstr[char] = ")";
    } else {
      newstr[char] = "(";
    }
  }
  return newstr.join("");
}

console.log(duplicateEncode("recede"));
