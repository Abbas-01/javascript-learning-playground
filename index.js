function info(name, age, grade, school) {
    return {
        name,
        age,
        grade,
        school
    }
}

const abbas = info("Abbas", 15, "Matric", "AIMS"); 
console.log(abbas);

const asad = info("Asad", 16, "Matric", "AIMS"); 
console.log(asad);

const farzain = info("Farzain", 16, "Matric", "The Smart School"); 
console.log(farzain);

const firstName = "Abbas";
const age = 16;

const person = {
    firstName,
    age
}

console.log(person.firstName);
console.log(person.age);