localStorage.setItem("name", "Hello");


window.addEventListener("storage", (e) => {
    console.log(`${JSON.stringify(e.storageArea)} ${e.key} : OLD ${e.oldValue} : NEW ${e.newValue}`)
})