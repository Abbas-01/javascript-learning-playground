const parent = document.querySelector(".parent");

parent.addEventListener("click", (e) => {
    if (e.target.matches("li")) {
        console.log(`This is ${e.target.id}`);
    }
})