const myPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({userName: "Abbas", age: 16})
            console.log("Async Task")
        } else {
            reject("Error: There is an error")
        }
    }, 1000)
})

myPromise
.then(function(userData) {
    console.log(userData)
    return userData.userName
})
.then(function(userName){
    console.log(userName)
})
.catch(function(error){
    console.log(error);
})