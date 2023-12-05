let x = [7, 4, 2, 9, 4];

let y = [];
x.forEach((a, index, arr) => {
    if (!arr.includes(a, index + 1)) {
        y.push(a);
    }
})
console.log(y);

