const filterNames = (arr) => {
    return arr.filter(name => {
        return name[0] === "A" ;
    })
} 

const namesArr = ["Abbas", "Tanveer", "Ali", "Asad", "Farzain", "Shaheer"];
console.log(filterNames(namesArr));