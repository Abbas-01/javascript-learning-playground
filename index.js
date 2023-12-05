let x = [7, 4, 2, 9, 4];

let sumOfElements = 0;
let count = 0;
x.forEach((a) => {
    sumOfElements += a;
    count++;
});

if (count === 0) {
    console.log(0);
} else {
    console.log(Math.round(sumOfElements / count));
}


