function customMap(arr, callback) {
  // Your code here
  let x = [];
  for (let i = 0; i < arr.length; i++) {
    x.push(callback(arr[i]));
  }
  return x;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = customMap(numbers, function(num) {
  return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
