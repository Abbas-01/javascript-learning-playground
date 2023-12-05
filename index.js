let x = [1, 2, 3, 4, 5];

let y = [];
x.forEach((a) => {
    if (a % 2 !== 0) {
        y.push(a);
    }
})
console.log(y);

