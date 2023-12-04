const GCD = (a, b) => {
    if (a < b) {
        let x = a;
        a = b;
        b = x;

    };

    let temp;
    while (b !== 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;

}
console.log(GCD(16, 54));
// console.log(36 % 16);