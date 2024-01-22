class Users {
    constructor(userName, email, password, age) {
        this.userName = userName;
        this.email = email;
        this.password = this.password;
        this.age = age;
    }
    intro () {
        return `Hello! my name is ${this.userName}`
    }
    valThis () {
        return this
    }
    static userPassword() {
        return `${this.password}`;
    }
}

class Developer extends Users {
    constructor(userName, team) {
        super(userName);
        this.team = team;
    }
} 
const userOne = new Users("Abbas", "abbashere786@gmail.com", "atsa1122", 16);
const employeeOne = new Developer("Arpit", "Frontend");
console.log(employeeOne.userName);
console.log(employeeOne.team);
console.log(employeeOne.intro());
console.log(userOne.userName);