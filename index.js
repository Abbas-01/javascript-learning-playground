const myPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("Async Task");
        resolve({userName: "Abbas", age: 16})
    }, 1000)
})

myPromise
.then(function(userData) {
    console.log(userData)
})