function helo(...x) {
    x.forEach(a => {
        let b = a + 2;
        console.log(b);
    })
}
helo(2, 5, 10);