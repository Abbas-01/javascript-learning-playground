function UsersDetails (name, age, password) {
    this.name =  name;
    this.age = age;
    this.password = password
}
const userOne = new UsersDetails("Abbas", 16, "Hello_World!");
const userTwo = new UsersDetails("Asad", 16, "Hello_Universe!");

console.log(userOne.name);
console.log(userTwo.name);