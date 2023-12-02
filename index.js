function sumOfSquares(arr, squareCallback) {
  // Your code here
  let sumOfSquares = 0;
  for (let i = 0; i < arr.length; i++) {
   sumOfSquares += squareCallback(arr[i]);
  }
  return sumOfSquares;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
let result = sumOfSquares(numbers, function(num) {
  return num * num;
});
console.log(result); // Output: 55 (1^2 + 2^2 + 3^2 + 4^2 + 5^2)
