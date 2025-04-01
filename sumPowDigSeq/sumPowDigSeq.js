/*
Let's take an integer number,  start and let's do the iterative process described below:

we take its digits and raise each of them to a certain power, n, and add all those values up. (result = r1)

we repeat the same process with the value r1 and so on, k times.

Let's do it with start = 420, n = 3, k = 5
*/

function sumPowDigSeq(start, n, k) {
  let strNumber = start.toString();  
  let result;
  strNumber = strNumber.split(""); 
  for (let i = 0; i < k; i++) { //5
    for (let j = 0; j < strNumber.length; j++) { 
      result =  Number(strNumber[j] ** n);  
    }
    result += strNumber;
  }
  return result;
}

console.log(sumPowDigSeq(420, 3, 1));
