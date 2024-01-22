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

const userOne = new Users("Abbas", "abbashere786@gmail.com", "atsa1122", 16);
console.log(userOne.userName);
console.log(userOne.intro());
console.log(userOne.email);
console.log(userOne.valThis());
console.log(userOne.userPassword())