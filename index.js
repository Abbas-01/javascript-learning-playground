let x = [1, 5];

let y = x;

let w = [1, 5];
console.log(`${x === y}`); // Returns True
console.log(`${x == y}`); // Returns True
console.log(`${x === w}`); // Returns False
console.log(`${x == w}`); // Returns False