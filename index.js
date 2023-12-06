const fahrenheitToCelsius = (arr) => {
    return arr.map((a, i, arr) => {
        return Math.round((a - 32) * 5/9) + "°C"; 
    })
};

const fahrenheitArr = [32, 16, 81, 43];
console.log(fahrenheitToCelsius(fahrenheitArr));
