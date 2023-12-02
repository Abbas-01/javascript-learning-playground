function customFilter(arr, callback) {
  // Your code here
  let x = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      x.push(arr[i]);
    }
}
return x;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = customFilter(numbers, function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]
