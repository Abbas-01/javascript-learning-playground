let x = {
    name: "Abbas",
    age: 16
};
let y = {
  father: "Ashiq",
  Death: 2008
};
let z = {...x, ...y};
console.log(z);