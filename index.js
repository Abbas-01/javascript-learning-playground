const celFahConverter = (temp, unit) => {
    const celToFah = temp * (9/5) + 32;
    const fahToCel =(temp - 32) * 5/9;
    if (unit === "c") {
        return celToFah;
    } else if (unit === "f") {
        return fahToCel;
    }
}

console.log(celFahConverter(10, "f"))