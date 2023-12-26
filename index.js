function intro(myName, age) {
    console.log(`My name is ${myName}. I am ${age} years old`)
}
const user1 = setTimeout(intro, 2000, "Abbas", 16);
const user2 = setTimeout(intro, 3000, "Asad", 16);

clearTimeout(user1);