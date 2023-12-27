const myPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({userName: "Abbas", age: 16})
        } else {
            reject("Error: There is an error")
        }
    }, 1000)
})

myPromise
.then(function(userData) {
    console.log(userData.userName)
}).catch(function(error){
    console.log(error);
})