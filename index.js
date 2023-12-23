const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const subChild = document.querySelector(".subChild");

parent.addEventListener("click", (e) => {
    console.log("Parent")
}, true);
child.addEventListener("click", (e) => {
    console.log("Child")
}, false);
subChild.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Sub Child")
}, false);