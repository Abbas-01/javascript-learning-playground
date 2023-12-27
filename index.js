const myPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            console.log("Async Task")
            resolve({userName: "Abbas", age: 16})
        } else {
            reject("Error: There is an error")
        }
    }, 1000)
})

async function consumeMyPromise () {
       try {
        const data = await myPromise;
        console.log(data);
       } catch (error) {
        console.log(error)
       }
} 

consumeMyPromise()