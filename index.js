function outer() {
  let outerVar = 'I am from the outer function';

  function inner() {
      // Your code here: Access outerVar and log it
      return outerVar;
  }

  // Your code here: Return the inner function
  return inner;
}

// Create a closure by assigning the inner function to a variable
let closure = outer();

// Call the closure to log the outer variable
console.log(closure())
// Expected Output: I am from the outer function
