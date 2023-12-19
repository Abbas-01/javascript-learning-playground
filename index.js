const form = document.querySelector("form");
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    const weight = parseInt(document.querySelector("#weightInput").value)
    const height = parseInt(document.querySelector("#heightInput").value)
    const result = document.querySelector("#result");
    let resultValue;
    if (weight === "" || weight < 0 || isNaN(weight)) {
         result.innerHTML = `Please give us a valid weight ${weight} `
    } else if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give us a valid height ${height} `
    } else {       
        resultValue = (weight / ((height * height) / 10000)).toFixed(1)
    }
    if (resultValue >= 25.0) {
        result.innerHTML = `Your Body Mass Index is ${(weight / ((height * height) / 10000)).toFixed(1)}. This is Considered overweight`
    } else if (resultValue <= 18.4) {
        result.innerHTML = `Your Body Mass Index is ${(weight / ((height * height) / 10000)).toFixed(1)}. This is Considered underweight`
    } else if (resultValue < 25.0 && resultValue > 18.4) {
        result.innerHTML = `Your Body Mass Index is ${(weight / ((height * height) / 10000)).toFixed(1)}. This is Considered normal`
    }
})

