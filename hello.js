localStorage.setItem("name", "What")

window.addEventListener("storage", (e) => {
    console.log(`${e.key} : OLD ${e.oldValue} : NEW ${e.newValue}`)
})