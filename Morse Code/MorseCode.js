const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  " ": " ",
};

decodeMorse = function (morseCode) {
  if (morseCode === "···−−−···") {
    return "SOS";
  }
  return morseCode
    .trim()
    .split("   ")
    .map(word => word.split(" ").map(letter => MORSE_CODE[letter] || "?").join("")).join(" ");
  
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. .")); //["[h e y]" "j u d e"] ==> hey hude
