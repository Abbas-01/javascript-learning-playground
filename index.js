const myPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false;
        if (!error) {
            console.log("Async Task")
            resolve({userName: "Abbas", age: 16})
        } else {
            reject("Error: There is an error")
        }
    }, 1000)
})

async function consumeMyPromise () {
       const data = await myPromise 
       console.log(data)
} 

consumeMyPromise()