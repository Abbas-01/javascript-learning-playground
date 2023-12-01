const outerFunc = (a) => {
    const innerFunc = (b) => {
        return a * b;
    }
    return innerFunc;
}
let x = outerFunc(2);
console.log(x(4));