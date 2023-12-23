const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const subChild = document.querySelector(".subChild");

let count = 0;
parent.addEventListener("click", (e) => {
    console.log(count++)
    console.log("Parent")
}, true);
child.addEventListener("click", (e) => {
    console.log(count++)
    console.log("Child")
}, true);
subChild.addEventListener("click", (e) => {
    console.log(count++)
    console.log("Sub Child")
}, true);