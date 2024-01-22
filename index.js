class Users {
    constructor(userName, email, age) {
        this.userName = userName;
        this.email = email;
        this.age = age;
    }
    intro () {
        return `Hello! my name is ${this.userName}`
    }
}

const userOne = new Users("Abbas", "abbashere786@gmail.com", 16);
console.log(userOne.userName)
console.log(userOne.intro())
console.log(userOne.email)