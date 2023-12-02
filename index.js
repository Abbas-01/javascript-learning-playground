function delayedExecution(callback, delay) {
  // Your code here
  setTimeout(callback, delay);
}

// Example usage:
delayedExecution(function() {
  console.log("Delayed execution after 2000 milliseconds");
}, 2000);
// Output: (after 2 seconds) Delayed execution after 2000 milliseconds
