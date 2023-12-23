const btn = document.querySelector("button");
function changeColorRed () {
    btn.style.color = "red";
}
btn.addEventListener("click", changeColorRed)
btn.removeEventListener("click", changeColorRed)