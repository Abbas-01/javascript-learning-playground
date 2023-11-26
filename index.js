class person {
    constructor(fName, lName, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    }
    fullName () {
        return `${this.firstName} ${this.lastName}`
    }
}

let abbas = new person("Abbas", "Ali", 15);
console.log(abbas.fullName())