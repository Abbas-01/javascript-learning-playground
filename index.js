function helo(a, b, ...x) {
    let z = a + b;
    x.forEach(num => {
        z += num
    })
    console.log(z);
}
helo(3, 8, 5, 7, 11);