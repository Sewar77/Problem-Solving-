/*
Define a function that takes in two non-negative integers 
a
a and 
b
b and returns the last decimal digit of 
a
b
a 
b
 . Note that 
a
a and 
b
b may be very large!

For example, the last decimal digit of 
9
7
9 
7
  is 
9
9, since 
9
7
=
4782969
9 
7
 =4782969. The last decimal digit of 
(
2
200
)
2
300
(2 
200
 ) 
2 
300
 
 , which has over 
1
0
92
10 
92
  decimal digits, is 
6
6. Also, please take 
0
0
0 
0
  to be 
1
1.

You may assume that the input will always be valid.

Examples
lastDigit(4n, 1n)            // returns 4n
lastDigit(4n, 2n)            // returns 6n
lastDigit(9n, 7n)            // returns 9n  
lastDigit(10n,10000000000n)  // returns 0n
*/
function lastDigit(n, m) {
    if (m === 0n) return 1n;
  
    const base = BigInt(n) % 10n;
  
    const cycles = {
      0n: [0n],
      1n: [1n],
      2n: [2n, 4n, 8n, 6n],
      3n: [3n, 9n, 7n, 1n],
      4n: [4n, 6n],
      5n: [5n],
      6n: [6n],
      7n: [7n, 9n, 3n, 1n],
      8n: [8n, 4n, 2n, 6n],
      9n: [9n, 1n],
    };
  
    const cycle = cycles[base];
    const index = Number((m - 1n) % BigInt(cycle.length));
    return cycle[index];
  }
  
  console.log(lastDigit(9n, 7n)); // 9n
  console.log(
    lastDigit(
      1606938044258990275541962092341162602522202993782792835301376n,
      2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376n
    )
  ); // Should return the correct digit!
  