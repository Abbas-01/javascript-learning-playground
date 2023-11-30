const names = ["Abbas", "Ali", "Asad"];
const cities = ["Matli", "Hyderabad", "Lahore"];

const both = [];
const helo = (namesa, citiesa) =>{
for (let i = 0; i < namesa.length; i++) {
    both.push([]);
    both[i].push(namesa[i]);
    both[i].push(citiesa[i]);
}
return both;
}
console.log(helo(names, cities))