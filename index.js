let x = [54, 11, 90, 53];

let c = 0;

x.forEach(a => {
    if (c < a) {
        c = a;
    }
})
console.log(c);
