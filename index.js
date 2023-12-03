function factorialFunc (num) {
    if (num === 0) {
        return 1;
    }
    
    let factorial = num * factorialFunc(num - 1);
    return factorial
}
console.log(factorialFunc(5));
