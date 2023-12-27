const myPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("Async Task");
        resolve()
    }, 1000)
})

myPromise
.then(function() {
    console.log("Promise Resolved")
})