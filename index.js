let x = [1, 2, 3, 4, 5];

x.forEach((a, index, arr) => {
    arr[index] = a * 2;
})
console.log(x)

