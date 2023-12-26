function myFunc (user) {
    console.log(`Hello ${user}, Your Reminder!`)
}

const firstRemainder = setInterval(myFunc, 3000, "Abbas");
const secRemainder = setInterval(myFunc, 2000, "Asad");

setTimeout(function clearRemainder () {
    clearInterval(firstRemainder)
}, 3000)
