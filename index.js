function executeIf(condition, ifTrue, ifFalse) {
  // Your code here
  if (condition) {
    ifTrue();
  } else {
    ifFalse();
  }
}

// Example usage:
executeIf(false, function() {
  console.log("It's true!");
}, function() {
  console.log("It's false!");
});
// Output: It's true!
