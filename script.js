let x = [10, 2, 1, 3, 5];
x.sort((a, b) => {
    console.log(a);
    console.log(b);
    return a - b
});
console.log(x)