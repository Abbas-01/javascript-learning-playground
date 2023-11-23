// const names = ["Abbas", "Ali", "Asad", "Azlan", "Azan"];
// const [one, two, ...three] = names;
// console.log(three)
const obj = {
    name: "Abbas",
    fatherName: "Ashiq",
    age: 16
}
const {name, fatherName: father, hello = "Matric", age} = obj;
console.log(father);
console.log(age);
console.log(hello);