//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  var counter = 0;
  for (var i = 0; i < arr.length; i ++) {
    if (arr[i] > 0) {
      counter += arr[i];
    }
  }
  return counter;
}

var arr = [1, 2, 3, -2, -9, 23, 1,3,90,-12]; //30
console.log(positiveSum(arr));
