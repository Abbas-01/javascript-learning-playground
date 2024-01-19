function UsersDetails (name, age, password) {
    this.name =  name;
    this.age = age;
    this.password = password;
    this.greetings = function() {
        return `Hello, My name is ${name}`;
    }
}
const userOne = new UsersDetails("Abbas", 16, "Hello_World!");
const userTwo = new UsersDetails("Asad", 16, "Hello_Universe!");

console.log(userOne.constructor);
console.log(userOne.greetings());
console.log(userTwo.greetings());