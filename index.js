const body = document.querySelector("body");
const buttons = document.querySelectorAll("li");

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.id === "gray") {
                body.style.backgroundColor = "rgb(177, 177, 177)";
        } else if (e.target.id === "red") {
            body.style.backgroundColor = "rgb(255, 73, 73)";
        } else if (e.target.id === "yellow") {
            body.style.backgroundColor = "rgb(240, 240, 94)";
        } else if (e.target.id === "blue") {
            body.style.backgroundColor = "rgb(66, 66, 255)";
        }
    })
});
