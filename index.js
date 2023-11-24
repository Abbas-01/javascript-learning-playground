let myArr = ["Abbas", "Ali", "Azlan"];

let [first, second, third] = myArr;

console.log(first)
first = "Asad";
console.log(myArr)
console.log(first)


let myObj = {
    name: "Abbas",
    father: {
        name: "Ashiq",
        death: 2008
    },
    age: 16
}

let {name : myName, father : {name : fatherName, death},  age} = myObj;
console.log(fatherName);