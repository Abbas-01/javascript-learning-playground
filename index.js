let x = [{
  name: "Abbas",
  age: 15
}, {
    name: "Asad",
    age: 16
}, {
    name: "Farzain",
    age: 16
}, {
    name: "Shaheer",
    age: 18
}];

x.forEach((a) => {
    a.nameLength = a.name.length;
})
console.log(x);

