// Create a function that returns a counter function
function createCounter() {
  let count = 0;

  // Your code here: Return a function that increments and returns the count
  function countIncrement () {
    count++;
    return count;
  }
  return countIncrement;
}

// Create two counters using the createCounter function
let counter1 = createCounter();
let counter2 = createCounter();

// Use the counters to increment and log values
console.log(counter1())
console.log(counter1())
console.log(counter2())
console.log(counter2())
// Expected Output:
// 1
// 2
// 1
// 2
