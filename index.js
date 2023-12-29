const getWeather = () => {
    let weather = true
    return new Promise (function(resolve, reject) {
        if (weather) {
            setTimeout(function() {
                resolve("ainy")
            }, 3000)
        }
    })
}

function weatherIcon (weather) {
    return new Promise(function (resolve, reject) {
        switch (weather) {
           case "Sunny":
            resolve("S")
            break;
            case "Rainy":
                resolve("R")
            break;
            case "Cloudy":
                resolve("C")
            break;
            default :
            reject("Not Found")
            break;
         } 
    })
}
function onSucc (data) {
    console.log("Success " + data)
}
function onFail (error) {
    console.log("Error " + error)
}

getWeather()
.then(weatherIcon)
.then(onSucc, onFail)