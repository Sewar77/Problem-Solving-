//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenorOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let number = prompt("Enter the Number: ");
evenorOdd(number);
